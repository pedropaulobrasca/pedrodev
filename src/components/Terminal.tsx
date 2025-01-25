import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export const Terminal = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
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

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-xs p-4 bg-cyber-darker/90 border border-neon-blue font-mono text-sm relative group"
    >
      <button
        onClick={() => setIsVisible(false)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-neon-blue text-cyber-darker rounded-full flex items-center justify-center hover:bg-cyber-darker hover:text-neon-blue hover:border border-neon-blue transition-colors"
        aria-label="Fechar terminal"
      >
        <X size={14} />
      </button>
      <pre className="text-neon-blue whitespace-pre-line">{text}</pre>
      <div className="h-4 w-2 bg-neon-blue animate-pulse inline-block ml-1"></div>
    </motion.div>
  );
};