
import React from 'react';
import { GithubIcon, LinkedInIcon, MediumIcon, BehanceIcon, FigmaIcon } from './Icons';
import VisitorCount from './VisitorCount';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 md:order-1">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Bhavin Sachaniya. All Rights Reserved.
          </p>
          <VisitorCount />
        </div>
        <div className="flex justify-center space-x-6 order-1 md:order-2">
          <a href="https://github.com/Bhavin-sachaniya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Github"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/bhavin-sachaniya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Medium"><MediumIcon /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Behance"><BehanceIcon /></a>
          <a href="https://www.figma.com/@bhavinsachaniya" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Figma"><FigmaIcon /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;