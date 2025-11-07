import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  {
    title: 'Campagna e‑commerce con immagini AI',
    desc: 'CTR +42% e CPA -28% con visual generativi su misura.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Reel Instagram automatizzati',
    desc: 'Calendario editoriale e montaggio AI con crescita follower +18%/mese.',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Funnel lead gen B2B',
    desc: 'Landing + sequenza email: +3.1x lead qualificati in 60 giorni.',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop'
  }
];

const Showcase = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#070b18] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Portfolio & Case Study</h2>
          <p className="mt-3 text-white/70">Progetti reali e risultati misurabili.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70">{it.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-amber-300">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs">Risultati certificati</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
