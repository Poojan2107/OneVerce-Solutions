import { lazy, Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'motion/react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollToTop from './components/ScrollToTop'
import Stats from './components/Stats'
import StickyCTA from './components/StickyCTA'
import SkipLink from './components/SkipLink'
import Preloader from './components/Preloader'
import ErrorBoundary from './components/ErrorBoundary'
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion'
import { useCoarsePointer } from './hooks/useCoarsePointer'
import { AudioUIProvider } from './context/AudioUIContext'

const AuditTool = lazy(() => import('./components/AuditTool'))
const Problem = lazy(() => import('./components/Problem'))
const Services = lazy(() => import('./components/Services'))
const FeaturedWork = lazy(() => import('./components/FeaturedWork'))
const CaseStudies = lazy(() => import('./components/CaseStudies'))
const SystemArchitecture = lazy(() => import('./components/SystemArchitecture'))
const CTA = lazy(() => import('./components/CTA'))
const Team = lazy(() => import('./components/Team'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const Spotlight = lazy(() => import('./components/Spotlight'))
const CustomCursor = lazy(() => import('./components/CustomCursor'))
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'))
const Process = lazy(() => import('./components/Process'))
const SocialProof = lazy(() => import('./components/SocialProof'))
const SmoothScroll = lazy(() => import('./components/SmoothScroll'))
const TechnicalHUD = lazy(() => import('./components/TechnicalHUD'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const TechStack = lazy(() => import('./components/TechStack'))

const LoadingFallback = () => (
  <div
    className='min-h-80 w-full flex items-center justify-center'
    role='status'
    aria-label='Loading section'
  >
    <div className='flex flex-col items-center gap-4'>
      <div className='w-6 h-6 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin' />
      <span className='text-[9px] font-mono text-zinc-700 uppercase tracking-[0.4em] animate-pulse'>
        Loading
      </span>
    </div>
  </div>
)

const LoadableSection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingFallback />}>
    <ErrorBoundary>{children}</ErrorBoundary>
  </Suspense>
)

const RevealSection = ({
  children,
  className,
  reducedMotion,
  isCoarsePointer,
}: {
  children: React.ReactNode
  className?: string
  reducedMotion: boolean
  isCoarsePointer: boolean
}) =>
  reducedMotion || isCoarsePointer ? (
    <div className={className}>{children}</div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  )

export default function App() {
  const reducedMotion = usePrefersReducedMotion()
  const isCoarsePointer = useCoarsePointer()
  const [isPreloading, setIsPreloading] = useState(!reducedMotion)

  // Lock scroll on body when preloading is active
  useEffect(() => {
    if (isPreloading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isPreloading])

  const shouldReduceMotion = reducedMotion || isCoarsePointer

  return (
    <AudioUIProvider>
      <Analytics />
      <MotionConfig reducedMotion={shouldReduceMotion ? 'always' : 'never'}>
        <motion.div className='relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white/10'>
          <SkipLink />
          {!reducedMotion && <Preloader onComplete={() => setIsPreloading(false)} />}

          {/* Render SmoothScroll and active pointer components only after loading completes */}
          {!isPreloading && (
            <LoadableSection>
              <SmoothScroll />
            </LoadableSection>
          )}
          {!isPreloading && !isCoarsePointer && (
            <LoadableSection>
              <Spotlight />
            </LoadableSection>
          )}
          {!isPreloading && !isCoarsePointer && (
            <LoadableSection>
              <CustomCursor />
            </LoadableSection>
          )}
          {!isPreloading && !isCoarsePointer && (
            <LoadableSection>
              <TechnicalHUD />
            </LoadableSection>
          )}
          <ScrollToTop />
          <div className='fixed inset-0 pointer-events-none bg-noise opacity-[0.015] z-100 hidden md:block' />
          <div className='fixed inset-0 pointer-events-none bg-scanlines opacity-[0.04] z-100 hidden md:block' />

          <StickyCTA />

          <div className='relative z-10'>
            <Navbar />
            <main id='main-content' tabIndex={-1}>
              <AnimatePresence mode='wait'>
                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 1.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Defer heavy SVG particle scene calculations while preloading */}
                  <Hero isPreloading={isPreloading} />

                  <div className='space-y-0'>
                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <Stats />
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <Problem />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <AuditTool />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <WhyChooseUs />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <Services />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <Process />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <FeaturedWork />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <CaseStudies />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <SocialProof />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <Testimonials />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <TechStack />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <SystemArchitecture />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <CTA />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <Team />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <FAQ />
                      </LoadableSection>
                    </RevealSection>

                    <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                      <LoadableSection>
                        <Contact />
                      </LoadableSection>
                    </RevealSection>
                  </div>
                </motion.div>
              </AnimatePresence>
            </main>
            <LoadableSection>
              <Footer />
            </LoadableSection>
          </div>
        </motion.div>
      </MotionConfig>
    </AudioUIProvider>
  )
}
