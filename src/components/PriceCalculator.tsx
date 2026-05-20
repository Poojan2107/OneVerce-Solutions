import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, Check, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import { useAudioUI } from '../context/AudioUIContext';

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  description: string;
}

const servicesList: ServiceItem[] = [
  { id: 'saas', name: 'SaaS Platform Development', price: 2000, description: 'Scalable multi-tenant dashboard, subscription hooks, & serverless database.' },
  { id: 'ai', name: 'AI & Intelligence Integration', price: 2500, description: 'Custom LLM underwritings, data vectoring, and predictive models.' },
  { id: 'design', name: 'High-Fidelity UI/UX System', price: 1200, description: 'Custom brand identity assets, interface grids, and interaction curves.' },
  { id: 'infra', name: 'Secure API & DB Architecture', price: 1500, description: 'High-throughput database setup, custom gateways, and offline-first state.' },
  { id: 'audit', name: 'Security Audit & Compliance', price: 1000, description: 'Rate limit configurations, end-to-end encryption, and penetration reporting.' }
];

export default function PriceCalculator() {
  const { playHover, playClick } = useAudioUI();
  const [selectedServices, setSelectedServices] = useState<string[]>(['saas', 'design']);
  const [screens, setScreens] = useState<number>(5);
  const [estimate, setEstimate] = useState<number>(0);

  useEffect(() => {
    // Base cost is $2,000
    const servicesCost = selectedServices.reduce((sum, serviceId) => {
      const service = servicesList.find(s => s.id === serviceId);
      return sum + (service ? service.price : 0);
    }, 0);
    const screenCost = screens * 150;
    setEstimate(2000 + servicesCost + screenCost);
  }, [selectedServices, screens]);

  const toggleService = (id: string) => {
    playClick();
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleLaunch = () => {
    playClick();
    const serviceNames = selectedServices.map(id => servicesList.find(s => s.id === id)?.name).filter(Boolean);
    const details = `Estimated package details from online architect calculator:\n- Selected Services: ${serviceNames.join(', ')}\n- Estimated Screen Count: ${screens} views\n- Approximate Estimated Budget: $${estimate}`;
    
    // Choose appropriate tier based on estimated amount
    let budgetTier = '$2k - $5k';
    if (estimate > 10000) budgetTier = 'Custom R&D';
    else if (estimate > 5000) budgetTier = '$5k - $15k';

    const event = new CustomEvent('open-contact-modal', {
      detail: { details, budget: budgetTier }
    });
    window.dispatchEvent(event);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/[0.02] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Real-Time Audit</span>
          </div>
          <h2 className="heading-2xl text-white uppercase mb-6">
            Budget Architect
          </h2>
          <p className="text-zinc-400 text-base sm:text-xl max-w-xl mx-auto leading-relaxed font-medium">
            Tailor the scope of your system and compute your approximate investment in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Service selectors panel */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Capability Selection</div>
            
            <div className="space-y-3">
              {servicesList.map((service) => {
                const isSelected = selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    onMouseEnter={playHover}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                      isSelected 
                      ? 'border-blue-500/40 bg-blue-500/[0.02] text-white' 
                      : 'border-white/5 bg-white/[0.01] hover:border-white/15 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected ? 'bg-blue-600 border-blue-500 text-white' : 'border-white/20'
                    }`}>
                      {isSelected && <Check size={12} strokeWidth={3} />}
                    </div>
                    <div>
                      <div className="text-sm font-bold tracking-tight mb-1">{service.name}</div>
                      <div className="text-xs text-zinc-500 leading-relaxed font-medium">{service.description}</div>
                    </div>
                    <div className="ml-auto text-xs font-black text-[#00f0ff] font-mono shrink-0">
                      +${service.price}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Slider for page scope */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-4">
              <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-zinc-500">
                <span>Estimated Views / Scope</span>
                <span className="text-[#00f0ff] font-mono font-bold text-sm">{screens} Screens</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={screens}
                onChange={(e) => {
                  playHover();
                  setScreens(parseInt(e.target.value));
                }}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[9px] text-zinc-600 font-bold uppercase tracking-wider">
                <span>Single Page (1)</span>
                <span>Complex Platform (20)</span>
              </div>
            </div>
          </div>

          {/* Pricing readout card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-10 rounded-[2rem] border border-white/10 bg-[#090a0d] relative overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="space-y-8">
              <div>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500 block">Pricing Matrix</span>
                <h4 className="text-xl font-black text-white uppercase tracking-tight mt-1">Uplink Estimate</h4>
              </div>

              {/* Estimate readout display */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center relative overflow-hidden flex flex-col justify-center items-center">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent pointer-events-none" />
                <span className="text-[9px] font-black text-[#00f0ff] uppercase tracking-[0.3em] mb-1.5">Estimated Budget</span>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter uppercase font-mono flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-zinc-500 font-medium">$</span>
                  {estimate.toLocaleString()}
                </div>
                <span className="text-[8px] text-zinc-500 font-medium tracking-wide mt-2">Subject to scoping specification</span>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Includes Core Platform:</div>
                <ul className="space-y-2.5 text-xs text-zinc-400 font-medium">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Custom framer-motion animations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Sub-second initial page payloads
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    24/7 dedicated support synchronizations
                  </li>
                </ul>
              </div>
            </div>

            <button
              onClick={handleLaunch}
              onMouseEnter={playHover}
              className="mt-8 w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4.5 rounded-xl font-bold uppercase tracking-widest text-[9px] hover:scale-105 transition-all shadow-xl shadow-blue-500/20 cursor-pointer"
            >
              Initiate Scoped Project
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
