import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const Footer = () => {
  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="py-12 relative z-10">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/90 to-black" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <div className="text-center md:text-left backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-gray-800/50 hover:border-sky-500/30 transition-colors duration-300 group">
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Pavan G
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Building the future, one line of code at a time. Passionate about creating innovative solutions.
            </p>
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-sky-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-gray-800/50 hover:border-sky-500/30 transition-colors duration-300">
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3">
              {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-sky-400 transition-all text-sm flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                >
                  <span className="h-0.5 w-5 bg-gradient-to-r from-sky-400/50 to-blue-500/50 group-hover:from-sky-400 group-hover:to-blue-500 transition-all duration-300" />
                  {item}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="text-center md:text-left backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-gray-800/50 hover:border-sky-500/30 transition-colors duration-300">
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                { icon: '✉️', text: 'Email', href: 'mailto:joshuapavan35@gmail.com' },
                { icon: '💻', text: 'GitHub', href: 'https://github.com/Joshuapavan' },
                { icon: '👔', text: 'LinkedIn', href: 'https://www.linkedin.com/in/pavan-kumar-g-906a/' }
              ].map((link) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sky-400 transition-all text-sm flex items-center gap-3 group"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-400/10 to-blue-500/10 group-hover:from-sky-400/20 group-hover:to-blue-500/20 transition-all duration-300">
                    {link.icon}
                  </span>
                  {link.text}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-left backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-gray-800/50 hover:border-sky-500/30 transition-colors duration-300">
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Location
            </h4>
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/10 to-blue-500/10">
                🌍
              </div>
              <div className="space-y-1">
                <p className="text-gray-300 font-medium">Bengaluru</p>
                <p className="text-gray-400 text-sm">Karnataka, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-800/50 text-center backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Pavan G. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
