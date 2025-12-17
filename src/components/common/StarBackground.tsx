import React, { useMemo } from 'react';

const generateStars = (count: number) => {
  let shadow = "";
  const height = 1000; 

  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const bias = Math.pow(Math.random(), 3); 
    const y = Math.floor(height * bias);
    
    const fade = Math.max(0, 1 - (y / (height * 0.8))); 
    const brightness = Math.random(); 
    const opacity = (brightness * fade).toFixed(2);

    if (parseFloat(opacity) > 0.01) {
      shadow += `${x}px ${y}px 0 rgba(255, 255, 255, ${opacity}), `;
    }
  }
  return shadow ? shadow.slice(0, -2) : ""; 
};

const StarBackground: React.FC = () => {
  const smallStars = useMemo(() => generateStars(150), []);
  const mediumStars = useMemo(() => generateStars(50), []); 
  const largeStars = useMemo(() => generateStars(15), []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <div className="w-full h-full animate-float opacity-80">
        <div 
          className="absolute w-px h-1px bg-transparent animate-twinkle-slow"
          style={{ boxShadow: smallStars }} 
        />
        <div 
          className="absolute w-0.5 h-0.5 bg-transparent animate-twinkle-medium"
          style={{ boxShadow: mediumStars }} 
        />
         <div 
          className="absolute w-0.75 h-0.75 bg-transparent animate-pulse"
          style={{ boxShadow: largeStars }} 
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-space to-transparent"></div>
    </div>
  );
};

export default StarBackground;