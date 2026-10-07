import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed via GitHub Pages to a custom domain (smglobalaccounting.co.in),
// kept in public/CNAME. Because it's a custom domain at the root, no `base`
// path is needed (unlike a project page served at github.io/<repo>/).
export default defineConfig({
  site: 'https://smglobalaccounting.co.in',
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Testimonials is hidden by client decision until there's something
      // real to show (no nav link, marked noindex) — also keep it out of
      // the sitemap so it's never handed to a crawler directly. Remove this
      // filter, along with the noindex prop and the FOOTER_NAV entry, once
      // real testimonials go live. See LAUNCH_CHECKLIST.md.
      filter: (page) => !page.includes('/testimonials'),
    }),
  ],
});
