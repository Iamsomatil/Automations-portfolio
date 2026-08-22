import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Code2, Database, ShieldCheck, TrendingUp, Zap } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { expertiseAreas } from '../data/portfolio';
import { cardItem, staggerContainer, transitions, viewportOnce } from '../lib/motion';

const iconMap = {
  'Automation Systems': <Zap size={26} />,
  'API Integrations': <TrendingUp size={26} />,
  'CRM & Operational Systems': <Database size={26} />,
  'AI-Assisted Workflows': <Code2 size={26} />,
  'Reliability & Operations': <ShieldCheck size={26} />,
};

const styleMap = {
  'Automation Systems': {
    iconBg: 'bg-primary-500/15 text-primary-400',
  },
  'API Integrations': {
    iconBg: 'bg-emerald-500/15 text-emerald-400',
  },
  'CRM & Operational Systems': {
    iconBg: 'bg-blue-500/15 text-blue-400',
  },
  'AI-Assisted Workflows': {
    iconBg: 'bg-purple-500/15 text-purple-400',
  },
  'Reliability & Operations': {
    iconBg: 'bg-orange-500/15 text-orange-400',
  },
};

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="section bg-gray-50 dark:bg-[#050b16] relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-12">
          <SectionHeading
            align="center"
            eyebrow="Areas of work"
            title="Systems I build and connect"
            description="I combine full-stack development, automation design, CRM workflows, and reliability work so the finished system is useful after the demo."
          />
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {expertiseAreas.map((area) => {
            const styles = styleMap[area.title as keyof typeof styleMap];
            return (
              <motion.div
                key={area.title}
                className="group relative"
                variants={cardItem}
                whileHover={shouldReduceMotion ? undefined : 'hover'}
              >
                <div className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-[background-color,border-color] duration-300 ease-out group-hover:border-primary-500/35 group-hover:bg-gray-50 dark:border-white/10 dark:bg-dark-900 dark:group-hover:bg-dark-800">
                  <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-rotate-1`}>
                    {iconMap[area.title as keyof typeof iconMap]}
                  </div>

                  <h3 className="text-lg font-heading font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed flex-grow">
                    {area.description}
                  </p>

                  <ul className="space-y-2">
                    {area.bullets.slice(0, 3).map((bullet) => (
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
            variants={cardItem}
          >
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary-500 bg-primary-700 p-7 sm:flex-row sm:p-8">
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  Need one person to own the workflow?
                </h3>
                <p className="text-primary-100 text-sm">
                  I work across the website, CRM, automation logic, and operational handoffs that connect them.
                </p>
              </div>
              <motion.a
                href="#portfolio"
                className="group/cta flex min-h-12 flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary-700 shadow-sm transition-[transform,background-color,box-shadow] duration-200 ease-out hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                whileHover={shouldReduceMotion ? undefined : { y: -2, boxShadow: '0 16px 34px -24px rgba(255,255,255,0.9)' }}
                whileTap={{ scale: 0.97 }}
                transition={transitions.quick}
              >
                View selected work
                <ArrowRight size={16} className="transition-transform duration-200 ease-out group-hover/cta:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
