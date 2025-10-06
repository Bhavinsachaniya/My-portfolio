import React from 'react';
import GlowingCard from './GlowingCard';
import { BoltIcon, TargetIcon, CheckIcon } from './Icons';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg text-gray-400 mb-16">
            I am a passionate and detail-oriented developer open to opportunities in UI/UX design, backend development, and JavaScript/Node.js roles. This portfolio highlights my skills, hands-on experience, and the projects that best represent my capabilities across design and development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <GlowingCard glowColor="orange">
            <div className="flex flex-col text-left p-8 h-full">
              <div className="p-2 bg-white/10 rounded-lg self-start mb-4"><BoltIcon /></div>
              <h3 className="text-2xl font-semibold">AI-Powered Backend</h3>
              <p className="text-gray-400 mt-2 flex-grow">Expert in robust backends with Node.js and Express. Proficient in integrating cutting-edge AI like Google's Gemini API.</p>
            </div>
          </GlowingCard>
          <GlowingCard glowColor="green">
             <div className="flex flex-col text-left p-8 h-full">
              <div className="p-2 bg-white/10 rounded-lg self-start mb-4"><TargetIcon /></div>
              <h3 className="text-2xl font-semibold">User-Centric Design</h3>
              <p className="text-gray-400 mt-2 flex-grow">Passionate about creating intuitive interfaces. My design process focuses on clarity, usability, and aesthetic appeal using Figma.</p>
            </div>
          </GlowingCard>
          <GlowingCard glowColor="blue">
             <div className="flex flex-col text-left p-8 h-full">
              <div className="p-2 bg-white/10 rounded-lg self-start mb-4"><CheckIcon /></div>
              <h3 className="text-2xl font-semibold">Leadership & Collaboration</h3>
              <p className="text-gray-400 mt-2 flex-grow">Proven leader with experience in project management and team coordination. Skilled in fostering collaboration and delivering results.</p>
            </div>
          </GlowingCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;