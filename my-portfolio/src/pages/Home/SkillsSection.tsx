// src/pages/Home/SkillsSection.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';

// Sample skills data
const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" />, proficiency: 90 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, proficiency: 80 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" />, proficiency: 85 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, proficiency: 95 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" />, proficiency: 90 },
  { name: 'Databases', icon: <FaDatabase className="text-gray-700" />, proficiency: 75 },
  // Add more skills as needed
];

interface Skill {
  name: string;
  icon: JSX.Element;
  proficiency: number; // Percentage value
}

const SkillsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="text-4xl mr-4">
                {skill.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2 }}
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-600">{skill.proficiency}% Proficient</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
