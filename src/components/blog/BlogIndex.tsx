import { ArrowRight, Clock3, Rss } from 'lucide-react';
import { BLOG_CATEGORIES, blogPosts, categorySlug, formatBlogDate, getFeaturedPost, type BlogCategory } from '../../lib/blog';
import { usePageMetadata } from '../../lib/seo';
import BlogCard from './BlogCard';

const categoryFromQuery = () => {
  const value = new URLSearchParams(window.location.search).get('category');
  return BLOG_CATEGORIES.find((category) => categorySlug(category) === value);
};

const BlogIndex = () => {
  const activeCategory = categoryFromQuery();
  const featured = getFeaturedPost();
  const visiblePosts = activeCategory ? blogPosts.filter((post) => post.category === activeCategory) : blogPosts;

  usePageMetadata({
    title: 'Technical Blog | Samson Akinsanya',
    description: 'Technical articles on web development, AI automation, CRM integrations, workflow architecture, and reliable operations.',
    path: '/blog',
  });

  const selectCategory = (category?: BlogCategory) => {
    const url = category ? `/blog?category=${categorySlug(category)}` : '/blog';
    window.history.pushState(null, '', url);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <main id="main-content" className="min-h-screen bg-dark-950 pb-24 pt-28 text-white sm:pt-32">
      <section className="container">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary-300">Technical blog</p>
            <h1 className="mt-5 max-w-4xl text-balance text-[clamp(2.8rem,7vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
              Notes from building connected systems.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Practical breakdowns of web engineering, AI automation, CRM integrations, and emerging tools. Each article focuses on the decisions and tradeoffs behind dependable systems.
            </p>
          </div>
          <a href="/rss.xml" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
            <Rss size={16} aria-hidden="true" /> RSS feed
          </a>
        </div>
      </section>

      {featured && !activeCategory ? (
        <section className="container py-12 sm:py-16" aria-labelledby="featured-article">
          <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">Featured article</p>
              <div aria-hidden="true" className="mt-5 h-px w-16 bg-primary-400" />
            </div>
            <article>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                <span className="text-primary-300">{featured.category}</span>
                {featured.publishedAt ? <time dateTime={featured.publishedAt}>{formatBlogDate(featured.publishedAt)}</time> : <span>Publication date pending</span>}
                <span className="inline-flex items-center gap-1.5"><Clock3 size={12} />{featured.readingTime} min read</span>
              </div>
              <h2 id="featured-article" className="mt-5 max-w-4xl text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{featured.title}</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{featured.description}</p>
              <a href={`/blog/${featured.slug}`} className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-primary-300 transition-colors hover:text-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">
                Read article <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          </div>
        </section>
      ) : null}

      <section className={`container ${featured && !activeCategory ? '' : 'pt-12 sm:pt-16'}`} aria-labelledby="recent-articles">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-300">Browse by topic</p>
            <h2 id="recent-articles" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{activeCategory ?? 'Recent articles'}</h2>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter articles by category">
            <button type="button" onClick={() => selectCategory()} aria-pressed={!activeCategory} className={`min-h-11 rounded-lg border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${!activeCategory ? 'border-primary-400 bg-primary-400/10 text-primary-200' : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-white'}`}>All</button>
            {BLOG_CATEGORIES.map((category) => (
              <button key={category} type="button" onClick={() => selectCategory(category)} aria-pressed={activeCategory === category} className={`min-h-11 rounded-lg border px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${activeCategory === category ? 'border-primary-400 bg-primary-400/10 text-primary-200' : 'border-white/10 text-slate-400 hover:border-white/25 hover:text-white'}`}>
                {category}
              </button>
            ))}
          </div>
        </div>
        {visiblePosts.length ? (
          <div>{visiblePosts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
        ) : (
          <div className="border-b border-white/10 py-14">
            <p className="text-lg text-slate-300">No published articles in this category yet.</p>
            <button type="button" onClick={() => selectCategory()} className="mt-4 min-h-11 text-sm font-semibold text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">View all articles</button>
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogIndex;
