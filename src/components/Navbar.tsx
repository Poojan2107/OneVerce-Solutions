import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Cpu, Zap, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const navLinks = [
  { name: 'Capabilities', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Audit', href: '#audit' },
  { name: 'Team', href: '#team' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.05]' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Magnetic>
          <a href="#home" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                 <img 
                   src="https://res.cloudinary.com/daheghidk/image/upload/v1775229314/logooneverce_l3ckqq.jpg" 
                   alt="Oneverce" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tighter uppercase text-white">Oneverce</span>
          </a>
        </Magnetic>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Magnetic key={link.name}>
              <a
                href={link.href}
                className="text-[10px] font-bold text-zinc-500 hover:text-white uppercase tracking-[0.4em] transition-all relative group py-2"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-500" />
              </a>
            </Magnetic>
          ))}
          <Magnetic>
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all rounded-full flex items-center gap-2 shadow-2xl ml-4"
            >
              Start Project
              <ArrowRight size={14} />
            </a>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 backdrop-blur-3xl border-b border-white/[0.05] overflow-hidden md:hidden"
          >
            <div className="p-12 flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold text-zinc-500 uppercase tracking-[0.4em] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-white text-black py-5 rounded-full font-bold uppercase tracking-widest text-[10px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

