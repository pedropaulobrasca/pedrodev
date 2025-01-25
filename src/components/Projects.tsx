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
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-neon-yellow/30">
      <div className="absolute inset-0 bg-cyber-darker/30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(247,208,2,0.03)_1px,transparent_1px)] bg-[size:4px_4px]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
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
              className="cyberpunk-border p-6 relative group backdrop-blur-sm bg-cyber-darker/30"
            >
              <h3 className="text-xl font-bold text-neon-yellow mb-3 font-mono">{project.title}</h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 text-xs font-mono text-neon-yellow border border-neon-yellow/30"
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
                  className="flex items-center gap-2 text-white/60 hover:text-neon-yellow transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">Github</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-neon-yellow transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};