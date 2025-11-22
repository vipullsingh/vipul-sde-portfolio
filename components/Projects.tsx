import React, { useState } from 'react';
import { RESUME_DATA } from '../constants';

const Projects: React.FC = () => {
  // Extract project details for a visual carousel
  // We'll manually create "Visual" data based on the text to make it look like a SaaS preview
  const projects = [
      {
          name: "Listing Platform",
          type: "Marketplace",
          desc: "Location-based service with Stripe payments.",
          color: "from-blue-400 to-indigo-500",
          icon: "🗺️"
      },
      {
          name: "SaaS Automator",
          type: "CRM Tool",
          desc: "HubSpot/Salesforce sync engine with AI.",
          color: "from-emerald-400 to-cyan-500",
          icon: "⚡"
      }
  ];

  return (
    <div className="h-full w-full flex items-center justify-center p-6 bg-espresso-900 text-white">
       <div className="max-w-6xl w-full">
          <div className="text-center mb-12">
             <h2 className="text-4xl font-display font-bold mb-2">Build Highlights</h2>
             <p className="text-espresso-400">Scalable systems in production.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
              {projects.map((proj, idx) => (
                  <div key={idx} className="group relative bg-espresso-800 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-saas-cyan/20">
                      <div className={`h-32 bg-gradient-to-r ${proj.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                      <div className="p-8 relative -mt-12">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${proj.color} flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                              {proj.icon}
                          </div>
                          <div className="text-xs font-mono text-espresso-400 mb-2 uppercase tracking-widest">{proj.type}</div>
                          <h3 className="text-2xl font-bold mb-3">{proj.name}</h3>
                          <p className="text-espresso-300 mb-6 leading-relaxed">
                              {proj.desc}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all">
                              View Details <span>→</span>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
       </div>
    </div>
  );
};

export default Projects;