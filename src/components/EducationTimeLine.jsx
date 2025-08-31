// src/components/EducationTimeLine.jsx

import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/education";

// --- Animation Variants ---
const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// --- Sub-component (Corrected) ---
const EducationItem = ({ edu }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col md:flex-row items-start md:items-center gap-6 w-full max-w-3xl mx-auto"
    >
      <div
        className="education-card relative flex flex-col gap-3 p-6 rounded-xl bg-black/10 backdrop-blur-md border border-white/20 shadow-md transition-all w-full overflow-hidden"
      >
        {/* Main info container: flex-col on mobile, flex-row on medium+ screens */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start w-full gap-2">
          
          {/* Left side: College and Degree */}
          <div>
            <h3 className="font-semibold text-xl text-[#e9c136]">
              {edu.college}
            </h3>
            <p className="text-[#ba82e5] font-medium">{edu.degree}</p>
          </div>

          {/* Right side: Duration */}
          <p className="text-sm text-[#ba82e5] italic md:text-right flex-shrink-0">
            {edu.duration}
          </p>
        </div>

        {/* Achievements section (always appears below the main info) */}
        {edu.achievements && (
          <p className="mt-2 text-white leading-relaxed border-t border-white/20 pt-3">
            {edu.achievements}
          </p>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const EducationTimeLine = () => {
  return (
    <section id="education" className="py-20 w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-[#e9c136]">
          Education
        </h2>

        <motion.div
          className="space-y-10"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {education.map((edu) => (
            <EducationItem key={edu.id} edu={edu} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimeLine;