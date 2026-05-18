import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useCoarsePointer } from '../hooks/useCoarsePointer';

export default function Spotlight() {
  const reducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useCoarsePointer();

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 30, stiffness: 120 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (reducedMotion || isCoarsePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [reducedMotion, isCoarsePointer, mouseX, mouseY]);

  if (reducedMotion || isCoarsePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/[0.07] rounded-full blur-[140px] pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
      />
    </div>
  );
}

