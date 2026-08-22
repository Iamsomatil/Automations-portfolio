# Blog authoring

The blog is repository-backed. To publish an article, add a Markdown file to `content/blog`, validate it, commit it, and deploy the portfolio.

## Required frontmatter

```yaml
---
title: "Article title"
slug: "lowercase-hyphenated-slug"
description: "A concise article summary."
publishedAt: "2026-08-22"
category: "AI Automation"
tags:
  - n8n
  - APIs
draft: false
---
```

Published posts require `title`, `slug`, `description`, `publishedAt`, and `category`. Drafts may omit `publishedAt` until an exact date is approved. Slugs must be unique, lowercase, URL-safe, and hyphenated. Dates use `YYYY-MM-DD`.

Optional fields are `updatedAt`, `featured`, `draft`, `coverImage`, `coverImageAlt`, `seoTitle`, `seoDescription`, and `relatedProjects`. `relatedProjects` values must match project slugs in `src/data/portfolio.ts`.

## Supported categories

- Web Development
- AI Automation
- CRM & Integrations
- AI & Emerging Tech
- Case Studies

## Markdown support

Standard Markdown is supported, including H2/H3 headings, links, lists, blockquotes, tables, inline code, fenced code blocks, and images. Fenced code highlighting supports JavaScript, TypeScript, React/JSX/TSX, JSON, Bash, Python, SQL, YAML, HTML/XML, and CSS. H2/H3 headings receive stable anchor IDs and populate the table of contents on longer posts.

Put blog images under `public/images/blog` and reference them with root-relative paths such as `/images/blog/workflow-diagram.webp`. Always provide `coverImageAlt` for a meaningful cover image. Compress images before committing and include dimensions in authored HTML only when raw HTML is genuinely needed.

Do not publish API keys, tokens, passwords, private URLs, client credentials, or customer data. Use obvious placeholders in code examples.

## Drafts and featured posts

`draft: true` excludes a post from routes, the blog index, related posts, RSS, and the sitemap. When several posts use `featured: true`, the newest featured post is shown.

During local development only, append `?preview=drafts` to `/blog` or a draft article route to review draft content. Production builds never expose this preview mode.

## Publish and validate

1. Add or edit the Markdown file.
2. Run `npm run validate:blog`.
3. Run `npm run typecheck`, `npm run lint`, and `npm run build`.
4. Preview with `npm run preview` and check `/blog` plus the article URL.
5. Commit and deploy.

The build fails on missing required metadata, invalid dates, unsupported categories, invalid slugs, or duplicate slugs. The build also generates `sitemap.xml`, `rss.xml`, and static HTML entry points with route-specific metadata.
