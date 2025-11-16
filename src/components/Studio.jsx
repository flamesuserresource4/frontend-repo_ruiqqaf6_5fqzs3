import { motion } from 'framer-motion'
import { LineChart, Ruler, Palette } from 'lucide-react'

const values = [
  {
    icon: Ruler,
    title: 'Precision',
    desc: 'Engineering-grade detail married with poetic clarity.'
  },
  {
    icon: Palette,
    title: 'Clarity',
    desc: 'A reductive approach that reveals essential character.'
  },
  {
    icon: LineChart,
    title: 'Performance',
    desc: 'Spaces that elevate focus, flow and longevity.'
  }
]

export default function Studio() {
  return (
    <section id="studio" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-light">Studio</h2>
          <p className="text-white/60 mt-2 max-w-2xl">We are a small, senior team crafting spatial identities for leaders in technology, culture and private residential. We operate globally from Zürich.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <v.icon className="text-emerald-300 mb-4" />
              <div className="text-lg font-medium">{v.title}</div>
              <div className="text-white/70 mt-2 text-sm">{v.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
