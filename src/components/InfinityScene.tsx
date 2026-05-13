import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function InfinityScene() {
  // Generate particles along a 3D Lemniscate (Infinity symbol)
  const particles = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => {
      const t = (i / 150) * Math.PI * 2;
      // Mathematical Lemniscate of Bernoulli
      const scale = 300;
      const x = (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      const y = (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      
      // Add slight 3D depth wave
      const z = Math.sin(t * 2) * 50;

      return {
        id: i,
        x,
        y,
        z,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 4,
        size: 1.5 + Math.random() * 3,
        color: i % 4 === 0 ? '#60a5fa' : i % 4 === 1 ? '#3b82f6' : i % 4 === 2 ? '#2563eb' : '#ffffff',
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[2000px] pointer-events-none">
      {/* Deep Atmospheric Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[800px] h-[400px] bg-blue-600/[0.04] rounded-[100%] blur-[120px] animate-pulse mix-blend-screen" />
      </div>

      <motion.div 
        className="relative flex items-center justify-center transform-style-preserve-3d scale-[0.4] md:scale-100 will-change-transform z-10"
        animate={{ rotateX: [20, 30, 20], rotateY: [-15, 15, -15], rotateZ: [-5, 5, -5] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        
        {/* The Infinity Path (Glowing Track) */}
        <div className="absolute w-[600px] h-[300px] border border-blue-500/20 rounded-[100%] blur-[2px] opacity-30 mix-blend-screen" style={{ borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%', transform: 'scaleX(1.2)' }} />
        <div className="absolute w-[600px] h-[300px] border border-white/10 rounded-[100%] opacity-20 mix-blend-screen" style={{ borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%', transform: 'scaleX(1.2)' }} />

        {/* Orbiting Logo Particles */}
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
                opacity: [0.2, 1, 0.2], 
                scale: [0.8, 1.5, 0.8],
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
          
          {/* Energy Cores inside the loops */}
          <motion.div 
             animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="absolute w-32 h-32 bg-blue-500/30 rounded-full blur-[40px] mix-blend-screen"
             style={{ transform: 'translateX(-150px)' }}
          />
          <motion.div 
             animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="absolute w-32 h-32 bg-blue-400/30 rounded-full blur-[40px] mix-blend-screen"
             style={{ transform: 'translateX(150px)' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
