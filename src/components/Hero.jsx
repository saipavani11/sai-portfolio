// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import pixelavatar from '../assets/pixelavatar.jpg';

const Hero = () => {
  const { theme } = useTheme();
  const typedEl = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'modern web apps.',
        'clean code.',
        'intuitive design.',
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedEl.current, options);
    return () => typed.destroy();
  }, []);

  if (theme === 'dark') {
    // ⬅️ Don’t render anything here, routing will handle it
    return null;
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-16">
        {/* Left Side: Text */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-bold mb-4 text-[#9c7cb4] font-poppins">
            Hi, I’m Sai Pavani
          </h1>
          <p className="text-lg text-[#9c7cb4] mb-6 min-h-[4rem]">
            I build{' '}
            <span
              ref={typedEl}
              className="font-semibold text-[#e9c136]"
            ></span>
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#e9c136] text-[#000] font-semibold rounded-lg shadow-lg hover:bg-[#e9c136]/80 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#e9c136] rounded-lg text-[#9c7cb4] hover:bg-[#9c7cb4]/20 hover:text-white hover:border-[#9c7cb4]/10 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Side: Avatar */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={pixelavatar}
            alt="Pavani Avatar"
            className="relative w-full h-full object-cover rounded-full transition-all duration-300 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
