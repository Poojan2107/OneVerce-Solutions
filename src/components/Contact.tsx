import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Zap, Loader2, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Magnetic from './Magnetic'
import { useAudioUI } from '../context/AudioUIContext'

export default function Contact() {
  const { playHover, playClick, playSuccess } = useAudioUI()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: '',
  })
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    playClick()
    setIsTransmitting(true)

    // Submit form via FormSubmit in the background
    fetch('https://formsubmit.co/ajax/poojanshrivastav21@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.details,
        _cc: 'prajapativansh512@gmail.com',
        _subject: `New Oneverce Project Inquiry from ${formData.name}`,
        _captcha: 'false',
      }),
    }).catch(err => {
      console.error('Error submitting form via FormSubmit:', err)
    })

    // Open WhatsApp redirect synchronously to bypass popup blocker
    const phoneNumber = '918401286822'
    const message = encodeURIComponent(
      `*ONEVERCE_PROJECT_INQUIRY*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:* ${formData.details}`,
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')

    setTimeout(() => {
      setIsTransmitting(false)
      setIsSuccess(true)
      playSuccess()
    }, 1000)
  }

  const nextStep = () => {
    playClick()
    setStep(prev => Math.min(prev + 1, 2))
  }

  const prevStep = () => {
    playClick()
    setStep(prev => Math.max(prev - 1, 1))
  }

  return (
    <section id='contact' className='py-16 sm:py-24 md:py-48 bg-[#050505] relative overflow-hidden'>
      {/* Background Polish */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]' />
        <div className='absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-[150px]' />
      </div>

      <div className='max-w-7xl mx-auto px-6 md:px-12 relative z-10'>
        <div className='grid lg:grid-cols-12 gap-12 items-start'>
          <div className='lg:col-span-5'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse' />
                <span className='text-zinc-400 font-bold uppercase tracking-[0.5em] text-[10px]'>
                  Communication Protocol
                </span>
              </div>
              <h2 className='heading-2xl text-white uppercase mb-6 break-normal font-black tracking-tighter'>
                Command Uplink
              </h2>
              <p className='text-zinc-400 text-base sm:text-xl mb-8 leading-relaxed font-medium'>
                Establish a direct link with the{' '}
                <span className='text-white font-semibold'>Oneverce</span> technical team.
                We&apos;ll synchronize on your mission within 24 hours.
              </p>

              <div className='space-y-8 pt-8 border-t border-white/5'>
                {[
                  {
                    name: 'POOJAN',
                    email: 'poojanshrivastav21@gmail.com',
                    phone: '+91 9023362134',
                    whatsapp: '919023362134',
                    accent: 'purple',
                  },
                  {
                    name: 'VANSH',
                    email: 'prajapativansh512@gmail.com',
                    phone: '+91 8401286822',
                    whatsapp: '918401286822',
                    accent: 'blue',
                  },
                ].map((member, i) => (
                  <div key={i} className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${member.accent === 'blue' ? 'bg-blue-500' : 'bg-purple-500'}`}
                      />
                      <span className='text-[10px] font-black uppercase tracking-[0.4em] text-white'>
                        {member.name}
                        {' // '}FOUNDER
                      </span>
                    </div>
                    <div className='flex flex-col gap-5'>
                      <a
                        href={`mailto:${member.email}`}
                        className='flex items-start gap-4 group cursor-pointer w-full min-w-0'
                      >
                        <div className='w-10 h-10 shrink-0 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-[#00f0ff] group-hover:border-[#00f0ff]/30 transition-all duration-500'>
                          <Mail size={16} />
                        </div>
                        <div className='text-sm font-bold text-zinc-400 group-hover:text-white transition-colors lowercase tracking-wider break-all min-w-0'>
                          {member.email}
                        </div>
                      </a>
                      <a
                        href={`https://wa.me/${member.whatsapp}?text=Hi%20Oneverce%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-start gap-4 group cursor-pointer w-full min-w-0'
                      >
                        <div className='w-10 h-10 shrink-0 rounded-xl bg-white/3 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:border-emerald-400/30 transition-all duration-500'>
                          <Phone size={16} />
                        </div>
                        <div className='text-sm font-bold text-zinc-400 group-hover:text-white transition-colors tracking-wider'>
                          {member.phone}{' '}
                          <span className='text-[9px] text-emerald-500/60 font-bold uppercase tracking-widest ml-1'>
                            WhatsApp
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className='lg:col-span-7'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='glass-card rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden border border-white/5 shadow-2xl'
            >
              <div className='p-5 sm:p-8 md:p-16 min-h-0 md:min-h-[450px]'>
                {!isSuccess ? (
                  <form onSubmit={handleSubmit} className='space-y-6 sm:space-y-10'>
                    <div className='flex justify-between items-center mb-4 sm:mb-12'>
                      <div className='text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-[0.3em] sm:tracking-[0.4em]'>
                        Step {step} of 2
                      </div>
                      <div className='flex gap-1.5 sm:gap-2'>
                        {[1, 2].map(i => (
                          <div
                            key={i}
                            className={`h-1 rounded-full transition-all duration-500 ${step >= i ? 'w-6 sm:w-8 bg-blue-500' : 'w-3 sm:w-4 bg-white/10'}`}
                          />
                        ))}
                      </div>
                    </div>

                    <AnimatePresence mode='wait'>
                      {step === 1 && (
                        <motion.div
                          key='step1'
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className='space-y-5 sm:space-y-8'
                        >
                          <div className='space-y-4'>
                            <label
                              htmlFor='contact-name'
                              className='text-xs font-bold text-zinc-500 uppercase tracking-widest'
                            >
                              Full Name
                            </label>
                            <input
                              id='contact-name'
                              type='text'
                              required
                              placeholder='John Doe'
                              className='w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-base md:text-xl focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white'
                              value={formData.name}
                              onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div className='space-y-4'>
                            <label
                              htmlFor='contact-email'
                              className='text-xs font-bold text-zinc-500 uppercase tracking-widest'
                            >
                              Email Address
                            </label>
                            <input
                              id='contact-email'
                              type='email'
                              required
                              placeholder='john@example.com'
                              className='w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-base md:text-xl focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white'
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key='step2'
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className='space-y-5 sm:space-y-8'
                        >
                          <div className='space-y-4'>
                            <label
                              htmlFor='contact-details'
                              className='text-xs font-bold text-zinc-500 uppercase tracking-widest'
                            >
                              Project Details
                            </label>
                            <textarea
                              id='contact-details'
                              required
                              rows={5}
                              placeholder='Tell us about your project goals...'
                              className='w-full bg-white/[0.02] border border-white/10 rounded-2xl px-5 sm:px-6 py-4 sm:py-5 text-base md:text-xl focus:border-blue-500/50 outline-none transition-all placeholder:text-zinc-800 text-white resize-none'
                              value={formData.details}
                              onChange={e => setFormData({ ...formData, details: e.target.value })}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 md:pt-10'>
                      <button
                        type='button'
                        onClick={prevStep}
                        onMouseEnter={playHover}
                        className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all cursor-pointer ${
                          step === 1
                            ? 'opacity-0 pointer-events-none'
                            : 'text-zinc-500 hover:text-white'
                        }`}
                      >
                        Previous_Phase
                      </button>

                      {step < 2 ? (
                        <Magnetic>
                          <button
                            type='button'
                            onClick={nextStep}
                            onMouseEnter={playHover}
                            className='w-full sm:w-auto flex items-center justify-center gap-4 bg-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-2xl cursor-pointer'
                          >
                            Advance <ArrowUpRight size={14} />
                          </button>
                        </Magnetic>
                      ) : (
                        <Magnetic>
                          <button
                            type='submit'
                            disabled={isTransmitting}
                            onMouseEnter={playHover}
                            className='w-full sm:w-auto flex items-center justify-center gap-4 bg-blue-600 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all disabled:opacity-50 shadow-2xl shadow-blue-500/20 cursor-pointer'
                          >
                            {isTransmitting ? (
                              <>
                                Uplinking... <Loader2 size={14} className='animate-spin' />
                              </>
                            ) : (
                              <>
                                Transmit Signal <Zap size={14} fill='currentColor' />
                              </>
                            )}
                          </button>
                        </Magnetic>
                      )}
                    </div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className='flex flex-col items-center justify-center py-12 md:py-20 text-center space-y-8'
                  >
                    <div className='w-20 h-20 md:w-24 md:h-24 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 relative'>
                      <div className='absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse' />
                      <CheckCircle2 size={40} className='md:size-[48px]' />
                    </div>
                    <div className='space-y-4'>
                      <h3 className='text-3xl md:text-4xl font-bold tracking-tighter text-white uppercase'>
                        Uplink Success
                      </h3>
                      <p className='text-zinc-500 text-base md:text-lg font-medium max-w-sm mx-auto'>
                        Your mission profile has been received. Our technical team will synchronize
                        shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setIsSuccess(false)
                        setStep(1)
                      }}
                      className='text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] hover:text-white transition-colors'
                    >
                      Establish_New_Link
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
