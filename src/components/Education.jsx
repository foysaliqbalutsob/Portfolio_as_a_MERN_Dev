import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const educationData = [
    {
      degree: "Bachelor of Science in Electronics and Communication Engineering",
      institution: "Hajee Mohammad Danesh Science and Technology University",
      year: "2022 - Ongoing",
      description: "Focused on software engineering, data structures, algorithms, and web development. Graduated with honors and completed a capstone project on full-stack web applications.",
      achievements: ["Attend Project exhibition " ,"Best Capstone Project Award", "GPA: 3.56/4.0"],
      icon: "school"
    },
    {
      degree: "Full-Stack Web Development Certification",
      institution: "Programming Hero Platform",
      year: "2025",
      description: "Comprehensive program covering modern web technologies including React, Node.js, databases, and deployment strategies.",
      achievements: ["Completed 1000+ hours of coursework", "Built 15+ projects", "Mentored junior developers"],
      icon: "code"
    },
    {
      degree: "Tista K R Khadem High School ",
      institution: "City High School",
      year: "2014-2019",
      description: "Strong foundation in mathematics, physics, and computer science fundamentals.",
      achievements: ["Valedictorian", "Science Fair Winner", "meritorious student award"],
      icon: "grade"
    }
  ];

  return (
    <motion.section
      id="education"
      className="py-20 bg-gradient-to-br from-background-light/50 to-background-light dark:from-background-dark/50 dark:to-background-dark relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-bounce"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">My Journey</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white leading-tight">Education</h1>
          <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            My academic background and continuous learning journey in technology
          </p>
        </div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="cursor-hover relative bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-glass dark:bg-glass-dark backdrop-blur-lg border border-white/20 dark:border-white/10 flex items-center justify-center text-primary shadow-lg shadow-black/5">
                    <span className="material-icons-outlined text-3xl">{edu.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-light dark:text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    </div>
                    <div className="text-sm text-text-muted-light dark:text-text-muted-dark font-medium bg-glass dark:bg-glass-dark backdrop-blur-sm border border-white/20 dark:border-white/10 px-3 py-1 rounded-full shadow-sm">
                      {edu.year}
                    </div>
                  </div>

                  <p className="text-text-muted-light dark:text-text-muted-dark mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <span
                        key={achievementIndex}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-glass dark:bg-glass-dark backdrop-blur-sm border border-white/20 dark:border-white/10 text-primary text-sm rounded-full font-medium shadow-sm"
                      >
                        <span className="material-icons-outlined text-sm">check_circle</span>
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Certifications */}
        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-text-light dark:text-white mb-6">Continuous Learning</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "AWS Certified", icon: "cloud" },
              { name: "React Expert", icon: "web" },
              { name: "Node.js Pro", icon: "dns" },
              { name: "UI/UX Design", icon: "design_services" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="cursor-hover bg-glass dark:bg-glass-dark backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/5"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 rounded-lg bg-glass dark:bg-glass-dark backdrop-blur-lg border border-white/20 dark:border-white/10 flex items-center justify-center text-primary mx-auto mb-3 shadow-lg shadow-black/5">
                  <span className="material-icons-outlined text-xl">{cert.icon}</span>
                </div>
                <p className="text-sm font-medium text-text-light dark:text-white">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;