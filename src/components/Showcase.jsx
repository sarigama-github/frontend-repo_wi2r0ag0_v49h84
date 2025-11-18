import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Aurora Foods',
    desc: 'AI concierge that routed support and boosted conversion by 21%.'
  },
  {
    title: 'Nimbus SaaS',
    desc: 'Interactive docs and in-product agent for instant onboarding.'
  },
  {
    title: 'Atlas Finance',
    desc: 'Secure automation for KYC, audits, and reporting at scale.'
  }
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_20%_100%,rgba(99,102,241,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          Selected work
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/25 via-blue-500/25 to-cyan-400/25 border border-white/10" />
              <h3 className="mt-4 text-white font-semibold">{p.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
