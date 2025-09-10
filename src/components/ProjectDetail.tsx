import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiExternalLink, HiEye } from 'react-icons/hi'
import { FaGithub, FaCalendar, FaUser, FaLightbulb, FaCogs, FaCheckCircle } from 'react-icons/fa'
import { getProjectById } from '../data/projects.ts'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const projectId = id ? parseInt(id, 10) : null
  
  if (!projectId) {
    return <Navigate to="/projects" replace />
  }
  
  const project = getProjectById(projectId)
  
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors duration-300"
          >
            <HiArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              
              {/* Project Meta */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaCalendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FaUser className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <HiEye className="w-5 h-5" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <FaGithub className="w-5 h-5" />
                  Source Code
                </a>
              </div>
            </div>

            <div>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <FaCogs className="w-6 h-6 text-blue-600" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 font-medium shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Project Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <FaCheckCircle className="w-6 h-6 text-green-600" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <FaCheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges and Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaLightbulb className="w-6 h-6 text-yellow-600" />
                Challenges
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <FaCogs className="w-6 h-6 text-blue-600" />
                Solutions
              </h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
                  >
                    <p className="text-gray-700 dark:text-gray-300">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300 inline-flex items-center gap-2"
            >
              <HiExternalLink className="w-4 h-4" />
              View Live Project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail
