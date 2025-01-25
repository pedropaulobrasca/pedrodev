import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Mail, Phone, MapPin } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-b border-neon-blue/30"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-blue/20 via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6 cyberpunk-border p-4"
        >
          <Terminal className="w-12 h-12 text-neon-blue animate-glow-blue" />
          <h1 className="text-4xl sm:text-5xl font-bold glitch-text bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-pink to-neon-yellow">
            Pedro Paulo Brasca
          </h1>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl mb-8 text-neon-blue font-mono"
        >
          {'>'} Desenvolvedor FullStack
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 text-white/80 font-mono"
        >
          <div className="flex items-center gap-2 hover:text-neon-pink transition-colors">
            <MapPin className="w-5 h-5 text-neon-pink" />
            <span>Taubaté - SP</span>
          </div>
          <a 
            href="https://wa.me/5512997183660" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-neon-blue transition-colors"
          >
            <Phone className="w-5 h-5 text-neon-blue" />
            <span>(12) 99718-3660</span>
          </a>
          <a 
            href="mailto:pedropaulobrasca@gmail.com"
            className="flex items-center gap-2 hover:text-neon-yellow transition-colors"
          >
            <Mail className="w-5 h-5 text-neon-yellow" />
            <span>pedropaulobrasca@gmail.com</span>
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
};