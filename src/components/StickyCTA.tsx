import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, FileSearch, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://wa.me/918401286822";

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isVisible && (
          <>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="bg-zinc-900 border border-white/10 p-2 rounded-2xl shadow-2xl flex flex-col gap-2 mb-2"
              >
                <a
                  href="#contact"
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-3 px-4 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all text-sm"
                >
                  <FileSearch size={18} />
                  Free Web Audit
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all text-sm"
                >
                  <MessageCircle size={18} />
                  WhatsApp Chat
                </a>
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${
                isExpanded ? 'bg-zinc-800 text-white rotate-90' : 'bg-white text-black'
              }`}
            >
              {isExpanded ? <X size={24} /> : (
                <div className="relative">
                  <MessageCircle size={24} />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                </div>
              )}
            </motion.button>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
