import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-fuchsia-100 via-violet-100 to-sky-100">
      {/* Subtle animated blobs for color depth */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-24 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 -bottom-24 h-[28rem] w-[28rem] rounded-full bg-sky-300/40 blur-3xl"
        animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 gap-8 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        {/* Copy */}
        <div className="z-10 flex flex-col justify-center space-y-6 lg:col-span-5">
          <motion.span
            className="inline-flex w-fit items-center gap-2 rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Haute Couture & Stage
          </motion.span>

          <motion.h1
            className="font-[800] text-5xl leading-[1.05] text-zinc-900 sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Costumes that move
            <span className="bg-gradient-to-r from-fuchsia-600 via-violet-600 to-sky-600 bg-clip-text text-transparent"> culture</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-zinc-700 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            High-fashion silhouettes and theatrical storytelling. Crafted by hand, designed for light, movement, and emotion.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <a
              href="#gallery"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-sky-600 px-6 py-3 text-white shadow-lg shadow-fuchsia-600/20 transition-transform hover:scale-[1.02]"
            >
              Explore Works
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-full border border-zinc-300/70 bg-white/60 px-6 py-3 text-zinc-900 backdrop-blur-md transition-colors hover:bg-white"
            >
              About the Designer
            </a>
          </motion.div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[50vh] w-full rounded-xl border border-white/40 bg-white/30 backdrop-blur-sm lg:col-span-7 lg:h-[70vh]">
          <Spline
            scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* Iridescent overlay for polish */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/30" />
        </div>
      </div>
    </section>
  );
}
