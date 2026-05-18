import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AlertCircle, ShieldCheck, Zap, BarChart3, ArrowRight, Activity, Globe } from 'lucide-react';

type AuditScores = {
  performance: number;
  ux: number;
  strategy: number;
  conversion: number;
};

export default function AuditTool() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('');
  const [scores, setScores] = useState<AuditScores>({
    performance: 0,
    ux: 0,
    strategy: 0,
    conversion: 0,
  });

  const stages = [
    'Scanning site architecture...',
    'Analyzing conversion patterns...',
    'Evaluating UX performance...',
    'Identifying revenue leaks...',
    'Finalizing strategic audit...',
  ];

  useEffect(() => {
    if (!isAnalyzing) return;

    let currentStage = 0;
    const interval = setInterval(() => {
      if (currentStage < stages.length) {
        setStage(stages[currentStage]);
        setProgress((prev) => Math.min(prev + 20, 100));
        currentStage++;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [isAnalyzing]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsAnalyzing(true);
    setError(null);
    setResult(null);
    setProgress(0);

    try {
      const response = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });

      let data: { content?: string; scores?: AuditScores | null; error?: string } = {};
      try {
        data = await response.json();
      } catch {
        setError('Audit service unavailable. Deploy API routes or use Vercel for full functionality.');
        return;
      }

      if (!response.ok) {
        setError(data.error || 'Audit request failed. Please try again.');
        return;
      }

      if (data.scores) {
        setScores(data.scores);
      }

      setResult(data.content || '');
    } catch {
      setError('Network failure. Check your connection and try again.');
    } finally {
      setIsAnalyzing(false);
      setProgress(100);
    }
  };

  return (
    <section
      id="audit"
      aria-labelledby="audit-heading"
      className="py-16 sm:py-24 md:py-48 bg-[#030303] border-y border-white/5 relative overflow-hidden bg-blueprint"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/[0.01] rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true" />
                <span className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">
                  Strategic Analysis
                </span>
              </div>

              <h2 id="audit-heading" className="heading-2xl text-white uppercase mb-10 break-normal">
                Audit Your Conversion
              </h2>

              <p className="text-zinc-400 text-base md:text-xl mb-8 md:mb-12 max-w-xl leading-loose font-medium tracking-wide">
                Identify infrastructure bottlenecks and conversion friction in seconds.
              </p>

              <div className="space-y-5">
                {[
                  { icon: <Zap size={18} className="text-blue-500" aria-hidden="true" />, label: 'Identify ROI Opportunities' },
                  { icon: <ShieldCheck size={18} className="text-purple-500" aria-hidden="true" />, label: 'Seal Conversion Leaks' },
                  { icon: <BarChart3 size={18} className="text-red-500" aria-hidden="true" />, label: 'Optimize Performance' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-500 shadow-xl">
                      {item.icon}
                    </div>
                    <span className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/5 bg-white/[0.01]"
            >
              <div className="bg-white/[0.03] px-10 py-6 border-b border-white/[0.05] flex items-center justify-between">
                <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-3">
                  Intelligence Dashboard
                </div>
                <div
                  className={`w-1.5 h-1.5 rounded-full ${isAnalyzing ? 'bg-blue-500 animate-pulse' : 'bg-emerald-500/40'}`}
                  aria-hidden="true"
                />
              </div>

              <div className="p-6 sm:p-10 md:p-16 min-h-0 md:min-h-[480px] flex flex-col justify-center">
                {!result && !isAnalyzing ? (
                  <div className="space-y-12">
                    {error ? (
                      <div
                        role="alert"
                        className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 text-center space-y-6"
                      >
                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" aria-hidden="true" />
                        <p className="text-red-400/80 text-sm leading-relaxed font-medium">{error}</p>
                        <button
                          type="button"
                          onClick={() => setError(null)}
                          className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                        >
                          Dismiss & Retry
                        </button>
                      </div>
                    ) : (
                      <p className="text-zinc-500 text-lg text-center font-medium leading-relaxed">
                        Enter your URL to generate a high-fidelity audit of your revenue architecture.
                      </p>
                    )}
                    <form onSubmit={handleAudit} className="space-y-6">
                      <div className="relative group">
                        <label htmlFor="audit-url" className="sr-only">
                          Website URL to audit
                        </label>
                        <div className="absolute inset-y-0 left-4 flex items-center text-zinc-700 group-focus-within:text-blue-500 transition-colors pointer-events-none">
                          <Globe size={20} aria-hidden="true" />
                        </div>
                        <input
                          id="audit-url"
                          type="url"
                          inputMode="url"
                          autoComplete="url"
                          required
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="https://yourdomain.com"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-[2rem] pl-12 pr-4 md:pl-16 md:pr-8 py-5 md:py-8 text-base md:text-2xl focus:border-blue-500/30 outline-none transition-all placeholder:text-zinc-800 text-white"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isAnalyzing}
                        className="w-full bg-white text-black py-8 rounded-[2rem] font-bold uppercase tracking-widest text-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 shadow-2xl group/btn disabled:opacity-60"
                      >
                        Initiate Free Audit
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </button>
                    </form>
                  </div>
                ) : isAnalyzing ? (
                  <div className="space-y-12 py-10 text-center" role="status" aria-live="polite">
                    <div className="relative w-24 h-24 mx-auto">
                      <div className="absolute inset-0 rounded-full border-4 border-white/5" />
                      <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Activity size={32} className="text-blue-500 animate-pulse" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="text-white font-bold text-xl uppercase tracking-[0.2em]">{stage}</div>
                      <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
                        Analysis in progress... {progress}%
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                      {Object.entries(scores).map(([key, value]) => (
                        <div
                          key={key}
                          className="glass-card p-4 sm:p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden group bg-white/[0.01]"
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-white/5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${value}%` }}
                              transition={{ duration: 1.5, ease: 'easeOut' }}
                              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                            />
                          </div>
                          <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-2">{key}</div>
                          <div className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">{value}%</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 text-sm text-zinc-500 leading-relaxed max-h-[350px] overflow-y-auto custom-scrollbar whitespace-pre-wrap font-medium">
                      {result}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setResult(null);
                          setUrl('');
                        }}
                        className="flex-1 bg-white/[0.03] border border-white/10 text-white py-6 rounded-[1.5rem] font-bold uppercase tracking-widest text-[9px] hover:bg-white/[0.08] transition-all"
                      >
                        New Audit
                      </button>
                      <button
                        type="button"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex-[2] bg-white text-black py-6 rounded-[1.5rem] font-bold uppercase tracking-widest text-[9px] hover:scale-[1.02] transition-all shadow-2xl"
                      >
                        Get Strategy Session
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
