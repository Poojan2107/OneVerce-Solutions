import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  X,
  Cpu,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import Tilt from './Tilt'
import { projects } from '../data/portfolioData'
import { useAudioUI } from '../context/AudioUIContext'

const accentClasses: Record<string, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  emerald: 'bg-emerald-500',
}

const accentBorderClasses: Record<string, string> = {
  blue: 'border-blue-500/30 group-hover:border-blue-500/60',
  purple: 'border-purple-500/30 group-hover:border-purple-500/60',
  red: 'border-red-500/30 group-hover:border-red-500/60',
  emerald: 'border-emerald-500/30 group-hover:border-emerald-500/60',
}

const accentTextClasses: Record<string, string> = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  red: 'text-red-400',
  emerald: 'text-emerald-400',
}

const accentGlowClasses: Record<string, string> = {
  blue: 'group-hover:shadow-[0_0_60px_rgba(59,130,246,0.08)]',
  purple: 'group-hover:shadow-[0_0_60px_rgba(168,85,247,0.08)]',
  red: 'group-hover:shadow-[0_0_60px_rgba(239,68,68,0.08)]',
  emerald: 'group-hover:shadow-[0_0_60px_rgba(16,185,129,0.08)]',
}

// Rich details map for each project
const projectHighlights: Record<
  string,
  { summary: string; challenges: string; outcomes: string[] }
> = {
  OpenBridge: {
    summary:
      'An AI-powered onboarding companion for open-source newcomers. Profiles developer skills, recommends GitHub repositories, maps issues, and generates custom learning tracks.',
    challenges:
      'Designing structured JSON outputs from Gemini AI to parse reliably into step-by-step roadmaps, and securing GitHub OAuth credentials with AES-256-CBC.',
    outcomes: [
      'Successfully integrated 3 distinct Gemini AI developer assistance tools',
      'Implemented offline-resilient roadmaps via Progressive Web App (PWA) cache structures',
      'Built a custom XP-based gamification pipeline with dynamic SVG badge generators',
    ],
  },
  NeuralCredit: {
    summary:
      'A secure, biometric-integrated loan qualification cockpit. Features real-time risk simulation, an autonomous AI underwriting agent, and zero-trust protocol compliance.',
    challenges:
      'Managing secure asynchronous micro-service calls while updating real-time interactive charts without UI blocking.',
    outcomes: [
      'Simulated under 2-second credit verification cycles',
      'Biometric and device-secure multi-factor portal protection',
      'Real-time data feeds powered by serverless backend logic',
    ],
  },
  'Product Nexus': {
    summary:
      'An enterprise hardware and asset deployment matrix. Provides inventory audits, predictive fiscal forecasts, and direct multi-location tracking with real-time sync.',
    challenges:
      'Designing dynamic, responsive data-tables supporting 10,000+ records and real-time interactive charts with under 50ms rendering latency.',
    outcomes: [
      '100% asset visibility across multi-warehouse configurations',
      'Dynamic inventory forecasting algorithms saving weeks of accounting',
      'Fully integrated alert framework targeting low-stock items automatically',
    ],
  },
  'Travelling Tent': {
    summary:
      'A highly immersive booking platform tailored for elite glamping and travel experiences. Smooth Framer Motion interactions and integrated Stripe checkout flow.',
    challenges:
      'Minimizing booking friction down to under three clicks while implementing dynamic custom travel scheduling calendars.',
    outcomes: [
      'Verified 4.2x increase in conversion throughput',
      'Instant, error-resilient payment processing via local checkout gates',
      'Comprehensive localized SEO framework ranking first on outdoor searches',
    ],
  },
  Sportivo: {
    summary:
      'A dynamic multi-court booking engine and scheduling grid. Provides real-time slot occupancy indicators, automated confirmation emails, and complex backend validation.',
    challenges:
      'Preventing double-booking race conditions during high-volume peak booking sessions.',
    outcomes: [
      'Zero double-booking occurrences through database transactional locks',
      'Reduced booking lifecycle friction by over 70%',
      'Integrated live chat widget connecting players to court operators',
    ],
  },
  'Restaurant POS': {
    summary:
      'An Electron-based desktop checkout terminal for restaurant command. Houses real-time table layout states, automated ticket generation, and offline-first persistence.',
    challenges:
      'Maintaining operational sync between multiple terminals and kitchen displays under weak local network connections.',
    outcomes: [
      'Offline resilience with auto-synchronization when connection restores',
      'Real-time kitchen order dispatching using custom websocket hubs',
      'Interactive visual table editor for rapid floorplan configurations',
    ],
  },
}

