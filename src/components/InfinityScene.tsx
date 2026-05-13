import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function InfinityScene() {
  // Generate 300 high-fidelity particles - balanced for performance and visual impact
  const particles = useMemo(() => {
    const colors = ['#00f0f0', '#0070b0', '#f05060', '#f09010', '#f0f070'];
    
    return Array.from({ length: 300 }).map((_, i) => {
      const t = (i / 300) * Math.PI * 2;
      const scale = 450;
      const x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      
      const z = Math.sin(t * 2) * 100;

      const colorIndex = Math.floor((t / (Math.PI * 2)) * colors.length);
      const color = colors[colorIndex] || colors[0];

      return {
        id: i,
        x,
        y,
        z,
        delay: Math.random() * 4,
        duration: 3 + Math.random() * 3,
        size: Math.random() > 0.9 ? 4 : 1.5 + Math.random() * 1.5,
        color: Math.random() > 0.85 ? '#ffffff' : color,
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[2500px] pointer-events-none">
      {/* Intense Background Bloom */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[1000px] h-[500px] bg-[#00f0f0]/[0.05] rounded-[100%] blur-[150px] animate-pulse mix-blend-screen" />
      </div>

      <motion.div 
        className="relative flex items-center justify-center transform-style-preserve-3d scale-[0.6] md:scale-110 will-change-transform z-10"
        animate={{ 
          rotateX: [10, 20, 10], 
          rotateY: [-15, 15, -15],
          rotateZ: [0, 3, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        
        {/* Core Glowing SVG Path - The "Soul" of the animation */}
        <svg 
          viewBox="-500 -250 1000 500" 
          className="absolute inset-0 w-[1000px] h-[500px] overflow-visible mix-blend-screen opacity-60 z-10"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <motion.path
            d="M 0,0 C 180,-250 450,-250 450,0 C 450,250 180,250 0,0 C -180,-250 -450,-250 -450,0 C -450,250 -180,250 0,0 Z"
            fill="none"
            stroke="url(#brand-glow-restored)"
            strokeWidth="4"
            initial={{ strokeDasharray: "2500", strokeDashoffset: "2500" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="drop-shadow-[0_0_20px_rgba(0,240,240,0.6)]"
          />
          <defs>
            <linearGradient id="brand-glow-restored" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0f0" />
              <stop offset="25%" stopColor="#0070b0" />
              <stop offset="50%" stopColor="#f05060" />
              <stop offset="75%" stopColor="#f09010" />
              <stop offset="100%" stopColor="#f0f070" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbiting High-Fidelity Particles */}
        <div className="absolute inset-0 flex items-center justify-center z-30 transform-style-preserve-3d">
          {particles.map((p) => (
            <motion.div
              key={`particle-${p.id}`}
              className="absolute rounded-full shadow-[0_0_20px_currentColor]"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                color: p.color,
                top: '50%',
                left: '50%',
                marginLeft: p.x,
                marginTop: p.y,
                transform: `translateZ(${p.z}px)`,
              }}
              animate={{ 
                opacity: [0.4, 1, 0.4], 
                scale: [0.8, 1.8, 0.8],
                boxShadow: ['0 0 10px currentColor', '0 0 30px currentColor', '0 0 10px currentColor']
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: p.delay 
              }}
            />
          ))}
          
          {/* Intense Singularities */}
          <motion.div 
             animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.3, 1] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute w-56 h-56 bg-[#00f0f0]/20 rounded-full blur-[60px] mix-blend-screen"
             style={{ transform: 'translateX(-220px)' }}
          />
          <motion.div 
             animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.3, 1] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute w-56 h-56 bg-[#f05060]/15 rounded-full blur-[60px] mix-blend-screen"
             style={{ transform: 'translateX(220px)' }}
          />
          {/* Central Singularity Core */}
          <motion.div 
             animate={{ opacity: [0.7, 1, 0.7], scale: [0.8, 1.2, 0.8] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             className="absolute w-32 h-32 bg-white/20 rounded-full blur-[40px] mix-blend-screen"
          />
        </div>
      </motion.div>
    </div>
  );
}
