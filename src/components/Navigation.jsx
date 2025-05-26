import { motion, useScroll, useSpring } from 'framer-motion';
import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/scroll';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'technologies', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const menuItems = ['Home', 'About', 'Technologies', 'Projects', 'Contact'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed w-full bg-black/60 backdrop-blur-xl z-50 border-b border-gray-800/50"
      >
        {/* Scroll Progress Indicator */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 origin-left"
          style={{ scaleX }}
        />

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo - Visible on mobile */}
            <motion.div 
              className="md:hidden text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8 lg:space-x-12">
              {menuItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-sky-400'
                      : 'text-gray-300 hover:text-sky-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-md -z-10 bg-sky-400/10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <motion.button 
                className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-400/10 to-blue-500/10 border border-gray-700/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span className={`w-full h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                  }`} />
                  <span className={`w-full h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`w-full h-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                  }`} />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div 
        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden"
        initial={false}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          clipPath: isMenuOpen 
            ? "circle(150% at top right)" 
            : "circle(0% at top right)"
        }}
        transition={{ 
          type: "spring",
          damping: 20,
          stiffness: 100
        }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-2xl font-medium ${
                activeSection === item.toLowerCase()
                ? 'text-sky-400'
                : 'text-gray-300'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20
              }}
              transition={{ 
                delay: isMenuOpen ? index * 0.1 : 0,
                duration: 0.3
              }}
              onClick={(e) => handleClick(e, item.toLowerCase())}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="mobile-nav-active"
                  className="h-0.5 w-full bg-gradient-to-r from-sky-400 to-blue-500 mt-1"
                  transition={{ type: "spring", bounce: 0.25 }}
                />
              )}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navigation;
