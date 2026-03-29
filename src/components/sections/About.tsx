import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import { siteContent } from '../../data/content';

const { about, footer } = siteContent;

export function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="sobre" className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,162,39,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div ref={ref} className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-semibold text-text-primary text-center mb-14 tracking-tight"
        >
          {about.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-dark/10 border border-white/10 flex-shrink-0 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-semibold text-brand-primary/80">
              P
            </span>
          </div>

          <div>
            <p className="text-text-secondary leading-relaxed text-[17px] mb-4">
              {about.bio}
            </p>
            <div className="flex items-center gap-2 text-text-muted">
              <MapPin size={14} strokeWidth={1.5} />
              <span className="text-sm">{footer.contact.location}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
