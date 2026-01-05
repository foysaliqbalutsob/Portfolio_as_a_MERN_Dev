import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';
import { SiReact, SiNodedotjs, SiJavascript, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';

const Banner = () => {
  const skills = [
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Express', icon: SiExpress },
    { name: 'Firebase', icon: SiFirebase }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="banner"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background-light via-background-light to-primary/5 dark:from-background-dark dark:via-background-dark dark:to-primary/10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(124,58,237,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-primary/15 rounded-full blur-md animate-pulse delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full border border-primary/20"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Available for new projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-light dark:text-white leading-tight"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Hi, I'm{' '}
                <motion.span
                  className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Foysal
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-xl sm:text-2xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                variants={itemVariants}
              >
                Full-Stack Developer crafting innovative digital experiences with modern technologies
              </motion.p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-full text-sm font-medium text-text-light dark:text-text-dark"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(124, 58, 237, 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <skill.icon className="text-primary text-lg" />
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
            >
              <motion.a
                href="#hire-me"
                className="cursor-hover group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Hire Me</span>
                <motion.span
                  className="material-icons-outlined text-xl group-hover:translate-x-1 transition-transform"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  work
                </motion.span>
              </motion.a>
              <motion.a
                href="#projects"
                className="cursor-hover group inline-flex items-center gap-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-105 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <motion.span
                  className="material-icons-outlined text-xl group-hover:rotate-12 transition-transform"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  work
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-text-muted-light dark:text-text-muted-dark">Projects</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-text-muted-light dark:text-text-muted-dark">Years Exp</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-text-muted-light dark:text-text-muted-dark">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Profile Image Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl scale-110"></div>

                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-700/50 shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Foysal - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay for customization note */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <span className="material-icons-outlined text-2xl mb-1">photo_camera</span>
                      <p className="text-sm font-medium">Explore Me</p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-icons-outlined text-white text-sm">code</span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="material-icons-outlined text-white text-sm">rocket</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <SiReact className="text-primary text-2xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <SiNodedotjs className="text-primary text-2xl" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 w-16 h-16 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  x: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <SiJavascript className="text-primary text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="cursor-hover material-icons-outlined text-4xl text-primary cursor-pointer hover:text-primary/80 transition-colors">
              expand_more
            </span>
          </motion.div>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark mt-2 text-center">Scroll to explore</p>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
    </motion.section>
  );
};

export default Banner;