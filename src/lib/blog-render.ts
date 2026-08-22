import { Marked, Renderer } from 'marked';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import type { BlogHeading } from './blog';

const slugifyHeading = (value: string) => value.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const plainText = (value: string) => value.replace(/<[^>]+>/g, '').replace(/[*_`~]/g, '').trim();
const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('jsx', javascript);
hljs.registerLanguage('python', python);
hljs.registerLanguage('py', python);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('tsx', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('yml', yaml);

export const renderBlogMarkdown = (body: string, headings: BlogHeading[]) => {
  const renderer = new Renderer();
  let headingIndex = 0;
  renderer.heading = (text, level) => {
    const heading = level === 2 || level === 3 ? headings[headingIndex++] : undefined;
    const id = heading?.id ?? slugifyHeading(plainText(text));
    return `<h${level}${id ? ` id="${id}"` : ''}>${text}</h${level}>`;
  };
  renderer.code = (code, language) => {
    const requestedLanguage = language?.trim().toLowerCase().split(/\s+/)[0] ?? '';
    const supportedLanguage = requestedLanguage && hljs.getLanguage(requestedLanguage) ? requestedLanguage : '';
    const highlighted = supportedLanguage ? hljs.highlight(code, { language: supportedLanguage, ignoreIllegals: true }).value : escapeHtml(code);
    const label = supportedLanguage || 'text';
    return `<div class="blog-code"><div class="blog-code__toolbar"><span>${escapeHtml(label)}</span><button type="button" data-copy-code aria-label="Copy ${escapeHtml(label)} code">Copy</button></div><pre><code class="hljs language-${escapeHtml(label)}">${highlighted}</code></pre></div>`;
  };
  return new Marked({ gfm: true, breaks: false, renderer }).parse(body) as string;
};
