import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProposalPage() {
  const navigate = useNavigate();
  const [noCount, setNoCount] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to nathan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Pls pls pls",
      "I'll buy you food!",
      "I'll give you a massage!",
      "I'll let you pick the movie!",
      "No... but actually Yes?",
      "This button is broken (click Yes)",
      "Error 404: No not found"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const getBearImage = () => {
    if (yesButtonSize > 100) return "/images/crying.gif"; // Desperate/Crying
    
    if (noCount === 0) return "/images/happy.gif"; // Happy
    if (noCount === 1) return "/images/shocked.gif"; // Shocked
    if (noCount === 2) return "/images/sad.gif"; // Sad
    if (noCount === 3) return "/images/crying.gif"; // Crying
    return "/images/crying.gif"; 
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-pink-50 relative overflow-hidden transition-all duration-500">
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.img 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src="/images/excited.gif"
            className="absolute top-10 left-10 w-40"
          />
          <motion.img 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="/images/happy.gif"
            className="absolute bottom-10 right-10 w-40"
          />
        </div>

      <div className="z-10 text-center">
          <motion.div
            key={noCount} 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
             <img
                className="h-[200px] mx-auto transition-transform hover:scale-105 duration-300"
                src={getBearImage()}
                alt="Cute bear reaction"
             />
          </motion.div>
          <h1 className="my-8 text-4xl md:text-6xl font-bold text-pink-600 font-serif drop-shadow-sm">Will you be my Valentine?</h1>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className={`rounded-full bg-green-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 ring-4 ring-green-200`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => navigate("/success")}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded-full bg-red-500 px-8 py-4 font-bold text-white shadow-lg hover:bg-red-600 hover:scale-95 transition-all duration-300 ring-4 ring-red-200"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
      </div>
    </div>
  );
}
