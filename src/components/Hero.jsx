import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(99,102,241,0.35),transparent),radial-gradient(1200px_600px_at_90%_10%,rgba(34,211,238,0.25),transparent)]" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24 sm:pt-44 sm:pb-28 md:pt-48 md:pb-32">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_0_25px_rgba(56,189,248,0.15)]"
            >
              Crafting intelligent brands with AI that feels alive
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
            >
              We build AI-powered websites, assistants, and tools that blend stunning design with real business impact. Smooth, fast, and unmistakably modern.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-6 py-3 text-base font-semibold text-white shadow-[0_10px_40px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Start your project
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/10 px-6 py-3 text-base font-medium text-white/90 backdrop-blur-xl">
                See our work
              </a>
            </motion.div>

            {/* Liquid glass card row */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'AI Agents', desc: '24/7 service and sales assistants' },
                { title: 'Web Experiences', desc: 'Frictionless, animated, responsive' },
                { title: 'Automation', desc: 'Workflows that scale without the busywork' },
              ].map((c) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-sm font-semibold text-white/90">{c.title}</div>
                  <div className="text-sm text-white/70 mt-1">{c.desc}</div>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glass gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/0 to-slate-900/60" />
    </section>
  )
}
