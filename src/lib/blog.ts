export const BLOG_CATEGORIES = [
  'Web Development',
  'AI Automation',
  'CRM & Integrations',
  'AI & Emerging Tech',
  'Case Studies',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPostMeta = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  category: BlogCategory;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  coverImage?: string;
  coverImageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  relatedProjects?: string[];
};

export type BlogHeading = { id: string; text: string; level: 2 | 3 };

export type BlogPost = BlogPostMeta & {
  body: string;
  readingTime: number;
  headings: BlogHeading[];
};

const markdownFiles = import.meta.glob('../../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

const parseScalar = (value: string): string | boolean => {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  return trimmed.replace(/^(["'])(.*)\1$/, '$2');
};

const parseFrontmatter = (source: string, file: string): { meta: Record<string, unknown>; body: string } => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter in ${file}`);

  const meta: Record<string, unknown> = {};
  let activeList: string | null = null;

  for (const rawLine of match[1].split(/\r?\n/)) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith('#')) continue;
    const listItem = rawLine.match(/^\s+-\s+(.+)$/);
    if (listItem && activeList) {
      (meta[activeList] as string[]).push(String(parseScalar(listItem[1])));
      continue;
    }
    const property = rawLine.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!property) throw new Error(`Unsupported frontmatter line in ${file}: ${rawLine}`);
    const [, key, value] = property;
    if (!value.trim()) {
      meta[key] = [];
      activeList = key;
    } else {
      meta[key] = parseScalar(value);
      activeList = null;
    }
  }

  return { meta, body: match[2].trim() };
};

const requireString = (meta: Record<string, unknown>, key: string, file: string) => {
  const value = meta[key];
  if (typeof value !== 'string' || !value.trim()) throw new Error(`${file}: ${key} is required`);
  return value.trim();
};

const slugifyHeading = (value: string) =>
  value
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const plainText = (value: string) => value.replace(/<[^>]+>/g, '').replace(/[*_`~]/g, '').trim();

const extractHeadings = (body: string): BlogHeading[] => {
  const seen = new Map<string, number>();
  return body
    .split(/\r?\n/)
    .map((line) => line.match(/^(#{2,3})\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => {
      const text = plainText(match[2]);
      const baseId = slugifyHeading(text) || 'section';
      const count = seen.get(baseId) ?? 0;
      seen.set(baseId, count + 1);
      return { id: count ? `${baseId}-${count + 1}` : baseId, text, level: match[1].length as 2 | 3 };
    });
};

const createPost = (source: string, file: string): BlogPost => {
  const { meta, body } = parseFrontmatter(source, file);
  const title = requireString(meta, 'title', file);
  const slug = requireString(meta, 'slug', file);
  const description = requireString(meta, 'description', file);
  const draft = meta.draft === true;
  const publishedAt = draft && !meta.publishedAt ? '' : requireString(meta, 'publishedAt', file);
  const category = requireString(meta, 'category', file);
  if (!slugPattern.test(slug)) throw new Error(`${file}: slug must be lowercase and hyphenated`);
  if (publishedAt && (!isoDatePattern.test(publishedAt) || Number.isNaN(Date.parse(`${publishedAt}T00:00:00Z`)))) {
    throw new Error(`${file}: publishedAt must be a valid YYYY-MM-DD date`);
  }
  if (!BLOG_CATEGORIES.includes(category as BlogCategory)) throw new Error(`${file}: unsupported category ${category}`);
  if (meta.updatedAt && (typeof meta.updatedAt !== 'string' || !isoDatePattern.test(meta.updatedAt))) {
    throw new Error(`${file}: updatedAt must be YYYY-MM-DD`);
  }
  const tags = Array.isArray(meta.tags) ? meta.tags.map(String) : [];
  const headings = extractHeadings(body);
  const wordCount = body.replace(/```[\s\S]*?```/g, ' ').replace(/[#>*_`[\]()-]/g, ' ').trim().split(/\s+/).filter(Boolean).length;

  return {
    title,
    slug,
    description,
    publishedAt,
    updatedAt: typeof meta.updatedAt === 'string' ? meta.updatedAt : undefined,
    category: category as BlogCategory,
    tags,
    featured: meta.featured === true,
    draft,
    coverImage: typeof meta.coverImage === 'string' ? meta.coverImage : undefined,
    coverImageAlt: typeof meta.coverImageAlt === 'string' ? meta.coverImageAlt : undefined,
    seoTitle: typeof meta.seoTitle === 'string' ? meta.seoTitle : undefined,
    seoDescription: typeof meta.seoDescription === 'string' ? meta.seoDescription : undefined,
    relatedProjects: Array.isArray(meta.relatedProjects) ? meta.relatedProjects.map(String) : [],
    body,
    readingTime: Math.max(1, Math.ceil(wordCount / 220)),
    headings,
  };
};

const allPosts = Object.entries(markdownFiles).map(([file, source]) => createPost(source, file));
const duplicateSlugs = allPosts.map((post) => post.slug).filter((slug, index, slugs) => slugs.indexOf(slug) !== index);
if (duplicateSlugs.length) throw new Error(`Duplicate blog slug: ${duplicateSlugs.join(', ')}`);

const showDrafts = import.meta.env.DEV && new URLSearchParams(window.location.search).get('preview') === 'drafts';

export const blogPosts = allPosts
  .filter((post) => showDrafts || !post.draft)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export const getFeaturedPost = () => blogPosts.find((post) => post.featured) ?? blogPosts[0];

export const getRelatedPosts = (post: BlogPost, limit = 3) =>
  blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score:
        (candidate.category === post.category ? 10 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length * 3,
    }))
    .sort((a, b) => b.score - a.score || b.post.publishedAt.localeCompare(a.post.publishedAt))
    .slice(0, limit)
    .map(({ post: candidate }) => candidate);

export const formatBlogDate = (date: string) =>
  new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${date}T00:00:00Z`),
  );

export const categorySlug = (category: BlogCategory) =>
  category.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
