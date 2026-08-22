import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { generateBlogArtifacts, loadPosts } from './scripts/blog-build.mjs';

const blogPlugin = () => ({
  name: 'portfolio-blog-build',
  async buildStart() {
    await loadPosts();
  },
  async closeBundle() {
    const count = await generateBlogArtifacts('dist');
    console.log(`Blog artifacts generated for ${count} published post${count === 1 ? '' : 's'}.`);
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), blogPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
