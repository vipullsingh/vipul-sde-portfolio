import React, { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-coffee-900/80 backdrop-blur-xl border-coffee-700 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-saas-cyan to-saas-purple flex items-center justify-center font-display font-bold text-white text-lg">
            V
          </div>
          <h1 className="text-xl font-display font-bold text-coffee-100 tracking-wide">
            {RESUME_DATA.name}
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-1">
          {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="px-4 py-2 text-sm font-medium text-coffee-100/70 hover:text-saas-cyan hover:bg-coffee-800/50 rounded-lg transition-all"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
            <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2 rounded-lg bg-gradient-to-r from-saas-purple to-saas-cyan hover:from-saas-cyan hover:to-saas-purple text-white text-sm font-bold shadow-lg shadow-saas-cyan/20 transition-all transform hover:-translate-y-0.5"
            >
                Let's Talk
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;