import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, TrendingUp, Sparkles } from 'lucide-react';
import LogoScene from './LogoScene';
import InfinityScene from './InfinityScene';
import Magnetic from './Magnetic';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-32 md:pt-48 pb-32 overflow-hidden bg-[#050505] bg-blueprint">
      <LogoScene />
      
      {/* Background Polish - Tactical Grid & HUD */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-blue-600/[0.03] rounded-full blur-[180px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-purple-600/[0.03] rounded-full blur-[180px] animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/[0.04] rounded-full blur-[150px]" />
      </div>

      {/* Epic Centerpiece Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-40 scale-125 md:scale-150 select-none">
        <InfinityScene />
      </div>

      {/* Floating Tactical Reticles */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-white/[0.05] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px] md:w-[620px] md:h-[620px] border border-white/[0.02] rounded-full animate-spin-slow" />
        
        {/* Corner Reticles */}
        <div className="absolute top-20 left-20 w-32 h-32 opacity-20 border-t border-l border-white/20" />
        <div className="absolute top-20 right-20 w-32 h-32 opacity-20 border-t border-r border-white/20" />
        <div className="absolute bottom-20 left-20 w-32 h-32 opacity-20 border-b border-l border-white/20" />
        <div className="absolute bottom-20 right-20 w-32 h-32 opacity-20 border-b border-r border-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl will-change-transform flex flex-col items-center"
        >
          {/* Artistic Floating Badge */}
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl mb-10 group cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <Sparkles size={14} className="text-fuchsia-400 animate-pulse" />
            <span className="text-zinc-300 font-medium uppercase tracking-[0.3em] text-[10px]">
              Creative Systems <span className="text-white font-bold">V2.0</span>
            </span>
          </div>

          {/* Artistic Typography with Glowing Echo */}
          <div className="relative mb-12 w-full max-w-4xl mx-auto">
            {/* Background glowing echo text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 blur-2xl pointer-events-none select-none mix-blend-screen">
               <span className="text-transparent font-black" style={{ WebkitTextStroke: '4px #c084fc', fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.85 }}>Architecting</span>
               <span className="text-transparent font-black mt-2" style={{ WebkitTextStroke: '4px #2dd4bf', fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 0.85 }}>Infinity Flow</span>
            </div>

            <h1 className="relative z-10 perspective-2000 uppercase text-center drop-shadow-2xl" style={{ wordBreak: 'keep-all' }}>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="text-white block font-black"
                style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}
              >
                Architecting
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ delay: 0.4, duration: 1.2, type: "spring" }}
                className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block font-black mt-2"
                style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', letterSpacing: '-0.03em', lineHeight: 0.9, wordBreak: 'normal' }}
              >
                Infinity Flow
              </motion.span>
            </h1>
          </div>
 
          {/* Soft Creative Subheadline */}
          <div className="relative max-w-2xl mx-auto mb-16 px-4">
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-normal tracking-wide text-center">
              We fuse deep engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300 font-bold">eccentric digital artistry</span>. Stop building websites and start architecting universes.
            </p>
          </div>

          {/* Playful Floating Interactions */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Magnetic>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white rounded-full font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_40px_rgba(192,132,252,0.4)] flex items-center gap-4 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 uppercase tracking-[0.2em] text-[11px] font-bold">Start The Journey</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </Magnetic>
            
            <div className="flex items-center gap-4">
              <Magnetic>
                <button className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(45,212,191,0.15)] group relative">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-0.5 z-10" />
                </button>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
