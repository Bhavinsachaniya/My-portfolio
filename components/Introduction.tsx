
import React from 'react';

interface IntroductionProps {
  isExiting: boolean;
}

const Introduction: React.FC<IntroductionProps> = ({ isExiting }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-500 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      aria-hidden={isExiting}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          Bhavin Sachaniya
        </h1>
        <p className="text-lg md:text-xl text-gray-400 animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Full Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Introduction;
