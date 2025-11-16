import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Interstice House',
    location: 'Lake Zurich, 2025',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Obsidian Office',
    location: 'Dubai, 2024',
    image: 'https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Halo Pavilion',
    location: 'Seoul, 2025',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-light">Selected Works</h2>
            <p className="text-white/60 mt-2">A study in restraint and presence</p>
          </div>
          <a href="#" className="hidden sm:inline text-emerald-300 hover:text-white transition-colors">All projects →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <div className="text-sm text-white/70">{p.location}</div>
                <div className="text-xl font-medium">{p.title}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
