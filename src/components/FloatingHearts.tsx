import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
  // Use a fixed set of hearts with random initial positions to cover the screen
  const [hearts, setHearts] = useState<{ id: number; left: number; initialY: number; duration: number }[]>([]);

  useEffect(() => {
    const initialHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      initialY: Math.random() * 100, // Start anywhere vertically
      duration: 10 + Math.random() * 10,
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          // Start from random Y, then loop from bottom to top
          initial={{ y: `${heart.initialY}vh`, opacity: 0 }}
          animate={{ 
            y: ["110vh", "-10vh"],
            opacity: [0, 1, 0] 
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: "linear",
            // For the first run, we want it to look like it's already floating
            // But doing that cleanly with just one animation definition is tricky.
            // Simplified: Just loop them from bottom, but add a huge negative delay to simulate pre-warming?
            // Actually, Framer Motion 'time' is hard to control.
            // Alternative: animating 'top' instead of 'y' maybe?
            // Let's rely on negative delay.
            delay: -Math.random() * 20 
          }}
          style={{
            left: `${heart.left}%`,
            position: "absolute",
            fontSize: `${Math.random() * 20 + 20}px`,
          }}
        >
          {heart.id % 3 === 0 ? "💖" : heart.id % 3 === 1 ? "✨" : "🌸"}
        </motion.div>
      ))}
    </div>
  );
}
