import { motion } from 'framer-motion';


const About = ({ experiences }) => {
  return (
    <section id="about" className="py-20">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="max-w-3xl mx-auto text-gray-300 space-y-6 relative mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-2xl shadow-soft border border-gray-700/50">
              Dynamic and Versatile Software Engineer with a proven track record in Backend Development. 
              With over 3 years of hands-on experience, I am eager to bring my passion for problem-solving 
              and commitment to excellence to a forward-thinking team, contributing to cutting-edge projects 
              and embracing new challenges.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            className="max-w-4xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </h3>
            <div className="relative space-y-12">
              {/* Vertical Line - Show on all screens */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sky-400 to-blue-500 opacity-20" />

              {/* Timeline Items */}
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12 md:pl-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                    {/* Dot - Show on all screens */}
                    <div className="absolute left-2 md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-blue-500" />
                    
                    {/* Date */}
                    <div className="w-full md:w-1/2 text-left md:text-right md:pr-8">
                      <span className="text-blue-400 font-semibold">{item.date}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="w-full md:w-1/2 md:pl-8">
                      <div className="backdrop-blur-sm bg-gray-800/30 p-4 md:p-6 rounded-xl border border-gray-700/50 shadow-soft">
                        <div className="flex items-center gap-4 mb-4">
                          <img 
                            src={item.logo} 
                            alt={item.company}
                            className={`object-contain rounded-lg ${
                              item.company === "CognitiveClouds" ? "w-12 h-12 sm:w-16 sm:h-16" : "w-10 h-10 sm:w-12 sm:h-12"
                            }`}
                          />
                          <div>
                            <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                            <h5 className="text-blue-400">{item.company}</h5>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  );
};

export default About;
