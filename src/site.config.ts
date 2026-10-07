// Single source of truth for site-wide facts, so contact details, the
// domain, and nav structure only need updating in one place.
//
// Real business details confirmed 23 Sep 2026 — see LAUNCH_CHECKLIST.md.
//
// The actual values live in src/data/site.json, not here, so the site's
// CMS (see public/admin/) can edit them without touching code — this file
// just re-exports them with a type, so every page's `import { SITE }`
// keeps working unchanged.
import siteData from './data/site.json';

export const SITE: {
  name: string;
  domain: string;
  ownerName: string;
  email: string;
  emailInfo: string;
  // Optional. Left blank on purpose: the main clients are UK-based, so no
  // Indian number is shown. Fill it in (via the CMS) only if a UK/international
  // number is added later — footer, Contact page and schema all pick it up.
  phone: string;
  address: string;
  // Where every "Book a Free Consultation" style CTA points. Defaults to the
  // contact page; swap in a Calendly/TidyCal link here (via the CMS, no code
  // change needed) once one exists, and every button site-wide updates.
  bookingUrl: string;
  // LinkedIn company page URL. Left blank until the page exists — the
  // footer's social icon only renders once this is set, so nothing links
  // anywhere until it's real.
  linkedin: string;
  // Cloudflare Web Analytics site token (free, cookie-free — no GDPR consent
  // banner needed). Left blank until someone adds the site in the Cloudflare
  // dashboard and pastes the token here; the tracking beacon only loads once
  // this is set, so nothing is tracked until it's deliberately turned on.
  cloudflareAnalyticsToken: string;
} = siteData;

// Derived once from SITE.phone so every tel: link (Footer, Contact page)
// uses the exact same digit-only format instead of each caller
// re-implementing the same regex against the same source value.
export const SITE_PHONE_HREF = SITE.phone ? `tel:${SITE.phone.replace(/[^+\d]/g, '')}` : '';

export type NavLink = { label: string; href: string };

// Top-of-page navigation: six plain links, no dropdowns (a dropdown hides pages
// from visitors). Team Structure, Team Specialisation, Industries, Careers and
// FAQs live in the footer; Team Specialisation is also linked from the About page.
export const PRIMARY_NAV: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Data Security', href: '/data-security' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV: NavLink[] = [
  { label: 'Team Structure', href: '/team-structure' },
  { label: 'Team Specialisation', href: '/team-specialisation' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Careers', href: '/careers' },
  { label: 'FAQs', href: '/faqs' },
];

// Small-print legal row at the very bottom of the footer. Both pages are
// drafted templates — see the placeholder-note on each page and
// LAUNCH_CHECKLIST.md before treating them as final, reviewed legal text.
export const LEGAL_NAV: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];
