import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'
import { useEffect, useState } from 'react'
import InfinityScene from './InfinityScene'
import { useCoarsePointer } from '../hooks/useCoarsePointer'

const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false,
  )
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return isMobile
}

const useMouseParallax = (isCoarsePointer: boolean) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  const rotateX = useTransform(springY, [-500, 500], [5, -5])
  const rotateY = useTransform(springX, [-500, 500], [-5, 5])
  const textX = useTransform(springX, [-500, 500], [8, -8])
  const textY = useTransform(springY, [-500, 500], [8, -8])

  useEffect(() => {
    if (isCoarsePointer) return
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isCoarsePointer, mouseX, mouseY])

  return { mouseX, mouseY, rotateX, rotateY, textX, textY }
}

export default function Hero({ isPreloading = false }: { isPreloading?: boolean }) {
  const isCoarsePointer = useCoarsePointer()
  const isMobile = useMobileDetect()
  const { mouseX, mouseY, rotateX, rotateY, textX, textY } = useMouseParallax(isCoarsePointer)

  const motionStyle = isCoarsePointer ? undefined : { rotateX, rotateY, x: textX, y: textY }

  if (isMobile) {
    return (
      <MobileHero
        isPreloading={isPreloading}
        mouseX={mouseX}
        mouseY={mouseY}
        isCoarsePointer={isCoarsePointer}
      />
    )
  }

  return (
    <DesktopHero
      isPreloading={isPreloading}
      mouseX={mouseX}
      mouseY={mouseY}
      isCoarsePointer={isCoarsePointer}
      motionStyle={motionStyle}
    />
  )
}

function MobileHero({
  isPreloading,
  mouseX,
  mouseY,
  isCoarsePointer,
}: {
  isPreloading: boolean
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  isCoarsePointer: boolean
}) {
  return (
    <section
      id='hero'
      style={{
        minHeight: '100svh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px 10px',
        gap: '16px',
        overflow: 'hidden',
        background: '#050505',
        position: 'relative',
      }}
    >
      {/* Subtle ambient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(0,180,255,.06), transparent 40%)',
          pointerEvents: 'none',
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 12px',
          borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.1)',
          zIndex: 5,
        }}
      >
        <div
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#00E5FF',
            animation: 'pulse 2s ease-in-out infinite',
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: '8px',
            fontFamily: '"JetBrains Mono", monospace',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.6)',
          }}
        >
          Next Generation Studio
        </span>
      </motion.div>

      {/* HeroVisual */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '280px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Planet */}
        <div
          className='planet-rotate'
          style={{
            position: 'absolute',
            width: '85px',
            height: '85px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.65,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 40% 35%, rgba(0,180,255,.25), rgba(0,60,120,.1) 60%, transparent)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '140px',
                height: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                rotate: '24deg',
                opacity: 0.2,
              }}
            />
          </div>
        </div>

        {/* Infinity loop */}
        <div
          style={{
            width: '105vw',
            maxWidth: '430px',
          }}
        >
          {!isPreloading && (
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <InfinityScene
                mouseX={isCoarsePointer ? undefined : mouseX}
                mouseY={isCoarsePointer ? undefined : mouseY}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* HeroContent */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          zIndex: 5,
        }}
      >
        {/* ONEVERCE */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: '-10px',
            fontSize: 'clamp(34px, 10vw, 46px)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-1.5px',
            whiteSpace: 'nowrap',
            width: 'auto',
            textAlign: 'center',
            color: '#fff',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          Oneverce
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: '260px',
            textAlign: 'center',
            fontSize: '13px',
            lineHeight: 1.6,
            opacity: 0.7,
            color: '#fff',
            fontWeight: 500,
            margin: 0,
          }}
        >
          We engineer{' '}
          <span style={{ fontStyle: 'italic' }}>high-fidelity digital infrastructure</span> for
          organizations that demand total dominance.
        </motion.p>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          width: '85%',
          maxWidth: '300px',
          height: '56px',
          background: '#ffffff',
          color: '#000',
          borderRadius: '999px',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a
          href='#contact'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
            height: '100%',
            borderRadius: '999px',
            fontSize: '10px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: '#000',
            textDecoration: 'none',
          }}
        >
          Initiate Venture <span style={{ fontSize: '18px' }}>→</span>
        </a>
      </motion.div>
    </section>
  )
}

