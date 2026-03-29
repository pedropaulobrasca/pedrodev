import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MorphingBlobs } from '../ui/MorphingBlobs';
import { siteContent } from '../../data/content';

const { socialProof } = siteContent;

export function SocialProof() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <MorphingBlobs />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-10 md:p-14"
        >
          <div className="grid grid-cols-3 gap-8 mb-12">
            {socialProof.metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <span className="block text-4xl md:text-5xl font-semibold text-text-primary mb-2 tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm text-text-secondary">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-xs text-text-muted text-center uppercase tracking-[0.15em] mb-6">
              Empresas onde atuei
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
              {socialProof.companies.map((company) => (
                <span
                  key={company}
                  className="text-base md:text-lg font-medium text-text-muted/50 tracking-wide"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
