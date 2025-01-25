import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Users } from 'lucide-react';

const technicalSkills = [
  'Node.js', 'TypeScript', 'JavaScript', 'SQL', 'React', 'Next.js', 'NestJS',
  'Express', 'Fastify', 'Docker', 'Git', 'PostgreSQL', 'MySQL', 'Sequelize',
  'Prisma', 'DDD', 'Clean Architecture', 'Jest', 'Vitest', 'TDD'
];

const softSkills = [
  'Comunicação efetiva', 'Trabalho em equipe', 'Resolução de problemas',
  'Adaptabilidade', 'Gerenciamento de tempo', 'Pensamento crítico',
  'Liderança', 'Criatividade'
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cyber-darker">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:4px_100%]"></div>
      <div className="max-w-4xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="cyberpunk-border p-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <Code2 className="w-8 h-8 text-neon-blue animate-glow-blue" />
              <h2 className="text-3xl font-bold text-white font-mono glitch-text">Tech_Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-cyber-dark text-neon-blue border border-neon-blue hover:bg-neon-blue/10 transition-colors animate-glow-blue font-mono"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="cyberpunk-border p-6"
          >
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-8 h-8 text-neon-yellow animate-glow-yellow" />
              <h2 className="text-3xl font-bold text-white font-mono glitch-text">Soft_Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-cyber-dark text-neon-yellow border border-neon-yellow hover:bg-neon-yellow/10 transition-colors animate-glow-yellow font-mono"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};