import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function RotatingProfileCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="profile" className="relative z-10 mx-auto -mt-16 mb-24 flex max-w-5xl flex-col items-center px-6">
      <h2 className="mb-8 text-center font-display text-4xl font-extrabold text-white drop-shadow-sm">
        The Tarot of Talent
      </h2>
      <div
        className="group perspective-1000"
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`relative h-[420px] w-[300px] cursor-pointer transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? 'rotate-y-180' : ''
        }`}>
          {/* Front */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-rose-500/20 via-fuchsia-500/20 to-amber-500/20 p-0.5 [backface-visibility:hidden]">
            <div className="flex h-full w-full flex-col items-center justify-between rounded-2xl bg-zinc-900/80 p-6 text-white shadow-2xl backdrop-blur">
              <div className="mt-2 text-center">
                <p className="text-xs uppercase tracking-widest text-amber-300/80">Major Arcana</p>
                <h3 className="mt-1 font-display text-3xl font-bold">The Coder</h3>
              </div>
              <div className="relative my-4 h-40 w-40">
                <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-tr from-rose-500/30 via-fuchsia-500/30 to-amber-500/30 blur-xl" />
                <img
                  src="https://api.dicebear.com/7.x/identicon/svg?seed=developer"
                  alt="Avatar"
                  className="relative z-10 h-40 w-40 rounded-xl border border-white/10 bg-zinc-800/70 p-2 shadow-lg"
                />
              </div>
              <p className="text-center text-sm text-zinc-300">
                A curious conjurer of code, turning ideas into delightful digital spectacles.
              </p>
              <div className="mt-4 grid w-full grid-cols-3 gap-2">
                <span className="rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-zinc-200">React</span>
                <span className="rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-zinc-200">FastAPI</span>
                <span className="rounded-lg bg-white/5 px-3 py-2 text-center text-xs text-zinc-200">MongoDB</span>
              </div>
            </div>
          </div>
          {/* Back */}
          <div className="absolute inset-0 rotate-y-180 rounded-2xl border border-white/10 bg-gradient-to-br from-amber-500/20 via-rose-500/20 to-fuchsia-500/20 p-0.5 [backface-visibility:hidden]">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-2xl bg-zinc-900/80 p-6 text-white shadow-2xl backdrop-blur">
              <p className="text-center text-sm text-zinc-300">
                Find me under the big top of the internet. Let's create something spectacular together!
              </p>
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 p-3 text-white/90 transition-colors hover:bg-white/10"><Github className="h-5 w-5" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-lg bg-white/5 p-3 text-white/90 transition-colors hover:bg-white/10"><Linkedin className="h-5 w-5" /></a>
                <a href="mailto:you@example.com" className="rounded-lg bg-white/5 p-3 text-white/90 transition-colors hover:bg-white/10"><Mail className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
