import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Calendar, Linkedin } from 'lucide-react'
import { useAudioUI } from '../context/AudioUIContext'

interface TimelineEvent {
  year: string
  title: string
  domain: string
  description: string
  tech: string[]
}

interface FounderTimeline {
  name: string
  role: string
  specialization: string
  bio: string
  accent: 'blue' | 'purple'
  socialLink: string
  timeline: TimelineEvent[]
}

const founderData: FounderTimeline[] = [
  {
    name: 'Vansh Prajapati',
    role: 'Founding Engineer',
    specialization: 'Digital Architecture & High-Velocity Engines',
    bio: 'Architect of high-velocity conversion engines, blending technical logic with surgical precision to dominate digital spaces.',
    accent: 'blue',
    socialLink: 'https://www.linkedin.com/in/vansh-prajapati-6a1749360',
    timeline: [
      {
        year: '2026',
        title: 'Launched Oneverce Studio Matrix',
        domain: 'Founder & Founding Engineer',
        description:
          'Engineered the core high-performance boilerplate, micro-haptics system, and automated deployment matrix.',
        tech: ['Next.js', 'Vite', 'Web Audio API', 'Serverless Node'],
      },
      {
        year: '2025',
        title: 'Architected NeuralCredit Systems',
        domain: 'Lead Systems Developer',
        description:
          'Designed credit kwalification dashboard simulators handling high-volume mock evaluations.',
        tech: ['React', 'WebSockets', 'TailwindCSS', 'Chart.js'],
      },
      {
        year: '2024',
        title: 'Electron Desktop Terminal & Offline POS',
        domain: 'Application Engineer',
        description:
          'Engineered robust local database syncing and kitchen order ticket websocket dispatchers.',
        tech: ['Electron', 'SQLite', 'NodeJS', 'WebSockets'],
      },
      {
        year: '2023',
        title: 'Frontend Systems Mastery',
        domain: 'Core Developer',
        description:
          'Mastered sub-second rendering, viewport optimization, and complex state lifecycles.',
        tech: ['React', 'JavaScript', 'HTML5', 'CSS Grid'],
      },
    ],
  },
  {
    name: 'Poojan Shrivastav',
    role: 'Founding Architect',
    specialization: 'Experience Strategy & Algorithmic Performance',
    bio: 'Master of experience strategy, synthesizing aesthetic authority with algorithmic performance to build the next generation of digital infrastructure.',
    accent: 'purple',
    socialLink: 'https://www.linkedin.com/in/poojanshrivastav21',
    timeline: [
      {
        year: '2026',
        title: 'Established Oneverce Design Systems',
        domain: 'Founding Architect & Designer',
        description:
          'Established complete structural layouts, color palettes, and glassmorphism standards.',
        tech: ['Framer Motion', 'Figma', 'CSS Variables', 'Three.js'],
      },
      {
        year: '2025',
        title: 'Product Nexus Asset Manager',
        domain: 'Lead Product Designer',
        description:
          'Crafted the layout hierarchy, predictive data interfaces, and inventory tables.',
        tech: ['Figma', 'TypeScript', 'Responsive Design', 'SaaS Wireframes'],
      },
      {
        year: '2024',
        title: 'Travelling Tent Experience Portal',
        domain: 'Strategy & Growth Architect',
        description:
          'Optimized conversion workflows leading to a verified 4.2x increase in checkouts.',
        tech: ['Stripe Integration', 'UX Audit', 'Interactive Calendars'],
      },
      {
        year: '2023',
        title: 'Strategic Branding & UI Systems',
        domain: 'Brand Specialist',
        description: 'Formulated visual strategies and high-converting typography frameworks.',
        tech: ['Design Systems', 'Typography', 'Figma', 'Creative Copy'],
      },
    ],
  },
]

