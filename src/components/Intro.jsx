// src/components/Intro.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { FaCode, FaLaptopCode, FaPaintBrush, FaDatabase } from 'react-icons/fa';

// --- Animation Variants ---

// 1. Variant for the container to orchestrate the stagger effect
const skillsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// 2. Variant for each individual progress bar
const progressBarVariants = {
  hidden: { width: 0 },
  visible: (percentage) => ({ // This is a dynamic variant
    width: `${percentage}%`,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }, // A smoother ease-out cubic bezier
  }),
};


const Intro = () => {
  const { theme } = useTheme();

  const skills = [
    { label: 'Web & Backend Dev', percentage: 87, color: 'bg-blue-600', icon: <FaLaptopCode /> },
    { label: 'DSA & Algorithms', percentage: 85, color: 'bg-green-600', icon: <FaCode /> },
    { label: 'C# & .NET', percentage: 70, color: 'bg-purple-600', icon: <FaDatabase /> },
    { label: 'Creative Design', percentage: 90, color: 'bg-pink-600', icon: <FaPaintBrush /> },
  ];

  if (theme !== 'light') return null;

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center px-6 py-16 text-gray-800 transition-colors duration-500"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">

        {/* Left Side: Bio (No changes needed here) */}
        <div className="md:w-1/2 text-left z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl font-Poppins font-bold text-[#e9c136]">
            A Creative Developer
          </h2>
          <p className="text-lg leading-relaxed font-Poppins text-[#9c7cb4]">
            Turning ideas into elegant digital solutions. I craft responsive web apps,
            optimize backend systems, and design user experiences that delight and engage.
            Passionate about clean code, scalable architecture, and creative problem-solving.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/01JST22UIS081_T_Sai_Pavani.pdf"
              download
              className="px-8 py-3 rounded-lg bg-[#e9c136] text-[#000] font-semibold shadow-lg hover:bg-[#e9c136]/80 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Progress Overview (This is the updated part) */}
        <motion.div
          className="md:w-1/2 w-full max-w-md z-10 flex flex-col items-center space-y-6 bg-[#9c7cb4]/20 p-10 rounded-lg"
          // 3. Set up the trigger for the animation
          variants={skillsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
        >
          <h3 className="text-2xl mb-4 font-sans font-semibold text-white text-center border-b-2 border-gray-300 pb-2">
            Skill Progress
          </h3>
          <div className="flex flex-col gap-4 w-full">
            {skills.map(skill => (
              <motion.div key={skill.label} className="flex flex-col">
                <div className="flex justify-between mb-1 items-center">
                  <span className="flex items-center gap-1 text-white font-medium">
                    {skill.icon} {skill.label}
                  </span>
                  <span className="text-sm font-semibold text-white">{skill.percentage}%</span>
                </div>
                <div className="w-full h-4 rounded bg-gray-200 overflow-hidden">
                  {/* 4. Apply the variants to the progress bar */}
                  <motion.div
                    className={`${skill.color} h-full`}
                    variants={progressBarVariants}
                    custom={skill.percentage} // Pass the percentage to our dynamic variant
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;