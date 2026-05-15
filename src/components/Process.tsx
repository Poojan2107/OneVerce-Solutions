import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    phase: 'Discovery_Alpha',
    title: 'Audit & Analysis',
    description: 'Deconstructing infrastructure and market positioning to identify revenue leakage.'
  },
  {
    number: '02',
    phase: 'Strategy_Beta',
    title: 'System Architecture',
    description: 'Architecting technical blueprints and pathways for high-fidelity interaction.'
  },
  {
    number: '03',
    phase: 'Build_Delta',
    title: 'Tactical Deployment',
    description: 'Accelerated engine development via next-gen frameworks and absolute clean architecture.'
  },
  {
    number: '04',
    phase: 'Launch_Omega',
    title: 'Market Integration',
    description: 'Transition into production with real-time performance tracking and autonomous scaling.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden border-t border-white/5 bg-blueprint">
      
      {/* Background Polish */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-zinc-600/[0.02] rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 bg-zinc-500 rounded-full animate-pulse" />
              <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Standard Operating Procedure</span>
            </div>
            <h2 className="text-4xl sm:text-7xl lg:text-8xl text-white uppercase font-black tracking-tighter">
              Deployment Sequence
            </h2>
          </div>
          <p className="text-zinc-400 text-base sm:text-xl max-w-sm leading-relaxed font-medium tracking-wide">
            Precision multi-phase execution. Engineered for <span className="text-white font-semibold">predictable scale</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-[1px] bg-white/5 -z-10">
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-40 h-full bg-gradient-to-r from-transparent via-zinc-400 to-transparent opacity-40"
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: 'transform, opacity' }}
              className="group relative"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="w-16 h-16 rounded-3xl bg-zinc-950 border border-white/5 flex items-center justify-center text-base font-mono font-bold text-white relative z-10 group-hover:border-white/20 transition-all duration-700 shadow-2xl group-hover:scale-110">
                  {step.number}
                  <div className="absolute inset-0 rounded-3xl bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
                  {step.phase}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-8 tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-700 uppercase">{step.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium group-hover:text-zinc-300 transition-colors">
                {step.description}
              </p>

              {/* Step indicator tag */}
              <div className="mt-12 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-4 group-hover:translate-y-0">
                <div className="w-1 h-1 bg-zinc-500 rounded-full" />
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Ready for Phase_0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
