import React from 'react';
import { motion } from 'framer-motion';

export const CyberGlitch = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <div className="glitch-overlay"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0, 0.1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: Math.random() * 10 + 5
        }}
        className="fixed inset-0 bg-neon-blue/10"
      />
    </div>
  );
};