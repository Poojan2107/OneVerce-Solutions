import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function InfinityScene() {
  // Generate 600 ultra-dense particles for a high-fidelity 3D background vortex
  const particles = useMemo(() => {
    const colors = ['#00f0f0', '#0070b0', '#f05060', '#f09010', '#f0f070'];
    
    return Array.from({ length: 600 }).map((_, i) => {
      const t = (i / 600) * Math.PI * 2;
      // Lemniscate of Bernoulli - scaled for background immersion
      const scale = 500;
      const x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      
      // Dynamic depth variation
      const z = Math.sin(t * 3) * 150;

      const colorIndex = Math.floor((t / (Math.PI * 2)) * colors.length);
      const color = colors[colorIndex] || colors[0];

      return {
        id: i,
        x,
        y,
        z,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: Math.random() > 0.95 ? 5 : 1 + Math.random() * 2,
        color: Math.random() > 0.9 ? '#ffffff' : color,
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[3000px] pointer-events-none">
      {/* Deep Atmospheric Bloom Core */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[1200px] h-[600px] bg-[#00f0f0]/[0.02] rounded-[100%] blur-[180px] animate-pulse" />
      </div>

      <motion.div 
        className="relative flex items-center justify-center transform-style-preserve-3d scale-110 will-change-transform z-10"
        animate={{ 
          rotateX: [10, 20, 10], 
          rotateY: [-30, 30, -30], 
          rotateZ: [0, 360] 
        }}
        transition={{ 
          rotateX: { duration: 15, repeat: Infinity, ease: "easeInOut" },
          rotateY: { duration: 25, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 120, repeat: Infinity, ease: "linear" }
        }}
      >
        
        {/* Core Glowing SVG Path */}
        <svg 
          viewBox="-600 -300 1200 600" 
          className="absolute inset-0 w-[1200px] h-[600px] overflow-visible mix-blend-screen opacity-30 z-10"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <motion.path
            d="M 0,0 C 200,-300 500,-300 500,0 C 500,300 200,300 0,0 C -200,-300 -500,-300 -500,0 C -500,300 -200,300 0,0 Z"
            fill="none"
            stroke="url(#brand-glow-vortex)"
            strokeWidth="2"
            initial={{ strokeDasharray: "3000", strokeDashoffset: "3000" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="brand-glow-vortex" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0f0" stopOpacity="0.5" />
              <stop offset="25%" stopColor="#0070b0" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#f05060" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#f09010" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f0f070" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>

        {/* Dense Background Particles */}
        <div className="absolute inset-0 flex items-center justify-center z-30 transform-style-preserve-3d">
          {particles.map((p) => (
            <motion.div
              key={`particle-${p.id}`}
              className="absolute rounded-full shadow-[0_0_15px_currentColor]"
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
                opacity: [0.2, 0.8, 0.2], 
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: p.delay 
              }}
            />
          ))}
          
          {/* Energy Singularities */}
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-[#00f0f0]/10 via-transparent to-[#f05060]/10 blur-[100px] rounded-full transform-style-preserve-3d" />
        </div>
      </motion.div>
    </div>
  );
}
