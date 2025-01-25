import React from 'react';
import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ScrollToTop } from './components/ScrollToTop';
import { CyberGlitch } from './components/CyberGlitch';
import { Terminal } from './components/Terminal';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black old-screen">
      <div className="scanline"></div>
      <CyberGlitch />
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Terminal />
      <ScrollToTop />
    </div>
  );
}

export default App;