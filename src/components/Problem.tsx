import { motion } from 'motion/react';
import { ShieldAlert, Cpu, Network, Zap, Activity, AlertCircle, TrendingDown, Palette, MousePointerClick, BarChart3 } from 'lucide-react';

const painPoints = [
  {
    icon: <TrendingDown className="w-5 h-5 text-red-500" />,
    title: "Performance friction",
    description: "Every millisecond of latency is a potential exit point. We eliminate technical lag to ensure your traffic converts at peak efficiency."
  },
  {
    icon: <Palette className="w-5 h-5 text-red-500" />,
    title: "Generic design",
    description: "Template-based identities project mediocrity. We engineer custom, high-fidelity visual systems that command market authority."
  },
  {
    icon: <MousePointerClick className="w-5 h-5 text-red-500" />,
    title: "UX roadblocks",
    description: "Complex navigation kills intent. We optimize every interaction to ensure a friction-less path from landing to transaction."
  }
];

export default function Problem() {
  return (
    <section id="problem" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden bg-blueprint">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-red-600/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-600/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
              <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Strategic Audit</span>
            </div>
            
            <h2 className="text-4xl sm:text-7xl lg:text-8xl text-white uppercase mb-12 leading-[1.1] break-normal font-black tracking-tighter">
              System<br />
              <span className="text-red-500 text-glow">Failure</span><br />
              Identified.
            </h2>
            
            <p className="text-zinc-400 text-base sm:text-xl leading-relaxed mb-12 max-w-lg tracking-wide font-medium">
              Traffic hitting technical dead-ends results in <span className="text-red-400 font-bold">40%</span> ad spend waste. We stop revenue leakage through engineered precision.
            </p>

            <div className="relative group max-w-sm">
              <div className="absolute -inset-6 bg-red-600/[0.06] rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass-card p-8 rounded-2xl overflow-hidden border border-white/5">
                {/* Tactical Corner Reticles */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-red-500/30" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-red-500/30" />
                
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,0,0,0.015)_50%)] bg-[size:100%_4px] pointer-events-none" />
                <p className="text-zinc-300 text-lg italic leading-relaxed border-l-2 border-red-600/30 pl-6 font-medium">
                  "CAC dropped by 65% post-architecture overhaul."
                </p>
                <div className="mt-6 flex items-center gap-4 pl-6">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 overflow-hidden flex-shrink-0">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=partner" alt="Strategic Partner" className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">Strategic Partner</div>
                    <div className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] font-bold">Business Director</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group glass-card p-8 rounded-2xl hover:bg-white/[0.03] transition-all relative overflow-hidden border border-white/5"
              >
                <div className="absolute -bottom-12 -right-12 w-40 h-40 border border-red-600/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="w-12 h-12 rounded-xl bg-red-600/5 border border-red-600/10 text-red-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-500">
                  {point.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 tracking-tight text-white uppercase">{point.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">{point.description}</p>
                
                <div className="mt-6 flex gap-2 h-1 w-16 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-0 bg-red-600 group-hover:w-full transition-all duration-[1.2s] ease-out" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
