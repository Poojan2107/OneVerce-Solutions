import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          style={{ willChange: 'transform, opacity' }}
          aria-label='Scroll to top'
          className='fixed bottom-[72px] right-4 md:bottom-28 md:right-8 z-50 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-zinc-950/80 backdrop-blur-md text-white border border-white/10 shadow-2xl flex items-center justify-center group hover:bg-zinc-900 hover:text-[#00f0f0] transition-all active:scale-95 cursor-pointer'
        >
          <ArrowUp
            size={20}
            className='group-hover:-translate-y-1 transition-transform md:w-6 md:h-6'
          />

          {/* Subtle Radial Glow */}
          <div className='absolute inset-0 rounded-xl md:rounded-2xl bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity' />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
