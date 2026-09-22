// Single source of truth for site-wide facts, so contact details, the
// domain, and nav structure only need updating in one place.
//
// ⚠️ PLACEHOLDER VALUES — see LAUNCH_CHECKLIST.md before going live.

export const SITE = {
  name: 'SM Global Accounting Services',
  domain: 'https://smglobalaccounting.co.in',
  ownerName: 'SM', // placeholder — confirm real named owner
  email: 'Admin@smglobalaccounting.co.in',
  phone: '+91 0000000000', // placeholder — NOT a real number
  address: 'Mumbai, India 421506', // placeholder — pincode/city need reconciling
};

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

// Testimonials and Careers are deliberately left out — no real client
// feedback or confirmed hiring status exists yet. Add them here once built.
export const FOOTER_NAV: NavLink[] = [
  { label: 'Team Structure', href: '/team-structure' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'FAQs', href: '/faqs' },
];
