import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Database, Globe, Layout, Layers, Server } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { platformGroups } from '../data/portfolio';
import { cardItem, fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const iconMap = {
  Automation: <Cpu size={20} />,
  'CRM & Sales': <Database size={20} />,
  'Web Development': <Globe size={20} />,
  'Backend & Data': <Server size={20} />,
  'Payments & Billing': <Layout size={20} />,
  'Productivity & PM': <Layers size={20} />,
};

const colorMap = {
  Automation: {
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10 border-yellow-400/20',
  },
  'CRM & Sales': {
    color: 'text-primary-400',
    bgColor: 'bg-primary-400/10 border-primary-400/20',
  },
  'Web Development': {
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10 border-emerald-400/20',
  },
  'Backend & Data': {
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10 border-purple-400/20',
  },
  'Payments & Billing': {
    color: 'text-orange-400',
    bgColor: 'bg-orange-400/10 border-orange-400/20',
  },
  'Productivity & PM': {
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-400/10 border-indigo-400/20',
  },
};

const Tools = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="tools" className="section bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="container relative">
        <div className="text-center mb-12">
          <SectionHeading
            align="center"
            eyebrow="Tech stack"
            title="Tools I use"
            description="My stack covers websites, CRM systems, APIs, automation, billing, and team operations. I choose tools based on the workflow and the people maintaining it."
          />
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {platformGroups.map((group) => {
            const styles = colorMap[group.title as keyof typeof colorMap];
            return (
              <motion.div
                key={group.title}
                className="group relative"
                variants={cardItem}
                whileHover={shouldReduceMotion ? undefined : 'hover'}
              >
                <div className="relative h-full rounded-2xl border border-gray-200 bg-white p-6 transition-[background-color,border-color] duration-300 ease-out group-hover:border-primary-500/30 group-hover:bg-gray-50 dark:border-white/10 dark:bg-dark-900 dark:group-hover:bg-dark-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-105 ${styles.bgColor}`}>
                      <span className={styles.color}>{iconMap[group.title as keyof typeof iconMap]}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-dark-900 dark:text-white text-base">{group.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{group.note}</p>
                    </div>
                  </div>

                  <div className="space-y-2.5 mt-5">
                    {group.items.map((tool) => (
                      <div key={tool.name} className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${styles.color.replace('text-', 'bg-')}`} />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{tool.name}</span>
                        </div>
                        {tool.primary ? (
                          <span className="text-[10px] font-medium px-2 py-0.5 bg-primary-500/10 text-primary-400 border border-primary-500/20 rounded-full">
                            Primary
                          </span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm">
            Choosing tools for a workflow?
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary group/cta"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss your stack
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
