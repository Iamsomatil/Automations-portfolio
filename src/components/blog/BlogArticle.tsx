import { useMemo, useState, type MouseEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, Copy, Linkedin, Share2 } from 'lucide-react';
import { formatBlogDate, getBlogPost, getRelatedPosts } from '../../lib/blog';
import { renderBlogMarkdown } from '../../lib/blog-render';
import { projects, profile } from '../../data/portfolio';
import { SITE_URL, usePageMetadata } from '../../lib/seo';
import BlogCard from './BlogCard';

const projectSlug = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const ctaByCategory = {
  'Web Development': 'Building a web product and need engineering support?',
  'AI Automation': 'Need help designing a reliable automation workflow?',
  'CRM & Integrations': 'Need your CRM, lead routing, and follow-up systems connected?',
  'AI & Emerging Tech': 'Need to decide where AI fits in an existing workflow?',
  'Case Studies': 'Have a systems problem that needs a clear technical plan?',
} as const;

type BlogArticleProps = { slug: string };

const BlogArticle = ({ slug }: BlogArticleProps) => {
  const post = getBlogPost(slug);
  const [copiedLink, setCopiedLink] = useState(false);
  const articleUrl = `${SITE_URL}/blog/${slug}`;
  const relatedPosts = post ? getRelatedPosts(post) : [];
  const articleHtml = useMemo(() => post ? renderBlogMarkdown(post.body, post.headings) : '', [post]);
  const relatedProjects = useMemo(() => {
    if (!post) return [];
    return (post.relatedProjects ?? []).map((relatedSlug) => projects.find((project) => (project.slug ?? projectSlug(project.title)) === relatedSlug)).filter((project): project is NonNullable<typeof project> => Boolean(project));
  }, [post]);

  const jsonLd = useMemo(() => post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seoDescription ?? post.description,
    author: { '@type': 'Person', name: profile.name, url: SITE_URL },
    mainEntityOfPage: articleUrl,
    ...(post.publishedAt ? { datePublished: post.publishedAt, dateModified: post.updatedAt ?? post.publishedAt } : {}),
    ...(post.coverImage ? { image: new URL(post.coverImage, SITE_URL).toString() } : {}),
  } : undefined, [articleUrl, post]);

  usePageMetadata({
    title: post?.seoTitle ?? post?.title ?? 'Article not found | Samson Akinsanya',
    description: post?.seoDescription ?? post?.description ?? 'The requested article could not be found.',
    path: `/blog/${slug}`,
    type: post ? 'article' : 'website',
    image: post?.coverImage,
    jsonLd,
    noIndex: !post,
  });

  if (!post) {
    return (
      <main id="main-content" className="flex min-h-screen items-center bg-dark-950 pb-24 pt-28 text-white">
        <div className="container max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-300">404 · Article not found</p>
          <h1 className="mt-5 text-4xl font-semibold sm:text-6xl">This article is not available.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">It may be a draft, have moved, or the URL may be incorrect.</p>
          <a href="/blog" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"><ArrowLeft size={16} /> Back to the blog</a>
        </div>
      </main>
    );
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(articleUrl);
    setCopiedLink(true);
    window.setTimeout(() => setCopiedLink(false), 1800);
  };

  const copyCode = async (event: MouseEvent<HTMLElement>) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-copy-code]');
    if (!button) return;
    const code = button.closest('.blog-code')?.querySelector('code')?.textContent;
    if (!code) return;
    await navigator.clipboard.writeText(code);
    button.textContent = 'Copied';
    window.setTimeout(() => { button.textContent = 'Copy'; }, 1600);
  };

  return (
    <main id="main-content" className="min-h-screen bg-dark-950 pb-24 pt-28 text-white sm:pt-32">
      <article>
        <header className="container">
          <a href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"><ArrowLeft size={16} /> All articles</a>
          <div className="mt-9 max-w-5xl border-b border-white/10 pb-12 sm:pb-16">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary-300">{post.category}</p>
            <h1 className="mt-5 max-w-5xl text-balance text-[clamp(2.65rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white">{post.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{post.description}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
              {post.publishedAt ? <time dateTime={post.publishedAt}>Published {formatBlogDate(post.publishedAt)}</time> : <span>Publication date pending</span>}<span aria-hidden="true">·</span><span>{post.readingTime} min read</span>
              {post.updatedAt && post.updatedAt !== post.publishedAt ? <><span aria-hidden="true">·</span><time dateTime={post.updatedAt}>Updated {formatBlogDate(post.updatedAt)}</time></> : null}
            </div>
          </div>
          {post.coverImage ? <figure className="mt-10 overflow-hidden rounded-xl border border-white/10"><img src={post.coverImage} alt={post.coverImageAlt ?? ''} width="1440" height="810" className="aspect-video w-full object-cover" /></figure> : null}
        </header>

        <div className="container mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start lg:gap-16">
          <div className="min-w-0">
            <div className="blog-prose" onClick={copyCode} dangerouslySetInnerHTML={{ __html: articleHtml }} />

            <div className="mt-12 flex flex-wrap items-center gap-3 border-y border-white/10 py-6" aria-label="Share article">
              <span className="mr-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-300"><Share2 size={16} /> Share</span>
              <button type="button" onClick={copyLink} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm text-slate-400 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">{copiedLink ? <Check size={15} /> : <Copy size={15} />}{copiedLink ? 'Copied' : 'Copy link'}</button>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-4 text-sm text-slate-400 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"><Linkedin size={15} /> LinkedIn</a>
            </div>

            {relatedProjects.length ? (
              <section className="mt-14" aria-labelledby="related-work-heading">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-300">Connected project</p>
                <h2 id="related-work-heading" className="mt-3 text-3xl font-semibold text-white">Related work</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {relatedProjects.map((project) => {
                    const linkedSlug = project.slug ?? projectSlug(project.title);
                    return <a key={linkedSlug} href={`/#project/${linkedSlug}`} className="group rounded-xl border border-white/10 bg-dark-900 p-6 transition-colors hover:border-primary-400/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">Portfolio project</p><h3 className="mt-3 text-xl font-semibold text-white group-hover:text-primary-200">{project.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-300">View project <ArrowRight size={15} /></span></a>;
                  })}
                </div>
              </section>
            ) : null}

            <section className="mt-14 grid gap-6 rounded-xl border border-white/10 bg-dark-900 p-6 sm:grid-cols-[auto_1fr] sm:p-8" aria-labelledby="about-author">
              <img src="/samson-avatar.jpg" alt="Samson Akinsanya" width="72" height="72" loading="lazy" className="h-[72px] w-[72px] rounded-xl object-cover" />
              <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-300">About the author</p><h2 id="about-author" className="mt-2 text-2xl font-semibold text-white">{profile.name}</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">{profile.title}. I build websites, CRM workflows, APIs, and automation systems that connect user actions to day-to-day operations.</p><div className="mt-4 flex flex-wrap gap-5"><a href="/#portfolio" className="min-h-11 py-3 text-sm font-semibold text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">View my work</a><a href="/#contact" className="min-h-11 py-3 text-sm font-semibold text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">Work with me</a></div></div>
            </section>

            <section className="mt-14 border-l-2 border-primary-400 bg-primary-400/[0.06] p-6 sm:p-8" aria-labelledby="article-cta-heading">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary-300">Discuss the system</p><h2 id="article-cta-heading" className="mt-3 max-w-2xl text-3xl font-semibold text-white">{ctaByCategory[post.category]}</h2><p className="mt-4 max-w-2xl leading-7 text-slate-400">Tell me what the system needs to accomplish, where it breaks today, and what a dependable outcome looks like.</p><a href="/#contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">Start a conversation <ArrowRight size={16} /></a>
            </section>

            {relatedPosts.length ? <section className="mt-16" aria-labelledby="related-articles-heading"><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-300">Continue reading</p><h2 id="related-articles-heading" className="mt-3 text-3xl font-semibold text-white">Related articles</h2><div className="mt-5">{relatedPosts.map((related) => <BlogCard key={related.slug} post={related} compact />)}</div></section> : null}
          </div>

          {post.headings.length >= 2 ? <aside className="hidden lg:sticky lg:top-28 lg:block" aria-label="Table of contents"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">On this page</p><nav className="mt-4 border-l border-white/10 pl-4"><ul className="space-y-3">{post.headings.map((heading) => <li key={heading.id} className={heading.level === 3 ? 'pl-3' : ''}><a href={`#${heading.id}`} className="text-sm leading-5 text-slate-500 transition-colors hover:text-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">{heading.text}</a></li>)}</ul></nav></aside> : null}
        </div>
      </article>
    </main>
  );
};

export default BlogArticle;
