import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Instagram, Funnel, Video, Code, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: ImageIcon,
    title: 'Generazione di immagini pubblicitarie con AI',
    desc: 'Visual unici e performanti per campagne che convertono, creati su commissione con modelli generativi.'
  },
  {
    icon: Instagram,
    title: 'Crescita e gestione profili Instagram',
    desc: 'Strategie data‑driven e automazioni per aumentare reach, engagement e conversioni.'
  },
  {
    icon: Funnel,
    title: 'Funnel di marketing personalizzati',
    desc: 'Architetture end‑to‑end: lead magnet, email sequence, automazioni e tracciamenti avanzati.'
  },
  {
    icon: Video,
    title: 'Produzione di video con AI',
    desc: 'Script, voice‑over e montaggio automatizzato per contenuti rapidi e professionali.'
  },
  {
    icon: Code,
    title: 'Siti web con AI',
    desc: 'Design e sviluppo moderni, ottimizzati per SEO e performance, potenziati dall’AI.'
  },
  {
    icon: MessageSquare,
    title: 'Prompt engineering e formazione',
    desc: 'Metodologie e prompt pronti all’uso per risultati ripetibili su modelli generativi.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-[#070b18] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)] blur-2xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            Servizi end‑to‑end alimentati dall’AI
          </h2>
          <p className="mt-3 text-white/70">
            Dalla strategia alla produzione: porto il tuo brand in una nuova dimensione digitale.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * idx }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl transition-opacity group-hover:opacity-70" />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-sky-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
