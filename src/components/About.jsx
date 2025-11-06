import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-violet-50">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-10 px-6 py-24 sm:px-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <motion.h3
            className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            Designer & Costume Architect
          </motion.h3>
          <motion.p
            className="mt-4 text-zinc-700"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I merge haute couture craftsmanship with theatrical imagination. Each garment is built to perform—sculpted silhouettes, experimental textiles, and finishes that respond to light and movement.
          </motion.p>
          <motion.p
            className="mt-3 text-zinc-700"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Collaborations span opera houses, contemporary dance, film, and runway presentations worldwide.
          </motion.p>

          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              ['150+', 'Stage Looks'],
              ['12', 'Runway Caps'],
              ['24', 'Awards'],
            ].map(([n, label]) => (
              <div key={label} className="rounded-xl bg-white/70 p-6 text-center shadow-sm ring-1 ring-zinc-100 backdrop-blur">
                <div className="bg-gradient-to-r from-fuchsia-600 to-sky-600 bg-clip-text text-3xl font-extrabold text-transparent">{n}</div>
                <div className="mt-1 text-xs tracking-wide text-zinc-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <motion.div
            className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-xl ring-1 ring-zinc-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1520975954732-35dd222996f9?q=80&w=1600&auto=format&fit=crop"
              alt="Studio portrait"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-500/10 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
