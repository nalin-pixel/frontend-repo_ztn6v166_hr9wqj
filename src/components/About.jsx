import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#060a15] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 w-full lg:order-1 lg:w-1/2"
          >
            <h2 className="text-3xl font-bold sm:text-4xl">
              Chi sono
            </h2>
            <p className="mt-4 text-white/70">
              Sono un AI Chief Officer con una missione: fondere creatività, dati e automazione per far crescere il tuo business. Dalla generazione di immagini e video con AI alla creazione di funnel e strategie social, trasformo obiettivi in risultati concreti.
            </p>
            <p className="mt-3 text-white/70">
              Lavoro con metodologie sperimentate, prompt ottimizzati e sistemi scalabili per portare il tuo brand nel metaverso del marketing moderno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 w-full lg:order-2 lg:w-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_60%)] blur-2xl" />
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-fuchsia-300">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Chief Officer</h3>
                  <p className="text-sm text-white/70">Strategia • Automazione • Creatività</p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
                <li>• Prompt engineering avanzato</li>
                <li>• Workflow generativi per immagini e video</li>
                <li>• Funnel e campagne data‑driven</li>
                <li>• Sviluppo web ottimizzato SEO</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
