import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function InfinityScene() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const radius = 100 + Math.random() * 250;
      const angle = (i / 40) * Math.PI * 2;
      return {
        id: i,
        radius,
        angle,
        delay: Math.random() * 2,
        duration: 10 + Math.random() * 15,
        size: 1 + Math.random() * 2,
        color: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#a855f7' : '#ffffff',
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[2000px] pointer-events-none">
      {/* Deep Space Atmospheric Fog */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[150px] animate-pulse mix-blend-screen" />
        <div className="absolute w-[400px] h-[400px] bg-indigo-900/[0.04] rounded-full blur-[100px] animate-pulse delay-1000 mix-blend-screen" />
      </div>

      <div className="relative w-[1000px] h-[1000px] flex items-center justify-center transform-style-preserve-3d scale-[0.5] md:scale-100 will-change-transform z-10">
        
        {/* Core Singularity */}
        <div className="absolute z-40 flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full shadow-[0_0_80px_rgba(255,255,255,1),0_0_150px_rgba(59,130,246,0.8)] z-50" />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-24 h-24 bg-blue-400 rounded-full blur-[30px] z-40 mix-blend-screen"
          />
          <motion.div
            animate={{ scale: [1.2, 1.8, 1.2], opacity: [0.4, 0.8, 0.4], rotateZ: [0, 180, 360] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute w-40 h-40 bg-indigo-600 rounded-full blur-[50px] z-30 mix-blend-screen"
          />
        </div>

        {/* Cinematic Procedural Orbital Rings */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center transform-style-preserve-3d"
          animate={{ rotateX: [65, 70, 65], rotateY: [-10, 10, -10] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute rounded-full transform-style-preserve-3d"
              style={{
                width: 150 + i * 80,
                height: 150 + i * 80,
                border: i % 4 === 0 ? '2px solid rgba(59, 130, 246, 0.15)' : '1px solid rgba(255, 255, 255, 0.04)',
                boxShadow: i % 3 === 0 ? 'inset 0 0 30px rgba(59,130,246,0.05), 0 0 20px rgba(59,130,246,0.02)' : 'none'
              }}
              animate={{ rotateZ: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
            >
              {/* Data Nodes on Rings */}
              {i % 2 === 0 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full shadow-[0_0_15px_#3b82f6]" />
              )}
              {i % 3 === 0 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Orbiting Particle Cloud */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-30 transform-style-preserve-3d"
          animate={{ rotateZ: 360, rotateX: 60, rotateY: 20 }}
          transition={{ rotateZ: { duration: 60, repeat: Infinity, ease: "linear" } }}
        >
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
                marginLeft: Math.cos(p.angle) * p.radius,
                marginTop: Math.sin(p.angle) * p.radius,
              }}
              animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.5, 1.5, 0.5] }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
