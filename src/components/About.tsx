import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe2, MapPin, Route, ShieldCheck, Workflow } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { profile } from '../data/portfolio';
import { cardItem, fadeUp, staggerContainer, viewportOnce } from '../lib/motion';

const principles = [
  {
    icon: Route,
    title: 'Map the real workflow',
    text: 'Actors, data, ownership, failure points, and manual work come before tool selection.',
  },
  {
    icon: Workflow,
    title: 'Connect the operating path',
    text: 'Frontend, CRM, APIs, automations, and handoffs are designed as one system.',
  },
  {
    icon: ShieldCheck,
    title: 'Ship for production reality',
    text: 'Validation, retries, permissions, maintainability, and team adoption are part of the build.',
  },
];

const certifications = [
  'AWS Cloud Practitioner',
  'AWS Solutions Architect',
  'HubSpot CRM',
  'Make.com',
  'n8n',
  'GoHighLevel',
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section relative overflow-hidden bg-slate-50 dark:bg-dark-950">
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce} className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="absolute -inset-5 rounded-[2.25rem] border border-primary-400/15" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 dark:border-white/10">
              <img
                src="/samson-avatar.jpg"
                alt={profile.name}
                width="900"
                height="900"
                loading="lazy"
                className="aspect-[4/4.35] w-full object-cover object-top"
                onError={(event) => {
                  (event.target as HTMLImageElement).src = '/sam.png';
                }}
              />
              <div className="border-t border-white/10 bg-dark-950 p-6 text-white">
                <p className="text-xl font-semibold">{profile.name}</p>
                <p className="mt-1 text-sm text-slate-300">Automation Engineer & Full-Stack Systems Builder</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5">
                    <MapPin size={13} /> {profile.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-3 py-1.5">
                    <Globe2 size={13} /> Global delivery
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="How I work"
              title="Systems thinking from the first trigger to the final handoff"
              description="I work across interfaces, CRM structure, automation logic, and backend integrations. The goal is a system the team understands, trusts, and uses every day."
            />
            <motion.p
              className="mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              My strongest projects involve operational complexity: leads arriving from several sources, records moving between tools, ownership changing by context, and follow-up that needs clear stop conditions. I turn that complexity into a visible, maintainable operating path.
            </motion.p>

            <motion.div
              className="mt-8 grid gap-4 sm:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <motion.div
                    key={principle.title}
                    variants={cardItem}
                    whileHover={shouldReduceMotion ? undefined : 'hover'}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.045]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-400/10 text-primary-500 dark:text-primary-300">
                        <Icon size={18} />
                      </span>
                      <span className="font-mono text-[10px] text-slate-400 dark:text-slate-600">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 text-base font-semibold text-slate-950 dark:text-white">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{principle.text}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.035]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary-500 dark:text-primary-300">Platform credentials</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {certifications.map((item) => (
                      <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 dark:border-white/10 dark:bg-dark-900 dark:text-slate-300">
                        <CheckCircle2 size={13} className="text-emerald-500" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.a
                  href="#contact"
                  className="btn btn-primary min-h-12 shrink-0 gap-2"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Work with me <ArrowRight size={17} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
