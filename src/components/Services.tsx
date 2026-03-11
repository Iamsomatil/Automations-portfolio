import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, ShieldCheck, TrendingUp, Zap } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { expertiseAreas } from '../data/portfolio';

const iconMap = {
  'Automation Systems': <Zap size={26} />,
  'API Integrations': <TrendingUp size={26} />,
  'CRM & Operational Systems': <Database size={26} />,
  'AI-Assisted Workflows': <Code2 size={26} />,
  'Reliability & Operations': <ShieldCheck size={26} />,
};

const styleMap = {
  'Automation Systems': {
    gradient: 'from-primary-500/15 to-primary-500/5',
    iconBg: 'bg-primary-500/15 text-primary-400',
  },
  'API Integrations': {
    gradient: 'from-emerald-500/15 to-emerald-500/5',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
  },
  'CRM & Operational Systems': {
    gradient: 'from-blue-500/15 to-blue-500/5',
    iconBg: 'bg-blue-500/15 text-blue-400',
  },
  'AI-Assisted Workflows': {
    gradient: 'from-purple-500/15 to-purple-500/5',
    iconBg: 'bg-purple-500/15 text-purple-400',
  },
  'Reliability & Operations': {
    gradient: 'from-orange-500/15 to-orange-500/5',
    iconBg: 'bg-orange-500/15 text-orange-400',
  },
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
  hover: { y: -6, transition: { duration: 0.2 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-dark-950/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-40 dark:opacity-20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            align="center"
            eyebrow="Automation Strengths"
            title="What I Build in Production"
            description="My strongest work combines full-stack delivery, automation design, CRM workflows, and operational reliability so systems hold up beyond the demo."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {expertiseAreas.map((area) => {
            const styles = styleMap[area.title as keyof typeof styleMap];
            return (
              <motion.div
                key={area.title}
                className="group relative"
                variants={item}
                whileHover="hover"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />

                <div className="relative h-full bg-white dark:bg-dark-800/70 rounded-2xl p-7 shadow-card border border-gray-100 dark:border-dark-700/50 group-hover:shadow-card-hover group-hover:border-primary-500/20 transition-all duration-300 flex flex-col backdrop-blur-sm">
                  <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    {iconMap[area.title as keyof typeof iconMap]}
                  </div>

                  <h3 className="text-lg font-heading font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed flex-grow">
                    {area.description}
                  </p>

                  <ul className="space-y-2">
                    {area.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <span className="mt-1.5 w-1.5 h-1.5 bg-primary-400 rounded-full flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="group relative md:col-span-2 lg:col-span-3"
            variants={item}
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glow-blue">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  Looking for automation ownership?
                </h3>
                <p className="text-primary-100 text-sm">
                  I&apos;m strongest where the website, CRM, automations, and operations all need to work together.
                </p>
              </div>
              <motion.a
                href="#contact"
                className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore My Work
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
