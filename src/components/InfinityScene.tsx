import { useMemo, useState, useEffect } from 'react'
import { motion, MotionValue, useTransform, type Transition } from 'motion/react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

interface InfinitySceneProps {
  mouseX?: MotionValue<number>
  mouseY?: MotionValue<number>
}

// Global fallback to prevent memory allocation and re-renders
const fallbackMotionValue = new MotionValue(0)

const INFINITY_PATH =
  'M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0'

interface InfinityPathProps {
  fill?: string
  stroke: string
  strokeWidth: number
  strokeOpacity?: string | number
  strokeLinecap?: 'round' | 'butt' | 'square' | 'inherit'
  className?: string
  style?: React.CSSProperties
  initial?: { pathLength?: number }
  animate?: { pathLength?: number }
  transition?: Transition<unknown>
}

const InfinityPath = ({
  fill = 'none',
  stroke,
  strokeWidth,
  strokeOpacity,
  strokeLinecap = 'round' as const,
  className,
  style,
  initial,
  animate,
  transition,
}: InfinityPathProps) => {
  const baseProps = {
    d: INFINITY_PATH,
    fill,
    stroke,
    strokeWidth,
    strokeLinecap,
    ...(strokeOpacity !== undefined && { strokeOpacity }),
    className,
    style,
  }

  if (initial || animate || transition) {
    const MotionPath = motion.path
    return <MotionPath {...baseProps} initial={initial} animate={animate} transition={transition} />
  }

  return <path {...baseProps} />
}

