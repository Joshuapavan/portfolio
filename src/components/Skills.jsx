import { motion } from 'framer-motion';

const Skills = ({ techStack }) => {
  return (
    <>
        <section id="technologies" className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technologies, I've Worked With
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {techStack.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        className="bg-black/30 backdrop-blur-sm p-6 rounded-xl text-center border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-300 group"
                    >
                        <div className="flex flex-col items-center gap-4">
                        <img 
                            src={tech.logo} 
                            alt={tech.name}
                            className={`w-12 h-12 group-hover:scale-110 transition-transform duration-300 ${tech.className || ''}`}
                        />
                        <span className="text-gray-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:to-blue-500 transition-colors duration-300">
                            {tech.name}
                        </span>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
};

export default Skills;
