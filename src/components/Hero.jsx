import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#060814] via-[#0a0f1f] to-[#0b1022] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient aura overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(66,133,244,0.35),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute top-10 left-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.25),transparent_60%)] blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-28 pb-16 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80 backdrop-blur-sm">
            <Rocket className="h-3.5 w-3.5 text-sky-400" />
            AI Chief Officer – Soluzioni digitali 360°
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Porta il tuo business nel futuro con
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-transparent"> l'AI</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            Brand identity immersiva, marketing ad alte prestazioni e sviluppo digitale alimentato dall'intelligenza artificiale.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Scopri i miei servizi
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              Prenota una consulenza
            </a>
          </div>
        </motion.div>

        {/* Kinetic tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative mt-14 w-full overflow-hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1022] via-transparent to-[#0b1022]" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
            className="flex w-[200%] gap-12 whitespace-nowrap text-sm text-white/60"
          >
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="tracking-widest">
                • Generazione immagini AI • Funnel Marketing • Instagram Growth • Video AI • Siti Web AI • Prompt Engineering
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
