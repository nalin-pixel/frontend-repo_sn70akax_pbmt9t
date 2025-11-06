import { useEffect, useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542060748-10c28b62716c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543610892-0b1f7e6e94b0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1458530970867-aaa3700e966d?q=80&w=1600&auto=format&fit=crop'
];

export default function Gallery() {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let anim;
    const step = () => {
      el.scrollLeft += 0.6;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
      anim = requestAnimationFrame(step);
    };
    anim = requestAnimationFrame(step);
    return () => cancelAnimationFrame(anim);
  }, []);

  return (
    <section id="gallery" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Selected Works</h2>
          <p className="mt-2 max-w-2xl text-zinc-600">From runway couture to stage transformations.</p>
        </div>

        <div
          ref={scrollerRef}
          className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl"
        >
          {images.map((src, i) => (
            <figure
              key={i}
              className="group relative aspect-[3/4] w-72 shrink-0 snap-start overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt="Fashion look"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
