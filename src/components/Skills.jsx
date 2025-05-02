import { motion } from 'framer-motion';

const Skills = ({ techStack }) => {
  const categories = {
    "Backend": ["Java", "Spring Boot", "Ruby on Rails", "Node.js", "Express"],
    "Frontend": ["React", "Flutter", "Tailwind CSS"],
    "Mobile": ["Flutter", "Kotlin", "Dart"],
    "Database": ["MySQL", "PostgreSQL", "Redis"],
    "DevOps": ["Docker", "Git", "Linux"],
    "Tools": ["Postman"]
  };

  const getCategoryTechs = (categoryName) => {
    return techStack.filter(tech => categories[categoryName].includes(tech.name));
  };

  return (
    <section id="technologies" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent leading-tight relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technologies, I've Worked With
        </motion.h2>

        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {Object.keys(categories).map((category, categoryIndex) => (
            <div key={category} className="relative backdrop-blur-sm bg-black/20 p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-800/50">
              <motion.div 
                className="absolute -left-1 sm:-left-2 top-0 h-full w-0.5 sm:w-1 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              />
              
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <span className="text-2xl sm:text-3xl">{category}</span>
                <div className="h-px flex-grow bg-gradient-to-r from-sky-400/50 to-transparent" />
              </motion.h3>

              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {getCategoryTechs(category).map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + categoryIndex * 0.2 }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    className="relative bg-black/40 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-xl text-center border border-gray-800 hover:border-sky-500/30 transition-all duration-300 group hover:bg-gradient-to-b hover:from-gray-800/30 hover:to-transparent"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className={`relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transform group-hover:scale-110 transition-all duration-300 ${tech.className || ''}`}
                        />
                      </div>
                      <motion.span 
                        className="text-sm sm:text-base text-gray-300 font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech.name}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
