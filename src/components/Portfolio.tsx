import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  ExternalLink,
  Layers3,
  Network,
  ShieldCheck,
  X,
} from 'lucide-react';
import { projects, type Project } from '../data/portfolio';
import SectionHeading from './shared/SectionHeading';
import { cardItem, fadeUp, staggerContainer, transitions, viewportOnce } from '../lib/motion';

type Filter = 'all' | Project['category'];

const filters: { label: string; value: Filter }[] = [
  { label: 'Selected work', value: 'all' },
  { label: 'Web + CRM', value: 'web-crm' },
  { label: 'Automation', value: 'automation' },
];

const projectSlug = (project: Project) =>
  project.slug ?? project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    const matchingProjects = filter === 'all' ? projects : projects.filter((project) => project.category === filter);
    return [...matchingProjects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [filter]);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  useEffect(() => {
    const syncProjectFromHash = () => {
      const match = window.location.hash.match(/^#project\/(.+)$/);
      if (!match) return;
      const project = projects.find((item) => projectSlug(item) === decodeURIComponent(match[1]));
      if (project) {
        setSelectedProject(project);
        setCurrentImageIndex(0);
      }
    };

    syncProjectFromHash();
    window.addEventListener('hashchange', syncProjectFromHash);
    return () => window.removeEventListener('hashchange', syncProjectFromHash);
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeProject();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'),
      ).filter((element) => !element.hasAttribute('disabled'));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const selectFilter = (value: Filter) => {
    setFilter(value);
    setShowAll(false);
  };

  const openProject = (project: Project) => {
    setCurrentImageIndex(0);
    setCopied(false);
    setSelectedProject(project);
    window.history.pushState(null, '', `#project/${projectSlug(project)}`);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCopied(false);
    window.history.pushState(null, '', '#portfolio');
    window.requestAnimationFrame(() => document.getElementById('portfolio')?.focus({ preventScroll: true }));
  };

  const copyProjectLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const scrollToContact = () => {
    closeProject();
    window.requestAnimationFrame(() => document.getElementById('contact')?.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' }));
  };

  return (
    <section id="portfolio" tabIndex={-1} className="section relative overflow-hidden bg-dark-950 text-white outline-none">
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            eyebrow="Selected systems"
            title="Work across the full operating path"
            description="These projects cover CRM, automation, web, routing, billing, AI handoffs, and internal operations. For private client work, I document the system logic and architecture without exposing the codebase."
            className="max-w-3xl"
            titleClassName="text-white"
          />
          <motion.div
            className="flex w-fit max-w-full gap-1 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.04] p-1.5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => selectFilter(option.value)}
                className={`relative min-h-11 whitespace-nowrap rounded-xl px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
                  filter === option.value ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
                aria-pressed={filter === option.value}
              >
                {filter === option.value ? (
                  <motion.span
                    layoutId="projectFilter"
                    className="absolute inset-0 -z-10 rounded-lg bg-primary-600"
                    transition={transitions.spring}
                  />
                ) : null}
                {option.label}
              </button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 8 }}
            transition={transitions.quick}
          >
            {displayedProjects.map((project, index) => {
              const isLead = index === 0;
              const isSecondary = index === 1;
              const span = isLead ? 'lg:col-span-7' : isSecondary ? 'lg:col-span-5' : 'lg:col-span-4';
              const imageHeight = isLead ? 'aspect-[16/9] lg:aspect-[16/8.4]' : 'aspect-[16/9]';
              return (
                <motion.article
                  layout
                  key={project.title}
                  variants={cardItem}
                  className={`${span} group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-[border-color,background-color] duration-300 hover:border-primary-400/35 hover:bg-slate-800`}
                >
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="flex h-full min-h-[32rem] w-full flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-300"
                    aria-label={`Open case study: ${project.title}`}
                  >
                    <div className={`relative overflow-hidden border-b border-white/10 bg-white ${imageHeight}`}>
                      <img
                        src={project.images[0]?.url}
                        alt={project.images[0]?.alt}
                        width="1600"
                        height="900"
                        loading={index < 2 ? 'eager' : 'lazy'}
                        className={`h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.025] ${
                          project.imageFit === 'contain' ? 'object-contain p-4 sm:p-6' : 'object-cover'
                        }`}
                      />
                      <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
                        <div className="flex flex-wrap gap-2">
                          {project.featured ? (
                            <span className="rounded-full border border-sky-300/30 bg-sky-400/90 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-950">
                              Featured
                            </span>
                          ) : null}
                          {project.cardBadges?.slice(0, 1).map((badge) => (
                            <span key={badge} className="rounded-sm border border-white/20 bg-slate-950 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.13em] text-white">
                              {badge}
                            </span>
                          ))}
                        </div>
                        {project.statusLabel ? (
                          <span className="rounded-sm border border-white/15 bg-slate-950 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.11em] text-slate-300">
                            {project.statusLabel}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-300">
                        <span>{project.categoryLabel ?? (project.category === 'web-crm' ? 'Web + CRM' : 'Automation')}</span>
                        <span className="h-px w-5 bg-primary-400/40" />
                        <span className="text-slate-600">0{index + 1}</span>
                      </div>
                      <h3 className={`mt-4 font-semibold leading-tight text-white ${isLead ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                        {project.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{project.description}</p>
                      <ul className="mt-5 space-y-2">
                        {project.impactBullets.slice(0, 2).map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5 text-sm leading-5 text-slate-300">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-400">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-[transform,background-color,border-color] duration-200 group-hover:translate-x-1 group-hover:border-primary-400/40 group-hover:bg-primary-400/10">
                          <ArrowRight size={17} />
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length > 6 ? (
          <motion.div className="mt-10 flex justify-center" variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="btn min-h-12 border border-white/15 bg-white/[0.04] px-7 text-white hover:border-primary-400/35 hover:bg-primary-400/10 focus-visible:ring-2 focus-visible:ring-primary-300"
            >
              {showAll ? 'Show selected work' : `View all ${filteredProjects.length} projects`}
            </button>
          </motion.div>
        ) : null}
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-dark-950 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transitions.quick}
          >
            <div className="sticky top-0 z-20 border-b border-white/10 bg-dark-950">
              <div className="container flex min-h-[4.5rem] items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-primary-300">Case study</p>
                  <p className="truncate text-sm font-semibold text-white">{selectedProject.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyProjectLink}
                    className="flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy link'}</span>
                  </button>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    onClick={closeProject}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                    aria-label="Close case study"
                  >
                    <X size={19} />
                  </button>
                </div>
              </div>
            </div>

            <div className="container py-10 sm:py-14 lg:py-16">
              <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <motion.div initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={transitions.smooth}>
                  <div className="flex flex-wrap gap-2">
                    <span className="eyebrow">{selectedProject.categoryLabel ?? 'System build'}</span>
                    {selectedProject.statusLabel ? <span className="eyebrow border-white/10 bg-white/5 text-slate-300">{selectedProject.statusLabel}</span> : null}
                  </div>
                  <h2 id="case-study-title" className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    {selectedProject.title}
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{selectedProject.subtitle ?? selectedProject.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {selectedProject.tags.slice(0, 6).map((tag) => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {selectedProject.liveUrl ? (
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary min-h-12 gap-2">
                        Visit live system <ExternalLink size={17} />
                      </a>
                    ) : null}
                    <button type="button" onClick={scrollToContact} className="btn min-h-12 border border-white/15 bg-white/5 text-white hover:bg-white/10">
                      Discuss a similar system
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white"
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={transitions.smooth}
                >
                  <div className="aspect-[16/10]">
                    <img
                      src={selectedProject.images[currentImageIndex]?.url}
                      alt={selectedProject.images[currentImageIndex]?.alt}
                      className={`h-full w-full ${selectedProject.imageFit === 'contain' ? 'object-contain p-3 sm:p-5' : 'object-cover'}`}
                    />
                  </div>
                  {selectedProject.images.length > 1 ? (
                    <div className="absolute inset-x-4 bottom-4 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setCurrentImageIndex((index) => (index - 1 + selectedProject.images.length) % selectedProject.images.length)}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-slate-950 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                        aria-label="Previous project image"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentImageIndex((index) => (index + 1) % selectedProject.images.length)}
                        className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-slate-950 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                        aria-label="Next project image"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  ) : null}
                </motion.div>
              </div>

              {selectedProject.metrics?.length ? (
                <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedProject.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">{metric.label}</p>
                      <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {selectedProject.challenge ? (
                  <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                    <ShieldCheck className="text-rose-300" size={21} />
                    <h3 className="mt-5 text-lg font-semibold text-white">Challenge</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{selectedProject.challenge}</p>
                  </div>
                ) : null}
                {selectedProject.solution ? (
                  <div className="rounded-3xl border border-primary-400/20 bg-primary-400/[0.06] p-6">
                    <Network className="text-primary-300" size={21} />
                    <h3 className="mt-5 text-lg font-semibold text-white">System design</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{selectedProject.solution}</p>
                  </div>
                ) : null}
                {selectedProject.result ? (
                  <div className="rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.05] p-6">
                    <Check className="text-emerald-300" size={21} />
                    <h3 className="mt-5 text-lg font-semibold text-white">Outcome</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{selectedProject.result}</p>
                  </div>
                ) : null}
              </div>

              {selectedProject.detailSections?.length ? (
                <div className="mt-16 space-y-5">
                  <div className="max-w-2xl">
                    <span className="eyebrow">Implementation detail</span>
                    <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">How the system works</h3>
                  </div>
                  {selectedProject.detailSections.map((section, index) => (
                    <div key={`${section.title}-${index}`} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                      <div className="grid gap-5 lg:grid-cols-[0.34fr_0.66fr]">
                        <div>
                          <span className="font-mono text-xs text-primary-400">0{index + 1}</span>
                          <h4 className="mt-2 text-xl font-semibold text-white">{section.title}</h4>
                          {section.intro ? <p className="mt-3 text-sm leading-6 text-slate-400">{section.intro}</p> : null}
                        </div>
                        <div>
                          {section.points?.length ? (
                            <ul className="grid gap-3 sm:grid-cols-2">
                              {section.points.map((point) => (
                                <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary-300" />
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                          {section.items?.length ? (
                            <div className={`grid gap-3 ${section.columns === 'three' ? 'sm:grid-cols-2 xl:grid-cols-3' : 'sm:grid-cols-2'}`}>
                              {section.items.map((item) => (
                                <div key={item.label} className="rounded-2xl border border-white/10 bg-dark-950/60 p-4">
                                  <p className="font-semibold text-white">{item.label}</p>
                                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {(selectedProject.architectureSummary || selectedProject.architectureDiagram) ? (
                <div className="mt-16 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                      <Layers3 size={20} />
                    </span>
                    <h3 className="text-xl font-semibold text-white">Architecture</h3>
                  </div>
                  {selectedProject.architectureSummary ? <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300">{selectedProject.architectureSummary}</p> : null}
                  {selectedProject.architectureDiagram ? (
                    <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-white p-3 sm:p-5">
                      <img src={selectedProject.architectureDiagram.url} alt={selectedProject.architectureDiagram.alt} loading="lazy" className="h-auto w-full" />
                    </div>
                  ) : null}
                </div>
              ) : null}

              <div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] border border-primary-400/20 bg-primary-400/[0.07] p-7 sm:flex-row sm:items-center sm:p-9">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary-300">Have a similar workflow?</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">We can map the trigger, logic, handoffs, and expected outcome.</h3>
                </div>
                <button type="button" onClick={scrollToContact} className="btn btn-primary min-h-12 shrink-0 gap-2">
                  Start a conversation <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
