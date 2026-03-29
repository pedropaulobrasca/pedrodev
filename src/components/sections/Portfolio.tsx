import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { siteContent } from '../../data/content';

const { portfolio } = siteContent;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Portfolio() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="portfolio" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#080808] overflow-hidden">
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,162,39,0.04)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />
      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-text-primary text-center mb-4 tracking-tight"
        >
          {portfolio.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary text-center mb-16 text-lg"
        >
          Alguns dos projetos que construi recentemente.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {portfolio.projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
            >
              <div className="h-44 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-dark/8 border-b border-white/5" />

              <div className="p-6">
                <h3 className="text-base font-semibold text-text-primary mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs text-text-muted glass-subtle rounded-full"
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
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                  >
                    <Github size={15} strokeWidth={1.5} />
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={15} strokeWidth={1.5} />
                    Ver ao vivo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
