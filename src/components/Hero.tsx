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
        minHeight: 'calc(100vh - 84px)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '80px 20px 36px',
        gap: '22px',
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
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Planet */}
        {isPreloading && (
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
        )}

        {/* Infinity loop */}
        <div
          style={{
            width: '100%',
            maxWidth: '430px',
          }}
        >
          {!isPreloading && (
            <InfinityScene
              mouseX={isCoarsePointer ? undefined : mouseX}
              mouseY={isCoarsePointer ? undefined : mouseY}
            />
          )}
        </div>
      </div>

      {/* HeroContent */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          zIndex: 5,
        }}
      >
        {/* ONEVERCE */}
        <motion.h1
          initial={{ opacity: 0, y: 10, filter: 'blur(10px)', letterSpacing: '-0.05em' }}
          animate={{ opacity: 1, y: 0, filter: 'none', letterSpacing: '-1.5px' }}
          transition={{ duration: 4.0, ease: 'easeInOut' }}
          style={{
            fontSize: 'clamp(34px, 10vw, 46px)',
            fontWeight: 900,
            lineHeight: 0.9,
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

      {/* Mobile Tech HUD Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        style={{
          width: '100%',
          maxWidth: '320px',
          marginTop: 'auto',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          zIndex: 5,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>Lat // Flux</span>
          <span style={{ color: '#00f0f0', fontWeight: 'bold' }}>0.002ms // Ok</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>Security</span>
          <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Passed</span>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}
        >
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>Engine</span>
          <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Neural_X1</span>
        </div>
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
      className='hero relative h-screen w-full overflow-hidden'
      style={{ background: 'transparent' }}
    >
      {/* BackgroundGrid */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
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
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]' />
        <div
          className='absolute bottom-0 w-full h-[45vh] bg-[linear-gradient(to_right,#00f0f003_1px,transparent_1px),linear-gradient(to_bottom,#00f0f003_1px,transparent_1px)] bg-size-[60px_60px]'
          style={{
            transform: 'perspective(1200px) rotateX(72deg) scale(2.8)',
            transformOrigin: 'bottom',
          }}
        />
      </div>

      {/* HeroVisual */}
      <div className='hero-visual absolute inset-0 flex items-center justify-center z-[1]'>
        {isPreloading && (
          <div
            className='planet'
            style={{
              position: 'absolute',
              width: '160px',
              height: '160px',
              left: '39%',
              top: '36%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.85,
            }}
          >
            <div className='w-full h-full rounded-full bg-gradient-to-br from-[#00f0ff] via-[#00b0d0] to-[#010101] shadow-[inset_-25px_-25px_50px_rgba(0,0,0,1),0_0_100px_rgba(0,240,255,0.4)] relative'>
              <div className='absolute top-[12%] left-[18%] w-1/2 h-1/2 bg-white/30 rounded-full blur-[20px]' />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[72px] border-[3px] border-[#00f0f0]/60 rounded-[100%] rotate-[24deg] blur-[0.5px] shadow-[0_0_45px_rgba(0,240,240,0.5)]' />
            <div className='absolute top-1/2 left-1/2 -translate-x-[50.5%] -translate-y-[50.5%] w-[320px] h-[72px] border border-[#00d5ff]/25 rounded-[100%] rotate-[24.2deg] blur-[1px]' />
          </div>
        )}

        <div className='infinity-loop' style={{ width: 'min(90vw, 1400px)', maxWidth: '1400px' }}>
          {!isPreloading && (
            <InfinityScene
              mouseX={isCoarsePointer ? undefined : mouseX}
              mouseY={isCoarsePointer ? undefined : mouseY}
            />
          )}
        </div>
      </div>

      {/* Layer 1: Title (In Front of the Loop) */}
      <div
        className='hero-title-layer'
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          transform: 'translateY(-50%)',
          width: 'fit-content',
          margin: '0 auto',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      >
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(20px)', letterSpacing: '-0.05em' }}
          animate={{ opacity: 1, filter: 'none', letterSpacing: '0.04em' }}
          transition={{ duration: 4.0, ease: 'easeInOut' }}
          className='hero-title'
          style={{
            fontSize: 'clamp(110px, 9vw, 170px)',
            lineHeight: 0.9,
            whiteSpace: 'nowrap',
            margin: 0,
            maxWidth: 'none',
            fontWeight: 900,
            textAlign: 'center',
            color: '#fff',
            textTransform: 'uppercase',
            textShadow: '0 0 40px rgba(0,240,255,0.1), 0 0 80px rgba(214,0,255,0.1)',
          }}
        >
          Oneverce
        </motion.h1>
      </div>

      {/* Layer 3: Content - Badge (In Front of the Loop) */}
      <motion.div
        style={{
          ...motionStyle,
          position: 'absolute',
          bottom: 'calc(50% + 125px)',
          left: 0,
          right: 0,
          width: 'fit-content',
          margin: '0 auto',
          pointerEvents: 'auto',
          zIndex: 3,
        }}
        className='flex flex-col items-center gap-4'
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='hero-badge'
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 20px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 30px rgba(0,0,0,0.5)',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#00f0f0',
              animation: 'pulse 2s ease-in-out infinite',
              boxShadow: '0 0 15px #00f0f0',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: '12px',
              fontFamily: '"JetBrains Mono", monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.6em',
              color: 'rgba(255,255,255,0.8)',
              whiteSpace: 'nowrap',
            }}
          >
            Next Generation Studio
          </span>
        </motion.div>
      </motion.div>

      {/* Layer 3: Content - Description & CTA (In Front of the Loop) */}
      <motion.div
        style={{
          ...motionStyle,
          position: 'absolute',
          top: 'calc(50% + 125px)',
          left: 0,
          right: 0,
          width: 'fit-content',
          margin: '0 auto',
          pointerEvents: 'auto',
          zIndex: 3,
        }}
        className='flex flex-col items-center gap-8'
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className='hero-description font-sans'
          style={{
            maxWidth: '720px',
            fontSize: '18px',
            lineHeight: 1.65,
            textAlign: 'center',
            color: 'rgba(255,255,255,0.75)',
            fontWeight: 500,
            textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 4px 24px rgba(0,0,0,0.9)',
          }}
        >
          We engineer{' '}
          <span style={{ fontStyle: 'italic', color: '#fff' }}>
            high-fidelity digital infrastructure
          </span>{' '}
          for organizations that <br className='hidden sm:inline' />
          demand <span style={{ fontWeight: 700, color: '#fff' }}>total dominance.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className='hero-cta'
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          <a
            href='#contact'
            style={{
              position: 'relative',
              padding: '20px 56px',
              overflow: 'hidden',
              textAlign: 'center',
              textDecoration: 'none',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className='group clip-path-hero-btn hover:scale-[1.03] active:scale-[0.98]'
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: '#fff',
                transition: 'background 0.5s',
              }}
              className='group-hover:bg-[#00f0f0]'
            />
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent)',
                transform: 'skewX(-12deg)',
              }}
            />
            <span
              style={{
                position: 'relative',
                zIndex: 10,
                color: '#000',
                fontWeight: 900,
                fontSize: '12px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              Initiate Venture <span style={{ fontSize: '16px', fontWeight: 'normal' }}>→</span>
            </span>
          </a>

          <a
            href='#work'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              color: 'rgba(255,255,255,0.6)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              fontSize: '10px',
              fontWeight: 700,
              fontFamily: '"JetBrains Mono", monospace',
              transition: 'color 0.5s',
            }}
            className='group'
          >
            <span
              style={{
                width: '32px',
                height: '1px',
                background: 'rgba(255,255,255,0.25)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className='group-hover:w-12 group-hover:bg-[#00f0f0]'
            />
            <span style={{ textAlign: 'center' }} className='group-hover:text-white'>
              SECTOR_ARCHIVE
            </span>
          </a>
        </motion.div>
      </motion.div>

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
    </section>
  )
}
