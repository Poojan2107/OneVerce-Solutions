import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, Zap, ShieldCheck, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { results } from '../data/portfolioData';
import { useAudioUI } from '../context/AudioUIContext';

const accentMap: Record<string, { bg: string; border: string; text: string; glow: string; accentColor: string }> = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    text: 'text-emerald-400',
    glow: 'shadow-[0_0_40px_rgba(16,185,129,0.05)]',
    accentColor: 'rgb(16,185,129)'
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    text: 'text-blue-400',
    glow: 'shadow-[0_0_40px_rgba(59,130,246,0.05)]',
    accentColor: 'rgb(59,130,246)'
  },
  red: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/20 hover:border-red-500/40',
    text: 'text-red-400',
    glow: 'shadow-[0_0_40px_rgba(239,68,68,0.05)]',
    accentColor: 'rgb(239,68,68)'
  },
};

export default function Testimonials() {
  const { playHover, playClick } = useAudioUI();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  const activeResult = results[currentIdx];
  const activeAccent = accentMap[activeResult.accent];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimer.current = setInterval(() => {
        setCurrentIdx(prev => (prev + 1) % results.length);
      }, 6000);
    }
    return () => {
      if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
    };
  }, [isAutoPlaying]);

  const handleNext = () => {
    playClick();
    setCurrentIdx(prev => (prev + 1) % results.length);
  };

  const handlePrev = () => {
    playClick();
    setCurrentIdx(prev => (prev - 1 + results.length) % results.length);
  };

  const selectIdx = (idx: number) => {
    playClick();
    setCurrentIdx(idx);
  };

  const toggleAutoPlay = () => {
    playClick();
    setIsAutoPlaying(prev => !prev);
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 sm:py-24 bg-[#0a0a0c] relative overflow-hidden bg-blueprint"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Proof of Impact</span>
          </div>
          <h2 id="testimonials-heading" className="heading-xl text-white uppercase mb-4">
            Delivered Results
          </h2>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto font-medium leading-relaxed">
            Real outcomes from real deployments — every metric earned in production.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[280px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.a
              key={activeResult.project}
              href={activeResult.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`group block w-full p-8 sm:p-12 rounded-[2.5rem] bg-zinc-900/40 border ${activeAccent.border} ${activeAccent.glow} transition-all duration-500 relative overflow-hidden`}
              style={{ boxShadow: `0 0 50px -12px ${activeAccent.accentColor}15` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-8">
                <div className={`w-12 h-12 rounded-2xl ${activeAccent.bg} flex items-center justify-center ${activeAccent.text}`}>
                  {activeResult.icon}
                </div>
                <div className="text-right">
                  <div className={`text-3xl sm:text-4xl font-black tracking-tighter ${activeAccent.text}`}>{activeResult.metric}</div>
                  <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{activeResult.metricLabel}</div>
                </div>
              </div>

              {/* Project label */}
              <div className="mb-4">
                <div className={`text-[9px] font-bold uppercase tracking-[0.4em] mb-1.5 ${activeAccent.text}`}>{activeResult.category}</div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">{activeResult.project}</h3>
              </div>

              {/* Result text */}
              <p className="text-zinc-300 text-base leading-relaxed font-medium border-l-2 border-white/[0.06] pl-4">
                {activeResult.result}
              </p>

              {/* Hover arrow */}
              <div className={`mt-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] ${activeAccent.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                View Live Deployment <span>↗</span>
              </div>
            </motion.a>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleAutoPlay}
              onMouseEnter={playHover}
              className="w-8 h-8 rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] flex items-center justify-center text-zinc-500 hover:text-white transition-colors cursor-pointer"
              title={isAutoPlaying ? 'Pause Auto Play' : 'Start Auto Play'}
            >
              {isAutoPlaying ? <Pause size={12} /> : <Play size={12} />}
            </button>

            {/* Slides indicators dots */}
            <div className="flex gap-2">
              {results.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => selectIdx(idx)}
                  onMouseEnter={playHover}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIdx === idx ? `w-6 ${activeAccent.bg.replace('bg-', 'bg-').split('/')[0]}` : 'w-1.5 bg-white/10'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              onMouseEnter={playHover}
              className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              onMouseEnter={playHover}
              className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
