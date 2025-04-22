import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Websites = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const rotationDelay = 5000;

  const websites = [
    {
        title: "Krupashraya",
        url: "https://krupashraya.vercel.app/",
        description: "Trust"
    },
    {
        title: "Blissara Consultancy",
        url: "https://www.blissaraconsultancy.com/",
        description: "Professional consultancy website"
      },
    {
      title: "Learning Management System",
      url: "https://lms-fe-eight.vercel.app/",
      description: "Educational platform interface"
    },
    {
        title: "Infynyx",
        url: "https://infynyx.vercel.app/",
        description: "Tech startup website"
    },
  ].reverse();

  useEffect(() => {
    if (selectedId) return; // Don't rotate when a website is selected

    const rotationInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % websites.length);
    }, rotationDelay);

    return () => clearInterval(rotationInterval);
  }, [selectedId, websites.length]);

  return (
    <section id="websites" className="py-20">
      <div className="container mx-auto px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl" />
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Live Websites
        </motion.h2>
        
        <div className="relative h-[500px] flex items-center justify-center mb-20">
          {websites.map((site, index) => {
            const adjustedIndex = (index - currentIndex + websites.length) % websites.length;
            
            return (
              <motion.div
                key={site.title}
                layoutId={site.title}
                onClick={() => setSelectedId(selectedId === site.title ? null : site.title)}
                initial={{ scale: 0.8, y: 50 * adjustedIndex }}
                animate={{
                  scale: selectedId === site.title ? 1 : 0.8,
                  y: selectedId === site.title ? 0 : 50 * adjustedIndex,
                  zIndex: selectedId === site.title ? 2 : websites.length - adjustedIndex,
                }}
                transition={{ duration: 0.5 }}
                className="absolute w-full max-w-2xl cursor-pointer"
                style={{
                  top: selectedId === site.title ? '50%' : '0%',
                  transform: selectedId === site.title ? 'translateY(-50%)' : 'none'
                }}
              >
                <div className="bg-black/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-soft">
                  <div className="aspect-video w-full relative bg-gray-900">
                    <img
                      src={`https://api.microlink.io?url=${site.url}&screenshot=true&meta=false&embed=screenshot.url`}
                      alt={site.title}
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {site.title}
                    </h3>
                    <p className="text-gray-400 mt-2 mb-4">{site.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              />
              <motion.div
                layoutId={selectedId}
                className="fixed inset-10 z-50 overflow-hidden rounded-xl bg-black"
              >
                <iframe
                  src={websites.find(site => site.title === selectedId)?.url}
                  title={selectedId}
                  className="w-full h-full"
                />
                <motion.button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 text-white hover:bg-gray-700/80"
                >
                  ✕
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Websites;