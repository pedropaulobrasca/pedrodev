import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Portfolio Cyberpunk',
    description: 'Portfolio pessoal com tema cyberpunk desenvolvido com React, Framer Motion e TailwindCSS.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'TailwindCSS'],
    github: 'https://github.com/yourusername/portfolio',
    live: 'https://yourportfolio.com'
  },
  {
    title: 'Calculadora de Jobs Freela',
    description: 'Aplicação web para cálculo de valores de trabalhos freelance, desenvolvida com Next.js.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    github: 'https://github.com/yourusername/freela-calc',
    live: 'https://freela-calc.com'
  }
];

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cyber-dark border-b border-neon-yellow/30">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(247,208,2,0.03)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <Code className="w-8 h-8 text-neon-yellow animate-glow-yellow" />
          <h2 className="text-3xl font-bold text-white font-mono glitch-text">Projetos.sys</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="cyberpunk-border p-6 bg-cyber-darker relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue via-neon-pink to-neon-yellow opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <h3 className="text-xl font-bold text-neon-blue mb-3 font-mono">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-cyber-black text-neon-pink border border-neon-pink/30 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neon-blue hover:text-neon-pink transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-mono text-sm">Código</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neon-yellow hover:text-neon-pink transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="font-mono text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};