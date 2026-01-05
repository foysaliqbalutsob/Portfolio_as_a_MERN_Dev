import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  // Use motion values for smoother animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth spring animations
  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
    mass: 0.5,
  });

  // Trail cursor with different spring settings for delay effect
  const trailX = useSpring(mouseX, {
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  });

  const trailY = useSpring(mouseY, {
    stiffness: 200,
    damping: 25,
    mass: 0.8,
  });

  // Ring animation with even more delay
  const ringX = useSpring(mouseX, {
    stiffness: 150,
    damping: 20,
    mass: 1.2,
  });

  const ringY = useSpring(mouseY, {
    stiffness: 150,
    damping: 20,
    mass: 1.2,
  });

  const requestRef = useRef();

  useEffect(() => {
    const updateMousePosition = (e) => {
      // Use requestAnimationFrame for smoother updates
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }

      requestRef.current = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setIsVisible(true);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Enhanced hover detection with more element types
    const handleMouseOver = (e) => {
      const target = e.target;
      const interactiveElements = [
        'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT',
        '[role="button"]', '[onclick]', '[cursor-hover]'
      ];

      const isInteractive = interactiveElements.some(selector => {
        if (selector.startsWith('[')) {
          return target.matches(selector) || target.closest(selector);
        }
        return target.tagName === selector || target.closest(selector);
      });

      if (isInteractive) {
        setIsHovering(true);
        setCursorVariant('hover');
      } else if (target.classList.contains('cursor-text') || target.closest('.cursor-text')) {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    // Throttled mouse move for better performance
    let throttleTimer;
    const throttledUpdateMousePosition = (e) => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          updateMousePosition(e);
          throttleTimer = null;
        }, 16); // ~60fps
      }
    };

    document.addEventListener('mousemove', throttledUpdateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', throttledUpdateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mouseX, mouseY]);

  // Enhanced cursor variants with smoother transitions
  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(124, 58, 237, 1)', // primary color
      mixBlendMode: 'difference',
    },
    hover: {
      scale: 1.8,
      backgroundColor: 'rgba(124, 58, 237, 0.8)',
      mixBlendMode: 'difference',
    },
    text: {
      scale: 1.2,
      backgroundColor: 'rgba(124, 58, 237, 0.9)',
      mixBlendMode: 'difference',
    },
  };

  const trailVariants = {
    default: {
      scale: 1,
      opacity: 0.8,
    },
    hover: {
      scale: 2.5,
      opacity: 0.6,
    },
    text: {
      scale: 1.5,
      opacity: 0.7,
    },
  };

  const ringVariants = {
    default: {
      scale: 0,
      opacity: 0,
    },
    hover: {
      scale: 1.5,
      opacity: 0.4,
    },
    text: {
      scale: 1.2,
      opacity: 0.3,
    },
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 28,
          mass: 0.5,
          duration: 0.1,
        }}
      />

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-40 bg-white"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={trailVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
          duration: 0.15,
        }}
      />

      {/* Hover Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-primary rounded-full pointer-events-none z-30"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        variants={ringVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 1.0,
          duration: 0.2,
        }}
      />

      {/* Additional subtle glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-20 bg-primary/10 blur-md"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isHovering ? 0.3 : 0,
          scale: isHovering ? 1.2 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 1.5,
          duration: 0.3,
        }}
      />
    </>
  );
};

export default Cursor;