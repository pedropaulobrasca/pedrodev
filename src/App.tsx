import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { profile } from './data/content';

const EASE = [0.16, 1, 0.3, 1] as const;

function App() {
  const reduceMotion = useReducedMotion();

  function LineReveal({ children, delay }: { children: ReactNode; delay: number }) {
    return (
      <span className="block overflow-hidden pb-[0.08em]">
        <motion.span
          className="block"
          initial={{ y: reduceMotion ? 0 : '115%' }}
          animate={{ y: 0 }}
          transition={{ duration: 1.05, delay, ease: EASE }}
        >
          {children}
        </motion.span>
      </span>
    );
  }

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <main className="flex h-[100dvh] flex-col px-6 py-7 sm:px-12 sm:py-10 md:px-20 md:py-14">
      <motion.header {...fade(0.05)} className="flex items-start justify-between">
        <span className="font-sans text-sm font-medium uppercase tracking-[0.18em]">
          Pedro<span className="text-muted"> Brasca</span>
        </span>
        <motion.span
          aria-hidden="true"
          className="select-none text-2xl leading-none text-ink"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          &#10037;
        </motion.span>
      </motion.header>

      <section className="flex flex-1 flex-col justify-center">
        <motion.p
          {...fade(0.15)}
          className="mb-5 font-sans text-xs uppercase tracking-[0.34em] text-muted sm:mb-7"
        >
          {profile.role}
          <span className="mx-2 inline-block h-1 w-1 translate-y-[-0.18em] rounded-full bg-muted align-middle" />
          {profile.location}
        </motion.p>

        <h1 className="font-display text-[clamp(2.7rem,8.2vw,7rem)] font-semibold leading-[0.93] tracking-[-0.02em]">
          <LineReveal delay={0.2}>{profile.headline.lead}</LineReveal>
          <LineReveal delay={0.32}>
            {profile.headline.main}
            <em className="font-display font-medium italic">{profile.headline.emphasis}</em>.
          </LineReveal>
        </h1>

        <motion.p
          {...fade(0.6)}
          className="mt-7 max-w-md font-sans text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div {...fade(0.72)} className="mt-9 flex items-center gap-3 sm:mt-11">
          <span className="shrink-0 whitespace-nowrap font-sans text-sm font-semibold tracking-[0.02em] text-ink">
            {profile.experience.years}
          </span>
          <span className="h-px w-6 shrink-0 bg-ink/30" />
          <span className="font-sans text-xs uppercase tracking-[0.16em] text-ink/70">
            {profile.experience.companies.join('  ·  ')}
          </span>
        </motion.div>
      </section>

      <motion.footer
        {...fade(0.85)}
        className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2 font-sans text-sm">
          <a
            href={profile.cv.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 font-medium text-ink"
          >
            <span className="relative inline-block py-0.5">
              {profile.cv.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left bg-ink transition-transform duration-300 ease-out group-hover:scale-x-0" />
            </span>
            <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              &#8599;
            </span>
          </a>
          {profile.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-block py-0.5 text-ink/55 transition-colors duration-200 hover:text-ink"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-muted">
          {new Date().getFullYear()} <span className="mx-1 text-line">/</span> {profile.location}
        </span>
      </motion.footer>
    </main>
  );
}

export default App;
