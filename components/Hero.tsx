import React from 'react';
import { RESUME_DATA, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center relative p-6">
      {/* Background Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-latte-200 rounded-full blur-[80px] -z-10 opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-saas-cyan/5 rounded-full blur-[100px] -z-10 opacity-50"></div>

      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-latte-200 shadow-sm">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <span className="text-xs font-medium text-espresso-600 uppercase tracking-wider">Available for hire</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-espresso-900 leading-[1.1]">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-cyan to-saas-purple">
              {RESUME_DATA.name}
            </span>
          </h1>

          <p className="text-xl text-espresso-600 font-light max-w-lg leading-relaxed">
            {RESUME_DATA.title} focused on scalable SaaS products, clean engineering, and smooth user experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
             <a href={RESUME_DATA.links.github} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-espresso-900 text-white font-medium hover:bg-espresso-800 transition-all shadow-lg shadow-espresso-900/10">
                GitHub
             </a>
             <a href={RESUME_DATA.links.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-xl bg-white border border-latte-300 text-espresso-800 font-medium hover:border-saas-cyan hover:text-saas-cyan transition-all">
                LinkedIn
             </a>
             <a href={`mailto:${RESUME_DATA.email}`} className="px-6 py-3 rounded-xl bg-saas-cyan/10 text-saas-cyan font-medium hover:bg-saas-cyan/20 transition-all">
                Email Me
             </a>
          </div>
        </div>

        {/* Visual Section - The "Workspace" Card */}
        <div className="relative hidden lg:block">
           <div className="glass-card rounded-2xl p-6 rotate-2 hover:rotate-0 transition-transform duration-500 shadow-soft max-w-md mx-auto">
              <div className="flex items-center justify-between border-b border-latte-200 pb-4 mb-4">
                 <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-xs text-espresso-400 font-mono">portfolio.config.js</div>
              </div>
              <div className="space-y-3 font-mono text-sm">
                 <div className="flex gap-2">
                    <span className="text-saas-purple">const</span>
                    <span className="text-saas-blue">developer</span>
                    <span className="text-espresso-400">=</span>
                    <span className="text-espresso-900">{'{'}</span>
                 </div>
                 <div className="pl-4 flex gap-2">
                    <span className="text-espresso-600">name:</span>
                    <span className="text-green-600">"Vipul Kumar"</span>,
                 </div>
                 <div className="pl-4 flex gap-2">
                    <span className="text-espresso-600">stack:</span>
                    <span className="text-espresso-900">["Go", "React", "NextJS"]</span>,
                 </div>
                 <div className="pl-4 flex gap-2">
                    <span className="text-espresso-600">coffeeStatus:</span>
                    <span className="text-saas-cyan">true</span>
                 </div>
                 <div className="text-espresso-900">{'}'}</div>
                 
                 <div className="pt-4 border-t border-latte-200 mt-4">
                    <div className="text-xs text-espresso-400 mb-2">// Latest Achievement</div>
                    <div className="bg-latte-100 rounded p-2 flex items-center gap-2">
                       <span className="text-lg">🚀</span>
                       <span className="text-espresso-700">Built scalable SaaS APIs</span>
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Floating decoration */}
           <div className="absolute -right-10 -bottom-10 bg-white p-4 rounded-xl shadow-soft animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">☕</span>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;