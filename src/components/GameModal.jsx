import React from "react";
import SnakeGame from "./SnakeGame";

const GameModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center transition-opacity duration-300">
      <div className="relative w-[90%] max-w-[500px] bg-[#e2c9d5] dark:bg-gray-900 text-black dark:text-white rounded-2xl shadow-2xl p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 dark:text-gray-300 hover:text-red-500 text-2xl font-bold transition-transform hover:scale-110"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center text-[#275a58] dark:text-pink-400">
          Snake Game
        </h2>
        <SnakeGame />
      </div>
    </div>
  );
};

export default GameModal;
