import React from 'react';
import { RESUME_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-6 bg-white">
      <div className="max-w-4xl w-full">
         <h2 className="text-3xl font-display font-bold text-espresso-900 mb-12 text-center">Academic Track</h2>
         
         <div className="grid gap-6">
            {RESUME_DATA.education.map((edu, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center md:items-center justify-between hover:-translate-y-1 transition-transform duration-300 shadow-soft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="w-12 h-12 rounded-xl bg-latte-100 text-espresso-900 flex items-center justify-center font-bold text-xl">
                            {edu.degree.charAt(0)}
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-bold text-espresso-900">{edu.degree}</h3>
                            <p className="text-espresso-500">{edu.institution}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="text-right hidden md:block">
                            <div className="text-sm font-bold text-espresso-800">{edu.duration}</div>
                            <div className="text-xs text-espresso-400">{edu.location}</div>
                        </div>
                        {/* Mobile view pill */}
                        <div className="md:hidden bg-latte-100 px-3 py-1 rounded-full text-xs text-espresso-600">
                             {edu.duration}
                        </div>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Education;