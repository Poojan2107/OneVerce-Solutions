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
          {/* Asymmetric Creative Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 w-full max-w-7xl items-center">
            
            {/* Left Column: Text */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-3xl mb-8 group shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                 <Sparkles size={14} className="text-fuchsia-400 animate-pulse" />
                 <span className="text-zinc-300 font-medium uppercase tracking-[0.3em] text-[10px]">
                   Creative Systems <span className="text-white font-bold">V2.0</span>
                 </span>
              </div>
              
              <h1 className="perspective-2000 uppercase text-left drop-shadow-2xl mb-8" style={{ wordBreak: 'keep-all' }}>
                <motion.span 
                  className="text-white block font-black"
                  style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}
                >
                  Architecting
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent block font-black mt-2"
                  style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}
                >
                  Infinity Flow
                </motion.span>
              </h1>

              <p className="text-zinc-400 text-lg leading-relaxed font-normal tracking-wide max-w-lg mb-10">
                We fuse deep engineering with <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300 font-bold">eccentric digital artistry</span>. Stop building websites and start architecting universes.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
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
                <Magnetic>
                  <button className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(45,212,191,0.15)] group relative">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-0.5 z-10" />
                  </button>
                </Magnetic>
              </div>
            </div>

            {/* Right Column: Interactive Glass OS Widget */}
            <Magnetic>
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 flex flex-col justify-between overflow-hidden group shadow-2xl">
                 {/* Ambient inner glow */}
                 <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-transparent to-cyan-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 {/* Geometric decorative elements */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-500/20 rounded-full blur-3xl group-hover:bg-fuchsia-500/40 transition-colors duration-700" />
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/40 transition-colors duration-700" />

                 <div className="flex justify-between items-start relative z-10">
                    <div className="w-14 h-14 rounded-2xl border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-md shadow-inner">
                       <Zap size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="text-right">
                       <span className="block text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-mono mb-1">System Load</span>
                       <span className="block text-2xl font-black text-white font-mono">99.9%</span>
                    </div>
                 </div>

                 <div className="relative z-10 flex flex-col gap-6">
                    <h3 className="text-3xl font-black text-white leading-[1.1] tracking-tight">Beyond Traditional<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">Boundaries</span></h3>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                        <span>Creative Capacity</span>
                        <span className="text-fuchsia-400">MAXIMUM</span>
                      </div>
                      <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                         <div className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 w-[90%] rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                      </div>
                    </div>
                 </div>
              </div>
            </Magnetic>

          </div>
        </motion.div>
      </div>

      {/* Atmospheric Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
