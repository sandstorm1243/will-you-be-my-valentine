import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

export default function SuccessPage() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Local photos from public/photos
  const memories = [
    "/photos/WhatsApp Image 2025-12-22 at 6.18.57 PM.jpeg",
    "/photos/WhatsApp Image 2025-12-22 at 6.21.58 PM.jpeg",
    "/photos/WhatsApp Image 2025-12-22 at 6.42.46 PM.jpeg",
    "/photos/WhatsApp Image 2025-12-23 at 8.14.56 PM.jpeg",
    "/photos/WhatsApp Image 2025-12-25 at 9.53.21 AM.jpeg",
    "/photos/WhatsApp Image 2026-01-01 at 7.23.48 PM (1).jpeg",
    "/photos/WhatsApp Image 2026-01-01 at 7.23.48 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-02 at 2.36.01 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-02 at 2.37.08 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-04 at 4.39.37 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-11 at 4.35.48 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-13 at 11.02.36 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-13 at 6.54.34 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-13 at 6.57.09 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-14 at 3.59.31 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-18 at 10.34.29 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-18 at 11.23.31 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-19 at 2.01.45 AM.jpeg",
    "/photos/WhatsApp Image 2026-01-22 at 2.23.54 AM.jpeg",
    "/photos/WhatsApp Image 2026-01-22 at 9.42.05 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-24 at 6.13.32 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-24 at 6.16.26 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-24 at 6.21.53 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-25 at 2.33.05 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-25 at 3.41.29 PM.jpeg",
    "/photos/WhatsApp Image 2026-01-26 at 12.38.07 AM.jpeg",
    "/photos/WhatsApp Image 2026-01-26 at 12.38.10 AM (1).jpeg",
    "/photos/WhatsApp Image 2026-01-26 at 12.38.10 AM.jpeg",
    "/photos/WhatsApp Image 2026-01-26 at 12.38.12 AM.jpeg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center py-10 overflow-x-hidden relative">
      <Confetti width={windowSize.width} height={windowSize.height} />
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-pink-600 font-serif drop-shadow-md">
          I love you, Hrishi, I love you ❤️
        </h1>
      </motion.div>


      {/* Love Letter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-lg text-center mb-12 border-2 border-pink-200 mx-4 z-30 relative"
      >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-4xl">💌</div>
          <p className="font-handwriting text-2xl text-pink-600 leading-relaxed italic">
              "Every moment with you is my favorite memory. I can't wait for this distance to end, and the day when I finally meet you"
          </p>
          <p className="mt-4 text-gray-500 font-bold">- Your Idiot</p>
      </motion.div>

      {/* Memory Lane */}
      <div className="w-full max-w-6xl px-4 z-10 space-y-8">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-8 font-serif">Some of the memories we've shared</h2>
        
        <div className="flex flex-wrap justify-center gap-6">
            {memories.map((url, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3, zIndex: 10 }}
                    className="bg-white p-3 rounded-xl shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 w-64 h-80"
                >
                    <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                            src={url} 
                            alt="Memory" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src="/images/happy.gif"
            className="absolute top-20 left-5 w-32 md:w-48 opacity-80"
        />
        <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            src="/images/excited.gif"
            className="absolute bottom-40 right-5 w-32 md:w-48 opacity-80"
        />
         <motion.img 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            src="/images/shocked.gif"
            className="absolute top-1/2 left-0 w-24 opacity-60"
        />
      </div>
    </div>
  );
}
