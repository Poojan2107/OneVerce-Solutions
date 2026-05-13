import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: ReactNode;
  color: string;
}

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#050505] border border-white/10 rounded-[2.5rem] overflow-y-auto max-h-[90vh] shadow-2xl custom-scrollbar"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-all z-20 border border-white/5"
          >
            <X size={20} />
          </button>

          <div className="grid md:grid-cols-2 h-full">
            <div className="p-8 md:p-16">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-8 md:mb-12 text-white border border-white/5">
                {service.icon}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tighter text-white">{service.title}</h2>
              <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 font-medium">
                {service.longDescription}
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold hover:bg-zinc-200 transition-all group text-base"
                >
                  Start Project
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="p-8 md:p-16 bg-white/[0.01] border-t md:border-t-0 md:border-l border-white/5">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mb-8 md:mb-12">Core Capabilities</h3>
              <div className="space-y-6 md:space-y-8">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 text-blue-500 shrink-0">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-zinc-300 font-bold text-base md:text-lg tracking-tight">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 md:mt-20 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                <p className="text-sm md:text-base text-zinc-500 italic font-medium leading-relaxed">
                  "Our approach to {service.title.toLowerCase()} focuses on delivering measurable business impact through engineered excellence."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

