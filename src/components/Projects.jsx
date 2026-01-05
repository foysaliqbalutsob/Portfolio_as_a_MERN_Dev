import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB","FireBase", "Stripe", "Tailwind CSS", "JavaScript"],
      github_clientSide: "https://github.com/foysaliqbalutsob/assignment_11_Client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/assignment_11_server.git",
      demo: "https://hr-emoloyee-site.web.app",
      image: "https://i.ibb.co.com/RGxP2phb/Screenshot-2026-01-05-222839.png"
    },
    {
      title: "Community Cleanliness & Issue Reporting Portal",
      description: "A web application that enables users to report local cleanliness issues, track resolutions, and engage with community initiatives to maintain a clean environment.",
      technologies: [ "React", "Node.js", "MongoDB","FireBase" ,"Tailwind CSS","npm package" , "JavaScript"],
      github_clientSide: "https://github.com/foysaliqbalutsob/assigment--10-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/new-assignment-10-server.git",
      demo: "https://my-conceptual-project.web.app/",
      image: "https://i.ibb.co.com/8Lc87FTB/Screenshot-2026-01-05-221216.png"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "JavaScript"],
      github_clientSide: "https://github.com/foysaliqbalutsob/weather-dashboard-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/weather-dashboard-server.git",
      demo: "#",
      image: "https://picsum.photos/400/250?random=3"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
      github_clientSide: "https://github.com/foysaliqbalutsob/portfolio-client.git",
      github_serverSide: null,
      demo: "#",
      image: "https://picsum.photos/400/250?random=4"
    },
    {
      title: "Productive Application",
      description: "A productive application that allows users to manage tasks, set reminders, and track their productivity over time with insightful analytics.",
      technologies: ["React", "Socket.IO", "Node.js", "MongoDB", "Express"],
      github_clientSide: "https://github.com/foysaliqbalutsob/chat-app-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/chat-app-server.git",
      demo: "https://wonderful-marshmallow-0750f4.netlify.app/",
      image: "https://i.ibb.co.com/Kxk5pXBH/Screenshot-2026-01-05-230958.png"
    },
    {
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support, SEO optimization, and content management system.",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel", "TypeScript"],
      github_clientSide: "https://github.com/foysaliqbalutsob/blog-platform-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/blog-platform-server.git",
      demo: "#",
      image: "https://picsum.photos/400/250?random=6"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration.",
      technologies: ["React", "Node.js", "GraphQL", "PostgreSQL", "Docker"],
      github_clientSide: "https://github.com/foysaliqbalutsob/social-dashboard-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/social-dashboard-server.git",
      demo: "#",
      image: "https://picsum.photos/400/250?random=7"
    },
    {
      title: "Learning Management System",
      description: "Complete LMS with course creation, student progress tracking, video streaming, and assessment tools.",
      technologies: ["React", "Express", "MongoDB", "AWS S3", "JWT"],
      github_clientSide: "https://github.com/foysaliqbalutsob/lms-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/lms-server.git",
      demo: "#",
      image: "https://picsum.photos/400/250?random=8"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with workout plans, progress tracking, and social features.",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
      github_clientSide: "https://github.com/foysaliqbalutsob/fitness-app-client.git",
      github_serverSide: null,
      demo: "#",
      image: "https://picsum.photos/400/250?random=9"
    },
    {
      title: "Restaurant Management System",
      description: "Complete restaurant management solution with POS, inventory, reservations, and customer management.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Pusher", "Stripe"],
      github_clientSide: "https://github.com/foysaliqbalutsob/restaurant-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/restaurant-server.git",
      demo: "#",
      image: "https://picsum.photos/400/250?random=10"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and search platform with advanced filters, virtual tours, and agent management.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Cloudinary"],
      github_clientSide: "https://github.com/foysaliqbalutsob/real-estate-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/real-estate-server.git",
      demo: "#",
      image: "https://picsum.photos/400/250?random=11"
    },
    {
      title: "Music Streaming App",
      description: "Music streaming platform with playlist management, audio visualization, and social sharing features.",
      technologies: ["React", "Node.js", "Redis", "WebRTC", "Socket.IO"],
      github_clientSide: "https://github.com/foysaliqbalutsob/music-streaming-client.git",
      github_serverSide: "https://github.com/foysaliqbalutsob/music-streaming-server.git",
      demo: "#",
      image: "https://picsum.photos/400/250?random=12"
    }
  ];

  // Pagination logic
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.section
      id="projects"
      className="py-20 bg-card-light dark:bg-card-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">My Work</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white leading-tight">Featured Projects</h1>
          <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            A showcase of my recent work and passion projects
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
              variants={projectVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-text-light dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 dark:bg-primary/20 text-primary text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.github_clientSide && (
                    <a
                      href={project.github_clientSide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-hover flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <span className="material-icons-outlined text-lg">code</span>
                      Client
                    </a>
                  )}
                  {project.github_serverSide && (
                    <a
                      href={project.github_serverSide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-hover flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <span className="material-icons-outlined text-lg">dns</span>
                      Server
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-hover flex items-center gap-2 px-3 py-2 bg-primary text-white hover:bg-primary/90 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    <span className="material-icons-outlined text-lg">visibility</span>
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 mb-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-hover px-3 py-2 bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white rounded-lg text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-icons-outlined text-lg">chevron_left</span>
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`cursor-hover px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="cursor-hover px-3 py-2 bg-gray-100 dark:bg-card-dark text-text-light dark:text-text-dark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white rounded-lg text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-icons-outlined text-lg">chevron_right</span>
            </button>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="#"
            className="cursor-hover inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
          >
            <span>View All Projects</span>
            <span className="material-icons-outlined text-xl">arrow_forward</span>
          </a>
        </div>
      </div>
      </motion.section>
    );
  };

  export default Projects;