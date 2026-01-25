import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage";
import ProposalPage from "./pages/ProposalPage";
import SuccessPage from "./pages/SuccessPage";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";
import { AudioProvider } from "./context/AudioContext";
import "./App.css";

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <MusicPlayer />
        <FloatingHearts />
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/proposal" element={<ProposalPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
