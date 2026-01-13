import React from 'react';

interface StickerProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  bg?: string;
}

const StickerCard: React.FC<StickerProps> = ({ 
  children, 
  className = "", 
  rotation = 0,
  bg = "bg-white"
}) => {
  return (
    <div 
      className={`relative group transition-transform duration-300 hover:scale-105 hover:z-10 ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className={`
        ${bg} 
        border-4 border-white 
        shadow-sticker group-hover:shadow-sticker-hover 
        p-6 rounded-sm transition-all duration-300
      `}>
        {children}
      </div>
    </div>
  );
};

export default StickerCard;