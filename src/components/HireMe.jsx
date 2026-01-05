import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const HireMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Configure SweetAlert theme
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');

    Swal.mixin({
      customClass: {
        popup: isDark ? 'bg-card-dark border border-gray-700' : 'bg-card-light border border-gray-200',
        title: isDark ? 'text-white' : 'text-text-light',
        htmlContainer: isDark ? 'text-text-muted-dark' : 'text-text-muted-light',
        confirmButton: 'bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40',
        cancelButton: 'bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300'
      },
      buttonsStyling: false,
      background: isDark ? '#15151A' : '#FFFFFF',
      color: isDark ? '#E5E7EB' : '#1F2937'
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details about your project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are not configured.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not specified',
        project_type: formData.projectType || 'Not specified',
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        message: formData.message,
        to_email: 'foysaliqbalutsob2202113@gmail.com',
        subject: `Hiring Inquiry: ${formData.projectType || 'Project'} - ${formData.name}`
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      await Swal.fire({
        icon: 'success',
        title: 'Hiring Request Sent!',
        text: 'Thank you for considering me for your project. I\'ll review your requirements and get back to you within 24 hours!',
        confirmButtonText: 'Great!',
        timer: 4000,
        timerProgressBar: true,
        showClass: {
          popup: 'animate__animated animate__fadeInUp'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown'
        }
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      setErrors({});

    } catch (error) {
      console.error('Hiring request failed:', error);

      await Swal.fire({
        icon: 'error',
        title: 'Failed to Send Request',
        text: 'Something went wrong. Please try again or contact me directly.',
        confirmButtonText: 'Try Again',
        footer: '<a href="mailto:foysaliqbalutsob2202113@gmail.com" class="text-primary hover:underline">Or send email directly</a>',
        showClass: {
          popup: 'animate__animated animate__shakeX'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Platform',
    'API Development',
    'UI/UX Design',
    'Full-Stack Development',
    'Frontend Development',
    'Backend Development',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Discuss on call'
  ];

  const timelines = [
    'ASAP (Rush)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  return (
    <motion.section
      id="hire-me"
      className="py-20 bg-gradient-to-br from-primary/5 via-background-light to-primary/10 dark:from-primary/5 dark:via-background-dark dark:to-primary/10 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/15 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light dark:text-white mb-6"
          >
            Ready to{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Work Together?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-muted-light dark:text-text-muted-dark max-w-3xl mx-auto leading-relaxed"
          >
            Let's turn your vision into reality. I'm available for freelance projects,
            full-time opportunities, and collaborations. Tell me about your project!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-glass dark:bg-glass-dark backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6">
                Why Hire Me?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-outlined text-primary text-2xl">code</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-white mb-1">
                      Full-Stack Expertise
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      Modern web technologies from concept to deployment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-outlined text-primary text-2xl">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-white mb-1">
                      Fast Delivery
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      Efficient workflow with regular updates and quick turnaround
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-outlined text-primary text-2xl">support_agent</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-light dark:text-white mb-1">
                      Ongoing Support
                    </h4>
                    <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                      Post-launch maintenance and feature enhancements
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-glass dark:bg-glass-dark backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:border-gray-700/50"
            >
              <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:foysaliqbalutsob2202113@gmail.com?subject=Hiring Inquiry"
                  className="cursor-hover flex items-center gap-4 p-4 bg-primary/10 hover:bg-primary/20 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <span className="material-icons-outlined text-white text-xl">email</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-light dark:text-white group-hover:text-primary transition-colors">
                      foysaliqbalutsob2202113@gmail.com
                    </p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      Send me an email directly
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                    <span className="material-icons-outlined text-primary text-xl">schedule</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-light dark:text-white">
                      Response Time
                    </p>
                    <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                      Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-glass dark:bg-glass-dark backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:border-gray-700/50"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-text-light dark:text-white mb-8"
            >
              Start Your Project
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`cursor-hover w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`cursor-hover w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="cursor-hover w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="cursor-hover w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="cursor-hover w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                  Preferred Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="cursor-hover w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select timeline</option>
                  {timelines.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-light dark:text-white mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`cursor-hover w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  }`}
                  placeholder="Tell me about your project, goals, requirements, and any specific features you need..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="cursor-hover w-full bg-primary hover:bg-primary/90 disabled:bg-primary/70 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending Request...
                  </>
                ) : (
                  <>
                    <span>Send Hiring Request</span>
                    <span className="material-icons-outlined text-xl">send</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HireMe;