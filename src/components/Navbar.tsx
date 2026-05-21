import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import Magnetic from './Magnetic';
import ContactModal from './ContactModal';
import { useAudioUI } from '../context/AudioUIContext';

const navLinks = [
  { name: 'Capabilities', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { soundEnabled, toggleSound, playHover, playClick } = useAudioUI();

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

  useEffect(() => {
    const handleOpen = () => {
      setIsContactModalOpen(true);
    };
    window.addEventListener('open-contact-modal', handleOpen);
    return () => window.removeEventListener('open-contact-modal', handleOpen);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-[padding] duration-500 ease-out ${
          isScrolled ? 'py-4' : 'py-4 md:py-8'
        }`}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
            isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md border-b border-white/[0.05]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
          <Magnetic>
            <a 
              href="#hero" 
              className="flex items-center gap-3 sm:gap-4 group" 
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              onMouseEnter={playHover}
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                  <img
                    src="/logo.jpeg"
                    alt="Oneverce"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    width={40}
                    height={40}
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
                <span className="text-[9px] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[#00f0f0] font-mono opacity-60">Systems_Studio</span>
              </div>
            </a>
          </Magnetic>

          <div className="hidden md:flex items-center gap-4 lg:gap-8 flex-shrink-0">
            <div className="flex items-center gap-6 lg:gap-10 mr-4">
              {navLinks.map((link) => (
                <Magnetic key={link.name}>
                  <a
                    href={link.href}
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="text-[9px] font-bold text-white/40 hover:text-white uppercase tracking-[0.5em] transition-all relative group py-2 whitespace-nowrap"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00f0f0] group-hover:w-full transition-all duration-500 shadow-[0_0_8px_#00f0f0]" />
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* Sound HUD controls */}
            <button
              onClick={() => {
                toggleSound();
                // Play feedback sound after toggling on
                setTimeout(() => {
                  if (!soundEnabled) {
                    // This triggers if toggled from OFF to ON
                    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(600, ctx.currentTime);
                    gain.gain.setValueAtTime(0.02, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.1);
                  }
                }, 50);
              }}
              onMouseEnter={playHover}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 relative cursor-pointer ${
                soundEnabled 
                ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5 hover:border-emerald-400' 
                : 'border-white/10 text-zinc-500 hover:text-white hover:border-white/20 bg-white/[0.01]'
              }`}
              title={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
              aria-label={soundEnabled ? 'Mute Sounds' : 'Enable Sounds'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 size={14} className="relative z-10" />
                  <span className="absolute inset-0 rounded-full bg-emerald-500/10 animate-ping opacity-70" />
                </>
              ) : (
                <VolumeX size={14} className="relative z-10" />
              )}
            </button>

            <button
              onClick={() => {
                playClick();
                setIsContactModalOpen(true);
              }}
              onMouseEnter={playHover}
              className="group relative px-6 lg:px-8 py-3 overflow-hidden rounded-full transition-transform hover:scale-105 active:scale-95 flex-shrink-0 whitespace-nowrap min-w-fit block cursor-pointer"
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
            </button>
          </div>

          <button
            type="button"
            className="md:hidden min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            onClick={() => {
              playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            onMouseEnter={playHover}
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
                className="fixed left-0 right-0 bottom-0 bg-[#050505]/98 backdrop-blur-3xl border-b border-white/[0.05] overflow-y-auto md:hidden z-[95]"
                style={{ top: 'calc(72px + env(safe-area-inset-top))' }}
              >
                <div className="p-8 pb-24 flex flex-col gap-2 text-center">
                  {/* Sound control inside mobile menu */}
                  <div className="py-4 border-b border-white/5 flex items-center justify-center gap-4">
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Audio Interface</span>
                    <button
                      onClick={() => {
                        toggleSound();
                        playClick();
                      }}
                      className={`px-4 py-2 rounded-full border text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 ${
                        soundEnabled 
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' 
                        : 'border-white/10 text-zinc-500'
                      }`}
                    >
                      {soundEnabled ? <><Volume2 size={12} /> ON</> : <><VolumeX size={12} /> OFF</>}
                    </button>
                  </div>

                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block py-4 text-sm font-bold text-white/50 uppercase tracking-[0.35em] hover:text-white transition-colors"
                      onClick={() => {
                        playClick();
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                  <button
                    className="mt-4 bg-white text-black py-4 min-h-[48px] rounded-full font-black uppercase tracking-[0.3em] text-xs flex items-center justify-center cursor-pointer"
                    onClick={() => {
                      playClick();
                      setMobileMenuOpen(false);
                      setIsContactModalOpen(true);
                    }}
                  >
                    Initiate Project
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      {/* Render custom onboarding modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
