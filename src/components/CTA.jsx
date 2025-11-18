import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_100%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-semibold text-white"
            >
              Let’s build something intelligent
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="mt-2 text-white/80"
            >
              Tell us about your vision and we’ll come back with a plan, timeline, and budget.
            </motion.p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your name" />
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email or phone" />
              <textarea className="sm:col-span-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/40" rows="4" placeholder="What do you want to build?" />
              <div className="sm:col-span-2">
                <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_40px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Get proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
