import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import AuditTool from './components/AuditTool';
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

const RevealSection = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    style={{ willChange: 'transform, opacity' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-white/10">
      {/* Persistent System Overlays */}
      <Spotlight />
      <CustomCursor />
      <ScrollToTop />
      <div className="vignette" />
      <div className="fixed inset-0 pointer-events-none bg-noise opacity-5 z-[100] mix-blend-overlay" />
      <div className="fixed inset-0 pointer-events-none bg-scanlines opacity-20 z-[100]" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Hero />
              
              <RevealSection>
                <Stats />
              </RevealSection>

              <RevealSection>
                <Problem />
              </RevealSection>
              
              <RevealSection>
                <WhyChooseUs />
              </RevealSection>

              <RevealSection>
                <Services />
              </RevealSection>
              
              <RevealSection>
                <AuditTool />
              </RevealSection>
              
              <RevealSection>
                <Process />
              </RevealSection>

              <RevealSection>
                <FeaturedWork />
              </RevealSection>
              
              <RevealSection>
                <SocialProof />
              </RevealSection>

              <RevealSection>
                <CTA />
              </RevealSection>
              
              <RevealSection>
                <Team />
              </RevealSection>
              
              <RevealSection>
                <FAQ />
              </RevealSection>
              
              <RevealSection>
                <Contact />
              </RevealSection>
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
}


