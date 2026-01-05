import React from 'react';

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
      <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative order-1 lg:order-1">
        <div className="absolute inset-0 bg-primary bg-opacity-20 blur-[100px] rounded-full pointer-events-none transform translate-y-10"></div>
        <div className="relative z-10 w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-card-dark">
          <img
            alt="Stylized portrait of a developer wearing glasses and a hoodie"
            className="w-full h-full object-cover object-center transform transition duration-500 hover:scale-105"
            src="https://i.ibb.co.com/rGLGYj2C/image.png"
          />
        </div>
      </div>
      <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-2">
        <div className="space-y-2 w-full">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm">Introduction</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white leading-tight">About Me</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="group bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center">
            <span className="material-icons-outlined text-2xl mb-2 text-primary group-hover:scale-110 transition-transform">badge</span>
            <h3 className="font-semibold text-lg text-text-light dark:text-white">Experience</h3>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">3 Years Working</p>
          </div>
          <div className="group bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center">
            <span className="material-icons-outlined text-2xl mb-2 text-primary group-hover:scale-110 transition-transform">work_outline</span>
            <h3 className="font-semibold text-lg text-text-light dark:text-white">Completed</h3>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">150+ Projects</p>
          </div>
          <div className="group bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col items-center justify-center">
            <span className="material-icons-outlined text-2xl mb-2 text-primary group-hover:scale-110 transition-transform">headset_mic</span>
            <h3 className="font-semibold text-lg text-text-light dark:text-white">Support</h3>
            <p className="text-xs text-text-muted-light dark:text-text-muted-dark mt-1">Online 24/7</p>
          </div>
        </div>
        <div className="max-w-none text-text-muted-light dark:text-gray-300 leading-relaxed text-base sm:text-lg space-y-4">
          <p>
            Proficient in <span className="text-text-light dark:text-white font-medium border-b border-primary border-opacity-30">React.js, Next.js, JavaScript, Node.js</span>, and <span className="text-text-light dark:text-white font-medium border-b border-primary border-opacity-30">Python</span>, I build scalable, high-performance applications.
          </p>
          <p>
            Skilled in <span className="text-text-light dark:text-white font-medium border-b border-primary border-opacity-30">HTMl, ES6+</span>, and <span className="text-text-light dark:text-white font-medium border-b border-primary border-opacity-30">Tailwind</span>, with expertise in <span className="text-text-light dark:text-white font-medium border-b border-primary border-opacity-30">MongoDB, Firebase, and Stripe</span> , I deliver innovative real-time systems and impactful solutions.
          </p>
        </div>
        <a className="inline-flex items-center gap-3 bg-glass dark:bg-glass-dark backdrop-blur-xl text-text-light dark:text-white border-2 border-white/30 dark:border-white/20 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/20 group" href="#">
          <span>Download Resume</span>
          <span className="material-icons-outlined text-xl group-hover:animate-bounce">description</span>
        </a>
      </div>
    </section>
  );
};

export default About;