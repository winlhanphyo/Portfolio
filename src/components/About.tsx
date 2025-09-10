import React from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiLightBulb, HiUsers } from 'react-icons/hi'

const About: React.FC = () => {
  const features = [
    {
      icon: HiCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices and design patterns."
    },
    {
      icon: HiLightBulb,
      title: "Problem Solving",
      description: "Analytical thinking to break down complex problems into manageable solutions."
    },
    {
      icon: HiUsers,
      title: "Collaboration",
      description: "Strong communication skills and experience working in agile development teams."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Hello! I'm a passionate developer who loves to create.
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With over 7 years of experience in web development, I specialize in creating 
              modern, responsive applications using cutting-edge technologies. My journey 
              started with a curiosity about how websites work, and it has evolved into a 
              passion for building digital experiences that make a difference.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Throughout my career, I've had the privilege of working with amazing teams at 
              Meta Team Myanmar, Orion Tech Myanmar, and Modern Future companies. I enjoy working 
              across the full stack, from designing intuitive user interfaces to architecting 
              robust backend systems. I'm always eager to learn new technologies and take on 
              challenges that push the boundaries of what's possible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">7+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
