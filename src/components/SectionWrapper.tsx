import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 sm:py-32 px-4 sm:px-6 scroll-mt-20 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;