import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050914] text-white">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#050914]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-fuchsia-500">
              <Rocket className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-wide text-white">AI Chief Officer</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">Chi sono</a>
            <a href="#services" className="hover:text-white">Servizi</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#050914] py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} AI Chief Officer — Soluzioni digitali 360°. Tutti i diritti riservati.
      </footer>
    </div>
  );
}

export default App;
