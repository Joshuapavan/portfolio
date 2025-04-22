import { motion } from 'framer-motion';
import { useState } from 'react';
import { scrollToSection } from '../utils/scroll';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed w-full bg-black/80 backdrop-blur-lg z-50 py-4 border-b border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end md:justify-center items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-sky-400 relative group text-sm lg:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleClick(e, item.toLowerCase())}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 group-hover:w-full transition-all duration-300"/>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - Hide initially */}
          <button 
            className="md:hidden p-2 z-50 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-300 transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-300 transform transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-300 transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          <motion.div 
            className="fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-lg border-l border-gray-800 pt-20 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: isMenuOpen ? 0 : "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col space-y-4 p-4">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors py-2 px-4 text-lg"
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
