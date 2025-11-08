import React from 'react';
import HeroSection from './components/HeroSection';
import RotatingProfileCard from './components/RotatingProfileCard';
import ActsShowcase from './components/ActsShowcase';
import MarqueeBanner from './components/MarqueeBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <RotatingProfileCard />
      <MarqueeBanner />
      <ActsShowcase />
      <footer className="mx-auto mt-24 max-w-6xl px-6 pb-16 text-center text-sm text-zinc-400">
        Built with a circus of modern web tools. Roll up, roll up! 🎪
      </footer>
    </div>
  );
}
