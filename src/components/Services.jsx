import { motion } from 'framer-motion'
import { Bot, Globe, Workflow, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Bot,
    title: 'Custom AI Agents',
    desc: 'Conversational assistants that understand your brand and deliver real outcomes.'
  },
  {
    icon: Globe,
    title: 'Websites & Apps',
    desc: 'High-performance sites with buttery animations and glassmorphic aesthetics.'
  },
  {
    icon: Workflow,
    title: 'Automation Systems',
    desc: 'Connect tools and data to eliminate busywork and scale operations.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    desc: 'Privacy-first implementations with robust monitoring and guardrails.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_80%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold text-white"
        >
          What we do
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/70 via-blue-500/70 to-cyan-400/70 p-3 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{item.desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
