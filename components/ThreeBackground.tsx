import React from 'react';

// A playful scribbles background component instead of 3D
const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
      {/* Texture overlay is handled in CSS, here we add floating scribbles */}
      <svg className="absolute w-full h-full opacity-30">
        <pattern id="scribble-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
           <path d="M10,10 C20,20 40,10 50,20" stroke="white" strokeWidth="1" fill="none" opacity="0.2"/>
           <circle cx="80" cy="80" r="2" fill="yellow" opacity="0.3" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#scribble-pattern)" />
      </svg>
      
      {/* Big Shapes */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default ThreeBackground;