import { motion } from 'framer-motion';
import { ArrowRight, Award, CheckCircle2, Globe2, MapPin, Sparkles, Target, Zap } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { profile } from '../data/portfolio';

const traits = [
  {
    icon: <CheckCircle2 className="text-emerald-400" size={16} />,
    label: 'Reliable Systems',
    desc: 'Designed for maintainability, clean handoffs, and dependable production behavior.',
  },
  {
    icon: <Target className="text-primary-400" size={16} />,
    label: 'Systems Thinking',
    desc: 'Focused on boundaries, data flow, and the real operational constraints behind a product.',
  },
  {
    icon: <Zap className="text-amber-400" size={16} />,
    label: 'Execution Depth',
    desc: 'Comfortable owning frontend, integrations, workflow logic, and delivery details together.',
  },
];

const proofPoints = [
  'Production automations connecting intake, CRM, onboarding, billing, and follow-up systems',
  'API and webhook integrations built around real team operations and messy data flows',
  'End-to-end systems shipped across websites, HubSpot, GoHighLevel, n8n, Make.com, Zapier, Stripe, React, and TypeScript',
];

const certifications = [
  'AWS Certified Cloud Practitioner',
  'AWS Solutions Architect',
  'HubSpot CRM',
  'Make.com',
  'n8n',
  'GoHighLevel Certified',
];

const workStyle = [
  {
    title: 'Define the system boundaries',
    text: 'I start by understanding the actors, data flow, failure points, and operational constraints in the system.',
  },
  {
    title: 'Design the integration path',
    text: 'Then I map the frontend, APIs, CRM, automation logic, and handoff points into a coherent flow.',
  },
  {
    title: 'Ship for production reality',
    text: 'I build with validation, edge cases, maintainability, and team adoption in mind so the system holds up.',
  },
];

const roleFit = [
  'Automation Engineer',
  'Integrations Engineer',
  'CRM Systems Engineer',
  'Internal Tools Engineer',
];

