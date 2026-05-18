import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/918401286822?text=Hi%20Oneverce%2C%20I'd%20like%20to%20discuss%20a%20project.";

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-label="Chat on WhatsApp"
            className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-colors relative"
          >
            <MessageCircle size={24} className="text-white" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full border-2 border-emerald-500 animate-pulse" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
