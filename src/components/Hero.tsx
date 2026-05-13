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
          className="w-full flex justify-center"
        >
          {/* Centered Infinity Layout */}
          <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 relative z-20">
            
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl mb-4 md:mb-8 group">
               <Zap size={14} className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
               <span className="text-zinc-300 font-medium uppercase tracking-[0.3em] text-[10px]">
                 Architecture By <span className="text-white font-bold">Oneverce</span>
               </span>
            </div>
            
            <h1 className="perspective-2000 uppercase text-center drop-shadow-2xl mb-2 relative z-20" style={{ wordBreak: 'keep-all' }}>
              <motion.span 
                className="text-white block font-black"
                style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}
              >
                Engineering
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-blue-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent block font-black mt-2"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
              >
                The Infinite
              </motion.span>
            </h1>

            {/* Infinity Scene acts as the visual core, overlaying slightly with text */}
            <div className="relative w-full h-[300px] md:h-[450px] -mt-10 md:-mt-16 -mb-8 md:-mb-16 z-10 flex items-center justify-center pointer-events-auto">
               <InfinityScene />
               {/* Center glowing core for the logo to rest on */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] animate-pulse" />
            </div>

            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-normal tracking-wide max-w-2xl text-center relative z-30 mb-10">
              We engineer digital infrastructure designed for limitless scale. We don't just build websites; we architect your <span className="text-white font-bold">brand's universe</span>.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 relative z-30">
              <Magnetic>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center gap-4 group relative overflow-hidden"
                >
                  <span className="relative z-10 uppercase tracking-[0.2em] text-[11px] font-bold">Initialize Project</span>
                  <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </Magnetic>
              <Magnetic>
                <button className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.15)] group relative">
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
