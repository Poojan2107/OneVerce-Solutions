import { useEffect, useState } from 'react';

/** True on phones/tablets — disable hover parallax, Lenis, etc. */
export function useCoarsePointer(): boolean {
  const [isCoarse, setIsCoarse] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)');
    const onChange = () => setIsCoarse(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isCoarse;
}
