import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDocker,
  FaAws,
  FaBootstrap,
  FaAngular,
  FaVuejs,
  FaLaravel
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiFlask,
  SiDjango,
  SiFirebase,
  SiGooglecloud,
  SiMaterialdesign,
  SiGo,
  SiIonic,
  SiReact,
  SiMysql,
  SiRedux,
  SiRabbitmq,
  SiApachekafka
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  level: number
  category: string
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "React", icon: FaReact, level: 95, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, level: 90, category: "Frontend" },
    { name: "Angular", icon: FaAngular, level: 85, category: "Frontend" },
    { name: "Vue.js", icon: FaVuejs, level: 82, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, category: "Frontend" },
    { name: "Bootstrap", icon: FaBootstrap, level: 85, category: "Frontend" },
    { name: "Material UI", icon: SiMaterialdesign, level: 80, category: "Frontend" },
    { name: "Redux", icon: SiRedux, level: 88, category: "Frontend" },
    { name: "React Native", icon: SiReact, level: 83, category: "Mobile" },
    { name: "Ionic", icon: SiIonic, level: 78, category: "Mobile" },
    { name: "Node.js", icon: FaNodeJs, level: 88, category: "Backend" },
    { name: "Python", icon: FaPython, level: 85, category: "Backend" },
    { name: "Flask", icon: SiFlask, level: 80, category: "Backend" },
    { name: "Django", icon: SiDjango, level: 82, category: "Backend" },
    { name: "Laravel", icon: FaLaravel, level: 79, category: "Backend" },
    { name: "Golang", icon: SiGo, level: 75, category: "Backend" },
    { name: "RabbitMQ", icon: SiRabbitmq, level: 73, category: "Backend" },
    { name: "Apache Kafka", icon: SiApachekafka, level: 70, category: "Backend" },
    { name: "MongoDB", icon: SiMongodb, level: 85, category: "Database" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 80, category: "Database" },
    { name: "MySQL", icon: SiMysql, level: 83, category: "Database" },
    { name: "Firebase", icon: SiFirebase, level: 85, category: "Database" },
    { name: "Redis", icon: SiRedis, level: 75, category: "Database" },
    { name: "Git", icon: FaGitAlt, level: 90, category: "Tools" },
    { name: "Docker", icon: FaDocker, level: 78, category: "Tools" },
    { name: "AWS", icon: FaAws, level: 75, category: "Tools" },
    { name: "Google Cloud", icon: SiGooglecloud, level: 72, category: "Tools" },
  ]

  const categories = ["All", "Frontend", "Mobile", "Backend", "Database", "Tools"]
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card p-6 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.category}
                  </p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                  <span className="text-gray-900 dark:text-white font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
