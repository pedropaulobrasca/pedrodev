import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Process } from './components/sections/Process';
import { SocialProof } from './components/sections/SocialProof';
import { Portfolio } from './components/sections/Portfolio';
import { About } from './components/sections/About';
import { CtaBanner } from './components/sections/CtaBanner';
import { MarqueeText } from './components/ui/MarqueeText';
import { Showreel } from './components/sections/Showreel';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="relative min-h-screen bg-surface-base">
      <Navbar />
      <Hero />
      <MarqueeText />
      <Showreel />
      <Services />
      <Process />
      <SocialProof />
      <Portfolio />
      <About />
      <CtaBanner />
      <Footer />
      <ScrollToTop />

      <svg
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.028]"
        aria-hidden="true"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}

export default App;
