import React from "react";
import { motion } from "framer-motion";
import { FaGamepad } from "react-icons/fa";
import PixelBackground from "../PixelBackground";

const GamifiedPage = () => {
  return (
    <PixelBackground>
    {/* <section className="min-h-screen flex flex-col items-center justify-center bg-black text-pink-400 pixel-text">
      <motion.h1
        className="text-5xl mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        🎮 Welcome to Retro Mode
      </motion.h1>

      <button className="px-8 py-3 bg-pink-500 text-white border-4 border-pink-700 pixel-text shadow-[4px_4px_0_#000] hover:shadow-[2px_2px_0_#000] transition-all">
        <FaGamepad className="inline mr-2" /> Play Snake
      </button>
    </section> */}
    </PixelBackground>
  );
};

export default GamifiedPage;
