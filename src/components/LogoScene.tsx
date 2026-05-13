import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

export default function LogoScene() {
  const { scrollY } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const scale = useTransform(scrollY, [0, 1000], [1, 2.5]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);
  const opacity = useTransform(scrollY, [0, 500], [0.4, 0.1]);

  const rotateX = useTransform(springY, [-20, 20], [2, -2]);
  const rotateY = useTransform(springX, [-20, 20], [-2, 2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* Cosmic Dust Particles - Increased blur and reduced opacity */}
      <div className="absolute inset-0 opacity-[0.05]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1
            }}
            animate={{
              y: [null, "-20%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-[60%] -translate-y-1/2 w-[120%] max-w-6xl aspect-video flex items-center justify-center">
        <motion.div
          style={{ 
            scale, 
            rotate, 
            opacity,
            x: springX,
            y: springY,
            rotateX,
            rotateY,
          }}
          className="relative w-full h-full flex items-center justify-center perspective-2000 will-change-transform"
        >
          {/* Main Infinity SVG */}
          <svg 
            viewBox="0 0 800 400" 
            className="w-full h-full drop-shadow-[0_0_80px_rgba(59,130,246,0.15)] filter blur-[2px]"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="25%" stopColor="#00f2ff" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#bc13fe" stopOpacity="0.8" />
                <stop offset="75%" stopColor="#ff4d4d" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* The Main Ribbon - Softer and wider */}
            <path 
              d="M200 200C200 100 350 100 400 200C450 300 600 300 600 200C600 100 450 100 400 200C350 300 200 300 200 200Z"
              stroke="url(#logoGradient)"
              strokeWidth="60"
              className="opacity-[0.08]"
              strokeLinecap="round"
            />

            {/* Orbital Particle - More subtle */}
            <motion.circle
              r="15"
              fill="white"
              filter="url(#glow)"
              className="opacity-40"
            >
              <animateMotion
                dur="12s"
                repeatCount="indefinite"
                path="M200 200C200 100 350 100 400 200C450 300 600 300 600 200C600 100 450 100 400 200C350 300 200 300 200 200Z"
              />
            </motion.circle>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="10" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </svg>
        </motion.div>
      </div>

      {/* Atmospheric Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 z-[1]" />
    </div>
  );
}

function Globe({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function Zap({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
