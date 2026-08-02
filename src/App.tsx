import { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { transitions } from './lib/motion';

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const sectionId = window.location.hash.slice(1);
      if (!sectionId) return;

      window.requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'auto' });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <MotionConfig reducedMotion="user" transition={transitions.smooth}>
      <div className="min-h-screen overflow-x-clip bg-dark-950">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-dark-950 shadow-xl transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <Hero />
          <Portfolio />
          <Testimonials />
          <About />
          <Services />
          <Tools />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
