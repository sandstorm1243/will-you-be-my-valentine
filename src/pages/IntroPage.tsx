import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAudio } from "../context/AudioContext";

export default function IntroPage() {
  const navigate = useNavigate();
  const { play } = useAudio();
  const [step, setStep] = useState(0);

  const messages = [
    "Hey... Hrishi,",
    "My love,","Mon reine,","Mon coeur,","My love,","Mon amour,","Mi amore,","My everything,",
    "My darling,",
    "Remember when we first met on Genshin Impact?",
    "Since that day, you have made me the happiest man ever,",
    "Not a single day has passed since that day where I haven't thought of you the whole day",
    "Not a single day where I have not missed you and cursed this distance,",
    "The moment I fell for you was the happiest moment of my life, and the moment you said 'I love you' for the first time made me happier than anyone,",
    "I know, I'm a real idiot, a dumbo, who makes you cry a lot, who upsets you the most,",
    "But, I want you to know that I love you more than anything in this world, and that won't change, even after I make so many mistakes",
    "I have been working on this proposal for a long time, not my actual one, but for valentine's day",
    "So I have a question for you..."
  ];

  const handleNext = () => {
    // Start music on first interaction
    if (step === 0) play();

    if (step < messages.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/proposal");
    }
  };

  return (
    <div 
      className="h-screen flex items-center justify-center bg-pink-50 cursor-pointer overflow-hidden relative"
      onClick={handleNext}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 max-w-2xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 font-serif leading-relaxed drop-shadow-sm">
            {messages[step]}
          </h1>
          <p className="mt-8 text-pink-300 text-sm animate-pulse">
            (Tap anywhere to continue)
          </p>
        </motion.div>
      </AnimatePresence>
      
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Stickers */}
        <motion.img 
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 10 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            src="/images/happy.gif"
            className="absolute top-20 left-10 w-32 h-32 opacity-80"
        />
        <motion.img 
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: -10 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            src="/images/excited.gif"
            className="absolute bottom-20 right-10 w-40 h-40 opacity-80"
        />
      </div>
    </div>
  );
}
