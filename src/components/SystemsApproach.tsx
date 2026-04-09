import { motion } from 'framer-motion';
import { Braces, Cpu, Layers3, Waypoints } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';

const principles = [
  {
    title: 'API-first thinking',
    description:
      'I start with system contracts so product features, backend logic, and operational tools can evolve without breaking each other.',
    icon: <Waypoints size={18} />,
  },
  {
    title: 'Modular architecture',
    description:
      'I separate presentation, business logic, integrations, and operational state so the system stays understandable as it grows.',
    icon: <Layers3 size={18} />,
  },
  {
    title: 'Automation as a layer',
    description:
      'Automation comes after the core flow is clear. It accelerates execution, but it never replaces sound engineering.',
    icon: <Cpu size={18} />,
  },
  {
    title: 'Scalability mindset',
    description:
      'I build for maintainability, edge cases, and team adoption so the system works beyond launch and under real usage.',
    icon: <Braces size={18} />,
  },
];

const SystemsApproach = () => {
  return (
    <section id="systems" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_26%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionHeading
            align="center"
            eyebrow="How I Build Systems"
            title="Engineering Principles Behind the Work"
            description="The constant across my projects is simple: build the system properly first, then use AI and automation to extend what is already sound."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="inline-flex rounded-xl border border-primary-400/20 bg-primary-500/10 p-3 text-primary-300">
                {principle.icon}
              </div>
              <h3 className="mt-4 text-lg font-heading font-bold text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 text-slate-200 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">Positioning</p>
          <p className="mt-3 max-w-4xl text-base leading-8 text-slate-300">
            The goal is not to stack tools together. The goal is to design a product and operations system that can handle real usage,
            then add automation, AI, and integrations where they remove friction or create leverage.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemsApproach;