export default function Team() {
  const { playHover, playClick } = useAudioUI()
  const [activeTab, setActiveTab] = useState<number>(0)
  const [activeEventIdx, setActiveEventIdx] = useState<number>(0)

  const currentFounder = founderData[activeTab]
  const activeEvent = currentFounder.timeline[activeEventIdx]

  const handleTabChange = (idx: number) => {
    playClick()
    setActiveTab(idx)
    setActiveEventIdx(0)
  }

  const handleEventSelect = (evtIdx: number) => {
    playClick()
    setActiveEventIdx(evtIdx)
  }

  const accentColorClass = currentFounder.accent === 'blue' ? 'text-blue-400' : 'text-purple-400'
  const accentBorderClass =
    currentFounder.accent === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30'
  const accentBgClass = currentFounder.accent === 'blue' ? 'bg-blue-500' : 'bg-purple-500'

  return (
    <section
      id='team'
      className='py-16 sm:py-24 md:py-32 bg-[#050505] relative overflow-hidden bg-blueprint'
    >
      {/* Background radial effects */}
      <div className='absolute inset-0 pointer-events-none z-0'>
        <div className='absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-500/[0.015] rounded-full blur-[180px]' />
        <div className='absolute bottom-0 right-1/4 w-125 h-125 bg-purple-500/[0.015] rounded-full blur-[180px]' />
      </div>

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center gap-3 mb-6'>
            <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
            <span className='text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]'>
              Command Dossier
            </span>
          </div>
          <h2 className='heading-2xl text-white uppercase mb-6'>Founders Matrix</h2>
          <p className='text-zinc-400 text-base sm:text-xl max-w-xl mx-auto leading-relaxed font-medium'>
            Explore the historical timeline, technological stack adoption, and system architecture
            records of our founders.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className='flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap'>
          {founderData.map((founder, idx) => (
            <button
              key={founder.name}
              onClick={() => handleTabChange(idx)}
              onMouseEnter={playHover}
              className={`px-4 sm:px-6 min-h-[44px] py-2.5 rounded-full border text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer ${
                activeTab === idx
                  ? founder.accent === 'blue'
                    ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20'
                    : 'bg-purple-600 border-purple-500 text-white shadow-xl shadow-purple-500/20'
                  : 'bg-white/1 border-white/5 text-zinc-500 hover:border-white/15'
              }`}
            >
              <span className='max-w-[120px] sm:max-w-none truncate block'>{founder.name}</span>
            </button>
          ))}
        </div>

        <div className='grid lg:grid-cols-12 gap-6 sm:gap-8 items-start'>
          {/* Left panel: Founder overview + interactive timeline */}
          <div className='lg:col-span-7 space-y-6 sm:space-y-8'>
            <div className='p-5 sm:p-10 rounded-[1.5rem] sm:rounded-4xl border border-white/5 bg-white/1 relative overflow-hidden'>
              <div className='flex items-center justify-between gap-4 mb-6'>
                <div>
                  <span
                    className={`text-[9px] font-black uppercase tracking-[0.30em] ${accentColorClass}`}
                  >
                    {currentFounder.role}
                  </span>
                  <h3 className='text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mt-0.5'>
                    {currentFounder.name}
                  </h3>
                </div>
                <a
                  href={currentFounder.socialLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-10 h-10 rounded-full border border-white/10 hover:border-white/20 flex items-center justify-center text-zinc-500 hover:text-white transition-all'
                  aria-label='LinkedIn Profile'
                >
                  <Linkedin size={16} />
                </a>
              </div>

              <div className='text-sm text-zinc-400 font-medium mb-6 leading-relaxed'>
                <span className='text-white font-bold block mb-1'>Domain Specialty:</span>
                {currentFounder.specialization}
              </div>

              <p className='text-zinc-500 text-sm leading-relaxed font-medium italic'>
                &quot;{currentFounder.bio}&quot;
              </p>
            </div>

            {/* Vertical timeline stepper */}
            <div className='relative pl-6 border-l border-white/5 ml-4 space-y-6'>
              {currentFounder.timeline.map((evt, idx) => (
                <button
                  key={evt.year}
                  type='button'
                  aria-label='Show timeline milestone'
                  onClick={() => handleEventSelect(idx)}
                  onMouseEnter={playHover}
                  className='relative group/node cursor-pointer text-left'
                >
                  {/* Timeline bubble connector */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#050505] flex items-center justify-center transition-all duration-300 ${
                      activeEventIdx === idx
                        ? currentFounder.accent === 'blue'
                          ? 'border-blue-500 scale-110'
                          : 'border-purple-500 scale-110'
                        : 'border-white/10 group-hover/node:border-white/30'
                    }`}
                  >
                    {activeEventIdx === idx && (
                      <div className={`w-1.5 h-1.5 rounded-full ${accentBgClass}`} />
                    )}
                  </div>

                  <div
                    className={`p-4.5 rounded-xl border transition-all ${
                      activeEventIdx === idx
                        ? `${accentBorderClass} bg-white/[0.02]`
                        : 'border-transparent bg-transparent hover:bg-white/1'
                    }`}
                  >
                    <div className='flex items-center justify-between flex-wrap gap-2'>
                      <span className={`font-mono text-xs font-bold ${accentColorClass}`}>
                        {evt.year}
                      </span>
                      <span className='text-[9px] font-black uppercase tracking-wider text-zinc-600'>
                        {evt.domain}
                      </span>
                    </div>
                    <div className='text-sm font-bold text-white mt-1 group-hover/node:text-[#00f0ff] transition-colors'>
                      {evt.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right panel: Active event details */}
          <div className='lg:col-span-5 mt-2 lg:mt-0'>
            <AnimatePresence mode='wait'>
              {activeEvent && (
                <motion.div
                  key={activeEvent.year + activeEvent.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className='p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] border border-white/10 bg-[#090a0d] relative overflow-hidden'
                >
                  {/* Corner indicator */}
                  <div className='absolute top-0 right-0 w-32 h-32 bg-blueprint opacity-[0.03] pointer-events-none' />

                  <div className='space-y-6'>
                    <div className='flex items-center gap-2'>
                      <Calendar size={14} className={accentColorClass} />
                      <span className='text-[10px] font-black text-zinc-500 uppercase tracking-widest'>
                        Selected Milestone
                      </span>
                    </div>

                    <div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-[0.25em] ${accentColorClass}`}
                      >
                        {activeEvent.year}
                        {' // '}
                        {activeEvent.domain}
                      </span>
                      <h4 className='text-xl sm:text-2xl font-black text-white uppercase tracking-tight mt-1'>
                        {activeEvent.title}
                      </h4>
                    </div>

                    <p className='text-zinc-400 text-sm leading-relaxed font-medium'>
                      {activeEvent.description}
                    </p>

                    <div className='space-y-3 pt-6 border-t border-white/5'>
                      <div className='text-[9px] font-black uppercase tracking-widest text-zinc-500'>
                        Milestone Stack Matrix
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {activeEvent.tech.map(t => (
                          <span
                            key={t}
                            className='text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/5 text-zinc-300'
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
