import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowUpRight, Cpu, Layers, ExternalLink, X, FileText } from 'lucide-react';
import { useAudioUI } from '../context/AudioUIContext';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  brief: string;
  metrics: { label: string; val: string }[];
  stack: string[];
  challenge: string;
  solution: string;
  outcomes: string[];
}

const caseStudiesList: CaseStudy[] = [
  {
    id: 'creditsim',
    title: 'CreditSim: Simulating High-Scale Credit Analytics',
    category: 'SaaS Platform',
    brief: 'Engineering simulator modules capable of resolving 5,000+ credit evaluations with real-time feedback loops.',
    metrics: [
      { label: 'Latency Reduction', val: '78%' },
      { label: 'Calculation Loop', val: '< 15ms' }
    ],
    stack: ['React', 'Chart.js', 'Vite', 'Sub-component memoization'],
    challenge: 'Handling dynamic, nested form entries that recalculate entire amortization grids on every key press caused major typing lag and UI dropouts.',
    solution: 'Implemented component-level memoization, deferred calculation states using debounced updates, and offloaded graph redraws to a canvas-based rendering engine.',
    outcomes: [
      'Eliminated layout re-renders on keystroke',
      'Improved input responsiveness to 60fps',
      'Boosted simulated user scenario completion rate by 42%'
    ]
  },
  {
    id: 'productnexus',
    title: 'ProductNexus: Real-Time B2B SaaS Inventory Gateway',
    category: 'Systems Infrastructure',
    brief: 'Bridging enterprise relational databases with offline-first client dashboards during transaction spikes.',
    metrics: [
      { label: 'Sync Consistency', val: '100%' },
      { label: 'API Footprint', val: '-40%' }
    ],
    stack: ['NodeJS', 'WebSockets', 'SQLite local caching', 'TailwindCSS'],
    challenge: 'Multiple distributors modifying inventory simultaneously caused out-of-sync indicators and double-booking errors.',
    solution: 'Designed an event-driven synchronization channel using WebSockets with automatic SQLite-backed local cache failover and queue reconciliation.',
    outcomes: [
      'Prevented concurrent purchase failures',
      'Enabled offline transaction queues for network drops',
      'Reduced database polling frequency by 90%'
    ]
  },
  {
    id: 'travellingtent',
    title: 'Travelling Tent: Conversion Architecture Audit',
    category: 'E-Commerce Optimization',
    brief: 'Systematically restructuring checkout flows and lazy loading to boost conversion rates and SEO visibility.',
    metrics: [
      { label: 'Checkout Conversion', val: '4.2x' },
      { label: 'Lighthouse Score', val: '100/100' }
    ],
    stack: ['Vite', 'Stripe checkout elements', 'Next-gen image formatting', 'Preloading directives'],
    challenge: 'High cart abandonment rate caused by slow checkout loading on mobile networks and excessive bundle sizes.',
    solution: 'Audit of Web Vitals, conversion layout shifts, lazy loading of images, bundling Stripe library script triggers, and optimizing fonts.',
    outcomes: [
      'Reduced bundle payload from 1.4MB to 160KB',
      'Increased mobile conversion by 300%+',
      'Gained first-page SERP rankings for targeted terms'
    ]
  }
];

export default function CaseStudies() {
  const { playHover, playClick } = useAudioUI();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedStudy = caseStudiesList.find(c => c.id === selectedId);

  const handleOpen = (id: string) => {
    playClick();
    setSelectedId(id);
  };

  const handleClose = () => {
    playClick();
    setSelectedId(null);
  };

  return (
    <section id="work-logs" className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      {/* Dynamic Grid Background overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Technical Dossier</span>
          </div>
          <h2 className="heading-2xl text-white uppercase mb-6">
            Transmission Logs
          </h2>
          <p className="text-zinc-400 text-base sm:text-xl max-w-xl mx-auto leading-relaxed font-medium">
            Deep-dives into the architecture, challenges, and engineering metrics of our builds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudiesList.map((study) => (
            <div
              key={study.id}
              onClick={() => handleOpen(study.id)}
              onMouseEnter={playHover}
              className="group p-6 sm:p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:border-purple-500/30 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer flex flex-col justify-between h-full relative"
            >
              {/* Decorative accent */}
              <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-purple-400 transition-colors">
                <FileText size={18} />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-wider text-purple-400">
                    {study.category}
                  </span>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mt-1.5 leading-snug group-hover:text-purple-300 transition-colors">
                    {study.title}
                  </h3>
                </div>

                <p className="text-zinc-500 text-xs font-medium leading-relaxed">
                  {study.brief}
                </p>

                {/* Metrics highlights */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  {study.metrics.map(m => (
                    <div key={m.label}>
                      <div className="text-lg font-black text-white font-mono">{m.val}</div>
                      <div className="text-[8px] text-zinc-600 font-bold uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-bold text-zinc-500 group-hover:text-white uppercase tracking-widest transition-colors">
                <span>View Full Log</span>
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail overlay panel */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal layout */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative bg-[#090a0d] border border-white/10 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-2xl max-w-2xl w-full my-4 sm:my-8 overflow-hidden"
            >
              {/* Header */}
              <div className="px-5 sm:px-10 pt-6 sm:pt-8 pb-4 flex items-start justify-between gap-3 border-b border-white/5 bg-white/[0.01]">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-purple-400 block">{selectedStudy.category} Log</span>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mt-0.5">{selectedStudy.title}</h3>
                </div>
                <button
                  onClick={handleClose}
                  className="w-11 h-11 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105 shrink-0"
                  aria-label="Close Case Study"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Content body */}
              <div className="p-5 sm:p-10 space-y-6 max-h-[65vh] sm:max-h-[70vh] overflow-y-auto font-sans leading-relaxed text-zinc-400 text-sm">
                <div className="space-y-2">
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-500">The Challenge</div>
                  <p className="text-zinc-300 font-medium">{selectedStudy.challenge}</p>
                </div>

                <div className="space-y-2">
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Our Solution</div>
                  <p className="text-zinc-300 font-medium">{selectedStudy.solution}</p>
                </div>

                <div className="space-y-3">
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Key Outcomes</div>
                  <ul className="space-y-2 text-xs text-zinc-300 font-medium">
                    {selectedStudy.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Technology & Methods</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.stack.map(tech => (
                      <span key={tech} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
