import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 md:py-48 bg-[#050505] relative overflow-hidden border-t border-white/5 bg-blueprint">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-3xl border border-white/5 text-center relative overflow-hidden group bg-white/[0.01]"
        >
          {/* Background Polish with Dynamic Colors */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[150px] group-hover:bg-blue-500/[0.04] transition-colors duration-1000" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/[0.02] rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-blue-500 font-bold uppercase tracking-[0.4em] text-[9px]">
              <Sparkles size={12} className="animate-pulse" /> Final Call to Impact
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white max-w-4xl mx-auto uppercase leading-tight">
              Architect Your Operational Future.
            </h2>
            
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-loose font-medium tracking-wide">
              Deploy AI-native systems engineered to command your market. <span className="text-white font-semibold text-glow">Scale without friction.</span>
            </p>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all active:scale-95 group/btn shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">Initiate Strategy Session</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

