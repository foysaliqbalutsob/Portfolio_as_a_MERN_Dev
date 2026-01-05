import React, { useState, useEffect } from 'react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineTool, AiOutlineProject, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('banner');

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['banner', 'about', 'education', 'skills', 'projects', 'hire-me', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (section) => {
    const baseClasses = "cursor-hover px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1";
    if (activeSection === section) {
      return `${baseClasses} text-primary bg-primary bg-opacity-10 dark:bg-primary dark:bg-opacity-20`;
    }
    return `${baseClasses} text-text-muted-light dark:text-text-muted-dark hover:text-primary dark:hover:text-primary hover:bg-primary hover:bg-opacity-5 dark:hover:bg-primary dark:hover:bg-opacity-10`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-glass dark:bg-glass-dark backdrop-blur-xl border-b border-white/10 dark:border-white/5 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer cursor-hover group">
            <img
              src={logo}
              alt="MernDev Logo"
              className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-bold text-xl tracking-tight text-text-light dark:text-white group-hover:text-primary transition-colors">
              Mern<span className="text-primary">Dev</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <a className={getLinkClasses('banner')} href="#banner"><AiOutlineHome /> Home</a>
              <a className={getLinkClasses('about')} href="#about"><AiOutlineUser /> About</a>
              <a className={getLinkClasses('education')} href="#education"><AiOutlineBook /> Education</a>
              <a className={getLinkClasses('skills')} href="#skills"><AiOutlineTool /> Skills</a>
              <a className={getLinkClasses('projects')} href="#projects"><AiOutlineProject /> Projects</a>
              <a className={getLinkClasses('hire-me')} href="#hire-me"><AiOutlineMail /> Hire Me</a>
              <a className={getLinkClasses('contact')} href="#contact"><AiOutlinePhone /> Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="cursor-hover p-2.5 rounded-full bg-gray-100 dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-text-light dark:text-text-dark hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-all duration-300"
              onClick={toggleDarkMode}
            >
              <MdLightMode className="text-xl block dark:hidden" />
              <MdDarkMode className="text-xl hidden dark:block" />
            </button>
            <a className="cursor-hover hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary hover:bg-opacity-90 text-white text-sm font-medium transition-colors shadow-lg shadow-primary shadow-opacity-25" href="#hire-me">
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;