import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../lib/blog';
import BlogCard from './BlogCard';
import SectionHeading from '../shared/SectionHeading';

const LatestWriting = () => {
  if (!blogPosts.length) return null;
  return (
    <section id="writing" className="section border-y border-white/5 bg-dark-950 text-white">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Latest writing" title="How I think about systems." titleClassName="text-white" description="Technical notes on automation, integrations, web engineering, and the decisions behind reliable implementation." />
          <a href="/blog" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-primary-300 transition-colors hover:text-primary-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300">View all articles <ArrowRight size={16} /></a>
        </div>
        <div className="mt-10">{blogPosts.slice(0, 2).map((post) => <BlogCard key={post.slug} post={post} compact />)}</div>
      </div>
    </section>
  );
};

export default LatestWriting;
