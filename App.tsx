
import React, { useState, useEffect, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import GalleryPage from './components/GalleryPage';
import HeartBackground from './components/HeartBackground';

const App: React.FC = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleOpenSurprise = () => {
    setTransitioning(true);
    // Smooth transition effect
    setTimeout(() => {
      setShowGallery(true);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);
  };

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
      <HeartBackground />
      
      {!showGallery ? (
        <LandingPage onOpen={handleOpenSurprise} />
      ) : (
        <GalleryPage />
      )}

      { Background Music Placeholder (Optional) }
      {
        <audio autoPlay loop id="bg-music">
          <source src="" type="audio/mpeg" />
        </audio>
      }
    </div>
  );
};

export default App;
