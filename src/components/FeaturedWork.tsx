import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Tilt from './Tilt';

const projects = [
  {
    title: 'ParArc Design Studio',
    category: 'Architecture · Premium Portfolio',
    image: '/assets/pararc_studio.png',
    tech: ['Architecture', 'Interior', 'Landscape', 'Urban'],
    metrics: { Dialogue: 'Contextual', Form: 'Pure', Response: 'Sustainable' },
    description: 'High-fidelity architectural showcase for ParArc Design Studio. Engineered to mirror the studio\'s philosophy of "Architecture as a Dialogue," utilizing a surgical grayscale aesthetic and cinematic transitions to highlight contextual masterpieces.',
    liveLink: 'https://pararcdesignstudio.in/',
    githubLink: '',
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
  },
  {
    title: 'NeuralCredit',
    category: 'FinTech · Enterprise Platform',
    image: '/assets/neural_credit.png',
    tech: ['React', 'Python', 'Node.js', 'AI Engine'],
    metrics: { verification: '<2s', uptime: '99.9%', alerts: 'Real-time' },
    description: 'Enterprise FinTech command center. Persistent AI integration, biometric verification, and real-time governance controls.',
    liveLink: 'https://neuralcredit.onrender.com/',
    githubLink: 'https://github.com/Poojan2107/NeuralCredit_',
    accent: 'blue',
    accentColor: 'rgb(59,130,246)',
  },
  {
    title: 'Product Nexus',
    category: 'Enterprise · Asset Management',
    image: '/assets/product_nexus.png',
    tech: ['React', 'Tailwind CSS', 'Recharts', 'Vercel'],
    metrics: { Audits: '100% Visibility', Latency: '<50ms', Accuracy: 'Enterprise' },
    description: 'High-fidelity hardware asset management engine. Orchestrating enterprise-grade inventory tracking and predictive fiscal analytics with surgical precision.',
    liveLink: 'https://product-nexus-poojan.vercel.app/',
    githubLink: 'https://github.com/Poojan2107/Product-Nexus',
    accent: 'purple',
    accentColor: 'rgb(168,85,247)',
  },
  {
    title: 'Travelling Tent',
    category: 'Platform · Travel Experience',
    image: '/assets/traveling_tent.png',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Framer'],
    metrics: { conversion: '4.2x', speed: 'Sub-second', seo: '#1 Local' },
    description: 'Immersive booking platform for luxury outdoor experiences. Engineered for pixel perfection and seamless checkout flows.',
    liveLink: 'https://travelling-tent.vercel.app/',
    githubLink: 'https://github.com/Poojan2107/Travelling-Website',
    accent: 'red',
    accentColor: 'rgb(239,68,68)',
  },
  {
    title: 'Sportivo',
    category: 'SaaS · Multi-Sport Booking Engine',
    image: '/assets/sportivo.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    metrics: { slots: '24 Courts', bookings: '89/day', revenue: '+$3.2K' },
    description: 'High-performance slot booking platform for elite sports complexes. Eliminating manual friction through automated reservation logic.',
    liveLink: 'https://sportivo-multi-sport-slot-booking.onrender.com/',
    githubLink: 'https://github.com/vbp-web/Sportivo---Multi-Sport-Slot-Booking-Platform.git',
    accent: 'emerald',
    accentColor: 'rgb(16,185,129)',
  },
  {
    title: 'Restaurant POS',
    category: 'Desktop App · Point of Sale System',
    image: '/assets/nexus_pos.png',
    tech: ['Electron', 'React', 'Node.js', 'Socket.io'],
    metrics: { tables: 'Live Tables', sync: 'Real-time', alerts: 'Stock AI' },
    description: 'Production-ready Point of Sale system for modern restaurants. Live order management and real-time inventory tracking.',
    liveLink: 'https://vbp-web.github.io/Restaurant-POS/',
    githubLink: 'https://github.com/vbp-web/Restaurant-POS-D',
    accent: 'blue',
    accentColor: 'rgb(59,130,246)',
  },
];

const accentClasses: Record<string, string> = {
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
  red: 'bg-red-500',
  emerald: 'bg-emerald-500',
};

