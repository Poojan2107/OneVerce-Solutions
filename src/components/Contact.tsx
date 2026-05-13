import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ShieldCheck, Zap, Loader2, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Magnetic from './Magnetic';
export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: 'Premium ($5k - $15k)',
    details: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    <section id="contact" className="py-32 md:py-48 bg-[#050505] relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-zinc-400 font-bold uppercase tracking-[0.5em] text-[10px]">Communication Protocol</span>
              </div>
              <h2 className="heading-xl text-white uppercase mb-6 break-normal">
                Command Uplink
              </h2>
              <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Establish a direct link with the <span className="text-white font-semibold">Oneverce</span> technical team. We'll synchronize on your mission within 24 hours.
              </p>

              <div className="space-y-6 pt-8 border-t border-white/5">
                {[
                  { label: 'Uplink_Email', value: 'contact@oneverce.com', icon: <Mail size={18} className="text-blue-500" /> },
                  { label: 'Secure_Signal', value: '+91 84012 86822', icon: <Phone size={18} className="text-purple-500" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em] mb-1 group-hover:text-zinc-400 transition-colors">{item.label}</div>
                      <div className="text-lg font-bold text-zinc-200 group-hover:text-white transition-colors">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl"
            >
              <div className="p-10 md:p-16 min-h-[500px]">
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="flex justify-between items-center mb-16">
                      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.4em]">Step {step} of 3</div>
                      <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className={`h-1 rounded-full transition-all duration-500 ${step >= i ? 'w-8 bg-blue-500' : 'w-4 bg-white/10'}`} />
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
                          className="space-y-10"
                        >
                          <div className="space-y-6">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                            <input
                              type="text"
                              required
                              placeholder="John Doe"
                              className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-6 text-xl focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white"
                              value={formData.name}
                              onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-6">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                            <input
                              type="email"
                              required
                              placeholder="john@example.com"
                              className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-8 py-6 text-xl focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white"
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
                          className="space-y-10"
                        >
                          <div className="space-y-6">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Budget Tier</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {['$2k - $5k', '$5k - $15k', '$15k+', 'Custom R&D'].map(tier => (
                                <button
                                  key={tier}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, budget: tier })}
                                  className={`px-8 py-6 rounded-2xl border text-sm font-bold uppercase tracking-widest transition-all ${
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
                          className="space-y-10"
                        >
                          <div className="space-y-6">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Project Details</label>
                            <textarea
                              required
                              rows={6}
                              placeholder="Tell us about your project goals..."
                              className="w-full bg-white/[0.02] border border-white/10 rounded-3xl px-8 py-6 text-xl focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white resize-none"
                              value={formData.details}
                              onChange={e => setFormData({ ...formData, details: e.target.value })}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center justify-between pt-12">
                      <button
                        type="button"
                        onClick={prevStep}
                        className={`text-xs font-bold uppercase tracking-widest transition-all ${
                          step === 1 ? 'opacity-0 pointer-events-none' : 'text-zinc-500 hover:text-white'
                        }`}
                      >
                        Back
                      </button>

                      {step < 3 ? (
                        <Magnetic>
                          <button
                            type="button"
                            onClick={nextStep}
                            className="flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl"
                          >
                            Next Step <ArrowUpRight size={16} />
                          </button>
                        </Magnetic>
                      ) : (
                        <Magnetic>
                          <button
                            type="submit"
                            disabled={isTransmitting}
                            className="flex items-center gap-4 bg-blue-600 text-white px-14 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all disabled:opacity-50 shadow-2xl"
                          >
                            {isTransmitting ? (
                              <>Sending... <Loader2 size={16} className="animate-spin" /></>
                            ) : (
                              <>Send Message <Zap size={16} fill="currentColor" /></>
                            )}
                          </button>
                        </Magnetic>
                      )}
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-10"
                  >
                    <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 relative">
                      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                      <CheckCircle2 size={48} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-bold tracking-tighter text-white">Message Sent</h3>
                      <p className="text-zinc-500 text-lg font-medium max-w-sm mx-auto">
                        Your inquiry has been received. We'll get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => { setIsSuccess(false); setStep(1); }}
                      className="text-xs font-bold text-blue-400 uppercase tracking-widest hover:text-white transition-colors"
                    >
                      Send Another
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

