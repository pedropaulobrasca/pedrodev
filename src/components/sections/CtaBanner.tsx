import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { AuroraBeams } from '../ui/AuroraBeams';
import { siteContent } from '../../data/content';

const { ctaBanner } = siteContent;

export function CtaBanner() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-32 md:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <AuroraBeams />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto glass-strong rounded-3xl p-12 md:p-16 text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-dark/5 pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold text-text-primary mb-4 tracking-tight">
            {ctaBanner.headline}
          </h2>
          <p className="text-lg text-text-secondary mb-10">
            {ctaBanner.subheadline}
          </p>
          <Button
            variant="chrome"
            href={ctaBanner.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base px-10 py-4"
          >
            {ctaBanner.cta.text}
            <ArrowRight size={18} />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
