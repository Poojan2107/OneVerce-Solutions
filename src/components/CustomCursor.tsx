import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useCoarsePointer } from '../hooks/useCoarsePointer';

export default function CustomCursor() {
  const reducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useCoarsePointer();
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig1 = { damping: 20, stiffness: 250, mass: 0.5 };
  const springConfig2 = { damping: 30, stiffness: 1000, mass: 0.1 };

  const cursorXSpring1 = useSpring(cursorX, springConfig1);
  const cursorYSpring1 = useSpring(cursorY, springConfig1);
  const cursorXSpring2 = useSpring(cursorX, springConfig2);
  const cursorYSpring2 = useSpring(cursorY, springConfig2);

  useEffect(() => {
    if (reducedMotion || isCoarsePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Fast check to avoid expensive closest() queries on standard divs/spans
      const isInteractive = 
        ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('a, button, [role="button"]') !== null;

      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [reducedMotion, isCoarsePointer, cursorX, cursorY]);

  if (reducedMotion || isCoarsePointer) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring1,
          y: cursorYSpring1,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/20 -translate-x-1/2" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-blue-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorXSpring2,
          y: cursorYSpring2,
          translateX: '-50%',
          translateY: '-50%',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </>
  );
}

