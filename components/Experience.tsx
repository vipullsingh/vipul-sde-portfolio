import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Flatten experiences into single project cards for the slider
  // We'll map through experiences, then their projects.
  const allCards = RESUME_DATA.experience.flatMap(exp => {
      if(exp.projects && exp.projects.length > 0) {
          return exp.projects.map(p => ({
              ...p,
              company: exp.company,
              role: exp.role,
              details: null
          }));
      }
      return [{
          title: exp.role,
          description: exp.details || [],
          techStack: [],
          company: exp.company,
          role: exp.role,
          details: exp.details
      }];
  });

  const nextCard = () => setCurrentCard((prev) => (prev + 1) % allCards.length);
  const prevCard = () => setCurrentCard((prev) => (prev - 1 + allCards.length) % allCards.length);

  const card = allCards[currentCard];

  return (
    <div className="h-full w-full flex items-center justify-center p-6 bg-latte-50 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 right-0 w-full h-full bg-espresso-900/5 -skew-x-12 transform origin-top-right z-0"></div>

       <div className="max-w-4xl w-full relative z-10">
          <div className="mb-8 text-center">
             <h2 className="text-3xl font-display font-bold text-espresso-900">Work Experience</h2>
             <p className="text-espresso-500">Swipe to explore journey</p>
          </div>

          <div className="relative h-[450px]">
             
             {/* The Active Card */}
             <div className="absolute inset-0 z-20">
                <div className="bg-white rounded-3xl shadow-2xl h-full w-full border border-latte-200 overflow-hidden flex flex-col md:flex-row">
                    {/* Left/Top: Info */}
                    <div className="bg-espresso-900 p-8 md:w-1/3 flex flex-col justify-center text-white">
                        <div className="text-saas-cyan font-bold text-sm tracking-widest uppercase mb-2">{card.company}</div>
                        <h3 className="text-2xl font-display font-bold mb-1">{card.title}</h3>
                        <div className="text-espresso-400 text-sm">{card.role}</div>
                        
                        <div className="mt-8 flex flex-wrap gap-2">
                             {card.techStack && card.techStack.map(t => (
                                 <span key={t} className="px-2 py-1 rounded bg-white/10 text-xs border border-white/20">{t}</span>
                             ))}
                        </div>
                    </div>

                    {/* Right/Bottom: Details */}
                    <div className="p-8 md:w-2/3 flex flex-col justify-center bg-latte-50 overflow-y-auto">
                        <ul className="space-y-4">
                            {card.description && card.description.map((desc, i) => (
                                <li key={i} className="flex items-start text-espresso-700 text-sm leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-saas-cyan mt-1.5 mr-3 shrink-0"></span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
             </div>

             {/* Navigation Buttons (Floating) */}
             <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4 z-30">
                <button onClick={prevCard} className="w-12 h-12 rounded-full bg-white text-espresso-900 shadow-lg flex items-center justify-center hover:bg-latte-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex items-center gap-2">
                    {allCards.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentCard ? 'bg-espresso-900 w-4' : 'bg-latte-300'}`}></div>
                    ))}
                </div>
                <button onClick={nextCard} className="w-12 h-12 rounded-full bg-espresso-900 text-white shadow-lg flex items-center justify-center hover:bg-espresso-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
             </div>

          </div>
       </div>
    </div>
  );
};

export default Experience;