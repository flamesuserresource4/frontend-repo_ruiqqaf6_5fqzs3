import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-end">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-light">Let’s discuss your project</h3>
              <p className="text-white/70 mt-3 max-w-xl">We work with founders, family offices and institutions on singular spaces and objects. Discretion assured.</p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium tracking-wide hover:bg-emerald-300 transition-colors">
                Request a Consultation
              </a>
            </div>
          </div>
        </div>
        <p className="text-white/40 text-xs mt-6">© {new Date().getFullYear()} Echelon Studio. All rights reserved.</p>
      </div>
    </section>
  )
}
