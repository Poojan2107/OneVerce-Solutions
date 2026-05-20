import { motion } from 'motion/react';
import { Instagram, Users, Share2, Heart, MessageCircle, Activity, Globe } from 'lucide-react';

export default function SocialProof() {
  const socialStats = [
    { label: 'Projects Live', value: '6+', icon: <Activity size={16} /> },
    { label: 'Stacks Used', value: '12+', icon: <Share2 size={16} /> },
    { label: 'Status', value: 'LIVE', icon: <Users size={16} />, live: true }
  ];

  const posts = [
    { title: 'Future of Digital', img: '/portfolio-1.jpg' },
    { title: 'Digital Systems', img: '/portfolio-2.jpg' },
    { title: 'Innovation Poster', img: '/portfolio-3.jpg' },
    { title: 'Digital Excellence', img: '/portfolio-4.jpg' },
    { title: 'Digital Systems', img: '/portfolio-2.jpg' },
    { title: 'Future of Digital', img: '/portfolio-1.jpg' },
  ];

  return (
    <section className="py-16 sm:py-24 md:py-48 bg-black relative overflow-hidden border-t border-white/5 bg-blueprint">
      
      {/* Vibrant gradient glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-500/5 via-purple-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
              <Instagram size={12} className="text-pink-500" />
              Network Pulse
            </div>
            
            <h2 className="heading-2xl text-white uppercase mb-8 font-black tracking-tighter">
              Network Pulse
            </h2>
            
            <p className="text-zinc-400 text-base md:text-lg mb-8 max-w-lg leading-relaxed font-medium">
              Synchronizing our latest <span className="text-white font-semibold underline decoration-pink-500/40 decoration-2 underline-offset-4">architectural breakthroughs</span>, AI research, and high-fidelity production systems across the global grid.
            </p>

            <div className="flex flex-wrap gap-6 md:gap-8 mb-10">
              {socialStats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-3 group cursor-pointer">
                  <div className="flex items-center gap-3 text-zinc-700 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-zinc-500 transition-colors">
                    <span className="text-zinc-800">{stat.icon}</span>
                    {stat.label}
                  </div>
                  <div className="text-2xl sm:text-4xl font-bold font-mono flex items-center gap-3 tracking-tighter text-zinc-300 group-hover:text-white transition-all">
                    {stat.value}
                    {stat.live && (
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
                        <span className="text-[9px] font-bold text-pink-500 tracking-widest">TRANSMITTING</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/oneverce/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white text-black px-8 md:px-12 py-4 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] md:text-xs hover:scale-105 transition-all group shadow-2xl"
            >
              Sync Global Profile
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Instagram-style Poster Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md mx-auto relative z-10 p-3 sm:p-4 bg-zinc-950 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl shadow-pink-500/5 pt-10 sm:pt-12">
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, zIndex: 20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 relative group cursor-pointer shadow-lg"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 gap-4">
                    <div className="flex items-center gap-3">
                      <Heart size={14} className="text-white fill-white drop-shadow" />
                      <MessageCircle size={14} className="text-white fill-white drop-shadow" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Floating Instagram Profile Header */}
              <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-[88%] bg-zinc-900/95 backdrop-blur-md border border-white/10 px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="/logo.jpeg"
                      alt="Oneverce"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-black text-white truncate">oneverce</div>
                  <div className="text-[8px] text-zinc-500 truncate">12 posts • 500+ followers</div>
                </div>
                <div className="ml-auto flex-shrink-0 bg-blue-500 hover:bg-blue-600 text-white text-[8px] px-2 py-1 rounded-md font-bold uppercase cursor-pointer transition-colors">
                  Follow
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-64 h-64 border border-dashed border-pink-500/10 rounded-full -z-10"
            />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-500/5 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
