import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, Loader2, Zap, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Magnetic from './Magnetic';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '₹4L - ₹12L',
    details: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvt = e as CustomEvent;
      if (customEvt.detail) {
        setFormData(prev => ({
          ...prev,
          budget: customEvt.detail.budget || prev.budget,
          details: customEvt.detail.details || prev.details
        }));
        // Send directly to page 3 (details view) or page 1 depending on step
        setStep(3);
      }
    };
    window.addEventListener('open-contact-modal', handlePrefill);
    return () => window.removeEventListener('open-contact-modal', handlePrefill);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    
    setTimeout(() => {
      const phoneNumber = "918401286822";
      const message = `*ONEVERCE_PROJECT_INQUIRY*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Tier:* ${formData.budget}%0A*Message:* ${formData.details}`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
      setIsTransmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          {/* Decorative glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#090a0d] border border-white/10 rounded-[2.5rem] shadow-2xl max-w-xl w-full my-8 overflow-hidden"
          >
            {/* Header / Info bar */}
            <div className="px-6 sm:px-10 pt-8 pb-4 flex items-center justify-between border-b border-white/5 bg-white/[0.01]">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 block">Mission Briefing</span>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mt-0.5">Project Initiation Portal</h3>
              </div>
              <button
                onClick={onClose}
                className="w-11 h-11 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105"
                aria-label="Close form"
              >
                <X size={15} />
              </button>
            </div>

            <div className="p-6 sm:p-10 min-h-0">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step indicators */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">Step {step} of 3</div>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`h-0.5 rounded-full transition-all duration-500 ${step >= i ? 'w-6 bg-blue-500' : 'w-3 bg-white/10'}`} />
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-base focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-base focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white"
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Budget Tier</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {['₹1.5L - ₹4L', '₹4L - ₹12L', '₹12L+', 'Custom R&D'].map(tier => (
                              <button
                                key={tier}
                                type="button"
                                onClick={() => setFormData({ ...formData, budget: tier })}
                                className={`px-5 py-4 rounded-xl border text-[10px] font-bold uppercase tracking-widest transition-all ${
                                  formData.budget === tier 
                                  ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/20' 
                                  : 'bg-white/[0.02] border-white/10 text-zinc-500 hover:border-white/20'
                                }`}
                              >
                                {tier}
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Project Details</label>
                          <textarea
                            required
                            rows={4}
                            placeholder="Tell us about your project goals..."
                            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-5 py-4 text-base focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white resize-none"
                            value={formData.details}
                            onChange={e => setFormData({ ...formData, details: e.target.value })}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between gap-4 pt-4 border-t border-white/5">
                    <button
                      type="button"
                      onClick={prevStep}
                      className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all ${
                        step === 1 ? 'opacity-0 pointer-events-none' : 'text-zinc-500 hover:text-white'
                      }`}
                    >
                      Previous
                    </button>

                    {step < 3 ? (
                      <Magnetic>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3.5 rounded-full font-bold uppercase tracking-widest text-[9px] hover:scale-105 transition-all shadow-lg"
                        >
                          Next <ArrowUpRight size={13} />
                        </button>
                      </Magnetic>
                    ) : (
                      <Magnetic>
                        <button
                          type="submit"
                          disabled={isTransmitting}
                          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-[9px] hover:scale-105 transition-all disabled:opacity-50 shadow-lg shadow-blue-500/20"
                        >
                          {isTransmitting ? (
                            <>Uplinking... <Loader2 size={13} className="animate-spin" /></>
                          ) : (
                            <>Transmit Signal <Zap size={13} fill="currentColor" /></>
                          )}
                        </button>
                      </Magnetic>
                    )}
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tighter text-white uppercase">Uplink Success</h3>
                    <p className="text-zinc-500 text-xs font-medium max-w-xs mx-auto leading-relaxed">
                      Your mission profile has been received. Our technical team will synchronize shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => { setIsSuccess(false); setStep(1); onClose(); }}
                    className="text-[9px] font-bold text-blue-400 uppercase tracking-[0.3em] hover:text-white transition-colors"
                  >
                    Close Portal
                  </button>
                </motion.div>
              )}
            </div>

            {/* Quick Contacts Footer info */}
            <div className="bg-white/[0.01] border-t border-white/5 px-6 sm:px-10 py-5 flex flex-wrap gap-4 items-center justify-between text-[9px] text-zinc-500">
              <div className="flex items-center gap-2">
                <Mail size={12} />
                <span>poojanshrivastav21@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={12} />
                <span>+91 9023362134</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
