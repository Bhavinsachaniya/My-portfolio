import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navLinks = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu on click
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.toLowerCase()));

    const handleScroll = () => {
      // The offset should match the scroll-margin-top of the sections
      const scrollPosition = window.scrollY + 80; 
      let currentSection = '';

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial active section on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={handleLogoClick} className="text-xl font-bold tracking-tight">BhavinSachaniya</a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className={`text-sm transition-colors ${activeSection === link.toLowerCase() ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hidden md:inline-block bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors">
          Contact Me
        </a>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle mobile menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
            {navLinks.map(link => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className={`py-2 transition-colors ${activeSection === link.toLowerCase() ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                {link}
              </a>
            ))}
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="w-full text-center bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors mt-4">
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;