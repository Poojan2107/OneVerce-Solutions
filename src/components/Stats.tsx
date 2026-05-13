import { motion } from 'motion/react';
import { Activity, Globe, Zap, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Stats() {
  const stats = [
    { label: 'System Uptime', value: '99.98%', icon: <Activity size={16} />, color: 'text-green-500' },
    { label: 'Global Clients', value: '12+', icon: <Globe size={16} />, color: 'text-blue-500' },
    { label: 'Avg Speed Boost', value: '65%', icon: <Zap size={16} />, color: 'text-yellow-500' },
    { label: 'Retained Users', value: '10K+', icon: <Users size={16} />, color: 'text-purple-500' }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#030303] border-y border-white/5 relative overflow-hidden bg-blueprint">
      
      {/* Background Polish with Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-50 z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Real-Time Metrics</span>
            </div>
            <h2 className="heading-xl text-white uppercase">
              Global Signal
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg max-w-sm leading-relaxed font-medium">
            Our systems operate at peak performance across all global nodes, ensuring <span className="text-white font-semibold">zero-latency execution</span>.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative group p-6 rounded-2xl bg-zinc-950/60 border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`p-3 rounded-xl bg-white/[0.03] border border-white/5 group-hover:scale-110 transition-transform duration-500 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest">Live</span>
                </div>
              </div>
              
              <div className="text-3xl md:text-4xl font-bold mb-2 tracking-tight font-mono text-white group-hover:text-blue-400 transition-colors duration-500">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live System Handoff - Tactical Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 py-4 px-8 rounded-full bg-zinc-950 border border-white/5 w-fit mx-auto"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">System_Status: Operational</span>
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Ping:</span>
            <span className="text-[10px] font-mono text-emerald-500 font-bold">14MS</span>
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Network_Load:</span>
            <span className="text-[10px] font-mono text-blue-500 font-bold">0.12</span>
          </div>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">Protocol:</span>
            <span className="text-[10px] font-mono text-purple-500 font-bold">Secure_v4</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
