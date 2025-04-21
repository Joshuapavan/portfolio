import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
        <div className="container mx-auto px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Online Proctoring System",
                description: "A comprehensive proctoring system leveraging AI for online examination monitoring.",
                techStack: ["React", "Tailwind", "Python", "Flask", "MySQL", "Docker"],
                links: {
                  frontend: "https://github.com/Joshuapavan/Proctoring-AI-FE",
                  backend: "https://github.com/Joshuapavan/Proctoring-AI-BE"
                }
              },
              {
                title: "Grandeur - Car Rental Platform",
                description: "A car rental platform where users can browse and rent vehicles. Features include admin management and automated email notifications.",
                techStack: ["Ruby", "Rails", "MySQL", "Active Admin", "Action Mailer", "Devise"],
                links: {
                  frontend: "https://github.com/Joshuapavan/GRANDEUR-FrontEnd",
                  backend: "https://github.com/Joshuapavan/Grandeur-Backend-Rails"
                }
              },
              {
                title: "Sudoku Solver API",
                description: "An API service that solves Sudoku puzzles. Takes a two-dimensional array input and returns the solution.",
                techStack: ["Ruby", "Rails"],
                links: {
                  code: "https://github.com/Joshuapavan/Sudoku-Solver-API"
                }
              },
              {
                title: "Pager - Chat Application",
                description: "An Android chat application developed during the pandemic to stay connected with friends.",
                techStack: ["Java", "Android SDK", "Material UI", "Firebase", "Retrofit"],
                links: {
                  code: "https://github.com/Joshuapavan/Pager"
                }
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-soft"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.links.frontend && (
                      <motion.a
                        href={project.links.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Frontend
                      </motion.a>
                    )}
                    {project.links.backend && (
                      <motion.a
                        href={project.links.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Backend
                      </motion.a>
                    )}
                    {project.links.code && (
                      <motion.a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;
