import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Layout, Layers, Server } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { platformGroups } from '../data/portfolio';

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

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  hover: { y: -5, transition: { duration: 0.18 } },
};

const Tools = () => {
  return (
    <section id="tools" className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionHeading
            align="center"
            eyebrow="Tech Stack"
            title="Tools and Technologies"
            description="The platforms I use daily to build websites, CRM systems, and automation infrastructure that can hold up under real business usage."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {platformGroups.map((group) => {
            const styles = colorMap[group.title as keyof typeof colorMap];
            return (
              <motion.div
                key={group.title}
                className="group relative"
                variants={item}
                whileHover="hover"
              >
                <div className="relative h-full bg-white dark:bg-dark-800/60 rounded-2xl p-6 shadow-card border border-gray-100 dark:border-dark-700/50 hover:shadow-card-hover hover:border-primary-500/20 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${styles.bgColor}`}>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm">
            Want help choosing the right stack for your business?
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Let&apos;s Talk Tech
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
