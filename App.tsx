import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const totalSections = 6;

  // Debounced scroll handler to prevent rapid switching
  const handleScroll = useCallback((direction: 'up' | 'down') => {
    if (isScrolling) return;

    setIsScrolling(true);
    setActiveSection(prev => {
        if (direction === 'down') return Math.min(prev + 1, totalSections - 1);
        return Math.max(prev - 1, 0);
    });

    setTimeout(() => setIsScrolling(false), 800); // Lock for animation duration
  }, [isScrolling]);

  // Wheel Event (Mousepad/Mouse)
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // Small threshold to ignore tiny movements
      if (Math.abs(e.deltaY) < 30) return;
      handleScroll(e.deltaY > 0 ? 'down' : 'up');
    };

    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, [handleScroll]);

  // Keyboard Event
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown') handleScroll('down');
        if (e.key === 'ArrowUp') handleScroll('up');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleScroll]);

  // Touch Support
  useEffect(() => {
      let touchStartY = 0;
      const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY; };
      const onTouchEnd = (e: TouchEvent) => {
          const touchEndY = e.changedTouches[0].clientY;
          if (touchStartY - touchEndY > 50) handleScroll('down');
          if (touchEndY - touchStartY > 50) handleScroll('up');
      };

      window.addEventListener('touchstart', onTouchStart);
      window.addEventListener('touchend', onTouchEnd);
      return () => {
          window.removeEventListener('touchstart', onTouchStart);
          window.removeEventListener('touchend', onTouchEnd);
      }
  }, [handleScroll]);

  const sections = [
      <Hero />,
      <AboutSkills />,
      <Experience />,
      <Education />,
      <Projects />,
      <Contact />
  ];

  return (
    <div className="h-screen w-screen overflow-hidden bg-latte-50 text-espresso-900 font-sans relative">
      <Navigation 
        activeSection={activeSection} 
        totalSections={totalSections} 
        setActiveSection={setActiveSection} 
      />
      
      {/* Main Slider Container */}
      <div 
        className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]"
        style={{ transform: `translateY(-${activeSection * 100}vh)` }}
      >
        {sections.map((component, index) => (
            <div key={index} className="h-screen w-full relative pt-20 md:pt-0">
                {component}
            </div>
        ))}
      </div>

      <ChatBot />
    </div>
  );
};

export default App;