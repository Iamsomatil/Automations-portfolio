import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Moon, Sun, X, Zap } from 'lucide-react';
import { navItems, profile } from '../data/portfolio';
import { EASE_OUT, transitions } from '../lib/motion';

const mobileMenuVariants = {
  closed: { opacity: 0, y: -8, transition: { duration: 0.18, ease: EASE_OUT } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: EASE_OUT, staggerChildren: 0.035, delayChildren: 0.03 },
  },
};

const mobileLinkVariants = {
  closed: { opacity: 0, y: -5 },
  open: { opacity: 1, y: 0, transition: transitions.quick },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('portfolio-theme') !== 'light');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const position = window.scrollY + 140;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        if (position >= section.offsetTop && position < section.offsetTop + section.offsetHeight) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const destination = element.offsetTop - 76;
      const longJump = Math.abs(window.scrollY - destination) > 1800;
      window.scrollTo({ top: destination, behavior: shouldReduceMotion || longJump ? 'auto' : 'smooth' });
      window.history.replaceState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled || isMenuOpen
          ? 'border-white/10 bg-dark-950/95 backdrop-blur-md'
          : 'border-transparent bg-dark-950'
      }`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transitions.smooth}
    >
      <div className="container">
        <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
          <motion.button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="group flex min-h-11 items-center gap-2.5 rounded-xl pr-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
            whileHover={shouldReduceMotion ? undefined : { y: -1 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Go to ${profile.name} portfolio home`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-400 bg-primary-600 text-white">
              <Zap size={17} aria-hidden="true" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-white">{profile.name}</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-slate-500">Systems builder</span>
            </span>
          </motion.button>

          <div className="hidden items-center gap-2 md:flex">
            <nav aria-label="Primary navigation" className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`relative min-h-11 rounded-lg px-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
                      isActive ? 'text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute inset-x-3 bottom-1.5 h-0.5 rounded-full bg-primary-400"
                        transition={transitions.spring}
                      />
                    ) : null}
                  </button>
                );
              })}
            </nav>
            <span className="mx-1 h-6 w-px bg-white/10" />
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              type="button"
              onClick={() => setDarkMode((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="border-t border-white/10 bg-dark-950 px-4 py-4 md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  type="button"
                  variants={mobileLinkVariants}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-left text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
                    activeSection === item.id ? 'bg-primary-400/10 text-primary-300' : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  <span className="font-mono text-[10px] text-slate-600">/{item.id}</span>
                </motion.button>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
