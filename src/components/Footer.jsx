import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const Footer = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="py-12 bg-gradient-to-b from-transparent to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Pavan G
            </motion.h3>
            <p className="text-gray-400 text-sm">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-2">
              <motion.a
                href="mailto:joshuapavan35@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center justify-center md:justify-start gap-2"
                whileHover={{ x: 5 }}
              >
                <span>✉️</span> Email
              </motion.a>
              <motion.a
                href="https://github.com/Joshuapavan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center justify-center md:justify-start gap-2"
                whileHover={{ x: 5 }}
              >
                <span>💻</span> GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/pavan-kumar-g-906a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm flex items-center justify-center md:justify-start gap-2"
                whileHover={{ x: 5 }}
              >
                <span>👔</span> LinkedIn
              </motion.a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Location</h4>
            <p className="text-gray-400 text-sm">
              Bengaluru, Karnataka<br />
              India
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Pavan G. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
