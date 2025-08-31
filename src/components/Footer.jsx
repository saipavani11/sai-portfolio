// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 px-6 mt-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        
        {/* Right: Copyright / small note */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Sai Pavani. All rights reserved.
        </div>

        {/* Center: Social links */}
        <div className="flex gap-4 text-xl">
          <a href="https://github.com/saipavani11" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/t-sai-pavani" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
