import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Rocket, Layers, BrainCircuit } from 'lucide-react';

const reasons = [
  {
    icon: <Rocket className="w-6 h-6 text-blue-500" />,
    title: 'Fast Delivery',
    description: 'Rapid deployment cycles without compromising architectural integrity.'
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-500" />,
    title: 'Modern Tech Stack',
    description: 'Engineered on modern stacks for absolute speed, security, and future-proofing.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: 'Scalable Systems',
    description: 'Infrastructure designed to scale autonomously with exponential traffic load.'
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-amber-500" />,
    title: 'AI-First Approach',
    description: 'Integrating AI-native logic for maximum operational efficiency.'
  }
];

export default function WhyChooseUs() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  return (
    <section id="about" className="py-16 sm:py-24 md:py-48 overflow-hidden bg-[#0a0c10] relative bg-blueprint">
      
      {/* Background Polish with Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-50 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
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
                  <h4 className="text-2xl font-bold mb-4 text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform">{reason.title}</h4>
                  <p className="text-zinc-400 text-lg leading-relaxed font-medium group-hover:text-zinc-200 transition-colors">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: isTouchDevice ? 0 : 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-[4.5rem] bg-zinc-950 border border-white/5 p-6 relative overflow-hidden group shadow-2xl">
              {/* HUD Reticles */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-40">
                <div className="absolute top-12 left-12 w-24 h-24 border-l border-t border-white/20 rounded-tl-[3.5rem]" />
                <div className="absolute bottom-12 right-12 w-24 h-24 border-r border-b border-white/20 rounded-br-[3.5rem]" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-transparent to-purple-600/15 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                alt="Engineering Command Center" 
                loading="lazy"
                className="w-full h-full object-cover rounded-[3.5rem] opacity-40 group-hover:opacity-90 transition-all duration-[2s] grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              {/* Stats Overlay - HUD Style */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-6 z-30">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-black/80 backdrop-blur-3xl border border-white/20 p-6 rounded-[2rem] group/stat shadow-2xl"
                >
                  <div className="text-3xl font-bold mb-2 text-white tracking-tighter transition-colors group-hover/stat:text-blue-500">98%</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Success Rate</div>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="bg-black/80 backdrop-blur-3xl border border-white/20 p-6 rounded-[2rem] group/stat shadow-2xl"
                >
                  <div className="text-3xl font-bold mb-2 text-white tracking-tighter transition-colors group-hover/stat:text-purple-500">24/7</div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-bold">Global Support</div>
                </motion.div>
              </div>
            </div>
            
            {/* Ambient Glows */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
