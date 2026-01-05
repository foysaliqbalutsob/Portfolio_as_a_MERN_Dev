import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Configure SweetAlert theme
  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');

    // Configure SweetAlert theme to match site
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
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
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug: Log environment variables (remove in production)
      console.log('🔍 EmailJS Config Debug:');
      console.log('Service ID:', serviceId);
      console.log('Template ID:', templateId);
      console.log('Public Key:', publicKey ? 'Set ✅' : 'Not set ❌');

      // Check if all required environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        console.error('❌ EmailJS environment variables are not configured. Please check your .env file.');
        throw new Error('EmailJS environment variables are not configured. Please check your .env file.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'foysaliqbalutsob2202113@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success message with SweetAlert
      await Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully!',
        text: 'Thank you for reaching out. I\'ll get back to you soon!',
        confirmButtonText: 'Great!',
        timer: 3000,
        timerProgressBar: true,
        showClass: {
          popup: 'animate__animated animate__fadeInUp'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown'
        }
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

    } catch (error) {
      console.error('Email sending failed:', error);

      // Error message with SweetAlert
      await Swal.fire({
        icon: 'error',
        title: 'Failed to Send Message',
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

  const contactInfo = [
    {
      icon: 'email',
      title: 'Email',
      value: 'foysaliqbalutsob2202113@gmail.com',
      link: 'mailto:foysaliqbalutsob2202113@gmail.com'
    },
    {
      icon: 'phone',
      title: 'Phone',
      value: '+880 1751799866',
      link: 'tel:+8801751799866'
    },
    {
      icon: 'location_on',
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: ''
    },
    {
      icon: 'schedule',
      title: 'Available',
      value: 'Mon-Fri, 9AM-6PM PST',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: 'code', name: 'GitHub', link: 'https://github.com/foysaliqbalutsob' },
    { icon: 'work', name: 'LinkedIn', link: 'www.linkedin.com/in/foysal-iqbal-utsob2202113' },
    { icon: 'article', name: 'Medium', link: '#' },
    { icon: 'camera_alt', name: 'Instagram', link: '#' }
  ];

  return (
    <motion.section
      id="contact"
      className="py-20 bg-background-light dark:bg-background-dark"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
          <h1 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white leading-tight">Let's Work Together</h1>
          <p className="mt-4 text-lg text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-text-light dark:text-white mb-6">Contact Information</h3>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <span className="material-icons-outlined text-xl">{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-light dark:text-white">{info.title}</h4>
                      <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="text-2xl font-semibold text-text-light dark:text-white mb-6">Follow Me</h3>
              <motion.div
                className="flex gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 rounded-xl bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 flex items-center justify-center text-text-light dark:text-text-dark hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="material-icons-outlined text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="bg-glass dark:bg-glass-dark backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 shadow-lg shadow-black/5"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-2xl font-semibold text-text-light dark:text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`cursor-text w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-xl text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-700 focus:border-primary'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <span className="material-icons-outlined text-sm">error</span>
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`cursor-text w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-xl text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-gray-200 dark:border-gray-700 focus:border-primary'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                      <span className="material-icons-outlined text-sm">error</span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-light dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`cursor-text w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-xl text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                    errors.subject
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 dark:border-gray-700 focus:border-primary'
                  }`}
                  placeholder="Project inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <span className="material-icons-outlined text-sm">error</span>
                    {errors.subject}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`cursor-text w-full px-4 py-3 bg-background-light dark:bg-background-dark border rounded-xl text-text-light dark:text-text-dark placeholder-text-muted-light dark:placeholder-text-muted-dark focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-200 dark:border-gray-700 focus:border-primary'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                    <span className="material-icons-outlined text-sm">error</span>
                    {errors.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-hover w-full bg-primary hover:bg-primary/90 disabled:bg-primary/70 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      </motion.section>
    );
  };

  export default Contact;