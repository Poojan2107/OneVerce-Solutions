import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Instagram, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Grid3x3, Play } from 'lucide-react';

const posts = [
  { img: '/portfolio-3.jpg', likes: 47, comments: 6, caption: 'Innovating the Future of Digital 🚀' },
  { img: '/portfolio-2.jpg', likes: 83, comments: 11, caption: 'We Build Digital Systems That Grow Your Business 💡' },
  { img: '/portfolio-1.jpg', likes: 61, comments: 8, caption: 'Building the Future of Digital Experience ✨' },
  { img: '/portfolio-4.jpg', likes: 55, comments: 7, caption: 'We Build Digital Excellence 🌐' },
  { img: '/portfolio-3.jpg', likes: 39, comments: 4, caption: 'AI · Web Dev · UI/UX · Custom Software 💻' },
  { img: '/portfolio-2.jpg', likes: 72, comments: 9, caption: 'Premium Tech Agency — Let\'s Build Together 🛠️' },
];

export default function SocialProof() {
  const [activePost, setActivePost] = useState<number | null>(null);
  const [liked, setLiked] = useState<Set<number>>(new Set());

  const toggleLike = (i: number) => {
    setLiked(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section className="py-16 sm:py-24 md:py-48 bg-black relative overflow-hidden border-t border-white/5 bg-blueprint">

      {/* Background ambience */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-600/[0.04] via-pink-600/[0.03] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-24"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              <Instagram size={11} />
              Network Pulse
            </div>

            <h2 className="heading-2xl text-white uppercase mb-6 font-black tracking-tighter leading-none">
              Network<br />Pulse
            </h2>

            <p className="text-zinc-400 text-base md:text-lg mb-10 max-w-md leading-relaxed font-medium">
              Follow our journey as we build{' '}
              <span className="text-white font-semibold">
                world-class digital products
              </span>{' '}
              — broadcast live across the global grid.
            </p>

            {/* Real Instagram stats */}
            <div className="flex gap-8 mb-10">
              {[
                { value: '16', label: 'Posts' },
                { value: '8', label: 'Followers' },
                { value: '2', label: 'Following' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center cursor-default"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tighter">{s.value}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold mt-0.5">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Bio card */}
            <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 mb-10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-white uppercase tracking-tight">Oneverce</span>
                <span className="text-[9px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-blue-500/20">Agency</span>
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                🚀 Premium Digital Agency<br />
                💻 Web Dev · AI · UI/UX · Custom Software<br />
                🌐 Building the Future of Digital Experience<br />
                📩 Contact us to start your project
              </p>
              <a href="https://oneverce-solutions.vercel.app" className="text-blue-400 text-xs font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
                oneverce-solutions.vercel.app
              </a>
            </div>

            {/* CTA buttons — styled like Instagram's Follow / Message */}
            <div className="flex gap-3 flex-wrap">
              <motion.a
                href="https://www.instagram.com/oneverce/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2.5 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3.5 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-shadow"
              >
                <Instagram size={14} />
                Follow
              </motion.a>
              <motion.a
                href="https://www.instagram.com/oneverce/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 min-w-[130px] flex items-center justify-center gap-2.5 bg-white/[0.05] border border-white/12 text-white px-6 py-3.5 rounded-xl font-black uppercase tracking-[0.15em] text-[10px] hover:bg-white/10 transition-all"
              >
                <Send size={13} />
                Message
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT: Instagram Profile Mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Phone/App frame */}
            <div className="bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 shadow-2xl shadow-black/60 overflow-hidden max-w-sm mx-auto">

              {/* ── Profile header ── */}
              <div className="px-5 pt-6 pb-4 border-b border-white/5">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {/* Avatar with gradient story ring */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full p-[2.5px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border-2 border-[#0a0a0a]">
                          <img src="/logo.jpeg" alt="oneverce" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white">oneverce</div>
                      <div className="text-[10px] text-zinc-500">oneverce_official</div>
                    </div>
                  </div>
                  <MoreHorizontal size={18} className="text-zinc-600" />
                </div>

                {/* Profile stats row */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  {[
                    { value: '16', label: 'posts' },
                    { value: '8', label: 'followers' },
                    { value: '2', label: 'following' },
                  ].map((s, i) => (
                    <div key={i} className="cursor-default hover:bg-white/5 rounded-xl py-1.5 transition-colors">
                      <div className="text-sm font-black text-white">{s.value}</div>
                      <div className="text-[9px] text-zinc-500 uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="mb-3">
                  <p className="text-white text-[11px] font-bold mb-0.5">Oneverce</p>
                  <p className="text-zinc-400 text-[10px] leading-[1.6]">
                    🚀 Premium Digital Agency<br/>
                    💻 Web · AI · UI/UX · Software<br/>
                    🌐 Building the Future of Digital
                  </p>
                </div>

                {/* Follow buttons */}
                <div className="flex gap-2">
                  <motion.a
                    href="https://www.instagram.com/oneverce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 text-center bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-black py-2 rounded-lg uppercase tracking-wide"
                  >
                    Follow
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/oneverce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.96 }}
                    className="flex-1 text-center bg-zinc-800 border border-white/10 text-white text-[10px] font-bold py-2 rounded-lg uppercase tracking-wide"
                  >
                    Message
                  </motion.a>
                  <button className="w-9 h-9 bg-zinc-800 border border-white/10 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ── Tabs ── */}
              <div className="flex border-b border-white/5">
                <button className="flex-1 py-2.5 flex items-center justify-center border-b-2 border-white text-white">
                  <Grid3x3 size={14} />
                </button>
                <button className="flex-1 py-2.5 flex items-center justify-center text-zinc-600">
                  <Play size={14} />
                </button>
              </div>

              {/* ── 3-column Post Grid ── */}
              <div className="grid grid-cols-3 gap-[2px] bg-zinc-900/30">
                {posts.map((post, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setActivePost(i)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="aspect-square relative overflow-hidden group"
                  >
                    <img
                      src={post.img}
                      alt={post.caption}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover stats */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
                      <span className="flex items-center gap-1 text-white text-[10px] font-bold">
                        <Heart size={11} className="fill-white" /> {liked.has(i) ? post.likes + 1 : post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-white text-[10px] font-bold">
                        <MessageCircle size={11} className="fill-white" /> {post.comments}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

            </div>

            {/* Decorative glow rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-12 -right-12 w-56 h-56 rounded-full border border-dashed border-pink-500/10 -z-10 pointer-events-none"
            />
            <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-purple-600/8 blur-[100px] rounded-full -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>

      {/* ── Post Lightbox ── */}
      <AnimatePresence>
        {activePost !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl w-full max-w-sm"
            >
              {/* Lightbox header */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8">
                <div className="w-8 h-8 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src="/logo.jpeg" alt="oneverce" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-black text-white">oneverce</div>
                  <div className="text-[9px] text-zinc-500">oneverce_official</div>
                </div>
                <button onClick={() => setActivePost(null)} className="ml-auto text-zinc-500 hover:text-white transition-colors text-lg leading-none">✕</button>
              </div>

              {/* Image */}
              <div className="aspect-square bg-zinc-950">
                <img src={posts[activePost].img} alt={posts[activePost].caption} className="w-full h-full object-cover object-top" />
              </div>

              {/* Action row */}
              <div className="px-4 pt-3 pb-1 flex items-center gap-4">
                <motion.button
                  whileTap={{ scale: 1.3 }}
                  onClick={() => toggleLike(activePost)}
                  className={`transition-colors duration-200 ${liked.has(activePost) ? 'text-pink-500' : 'text-white hover:text-zinc-400'}`}
                >
                  <Heart size={20} className={liked.has(activePost) ? 'fill-pink-500' : ''} />
                </motion.button>
                <MessageCircle size={20} className="text-white hover:text-zinc-400 cursor-pointer" />
                <Send size={20} className="text-white hover:text-zinc-400 cursor-pointer" />
                <Bookmark size={20} className="text-white hover:text-zinc-400 cursor-pointer ml-auto" />
              </div>

              {/* Likes & caption */}
              <div className="px-4 pb-4 space-y-1">
                <div className="text-[11px] font-bold text-white">
                  {(liked.has(activePost) ? posts[activePost].likes + 1 : posts[activePost].likes)} likes
                </div>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  <span className="font-black text-white">oneverce</span>{' '}
                  {posts[activePost].caption}
                </p>
                <div className="text-[9px] text-zinc-600 uppercase tracking-wider pt-1">2 hours ago</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
