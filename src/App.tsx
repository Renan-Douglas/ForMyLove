import React, { useState, useRef } from 'react';
import LandingPage from './components/LandingPage';
import GalleryPage from './components/GalleryPage';
import HeartBackground from './components/HeartBackground';

const App: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpenSurprise = () => {
  setTransitioning(true);

  // ▶️ iOS só permite áudio após interação do usuário
  if (audioRef.current) {
    audioRef.current.volume = 0.5;

    // ⏱️ começa no segundo 36
    audioRef.current.currentTime = 60;

    audioRef.current.play().catch(() => {});
  }

  setTimeout(() => {
    setShowGallery(true);
    setTransitioning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 800);
};


  return (
    <div
      className={`min-h-screen transition-opacity duration-1000 ${
        transitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <HeartBackground />

      {!showGallery ? (
        <LandingPage onOpen={handleOpenSurprise} />
      ) : (
        <GalleryPage />
      )}

      {/* Background Music */}
      <audio ref={audioRef} loop preload="auto" id="bg-music">
  <source
    src={`${import.meta.env.BASE_URL}dados/musica2.mp3`}
    type="audio/mpeg"
  />
</audio>
    </div>
  );
};

export default App;
