import { useState } from 'react'
import {
  Layers,
  Cpu,
  Shield,
  Zap,
  BrainCircuit,
  ArrowRight,
  Terminal,
  CheckCircle2,
} from 'lucide-react'
import { useAudioUI } from '../context/AudioUIContext'

interface ArchitectureLayer {
  id: string
  tag: string
  name: string
  tech: string
  description: string
  metricLabel: string
  metricVal: string
  metricPercent: number
  metric2Label: string
  metric2Val: string
  metric2Percent: number
  icon: React.ReactNode
  color: string
  code: string
  lang: string
}

export default function SystemArchitecture() {
  const { playHover, playClick } = useAudioUI()
  const [activeLayerId, setActiveLayerId] = useState('runtime')

  const layers: ArchitectureLayer[] = [
    {
      id: 'runtime',
      tag: 'LAYER_01 // SECURE_RUNTIME',
      name: 'Core Runtime & Edge SSR',
      tech: 'Vite / Next.js / Edge Runtime',
      description:
        'Deploy-ready core optimized for sub-500ms TTFB, zero-latency hydration, and search ranking dominance.',
      metricLabel: 'TTFB Latency',
      metricVal: '85ms',
      metricPercent: 95,
      metric2Label: 'Core Web Vitals',
      metric2Val: '100/100',
      metric2Percent: 100,
      icon: <Layers size={18} />,
      color: 'blue',
      lang: 'typescript',
      code: `// vite.config.ts
export default defineConfig({
  runtime: 'edge',
  ssr: {
    hydration: 'zero-latency',
    caching: 'stale-while-revalidate',
  },
  optimization: {
    splitChunks: true,
    minify: 'esbuild'
  }
});`,
    },
    {
      id: 'interaction',
      tag: 'LAYER_02 // SYSTEM_INTERACTION',
      name: 'UI/UX Interaction Engine',
      tech: 'React / Framer Motion / CSS GPU',
      description:
        'Fluid page transitions, physics-based gesture curves, and hardware-accelerated layouts designed to retain user traffic.',
      metricLabel: 'Render Thread FPS',
      metricVal: '60fps (Locked)',
      metricPercent: 100,
      metric2Label: 'Retention Increase',
      metric2Val: '+140%',
      metric2Percent: 88,
      icon: <Zap size={18} />,
      color: 'purple',
      lang: 'typescript',
      code: `// motion-config.ts
export const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
  exit: { opacity: 0 }
};`,
    },
    {
      id: 'caching',
      tag: 'LAYER_03 // DATA_CACHING',
      name: 'High-Throughput Storage & Cache',
      tech: 'PostgreSQL / Redis / Prisma',
      description:
        'Offline-first database gateways and vector caching optimized for sub-millisecond retrieval speeds.',
      metricLabel: 'DB Query Latency',
      metricVal: '<2.0ms',
      metricPercent: 98,
      metric2Label: 'Cache Hit Rate',
      metric2Val: '99.8%',
      metric2Percent: 99,
      icon: <Cpu size={18} />,
      color: 'red',
      lang: 'typescript',
      code: `// db-gateway.ts
const cache = await redis.get(\`session:\${userId}\`);
if (!cache) {
  const dbRecord = await prisma.user.findUnique({
    where: { id: userId },
    include: { vectorProfile: true }
  });
  await redis.set(\`session:\${userId}\`, dbRecord, { ex: 3600 });
  return dbRecord;
}
return cache;`,
    },
    {
      id: 'security',
      tag: 'LAYER_04 // BORDER_SECURITY',
      name: 'Hardened Security & Gateways',
      tech: 'Cloudflare / JWT / HTTPS',
      description:
        'Rate-limiting rules, automated request scrubbing, end-to-end payload encryption, and penetration-tested API endpoints.',
      metricLabel: 'DDoS Mitigation',
      metricVal: 'Instantaneous',
      metricPercent: 100,
      metric2Label: 'Threat Rejection',
      metric2Val: '100.0%',
      metric2Percent: 100,
      icon: <Shield size={18} />,
      color: 'blue',
      lang: 'typescript',
      code: `// security-middleware.ts
const rateLimiter = new RateLimiter({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // limit each IP
  message: "INTEGRITY_VIOLATION: LIMIT"
});
export const middleware = (req) => 
  rateLimiter.verify(req);`,
    },
    {
      id: 'ai',
      tag: 'LAYER_05 // INTELLIGENCE_PIPELINE',
      name: 'Autonomous Pipeline Logic',
      tech: 'LLM APIs / Pinecone / Vector Search',
      description:
        'Serverless neural models that pre-qualify user requirements, analyze engagement profiles, and execute agentic routing.',
      metricLabel: 'LLM Pipeline Latency',
      metricVal: '<1.2s',
      metricPercent: 92,
      metric2Label: 'Decision Accuracy',
      metric2Val: '98.4%',
      metric2Percent: 98,
      icon: <BrainCircuit size={18} />,
      color: 'purple',
      lang: 'json',
      code: `{
  "pipeline": "neural_uplink_v4",
  "agentic_routing": true,
  "model": "gpt-4o-mini",
  "temperature": 0.1,
  "vector_search": "cosine_similarity"
}`,
    },
  ]

  const activeLayer = layers.find(l => l.id === activeLayerId) || layers[0]

  const handleInquiry = () => {
    playClick()
    const details = `Selected system architecture layer for custom integration inquiry:\n- Layer: ${activeLayer.name}\n- Tech Stack: ${activeLayer.tech}\n- Key Target: ${activeLayer.metricLabel} (${activeLayer.metricVal})`

    const event = new CustomEvent('open-contact-modal', {
      detail: { details },
    })
    window.dispatchEvent(event)
  }

  const getAccentColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500 bg-blue-500/[0.03] border-blue-500/20'
      case 'purple':
        return 'text-purple-500 bg-purple-500/[0.03] border-purple-500/20'
      case 'red':
        return 'text-red-500 bg-red-500/[0.03] border-red-500/20'
      default:
        return 'text-zinc-500'
    }
  }

  const getBarColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500'
      case 'purple':
        return 'bg-purple-500'
      case 'red':
        return 'bg-red-500'
      default:
        return 'bg-white'
    }
  }

  return (
    <section id='architecture' className='py-16 sm:py-24 bg-[#050505] relative overflow-hidden'>
      {/* Background radial glow */}
      <div className='absolute inset-0 pointer-events-none z-0'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[150px]' />
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-20'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
            <span className='text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]'>
              Capabilities Matrix
            </span>
          </div>
          <h2 className='heading-2xl text-white uppercase mb-6 font-black tracking-tighter'>
            System Architecture
          </h2>
          <p className='text-zinc-400 text-base sm:text-xl max-w-xl mx-auto leading-relaxed font-medium'>
            Explore the proprietary, zero-latency layers we integrate to secure, automate, and scale
            your digital operations.
          </p>
        </div>

        <div className='grid lg:grid-cols-12 gap-8 items-stretch'>
          {/* Layer selectors panel */}
          <div className='lg:col-span-6 space-y-4'>
            <div className='text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2'>
              Layer Stack Selection
            </div>

            <div className='space-y-3'>
              {layers.map(layer => {
                const isActive = layer.id === activeLayerId
                return (
                  <button
                    key={layer.id}
                    onClick={() => {
                      playClick()
                      setActiveLayerId(layer.id)
                    }}
                    onMouseEnter={playHover}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 cursor-pointer ${
                      isActive
                        ? 'border-blue-500/40 bg-blue-500/2 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]'
                        : 'border-white/5 bg-white/1 hover:border-white/15 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'border-white/20 bg-white/[0.02]'
                      }`}
                    >
                      {layer.icon}
                    </div>
                    <div className='min-w-0 flex-1'>
                      <div className='text-sm font-bold tracking-tight mb-0.5 truncate'>
                        {layer.name}
                      </div>
                      <div className='text-xs text-zinc-500 font-mono truncate'>{layer.tech}</div>
                    </div>
                    <div
                      className={`text-[9px] font-black font-mono shrink-0 transition-colors ${
                        isActive ? 'text-[#00f0ff]' : 'text-zinc-600'
                      }`}
                    >
                      {layer.id.toUpperCase()}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Configuration readout card */}
          <div className='lg:col-span-6 flex flex-col justify-between p-6 sm:p-10 rounded-[2rem] border border-white/10 bg-[#090a0d] relative overflow-hidden'>
            {/* Ambient glow */}
            <div className='absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none' />

            <div className='space-y-6'>
              <div className='flex justify-between items-start'>
                <div>
                  <span className='text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 block font-mono'>
                    {activeLayer.tag}
                  </span>
                  <h4 className='text-xl font-black text-white uppercase tracking-tight mt-1'>
                    {activeLayer.name}
                  </h4>
                </div>
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${getAccentColor(activeLayer.color)}`}
                >
                  <CheckCircle2 size={14} className='animate-pulse' />
                </div>
              </div>

              <p className='text-sm text-zinc-400 leading-relaxed font-medium'>
                {activeLayer.description}
              </p>

              {/* Systems metrics */}
              <div className='p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4'>
                <div className='space-y-2'>
                  <div className='flex justify-between text-xs font-mono'>
                    <span className='text-zinc-500 font-bold uppercase tracking-wider'>
                      {activeLayer.metricLabel}
                    </span>
                    <span className='text-white font-bold'>{activeLayer.metricVal}</span>
                  </div>
                  <div className='h-1.5 w-full bg-white/5 rounded-full overflow-hidden'>
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${getBarColor(activeLayer.color)}`}
                      style={{ width: `${activeLayer.metricPercent}%` }}
                    />
                  </div>
                </div>

                <div className='space-y-2'>
                  <div className='flex justify-between text-xs font-mono'>
                    <span className='text-zinc-500 font-bold uppercase tracking-wider'>
                      {activeLayer.metric2Label}
                    </span>
                    <span className='text-white font-bold'>{activeLayer.metric2Val}</span>
                  </div>
                  <div className='h-1.5 w-full bg-white/5 rounded-full overflow-hidden'>
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${getBarColor(activeLayer.color)}`}
                      style={{ width: `${activeLayer.metric2Percent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Code Snippet / Protocol readout */}
              <div className='rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-[10px] leading-relaxed text-zinc-300 relative overflow-hidden'>
                <div className='absolute top-2 right-3 flex items-center gap-1.5 opacity-30 select-none'>
                  <Terminal size={10} />
                  <span className='text-[8px] uppercase tracking-widest font-black'>
                    Protocol Specs
                  </span>
                </div>
                <pre className='overflow-x-auto whitespace-pre font-mono scrollbar-thin'>
                  <code>{activeLayer.code}</code>
                </pre>
              </div>
            </div>

            <button
              onClick={handleInquiry}
              onMouseEnter={playHover}
              className='mt-6 w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 sm:py-[18px] rounded-xl font-bold uppercase tracking-widest text-[9px] hover:scale-102 active:scale-98 transition-all shadow-xl shadow-blue-500/20 cursor-pointer min-h-[48px]'
            >
              Initialize Custom Integration
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
