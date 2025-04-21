import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';

const Contact = () => {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: 'success',
    message: ''
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Social Links */}
          <motion.div
            className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-gray-800 shadow-soft h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 shadow-soft h-full">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Let's Connect
              </h3>
              <div className="space-y-6">
                {[
                  { 
                    name: 'Email',
                    href: 'mailto:joshuapavan35@gmail.com',
                    value: 'joshuapavan35@gmail.com',
                    icon: '✉️'
                  },
                  { 
                    name: 'GitHub',
                    href: 'https://github.com/Joshuapavan',
                    value: 'github.com/Joshuapavan',
                    icon: '💻'
                  },
                  { 
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/pavan-kumar-g-906a/',
                    value: 'linkedin.com/in/pavan-kumar-g-906a',
                    icon: '👔'
                  }
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors p-4 rounded-xl hover:bg-gray-800/30"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <div>
                      <p className="font-medium">{link.name}</p>
                      <p className="text-sm text-gray-400">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form
            className="backdrop-blur-sm bg-black/30 p-8 rounded-2xl border border-gray-800 shadow-soft h-full flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              
              try {
                const response = await fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  body: new FormData(e.target),
                });
                
                if (response.ok) {
                  setModalConfig({
                    isOpen: true,
                    type: 'success',
                    message: 'Your message has been sent successfully! I will get back to you soon.'
                  });
                  e.target.reset();
                } else {
                  setModalConfig({
                    isOpen: true,
                    type: 'error',
                    message: 'Something went wrong. Please try again.'
                  });
                }
              } catch (error) {
                setModalConfig({
                  isOpen: true,
                  type: 'error',
                  message: 'Error sending message. Please try again later.'
                });
              }
            }}
          >
            <input 
              type="hidden" 
              name="access_key" 
              value={import.meta.env.VITE_WEB3FORMS_KEY}
            />
            
            <div className="flex-grow flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  ></textarea>
                </div>
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-3 mt-6 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
      <Modal
        isOpen={modalConfig.isOpen}
        type={modalConfig.type}
        message={modalConfig.message}
        onClose={() => setModalConfig(prev => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
};

export default Contact;
