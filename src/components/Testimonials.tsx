import { motion } from 'motion/react';
import { TrendingUp, Zap, ShieldCheck } from 'lucide-react';

const results = [
  {
    icon: <TrendingUp size={20} />,
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
    project: 'ParArc Design Studio',
    category: 'Architecture · Portfolio',
    result: 'Organic search traffic surged post-launch through a surgical grayscale aesthetic and cinematic transitions that matched the studio\'s brand authority.',
    metric: '#1',
    metricLabel: 'Local Search',
    link: 'https://pararcdesignstudio.in/',
  },
  {
    icon: <ShieldCheck size={20} />,
    accent: 'blue',
    accentColor: 'rgb(59,130,246)',
    project: 'NeuralCredit',
    category: 'FinTech · Enterprise Platform',
    result: 'End-to-end AI loan intelligence platform with biometric verification, persistent AI engine, and real-time anomaly detection — built for institutional-grade viva presentation.',
    metric: '<2s',
    metricLabel: 'Verification',
    link: 'https://neuralcredit.onrender.com/',
  },
  {
    icon: <Zap size={20} />,
    accent: 'red',
    accentColor: 'rgb(239,68,68)',
    project: 'Travelling Tent',
    category: 'Platform · Travel Booking',
    result: 'Immersive luxury booking platform engineered for pixel-perfect UX and seamless checkout flows. Sub-second load performance on all devices.',
    metric: '4.2x',
    metricLabel: 'Conversion',
    link: 'https://travelling-tent.vercel.app/',
  },
];

const accentMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20 hover:border-emerald-500/40',
    text: 'text-emerald-400',
    glow: 'shadow-[0_0_40px_rgba(16,185,129,0.05)]',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20 hover:border-blue-500/40',
    text: 'text-blue-400',
    glow: 'shadow-[0_0_40px_rgba(59,130,246,0.05)]',
  },
  red: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/20 hover:border-red-500/40',
    text: 'text-red-400',
    glow: 'shadow-[0_0_40px_rgba(239,68,68,0.05)]',
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 md:py-24 bg-[#0a0a0c] relative overflow-hidden bg-blueprint"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Proof of Impact</span>
          </div>
          <h2 id="testimonials-heading" className="heading-xl text-white uppercase text-center mb-4">
            Delivered Results
          </h2>
          <p className="text-zinc-500 text-sm text-center max-w-lg mx-auto font-medium leading-relaxed">
            Real outcomes from real deployments — every metric earned in production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {results.map((item, index) => {
            const cls = accentMap[item.accent];
            return (
              <motion.a
                key={item.project}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group block p-6 md:p-8 rounded-2xl md:rounded-3xl bg-zinc-900/40 border ${cls.border} ${cls.glow} transition-all duration-500 relative overflow-hidden`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-10 h-10 rounded-xl ${cls.bg} flex items-center justify-center ${cls.text}`}>
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl md:text-3xl font-black tracking-tighter ${cls.text}`}>{item.metric}</div>
                    <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">{item.metricLabel}</div>
                  </div>
                </div>

                {/* Project label */}
                <div className="mb-3">
                  <div className={`text-[9px] font-bold uppercase tracking-[0.4em] mb-1 ${cls.text}`}>{item.category}</div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tighter">{item.project}</h3>
                </div>

                {/* Result text */}
                <p className="text-zinc-400 text-sm leading-relaxed font-medium border-l-2 border-white/[0.06] pl-3">
                  {item.result}
                </p>

                {/* Hover arrow */}
                <div className={`mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] ${cls.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  View Live <span>↗</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
