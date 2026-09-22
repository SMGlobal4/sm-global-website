import { defineConfig } from 'astro/config';

// Deployed via GitHub Pages to a custom domain (smglobalaccounting.co.in),
// kept in public/CNAME. Because it's a custom domain at the root, no `base`
// path is needed (unlike a project page served at github.io/<repo>/).
export default defineConfig({
  site: 'https://smglobalaccounting.co.in',
  output: 'static',
  trailingSlash: 'never',
});
