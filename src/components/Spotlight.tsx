import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block"
      style={{
        background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
      }}
    >
      <motion.div 
        className="absolute w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
        style={{
          left: springX,
          top: springY,
        }}
      />
    </motion.div>
  );
}
