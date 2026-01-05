import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaTools, FaMobileAlt } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiDocker, SiKubernetes, SiAmazonwebservices } from 'react-icons/si';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const skills = [
    {
      category: "Frontend Development",
      icon: <FaReact size={28} className="text-[#61DAFB]" />,
      technologies: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
    },
    {
      category: "Backend Development",
      icon: <FaNodeJs size={28} className="text-[#3C873A]" />,
      technologies: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Socket.io", "Mongoose"],
    },
    {
      category: "Database & Storage",
      icon: <SiMongodb size={28} className="text-[#47A248]" />,
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "Cloudinary"],
    },
    {
      category: "DevTools & Others",
      icon: <FaTools size={28} className="text-[#F59E0B]" />,
      technologies: ["Git & GitHub", "Docker", "Postman", "Vercel / Render", "Linux", "Trello/Agile"],
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-background-light dark:bg-background-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">My Expertise</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white leading-tight">Skills & Technologies</h1>
          <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            I work with a diverse range of technologies to bring ideas to life
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {skillGroup.icon}
                </motion.div>
                <h3 className="font-semibold text-lg text-text-light dark:text-white">{skillGroup.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {skillGroup.extraIcons && skillGroup.extraIcons.map((icon, i) => (
                  <div key={i} className="flex items-center justify-center">{icon}</div>
                ))}
              </div>

              <div className="space-y-2">
                {skillGroup.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                    <span className="text-sm text-text-muted-light dark:text-text-muted-dark">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg shadow-black/5">
            <div className="flex items-center gap-2">
              <span className="material-icons-outlined text-primary">local_fire_department</span>
              <span className="font-medium text-text-light dark:text-white">Always Learning</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
              Currently exploring AI/ML and Cloud Architecture
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
