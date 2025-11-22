import React from 'react';
import { RESUME_DATA } from '../constants';

interface NavigationProps {
  activeSection: number;
  totalSections: number;
  setActiveSection: (index: number) => void;
}

const SECTIONS = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];

const Navigation: React.FC<NavigationProps> = ({ activeSection, totalSections, setActiveSection }) => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all bg-white/50 backdrop-blur-md border-b border-latte-200/50">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveSection(0)}
        >
          <div className="w-8 h-8 rounded-lg bg-espresso-900 text-white flex items-center justify-center font-display font-bold text-lg group-hover:bg-saas-cyan transition-colors">
            V
          </div>
          <span className="font-display font-bold text-espresso-900 tracking-tight">Vipul Kumar</span>
        </div>

        <div className="hidden md:flex gap-6">
          {SECTIONS.map((label, index) => (
            <button
              key={label}
              onClick={() => setActiveSection(index)}
              className={`text-sm font-medium transition-colors ${
                activeSection === index 
                  ? 'text-saas-cyan' 
                  : 'text-espresso-600 hover:text-espresso-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        
        <a 
            href={RESUME_DATA.links.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="hidden md:block px-4 py-2 rounded-lg bg-espresso-900 text-white text-xs font-bold hover:bg-saas-cyan transition-colors"
        >
            Let's Connect
        </a>
      </nav>

      {/* Side Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {SECTIONS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(index)}
            className="group flex items-center gap-2 flex-row-reverse"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'bg-saas-cyan h-6' 
                : 'bg-espresso-300 group-hover:bg-espresso-500'
            }`} />
            <span className={`text-xs font-medium text-espresso-600 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0`}>
                {SECTIONS[index]}
            </span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Navigation;