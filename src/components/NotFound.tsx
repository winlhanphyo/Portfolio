import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiHome } from 'react-icons/hi'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-9xl font-bold gradient-text mb-8"
        >
          404
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link
          to="/"
          className="btn-primary inline-flex items-center gap-2"
        >
          <HiHome className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound
