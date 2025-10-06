
import React from 'react';
import GlowingCard from './GlowingCard';
import { ProjectIcon } from './Icons';
import SectionWrapper from './SectionWrapper';

const projects = [
  {
    title: 'Resume Builder with AI',
    description: 'A web app where users can sign up, log in, and use Gemini API to generate and edit professional resume summaries, with easy export to DOCX.',
    glowColor: 'blue',
    tags: ['Node.js', 'Express', 'MongoDB', 'Gemini API'],
    link: 'https://github.com/Bhavin-sachaniya/Resume-Builder',
    linkText: 'View on GitHub',
  },
  {
    title: 'BlogSite Backend API',
    description: 'A RESTful API with a secure authentication system (JWT, OTP) for blog creation, management, user comments, and social features like follow/unfollow.',
    glowColor: 'orange',
    tags: ['Node.js', 'JWT', 'MongoDB', 'Nodemailer'],
    link: 'https://github.com/Bhavin-sachaniya/BlogSite--Backend',
    linkText: 'View on GitHub',
  },
  {
    title: 'Multi-Platform Design System',
    description: 'A comprehensive UI/UX design system in Figma for creating clean, consistent, and user-friendly interfaces across Web, Android, and iOS platforms.',
    glowColor: 'green',
    tags: ['Figma', 'UI/UX Design', 'Design System'],
    link: 'https://www.figma.com/file/JCNmM2Y1t22Waae3G9v82M/UIUX-Design-for-WEB%2C-ANDROID%2C-IOS-Design-System?type=design&node-id=0-1&mode=design&t=2zT0j1j2b8Y7a2a1-0',
    linkText: 'View on Figma',
  },
];


const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">My Recent Work</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-16">
          Here are a few projects I've worked on. Each one was a unique challenge that I was excited to tackle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <GlowingCard key={project.title} glowColor={project.glowColor as 'orange' | 'green' | 'blue'}>
              <div className="flex flex-col h-full">
                <div className="aspect-[16/9] w-full bg-zinc-900/50 rounded-t-2xl flex items-center justify-center border-b border-white/10">
                  <ProjectIcon className="w-12 h-12 text-white/20" />
                </div>
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 mt-3 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-white/10 text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline mt-6 inline-block self-start">{project.linkText} &rarr;</a>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
