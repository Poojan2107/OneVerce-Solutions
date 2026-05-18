import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[0.16,1,0.3,1] ${
        isScrolled ? 'py-4' : 'py-6 md:py-8'
      }`}
    >
      <motion.div
        className={`absolute inset-0 transition-all duration-700 ease-[0.16,1,0.3,1] ${
          isScrolled
            ? 'bg-[#050505]/40 backdrop-blur-2xl border-b border-white/[0.05] opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
        <Magnetic>
          <a href="#hero" className="flex items-center gap-3 sm:gap-4 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                <img
                  src="https://res.cloudinary.com/daheghidk/image/upload/v1775229314/logooneverce_l3ckqq.jpg"
                  alt="Oneverce"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <motion.div
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0f0]/20 to-transparent pointer-events-none"
                />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-lg sm:text-xl font-bold tracking-tighter uppercase text-white leading-none">Oneverce</span>
              <span className="text-[7px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[#00f0f0] font-mono opacity-60">Systems_Studio</span>
            </div>
          </a>
        </Magnetic>

        <div className="hidden md:flex items-center gap-4 lg:gap-8 flex-shrink-0">
          <div className="flex items-center gap-6 lg:gap-10 mr-4">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  className="text-[9px] font-bold text-white/40 hover:text-white uppercase tracking-[0.5em] transition-all relative group py-2 whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00f0f0] group-hover:w-full transition-all duration-500 shadow-[0_0_8px_#00f0f0]" />
                </a>
              </Magnetic>
            ))}
          </div>

          <a
            href="#contact"
            className="group relative px-6 lg:px-8 py-3 overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95 flex-shrink-0 whitespace-nowrap min-w-fit block"
          >
            <div className="absolute inset-0 bg-white group-hover:bg-[#00f0f0] transition-colors duration-500" />
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12"
            />
            <div className="relative flex items-center gap-2 text-black text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
              Initiate Project
              <ArrowRight size={12} strokeWidth={3} />
            </div>
          </a>
        </div>

        <button
          type="button"
          className="md:hidden min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[72px] left-0 right-0 bottom-0 bg-[#050505]/98 backdrop-blur-3xl border-b border-white/[0.05] overflow-y-auto md:hidden z-[95]"
            >
              <div className="p-8 pb-24 flex flex-col gap-2 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-4 text-sm font-bold text-white/50 uppercase tracking-[0.35em] hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-4 bg-white text-black py-4 min-h-[48px] rounded-full font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Initiate Project
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
