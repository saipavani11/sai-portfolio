// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { FaGamepad } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';

const sections = [
  { id: 'home', label: 'Home', level: 1 },
  { id: 'intro', label: 'About me', level: 2 },
  { id: 'projects', label: 'Projects', level: 3 },
  // { id: 'education', label: 'Education', level: 4 },
  { id: 'skills', label: 'Skills', level: 5 },
  { id: 'contact', label: 'Contact', level: 6 },
];

const Navbar = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // STATE 1: Add state for visibility and scroll position
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { theme, toggleTheme } = useTheme();
  
  // LOGIC 2: Update the useEffect hook
  useEffect(() => {
    const handleScroll = () => {
      // Original active level tracking
      let current = 1;
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && window.scrollY >= el.offsetTop - window.innerHeight / 3) {
          current = section.level;
        }
      });
      setActiveLevel(current);

      // New logic for showing/hiding the navbar
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Add dependency

  const isLight = theme === 'light';

  return (
    // JSX 3: Apply the conditional class for the transform
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-300
      ${isLight ? ' text-[#e9c136]' : 'bg-transparent text-white'}
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Logo / Name */}

      {/* Timeline / Section Indicators */}
      {isLight ? (
  <>
    {/* Left corner - Name */}
    <div className="hidden md:flex text-lg font-poppins font-bold">
      T Sai Pavani
    </div>

    {/* Center - Nav Items */}
    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-4">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="font-poppins font-medium text-[#6d567f] px-4 py-2 rounded-md hover:text-[#e9c136] transition-colors"
        >
          {section.label}
        </a>
      ))}
    </div>
  </>
) : (
  <div className="hidden md:flex w-7/12 justify-center items-center">
    {/* Empty div, nothing visible */}
  </div>
)}


      {/* Theme Toggle for Desktop */}
      <div className="hidden md:block">
        {/* <button
          onClick={toggleTheme}
          className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full transition-colors
          ${isLight ? 'text-[#e9c136] hover:bg-white/10' : 'text-yellow-400 hover:bg-gray-700'}`}
          aria-label="Toggle theme"
        >
          {isLight ? <FaGamepad /> : <BsFillBriefcaseFill />}
        </button> */}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden z-20">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isLight ? 'text-3xl' : 'pixel-text text-3xl'}`}>
          {isMenuOpen ? 'X' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-10
          flex flex-col items-center justify-center gap-6 transition-transform duration-300
          ${isLight ? 'bg-[#1e0535] text-[#e9c136]' : 'bg-[#0a0a0a] text-white'}
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`text-2xl ${isLight ? 'font-poppins font-medium' : 'pixel-text'}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {section.label}
          </a>
        ))}
        {/* <button
          onClick={() => {
            toggleTheme();
            setIsMenuOpen(false);
          }}
          className="mt-6 text-5xl"
          aria-label="Toggle theme"
        >
          {isLight ? <FaGamepad /> : <BsFillBriefcaseFill />}
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;