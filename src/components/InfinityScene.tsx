import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function InfinityScene() {
  // Generate 300 ultra-dense particles for a high-fidelity 3D Lemniscate
  const particles = useMemo(() => {
    return Array.from({ length: 300 }).map((_, i) => {
      const t = (i / 300) * Math.PI * 2;
      // Mathematical Lemniscate of Bernoulli - scaled up massively
      const scale = 350;
      const x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      
      // Extreme 3D depth wave
      const z = Math.sin(t * 2) * 100;

      return {
        id: i,
        x,
        y,
        z,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        size: Math.random() > 0.9 ? 4 : 1.5 + Math.random() * 1.5, // Occasional large bright stars
        color: i % 5 === 0 ? '#00bef8' : i % 5 === 1 ? '#007fa8' : i % 5 === 2 ? '#fcfd79' : i % 5 === 3 ? '#e0fcfb' : '#ffffff',
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[2000px] pointer-events-none">
      {/* Deep Atmospheric Bloom Core */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[1000px] h-[500px] bg-[#00bef8]/[0.05] rounded-[100%] blur-[150px] animate-pulse mix-blend-screen" />
      </div>

      <motion.div 
        className="relative flex items-center justify-center transform-style-preserve-3d scale-[0.45] md:scale-100 will-change-transform z-10"
        animate={{ rotateX: [15, 25, 15], rotateY: [-20, 20, -20], rotateZ: [-2, 2, -2] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        
        {/* Core Glowing SVG Path to anchor the particles */}
        <svg 
          viewBox="-400 -200 800 400" 
          className="absolute inset-0 w-[800px] h-[400px] overflow-visible mix-blend-screen opacity-50 z-10"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <motion.path
            d="M 0,0 C 150,-200 350,-200 350,0 C 350,200 150,200 0,0 C -150,-200 -350,-200 -350,0 C -350,200 -150,200 0,0 Z"
            fill="none"
            stroke="url(#brand-glow)"
            strokeWidth="3"
            initial={{ strokeDasharray: "2000", strokeDashoffset: "2000" }}
            animate={{ strokeDashoffset: "0" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="drop-shadow-[0_0_15px_rgba(0,190,248,0.8)]"
          />
          <defs>
            <linearGradient id="brand-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#007fa8" stopOpacity="0.2" />
              <stop offset="33%" stopColor="#00bef8" stopOpacity="1" />
              <stop offset="66%" stopColor="#fcfd79" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#007fa8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbiting Logo Particles */}
        <div className="absolute inset-0 flex items-center justify-center z-30 transform-style-preserve-3d">
          {particles.map((p) => (
            <motion.div
              key={`particle-${p.id}`}
              className="absolute rounded-full shadow-[0_0_25px_currentColor]"
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
                opacity: [0.3, 1, 0.3], 
                scale: [0.8, 2, 0.8],
                boxShadow: ['0 0 10px currentColor', '0 0 40px currentColor', '0 0 10px currentColor']
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: p.delay 
              }}
            />
          ))}
          
          {/* Intense Singularities inside the loops */}
          <motion.div 
             animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.4, 0.9] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute w-40 h-40 bg-[#00bef8]/40 rounded-full blur-[40px] mix-blend-screen"
             style={{ transform: 'translateX(-175px)' }}
          />
          <motion.div 
             animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.9, 1.4, 0.9] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute w-40 h-40 bg-[#fcfd79]/20 rounded-full blur-[40px] mix-blend-screen"
             style={{ transform: 'translateX(175px)' }}
          />
          {/* Central Singularity */}
          <motion.div 
             animate={{ opacity: [0.6, 1, 0.6], scale: [0.8, 1.2, 0.8] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
             className="absolute w-24 h-24 bg-white/30 rounded-full blur-[30px] mix-blend-screen"
          />
        </div>
      </motion.div>
    </div>
  );
}
