import { motion } from 'motion/react';
import { Instagram, Radio, Code2, Cpu, Layers, MousePointer2, Zap, ArrowUpRight } from 'lucide-react';

/* ─── Seamless scroll columns: each array = unique imgs + duplicated for loop ─── */
const colA = ['/portfolio-1.jpg', '/portfolio-3.jpg', '/portfolio-2.jpg', '/portfolio-4.jpg',
              '/portfolio-1.jpg', '/portfolio-3.jpg', '/portfolio-2.jpg', '/portfolio-4.jpg'];
const colB = ['/portfolio-4.jpg', '/portfolio-2.jpg', '/portfolio-3.jpg', '/portfolio-1.jpg',
              '/portfolio-4.jpg', '/portfolio-2.jpg', '/portfolio-3.jpg', '/portfolio-1.jpg'];
const colC = ['/portfolio-2.jpg', '/portfolio-4.jpg', '/portfolio-1.jpg', '/portfolio-3.jpg',
              '/portfolio-2.jpg', '/portfolio-4.jpg', '/portfolio-1.jpg', '/portfolio-3.jpg'];

const services = [
  { icon: <Code2 size={12} />, label: 'Web Development' },
  { icon: <Cpu size={12} />, label: 'AI Solutions' },
  { icon: <MousePointer2 size={12} />, label: 'UI/UX Design' },
  { icon: <Layers size={12} />, label: 'Custom Software' },
  { icon: <Zap size={12} />, label: 'Automation' },
];

