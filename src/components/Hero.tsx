import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronDown, Database, GitBranch, Globe, Zap } from 'lucide-react';
import ParticleBackground from './ui/ParticleBackground';
import CountUpStat from './shared/CountUpStat';
import { heroStats, profile, trustPoints } from '../data/portfolio';

const toolTags = [
  { icon: <Zap size={13} />, label: 'n8n' },
  { icon: <GitBranch size={13} />, label: 'Make.com' },
  { icon: <Database size={13} />, label: 'GoHighLevel' },
  { icon: <Globe size={13} />, label: 'HubSpot' },
  { icon: <Zap size={13} />, label: 'Zapier' },
];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isMounted) return null;

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-dark-950">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-[#0a0f1e] to-dark-950" />
      <div className="absolute inset-0 hero-mesh opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[100px] animate-glow-pulse" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-[100px] animate-glow-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      <ParticleBackground />

      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/25 text-primary-300 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {profile.availability}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.08] tracking-tight mb-3">
              Hi, I&apos;m{' '}
              <span className="text-gradient-purple bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-primary-300 to-purple-400">
                {profile.name}
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-gray-300 mt-4 leading-snug">
              {profile.title}
            </h2>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
          >
            I design and implement high-converting websites, CRM pipelines, and workflow automations that eliminate manual work and drive measurable business results.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            {trustPoints.map((point) => (
              <span
                key={point}
                className="inline-flex items-center px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium"
              >
                {point}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            {toolTags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300 font-medium hover:border-primary-500/30 hover:text-primary-300 transition-all duration-200"
              >
                <span className="text-primary-400">{tag.icon}</span>
                {tag.label}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            <motion.a
              href={profile.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-glow-blue"
              whileHover={{ y: -3, boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Calendar size={17} />
              Book a Strategy Call
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('portfolio')}
              className="group flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-primary-500/40 text-gray-200 hover:text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-white/5"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {heroStats.map((stat) => (
              <CountUpStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5, delay: 2 }}
        >
          <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">Scroll</span>
          <ChevronDown className="text-gray-500 w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
