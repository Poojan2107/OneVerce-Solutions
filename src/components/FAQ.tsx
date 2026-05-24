import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { faqs } from '../data/portfolioData'
import { useAudioUI } from '../context/AudioUIContext'

export default function FAQ() {
  const { playHover, playClick } = useAudioUI()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [focusedIndex, setFocusedIndex] = useState(0)

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setFocusedIndex(prev => Math.min(prev + 1, faqs.length - 1))
          break
        case 'ArrowUp':
          e.preventDefault()
          setFocusedIndex(prev => Math.max(prev - 1, 0))
          break
        case 'Home':
          e.preventDefault()
          setFocusedIndex(0)
          break
        case 'End':
          e.preventDefault()
          setFocusedIndex(faqs.length - 1)
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          playClick()
          setOpenIndex(prev => (prev === index ? null : index))
          break
      }
    },
    [playClick],
  )

  return (
    <section
      id='faq'
      className='py-16 sm:py-24 md:py-48 bg-[#050505] relative overflow-hidden bg-blueprint'
      aria-labelledby='faq-heading'
    >
      {/* Background Polish */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-0 right-0 w-125 h-125 bg-blue-500/2 rounded-full blur-[150px]' />
      </div>

      <div className='max-w-5xl mx-auto px-6 relative z-10'>
        <div className='text-center mb-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className='flex items-center justify-center gap-3 mb-10'>
              <div className='w-2 h-2 bg-blue-500 rounded-full' />
              <span className='text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px]'>
                Strategic FAQ
              </span>
              <div className='w-2 h-2 bg-blue-500 rounded-full' />
            </div>
            <h2 className='heading-xl text-white uppercase mb-6'>Growth Clarified</h2>
            <p className='text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed sm:leading-loose font-medium tracking-wide'>
              Operational intelligence and execution protocols.
            </p>
          </motion.div>
        </div>

        <div className='space-y-4' role='list'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`glass-card rounded-[1.25rem] sm:rounded-4xl overflow-hidden transition-all duration-500 border border-white/5 ${
                openIndex === index ? 'bg-white/3 border-white/10' : 'hover:bg-white/2'
              } ${focusedIndex === index ? 'ring-1 ring-white/10' : ''}`}
              role='listitem'
            >
              <button
                onClick={() => {
                  playClick()
                  setOpenIndex(openIndex === index ? null : index)
                  setFocusedIndex(index)
                }}
                onMouseEnter={() => {
                  playHover()
                  setFocusedIndex(index)
                }}
                onKeyDown={e => handleKeyDown(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className='w-full p-4 sm:p-8 md:p-10 flex items-start sm:items-center justify-between text-left group gap-3 cursor-pointer'
              >
                <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 min-w-0'>
                  <div
                    className={`font-mono text-[10px] font-black tracking-widest transition-all duration-500 shrink-0 ${
                      openIndex === index ? 'text-blue-500' : 'text-zinc-700'
                    }`}
                  >
                    PROTOCOL_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <span
                    className={`text-base sm:text-lg md:text-xl font-bold tracking-tighter uppercase transition-all duration-500 ${
                      openIndex === index ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-300'
                    }`}
                  >
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-2 sm:gap-4 transition-all duration-500 shrink-0 ${openIndex === index ? 'text-blue-500' : 'text-zinc-800'}`}
                >
                  <div className='text-[9px] font-mono font-bold tracking-widest opacity-40 uppercase hidden sm:block'>
                    {openIndex === index ? 'DECRYPTED' : 'ENCRYPTED'}
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/5 flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'rotate-180 bg-blue-500/10' : ''}`}
                  >
                    {openIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    id={`faq-answer-${index}`}
                    role='region'
                  >
                    <div className='px-5 pb-6 sm:px-8 sm:pb-10 md:px-10'>
                      <div className='p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-white/1 border border-white/3 relative overflow-hidden'>
                        <div className='absolute top-0 right-0 w-16 h-16 bg-blueprint opacity-10 pointer-events-none' />
                        <p className='text-zinc-400 font-medium text-base sm:text-lg leading-relaxed tracking-tight relative z-10'>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support Node */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='mt-24 flex items-center justify-center gap-4 text-zinc-700 font-bold text-[10px] uppercase tracking-[0.4em]'
        >
          <div className='w-8 h-px bg-zinc-900' />
          <MessageCircle size={14} className='text-blue-500/40' />
          Have more questions? Let&apos;s talk strategy.
          <div className='w-8 h-px bg-zinc-900' />
        </motion.div>
      </div>
    </section>
  )
}
