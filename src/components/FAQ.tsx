import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ShieldCheck, Zap, Activity, Cpu, Globe, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How fast can we launch?',
    answer: 'Speed is our competitive advantage. A high-conversion agency site or custom POS system typically launches within 4-6 weeks from initial strategy to production.'
  },
  {
    question: 'Do you use templates?',
    answer: 'Never. Every pixel is custom-engineered from the ground up to solve your specific revenue friction. We build bespoke digital assets that you own entirely.'
  },
  {
    question: 'Is SEO and Performance included?',
    answer: 'Performance is at our core. Every Oneverce deployment is optimized for sub-1s load times and follows strict SEO best practices to ensure your brand ranks where it belongs.'
  },
  {
    question: 'What happens after launch?',
    answer: 'We don’t just ship and leave. Oneverce provides ongoing strategic support, performance monitoring, and rapid scaling as your business grows.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-48 bg-[#050505] relative overflow-hidden bg-blueprint">
      
      {/* Background Polish */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]">Strategic FAQ</span>
            </div>
            <h2 className="heading-xl text-white uppercase mb-6">
              Growth Clarified
            </h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-loose font-medium tracking-wide">
              Operational intelligence and execution protocols.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`glass-card rounded-[2rem] overflow-hidden transition-all duration-500 border border-white/5 ${
                openIndex === index ? 'bg-white/[0.03] border-white/10' : 'hover:bg-white/[0.02]'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 sm:p-8 md:p-10 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <div className={`font-mono text-[10px] font-black tracking-widest transition-all duration-500 ${
                    openIndex === index ? 'text-blue-500' : 'text-zinc-700'
                  }`}>
                    PROTOCOL_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <span className={`text-lg md:text-xl font-bold tracking-tighter uppercase transition-all duration-500 ${
                    openIndex === index ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`flex items-center gap-4 transition-all duration-500 ${openIndex === index ? 'text-blue-500' : 'text-zinc-800'}`}>
                   <div className="text-[9px] font-mono font-bold tracking-widest opacity-40 uppercase hidden sm:block">
                     {openIndex === index ? 'DECRYPTED' : 'ENCRYPTED'}
                   </div>
                   <div className={`w-8 h-8 rounded-full border border-white/5 flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'rotate-180 bg-blue-500/10' : ''}`}>
                      {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                   </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-5 pb-6 sm:px-8 sm:pb-10 md:px-10">
                      <div className="p-5 sm:p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-blueprint opacity-10 pointer-events-none" />
                        <p className="text-zinc-400 font-medium text-lg leading-relaxed tracking-tight relative z-10">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support Node */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex items-center justify-center gap-4 text-zinc-700 font-bold text-[10px] uppercase tracking-[0.4em]"
        >
          <div className="w-8 h-px bg-zinc-900" />
          <MessageCircle size={14} className="text-blue-500/40" />
          Have more questions? Let's talk strategy.
          <div className="w-8 h-px bg-zinc-900" />
        </motion.div>
      </div>
    </section>
  );
}

