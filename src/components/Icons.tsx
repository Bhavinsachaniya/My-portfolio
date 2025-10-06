import React from 'react';

export const GithubIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.65.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"></path>
  </svg>
);

export const MediumIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.45,12.33a.5.5,0,0,0,.24-.08L12.06,9.5l3.8,3.58a.51.51,0,0,0,.66.07.5.5,0,0,0,.21-.6V9.45l4,4.35A.5.5,0,0,0,21,13.5a.51.51,0,0,0,.29-.42V11a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0,0,1h.5v1.28l-4.2-4.66a.5.5,0,0,0-.7,0l-4.2,3.9-3.71-4.07a.5.5,0,0,0-.76.05.5.5,0,0,0,0,.76l3.88,4.25c-.06,0-.12,0-.18,0a.5.5,0,0,0,0,1Z"></path>
    </svg>
);

export const BehanceIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 12v-2h4v2zm-1-5h6v2h-6zM3 12v9h12c3 0 6-3 6-6s-3-6-6-6H3zm10 7H5v-5h8c1.6 0 3 1.4 3 3s-1.4 2-3 2zM3 3h12v7H3z"></path>
    </svg>
);

export const FigmaIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7V12C7 13.6569 8.34315 15 10 15H12V17C12 19.7614 9.76142 22 7 22C4.23858 22 2 19.7614 2 17C2 14.2386 4.23858 12 7 12H12V7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H12V15H10C9.44772 15 9 14.5523 9 14V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V12H17C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2H12Z" fill="currentColor"></path>
    </svg>
);


export const LinkedInIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);


export const BoltIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);

export const TargetIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
);

export const CheckIcon: React.FC = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export const ProjectIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="M6 8h.01"></path>
    <path d="M10 8h.01"></path>
    <path d="M14 8h.01"></path>
  </svg>
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

export const EducationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"></path>
  </svg>
);

export const LeadershipIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
    <path d="M16 3.13a4 4 0 010 7.75"></path>
  </svg>
);

export const EyeIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);