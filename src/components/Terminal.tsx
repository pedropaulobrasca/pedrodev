import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Terminal = () => {
  const [text, setText] = useState('');
  const fullText = '> SYSTEM INITIALIZED\n> LOADING MODULES...\n> ACCESS GRANTED\n> WELCOME TO THE MATRIX';

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 z-40 max-w-xs p-4 bg-cyber-darker/90 border border-neon-blue font-mono text-sm"
    >
      <pre className="text-neon-blue whitespace-pre-line">{text}</pre>
      <div className="h-4 w-2 bg-neon-blue animate-pulse inline-block ml-1"></div>
    </motion.div>
  );
};