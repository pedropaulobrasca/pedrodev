import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CyberBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(useMotionValue(0), springConfig);
  const mouseY = useSpring(useMotionValue(0), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalizar posição do mouse entre -1 e 1
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      
      setMousePosition({ x, y });
      mouseX.set(x * 20); // Multiplicador para aumentar o efeito
      mouseY.set(y * 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Grid de fundo com paralaxe */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      
      {/* Linhas diagonais animadas com interação */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent"
            initial={{ y: -100, x: -100 }}
            animate={{ 
              y: ['100%', '-10%'],
              x: ['100%', '-10%'],
              rotate: 45 + (mousePosition.x * 5), // Rotação baseada no mouse
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "linear",
              rotate: {
                duration: 0.1,
                ease: "linear"
              }
            }}
            style={{
              top: `${index * 20}%`,
              transformOrigin: 'center',
              filter: `blur(${Math.abs(mousePosition.y) * 2}px)` // Blur baseado no mouse
            }}
          />
        ))}
      </div>

      {/* Partículas reativas ao mouse */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 bg-neon-blue/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: 1
            }}
            animate={{ 
              y: [null, '-100%'],
              opacity: [0, 1, 0],
              scale: Math.abs(mousePosition.x * mousePosition.y) + 1 // Escala baseada no mouse
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
            style={{
              filter: `blur(${Math.abs(mousePosition.y) * 1}px)` // Blur baseado no mouse
            }}
          />
        ))}
      </div>

      {/* Gradiente reativo ao mouse */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-cyber-darker/50 to-cyber-black/50"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(mousePosition.y + 1) * 50}%, rgba(0,255,255,0.1), transparent 50%)`
        }}
      />

      {/* Efeito de brilho seguindo o mouse */}
      <motion.div
        className="absolute w-[200px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,255,255,0.1) 0%, transparent 70%)',
          x: useSpring(useMotionValue(0), { damping: 40, stiffness: 200 }),
          y: useSpring(useMotionValue(0), { damping: 40, stiffness: 200 }),
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          x: mousePosition.x * window.innerWidth + window.innerWidth / 2,
          y: mousePosition.y * window.innerHeight + window.innerHeight / 2,
        }}
      />
    </div>
  );
};
