import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md/80 bg-black/30 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400/80 to-cyan-400/80 grid place-items-center shadow-lg shadow-emerald-500/20">
            <Sparkles size={16} className="text-black" />
          </div>
          <span className="font-semibold tracking-wider">Echelon Studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="px-6 py-4 space-y-3 text-white/90">
            <a href="#work" className="block">Work</a>
            <a href="#studio" className="block">Studio</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
