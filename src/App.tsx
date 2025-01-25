import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ScrollToTop } from './components/ScrollToTop';
import { CyberGlitch } from './components/CyberGlitch';
import { CyberBackground } from './components/CyberBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cyber-black">
      {/* Background com efeitos */}
      <CyberBackground />
      
      {/* Efeitos de overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-cyber-black/20" />
        <div className="scanline" />
        <CyberGlitch />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        <Header />
        <Experience />
        <Projects />
        <Skills />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;