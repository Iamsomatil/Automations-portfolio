import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Database,
  Download,
  GitBranch,
  Globe2,
  MessageSquareText,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import { profile } from '../data/portfolio';
import { heroContainer, heroItem, transitions } from '../lib/motion';

const proofPoints = [
  'CRM and lifecycle architecture',
  'APIs, webhooks, and orchestration',
  'Production-ready handoffs and fallbacks',
];

const flowNodes = [
  { label: 'Lead captured', detail: 'Website · form · ads', icon: Globe2 },
  { label: 'Validate + route', detail: 'Rules · tags · ownership', icon: GitBranch },
  { label: 'CRM updated', detail: 'Pipeline · data · next step', icon: Database },
  { label: 'Follow-up runs', detail: 'Call · SMS · email', icon: MessageSquareText },
] as const;

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section id="hero" className="relative isolate overflow-hidden border-b border-white/10 bg-dark-950 pt-24 text-white sm:pt-28">
      <div className="container pb-14 sm:pb-16 lg:pb-20">
        <motion.div
          className="grid items-center gap-14 lg:min-h-[650px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          <div className="max-w-3xl">
            <motion.div variants={heroItem} className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                {profile.availability}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Lagos · Global delivery</span>
            </motion.div>

            <motion.p variants={heroItem} className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary-300">
              {profile.name} · Automation Engineer
            </motion.p>
            <motion.h1
              variants={heroItem}
              className="max-w-3xl text-balance text-[clamp(2.65rem,7vw,5.7rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-white"
            >
              I build the systems behind{' '}
              <span className="text-primary-300">
                smoother operations.
              </span>
            </motion.h1>
            <motion.p variants={heroItem} className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Websites, CRM workflows, APIs, and automation logic designed as one dependable operating system, not a pile of disconnected tools.
            </motion.p>

            <motion.div variants={heroItem} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="button"
                onClick={() => scrollToSection('portfolio')}
                className="btn btn-primary min-h-12 gap-2 px-7 text-base focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View selected systems
                <ArrowRight size={18} />
              </motion.button>
              <motion.a
                href={profile.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn min-h-12 gap-2 border border-white/15 bg-white/[0.045] px-7 text-base text-white hover:border-white/30 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <CalendarClock size={18} />
                Book a conversation
              </motion.a>
            </motion.div>

            <motion.div variants={heroItem} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
              >
                <Download size={16} />
                Download résumé
              </a>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <span className="text-sm text-slate-500">{profile.markets}</span>
            </motion.div>
          </div>

          <motion.div variants={heroItem} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-primary-300">
                    <Workflow size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">Connected operations</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">Live system map</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Running
                </span>
              </div>

              <div className="relative p-5 sm:p-7">
                <div aria-hidden="true" className="absolute bottom-8 left-[2.45rem] top-9 w-px bg-white/20 sm:left-[3.45rem]" />
                <div className="space-y-3.5">
                  {flowNodes.map((node, index) => {
                    const Icon = node.icon;
                    return (
                      <motion.div
                        key={node.label}
                        className="relative flex items-center gap-4 rounded-xl border border-white/10 bg-dark-900 p-3.5 sm:p-4"
                        initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ...transitions.smooth, delay: 0.55 + index * 0.13 }}
                      >
                        <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary-400/25 bg-dark-950 text-primary-300">
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-white">{node.label}</p>
                          <p className="mt-0.5 text-sm text-slate-400">{node.detail}</p>
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">0{index + 1}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-dark-900 p-4">
                    <ShieldCheck className="mb-3 text-primary-300" size={19} />
                    <p className="text-sm font-semibold text-white">Fallbacks built in</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">Validation, retries, and clear human handoffs.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-dark-900 p-4">
                    <CheckCircle2 className="mb-3 text-emerald-300" size={19} />
                    <p className="text-sm font-semibold text-white">One visible flow</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">Every trigger has an owner and an outcome.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-3 lg:mt-4"
          variants={heroContainer}
          initial="hidden"
          animate="show"
        >
          {proofPoints.map((point, index) => (
            <motion.div key={point} variants={heroItem} className="flex min-h-11 items-center gap-3 text-sm text-slate-300">
              <span className="font-mono text-xs text-primary-400">0{index + 1}</span>
              <span>{point}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
