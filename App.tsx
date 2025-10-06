
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Introduction from './components/Introduction';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // If the user has seen the intro this session, skip it.
    if (sessionStorage.getItem('introShown')) {
      setShowIntro(false);
      return;
    }

    // Start the exit animation before removing the component
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500); // Intro visible for 2.5s

    // Remove the component after the fade-out animation is complete
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem('introShown', 'true');
    }, 3000); // 2.5s + 0.5s fade-out

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);


  return (
    <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,120,45,0.2),rgba(255,255,255,0))]" 
        />
      </div>

      {showIntro && <Introduction isExiting={isExiting} />}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;