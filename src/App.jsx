import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Gallery from './components/Gallery';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#" className="font-extrabold tracking-tight">ATELIER AZURE</a>
          <div className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#showreel" className="hover:text-fuchsia-600">Showreel</a>
            <a href="#gallery" className="hover:text-violet-600">Gallery</a>
            <a href="#about" className="hover:text-sky-600">About</a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <Showreel />
        <Gallery />
        <About />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Atelier Azure. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="hover:text-fuchsia-600">Instagram</a>
              <a href="#" className="hover:text-violet-600">Vimeo</a>
              <a href="#" className="hover:text-sky-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
