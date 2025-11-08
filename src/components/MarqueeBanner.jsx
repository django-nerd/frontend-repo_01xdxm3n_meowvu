import React from 'react';

export default function MarqueeBanner() {
  return (
    <div className="relative mx-auto my-12 w-full max-w-7xl overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-center text-lg font-semibold text-zinc-200">
        🎪 Step right up • 🎠 Code & Creativity • 🎭 Playful Experiences • 🎪 Step right up • 🎠 Code & Creativity • 🎭 Playful Experiences •
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
