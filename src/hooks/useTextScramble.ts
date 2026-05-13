import { useState, useCallback, useRef } from 'react';

const chars = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const useTextScramble = (initialText: string) => {
  const [displayText, setDisplayText] = useState(initialText);
  const frameRef = useRef<number>(0);
  const iterationRef = useRef<number>(0);
  const targetTextRef = useRef<string>(initialText);

  const scramble = useCallback((newText: string) => {
    targetTextRef.current = newText;
    iterationRef.current = 0;
    
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const update = () => {
      const currentTarget = targetTextRef.current;
      const scrambled = currentTarget
        .split('')
        .map((char, index) => {
          if (index < iterationRef.current) {
            return currentTarget[index];
          }
          if (char === ' ') return ' ';
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(scrambled);

      if (iterationRef.current < currentTarget.length) {
        iterationRef.current += 1 / 3;
        frameRef.current = requestAnimationFrame(update);
      }
    };

    update();
  }, []);

  return { displayText, scramble };
};
