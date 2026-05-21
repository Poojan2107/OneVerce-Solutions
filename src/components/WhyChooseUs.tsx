import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Rocket, Layers, BrainCircuit, TrendingUp, Star } from 'lucide-react';
import { reasons } from '../data/portfolioData';

export default function WhyChooseUs() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const stats = [
    { value: '6+', label: 'Live Projects', color: 'text-blue-400', glow: 'group-hover:text-blue-400' },
    { value: '100%', label: 'Delivery Rate', color: 'text-purple-400', glow: 'group-hover:text-purple-400' },
    { value: '4.8★', label: 'Client Rating', color: 'text-amber-400', glow: 'group-hover:text-amber-400' },
    { value: '12+', label: 'Tech Stacks', color: 'text-emerald-400', glow: 'group-hover:text-emerald-400' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 md:py-48 overflow-hidden bg-[#0a0c10] relative bg-blueprint">
      
      {/* Ambient background line */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-50 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Strategic Advantage</span>
            </div>
            
            <h2 className="heading-2xl text-white uppercase mb-10 break-normal font-black tracking-tighter">
              Engineered Authority
            </h2>
            
            <p className="text-zinc-400 text-base sm:text-xl mb-12 max-w-xl leading-relaxed font-medium tracking-wide">
              Architecting <span className="text-white font-semibold">digital command centers</span> that enforce market leadership.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="mb-8 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-500 group-hover:scale-110 shadow-xl group-hover:border-blue-500/30">
                    {reason.icon}
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{reason.title}</h4>
                  <p className="text-zinc-400 text-base leading-relaxed font-medium group-hover:text-zinc-200 transition-colors">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Poster Image + Stats below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotateY: isTouchDevice ? 0 : 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col gap-4"
          >
            {/* Poster Image Card */}
            <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/[0.08] shadow-2xl shadow-blue-900/20 group bg-zinc-950">
              {/* HUD corner reticles */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="absolute top-5 left-5 w-8 h-8 border-l-2 border-t-2 border-white/25 rounded-tl-lg" />
                <div className="absolute top-5 right-5 w-8 h-8 border-r-2 border-t-2 border-white/25 rounded-tr-lg" />
                <div className="absolute bottom-5 left-5 w-8 h-8 border-l-2 border-b-2 border-white/25 rounded-bl-lg" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-r-2 border-b-2 border-white/25 rounded-br-lg" />
              </div>

              {/* Colour overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/15 z-10 pointer-events-none" />

              {/* The official poster */}
              <img
                src="/portfolio-3.jpg"
                alt="Oneverce — Innovating the Future of Digital"
                loading="lazy"
                className="w-full h-auto object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.03]"
                width={800}
                height={800}
              />

              {/* LIVE badge */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Live</span>
              </div>
            </div>

            {/* Stats row — clean 2×2 grid below the poster */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="group bg-zinc-950/90 border border-white/[0.08] rounded-2xl p-4 text-center cursor-default shadow-lg hover:border-white/20 transition-all duration-300"
                >
                  <div className={`text-2xl font-black tracking-tighter mb-0.5 transition-colors duration-300 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-zinc-500 uppercase tracking-[0.25em] font-bold leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ambient glows */}
            <div className="absolute -top-16 -right-16 w-72 h-72 bg-blue-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-purple-600/12 blur-[100px] rounded-full pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
