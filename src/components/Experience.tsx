import React, { useState, useEffect, useRef } from 'react';
import { BriefcaseIcon, EducationIcon, LeadershipIcon } from './Icons';
import SectionWrapper from './SectionWrapper';

const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isVisible] as const;
};

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, className, delay = 0 }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 pl-12 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      style={{ transitionDelay: `${delay}ms`}}
    >
      {children}
    </div>
  );
};


interface TimelineItemProps {
    date: string;
    title: string;
    subtitle: string;
    details?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subtitle, details }) => (
  <div className="relative py-4">
    <div className="absolute top-4 -left-6 w-5 h-5 bg-orange-500 rounded-full border-4 border-[#0A0A0A] transform -translate-x-1/2"></div>
    <p className="text-gray-400 text-sm">{date}</p>
    <h3 className="text-xl font-bold mt-1 text-white">{title}</h3>
    <p className="text-lg font-semibold text-gray-300">{subtitle}</p>
    {details && (
      <ul className="list-disc list-inside mt-2 text-gray-400 space-y-1">
        {details.map((detail, i) => <li key={i}>{detail}</li>)}
      </ul>
    )}
  </div>
);


const Experience: React.FC = () => {
  const [lineRef, isLineVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <SectionWrapper id="experience" className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">My Journey</h2>
        
        <div ref={lineRef} className="relative max-w-4xl mx-auto text-left space-y-12">
          <div className={`absolute left-6 top-10 bottom-10 w-1 bg-white/20 origin-top ${isLineVisible ? 'animate-grow-height' : 'h-0'}`}></div>

          <AnimatedItem>
            <div className="flex items-center gap-4 mb-8 -ml-12 pl-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <BriefcaseIcon className="w-8 h-8 text-orange-400 z-10 relative" />
                <span className="absolute inset-0 bg-orange-400/30 blur-lg rounded-full animate-pulse"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Professional Experience</h3>
            </div>
             <div className="border border-white/10 bg-[#141414]/50 backdrop-blur-lg rounded-2xl p-6">
                <TimelineItem
                date="JUN 2025 – JULY 2025"
                title="User Experience Designer (UI/UX Designer)"
                subtitle="Info Ocean - IT WEB DESIGN"
                details={[
                    "Worked on various projects with a focus on research, analysis, and designing user-friendly experiences.",
                    "Managed end-to-end UX—from user research to clean, intuitive designs—with a sharp eye on frontend logic.",
                ]}
                />
            </div>
          </AnimatedItem>
          
          <AnimatedItem delay={200}>
             <div className="flex items-center gap-4 mb-8 -ml-12 pl-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <LeadershipIcon className="w-8 h-8 text-orange-400 z-10 relative" />
                <span className="absolute inset-0 bg-orange-400/30 blur-lg rounded-full animate-pulse"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Leadership</h3>
            </div>
            <div className="space-y-8">
                 <div className="border border-white/10 bg-[#141414]/50 backdrop-blur-lg rounded-2xl p-6">
                    <TimelineItem
                        date="JUNE 2022 - JUNE 2024"
                        title="Vice President & Management Team Member"
                        subtitle="Techno Club, Shantilal Shah Engineering College"
                        details={[
                        "Collaborated with team to gain experience in planning, communication, and resource management.",
                        "Successfully managed and coordinated over 10 events.",
                        ]}
                    />
                </div>
                 <div className="border border-white/10 bg-[#141414]/50 backdrop-blur-lg rounded-2xl p-6">
                    <TimelineItem
                        date="FEB 2025 - MAR 2025"
                        title="Figma Trainer | Conducted Hands-on UI/UX Sessions"
                        subtitle="Figma Workshop, Shantilal Shah Engineering College"
                        details={[
                        "Conducted a Figma workshop, training students in UI/UX design fundamentals and responsive design principles.",
                        "Provided hands-on practice sessions covering Figma tools, grid systems, and layout techniques.",
                        ]}
                    />
                 </div>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={400}>
            <div className="flex items-center gap-4 mb-8 -ml-12 pl-2">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <EducationIcon className="w-8 h-8 text-orange-400 z-10 relative" />
                <span className="absolute inset-0 bg-orange-400/30 blur-lg rounded-full animate-pulse"></span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
            </div>
            <div className="space-y-8">
                <div className="border border-white/10 bg-[#141414]/50 backdrop-blur-lg rounded-2xl p-6">
                    <TimelineItem
                        date="JUNE 2022 - JUNE 2026"
                        title="Bachelor of Engineering in Information Technology"
                        subtitle="Shantilal Shah Engineering College, Bhavnagar"
                    />
                </div>
            </div>
          </AnimatedItem>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;