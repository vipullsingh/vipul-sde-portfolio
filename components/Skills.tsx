import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-coffee-800/20 skew-y-3 transform origin-top-left -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/3">
             <h2 className="text-4xl font-display font-bold text-white mb-6">
                Tech Stack
                <span className="text-saas-cyan">.</span>
             </h2>
             <p className="text-coffee-100/70 text-lg mb-8">
                My arsenal for building high-performance, scalable web applications. From backend logic in Go to interactive UIs in React.
             </p>
             <div className="p-6 rounded-2xl bg-gradient-to-br from-saas-purple/20 to-transparent border border-saas-purple/30">
                 <h3 className="text-white font-bold mb-2">Current Focus</h3>
                 <p className="text-sm text-coffee-100/60">Exploring Agents, LLM Integrations (Llama 3.2), and Advanced System Design.</p>
             </div>
          </div>

          <div className="md:w-2/3">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {RESUME_DATA.skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group relative p-4 rounded-xl bg-coffee-800/40 border border-white/5 hover:border-saas-cyan/50 transition-all duration-300 flex items-center justify-center text-center hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                >
                  <span className="text-coffee-100 group-hover:text-white font-medium text-sm tracking-wide transition-colors">
                    {skill}
                  </span>
                  
                  {/* Hover Corner Accent */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-saas-cyan opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-saas-cyan opacity-0 group-hover:opacity-100 transition-opacity rounded-br-lg"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;