const accentBorderClasses: Record<string, string> = {
  blue: 'border-blue-500/30 group-hover:border-blue-500/60',
  purple: 'border-purple-500/30 group-hover:border-purple-500/60',
  red: 'border-red-500/30 group-hover:border-red-500/60',
  emerald: 'border-emerald-500/30 group-hover:border-emerald-500/60',
};

const accentTextClasses: Record<string, string> = {
  blue: 'text-blue-400',
  purple: 'text-purple-400',
  red: 'text-red-400',
  emerald: 'text-emerald-400',
};

const accentGlowClasses: Record<string, string> = {
  blue: 'group-hover:shadow-[0_0_60px_rgba(59,130,246,0.08)]',
  purple: 'group-hover:shadow-[0_0_60px_rgba(168,85,247,0.08)]',
  red: 'group-hover:shadow-[0_0_60px_rgba(239,68,68,0.08)]',
  emerald: 'group-hover:shadow-[0_0_60px_rgba(16,185,129,0.08)]',
};

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden bg-blueprint">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/[0.025] rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/[0.025] rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-10 items-end"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Proof of Impact</span>
              </div>
              <h2 className="heading-2xl text-white uppercase">
                Selected Work
              </h2>
            </div>
            <p className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed font-medium">
              We don't just build websites. We build <span className="text-white font-semibold">revenue engines</span> that command market dominance.
            </p>
          </motion.div>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
              className={`group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-white/[0.06] bg-white/[0.015] p-5 md:p-10 transition-all duration-700 ${accentGlowClasses[project.accent]} hover:border-white/10`}
            >
              {/* Image — alternates left/right */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Tilt>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 border border-white/5 group-hover:border-white/20 transition-all duration-700 shadow-2xl shadow-black/50" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Deep Background Glow */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-[1.5s] ${accentClasses[project.accent]}`} style={{ transform: 'translateZ(-50px)' }} />

                    {/* Corner reticles */}
                    <div className="absolute inset-0 z-20 pointer-events-none" style={{ transform: 'translateZ(30px)' }}>
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
                    </div>

                    {/* Project dossier tag */}
                    <div className="absolute top-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0" style={{ transform: 'translateZ(40px)' }}>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${accentClasses[project.accent]}`} />
                        <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em]">
                          Project_0{index + 1}
                        </span>
                      </div>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.2s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                      style={{ transform: 'translateZ(10px) scale(1.05)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-30 transition-opacity duration-700" style={{ transform: 'translateZ(15px)' }} />
                  </div>
                </Tilt>
              </div>

              {/* Content — alternates right/left */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Category */}
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-px ${accentClasses[project.accent]} opacity-60`} />
                  <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] ${accentTextClasses[project.accent]}`}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-[0.9]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-medium border-l-2 border-white/[0.06] pl-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 pt-5 border-t border-white/[0.06]`}>
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="group/metric">
                      <div className="text-[8px] md:text-[9px] font-bold text-zinc-600 uppercase tracking-widest mb-1.5 group-hover/metric:text-zinc-400 transition-colors">
                        {key.replace('_', ' ')}
                      </div>
                      <div className={`text-xl md:text-2xl font-bold tracking-tight ${accentTextClasses[project.accent]}`}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/link flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border text-white font-bold uppercase tracking-widest text-[9px] md:text-[10px] transition-all duration-400 bg-white/[0.03] hover:bg-white/[0.08] ${accentBorderClasses[project.accent]}`}
                  >
                    <ExternalLink size={13} className="group-hover/link:scale-110 transition-transform" />
                    Launch Live
                  </a>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/gh flex items-center justify-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.07] text-zinc-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] transition-all duration-400 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white hover:border-white/20"
                    >
                      <Github size={13} className="group-hover/gh:scale-110 transition-transform" />
                      Source Code
                    </a>
                  )}
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
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/vbp-web"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 font-bold uppercase tracking-[0.3em] text-[10px] hover:border-white/25 hover:text-white hover:bg-white/[0.05] transition-all duration-500"
          >
            <Github size={14} />
            View All Projects on GitHub
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
