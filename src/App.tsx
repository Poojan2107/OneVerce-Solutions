import { motion, AnimatePresence } from 'motion/react';
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
}: {
  children: React.ReactNode;
  className?: string;
  reducedMotion: boolean;
}) =>
  reducedMotion ? (
    <div className={className}>{children}</div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity' }}
      className={className}
    >
      {children}
    </motion.div>
  );

export default function App() {
  const reducedMotion = usePrefersReducedMotion();
  const isCoarsePointer = useCoarsePointer();

  return (
    <motion.div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white/10">
      <SkipLink />
      {!reducedMotion && !isCoarsePointer && <Preloader />}
      <SmoothScroll />

      <Spotlight />
      <CustomCursor />
      <ScrollToTop />
      <TechnicalHUD />
      <div className="vignette" />
      <div className="fixed inset-0 pointer-events-none bg-noise opacity-5 z-[100] mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none bg-scanlines opacity-10 z-[100]" />

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
              <Hero />

              <div className="space-y-0">
                <RevealSection reducedMotion={reducedMotion}>
                  <Stats />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <Problem />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <WhyChooseUs />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <Services />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <Process />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <AuditTool />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <FeaturedWork />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <SocialProof />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <Testimonials />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <CTA />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <Team />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <FAQ />
                </RevealSection>

                <RevealSection reducedMotion={reducedMotion}>
                  <Contact />
                </RevealSection>
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </motion.div>
  );
}
