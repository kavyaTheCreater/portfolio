// frontend/src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react'; // ✅ added
import { useTheme } from '../context/ThemeContext'; // ✅ added

const Navigation = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme(); // ✅ added

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'resume', 'projects', 'gallery', 'contact'];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-xl py-3'
          : 'bg-black/30 backdrop-blur-lg py-5'
      } border-b border-purple-500/20`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Kavyashree M R
          </div>

          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize transition-all duration-300 relative group ${
                  activeSection === item
                    ? 'text-purple-400 font-semibold'
                    : 'text-gray-300 hover:text-purple-400'
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform transition-transform duration-300 ${
                    activeSection === item
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}

            {/* ✅ Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
              title="Toggle Theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
