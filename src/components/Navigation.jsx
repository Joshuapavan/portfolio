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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-black/80 backdrop-blur-lg z-50 py-4 border-b border-gray-800"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          Pavan G
        </motion.h1>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-300 transform transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-300 transform transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-300 transform transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleClick(e, item.toLowerCase())}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"/>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-gray-800 py-4 ${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center space-y-4`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        >
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-400 transition-colors px-4 py-2 w-full text-center"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleClick(e, item.toLowerCase())}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
