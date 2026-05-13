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
      className="min-h-screen relative flex items-center justify-center pt-32 pb-32 overflow-hidden bg-[#050505] group"
    >
      {/* Background Layer: 3D Infinity Animation */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden scale-110">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Subtle overlay for text contrast */}
        <InfinityScene />
      </div>

      {/* Dynamic Spotlight that follows the mouse */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"
        style={{
          background: `radial-gradient(1200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 240, 240, 0.05), transparent 40%)`
        }}
      />

      {/* Massive Hollow Background Text - Drifting slightly */}
      <motion.div 
        animate={{ x: [-10, 10, -10], y: [-5, 5, -5] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none select-none overflow-hidden"
      >
        <h2 
          className="text-transparent font-black whitespace-nowrap opacity-[0.03] mix-blend-overlay"
          style={{ 
            fontSize: 'clamp(15rem, 40vw, 45rem)', 
            WebkitTextStroke: '1px rgba(255,255,255,0.8)',
            transform: 'rotate(-5deg)'
          }}
        >
          ONEVERCE
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {/* Main Content Overlay */}
          <div className="relative flex flex-col items-center justify-center w-full py-20">
            
            {/* Top Label with glow */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 group/badge shadow-[0_0_30px_rgba(0,240,240,0.1)]"
            >
               <Zap size={14} className="text-[#00f0f0] animate-pulse" />
               <span className="text-zinc-400 font-medium uppercase tracking-[0.4em] text-[10px]">
                 Architecture By <span className="text-white font-bold">Oneverce</span>
               </span>
            </motion.div>
            
            <h1 className="uppercase text-center mb-8 relative z-20 pointer-events-none" style={{ wordBreak: 'keep-all' }}>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-white block font-black mb-2"
                style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', letterSpacing: '-0.02em', lineHeight: 0.85 }}
              >
                Engineering
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="bg-clip-text text-transparent block font-black pb-4"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #00f0f0, #0070b0, #f05060, #f09010, #f0f070)',
                  fontSize: 'clamp(4rem, 10vw, 11rem)', 
                  letterSpacing: '-0.04em', 
                  lineHeight: 0.85,
                  filter: 'drop-shadow(0 0 30px rgba(240,80,96,0.3))'
                }}
              >
                The Infinite
              </motion.span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-zinc-400 text-lg md:text-2xl leading-relaxed font-light tracking-wide max-w-3xl text-center relative z-30 mb-12"
            >
              We engineer digital infrastructure designed for <span className="text-white font-bold">limitless scale</span>. 
              We architect your brand's universe through surgical technical precision.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="flex items-center justify-center relative z-30"
            >
              <Magnetic>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-14 py-6 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.3)] flex items-center gap-4 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 uppercase tracking-[0.25em] text-[11px] font-black">Initialize Project</span>
                  <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </Magnetic>
            </motion.div>

          </div>
        </motion.div>
      </div>
      {/* Atmospheric Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
