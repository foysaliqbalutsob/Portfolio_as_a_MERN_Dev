import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 seconds loading

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background-light dark:bg-background-dark flex items-center justify-center z-50">
        {/* Glass Morphism Loading Screen */}
        <div className="relative">
          {/* Background Blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-3xl scale-110"></div>
          
          {/* Glass Card */}
          <div className="relative bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-12 shadow-2xl shadow-primary/20">
            {/* Animated Background Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-primary/20 rounded-full blur-lg animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/15 rounded-full blur-md animate-bounce"></div>
            
            {/* Content */}
            <div className="text-center space-y-6">
              {/* Logo/Icon */}
              <div className="w-20 h-20 mx-auto bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center">
                <span className="material-icons-outlined text-primary text-4xl">web</span>
              </div>
              
              {/* Welcome Text */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-text-light dark:text-white">
                  Welcome to my{' '}
                  <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    Portfolio
                  </span>
                </h1>
                <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                  Crafting digital experiences with passion
                </p>
              </div>
              
              {/* Loading Animation */}
              <div className="flex justify-center items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-primary rounded-full animate-bounce delay-200"></div>
              </div>
              
              {/* Loading Text */}
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark animate-pulse">
                Loading amazing things...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SmoothScroll>
      <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans transition-colors duration-300 min-h-screen flex flex-col">
        <Cursor />
        <Navbar />
        <Banner />
        <About />
        <Education />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;
