import { useAudio } from "../context/AudioContext";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const { isPlaying, togglePlay } = useAudio();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((e: unknown) => console.error("Playback failed:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
      {/* Hidden Audio Player */}
      <audio
        ref={audioRef}
        loop
        src="/1.mp4" 
      />

      <motion.div 
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full border-2 border-pink-300 flex items-center justify-center shadow-lg"
      >
        <span className="text-lg">💿</span>
      </motion.div>

      <button
        onClick={togglePlay}
        className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white/80 transition-all border-2 border-pink-200 font-bold text-pink-500 text-sm"
      >
        {isPlaying ? "Pause Music ⏸️" : "Play Music ▶️"}
      </button>
    </div>
  );
}
