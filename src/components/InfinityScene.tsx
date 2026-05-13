import { useMemo } from 'react';
import { motion } from 'motion/react';

export default function InfinityScene() {
  // Generate particles that follow the Logo's specific asymmetrical "Twisted Teardrop" geometry
  const particles = useMemo(() => {
    const colors = ['#00f0f0', '#0070b0', '#f05060', '#f09010', '#f0f070'];
    
    return Array.from({ length: 400 }).map((_, i) => {
      const t = (i / 400) * Math.PI * 2;
      
      // Asymmetrical Infinity Formula inspired by the Oneverce Logo
      // Left loop is tighter (cyan), Right loop is bulbous and large (pink/orange)
      const isLeft = Math.cos(t) < 0;
      const horizontalScale = isLeft ? 380 : 550; 
      const verticalScale = isLeft ? 220 : 320;
      
      const x = (horizontalScale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      const y = (verticalScale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t));
      
      // Depth variation with a "twist" at the intersection
      const z = Math.sin(t * 2) * 150;

      const colorIndex = Math.floor((t / (Math.PI * 2)) * colors.length);
      const color = colors[colorIndex] || colors[0];
      const isStardust = Math.random() > 0.85;

      return {
        id: i,
        x,
        y,
        z,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: isStardust ? 1 : 2 + Math.random() * 3,
        color: isStardust ? '#ffffff' : color,
        opacity: isStardust ? 0.3 : 0.6 + Math.random() * 0.4,
      };
    });
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[3000px] pointer-events-none">
      {/* Brand Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[1500px] h-[800px] bg-[#00f0f0]/[0.04] rounded-[100%] blur-[220px] animate-pulse" />
      </div>

      <motion.div 
        className="relative flex items-center justify-center transform-style-preserve-3d scale-[0.5] md:scale-100 will-change-transform z-10"
        animate={{ 
          rotateX: [15, 22, 15], 
          rotateY: [-8, 8, -8],
          rotateZ: [0, 2, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        
        {/* Brand-Accurate Asymmetrical Twisted Path */}
        <svg 
          viewBox="-600 -400 1200 800" 
          className="absolute inset-0 w-[1200px] h-[800px] overflow-visible mix-blend-screen z-20"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <defs>
            <linearGradient id="logo-ribbon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0f0" />
              <stop offset="30%" stopColor="#0070b0" />
              <stop offset="60%" stopColor="#f05060" />
              <stop offset="100%" stopColor="#f0f070" />
            </linearGradient>
          </defs>
          
          {/* Main "Twisted Ribbon" Path - Custom Bezier to match logo geometry */}
          <motion.path
            d="M 0,0 C 150,-350 550,-350 550,0 C 550,350 150,350 0,0 C -120,-280 -400,-280 -400,0 C -400,280 -120,280 0,0 Z"
            fill="none"
            stroke="url(#logo-ribbon-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="drop-shadow-[0_0_25px_rgba(0,240,240,0.4)]"
          />
          
          {/* Subtle Inner Glow Layer */}
          <motion.path
            d="M 0,0 C 150,-350 550,-350 550,0 C 550,350 150,350 0,0 C -120,-280 -400,-280 -400,0 C -400,280 -120,280 0,0 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="10 20"
            animate={{ strokeDashoffset: -100 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Brand Elements: The Planet (Saturn-like in Left Loop) */}
        <div className="absolute -translate-x-[280px] -translate-y-[140px] z-30 transform-style-preserve-3d">
           {/* Planet Sphere */}
           <motion.div 
             animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#00f0f0] via-[#0070b0] to-black shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.8),0_0_40px_rgba(0,240,240,0.4)]"
           >
              {/* Planet Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-10 border-2 border-[#00f0f0]/40 rounded-[100%] rotate-[25deg] blur-[1px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-8 border border-white/20 rounded-[100%] rotate-[25deg]" />
           </motion.div>
        </div>

        {/* Orbiting Logo Particles */}
        <div className="absolute inset-0 flex items-center justify-center z-40 transform-style-preserve-3d">
          {particles.map((p) => (
            <motion.div
              key={`particle-${p.id}`}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 ${p.size * 6}px ${p.color}`,
                top: '50%',
                left: '50%',
                marginLeft: p.x,
                marginTop: p.y,
                transform: `translateZ(${p.z}px)`,
                opacity: p.opacity,
              }}
              animate={{ 
                opacity: [p.opacity, p.opacity * 1.5, p.opacity], 
                scale: [1, 1.4, 1],
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: p.delay 
              }}
            />
          ))}
          
          {/* Loop Energy Singularities (Asymmetrical) */}
          <div className="absolute flex items-center justify-center transform-style-preserve-3d">
             {/* Large Right Singularity */}
             <div className="absolute translate-x-[280px]">
                <motion.div 
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="w-80 h-80 bg-[#f05060]/10 rounded-full blur-[100px]"
                />
             </div>
             
             {/* Small Left Singularity (Behind Planet) */}
             <div className="absolute -translate-x-[280px]">
                <motion.div 
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-64 h-64 bg-[#00f0f0]/10 rounded-full blur-[80px]"
                />
             </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
