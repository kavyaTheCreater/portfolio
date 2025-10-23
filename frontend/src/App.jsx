import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="transition-all duration-500">
        {activeSection === 'about' && <About />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'gallery' && <Gallery />}
        {activeSection === 'contact' && <Contact />}
      </div>

      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;