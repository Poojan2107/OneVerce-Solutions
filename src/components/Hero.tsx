import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';
import InfinityScene from './InfinityScene';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(springY, [-500, 500], [5, -5]);
  const rotateY = useTransform(springX, [-500, 500], [-5, 5]);
  const textX = useTransform(springX, [-500, 500], [8, -8]);
  const textY = useTransform(springY, [-500, 500], [8, -8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero" className="relative min-h-screen w-full bg-[#020202] flex flex-col items-center justify-center overflow-hidden">
      {/* 0. Cinematic Noise Grain Overlay - Disabled on mobile for performance stability */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay hidden md:block">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 1. Surgical Infrastructure Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Technical Perspective Floor */}
        <div 
          className="absolute bottom-0 w-full h-[45vh] bg-[linear-gradient(to_right,#00f0f003_1px,transparent_1px),linear-gradient(to_bottom,#00f0f003_1px,transparent_1px)] bg-[size:60px_60px]" 
          style={{ transform: 'perspective(1200px) rotateX(72deg) scale(2.8)', transformOrigin: 'bottom' }}
        />
      </div>

      {/* 2. The Infinity Core (One Flow) */}
      <div className="absolute inset-0 z-10 opacity-60 sm:opacity-90 flex items-center justify-center -translate-x-0 sm:-translate-x-[2vw] md:scale-100 transition-all duration-1000">
        <InfinityScene mouseX={mouseX} mouseY={mouseY} />
      </div>

      {/* 3. Cinematic Interface HUD */}
      <div className="absolute inset-0 z-20 pointer-events-none p-10 md:pt-40 md:pb-20 md:px-20 hidden md:flex flex-col justify-between">
        <div className="flex justify-between items-start opacity-30 uppercase tracking-[0.4em] text-[9px] font-mono">
          <div className="space-y-2">
            <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00f0f0] animate-pulse" /> Status: Operational</p>
            <p className="text-white/40 font-bold">Core_Engine: Neural_X1</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-[#00f0f0] font-bold">Security_Auth: Passed</p>
            <p className="opacity-50">V_024.9.1</p>
          </div>
        </div>

        <div className="flex justify-between items-end opacity-30 uppercase tracking-[0.4em] text-[9px] font-mono">
          <div className="space-y-1">
            <p className="font-bold text-white">Lat: 0.002ms // Flux: Stable</p>
            <p className="text-white/40">Systems Architecture Studio</p>
          </div>
          <div className="relative group pointer-events-auto cursor-none">
             <div className="border border-white/20 px-4 py-2 backdrop-blur-xl hover:border-[#00f0f0] transition-all duration-500 group-hover:bg-[#00f0f0]/10">
               <p className="group-hover:text-white transition-colors">Venture_Access_Protocol</p>
             </div>
          </div>
        </div>
      </div>

      {/* 4. The Hero Content */}
      <motion.div 
        style={{ rotateX, rotateY, x: textX, y: textY }}
        className="relative z-30 flex flex-col items-center text-center px-4 sm:px-6 max-w-full sm:max-w-7xl mx-auto transform-style-preserve-3d pt-10 md:pt-0"
      >
        
        {/* Identity Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-10 flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-5 md:py-2 rounded-full border border-white/10 bg-white/05 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#00f0f0] animate-pulse shadow-[0_0_15px_#00f0f0]" />
          <span className="text-[6px] md:text-xs font-mono uppercase tracking-[0.2em] md:tracking-[0.6em] text-white/80 whitespace-nowrap">
            Next Generation Studio
          </span>
        </motion.div>

        {/* Primary Headline */}
        <div className="relative mb-6 md:mb-10 group w-full overflow-visible">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] uppercase text-white select-none relative z-10 leading-[0.85] drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Oneverce
          </motion.h1>

          <div className="h-[2px] w-12 md:w-24 bg-white/10 mx-auto my-6 md:my-10 overflow-hidden">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </div>
        </div>

        {/* Supporting Narrative */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="text-zinc-500 text-[10px] sm:text-sm md:text-lg lg:text-xl max-w-[85vw] sm:max-w-2xl mx-auto leading-relaxed font-medium tracking-tight mb-8 md:mb-12"
        >
          We engineer <span className="text-white italic">high-fidelity digital infrastructure</span> for organizations that demand total dominance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full md:w-auto"
        >
          {/* Surgical Industrial Action */}
          <a 
            href="#contact"
            className="group relative px-6 md:px-14 py-3.5 md:py-6 overflow-hidden w-full md:w-auto text-center"
          >
            {/* Technical Frame */}
            <div className="absolute inset-0 bg-white group-hover:bg-[#00f0f0] transition-colors duration-500 clip-path-hero-btn" />
            
            {/* Internal Scanning Beam */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12"
            />

            <span className="relative z-10 text-black font-black text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase">
              Initiate Venture
            </span>
          </a>
          
          <a 
            href="#featured-work"
            className="group flex items-center justify-center gap-3 md:gap-5 text-white/20 hover:text-white transition-all duration-500 uppercase tracking-[0.2em] md:tracking-[0.4em] text-[8px] md:text-[10px] font-bold font-mono"
          >
            <span className="w-8 md:w-16 h-[1px] bg-white/10 group-hover:w-12 md:group-hover:w-24 group-hover:bg-[#00f0f0] transition-all duration-700" />
            Sector_Archive // 024
          </a>
        </motion.div>
      </motion.div>

      {/* Atmospheric Light Leaks (Cinematic Bloom) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0070b0]/05 rounded-full blur-[200px] mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#9333ea]/05 rounded-full blur-[200px] mix-blend-overlay pointer-events-none" />
    </section>
  );
}

