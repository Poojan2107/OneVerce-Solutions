import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function InfinityScene() {
  // Generate a sophisticated mix of brand particles and tiny "Stardust"
  const particles = useMemo(() => {
    const colors = ['#00f0f0', '#0070b0', '#f05060', '#f09010', '#f0f070'];
    
    return Array.from({ length: 350 }).map((_, i) => {
      const t = (i / 350) * Math.PI * 2;
      const scale = 480;
      const x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      
      // Complex 3D wobbling paths
      const z = Math.sin(t * 2.5 + i) * 120;

      const colorIndex = Math.floor((t / (Math.PI * 2)) * colors.length);
      const color = colors[colorIndex] || colors[0];
      const isStardust = Math.random() > 0.8;

      return {
        id: i,
        x,
        y,
        z,
        delay: Math.random() * 5,
        duration: 2.5 + Math.random() * 4,
        size: isStardust ? 0.8 + Math.random() : 2 + Math.random() * 2.5,
        color: isStardust ? '#ffffff' : color,
        opacity: isStardust ? 0.3 + Math.random() * 0.4 : 0.6 + Math.random() * 0.4,
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[3000px] pointer-events-none">
      {/* Cinematic Ambient Atmosphere */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[1400px] h-[700px] bg-[#00f0f0]/[0.03] rounded-[100%] blur-[200px] animate-pulse mix-blend-plus-lighter" />
      </div>

      <motion.div 
        className="relative flex items-center justify-center transform-style-preserve-3d scale-[0.55] md:scale-100 will-change-transform z-10"
        animate={{ 
          rotateX: [12, 18, 12], 
          rotateY: [-10, 10, -10],
          rotateZ: [0, 360]
        }}
        transition={{ 
          rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 20, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 180, repeat: Infinity, ease: "linear" }
        }}
      >
        
        {/* Triple-Layered Neon Infinity Path */}
        <svg 
          viewBox="-500 -250 1000 500" 
          className="absolute inset-0 w-[1200px] h-[600px] overflow-visible mix-blend-screen z-10"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <defs>
            <linearGradient id="brand-neon-vortex" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0f0" />
              <stop offset="25%" stopColor="#0070b0" />
              <stop offset="50%" stopColor="#f05060" />
              <stop offset="75%" stopColor="#f09010" />
              <stop offset="100%" stopColor="#f0f070" />
            </linearGradient>
            <filter id="neon-glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Layer 1: Wide Ambient Glow */}
          <motion.path
            d="M 0,0 C 180,-250 450,-250 450,0 C 450,250 180,250 0,0 C -180,-250 -450,-250 -450,0 C -450,250 -180,250 0,0 Z"
            fill="none"
            stroke="url(#brand-neon-vortex)"
            strokeWidth="12"
            strokeOpacity="0.1"
            className="blur-[15px]"
          />
          
          {/* Layer 2: Primary Neon Core */}
          <motion.path
            d="M 0,0 C 180,-250 450,-250 450,0 C 450,250 180,250 0,0 C -180,-250 -450,-250 -450,0 C -450,250 -180,250 0,0 Z"
            fill="none"
            stroke="url(#brand-neon-vortex)"
            strokeWidth="3"
            initial={{ strokeDasharray: "2500", strokeDashoffset: "2500" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            filter="url(#neon-glow)"
          />
          
          {/* Layer 3: Ultra-Sharp Inner Laser */}
          <motion.path
            d="M 0,0 C 180,-250 450,-250 450,0 C 450,250 180,250 0,0 C -180,-250 -450,-250 -450,0 C -450,250 -180,250 0,0 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
        </svg>

        {/* Dynamic Multi-Scale Particle System */}
        <div className="absolute inset-0 flex items-center justify-center z-30 transform-style-preserve-3d">
          {particles.map((p) => (
            <motion.div
              key={`particle-${p.id}`}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 5}px ${p.color}`,
                top: '50%',
                left: '50%',
                marginLeft: p.x,
                marginTop: p.y,
                transform: `translateZ(${p.z}px)`,
                opacity: p.opacity,
              }}
              animate={{ 
                opacity: [p.opacity * 0.5, p.opacity * 1.5, p.opacity * 0.5], 
                scale: [0.9, 1.3, 0.9],
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: p.delay 
              }}
            />
          ))}
          
          {/* Advanced Energy Singularities */}
          <div className="absolute flex items-center justify-center transform-style-preserve-3d">
             {/* Left Loop Energy */}
             <div className="absolute -translate-x-[220px]">
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-64 h-64 bg-[#00f0f0]/20 rounded-full blur-[80px]"
                />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-[#00f0f0]/20 rounded-full border-dashed"
                />
             </div>
             
             {/* Right Loop Energy */}
             <div className="absolute translate-x-[220px]">
                <motion.div 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="w-64 h-64 bg-[#f05060]/15 rounded-full blur-[80px]"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-[#f05060]/20 rounded-full border-dotted"
                />
             </div>

             {/* Central Galactic Core */}
             <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-40 h-40 bg-white/10 rounded-full blur-[50px] mix-blend-overlay"
             />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
