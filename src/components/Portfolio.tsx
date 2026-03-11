import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Layers3, TrendingUp, X } from 'lucide-react';
import SectionHeading from './shared/SectionHeading';
import { projects, type Project } from '../data/portfolio';

type Filter = 'all' | 'web-crm' | 'automation';

const colorMap = {
  'web-crm': {
    text: 'text-primary-400',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/25',
    label: 'Web + CRM',
  },
  automation: {
    text: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/25',
    label: 'Automation',
  },
};

const filters: { label: string; value: Filter }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web + CRM', value: 'web-crm' },
  { label: 'Automation', value: 'automation' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  hover: { y: -6, transition: { duration: 0.2 } },
};

const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  const openGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  const goToNext = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((index) => (index + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const goToPrev = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((index) => (index - 1 + selectedProject.images.length) % selectedProject.images.length);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeGallery();
      if (event.key === 'ArrowRight') goToNext();
      if (event.key === 'ArrowLeft') goToPrev();
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goToNext, goToPrev, selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 dark:opacity-15" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            align="center"
            eyebrow="Selected Work"
            title="Systems I've Built"
            description="A selection of systems shipped for real businesses, with emphasis on architecture, workflow design, and operational reliability."
          />
          <div className="section-divider mx-auto mt-5" />
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Most of this work was delivered inside private client environments, so the strongest proof here is architecture, implementation detail, and system design context rather than public source code.
          </p>
        </div>

        <motion.div
          className="flex justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === filterOption.value
                  ? 'bg-primary-600 text-white shadow-glow-blue'
                  : 'bg-white dark:bg-dark-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-dark-700 hover:border-primary-500/40 hover:text-primary-400'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
          >
            {filteredProjects.map((project) => {
              const palette = colorMap[project.category];
              return (
                <motion.article
                  key={project.title}
                  className="group relative"
                  variants={item}
                  whileHover="hover"
                  layout
                >
                  <div className="relative h-full bg-white dark:bg-dark-800/70 rounded-2xl overflow-hidden shadow-card border border-gray-100 dark:border-dark-700/50 group-hover:shadow-card-hover group-hover:border-primary-500/20 transition-all duration-300 flex flex-col backdrop-blur-sm">
                    {project.featured ? (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="flex items-center gap-1 px-2.5 py-1 bg-primary-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wide shadow-md">
                          <TrendingUp size={9} /> Featured
                        </span>
                      </div>
                    ) : null}

                    <button
                      type="button"
                      className="relative h-44 overflow-hidden bg-dark-800 text-left"
                      onClick={() => openGallery(project)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-semibold rounded-lg border border-white/20">
                          Open Case Study
                        </span>
                      </div>
                      <img
                        src={project.images[0].url}
                        alt={project.images[0].alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${palette.bg} ${palette.text} border ${palette.border}`}>
                          {palette.label}
                        </span>
                      </div>

                      <h3 className="text-base font-heading font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-400 transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <ul className="space-y-1.5 mb-4">
                        {project.impactBullets.slice(0, 3).map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${palette.text.replace('text-', 'bg-')}`} />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-primary-300 transition-colors mt-auto"
                        >
                          <ExternalLink size={12} />
                          Visit Live Website
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
          >
            <button
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={closeGallery}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              className="relative max-w-6xl w-full max-h-[92vh] overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
            >
              <div className="relative bg-dark-900 rounded-2xl overflow-hidden border border-white/10">
                <motion.img
                  key={currentImageIndex}
                  src={selectedProject.images[currentImageIndex]?.url}
                  alt={selectedProject.images[currentImageIndex]?.alt}
                  className="w-full max-h-[55vh] object-contain bg-black/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />

                {selectedProject.images.length > 1 ? (
                  <>
                    <button
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                      onClick={(event) => {
                        event.stopPropagation();
                        goToPrev();
                      }}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                      onClick={(event) => {
                        event.stopPropagation();
                        goToNext();
                      }}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                ) : null}
              </div>

              <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-white font-semibold text-xl">{selectedProject.title}</p>
                      <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-300">{selectedProject.description}</p>
                    </div>
                    {selectedProject.liveUrl ? (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-primary-500/25 bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-300 transition-colors hover:border-primary-400/40 hover:text-primary-200"
                      >
                        <ExternalLink size={15} />
                        Visit Live Site
                      </a>
                    ) : null}
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {selectedProject.challenge ? (
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Problem</p>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{selectedProject.challenge}</p>
                      </div>
                    ) : null}
                    {selectedProject.solution ? (
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">What I Built</p>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{selectedProject.solution}</p>
                      </div>
                    ) : null}
                    {selectedProject.result ? (
                      <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Outcome</p>
                        <p className="mt-2 text-sm leading-6 text-gray-300">{selectedProject.result}</p>
                      </div>
                    ) : null}
                  </div>

                  {selectedProject.detailSections?.length ? (
                    <div className="mt-6 space-y-4">
                      {selectedProject.detailSections.map((section) => (
                        <div key={section.title} className="rounded-2xl border border-white/10 bg-black/10 p-5">
                          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">
                            {section.title}
                          </p>
                          <ul className="mt-4 space-y-2.5">
                            {section.points.map((point) => (
                              <li key={point} className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="space-y-4">
                  {selectedProject.metrics?.length ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Impact</p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                        {selectedProject.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                            <p className="text-xs uppercase tracking-[0.14em] text-gray-500">{metric.label}</p>
                            <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {selectedProject.roleSummary ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">My Role</p>
                      <p className="mt-3 text-sm leading-6 text-gray-300">{selectedProject.roleSummary}</p>
                    </div>
                  ) : null}

                  {selectedProject.architectureSummary ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">
                        <Layers3 size={14} />
                        Architecture
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-300">{selectedProject.architectureSummary}</p>
                      {selectedProject.architectureDiagram ? (
                        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-black/10">
                          <img
                            src={selectedProject.architectureDiagram.url}
                            alt={selectedProject.architectureDiagram.alt}
                            className="w-full h-auto"
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-xs font-medium text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">Key Outcomes</p>
                    <ul className="mt-4 space-y-2.5">
                      {selectedProject.impactBullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-gray-300">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
