import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
  const [text, setText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const fullText = "vi pavan.portfolio";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl w-full mx-4">
        <motion.div 
          className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Terminal Content */}
          <div className="font-mono">
            <div className="flex items-center text-gray-300">
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-pink-500 mx-2">$</span>
              <span className="text-gray-300">{text}</span>
              <motion.span
                className="inline-block w-3 h-5 bg-gray-300 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>

        {/* Progress Bar */}
        {isTypingDone && (
          <motion.div
            className="h-1 bg-gray-800 rounded-full mt-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Preloader;
