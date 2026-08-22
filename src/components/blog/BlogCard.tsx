import { ArrowUpRight, Clock3 } from 'lucide-react';
import { formatBlogDate, type BlogPost } from '../../lib/blog';

type BlogCardProps = {
  post: BlogPost;
  compact?: boolean;
};

const BlogCard = ({ post, compact = false }: BlogCardProps) => (
  <article className={`group border-t border-white/10 ${compact ? 'py-6' : 'py-8'}`}>
    <a
      href={`/blog/${post.slug}`}
      className="grid min-h-11 gap-4 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-4 focus-visible:ring-offset-dark-950 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
    >
      <div className="min-w-0">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
          <span className="text-primary-300">{post.category}</span>
          {post.publishedAt ? <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time> : <span>Publication date pending</span>}
          <span className="inline-flex items-center gap-1.5"><Clock3 size={12} aria-hidden="true" />{post.readingTime} min read</span>
        </div>
        <h3 className={`${compact ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'} text-balance font-semibold leading-tight text-white transition-colors group-hover:text-primary-200`}>
          {post.title}
        </h3>
        <p className={`mt-3 max-w-3xl leading-7 text-slate-400 ${compact ? 'text-sm sm:text-base' : 'text-base'}`}>
          {post.description}
        </p>
      </div>
      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-[border-color,color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:border-primary-400/50 group-hover:text-primary-300" aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </a>
  </article>
);

export default BlogCard;
