
import React from 'react';

interface LandingPageProps {
  onOpen: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpen }) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 relative z-10">
      <div 
        onClick={onOpen}
        className="bg-neutral-900/80 backdrop-blur-md border border-rose-500/30 p-10 rounded-3xl shadow-2xl shadow-rose-900/20 text-center transform transition-all active:scale-95 cursor-pointer max-w-sm w-full group"
      >
        <div className="mb-6 inline-block p-4 bg-rose-500/10 rounded-full group-hover:bg-rose-500/20 transition-colors">
          <span className="text-5xl animate-pulse inline-block">🎁</span>
        </div>
        
        <h1 className="text-4xl font-serif-romantic font-bold mb-4 text-rose-500">
          Surpresa! 💖
        </h1>
        
        <p className="text-neutral-400 mb-8 font-light tracking-wide">
          Preparei algo especial para você. Toque no botão abaixo para descobrir.
        </p>
        
        <button 
          className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl font-semibold shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 transition-all active:opacity-90"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
        >
          Abrir Surpresa
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