const portraitParticles = [
  { top: '-10%', left: '12%', delay: 0, size: 'h-2 w-2' },
  { top: '18%', right: '-10%', delay: 0.7, size: 'h-2.5 w-2.5' },
  { bottom: '12%', left: '-10%', delay: 0.3, size: 'h-2 w-2' },
  { bottom: '-8%', right: '10%', delay: 1.1, size: 'h-1.5 w-1.5' },
];

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f4f7fb] py-20 dark:bg-dark-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(2,132,199,0.10),transparent_24%)]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="How I Think"
            title="I Build Automation Systems That Make Operations Simpler"
            description="My work sits at the intersection of full-stack delivery, workflow automation, CRM systems, and internal operations, where reliability matters as much as speed."
          />
          <div className="section-divider mx-auto mt-5" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="rounded-[28px] border border-sky-100 bg-white p-5 shadow-[0_28px_75px_-50px_rgba(2,132,199,0.45)] dark:border-white/10 dark:bg-dark-900 sm:p-7 lg:p-8"
        >
          <div className="flex flex-col gap-6 rounded-[24px] border border-slate-200 bg-slate-50/85 p-5 dark:border-white/10 dark:bg-white/5 sm:flex-row sm:items-start sm:gap-8">
            <div className="flex justify-center sm:justify-start">
              <div className="relative h-[240px] w-[240px] shrink-0 sm:h-[280px] sm:w-[280px]">
                <motion.div
                  className="absolute inset-[-10px] rounded-[32px] border border-primary-400/20"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-[-4px] rounded-[28px] border border-sky-300/15"
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                />
                {portraitParticles.map((particle, index) => (
                  <motion.span
                    key={index}
                    className={`absolute rounded-full bg-primary-300/75 shadow-[0_0_16px_rgba(56,189,248,0.45)] ${particle.size}`}
                    style={{
                      top: particle.top,
                      left: particle.left,
                      right: particle.right,
                      bottom: particle.bottom,
                    }}
                    animate={{ y: [0, -5, 0], x: [0, 3, 0], opacity: [0.35, 0.95, 0.35] }}
                    transition={{
                      duration: 3 + index * 0.35,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: particle.delay,
                    }}
                  />
                ))}
                <motion.div
                  className="relative overflow-hidden rounded-[28px] border border-sky-100 bg-slate-100 dark:border-white/10 dark:bg-dark-800 shadow-[0_18px_40px_-24px_rgba(14,165,233,0.45)]"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                >
                  <img
                    src="/samson-avatar.jpg"
                    alt={profile.name}
                    className="h-[240px] w-[240px] object-cover object-top sm:h-[280px] sm:w-[280px]"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement;
                      target.src = '/sam.png';
                    }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="min-w-0 flex-1 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
                  <span className="glow-dot" />
                  {profile.availability}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-700 dark:border-primary-500/20 dark:bg-primary-500/10 dark:text-primary-300">
                  <Sparkles size={11} />
                  Engineer
                </span>
              </div>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                Automation · Full-Stack Systems · CRM Architecture
              </p>
              <h3 className="mt-2 text-2xl font-heading font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl lg:text-4xl">
                I turn fragmented tools and manual workflows into dependable automation systems.
              </h3>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-dark-800 dark:text-slate-200">
                  <MapPin size={14} className="text-primary-500" />
                  {profile.location}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-dark-800 dark:text-slate-200">
                  <Globe2 size={14} className="text-primary-500" />
                  Global Client Work
                </div>
              </div>
              <div className="mt-5 space-y-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                <p>
                  I build across workflow automation, backend integrations, CRM architecture, and frontend systems so teams can operate with less friction and more confidence.
                </p>
                <p>
                  My strongest work shows up when the website, lead flow, CRM, operational tooling, APIs, and downstream workflows all need to function as one reliable system.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
            <div className="space-y-6">
              <div className="space-y-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                <p>
                  I work at the intersection of <span className="font-semibold text-slate-900 dark:text-white">automation, full-stack delivery, integrations, and operational systems</span>. That means I am not only wiring tools together. I am also building the interfaces, shaping the data flow, and making sure the entire system is usable day to day.
                </p>
                <p>
                  Over the past 5+ years, I have built systems for businesses across housing, travel, staffing, and service operations. The common thread is end-to-end ownership: website, CRM, automation, and backend logic designed to work as one operating setup.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {traits.map((trait) => (
                  <motion.div
                    key={trait.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all dark:border-white/10 dark:bg-white/5"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-slate-100 p-2 dark:bg-dark-800">
                      {trait.icon}
                    </div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{trait.label}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{trait.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-[24px] bg-slate-950 p-5 text-white shadow-[0_25px_60px_-40px_rgba(15,23,42,0.8)] dark:bg-dark-950">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
                  <Award size={15} />
                  Engineering Throughline
                </div>
                <div className="mt-4 space-y-3">
                  {proofPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <p className="text-sm leading-6 text-slate-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-amber-100 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm dark:border-white/10 dark:from-dark-900 dark:to-dark-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">What Clients Get</p>
                  <p className="mt-3 text-lg font-heading font-bold text-slate-900 dark:text-white">
                    Cleaner operations, less manual drag
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    I focus on reducing hidden admin load so teams move faster and stop relying on fragile workarounds.
                  </p>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-dark-900">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Let&apos;s Build</p>
                  <h4 className="mt-3 text-xl font-heading font-bold text-slate-950 dark:text-white">
                    If you need someone who can own automations from trigger to downstream outcome, let&apos;s talk.
                  </h4>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <motion.a
                      href="#contact"
                      className="btn btn-primary text-sm"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get in Touch
                      <ArrowRight className="ml-2" size={16} />
                    </motion.a>
                    <motion.a
                      href="#portfolio"
                      className="btn border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-dark-600 dark:text-gray-200 dark:hover:bg-dark-800 text-sm"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View My Projects
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-dark-900">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">How I Work</p>
                <div className="mt-5 space-y-4">
                  {workStyle.map((step, index) => (
                    <div key={step.title} className="grid grid-cols-[auto_1fr] gap-3">
                      <div className="flex flex-col items-center">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-600 text-xs font-bold text-white shadow-glow-blue">
                          0{index + 1}
                        </div>
                        {index < workStyle.length - 1 ? (
                          <div className="mt-2 h-full w-px bg-gradient-to-b from-primary-300 to-transparent" />
                        ) : null}
                      </div>
                      <div className="pb-3">
                        <h4 className="text-base font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                        <p className="mt-1.5 text-sm leading-6 text-gray-500 dark:text-gray-400">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.35)] dark:border-white/10 dark:bg-dark-900">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Certifications</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {certifications.map((item) => (
                    <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[24px] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-5 shadow-sm dark:border-white/10 dark:from-dark-900 dark:to-dark-900">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-primary-300">Best Fit</p>
                  <p className="mt-3 text-lg font-heading font-bold text-slate-900 dark:text-white">
                    End-to-end systems for agencies and service teams
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    The strongest matches combine website delivery, CRM setup, automation design, and backend operational logic.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {roleFit.map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1.5 text-xs font-medium text-primary-500 dark:text-primary-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
