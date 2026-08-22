import { access, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const SITE_URL = 'https://samakinsanya.vercel.app';
export const BLOG_CATEGORIES = ['Web Development', 'AI Automation', 'CRM & Integrations', 'AI & Emerging Tech', 'Case Studies'];

const contentDirectory = path.resolve('content/blog');
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

const xmlEscape = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const htmlEscape = (value) => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const parseScalar = (value) => {
  const trimmed = value.trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  return trimmed.replace(/^(["'])(.*)\1$/, '$2');
};

const parsePost = (source, file) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) throw new Error(`${file}: missing frontmatter`);
  const meta = {};
  let activeList = null;
  for (const rawLine of match[1].split(/\r?\n/)) {
    if (!rawLine.trim() || rawLine.trimStart().startsWith('#')) continue;
    const item = rawLine.match(/^\s+-\s+(.+)$/);
    if (item && activeList) {
      meta[activeList].push(String(parseScalar(item[1])));
      continue;
    }
    const property = rawLine.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!property) throw new Error(`${file}: unsupported frontmatter line: ${rawLine}`);
    const [, key, value] = property;
    if (!value.trim()) {
      meta[key] = [];
      activeList = key;
    } else {
      meta[key] = parseScalar(value);
      activeList = null;
    }
  }
  for (const key of ['title', 'slug', 'description', 'category']) {
    if (typeof meta[key] !== 'string' || !meta[key].trim()) throw new Error(`${file}: ${key} is required`);
  }
  if (meta.draft !== true && (typeof meta.publishedAt !== 'string' || !meta.publishedAt.trim())) throw new Error(`${file}: publishedAt is required for published posts`);
  if (!slugPattern.test(meta.slug)) throw new Error(`${file}: slug must be lowercase and hyphenated`);
  if (meta.publishedAt && (!isoDatePattern.test(meta.publishedAt) || Number.isNaN(Date.parse(`${meta.publishedAt}T00:00:00Z`)))) throw new Error(`${file}: invalid publishedAt date`);
  if (meta.updatedAt && (!isoDatePattern.test(meta.updatedAt) || Number.isNaN(Date.parse(`${meta.updatedAt}T00:00:00Z`)))) throw new Error(`${file}: invalid updatedAt date`);
  if (!BLOG_CATEGORIES.includes(meta.category)) throw new Error(`${file}: unsupported category ${meta.category}`);
  if (/\[\^[^\]]+\]/.test(match[2])) throw new Error(`${file}: unsupported Markdown footnote syntax must be converted to normal links`);
  for (const forbiddenHeading of ['Article Strategy', 'SEO Metadata', 'Visual Recommendations', 'Internal Linking', 'Portfolio connection', 'Social Distribution', 'Week 1 Publishing Notes']) {
    if (new RegExp(`^#{1,6}\\s+${forbiddenHeading}$`, 'mi').test(match[2])) throw new Error(`${file}: editorial heading leaked into public article: ${forbiddenHeading}`);
  }
  return { ...meta, file, body: match[2].trim() };
};

export const loadPosts = async () => {
  const files = (await readdir(contentDirectory)).filter((file) => file.endsWith('.md')).sort();
  const posts = await Promise.all(files.map(async (file) => parsePost(await readFile(path.join(contentDirectory, file), 'utf8'), file)));
  const seen = new Set();
  for (const post of posts) {
    if (seen.has(post.slug)) throw new Error(`Duplicate blog slug: ${post.slug}`);
    seen.add(post.slug);
    if (post.coverImage) {
      if (typeof post.coverImage !== 'string' || !post.coverImage.startsWith('/')) throw new Error(`${post.file}: coverImage must be a root-relative public path`);
      if (typeof post.coverImageAlt !== 'string' || !post.coverImageAlt.trim()) throw new Error(`${post.file}: coverImageAlt is required when coverImage is set`);
      try {
        await access(path.resolve('public', post.coverImage.slice(1)));
      } catch {
        throw new Error(`${post.file}: coverImage does not exist at public${post.coverImage}`);
      }
    }
  }
  return posts.filter((post) => post.draft !== true).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
};

const replaceTag = (html, pattern, replacement) => pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `    ${replacement}\n  </head>`);

