import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';

const AboutSkills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'skills' | 'certs'>('about');

  return (
    <div className="h-full w-full flex items-center justify-center p-6 bg-latte-50">
      <div className="max-w-5xl w-full">
        
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 gap-2">
            {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Tech Stack' },
                { id: 'certs', label: 'Certificates' }
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTab === tab.id 
                            ? 'bg-espresso-900 text-white shadow-lg' 
                            : 'bg-white text-espresso-600 hover:bg-latte-200'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        {/* Content Container with Slide Effect */}
        <div className="relative h-[400px] w-full overflow-hidden">
             
             {/* ABOUT CARD */}
             <div className={`absolute inset-0 transition-all duration-500 ease-out transform ${
                 activeTab === 'about' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
             }`}>
                <div className="glass-card h-full w-full rounded-3xl p-8 md:p-12 flex flex-col justify-center items-start shadow-soft">
                    <h2 className="text-3xl font-display font-bold text-espresso-900 mb-6">The Developer</h2>
                    <p className="text-lg text-espresso-600 leading-relaxed max-w-2xl mb-6">
                        {RESUME_DATA.summary}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm font-medium text-espresso-800">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-saas-cyan"></span> SaaS Engineering
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-saas-purple"></span> System Design
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-saas-blue"></span> API Integration
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Clean Code
                        </div>
                    </div>
                </div>
             </div>

             {/* SKILLS CARD */}
             <div className={`absolute inset-0 transition-all duration-500 ease-out transform ${
                 activeTab === 'skills' ? 'translate-x-0 opacity-100' : activeTab === 'about' ? 'translate-x-full opacity-0' : '-translate-x-full opacity-0'
             }`}>
                <div className="glass-card h-full w-full rounded-3xl p-8 md:p-12 flex flex-col justify-center shadow-soft">
                    <h2 className="text-3xl font-display font-bold text-espresso-900 mb-8">The Stack</h2>
                    <div className="flex flex-wrap gap-3">
                        {RESUME_DATA.skills.map((skill) => (
                            <span key={skill} className="px-4 py-2 rounded-xl bg-white border border-latte-300 text-espresso-800 font-medium shadow-sm hover:border-saas-cyan transition-colors cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-latte-200">
                         <h3 className="text-sm text-espresso-400 font-bold uppercase tracking-wider mb-2">Focus Areas</h3>
                         <div className="flex gap-4 text-espresso-600 text-sm">
                            <span>Backend (Go/Node)</span>
                            <span>•</span>
                            <span>Frontend (React/Next)</span>
                            <span>•</span>
                            <span>AI (Ollama/Llama)</span>
                         </div>
                    </div>
                </div>
             </div>

             {/* CERTS CARD */}
             <div className={`absolute inset-0 transition-all duration-500 ease-out transform ${
                 activeTab === 'certs' ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
             }`}>
                <div className="glass-card h-full w-full rounded-3xl p-8 md:p-12 overflow-y-auto shadow-soft no-scrollbar">
                    <h2 className="text-3xl font-display font-bold text-espresso-900 mb-8">Credentials</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {RESUME_DATA.certificates.map((cert, idx) => (
                            <div key={idx} className="flex items-center p-4 rounded-xl bg-white border border-latte-200">
                                <div className="w-10 h-10 rounded-full bg-latte-100 flex items-center justify-center mr-4 text-saas-purple">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <span className="text-espresso-800 font-medium">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>
             </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSkills;