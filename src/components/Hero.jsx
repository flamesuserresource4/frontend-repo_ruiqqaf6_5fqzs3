import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,170,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-emerald-300/80 text-xs mb-4">Architecture & Design</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1]">
            Minimal futures in crafted space.
          </h1>
          <p className="mt-6 text-white/70 max-w-xl">
            We design exquisite, human-centered environments for visionary brands and private clients. Refined minimalism, engineered precision, timeless presence.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium tracking-wide hover:bg-emerald-300 transition-colors">
              View Selected Work
            </a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium tracking-wide hover:border-white/40 hover:bg-white/5 transition-colors">
              Enquire
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
