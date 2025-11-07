import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Phone, Globe } from 'lucide-react';

const initial = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setForm(initial), 400);
  };

  return (
    <section id="contact" className="relative w-full bg-[#060a15] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Contatti</h2>
            <p className="mt-3 text-white/70">Prenota una consulenza o richiedi un preventivo. Rispondo entro 24h.</p>

            <div className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-sky-400" /><span>hello@aichiefofficer.io</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-400" /><span>+39 320 000 0000</span></div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-sky-400" /><span>@ai.chief.officer</span></div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-white/60">
              <p>
                Nota: questo modulo è dimostrativo. Integra uno strumento email o CRM (es. Resend, Mailgun, HubSpot) per ricevere messaggi reali.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm">
                <span className="mb-1 block text-white/80">Nome</span>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-sky-400/60">
                  <User className="h-4 w-4 text-sky-300" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full bg-transparent text-white placeholder-white/40 outline-none"
                    placeholder="Il tuo nome"
                    required
                  />
                </div>
              </label>

              <label className="text-sm">
                <span className="mb-1 block text-white/80">Email</span>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-sky-400/60">
                  <Mail className="h-4 w-4 text-sky-300" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full bg-transparent text-white placeholder-white/40 outline-none"
                    placeholder="nome@azienda.com"
                    required
                  />
                </div>
              </label>

              <label className="text-sm">
                <span className="mb-1 block text-white/80">Messaggio</span>
                <div className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-sky-400/60">
                  <MessageSquare className="mt-2 h-4 w-4 text-sky-300" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    className="w-full bg-transparent text-white placeholder-white/40 outline-none"
                    placeholder="Parlami del tuo progetto..."
                    required
                  />
                </div>
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                <Send className="h-4 w-4" /> Invia messaggio
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-emerald-400"
                >
                  Grazie! Il tuo messaggio è stato inviato (demo).
                </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
