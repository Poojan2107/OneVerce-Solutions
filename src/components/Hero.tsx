import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Sparkles } from 'lucide-react';
import LogoScene from './LogoScene';
import InfinityScene from './InfinityScene';
import Magnetic from './Magnetic';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Dynamic Spotlight Effect tracking mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { clientX, clientY } = e;
      const { left, top } = sectionRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      sectionRef.current.style.setProperty('--mouse-x', `${x}px`);
      sectionRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center pt-32 md:pt-48 pb-32 overflow-hidden bg-[#050505] bg-blueprint group"
    >
      {/* Dynamic Spotlight that follows the mouse */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"
        style={{
          background: `radial-gradient(1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.08), transparent 40%)`
        }}
      />

      <LogoScene />
      
      {/* Massive Hollow Background Text */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
        <h2 
          className="text-transparent font-black whitespace-nowrap opacity-10 mix-blend-overlay"
          style={{ 
            fontSize: 'clamp(10rem, 30vw, 30rem)', 
            WebkitTextStroke: '2px rgba(255,255,255,0.8)',
            transform: 'translateY(-10%)'
          }}
        >
          ONEVERCE
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-20 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          {/* Ultra-Premium Glass Panel Container */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20 rounded-[2.5rem] md:rounded-[4rem] border border-white/[0.08] bg-black/20 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_0_40px_rgba(255,255,255,0.02)] overflow-hidden">
            
            {/* Ambient Inner Lighting for Glass Panel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-xl mb-6 md:mb-10 group/badge shadow-[0_0_30px_rgba(59,130,246,0.1)]">
               <Zap size={14} className="text-blue-400 group-hover/badge:scale-110 transition-transform duration-300" />
               <span className="text-zinc-300 font-medium uppercase tracking-[0.3em] text-[10px]">
                 Architecture By <span className="text-white font-bold">Oneverce</span>
               </span>
            </div>
            
            <h1 className="perspective-2000 uppercase text-center drop-shadow-2xl mb-2 relative z-20" style={{ wordBreak: 'keep-all' }}>
              <motion.span 
                className="text-white block font-black"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}
              >
                Engineering
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent block font-black mt-2"
                style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
              >
                The Infinite
              </motion.span>
            </h1>

            {/* 3D Infinity Logo Centerpiece */}
            <div className="relative w-full h-[250px] md:h-[400px] -mt-8 md:-mt-12 -mb-6 md:-mb-10 z-10 flex items-center justify-center pointer-events-auto">
               <InfinityScene />
               {/* Center glowing core to anchor the logo */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/15 rounded-full blur-[60px] animate-pulse" />
            </div>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-normal tracking-wide max-w-2xl text-center relative z-30 mb-10">
              We engineer digital infrastructure designed for limitless scale. We don't just build websites; we architect your <span className="text-white font-bold">brand's universe</span>.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 relative z-30">
              <Magnetic>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-4 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 uppercase tracking-[0.2em] text-[11px] font-bold">Initialize Project</span>
                  <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500" />
                </button>
              </Magnetic>
              <Magnetic>
                <button className="w-16 h-16 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(59,130,246,0.2)] group/play relative">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-0.5 z-10" />
                </button>
              </Magnetic>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Atmospheric Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
