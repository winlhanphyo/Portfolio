import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Skills from './Skills.tsx'
import Contact from './Contact.tsx'
import Footer from './Footer.tsx'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
