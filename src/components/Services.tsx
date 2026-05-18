import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Globe, Code2, Cpu, Zap, ArrowUpRight, MousePointer2, Rocket, BarChart3, Sparkles } from 'lucide-react';
import ServiceModal from './ServiceModal';

const services = [
  {
    icon: <MousePointer2 className="w-6 h-6" />,
    title: 'Experience Design',
    description: 'Layouts engineered to route intent into transactions with zero friction.',
    longDescription: 'Most websites are built for aesthetics. We build for connection. Every element, from typography to motion curves, is strategically chosen to reduce friction and increase your conversion fidelity.',
    features: [
      'Conversion Rate Optimization',
      'High-Fidelity UI/UX Design',
      'Sales Funnel Architecture',
      'Responsive Lead Magnets',
      'A/B Testing Foundations',
      'Behavioral Data Analysis'
    ],
    tag: 'CONVERSION',
    color: 'blue'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Performance Engineering',
    description: 'Full-stack architecture optimized for sub-500ms latency.',
    longDescription: 'A slow website is a dead website. We use modern full-stack technologies to ensure your site loads instantly on every device, keeping your customers engaged and your search engine performance at the elite level.',
    features: [
      'Core Web Vitals Perfection',
      'Next.js Architectural Builds',
      'Secure Backend Logic',
      'Scalable Database Design',
      'Seamless API Integrations',
      'Automated Performance Monitoring'
    ],
    tag: 'PERFORMANCE',
    color: 'purple'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Automation Logic',
    description: 'Autonomous systems that qualify prospects and execute logic 24/7.',
    longDescription: 'Automate your customer engagement at scale. Our custom systems qualify prospects, handle bookings, and provide support, effectively acting as a high-performance team that never sleeps.',
    features: [
      'Custom Sales Automation',
      'Lead Qualification Systems',
      'Predictive Traffic Modeling',
      'Workflow Optimization',
      'Data Layer Synchronization',
      'CRM Integration'
    ],
    tag: 'AUTOMATION',
    color: 'red'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Brand Synthesis',
    description: 'High-fidelity identities projecting absolute authority.',
    longDescription: 'Your digital presence is your strongest asset. We craft visual identities that aren\'t just beautiful—they\'re engineered to command attention and project professional authority.',
    features: [
      'Identity Architecture',
      'Visual Language Systems',
      'Motion Brand Guidelines',
      'Digital Asset Design',
      'Brand Authority Strategy',
      'Social Proof Systems'
    ],
    tag: 'BRAND',
    color: 'blue'
  }
];

function ServiceCard({ service, index, onClick }: { service: typeof services[0], index: number, onClick: () => void }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    x.set(0);
    y.set(0);
  };

  const getAccentColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]';
      case 'purple': return 'text-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)]';
      case 'red': return 'text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]';
      default: return 'text-white';
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'blue': return 'group-hover:border-blue-500/40';
      case 'purple': return 'group-hover:border-purple-500/40';
      case 'red': return 'group-hover:border-red-500/40';
      default: return 'group-hover:border-white/20';
    }
  };

  return (
    <motion.div
      style={isTouchDevice ? {} : { rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`group bg-[#0A0A0A] p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] cursor-pointer hover:bg-white/[0.01] transition-all relative overflow-hidden flex flex-col justify-between h-full border border-white/[0.05] shadow-2xl md:preserve-3d ${getBorderColor(service.color)}`}
    >
      {/* HUD Scanline overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.01)_50%)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div style={{ transform: "translateZ(60px)" }} className="z-10">
        <div className="flex justify-between items-start mb-12">
          <div className={`w-16 h-16 rounded-[1.5rem] bg-white/[0.03] flex items-center justify-center group-hover:scale-110 transition-all duration-700 border border-white/5 ${getAccentColor(service.color)}`}>
            {service.icon}
          </div>
          <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">
            Module_0{index + 1}
          </div>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-700 uppercase leading-tight">{service.title}</h3>
        <p className="text-zinc-300 text-lg leading-relaxed font-medium group-hover:text-white transition-colors">
          {service.description}
        </p>
      </div>

      {/* Large index number background */}
      <div className="absolute -bottom-10 -right-4 text-[12rem] font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors pointer-events-none select-none tracking-tighter">
        0{index + 1}
      </div>

      <div style={{ transform: "translateZ(40px)" }} className="mt-12 space-y-6 z-10">
        <div className="flex items-center gap-3">
          <div className={`w-1.5 h-1.5 rounded-full ${
            service.color === 'blue' ? 'bg-blue-500' : service.color === 'purple' ? 'bg-purple-500' : 'bg-red-500'
          } animate-pulse`} />
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">System Status: Optimal</span>
        </div>
        
        <div className="flex items-center gap-5 text-white font-bold uppercase tracking-[0.2em] text-[10px] opacity-40 group-hover:opacity-100 transition-all group-hover:gap-8">
          Initiate Protocol <ArrowUpRight size={16} className={service.color === 'blue' ? 'text-blue-500' : service.color === 'purple' ? 'text-purple-500' : 'text-red-500'} />
        </div>
      </div>

      {/* Hover Gradient Glow */}
      <div className={`absolute -bottom-20 -right-20 w-52 h-52 rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ${
        service.color === 'blue' ? 'bg-blue-500' : 
        service.color === 'purple' ? 'bg-purple-500' : 
        'bg-red-500'
      }`} />
    </motion.div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 lg:py-48 bg-[#050505] relative overflow-hidden bg-blueprint">
      
      {/* Background Polish with Technical Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-blue-600/[0.02] rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/[0.02] rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-12 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-start"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <span className="text-zinc-500 font-bold uppercase tracking-[0.5em] text-[10px]">Capabilities Matrix</span>
              </div>
            <h2 className="text-4xl sm:text-6xl lg:text-8xl text-white uppercase break-normal font-black tracking-tighter">
                Engineered Solutions
              </h2>
            </div>
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed max-w-lg font-medium tracking-wide">
              Replacing technical debt with <span className="text-white font-semibold">revenue-grade</span> infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-2000">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
              onClick={() => setSelectedService(service)} 
            />
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}