export default function FeaturedWork() {
  const { playHover, playClick } = useAudioUI()
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const activeProject = selectedIdx !== null ? projects[selectedIdx] : null
  const highlights = activeProject ? projectHighlights[activeProject.title] : null

  return (
    <section
      id='work'
      className='py-16 sm:py-24 md:py-48 bg-[#050505] relative overflow-hidden bg-blueprint'
    >
      {/* Background */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/[0.025] rounded-full blur-[180px]' />
        <div className='absolute bottom-0 right-0 w-125 h-125 bg-purple-600/[0.025] rounded-full blur-[180px]' />
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        {/* Section Header */}
        <div className='mb-14'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='grid lg:grid-cols-2 gap-10 items-end'
          >
            <div>
              <div className='flex items-center gap-3 mb-5'>
                <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
                <span className='text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]'>
                  Proof of Impact
                </span>
              </div>
              <h2 className='heading-2xl text-white uppercase'>Selected Work</h2>
            </div>
            <p className='text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-medium'>
              We don&apos;t just build websites. We build{' '}
              <span className='text-white font-semibold'>revenue engines</span> that command market
              dominance.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className='space-y-8 md:space-y-10'>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              role='button'
              tabIndex={0}
              aria-label={`Select ${project.title} project`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              onClick={() => {
                playClick()
                setSelectedIdx(index)
              }}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  playClick()
                  setSelectedIdx(index)
                }
              }}
              onMouseEnter={playHover}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center rounded-2xl md:rounded-3xl border border-white/[0.06] bg-white/[0.015] p-4 md:p-10 transition-all duration-700 ${accentGlowClasses[project.accent]} hover:border-white/10 cursor-pointer`}
            >
              {/* Image — alternates left/right */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Tilt>
                  <div className='relative aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all duration-700 shadow-2xl shadow-black/50 md:preserve-3d'>
                    {/* Deep Background Glow */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-[1.5s] ${accentClasses[project.accent]}`}
                      style={{ transform: 'translateZ(-50px)' }}
                    />

                    {/* Corner reticles */}
                    <div
                      className='absolute inset-0 z-20 pointer-events-none'
                      style={{ transform: 'translateZ(30px)' }}
                    >
                      <div className='absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]' />
                      <div className='absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]' />
                      <div className='absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]' />
                      <div className='absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]' />
                    </div>

                    {/* Project dossier tag */}
                    <div
                      className='absolute top-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0'
                      style={{ transform: 'translateZ(40px)' }}
                    >
                      <div className='flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]'>
                        <div
                          className={`w-1.5 h-1.5 rounded-full animate-pulse ${accentClasses[project.accent]}`}
                        />
                        <span className='text-[9px] font-bold text-white uppercase tracking-[0.3em]'>
                          Project_0{index + 1}
                        </span>
                      </div>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      loading='lazy'
                      className='absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-110 opacity-85 group-hover:opacity-100'
                      style={{ transform: 'translateZ(10px) scale(1.05)' }}
                    />
                    <div
                      className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-30 transition-opacity duration-700'
                      style={{ transform: 'translateZ(15px)' }}
                    />
                  </div>
                </Tilt>
              </div>

              {/* Content — alternates right/left */}
              <div className={`space-y-4 md:space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Category */}
                <div className='flex items-center gap-3'>
                  <div className={`w-8 h-px ${accentClasses[project.accent]} opacity-60`} />
                  <span
                    className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] ${accentTextClasses[project.accent]}`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className='text-xl sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-black tracking-tighter text-white uppercase leading-[1.1]'
                  style={{ overflowWrap: 'break-word' }}
                >
                  {project.title === 'NeuralCredit' ? (
                    <>
                      <span>Neural</span>
                      <br />
                      <span>Credit</span>
                    </>
                  ) : (
                    project.title
                  )}
                </h3>

                {/* Description */}
                <p className='text-zinc-400 text-sm md:text-base leading-relaxed font-medium border-l-2 border-white/[0.06] pl-4'>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className='flex flex-wrap gap-2'>
                  {project.tech.slice(0, 4).map(t => (
                    <span
                      key={t}
                      className='text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-zinc-400'
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className='text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-zinc-600'>
                      +{project.tech.length - 4} More
                    </span>
                  )}
                </div>

                {/* Metrics */}
                <div
                  className={`grid grid-cols-3 gap-3 md:gap-6 pt-4 md:pt-5 border-t border-white/[0.06]`}
                >
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className='group/metric'>
                      <div className='text-[8px] md:text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1 md:mb-1.5 group-hover/metric:text-zinc-400 transition-colors'>
                        {key.replace('_', ' ')}
                      </div>
                      <div
                        className={`text-sm sm:text-base md:text-2xl font-bold tracking-tight ${accentTextClasses[project.accent]}`}
                      >
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4 pt-2 md:pt-4'>
                  <button
                    onClick={e => {
                      e.stopPropagation()
                      setSelectedIdx(index)
                    }}
                    className={`group/link flex items-center justify-center gap-2.5 px-6 py-3.5 min-h-[44px] rounded-full border text-white font-bold uppercase tracking-widest text-[10px] transition-all duration-400 bg-white/3 hover:bg-white/[0.08] ${accentBorderClasses[project.accent]}`}
                  >
                    View Project Details
                    <ArrowUpRight
                      size={13}
                      className='group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform'
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-12 flex justify-center'
        >
          <a
            href='https://github.com/vbp-web'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] hover:border-white/25 hover:text-white hover:bg-white/[0.05] transition-all duration-500'
          >
            <Github size={14} />
            View All Projects on GitHub
            <ArrowUpRight
              size={13}
              className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300'
            />
          </a>
        </motion.div>
      </div>

      {/* ── PROJECT DETAIL MODAL OVERLAY ── */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {activeProject && highlights && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedIdx(null)}
                className='fixed inset-0 z-[250] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto'
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0, y: 30 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={e => e.stopPropagation()}
                  data-lenis-prevent
                  className='bg-[#0b0c0f] border border-white/10 rounded-[1.25rem] sm:rounded-4xl overflow-hidden shadow-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[90vh] overflow-y-auto'
                >
                  {/* Cover Image & Header */}
                  <div className='relative aspect-[16/9] bg-zinc-950 border-b border-white/5'>
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className='w-full h-full object-cover object-top'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-[#0b0c0f] via-[#0b0c0f]/40 to-transparent' />

                    {/* Close Button */}
                    <button
                      onClick={() => {
                        playClick()
                        setSelectedIdx(null)
                      }}
                      onMouseEnter={playHover}
                      className='absolute top-6 right-6 w-11 h-11 rounded-full bg-black/60 border border-white/10 hover:border-white/25 text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-10'
                      aria-label='Close details'
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className='p-6 sm:p-10 space-y-8 pb-16 sm:pb-24'>
                    {/* Project Header (Title & Category) */}
                    <div className='space-y-2 border-b border-white/5 pb-6'>
                      <div className='flex items-center gap-3'>
                        <div
                          className={`w-8 h-px ${accentClasses[activeProject.accent] || 'bg-emerald-500'} opacity-60`}
                        />
                        <span
                          className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] ${accentTextClasses[activeProject.accent]}`}
                        >
                          {activeProject.category}
                        </span>
                      </div>
                      <h4 className='text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-tight'>
                        {activeProject.title}
                      </h4>
                    </div>
                    {/* Metrics Row */}
                    <div className='grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5'>
                      {Object.entries(activeProject.metrics).map(([key, value]) => (
                        <div key={key} className='text-center'>
                          <div className='text-[8px] sm:text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-1.5'>
                            {key.replace('_', ' ')}
                          </div>
                          <div
                            className={`text-sm sm:text-lg md:text-xl font-bold tracking-tight ${accentTextClasses[activeProject.accent]}`}
                          >
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Details Section */}
                    <div className='space-y-6'>
                      <div className='space-y-2.5'>
                        <span className='text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-1.5'>
                          <Cpu size={12} className={accentTextClasses[activeProject.accent]} />
                          Overview Dossier
                        </span>
                        <p className='text-zinc-300 text-sm leading-relaxed font-medium'>
                          {highlights.summary}
                        </p>
                      </div>

                      <div className='space-y-2.5'>
                        <span className='text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-1.5'>
                          <ShieldAlert size={12} className='text-amber-500' />
                          Engineering Challenges
                        </span>
                        <p className='text-zinc-400 text-sm leading-relaxed font-medium'>
                          {highlights.challenges}
                        </p>
                      </div>

                      <div className='space-y-3'>
                        <span className='text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-1.5'>
                          <Sparkles size={12} className='text-emerald-500' />
                          Key Milestones & Outcomes
                        </span>
                        <ul className='space-y-2'>
                          {highlights.outcomes.map((outcome, idx) => (
                            <li
                              key={idx}
                              className='flex items-start gap-2.5 text-zinc-400 text-xs leading-relaxed font-medium'
                            >
                              <CheckCircle2
                                size={13}
                                className='text-emerald-500 shrink-0 mt-0.5'
                              />
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className='space-y-2.5'>
                      <span className='text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500'>
                        Tech Stack Matrix
                      </span>
                      <div className='flex flex-wrap gap-2'>
                        {activeProject.tech.map(t => (
                          <span
                            key={t}
                            className='text-[9px] font-bold uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-300'
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className='flex gap-4 flex-wrap pt-2'>
                      <a
                        href={activeProject.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`flex-1 min-w-[140px] flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border text-white font-black uppercase tracking-widest text-[10px] transition-all bg-white/3 hover:bg-white/[0.08] ${accentBorderClasses[activeProject.accent]}`}
                      >
                        <ExternalLink size={14} />
                        Launch Live
                      </a>
                      {activeProject.githubLink && (
                        <a
                          href={activeProject.githubLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex-1 min-w-[140px] flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl border border-white/[0.08] text-zinc-400 hover:text-white font-black uppercase tracking-widest text-[10px] transition-all bg-white/1 hover:bg-white/[0.06] hover:border-white/20'
                        >
                          <Github size={14} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  )
}
