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
  phone: string;
  address: string;
} = siteData;

export type NavLink = { label: string; href: string };

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Team Specialisation', href: '/team-specialisation' },
  { label: 'Data Security', href: '/data-security' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV: NavLink[] = [
  { label: 'Team Structure', href: '/team-structure' },
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
