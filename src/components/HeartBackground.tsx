
import React, { useEffect, useState, useCallback } from 'react';

interface Heart {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
  color: string;
}

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const createHeart = useCallback(() => {
    const id = Date.now() + Math.random();
    const colors = ['#e11d48', '#fb7185', '#be123c', '#ff4d6d'];
    const newHeart: Heart = {
      id,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * (24 - 12) + 12}px`,
      duration: `${Math.random() * (15 - 8) + 8}s`,
      delay: `${Math.random() * 5}s`,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    
    setHearts(prev => [...prev.slice(-40), newHeart]);
  }, []);

  useEffect(() => {
    const interval = setInterval(createHeart, 600);
    // Initial batch
    for(let i = 0; i < 15; i++) createHeart();
    
    return () => clearInterval(interval);
  }, [createHeart]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-particle"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDuration: heart.duration,
            animationDelay: heart.delay,
            color: heart.color,
          }}
        >
          <svg 
            width="100%" height="100%" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            stroke="none"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default HeartBackground;
