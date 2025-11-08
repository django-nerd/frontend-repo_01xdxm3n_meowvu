import React from 'react';
import { Star, Sparkles, Rocket } from 'lucide-react';

const acts = [
  {
    title: 'Tightrope UI',
    desc: 'A perfectly balanced interface kit with framer-motion stunts and Tailwind flair.',
    tag: 'Frontend',
  },
  {
    title: 'Lionhearted API',
    desc: 'FastAPI microservices tamed with Pydantic and MongoDB for persistent tricks.',
    tag: 'Backend',
  },
  {
    title: 'Juggler DevOps',
    desc: 'CI/CD choreography with containers, linting, and tests kept in the air.',
    tag: 'DevOps',
  },
];

export default function ActsShowcase() {
  return (
    <section id="projects" className="relative mx-auto mb-24 mt-4 max-w-6xl px-6">
      <div className="mb-8 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-yellow-300" />
        <h2 className="font-display text-3xl font-bold text-white">The Main Acts</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {acts.map((a) => (
          <div key={a.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-6 text-white shadow-lg backdrop-blur transition-transform hover:-translate-y-1">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-tr from-rose-500/20 via-fuchsia-500/20 to-amber-500/20 blur-2xl" />
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
              <Rocket className="h-3 w-3" /> {a.tag}
            </div>
            <h3 className="font-display text-xl font-semibold">{a.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{a.desc}</p>
            <div className="mt-6 flex items-center gap-1 text-yellow-300">
              <Star className="h-4 w-4 fill-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-300" />
              <Star className="h-4 w-4 fill-yellow-300" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
