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
          className="max-w-5xl will-change-transform"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-zinc-950 border border-white/10 backdrop-blur-3xl mb-10 group cursor-pointer hover:border-blue-500/50 transition-all duration-700">
            <Sparkles size={12} className="text-blue-500 animate-pulse" />
            <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[9px]">
              Oneverce <span className="text-white">Engineered_Universe_v2.0</span>
            </span>
          </div>

          <h1 className="perspective-2000 uppercase text-center mb-10" style={{ wordBreak: 'keep-all' }}>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.2 }}
              className="text-white block font-black"
              style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
            >
              Architecting
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ delay: 0.4, duration: 1.2 }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent block font-black"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: 1.05, wordBreak: 'normal' }}
            >
              Infinity Flow
            </motion.span>
          </h1>
 
          <p className="text-zinc-400 text-lg md:text-xl leading-loose mb-16 max-w-2xl mx-auto font-medium tracking-wide">
            Systems engineered for operational scale. We replace technical debt with <span className="text-white font-bold">high-fidelity digital infrastructure</span> that commands market authority.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Magnetic>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_80px_rgba(255,255,255,0.15)] flex items-center gap-4 group relative overflow-hidden"
              >
                <span className="relative z-10 uppercase tracking-[0.3em] text-[10px]">Access Infrastructure</span>
                <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-white -translate-x-full group-hover:translate-x-0 transition-transform duration-700 opacity-20" />
              </button>
            </Magnetic>
            
            <div className="flex items-center gap-4">
              <Magnetic>
                <button className="w-14 h-14 rounded-full border border-white/10 bg-zinc-950/50 backdrop-blur-3xl flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-current border-b-[6px] border-b-transparent ml-0.5" />
                </button>
              </Magnetic>

              <div className="flex items-center gap-5 py-3 px-6 rounded-full border border-white/5 bg-zinc-950/50 backdrop-blur-3xl group hover:border-white/20 transition-all">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-900 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-bold uppercase tracking-[0.4em] text-[8px] text-zinc-600">Sync_Status</span>
                  <span className="text-blue-400 text-[11px] font-bold tracking-tighter font-mono">STABLE_9.98</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
