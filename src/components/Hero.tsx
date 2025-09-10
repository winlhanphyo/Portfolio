import React from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiMail, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Hero: React.FC = () => {
  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            className="relative mx-auto w-56 h-72 mb-8"
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-1 rounded-2xl shadow-2xl">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
                <img 
                  src="/img/wlp.jpeg" 
                  alt="Win Lhan Phyo Profile"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient for better text contrast */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
          </motion.div>

          {/* Main Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Win Lhan Phyo</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I create amazing web experiences with modern technologies. 
            With over 7 years of experience in software development, I'm passionate about building 
            scalable applications and solving complex problems through clean, efficient code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary flex items-center gap-2"
            >
              View My Work
              <HiArrowDown className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary flex items-center gap-2"
            >
              <HiMail className="w-5 h-5" />
              Get In Touch
            </button>

            <a
              href="/resume.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <HiDownload className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: FaGithub, href: "https://github.com/winlhanphyo", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/win-lhan-phyo-5a14ba1a0/", label: "LinkedIn" },
              { icon: FaFacebook, href: "https://www.facebook.com/winlhanphyo/", label: "Facebook" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <HiArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
