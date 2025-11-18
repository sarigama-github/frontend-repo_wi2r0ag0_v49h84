import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
          <a href="#" className="group inline-flex items-center gap-2">
            <div className="grid place-items-center rounded-xl bg-gradient-to-br from-indigo-500/70 via-blue-500/70 to-cyan-400/70 p-2 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span className="text-white/90 font-semibold tracking-tight">Aether AI Agency</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-white/70 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Start a Project
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 p-2 rounded-lg bg-white/10 border border-white/10">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-white/80">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
