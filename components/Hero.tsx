import React, { useRef, useEffect } from 'react';
import { GithubIcon, LinkedInIcon, FigmaIcon } from './Icons';

const Hero: React.FC = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (spotlightRef.current) {
        const { clientX, clientY } = event;
        spotlightRef.current.style.setProperty('--x', `${clientX}px`);
        spotlightRef.current.style.setProperty('--y', `${clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12 bg-transparent overflow-hidden">
      {/* Interactive Spotlight Effect */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full opacity-30 transition-transform duration-200"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 120, 45, 0.6), transparent 80%)',
          filter: 'blur(100px)',
          transform: 'translate(calc(var(--x, 0px) - 50%), calc(var(--y, 0px) - 50%))',
        }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Available for hire lozenge */}
        <div className="mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <div className="bg-zinc-900/50 border border-zinc-700 rounded-full px-4 py-1.5 flex items-center space-x-2 text-sm backdrop-blur-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-300">Available for Hire</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Bhavin Sachaniya
        </h1>

        <div className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 h-[2.75rem] md:h-[4.5rem] overflow-hidden animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="animate-text-slide h-full">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 h-full flex items-center justify-center">Full-Stack Developer</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 h-full flex items-center justify-center">UI/UX Designer</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 h-full flex items-center justify-center">Creative Technologist</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 h-full flex items-center justify-center">Full-Stack Developer</span>
            </div>
        </div>

        <p className="max-w-xl mx-auto text-lg text-gray-400 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          I build beautiful, functional, and scalable digital products from concept to launch.
        </p>
        
        <div className="flex justify-center space-x-4 mt-4 animate-slide-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <a href="https://github.com/Bhavin-sachaniya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 border border-zinc-700 rounded-full p-2 hover:bg-zinc-800/50 backdrop-blur-lg transform hover:scale-110" aria-label="Github"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/bhavin-sachaniya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 border border-zinc-700 rounded-full p-2 hover:bg-zinc-800/50 backdrop-blur-lg transform hover:scale-110" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="https://www.figma.com/@bhavinsachaniya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 border border-zinc-700 rounded-full p-2 hover:bg-zinc-800/50 backdrop-blur-lg transform hover:scale-110" aria-label="Figma"><FigmaIcon /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;