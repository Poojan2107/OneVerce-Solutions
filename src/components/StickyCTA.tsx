import { motion, AnimatePresence } from 'motion/react'
import { MessageCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappLink =
    "https://wa.me/918401286822?text=Hi%20Oneverce%2C%20I'd%20like%20to%20discuss%20a%20project."

  return (
    <div className='fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[50]'>
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href={whatsappLink}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            aria-label='Chat on WhatsApp'
            className='w-11 h-11 md:w-14 md:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 flex items-center justify-center shadow-2xl shadow-emerald-500/30 transition-colors relative cursor-pointer'
          >
            <MessageCircle size={20} className='text-white md:w-6 md:h-6' />
            <span className='absolute -top-1 -right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-white rounded-full border-2 border-emerald-500 animate-pulse' />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}
