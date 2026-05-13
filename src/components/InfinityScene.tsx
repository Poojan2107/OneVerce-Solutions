import { useMemo } from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';

interface InfinitySceneProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

export default function InfinityScene({ mouseX, mouseY }: InfinitySceneProps) {
  // Synchronized Scene Tilting
  const rotateX = useTransform(mouseY || new MotionValue(0), [-500, 500], [15, 10]);
  const rotateY = useTransform(mouseX || new MotionValue(0), [-500, 500], [-10, 10]);

  // Static Stardust Field (Immersive Environment)
  const stardust = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 2200,
      y: (Math.random() - 0.5) * 1300,
      size: Math.random() * 2.5,
      opacity: Math.random() * 0.7,
      delay: Math.random() * 5,
      color: i % 15 === 0 ? '#00f0ff' : i % 25 === 0 ? '#ffeb3b' : i % 35 === 0 ? '#ff5722' : '#ffffff', 
      duration: 2 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-visible perspective-[2000px] pointer-events-none">
      {/* 1. Deep Space Ambient Nebula */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-[1800px] h-[1000px] bg-white/[0.01] rounded-[100%] blur-[250px] animate-pulse" />
      </div>

      {/* 2. Stardust Field (Parallax Environment) */}
      <div className="absolute inset-0 z-[1]">
        {stardust.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [star.opacity, star.opacity * 1.5, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
            className="absolute rounded-full"
            style={{
              width: star.size,
              height: star.size,
              left: `calc(50% + ${star.x}px)`,
              top: `calc(50% + ${star.y}px)`,
              backgroundColor: star.color,
              boxShadow: star.color !== '#ffffff' ? `0 0 12px ${star.color}` : `0 0 6px rgba(255,255,255,0.4)`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative flex items-center justify-center transform-style-preserve-3d scale-[0.4] sm:scale-[0.55] md:scale-[0.75] lg:scale-[0.9] will-change-transform z-10"
        style={{ 
          rotateX, 
          rotateY,
        }}
      >
        
        {/* 3. The Volumetric Ribbon (One Flow Architecture) */}
        <div className="relative w-[1400px] h-[1000px] flex items-center justify-center transform-style-preserve-3d">
          <svg 
            viewBox="-700 -500 1400 1000" 
            className="absolute inset-0 w-full h-full overflow-visible mix-blend-screen"
          >
            <defs>
              {/* Official Full Spectrum Rainbow Gradient */}
              <linearGradient id="ribbon-grad-v1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00f0ff" /> {/* Cyan */}
                <stop offset="20%" stopColor="#00ff9d" /> {/* Teal/Green */}
                <stop offset="40%" stopColor="#ffeb3b" /> {/* Yellow */}
                <stop offset="60%" stopColor="#ff5722" /> {/* Orange/Red */}
                <stop offset="80%" stopColor="#e91e63" /> {/* Pink */}
                <stop offset="100%" stopColor="#9c27b0" /> {/* Purple */}
              </linearGradient>

              {/* Inner Depth Gradient (Shadow Side) */}
              <linearGradient id="ribbon-inner-shadow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#001520" />
                <stop offset="100%" stopColor="#150020" />
              </linearGradient>

              <filter id="ribbon-glow-v2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Path: Asymmetrical Teardrop Infinity */}
            <motion.path
              id="infinity-path"
              d="M 0,0 C 200,-420 620,-420 620,0 C 620,420 200,420 0,0 C -150,300 -450,300 -450,0 C -450,-300 -150,-300 0,0"
              fill="none"
              stroke="transparent"
            />

            {/* Layer A: Massive Structural Underglow */}
            <motion.path
              d="M 0,0 C 200,-420 620,-420 620,0 C 620,420 200,420 0,0 C -150,300 -450,300 -450,0 C -450,-300 -150,-300 0,0"
              fill="none"
              stroke="url(#ribbon-grad-v1)"
              strokeWidth="110"
              strokeOpacity="0.08"
              className="blur-[70px]"
            />

            {/* Layer B: The Volumetric Body (Outer Shell) */}
            <motion.path
              d="M 0,0 C 200,-420 620,-420 620,0 C 620,420 200,420 0,0 C -150,300 -450,300 -450,0 C -450,-300 -150,-300 0,0"
              fill="none"
              stroke="url(#ribbon-grad-v1)"
              strokeWidth="60"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              filter="url(#ribbon-glow-v2)"
            />

            {/* Layer C: The Matte Depth Core */}
            <motion.path
              d="M 0,0 C 200,-420 620,-420 620,0 C 620,420 200,420 0,0 C -150,300 -450,300 -450,0 C -450,-300 -150,-300 0,0"
              fill="none"
              stroke="url(#ribbon-inner-shadow)"
              strokeWidth="28"
              strokeLinecap="round"
              strokeOpacity="0.8"
              className="blur-[3px]"
            />

            {/* Layer D: Liquid Gloss Shimmer */}
            <motion.path
              d="M 0,0 C 200,-420 620,-420 620,0 C 620,420 200,420 0,0 C -150,300 -450,300 -450,0 C -450,-300 -150,-300 0,0"
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
              strokeOpacity="0.4"
              strokeLinecap="round"
              strokeDasharray="12 400"
              animate={{ strokeDashoffset: -2000 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="blur-[1px]"
            />
          </svg>

          {/* 4. The Saturn Planet (High-Fidelity) */}
          <div className="absolute -translate-x-[300px] -translate-y-[150px] z-30 transform-style-preserve-3d">
            <motion.div 
              animate={{ 
                rotateZ: [0, 6, 0],
                y: [-10, 10, -10]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-48 h-48"
            >
              {/* Glossy Sphere */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00f0f0] via-[#0070b0] to-[#010101] shadow-[inset_-25px_-25px_50px_rgba(0,0,0,1),0_0_100px_rgba(0,240,240,0.5)] overflow-hidden">
                <div className="absolute top-[12%] left-[18%] w-1/2 h-1/2 bg-white/25 rounded-full blur-[25px]" />
              </div>
              
              {/* Dynamic Planet Rings (Chromatic Effect) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[80px] border-[5px] border-[#00f0f0]/40 rounded-[100%] rotate-[24deg] blur-[0.5px] shadow-[0_0_40px_rgba(0,240,240,0.4)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-[50.5%] -translate-y-[50.5%] w-[340px] h-[80px] border border-[#9333ea]/20 rounded-[100%] rotate-[24.2deg] blur-[1px]" />
              
              {/* Orbital Ring Pulse */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] h-[75px] border border-white/20 rounded-[100%] rotate-[24deg] border-dashed"
              />
            </motion.div>
          </div>
        </div>

        {/* 5. Focal Atmospheric Singularities */}
        <div className="absolute flex items-center justify-center transform-style-preserve-3d pointer-events-none">
          <div className="absolute translate-x-[350px] w-[1000px] h-[700px] bg-[#9333ea]/[0.05] rounded-full blur-[180px]" />
          <div className="absolute -translate-x-[350px] w-[800px] h-[600px] bg-[#00f0f0]/[0.08] rounded-full blur-[180px]" />
        </div>
      </motion.div>
    </div>
  );
}





