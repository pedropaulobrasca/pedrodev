import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal } from 'lucide-react';

const experiences = [
  {
    company: 'Tinnova',
    role: 'Desenvolvedor FullStack (Foco no Back-end)',
    period: 'Junho de 2022 – Até o momento',
    description: 'Desenvolvimento fullstack com foco no back-end utilizando Node.js, Express, Sequelize e PostgreSQL. Trabalho no front-end com Angular.',
  },
  {
    company: 'B2ML Sistemas',
    role: 'Desenvolvedor FullStack (React e Next.js no Front-end)',
    period: 'Março de 2021 – Junho de 2022',
    description: 'Desenvolvimento fullstack com NestJS no back-end e ReactJS no front-end.',
  },
  {
    company: 'Thompson Management Horizons',
    role: 'Estagiário Desenvolvedor FullStack',
    period: 'Fevereiro de 2020 – Março de 2021',
    description: 'Desenvolvimento de aplicações web fullstack utilizando PHP e MySQL.',
  },
];

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-neon-pink/30">
      <div className="absolute inset-0 bg-cyber-darker/30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-4 mb-12 flex-wrap"
        >
          <Terminal className="w-6 h-6 sm:w-8 sm:h-8 text-neon-pink animate-glow-pink shrink-0" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono glitch-text break-words">Experiência_Profissional.exe</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-neon-pink/30 cyberpunk-border p-4"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-neon-pink animate-glow-pink"></div>
              <h3 className="text-xl font-bold text-neon-blue mb-2 font-mono">{exp.company}</h3>
              <p className="text-neon-pink mb-2 font-mono">{exp.role}</p>
              <p className="text-neon-yellow mb-3 font-mono">{exp.period}</p>
              <p className="text-white/80">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};