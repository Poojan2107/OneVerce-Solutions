import { motion } from 'motion/react';
import { Mail, Github, Twitter, Linkedin, ExternalLink, Cpu, Binary, ShieldCheck, Heart, Zap, Globe, Activity, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] pt-16 sm:pt-24 md:pt-32 pb-12 border-t border-white/[0.05] relative overflow-hidden bg-blueprint">
      {/* Background Polish */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/[0.01] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-20 mb-16 sm:mb-32">
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 p-1 shadow-2xl overflow-hidden">
                 <img 
                   src="https://res.cloudinary.com/daheghidk/image/upload/v1775229314/logooneverce_l3ckqq.jpg" 
                   alt="Oneverce"
                   loading="lazy"
                   className="w-full h-full object-cover grayscale brightness-125"
                 />
              </div>
              <span className="text-2xl font-bold tracking-tighter uppercase text-white">ONEVERCE</span>
            </div>
            
            <p className="text-zinc-400 text-lg leading-loose max-w-sm font-medium tracking-wide">
              Engineering AI-native infrastructure. We build operational command centers for scaling enterprises.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Instagram size={18} />, link: 'https://www.instagram.com/oneverce/' },
                { icon: <Linkedin size={18} />, link: 'https://linkedin.com/in/vansh-prajapati-6a1749360/' },
                { icon: <Mail size={18} />, link: 'mailto:contact@oneverce.com' }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/10 hover:bg-white/[0.02] transition-all duration-500"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Company</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                <li><a href="#services" className="hover:text-white transition-colors">Capabilities</a></li>
                <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Capabilities</h4>
              <ul className="space-y-4 text-[10px] font-bold uppercase text-zinc-400 tracking-widest">
                <li>Experience Design</li>
                <li>Performance Engineering</li>
                <li>Automation Logic</li>
                <li>Brand Synthesis</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1 p-8 rounded-3xl bg-white/[0.01] border border-white/5 space-y-6">
              <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.4em]">Status</h4>
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  <span>Q2 Availability</span>
                  <span className="text-white">Limited</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                  <span>Response Time</span>
                  <span className="text-white">&lt; 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">
            <span>© {currentYear} ONEVERCE</span>
            <div className="hidden md:block w-px h-3 bg-zinc-600" />
            <span className="flex items-center gap-2">
               Built by Vansh & Poojan
            </span>
          </div>

          <div className="flex items-center gap-6">
             <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.3em]">
                All rights reserved
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

