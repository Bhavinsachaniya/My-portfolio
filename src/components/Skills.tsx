import React from 'react';
import SectionWrapper from './SectionWrapper';

const techSkills = [
  'Node.js', 'JavaScript', 'Python', 'PHP', 'Express.js', 'MongoDB', 'SQL',
  'Postman', 'JWT', 'Figma', 'Canva', 'Webflow', 'ChatGPT', 'REST APIs',
];
const softSkills = [
  'Leadership', 'Innovation', 'Problem Solving', 'Management', 'Communication', 'Teamwork'
];

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Technical & Soft Skills</h2>
        
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-300 mb-6">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techSkills.map((skill) => (
              <div key={skill} className="bg-white/10 text-white/80 font-medium px-5 py-2 rounded-full text-base transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold text-gray-300 mb-6">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill) => (
              <div key={skill} className="bg-white/10 text-white/80 font-medium px-5 py-2 rounded-full text-base transition-all duration-300 hover:bg-white/20 hover:scale-105 cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;