import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { siteContent } from '../../data/content';

const { process } = siteContent;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#080808] overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div ref={ref} className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-text-primary text-center mb-4 tracking-tight"
        >
          {process.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-text-secondary text-center mb-16 text-lg"
        >
          Processo simples, resultado excepcional.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-14 left-[25%] right-[25%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {process.steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: index * 0.15 }}
              className="relative text-center glass rounded-2xl p-8"
            >
              <span className="inline-block text-4xl font-bold text-brand-primary/80 mb-4">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-text-primary mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-[15px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
