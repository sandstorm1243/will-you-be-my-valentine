import { createContext, useContext, useState, ReactNode } from "react";

type AudioContextType = {
  isPlaying: boolean;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);


  // No need for refs anymore as the player is handled by ReactPlayer in the MusicPlayer component
  // This context now just acts as a global state source for "is playing".

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, play, pause }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within an AudioProvider");
  return context;
};
