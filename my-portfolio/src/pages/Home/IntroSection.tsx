// src/pages/Home/IntroSection.tsx

import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/profile.jpg'; // Ensure you have a profile image in this path

const IntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm [Your Name]
          </h1>
          <p className="text-gray-700 mb-6">
            I'm a passionate Systems Engineering student with a keen interest in building scalable and efficient systems. I love exploring new technologies and applying them to solve real-world problems.
          </p>
          <a
            href="/projects" // Adjust the link as needed
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            View My Projects
          </a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
