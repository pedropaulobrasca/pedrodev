import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteContent } from '../../data/content';

const { services } = siteContent;

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

export function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="servicos" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(201,162,39,0.06)_0%,transparent_70%)] pointer-events-none" />
      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-text-primary text-center mb-4 tracking-tight"
        >
          {services.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary text-center mb-16 text-lg"
        >
          Solucoes sob medida para cada etapa do seu projeto.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-5"
        >
          {services.items.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass rounded-2xl p-8 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
            >
              <service.icon className="w-10 h-10 text-brand-primary mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-text-primary mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-[15px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
