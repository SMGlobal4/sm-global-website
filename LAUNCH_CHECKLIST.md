# Launch Checklist

Everything below is a known placeholder or open item in the site as built. Nothing here was
invented to look finished — each one is flagged in the code too (search for "placeholder" or
`TODO`). Work through this before the site goes live on smglobalaccounting.co.in.

## Must fix before launch

- [ ] **Real phone number** — `src/site.config.ts` (`SITE.phone`) currently holds a placeholder,
      not a working number.
- [ ] **Real office address** — `src/site.config.ts` (`SITE.address`) — current value has a
      city/pincode mismatch and needs a real, confirmed address.
- [ ] **Named owner** — `src/site.config.ts` (`SITE.ownerName`) is just "SM" for now.
- [ ] **Working contact method** — the Contact page currently only offers a `mailto:` link. Wire
      up a real contact form (Formspree/Web3Forms) and a booking calendar link (Calendly/TidyCal)
      before launch, and disclose in the Privacy Policy that these are US-based services if used.
- [ ] **Privacy Policy & Terms** — not built yet. Needed for GDPR/UK PECR cookie-consent
      compliance and referenced from the Data Security page. Don't fabricate legal text — get
      this reviewed properly.
- [ ] **BNC heads-up** — give BNC an informal heads-up before publishing the anonymized case-study
      language (Home, Industries We Serve) and the sector list, since it's built from their client
      relationship.

## Should do before launch

- [ ] **Testimonials page** — intentionally not built. Add once real, permissioned client
      quotes exist. Do not fabricate quotes.
- [ ] **Careers page** — intentionally not built. Add once hiring status and real open roles
      (or a genuine "always hiring" message) are confirmed.
- [ ] **FAQ placeholders** — two answers in `src/pages/faqs.astro` (pricing structure, turnaround
      time) are reasonable defaults, not confirmed figures. Marked inline with a "confirm and
      update" note.
- [ ] **Data Security claims** — a couple of specific physical-security claims from the original
      draft (biometric office access, disabled USB ports, an exact encryption standard) were left
      out until confirmed true for the current setup.
- [ ] **About page** — founding story and named leadership bios left out; add once confirmed.
- [ ] **Validate positioning** against 3–5 more competitors (open item from the strategy doc).
- [ ] **Favicon/logo** — currently a plain "SM" monogram placeholder (`public/favicon.svg`).
      Swap for a real logo if one exists.
- [ ] **Analytics** — none wired up. Add privacy-respecting analytics (e.g. Plausible or GA4 with
      consent gating) and update the Privacy Policy accordingly.
- [ ] **Cookie consent banner** — required once any non-essential cookie (analytics, embedded
      booking widget) is added.

## Technical

- [ ] Run `npm run build` locally (or let CI do it) and fix any Astro/TypeScript errors before
      merging to `main` — the deploy workflow only runs on pushes to `main`.
- [ ] Confirm the domain's DNS points at GitHub Pages (A/AAAA records or CNAME per GitHub's docs)
      to match the `public/CNAME` file, and enable "Enforce HTTPS" in repo Settings → Pages once
      the certificate is issued.
- [ ] Add a trusted second GitHub collaborator (mentioned as a next step in the strategy doc).
