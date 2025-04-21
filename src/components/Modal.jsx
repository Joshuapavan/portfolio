import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) return null;

  const checkmarkPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const errorCircle = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const errorX = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { delay: 0.2, duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={e => e.stopPropagation()}
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-xl max-w-md w-full mx-4"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              {type === 'success' ? (
                <motion.svg
                  viewBox="0 0 50 50"
                  className="w-full h-full"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="url(#successGradient)"
                    strokeWidth="2"
                    fill="none"
                    variants={errorCircle}
                  />
                  <motion.path
                    d="M15 25 L22 32 L35 19"
                    stroke="url(#successGradient)"
                    strokeWidth="3"
                    fill="none"
                    variants={checkmarkPath}
                  />
                  <defs>
                    <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              ) : (
                <motion.svg
                  viewBox="0 0 50 50"
                  className="w-full h-full"
                  initial="hidden"
                  animate="visible"
                >
                  <motion.circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="url(#errorGradient)"
                    strokeWidth="2"
                    fill="none"
                    variants={errorCircle}
                  />
                  <motion.path
                    d="M15 15 L35 35 M35 15 L15 35"
                    stroke="url(#errorGradient)"
                    strokeWidth="3"
                    fill="none"
                    variants={errorX}
                  />
                  <defs>
                    <linearGradient id="errorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {type === 'success' ? 'Message Sent Successfully!' : 'Something Needs Attention'}
            </h3>
            <p className="text-gray-300 mb-6">
              {type === 'success' 
                ? "Thank you for reaching out! I'll get back to you as soon as possible."
                : "There was an issue sending your message. Please try again or contact me directly via email."}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium"
            >
              {type === 'success' ? 'Great!' : 'Try Again'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
