// src/pages/Home/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import IntroSection from './IntroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <IntroSection />
      <ProjectsSection />
      <SkillsSection />
    </motion.div>
  );
};

export default Home;
