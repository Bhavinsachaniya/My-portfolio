import React from 'react';
import type { GlowColor } from '../types';

interface GlowingCardProps {
  glowColor: GlowColor;
  children: React.ReactNode;
  className?: string;
}

const glowStyles: Record<GlowColor, React.CSSProperties> = {
  orange: { background: 'radial-gradient(ellipse at center, #ff8c2d 0%, transparent 60%)' },
  green: { background: 'radial-gradient(ellipse at center, #4ade80 0%, transparent 60%)' },
  blue: { background: 'radial-gradient(ellipse at center, #60a5fa 0%, transparent 60%)' },
};

const GlowingCard: React.FC<GlowingCardProps> = ({ glowColor, children, className = '' }) => {
  return (
    <div className={`relative bg-[#141414] rounded-3xl border border-white/10 group transition-transform duration-300 group-hover:scale-[1.02] ${className}`}>
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
        style={{
          ...glowStyles[glowColor],
          backgroundSize: '150% 150%',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      ></div>
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;