const pageHtml = (template, { title, description, url, type = 'website', image = `${SITE_URL}/samson-avatar.jpg`, jsonLd }) => {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${htmlEscape(title)}</title>`);
  html = replaceTag(html, /<meta\s+name="description"[\s\S]*?>/i, `<meta name="description" content="${htmlEscape(description)}" />`);
  html = replaceTag(html, /<meta\s+property="og:type"[\s\S]*?>/i, `<meta property="og:type" content="${type}" />`);
  html = replaceTag(html, /<meta\s+property="og:url"[\s\S]*?>/i, `<meta property="og:url" content="${url}" />`);
  html = replaceTag(html, /<meta\s+property="og:title"[\s\S]*?>/i, `<meta property="og:title" content="${htmlEscape(title)}" />`);
  html = replaceTag(html, /<meta\s+property="og:description"[\s\S]*?>/i, `<meta property="og:description" content="${htmlEscape(description)}" />`);
  html = replaceTag(html, /<meta\s+property="og:image"[\s\S]*?>/i, `<meta property="og:image" content="${image}" />`);
  html = replaceTag(html, /<meta\s+(?:property|name)="twitter:url"[\s\S]*?>/i, `<meta name="twitter:url" content="${url}" />`);
  html = replaceTag(html, /<meta\s+(?:property|name)="twitter:title"[\s\S]*?>/i, `<meta name="twitter:title" content="${htmlEscape(title)}" />`);
  html = replaceTag(html, /<meta\s+(?:property|name)="twitter:description"[\s\S]*?>/i, `<meta name="twitter:description" content="${htmlEscape(description)}" />`);
  html = replaceTag(html, /<meta\s+(?:property|name)="twitter:image"[\s\S]*?>/i, `<meta name="twitter:image" content="${image}" />`);
  html = replaceTag(html, /<link\s+rel="canonical"[\s\S]*?>/i, `<link rel="canonical" href="${url}" />`);
  if (jsonLd) html = html.replace('</head>', `    <script id="page-json-ld" type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>\n  </head>`);
  return html;
};

const writeRoute = async (outDir, route, html) => {
  const directory = path.join(outDir, route.replace(/^\//, ''));
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), html);
};

export const generateBlogArtifacts = async (outDir = 'dist') => {
  const posts = await loadPosts();
  const template = await readFile(path.join(outDir, 'index.html'), 'utf8');
  const lastModified = posts[0]?.updatedAt ?? posts[0]?.publishedAt ?? new Date().toISOString().slice(0, 10);
  const sitemapEntries = [
    { path: '/', lastmod: lastModified },
    { path: '/blog', lastmod: lastModified },
    ...posts.map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.updatedAt ?? post.publishedAt })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.map((entry) => `  <url><loc>${xmlEscape(`${SITE_URL}${entry.path}`)}</loc><lastmod>${entry.lastmod}</lastmod></url>`).join('\n')}\n</urlset>\n`;
  await writeFile(path.join(outDir, 'sitemap.xml'), sitemap);

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Samson Akinsanya Technical Blog</title><link>${SITE_URL}/blog</link><description>Writing on web development, AI automation, CRM integrations, and connected systems.</description>${posts.map((post) => `<item><title>${xmlEscape(post.title)}</title><link>${SITE_URL}/blog/${post.slug}</link><guid>${SITE_URL}/blog/${post.slug}</guid><description>${xmlEscape(post.description)}</description><pubDate>${new Date(`${post.publishedAt}T00:00:00Z`).toUTCString()}</pubDate><category>${xmlEscape(post.category)}</category></item>`).join('')}</channel></rss>\n`;
  await writeFile(path.join(outDir, 'rss.xml'), rss);

  await writeRoute(outDir, '/blog', pageHtml(template, {
    title: 'Technical Blog | Samson Akinsanya',
    description: 'Technical writing on web development, AI automation, CRM integrations, workflow architecture, and dependable connected systems.',
    url: `${SITE_URL}/blog`,
  }));
  for (const post of posts) {
    const url = `${SITE_URL}/blog/${post.slug}`;
    const image = post.coverImage ? new URL(post.coverImage, SITE_URL).toString() : `${SITE_URL}/samson-avatar.jpg`;
    await writeRoute(outDir, `/blog/${post.slug}`, pageHtml(template, {
      title: post.seoTitle ?? post.title,
      description: post.seoDescription ?? post.description,
      url,
      type: 'article',
      image,
      jsonLd: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.seoDescription ?? post.description, author: { '@type': 'Person', name: 'Samson Akinsanya', url: SITE_URL }, datePublished: post.publishedAt, dateModified: post.updatedAt ?? post.publishedAt, mainEntityOfPage: url, ...(post.coverImage ? { image } : {}) },
    }));
  }
  return posts.length;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const posts = await loadPosts();
  console.log(`Blog content valid: ${posts.length} published post${posts.length === 1 ? '' : 's'}`);
}
