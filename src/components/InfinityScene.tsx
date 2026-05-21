import { useMemo, useState, useEffect } from 'react';
import { motion, MotionValue, useTransform } from 'motion/react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface InfinitySceneProps {
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
}

// Global fallback to prevent memory allocation and re-renders
const fallbackMotionValue = new MotionValue(0);

export default function InfinityScene({ mouseX, mouseY }: InfinitySceneProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  });
  const [scale, setScale] = useState(() => {
    if (typeof window === 'undefined') return 0.78;
    const width = window.innerWidth;
    if (width < 360) return 0.25;
    if (width < 400) return 0.28;
    if (width < 480) return 0.32;
    if (width < 640) return 0.40;
    if (width < 768) return 0.50;
    if (width < 1024) return 0.78;
    return 0.92;
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 360) {
        setScale(0.25);
      } else if (width < 400) {
        setScale(0.28);
      } else if (width < 480) {
        setScale(0.32);
      } else if (width < 640) {
        setScale(0.40);
      } else if (width < 768) {
        setScale(0.50);
      } else if (width < 1024) {
        setScale(0.78);
      } else {
        setScale(0.92);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const particleCount: number = isMobile ? 12 : reducedMotion ? 20 : 40;

  // Synchronized Scene Tilting using stable motion value reference
  const rotateX = useTransform(mouseY || fallbackMotionValue, [-500, 500], [15, 10]);
  const rotateY = useTransform(mouseX || fallbackMotionValue, [-500, 500], [-10, 10]);

  // Static Stardust Field (Immersive Environment)
  const stardust = useMemo(() => {
    if (particleCount === 0) return [];
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * (isMobile ? 380 : 2200),
      y: (Math.random() - 0.5) * (isMobile ? 700 : 1300),
      size: Math.random() * (isMobile ? 1.8 : 2.5),
      opacity: Math.random() * 0.7,
      delay: Math.random() * 5,
      color: i % 15 === 0 ? '#00f0ff' : i % 25 === 0 ? '#ffeb3b' : i % 35 === 0 ? '#ff5722' : '#ffffff',
      duration: 3 + Math.random() * 4,
    }));
  }, [particleCount, isMobile]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden md:overflow-visible md:perspective-[2000px] pointer-events-none" style={{ contain: 'layout style paint' }}>
      {/* 1. Deep Space Ambient Nebula */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div 
          className={`absolute w-[min(1800px,200vw)] h-[min(1000px,120vh)] rounded-[100%] ${isMobile ? 'opacity-40' : 'animate-pulse'}`} 
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, transparent 80%)'
          }}
        />
      </div>

      {/* 2. Stardust Field (Parallax Environment - Hardware-Accelerated CSS) */}
      <div className="absolute inset-0 z-[1]">
        {stardust.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full particle-pulse"
            style={{
              width: star.size,
              height: star.size,
              left: `calc(50% + ${star.x}px)`,
              top: `calc(50% + ${star.y}px)`,
              backgroundColor: star.color,
              opacity: star.opacity,
              boxShadow: isMobile ? 'none' : (star.color !== '#ffffff' ? `0 0 6px ${star.color}` : `0 0 3px rgba(255,255,255,0.4)`),
              backfaceVisibility: 'hidden',
              '--particle-opacity': star.opacity,
              '--particle-delay': `${star.delay}s`,
              '--particle-duration': `${star.duration}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <motion.div 
        className="relative flex items-center justify-center md:preserve-3d will-change-transform z-10"
        style={{ 
          rotateX: isMobile ? undefined : rotateX, 
          rotateY: isMobile ? undefined : rotateY,
          backfaceVisibility: 'hidden',
          scale: scale,
        }}
        {...(isMobile ? {
          animate: {
            y: [-12, 12, -12],
            rotateX: [12, 18, 12],
            rotateY: [-22, -16, -22],
            rotateZ: [73, 77, 73],
          },
          transition: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }
        } : {})}
      >
        
        {/* 3. The Volumetric Ribbon (One Flow Architecture) */}
        <div className="relative w-[1400px] h-[1000px] flex items-center justify-center md:preserve-3d">
          <svg 
            viewBox="-700 -500 1400 1000" 
            className={`absolute inset-0 w-full h-full overflow-visible ${isMobile ? "" : "mix-blend-screen"}`}
          >
            <defs>
              {/* Official Full Spectrum Rainbow Gradient - Spatial Precision */}
              <linearGradient id="ribbon-grad-v1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0ff" /> {/* Left: Cyan */}
                <stop offset="25%" stopColor="#00ffbb" /> {/* Left-Mid: Teal/Green */}
                <stop offset="50%" stopColor="#ffea00" /> {/* Center-Top: Yellow */}
                <stop offset="75%" stopColor="#ff5a00" /> {/* Right-Top: Orange/Red */}
                <stop offset="100%" stopColor="#d600ff" /> {/* Right-Bottom: Purple/Pink */}
              </linearGradient>
 
              {/* Inner Depth Gradient (Shadow Side) */}
              <linearGradient id="ribbon-inner-shadow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#002a35" />
                <stop offset="50%" stopColor="#352a00" />
                <stop offset="100%" stopColor="#2a0035" />
              </linearGradient>
 
              <filter id="ribbon-glow-v2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation={isMobile ? 8 : 18} result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
 
            {/* Path: Symmetrical Infinity */}
            <motion.path
              id="infinity-path"
              d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
              fill="none"
              stroke="transparent"
            />
 
            {isMobile ? (
              <>
                {/* 1. Ultra-wide ambient halo */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={140}
                  strokeOpacity={0.02}
                  strokeLinecap="round"
                />
                {/* 2. Wide glow */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={80}
                  strokeOpacity={0.06}
                  strokeLinecap="round"
                />
                {/* 3. Medium glow */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={40}
                  strokeOpacity={0.12}
                  strokeLinecap="round"
                />
                {/* 4. Sharp inner core glow */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={20}
                  strokeOpacity={0.28}
                  strokeLinecap="round"
                />
                {/* 5. Core body */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={8}
                  strokeOpacity={0.65}
                  strokeLinecap="round"
                />
                {/* 6. Sharp center core line */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  strokeOpacity={0.9}
                  strokeLinecap="round"
                />
              </>
            ) : (
              <>
                {/* Layer A: Massive Structural Underglow */}
                <motion.path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={110}
                  strokeOpacity={0.08}
                  className="blur-[24px]"
                />

                {/* Layer B: The Volumetric Body Glow Shell (GPU-Accelerated CSS blur) */}
                <motion.path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={60}
                  strokeLinecap="round"
                  className="blur-[12px]"
                  style={{ opacity: 0.75 }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />

                {/* Layer B.2: The Sharp Core Body */}
                <motion.path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-grad-v1)"
                  strokeWidth={60}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />

                {/* Layer C: The Matte Depth Core */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="url(#ribbon-inner-shadow)"
                  strokeWidth={28}
                  strokeLinecap="round"
                  strokeOpacity="0.8"
                  className="blur-[3px]"
                />

                {/* Layer D: Liquid Gloss Shimmer (Hardware-Accelerated CSS) */}
                <path
                  d="M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={5}
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  strokeDasharray="12 400"
                  className="blur-[1px] shimmer-path"
                />
              </>
            )}
          </svg>

          {/* 4. The Saturn Planet (High-Fidelity) - Hidden on Mobile for layout clarity & peak performance */}
          <div className="absolute -translate-x-[300px] -translate-y-[150px] z-30 md:preserve-3d hidden md:block">
            <div className="relative w-48 h-48 planet-float">
              {/* Glossy Sphere */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00f0ff] via-[#00b0d0] to-[#010101] shadow-[inset_-25px_-25px_50px_rgba(0,0,0,1),0_0_100px_rgba(0,240,255,0.4)] overflow-hidden">
                <div className="absolute top-[12%] left-[18%] w-1/2 h-1/2 bg-white/30 rounded-full blur-[20px]" />
              </div>
              
              {/* Dynamic Planet Rings (Chromatic Effect) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[80px] border-[5px] border-[#00f0f0]/40 rounded-[100%] rotate-[24deg] blur-[0.5px] shadow-[0_0_40px_rgba(0,240,240,0.4)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-[50.5%] -translate-y-[50.5%] w-[340px] h-[80px] border border-[#9333ea]/20 rounded-[100%] rotate-[24.2deg] blur-[1px]" />
              
              {/* Orbital Ring Pulse (Hardware-Accelerated CSS) */}
              <div className="absolute top-1/2 left-1/2 w-[330px] h-[75px] border border-white/20 rounded-[100%] border-dashed spin-dashed-ring" />
            </div>
          </div>
        </div>

        {/* 5. Focal Atmospheric Singularities - Hidden on Mobile to prevent rendering layout glitches and repaint costs */}
        <div className="absolute hidden md:flex items-center justify-center md:preserve-3d pointer-events-none">
          <div 
            className="absolute translate-x-[350px] w-[1000px] h-[700px] rounded-full" 
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)'
            }}
          />
          <div 
            className="absolute -translate-x-[350px] w-[800px] h-[600px] rounded-full" 
            style={{
              background: 'radial-gradient(circle, rgba(0, 240, 240, 0.08) 0%, transparent 70%)'
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}





