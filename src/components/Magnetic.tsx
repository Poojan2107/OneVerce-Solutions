import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if device is a touchscreen (mobile/tablet) to disable heavy physics
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || isTouchDevice) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    setPosition({ x: dx * 0.3, y: dy * 0.3 });
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setPosition({ x: 0, y: 0 });
  };

  if (isTouchDevice) {
    // On low-end/mobile devices, just render the child normally with no physics overhead
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
