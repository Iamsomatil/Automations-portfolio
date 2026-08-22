import { lazy, Suspense, useEffect, useState } from 'react';
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
import LatestWriting from './components/blog/LatestWriting';
import { transitions } from './lib/motion';
import { usePageMetadata } from './lib/seo';

const BlogIndex = lazy(() => import('./components/blog/BlogIndex'));
const BlogArticle = lazy(() => import('./components/blog/BlogArticle'));

const useLocation = () => {
  const [location, setLocation] = useState(() => `${window.location.pathname}${window.location.search}`);
  useEffect(() => {
    const update = () => setLocation(`${window.location.pathname}${window.location.search}`);
    window.addEventListener('popstate', update);
    return () => window.removeEventListener('popstate', update);
  }, []);
  return location;
};

const HomePage = () => {
  usePageMetadata({
    title: 'Samson Akinsanya — Automation Engineer & Full-Stack Systems Builder',
    description: 'Portfolio of Samson Akinsanya, building websites, CRM workflows, APIs, and automation systems for dependable operations.',
    path: '/',
  });

  return (
    <main id="main-content">
      <Hero />
      <Portfolio />
      <LatestWriting />
      <Testimonials />
      <About />
      <Services />
      <Tools />
      <FAQ />
      <Contact />
    </main>
  );
};

function App() {
  const location = useLocation();
  const pathname = location.split('?')[0].replace(/\/$/, '') || '/';
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

  const articleMatch = pathname.match(/^\/blog\/([^/]+)$/);
  const page = pathname === '/' ? <HomePage /> : (
    <Suspense fallback={<main id="main-content" className="min-h-screen bg-dark-950 pt-28"><p className="sr-only" role="status">Loading page</p></main>}>
      {pathname === '/blog' ? <BlogIndex /> : articleMatch ? <BlogArticle slug={decodeURIComponent(articleMatch[1])} /> : <BlogArticle slug="__not-found__" />}
    </Suspense>
  );

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
        {page}
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