function DesktopHero({
  isPreloading,
  mouseX,
  mouseY,
  isCoarsePointer,
  motionStyle,
}: {
  isPreloading: boolean
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  isCoarsePointer: boolean
  motionStyle: Record<string, MotionValue<number>> | undefined
}) {
  return (
    <section
      id='hero'
      className='relative min-h-screen w-full bg-[#020202] flex flex-col items-center justify-center overflow-hidden'
      style={{ minHeight: '100svh', paddingTop: '60px', paddingBottom: '10px', gap: '16px' }}
    >
      <div className='absolute inset-0 z-50 pointer-events-none opacity-[0.03] hidden md:block'>
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' className='w-full h-full'>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.65'
              numOctaves='3'
              stitchTiles='stitch'
            />
          </filter>
          <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
      </div>

      <div className='absolute inset-0 z-0 overflow-hidden'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]' />

        <div
          className='absolute bottom-0 w-full h-[45vh] bg-[linear-gradient(to_right,#00f0f003_1px,transparent_1px),linear-gradient(to_bottom,#00f0f003_1px,transparent_1px)] bg-[size:60px_60px]'
          style={{
            transform: 'perspective(1200px) rotateX(72deg) scale(2.8)',
            transformOrigin: 'bottom',
          }}
        />
      </div>

      <div className='absolute inset-0 z-20 pointer-events-none p-10 pt-40 pb-20 px-20 hidden md:flex flex-col justify-between'>
        <div className='flex justify-between items-start opacity-30 uppercase tracking-[0.4em] text-[9px] font-mono'>
          <div className='space-y-2'>
            <p className='flex items-center gap-2'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#00f0f0] animate-pulse' /> Status:
              Operational
            </p>
            <p className='text-white/40 font-bold'>Core_Engine: Neural_X1</p>
          </div>
          <div className='text-right space-y-1'>
            <p className='text-[#00f0f0] font-bold'>Security_Auth: Passed</p>
            <p className='opacity-50'>V_024.9.1</p>
          </div>
        </div>

        <div className='flex justify-between items-end opacity-30 uppercase tracking-[0.4em] text-[9px] font-mono'>
          <div className='space-y-1'>
            <p className='font-bold text-white'>Lat: 0.002ms // Flux: Stable</p>
            <p className='text-white/40'>Systems Architecture Studio</p>
          </div>
        </div>
      </div>

      <motion.div
        style={motionStyle}
        className='relative z-30 flex flex-col items-center text-center px-6 w-full max-w-7xl mx-auto preserve-3d'
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-10 flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/05 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]'
        >
          <div className='w-1.5 h-1.5 rounded-full bg-[#00f0f0] animate-pulse shadow-[0_0_15px_#00f0f0] shrink-0' />
          <span className='text-xs font-mono uppercase tracking-[0.6em] text-white/80'>
            Next Generation Studio
          </span>
        </motion.div>

        <div className='flex flex-col items-center gap-10 w-full'>
          <div
            className='relative flex justify-center items-center w-full'
            style={{ width: '100%', height: '280px' }}
          >
            <div style={{ width: '100%', maxWidth: '1200px' }}>
              {!isPreloading && (
                <InfinityScene
                  mouseX={isCoarsePointer ? undefined : mouseX}
                  mouseY={isCoarsePointer ? undefined : mouseY}
                />
              )}
            </div>
          </div>

          <div className='flex flex-col items-center gap-12 z-30 px-6'>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'none' }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              style={{ width: 'auto', whiteSpace: 'nowrap', textAlign: 'center' }}
              className='heading-hero uppercase tracking-tighter text-white select-none relative z-10 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]'
            >
              Oneverce
            </motion.h1>

            <div className='h-[2px] w-24 bg-white/10 mx-auto my-10'>
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className='h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent'
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className='max-w-[260px] text-center text-[13px] leading-[1.6] opacity-70 text-white font-medium'
            >
              We engineer{' '}
              <span className='text-white italic'>high-fidelity digital infrastructure</span> for
              organizations that demand{' '}
              <span className='text-white font-bold'>total dominance.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className='flex flex-col md:flex-row items-stretch md:items-center gap-4 md:gap-12 w-full max-w-md md:max-w-none md:w-auto px-2 justify-center'
            >
              <a
                href='#contact'
                className='group relative w-full max-w-[300px] md:w-auto md:px-14 h-[56px] inline-flex items-center justify-center border-0 overflow-hidden text-center rounded-full'
              >
                <div className='absolute inset-0 bg-white group-hover:bg-[#00f0f0] transition-colors duration-500 clip-path-hero-btn' />
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className='absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent skew-x-12'
                />
                <span className='relative z-10 text-black font-black text-xs tracking-[0.4em] uppercase flex items-center gap-2 transition-colors duration-500'>
                  Initiate Venture <span>➔</span>
                </span>
              </a>

              <a
                href='#work'
                className='group flex items-center justify-center gap-3 md:gap-5 text-white/20 hover:text-white transition-all duration-500 uppercase tracking-[0.15em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-bold font-mono py-2 min-h-[44px]'
              >
                <span className='w-8 md:w-16 h-[1px] bg-white/10 group-hover:w-12 md:group-hover:w-24 group-hover:bg-[#00f0f0] transition-all duration-700 shrink-0' />
                <span className='text-center'>Sector Archive</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <>
        <div className='absolute top-0 right-0 w-[min(800px,100vw)] h-[min(800px,100vw)] bg-[#0070b0]/05 rounded-full blur-[200px] mix-blend-overlay pointer-events-none' />
        <div className='absolute bottom-0 left-0 w-[min(800px,100vw)] h-[min(800px,100vw)] bg-[#9333ea]/05 rounded-full blur-[200px] mix-blend-overlay pointer-events-none' />
      </>
    </section>
  )
}
