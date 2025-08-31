import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { IoInformationCircleOutline } from "react-icons/io5";

// --- Animation Variants ---

// Variant for the entire section container
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      // Stagger the children of this container (the category cards)
      staggerChildren: 0.15,
    },
  },
};

// **UPDATED**: Variant for each category card to slide in from the bottom
const cardRevealVariants = {
  hidden: { opacity: 0, y: 50 }, // Start 50px below and invisible
  visible: {
    opacity: 1,
    y: 0, // Animate to original position and fully visible
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

// Variant for the icons inside each card (can remain the same)
const iconItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 w-full text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-yellow-400 drop-shadow-md">
          Skills & Arsenal
        </h2>

        {/* --- MASONRY GRID CONTAINER --- */}
        {/* This container will now orchestrate the staggered animation of its children */}
        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
        >
          {skills.map((skillCategory) => (
            // **UPDATED**: Each card now uses the `cardRevealVariants`
            <motion.div
              key={skillCategory.category}
              className="mb-6 md:mb-8 p-6 break-inside-avoid bg-black/10 rounded-xl shadow-lg border border-purple-800/30"
              variants={cardRevealVariants} // Apply the new "slide-in" animation
            >
              <h3 className="text-xl md:text-2xl font-semi-bold mb-6 text-purple-300">
                {skillCategory.category}
              </h3>

              <motion.div
                className="grid grid-cols-4 sm:grid-cols-5 gap-4"
                initial="hidden" // Ensure icons are hidden initially
                whileInView="visible" // Animate icons when the card is in view
                viewport={{ once: true, amount: 0.5 }}
                variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              >
                {skillCategory.technologies.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      className="relative group flex justify-center items-center"
                      variants={iconItemVariants}
                    >
                      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-700/30 transition-all duration-300 hover:bg-purple-600/30 text-gray-300 hover:text-purple-200">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="absolute bottom-full mb-2 scale-0 transition-all duration-200 ease-in-out rounded-md bg-gray-700 px-3 py-1 text-sm font-medium text-white shadow-lg group-hover:scale-100 origin-bottom">
                        {tech.name}
                        <IoInformationCircleOutline className="inline-block ml-1 text-gray-400" />
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;