export default function InfinityScene({ mouseX, mouseY }: InfinitySceneProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth < 768 : false
  })
  const [scale, setScale] = useState(() => {
    if (typeof window === 'undefined') return 0.78
    const width = window.innerWidth
    if (width < 360) return 0.25
    if (width < 400) return 0.28
    if (width < 480) return 0.32
    if (width < 640) return 0.4
    if (width < 768) return 0.5
    if (width < 1024) return 0.78
    return 0.92
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      if (width < 360) {
        setScale(0.25)
      } else if (width < 400) {
        setScale(0.28)
      } else if (width < 480) {
        setScale(0.32)
      } else if (width < 640) {
        setScale(0.4)
      } else if (width < 768) {
        setScale(0.5)
      } else if (width < 1024) {
        setScale(0.78)
      } else {
        setScale(0.92)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const particleCount: number = isMobile ? 4 : reducedMotion ? 20 : 40

  // Synchronized Scene Tilting using stable motion value reference
  const rotateX = useTransform(mouseY || fallbackMotionValue, [-500, 500], [15, 10])
  const rotateY = useTransform(mouseX || fallbackMotionValue, [-500, 500], [-10, 10])

  // Static Stardust Field (Immersive Environment)
  const stardust = useMemo(() => {
    if (particleCount === 0) return []
    return Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * (isMobile ? 380 : 2200),
      y: (Math.random() - 0.5) * (isMobile ? 700 : 1300),
      size: Math.random() * (isMobile ? 1.8 : 2.5),
      opacity: Math.random() * 0.7,
      delay: Math.random() * 5,
      color:
        i % 15 === 0 ? '#00f0ff' : i % 25 === 0 ? '#ffeb3b' : i % 35 === 0 ? '#ff5722' : '#ffffff',
      duration: 3 + Math.random() * 4,
    }))
  }, [particleCount, isMobile])

  return (
    <div
      className='relative w-full h-full flex items-center justify-center overflow-hidden md:overflow-visible md:perspective-[2000px] pointer-events-none'
      style={{ contain: 'layout style' }}
    >
      {/* 1. Deep Space Ambient Nebula */}
      <div className='absolute inset-0 flex items-center justify-center z-0'>
        <div
          className={
            isMobile
              ? 'absolute w-[100vw] h-[100vw] rounded-full opacity-30 blur-none'
              : 'absolute w-[120vw] h-[120vw] md:w-[1800px] md:h-[1000px] rounded-full opacity-30 md:opacity-40 blur-[250px]'
          }
          style={{
            background:
              'radial-gradient(circle, rgba(0, 240, 255, 0.04) 0%, rgba(214, 0, 255, 0.02) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* 2. Giant background shadow planet silhouette (Mockup Depth Element) */}
      <div className='absolute flex items-center justify-center pointer-events-none z-[5]'>
        <div className='absolute w-[240px] md:w-[480px] h-[240px] md:h-[480px] rounded-full border border-white/5 bg-[#001420]/15 opacity-30 blur-[1.5px] -translate-x-[20px] md:-translate-x-[40px] -translate-y-[60px] md:-translate-y-[100px]'>
          {/* Faint planetary rings */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[720px] h-[90px] md:h-[160px] border border-white/5 rounded-[100%] rotate-[-22deg] opacity-25' />
        </div>
      </div>

      {/* 3. Stardust Field (Parallax Environment - Hardware-Accelerated CSS) */}
      <div className='absolute inset-0 z-[1]'>
        {stardust.map(star => (
          <div
            key={star.id}
            className='absolute rounded-full particle-pulse'
            style={
              {
                width: star.size,
                height: star.size,
                left: `calc(50% + ${star.x}px)`,
                top: `calc(50% + ${star.y}px)`,
                backgroundColor: star.color,
                opacity: star.opacity,
                boxShadow: isMobile
                  ? 'none'
                  : star.color !== '#ffffff'
                    ? `0 0 6px ${star.color}`
                    : `0 0 3px rgba(255,255,255,0.4)`,
                backfaceVisibility: 'hidden',
                '--particle-opacity': star.opacity,
                '--particle-delay': `${star.delay}s`,
                '--particle-duration': `${star.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* 4. Unified Volumetric Scene Container */}
      <motion.div
        className='relative flex items-center justify-center md:preserve-3d will-change-transform z-10'
        style={{
          rotateX: isMobile ? undefined : rotateX,
          rotateY: isMobile ? undefined : rotateY,
          backfaceVisibility: 'hidden',
          scale: scale,
        }}
        animate={reducedMotion ? {} : { y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* The Volumetric Ribbon & Planet (Unified Layout) */}
        <div className='relative w-[1400px] h-[1000px] flex items-center justify-center md:preserve-3d'>
          <svg
            viewBox='-700 -500 1400 1000'
            className='absolute inset-0 w-full h-full overflow-visible mix-blend-screen'
          >
            <defs>
              {/* Official Full Spectrum Rainbow Gradient - Spatial Precision */}
              <linearGradient id='ribbon-grad-v1' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#00f0ff' /> {/* Left: Cyan */}
                <stop offset='25%' stopColor='#00ffbb' /> {/* Left-Mid: Teal/Green */}
                <stop offset='50%' stopColor='#ffea00' /> {/* Center-Top: Yellow */}
                <stop offset='75%' stopColor='#ff5a00' /> {/* Right-Top: Orange/Red */}
                <stop offset='100%' stopColor='#d600ff' /> {/* Right-Bottom: Purple/Pink */}
              </linearGradient>

              {/* Inner Depth Gradient (Shadow Side) */}
              <linearGradient id='ribbon-inner-shadow' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#002a35' />
                <stop offset='50%' stopColor='#352a00' />
                <stop offset='100%' stopColor='#2a0035' />
              </linearGradient>
            </defs>

            {/* Path: Symmetrical Infinity */}
            <motion.path
              id='infinity-path'
              d='M 0,0 C 200,-400 520,-400 520,0 C 520,400 200,400 0,0 C -200,400 -520,400 -520,0 C -520,-400 -200,-400 0,0'
              fill='none'
              stroke='transparent'
            />

            <InfinityPath
              stroke='url(#ribbon-grad-v1)'
              strokeWidth={110}
              strokeOpacity={0.08}
              className={isMobile ? 'blur-[8px]' : 'blur-[24px]'}
            />
            <InfinityPath
              stroke='url(#ribbon-grad-v1)'
              strokeWidth={60}
              className={isMobile ? 'blur-[4px]' : 'blur-[12px]'}
              style={{ opacity: 0.75 }}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            />
            <InfinityPath
              stroke='url(#ribbon-grad-v1)'
              strokeWidth={60}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            />
            <InfinityPath
              stroke='url(#ribbon-inner-shadow)'
              strokeWidth={28}
              strokeOpacity='0.8'
              className={isMobile ? 'blur-[1px]' : 'blur-[3px]'}
            />
            <InfinityPath
              stroke='#ffffff'
              strokeWidth={5}
              strokeOpacity='0.4'
              className={isMobile ? 'shimmer-path' : 'blur-[1px] shimmer-path'}
              style={{ strokeDasharray: '12 400' }}
            />
          </svg>

          {/* 4. The Saturn Planet (High-Fidelity) - Nested inside the left loop */}
          <div className='absolute -translate-x-[300px] -translate-y-[150px] z-30 md:preserve-3d'>
            <div className='relative w-48 h-48 planet-float'>
              {/* Glossy Sphere */}
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#00f0ff] via-[#00b0d0] to-[#010101] overflow-hidden ${
                  isMobile
                    ? 'shadow-[inset_-15px_-15px_30px_rgba(0,0,0,1),0_0_30px_rgba(0,240,255,0.3)]'
                    : 'shadow-[inset_-25px_-25px_50px_rgba(0,0,0,1),0_0_100px_rgba(0,240,255,0.4)]'
                }`}
              >
                <div
                  className={`absolute top-[12%] left-[18%] w-1/2 h-1/2 bg-white/30 rounded-full ${
                    isMobile ? 'blur-[6px]' : 'blur-[20px]'
                  }`}
                />
              </div>

              {/* Dynamic Planet Rings (Chromatic Effect) */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[80px] border-[5px] border-[#00f0f0]/75 rounded-[100%] rotate-[24deg] ${
                  isMobile
                    ? 'blur-none shadow-[0_0_15px_rgba(0,240,240,0.6)]'
                    : 'blur-[0.5px] shadow-[0_0_45px_rgba(0,240,240,0.7)]'
                }`}
              />
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-[50.5%] -translate-y-[50.5%] w-[340px] h-[80px] border border-[#9333ea]/35 rounded-[100%] rotate-[24.2deg] ${
                  isMobile ? 'blur-none' : 'blur-[1px]'
                }`}
              />

              {/* Orbital Ring Pulse (Hardware-Accelerated CSS) */}
              <div className='absolute top-1/2 left-1/2 w-[330px] h-[75px] border border-white/35 rounded-[100%] border-dashed spin-dashed-ring' />
            </div>
          </div>
        </div>

        {/* 5. Focal Atmospheric Singularities */}
        <div className='absolute flex items-center justify-center md:preserve-3d pointer-events-none'>
          <div
            className='absolute translate-x-[350px] w-[1000px] h-[700px] rounded-full'
            style={{
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.01) 0%, transparent 70%)',
            }}
          />
          <div
            className='absolute -translate-x-[350px] w-[800px] h-[600px] rounded-full'
            style={{
              background: 'radial-gradient(circle, rgba(0, 240, 240, 0.02) 0%, transparent 70%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
