import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient & vignette overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_160px_40px_rgba(0,0,0,0.8)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Sparkles className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-zinc-200">Welcome to the Circus of Code</span>
        </div>
        <h1 className="font-display bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Step Right Up to My Portfolio!
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-zinc-300">
          A playful, modern showcase of projects and personality — with a touch of circus magic and lots of motion.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#profile" className="group rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/30 transition-transform duration-200 hover:-translate-y-0.5">
            Meet the Performer
          </a>
          <a href="#projects" className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10">
            See the Acts
          </a>
        </div>
      </div>
    </section>
  );
}
