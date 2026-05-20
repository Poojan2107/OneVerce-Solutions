import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle, Activity, Share2, Users, Globe } from 'lucide-react';

const posts = [
  { title: 'Future of Digital',    img: '/portfolio-1.jpg', likes: 61,  comments: 8  },
  { title: 'Digital Systems',      img: '/portfolio-2.jpg', likes: 83,  comments: 11 },
  { title: 'Innovating Digital',   img: '/portfolio-3.jpg', likes: 47,  comments: 6  },
  { title: 'Digital Excellence',   img: '/portfolio-4.jpg', likes: 55,  comments: 7  },
  { title: 'Premium Agency',       img: '/portfolio-2.jpg', likes: 72,  comments: 9  },
  { title: 'Building the Future',  img: '/portfolio-1.jpg', likes: 39,  comments: 4  },
];

const socialStats = [
  { label: 'Posts',    value: '16',   icon: <Activity size={14} /> },
  { label: 'Stacks',  value: '12+',  icon: <Share2 size={14} /> },
  { label: 'Status',  value: 'LIVE', icon: <Users size={14} />, live: true },
];

export default function SocialProof() {
  return (
    <section className="py-16 sm:py-24 md:py-48 bg-black relative overflow-hidden border-t border-white/5 bg-blueprint">

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-purple-600/[0.06] via-pink-600/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/8 blur-[140px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-600/6 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ──────────────── LEFT ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(168,85,247,0.08) 100%)',
                borderColor: 'rgba(236,72,153,0.25)',
              }}
            >
              <Instagram size={11} className="text-pink-400" />
              <span className="text-pink-400 text-[10px] font-black uppercase tracking-[0.45em]">Connectivity Protocol</span>
            </motion.div>

            {/* Heading */}
            <h2 className="heading-2xl text-white uppercase mb-6 font-black tracking-tighter leading-[0.92]">
              Network<br />
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(90deg, #f472b6 0%, #a855f7 50%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Pulse
              </span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-md leading-relaxed font-medium">
              Synchronizing our latest{' '}
              <span className="text-white font-semibold underline decoration-pink-500/50 decoration-2 underline-offset-4">
                architectural breakthroughs
              </span>
              , AI research, and high-fidelity production systems across the global grid.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {socialStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-2 group cursor-default"
                >
                  <div className="flex items-center gap-2 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-zinc-400 transition-colors">
                    <span className="text-zinc-700 group-hover:text-pink-400 transition-colors">{stat.icon}</span>
                    {stat.label}
                  </div>
                  <div className="text-3xl sm:text-4xl font-black font-mono tracking-tighter text-zinc-200 group-hover:text-white transition-colors flex items-center gap-3">
                    {stat.value}
                    {stat.live && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shadow-[0_0_12px_rgba(236,72,153,0.9)]" />
                        <span className="text-[9px] font-black text-pink-400 tracking-widest">TRANSMITTING</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="https://www.instagram.com/oneverce/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-black px-8 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] shadow-xl group transition-shadow hover:shadow-pink-500/25"
              style={{ background: 'linear-gradient(90deg, #f472b6 0%, #a855f7 60%, #818cf8 100%)' }}
            >
              <Instagram size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              Follow on Instagram
            </motion.a>
          </motion.div>

          {/* ──────────────── RIGHT — Instagram Grid Card ──────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow behind card */}
            <div
              className="absolute inset-[-20px] rounded-[3rem] blur-[60px] opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.2) 50%, transparent 80%)' }}
            />

            {/* Card */}
            <div
              className="relative z-10 rounded-[2.5rem] overflow-hidden border shadow-2xl max-w-md mx-auto"
              style={{
                background: 'linear-gradient(145deg, #111113 0%, #0d0d0f 100%)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.06) inset',
              }}
            >
              {/* ── Profile header ── */}
              <div className="px-5 pt-6 pb-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3.5">
                  {/* Avatar with gradient ring */}
                  <div className="relative flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full p-[2.5px]"
                      style={{ background: 'linear-gradient(135deg, #fbbf24, #ec4899, #a855f7)' }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden" style={{ background: '#0d0d0f', border: '2px solid #0d0d0f' }}>
                        <img src="/logo.jpeg" alt="oneverce" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    {/* Live dot */}
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2"
                      style={{ borderColor: '#0d0d0f', boxShadow: '0 0 8px rgba(74,222,128,0.8)' }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-black text-white">oneverce</span>
                      <span
                        className="text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(59,130,246,0.15)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)' }}
                      >
                        Official
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 mt-0.5">Premium Digital Agency</p>
                  </div>

                  <div className="flex items-center gap-1 ml-auto">
                    <Globe size={13} className="text-zinc-600" />
                  </div>
                </div>

                {/* Mini stats */}
                <div className="flex gap-6 mt-4">
                  {[
                    { val: '16', lbl: 'posts' },
                    { val: '8',  lbl: 'followers' },
                    { val: '2',  lbl: 'following' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="text-[13px] font-black text-white">{s.val}</div>
                      <div className="text-[9px] text-zinc-600 uppercase tracking-widest">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 3-column Poster Grid ── */}
              <div className="grid grid-cols-3 gap-[2px]" style={{ background: 'rgba(255,255,255,0.03)' }}>
                {posts.map((post, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.03, zIndex: 10 }}
                    className="aspect-square relative overflow-hidden group cursor-pointer"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    {/* Hover overlay with like/comment counts */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-250"
                      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)' }}>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-white text-[11px] font-black">
                          <Heart size={13} className="fill-white" /> {post.likes}
                        </span>
                        <span className="flex items-center gap-1 text-white text-[11px] font-black">
                          <MessageCircle size={13} className="fill-white" /> {post.comments}
                        </span>
                      </div>
                    </div>

                    {/* Subtle border between cells */}
                    <div className="absolute inset-0 ring-[1px] ring-white/5 pointer-events-none" />
                  </motion.div>
                ))}
              </div>

              {/* ── Footer strip ── */}
              <div className="px-5 py-4 flex items-center justify-between border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <span className="text-[9px] text-zinc-600 uppercase tracking-widest font-bold">@oneverce</span>
                <motion.a
                  href="https://www.instagram.com/oneverce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 text-[10px] font-black text-white px-4 py-2 rounded-full transition-all"
                  style={{
                    background: 'linear-gradient(90deg, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.15) 100%)',
                    border: '1px solid rgba(236,72,153,0.25)',
                  }}
                >
                  <Instagram size={11} className="text-pink-400" />
                  <span className="text-pink-300">Follow</span>
                </motion.a>
              </div>
            </div>

            {/* Decorative spinning dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-10 -right-10 w-56 h-56 rounded-full border border-dashed pointer-events-none -z-10"
              style={{ borderColor: 'rgba(168,85,247,0.12)' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border border-dashed pointer-events-none -z-10"
              style={{ borderColor: 'rgba(236,72,153,0.10)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
