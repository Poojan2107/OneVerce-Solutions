import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete?: () => void;
}


export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const startupLogs = [
    "INITIALIZING CORE_ENGINE v2.4.9",
    "CALIBRATING INFINITY_SCENE...",
    "ESTABLISHING SECURE_UPLINK...",
    "MAPPING ARCHITECTURAL_INFRASTRUCTURE...",
    "SYNCHRONIZING SYSTEM_STUDIO...",
    "LOADING VISUAL_ASSETS...",
    "OPTIMIZING PERFORMANCE_LAYERS...",
    "SYSTEM_READY: ONEVERCE_ONLINE"
  ];

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < startupLogs.length) {
        setLogs(prev => [...prev, `[${new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}] ${startupLogs[logIndex]}`]);
        logIndex++;
        setProgress(prev => Math.min(prev + 12.5, 100));
      } else {
        clearInterval(logInterval);
        setTimeout(() => {
          setLoading(false);
          if (onComplete) onComplete();
        }, 800);
      }
    }, 400);

    return () => clearInterval(logInterval);
  }, [onComplete]);


  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center p-6 font-mono"
        >
          <div className="max-w-md w-full space-y-6 sm:space-y-12">
            {/* Logo Section */}
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-500/10 animate-pulse" />
                <img 
                  src="https://res.cloudinary.com/daheghidk/image/upload/v1775229314/logooneverce_l3ckqq.jpg" 
                  alt="Oneverce" 
                  className="w-10 h-10 object-cover rounded-md z-10"
                />
              </motion.div>
              <div className="text-center space-y-2">
                <h1 className="text-white text-xl font-black uppercase tracking-[0.4em]">Oneverce</h1>
                <p className="text-[#00f0ff] text-[9px] font-bold uppercase tracking-[0.6em] animate-pulse">Systems Studio</p>
              </div>
            </div>

            {/* Logs Section */}
            <div className="space-y-2 sm:space-y-3 min-h-[120px] sm:min-h-[160px]">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[10px] text-zinc-500 flex items-start gap-4 leading-relaxed"
                >
                  <span className="text-blue-500/40 shrink-0">0{i+1}</span>
                  <span>{log}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Booting_Sequence</div>
                <div className="text-xl font-black text-white">{Math.round(progress)}%</div>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#00f0ff] to-blue-600 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                />
              </div>
            </div>
          </div>

          {/* Decorative Corner Reticles */}
          <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-white/10" />
          <div className="absolute top-10 right-10 w-20 h-20 border-r border-t border-white/10" />
          <div className="absolute bottom-10 left-10 w-20 h-20 border-l border-b border-white/10" />
          <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-white/10" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