export default function SocialProof() {
  return (
    <section className="py-16 sm:py-24 md:py-48 bg-black relative overflow-hidden border-t border-white/5 bg-blueprint">

      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes scrollUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .col-up   { animation: scrollUp   var(--dur, 24s) linear infinite; }
        .col-down { animation: scrollDown var(--dur, 30s) linear infinite; }
        .col-up:hover,
        .col-down:hover { animation-play-state: paused; }
      `}</style>

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full"
          style={{ background: 'linear-gradient(to left, rgba(168,85,247,0.06), rgba(236,72,153,0.04), transparent)' }} />
        <div className="absolute -bottom-20 left-0 w-[500px] h-[500px] rounded-full blur-[160px]"
          style={{ background: 'rgba(59,130,246,0.06)' }} />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full blur-[130px]"
          style={{ background: 'rgba(168,85,247,0.07)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">

          {/* ──────────────── LEFT — Copy ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(236,72,153,0.10), rgba(168,85,247,0.10))',
                border: '1px solid rgba(236,72,153,0.22)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"
                style={{ boxShadow: '0 0 8px rgba(244,114,182,0.9)' }} />
              <Radio size={11} className="text-pink-400" />
              <span className="text-pink-300 text-[10px] font-black uppercase tracking-[0.45em]">Connectivity Protocol</span>
            </motion.div>

            {/* Heading */}
            <h2 className="font-black uppercase tracking-tighter leading-[0.88] mb-8"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 12vw, 6rem)' }}>
              <span className="text-white block">Network</span>
              <span className="block" style={{
                background: 'linear-gradient(90deg, #f472b6 0%, #a855f7 45%, #818cf8 80%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>Pulse</span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-md leading-relaxed font-medium">
              Synchronizing our latest{' '}
              <span className="text-white font-semibold"
                style={{ textDecoration: 'underline', textDecorationColor: 'rgba(236,72,153,0.5)', textUnderlineOffset: '4px' }}>
                architectural breakthroughs
              </span>
              {' '}and high-fidelity production systems across the global grid.
            </p>

            {/* Service pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider cursor-default transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#a1a1aa',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(168,85,247,0.10)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(168,85,247,0.30)';
                    (e.currentTarget as HTMLElement).style.color = '#c084fc';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '#a1a1aa';
                  }}
                >
                  {s.icon}
                  {s.label}
                </motion.div>
              ))}
            </div>

            {/* Live broadcast indicator */}
            <div className="flex items-center gap-3 mb-10 px-4 py-3 rounded-2xl w-fit"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"
                  style={{ boxShadow: '0 0 10px rgba(239,68,68,0.9)' }} />
                <span className="text-[9px] font-black text-red-400 uppercase tracking-[0.4em]">Live</span>
              </div>
              <div className="w-[1px] h-4 bg-white/10" />
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Broadcasting Creative Content</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href="https://www.instagram.com/oneverce/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 text-white px-7 py-4 rounded-full font-black uppercase tracking-[0.18em] text-[10px] shadow-xl group"
                style={{
                  background: 'linear-gradient(90deg, #ec4899, #a855f7, #818cf8)',
                  boxShadow: '0 10px 30px rgba(168,85,247,0.25)',
                }}
              >
                <Instagram size={14} className="group-hover:rotate-12 transition-transform duration-300" />
                View on Instagram
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-black uppercase tracking-[0.18em] text-[10px] group transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: '#e4e4e7',
                }}
              >
                Our Work
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.a>
            </div>
          </motion.div>

          {/* ──────────────── RIGHT — Live Broadcast Grid ──────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute inset-[-30px] rounded-[3rem] pointer-events-none blur-[80px] opacity-25"
              style={{ background: 'radial-gradient(ellipse, rgba(168,85,247,0.5) 0%, rgba(236,72,153,0.3) 50%, transparent 80%)' }} />

            {/* Broadcast frame */}
            <div
              className="relative rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0d0d10, #0a0a0d)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 50px 120px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.05) inset',
                height: 'clamp(320px, 55vw, 520px)',
              }}
            >
              {/* Top fade mask */}
              <div className="absolute top-0 left-0 right-0 h-28 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, #0a0a0d, transparent)' }} />
              {/* Bottom fade mask */}
              <div className="absolute bottom-0 left-0 right-0 h-28 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #0a0a0d, transparent)' }} />

              {/* ● ON AIR badge */}
              <div className="absolute top-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(239,68,68,0.3)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"
                  style={{ boxShadow: '0 0 8px rgba(239,68,68,0.9)' }} />
                <span className="text-[9px] font-black text-red-400 uppercase tracking-[0.35em]">On Air</span>
              </div>

              {/* Platform badge top-right */}
              <a
                href="https://www.instagram.com/oneverce/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <Instagram size={10} style={{ color: '#f472b6' }} />
                <span className="text-[9px] font-bold text-zinc-400">@oneverce</span>
              </a>

              {/* Scrolling columns */}
              <div className="flex gap-[3px] h-full px-[3px]">

                {/* Column A — scroll up, 22s */}
                <div className="flex-1 overflow-hidden">
                  <div className="col-up flex flex-col gap-[3px]" style={{ '--dur': '22s' } as React.CSSProperties}>
                    {colA.map((src, i) => (
                      <div key={i} className="relative flex-shrink-0 aspect-[3/4] overflow-hidden rounded-lg group">
                        <img src={src} alt="Oneverce creative" loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          width={300}
                          height={400} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column B — scroll down, 30s */}
                <div className="flex-1 overflow-hidden">
                  <div className="col-down flex flex-col gap-[3px]" style={{ '--dur': '30s' } as React.CSSProperties}>
                    {colB.map((src, i) => (
                      <div key={i} className="relative flex-shrink-0 aspect-[3/4] overflow-hidden rounded-lg group">
                        <img src={src} alt="Oneverce creative" loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          width={300}
                          height={400} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column C — hidden on mobile, scroll up, 18s (fastest) */}
                <div className="hidden sm:flex flex-1 overflow-hidden">
                  <div className="col-up flex flex-col gap-[3px] w-full" style={{ '--dur': '18s' } as React.CSSProperties}>
                    {colC.map((src, i) => (
                      <div key={i} className="relative flex-shrink-0 aspect-[3/4] overflow-hidden rounded-lg group">
                        <img src={src} alt="Oneverce creative" loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          width={300}
                          height={400} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom identity strip */}
              <div className="absolute bottom-0 left-0 right-0 z-30 px-5 py-4 flex items-center justify-between"
                style={{ background: 'linear-gradient(to top, rgba(10,10,13,0.98), transparent)' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full overflow-hidden"
                    style={{ border: '1.5px solid rgba(244,114,182,0.5)', boxShadow: '0 0 10px rgba(244,114,182,0.25)' }}>
                    <img src="/logo.jpeg" alt="oneverce" className="w-full h-full object-cover" width={28} height={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-white">oneverce</div>
                    <div className="text-[8px] text-zinc-600 uppercase tracking-wider">Creative Studio</div>
                  </div>
                </div>
                <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">Live Feed</div>
              </div>
            </div>

            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-52 h-52 rounded-full border border-dashed pointer-events-none -z-10"
              style={{ borderColor: 'rgba(168,85,247,0.12)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full border border-dashed pointer-events-none -z-10"
              style={{ borderColor: 'rgba(236,72,153,0.09)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
