import { motion } from 'framer-motion';

export default function Showreel() {
  return (
    <section id="showreel" className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Showreel</h2>
            <p className="mt-2 max-w-2xl text-zinc-300">A moving portrait of fabric, light, and character.</p>
          </div>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
          >
            View Gallery
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10">
          <motion.video
            className="h-full w-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-fashion-models-walking-the-runway-4100/1080p.mp4"
            autoPlay
            muted
            loop
            playsInline
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />

          {/* Gradient edges */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/60" />
        </div>
      </div>
    </section>
  );
}
