import { motion, AnimatePresence, MotionConfig } from 'motion/react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import CTA from './components/CTA';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Spotlight from './components/Spotlight';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import Stats from './components/Stats';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import TechnicalHUD from './components/TechnicalHUD';
import AuditTool from './components/AuditTool';
import Testimonials from './components/Testimonials';
import StickyCTA from './components/StickyCTA';
import SkipLink from './components/SkipLink';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { useCoarsePointer } from './hooks/useCoarsePointer';

const RevealSection = ({
  children,
  className,
  reducedMotion,
  isCoarsePointer,
}: {
  children: React.ReactNode;
  className?: string;
  reducedMotion: boolean;
  isCoarsePointer: boolean;
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
  );

export default function App() {
  const reducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useCoarsePointer();
  const [isPreloading, setIsPreloading] = useState(!reducedMotion);

  // Lock scroll on body when preloading is active
  useEffect(() => {
    if (isPreloading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPreloading]);

  const shouldReduceMotion = reducedMotion || isCoarsePointer;

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
      <motion.div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white/10">
        <SkipLink />
        {!reducedMotion && <Preloader onComplete={() => setIsPreloading(false)} />}
        
        {/* Render SmoothScroll and active pointer components only after loading completes */}
        {!isPreloading && <SmoothScroll />}
        {!isPreloading && !isCoarsePointer && <Spotlight />}
        {!isPreloading && !isCoarsePointer && <CustomCursor />}
        {!isPreloading && !isCoarsePointer && <TechnicalHUD />}
        
        <ScrollToTop />
        <div className="vignette" />
        
        {/* Fixed overlay layers — desktop only */}
        <div className="fixed inset-0 pointer-events-none bg-noise opacity-[0.015] z-[100] hidden md:block" />
        <div className="fixed inset-0 pointer-events-none bg-scanlines opacity-[0.04] z-[100] hidden md:block" />

        <StickyCTA />

        <div className="relative z-10">
          <Navbar />
          <main id="main-content">
            <AnimatePresence mode="wait">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reducedMotion ? 0 : 1.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Defer heavy SVG particle scene calculations while preloading */}
                <Hero isPreloading={isPreloading} />

                <div className="space-y-0">
                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <Stats />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <Problem />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <WhyChooseUs />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <Services />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <Process />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <AuditTool />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <FeaturedWork />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <SocialProof />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <Testimonials />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <CTA />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <Team />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <FAQ />
                  </RevealSection>

                  <RevealSection reducedMotion={reducedMotion} isCoarsePointer={isCoarsePointer}>
                    <Contact />
                  </RevealSection>
                </div>
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </motion.div>
    </MotionConfig>
  );
}

