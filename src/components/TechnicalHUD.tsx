import { useEffect, useState, useRef } from 'react';

export default function TechnicalHUD() {
  const [time, setTime] = useState(new Date());
  // Compute encrypted ID once so it is completely stable
  const [encryptedId] = useState(() => Math.random().toString(16).slice(2, 10));

  const coordXRef = useRef<HTMLSpanElement>(null);
  const coordYRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (coordXRef.current) {
        coordXRef.current.textContent = String(e.clientX);
      }
      if (coordYRef.current) {
        coordYRef.current.textContent = String(e.clientY);
      }
    };

    const timer = setInterval(() => setTime(new Date()), 1000);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] font-mono text-[9px] text-blue-500/40 uppercase tracking-widest p-6 hidden md:block">
      {/* Top Left */}
      <div className="absolute top-6 left-6 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-blue-500 animate-pulse" />
          ONEVERCE_OS_V2.4.0
        </div>
        <div className="text-zinc-600">SYST_LOAD: 24%</div>
      </div>

      {/* Top Right */}
      <div className="absolute top-6 right-6 text-right">
        <div>{time.toLocaleTimeString()}</div>
        <div className="text-zinc-600">UTC_OFFSET: +5:30</div>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-6 left-6 flex items-end gap-10">
        <div className="flex flex-col gap-1">
          <div>LOC_X: <span ref={coordXRef}>0</span></div>
          <div>LOC_Y: <span ref={coordYRef}>0</span></div>
        </div>
        <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500/40 animate-[shimmer_2s_infinite]" style={{ width: '60%' }} />
        </div>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-6 right-6 text-right flex flex-col gap-1">
        <div className="flex items-center gap-2 justify-end">
          NEURAL_LINK_ACTIVE
          <div className="w-1 h-1 bg-cyan-500 animate-ping" />
        </div>
        <div className="text-zinc-600">ENCRYPTED_ID: {encryptedId}</div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10" />
    </div>
  );
}

