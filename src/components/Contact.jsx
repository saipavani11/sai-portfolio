import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Contact = () => {
  // Replace with your Formspree endpoint ID
  const FORM_ENDPOINT = "https://formspree.io/f/your_unique_form_id"; 
  const [status, setStatus] = useState("Send Message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setStatus("Message Sent!");
        e.target.reset();
        setTimeout(() => setStatus("Send Message"), 3000); // Reset button after 3s
      } else {
        setStatus("Error!");
      }
    } catch (error) {
      setStatus("Error!");
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 w-full min-h-screen flex items-center text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-yellow-400"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 bg-[#111119]/10 p-8 md:p-8 rounded-2xl shadow-lg border border-purple-800/50">
          
          {/* Left Side: Form */}
          <motion.div className="md:w-1/2" variants={containerVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Let's build something amazing.</h3>
            <form onSubmit={handleSubmit}>
              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                <input type="text" id="name" name="name" required className="w-full p-3 bg-gray-800/10 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all"/>
              </motion.div>
              <motion.div className="mb-4" variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                <input type="email" id="email" name="email" required className="w-full p-3 bg-gray-800/10 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all"/>
              </motion.div>
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea id="message" name="message" rows="5" required className="w-full p-3 bg-gray-800/10 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-all"></textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="w-full py-3 px-6 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-all duration-300 disabled:bg-gray-500"
                disabled={status !== "Send Message"}
                variants={itemVariants}
              >
                {status}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Info */}
          <motion.div className="md:w-1/2" variants={containerVariants}>
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Contact Details</h3>
            <motion.div className="flex flex-col gap-6">
              <motion.a href="mailto:your.email@example.com" className="flex items-center gap-4 group" variants={itemVariants}>
                <FiMail className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white">tsaipavani194@gmail.com</span>
              </motion.a>
              <motion.div className="flex items-center gap-4" variants={itemVariants}>
                <FiMapPin className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">Mysore, Karnataka, India</span>
              </motion.div>

              <motion.div className="mt-4 pt-6 border-t border-gray-800" variants={itemVariants}>
                <p className="text-gray-400 mb-4">You can also find me here:</p>
                <div className="flex gap-6">
                  <a href="https://github.com/saipavani11" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaGithub className="w-8 h-8"/></a>
                  <a href="https://linkedin.com/in/t-sai-pavani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin className="w-8 h-8"/></a>
                </div>
              </motion.div>

              <motion.div className="mt-4 pt-6 border-t border-gray-800" variants={itemVariants}>
                 <p className="text-gray-400 italic">I'm currently seeking new opportunities and would love to hear from you. My inbox is always open!</p>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;