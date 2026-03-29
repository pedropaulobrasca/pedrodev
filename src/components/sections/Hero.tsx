import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FluidBackground } from '../ui/FluidBackground';
import { ParticleField } from '../ui/ParticleField';
import { Button } from '../ui/Button';
import { siteContent } from '../../data/content';

const { hero } = siteContent;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FluidBackground />
      <div className="absolute inset-0 bg-black/60" />
      <ParticleField />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block text-xs font-medium text-brand-primary tracking-[0.2em] uppercase mb-8"
        >
          {hero.label}
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 tracking-tight hero-shimmer"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="chrome"
            href={hero.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {hero.cta.text}
            <ArrowRight size={16} />
          </Button>
          <Button variant="outline" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.text}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
