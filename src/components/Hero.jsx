import { motion } from 'framer-motion'
import { scrollToSection } from '../utils/scroll'

const Hero = ({ techStack }) => {

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-10 sm:pt-32 sm:pb-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
      >
        {/* Left side - Text content */}
        <motion.div 
          className="flex-1 text-center md:text-left max-w-2xl mt-8 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight"
          >
            <span>Hi, I'm </span>
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Pavan G
            </span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed"
          >
            <span className="block mb-2">Software Engineer with expertise in</span>
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent font-semibold block mb-2">
              Full Stack Development & System Architecture
            </span>
            <span className="text-base sm:text-lg text-gray-400">
              Passionate about crafting scalable solutions and delivering exceptional digital experiences through clean, efficient code
            </span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleClick(e, 'projects')}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 rounded-full border border-gray-600 hover:border-sky-400 text-gray-300 hover:text-sky-400 font-medium transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleClick(e, 'contact')}
            >
              Get In Touch
            </motion.a>
          </motion.div>
          
          {/* Tech stack pills */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 md:mt-12 flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center md:justify-start"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-black/30 backdrop-blur-sm border border-gray-800 text-xs sm:text-sm text-gray-300 flex items-center gap-1.5 sm:gap-2 group transition-all duration-300"
                whileHover={{ 
                  backgroundColor: "rgba(17, 24, 39, 0.7)",
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(96, 165, 250, 0.3)",
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110 ${tech.className || ''}`}
                />
                <span className="text-xs sm:text-sm md:text-base font-medium bg-gradient-to-r from-gray-100 to-gray-300 group-hover:from-sky-400 group-hover:to-blue-500 bg-clip-text text-transparent transition-all duration-300">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Profile Image */}
        <motion.div 
          className="flex-1 max-w-[250px] sm:max-w-[300px] md:max-w-md relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-square rounded-full bg-gradient-to-r from-sky-400 to-blue-500 p-1">
            <img 
              src="https://avatars.githubusercontent.com/u/79299848?v=4"
              alt="Pavan G"
              className="rounded-full w-full h-full object-cover border-4 border-black"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero