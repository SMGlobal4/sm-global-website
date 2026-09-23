# Launch Checklist

Everything below is a known placeholder or open item in the site as built. Nothing here was
invented to look finished — each one is flagged in the code too (search for "placeholder" or
`TODO`). Work through this before the site goes live on smglobalaccounting.co.in.

## Must fix before launch

- [x] **Real phone number** — `src/site.config.ts` (`SITE.phone`) now holds a real, confirmed
      number.
- [x] **Real office address** — `src/site.config.ts` (`SITE.address`) now holds a real, confirmed
      address.
- [x] **Named owner** — `src/site.config.ts` (`SITE.ownerName`) now holds a real confirmed name.
      (Kept short by request; expand to a full name on the site only if/when the owner wants more
      shown publicly.)
- [ ] **Working contact method** — partially resolved. The Contact page now has a real POST form
      (`src/pages/contact.astro`) processed by FormSubmit (formsubmit.co) — no account or backend of
      our own needed, submissions forward straight to `SITE.email`, with a honeypot field for basic
      spam protection and a "Thanks, we got it" confirmation banner on return. **Action needed before
      this can be trusted live:** submit the form once for real, then check `Admin@smglobalaccounting.co.in`
      for FormSubmit's one-time activation email and click confirm — until that happens, submissions
      silently go nowhere. Still outstanding: a real booking-calendar link (Calendly/TidyCal) — "Book a
      Free Consultation" currently just points to this Contact page, not an actual calendar.
- [ ] **Privacy Policy & Terms** — drafted as starting templates (`src/pages/privacy-policy.astro`,
      `src/pages/terms.astro`), linked from Data Security and the footer, but NOT reviewed by a
      solicitor and NOT ready to publish as final. FormSubmit is now named as the contact-form
      processor in section 7 (see above), but its own data-processing location/retention still needs
      confirming against FormSubmit's privacy policy, and a booking-tool processor needs adding once
      one exists. Other open items inside them, each marked `[bracketed]`: the international data
      transfer safeguard (India ↔ UK/EU), the governing law choice for the site's terms, the data
      retention period, and the legal entity name/registration details. Needed for GDPR/UK PECR
      cookie-consent compliance either way.
- [ ] **Client anonymity is a permanent policy, not just a launch gate** — the client relationship
      behind the case-study language (Home, About Us, Industries We Serve), the sector list, and the
      client-count/geography detail (About Us: "~120–130 clients... UK, US, UAE and beyond") is never
      named anywhere on the site, in code, comments or filenames — confirmed by a full source search
      returning zero matches, and re-checked after every content change. Still give the client an
      informal heads-up that an anonymized description of the relationship appears publicly, since
      the underlying facts (headcount, client count, sectors) are built from real work done for them.

## Should do before launch

- [ ] **Testimonials page** — page shell now built (`src/pages/testimonials.astro`, linked in the
      footer) but intentionally carries no quotes yet. Add real, permissioned client feedback once
      a practice agrees to be quoted. Do not fabricate quotes.
- [ ] **Careers page** — page shell now built (`src/pages/careers.astro`, linked in the footer)
      with the generic "always happy to hear from experienced bookkeepers/accountants, email your
      CV" fallback routed to the general enquiries inbox. Replace with real listed vacancies, and
      consider a dedicated careers@ alias, once hiring volume warrants it.
- [ ] **FAQ placeholders** — two answers in `src/pages/faqs.astro` (pricing structure, turnaround
      time) are reasonable defaults, not confirmed figures. Marked inline with a "confirm and
      update" note.
- [ ] **Data Security claims** — a couple of specific physical-security claims from the original
      draft (biometric office access, disabled USB ports, an exact encryption standard) were left
      out until confirmed true for the current setup.
- [x] **About page team headcount vs. Team Structure page** — resolved by decision, not by picking a
      number: the client chose to keep headcount as a soft phrase ("a small team" / "a lean team")
      everywhere rather than commit to an exact figure, since About Us's "grown from one person"
      story and Team Structure's role-group breakdown didn't agree on a total. Team Structure's role
      cards were reworded ("this group" / "another group") so they no longer imply a specific count.
      If a firm total is ever wanted publicly (e.g. for the new homepage stats band), confirm it first
      and update both pages together.
- [x] **Competitor research** — checked Whiz Consulting, QX Accounting Services, and Unison Globus
      (all UK/US-facing accounting outsourcing firms with India-based delivery, alongside the earlier
      Stellaripe audit in the project master doc). Findings and what we borrowed/rejected:
      - Larger players (QX, Unison Globus) lean hard on third-party certifications (ISO 27001, SOC 2)
        as trust signals — we can't claim those yet, but **Cyber Essentials** (a UK government-backed
        scheme, realistic for a 10-person firm) would be a genuine, attainable equivalent worth
        pursuing operationally, then adding to the Data Security page once actually certified. Not
        something to fake on the site in the meantime.
      - All three keep pricing vague and route to a consultation call rather than published rates —
        confirms our existing approach (no pricing shown, "Book a Free Consultation") is already
        aligned with the category norm; no change made.
      - QX presents team members as role-based summaries rather than named individual profiles,
        which matches the approach already used on About Us's "Meet the Team" — no change needed,
        just confirms it's a sound pattern at this stage (no fabricated names).
      - QX's case-study format (Challenge → What We Did → Result) was adapted into the homepage's
        "Proof, Not Just a Pitch" section, using only already-confirmed facts — no invented metrics
        like QX's "300% revenue growth" claim, since we don't have a comparable real number.
      - FAQ page grouped into three categories (Working With Us / Data & Security / Pricing & Team),
        mirroring how QX organizes a much longer FAQ list — ours had grown to 12 flat items.
      - Not pursued: a blog/resources hub (all three larger competitors run one) — this is a real,
        ongoing content-marketing commitment, not a one-off page; worth a separate decision on
        whether we have the capacity to keep it fed before building it.
      - Also checked a live UK accountancy-practice site (client-facing, not an outsourcing peer) for
        its confident, numbers-led positioning style ("20 years' experience," a four-point "Why Us"
        block, personal founder story, "Book a Free Consultation" CTA). Most of that pattern was
        already present on this site; the one genuine gap it surfaced was a quantified proof strip —
        added to the homepage just below the hero (founding year, client count, geography, full
        lifecycle) using only already-confirmed facts, deliberately without a team-size figure per
        the headcount decision above. Not adopted from it: a newsletter signup (no email tool wired
        up to send anything through), Trustpilot/video social proof, and a client portal login — all
        suited to a firm selling directly to end clients, which isn't this business's model.
- [x] **Favicon/logo** — replaced the low-contrast placeholder with an original gradient "SM"
      badge (`public/favicon.svg`), also used in the header and footer, built in-house rather than
      sourced from a third-party "free logo" site to avoid any trademark/copyright risk. If the firm
      later commissions a proper brand identity, swap this out — it was designed to be functional and
      on-brand, not a substitute for professional branding work.
- [ ] **CMS / editability** — the code-side work is done, but going live needs one-time account
      setup only the client can do. What's finished: the site's editable content (contact details,
      services, industries, FAQs) was pulled out of hardcoded `.astro`/`.ts` files into plain JSON
      data files (`src/data/site.json`, `src/data/services/*.json`, `src/data/industries/*.json`,
      `src/data/faqs.json`); a free, open-source content editor (Sveltia CMS, MIT-licensed, loaded
      from a public CDN — no install, no hosting of our own) was added at `public/admin/`, wired to
      those data files via `public/admin/config.yml`. Chosen specifically to cost **£0/month
      permanently** and to need no migration off GitHub Pages — the alternative (Netlify/Decap CMS)
      would have meant moving hosting. Step 0 (a real GitHub repository) is now done — the code lives
      at `github.com/SMGlobal4/sm-global-website` and GitHub Actions has already deployed it once —
      and `config.yml` has been updated with that repo name. What's still blocked on the client: a
      free GitHub OAuth App (Step 1) and a free Cloudflare Worker for the login handshake (Step 2,
      ~100k requests/day free tier — nowhere close to being hit by a small editing team) — documented
      step-by-step, with exact copy-paste commands and URLs, in `ADMIN_SETUP.md` at the project root.
      None of this requires coding, and it's a one-time ~10–15 minute setup, not an ongoing task. Not yet covered
      by the CMS: About page story/team sections, Testimonials, Careers, Team Structure/Specialisation
      — narrative-heavy pages that change rarely; can be added later with the same JSON-file pattern
      if needed.
- [ ] **Analytics** — none wired up. Add privacy-respecting analytics (e.g. Plausible or GA4 with
      consent gating) and update the Privacy Policy accordingly.
- [ ] **Cookie consent banner** — required once any non-essential cookie (analytics, embedded
      booking widget) is added.
- [x] **Animation / motion research** — checked two direct international analogs (Pilot.com and
      Bench.co, both outsourced-bookkeeping-as-a-service, the closest business-model match found so
      far) plus current tooling. Findings:
      - Neither leans on flashy animation — both favour "functional minimalism": clear hierarchy,
        trust-signal numbers, testimonial/Trustpilot proof, tabbed content. Confirms the category
        norm for this kind of B2B service site is restraint, not motion-heavy design; a heavily
        animated site would work against the "steady, dependable back office" positioning.
      - Checked current animation tooling on GitHub: AOS (28k★) is a popular scroll-animation
        library but its docs don't mention `prefers-reduced-motion` support and its current release
        branch is unclear; Motion (formerly Framer Motion) is well-maintained and lightweight but
        still an added dependency (and extra JS weight) for something this simple.
      - Decision: skip both libraries. Implemented a small (~20 line), dependency-free scroll-reveal
        directly in `BaseLayout.astro` — a subtle fade/slide-up on `.lead` paragraphs and the
        homepage stat cards as they enter the viewport. It's fully progressive-enhancement safe:
        content is normal and fully visible with JavaScript disabled, if the script fails for any
        reason, or when the visitor's system has "reduce motion" set — the hidden/animated state
        only ever applies when JS ran successfully AND motion is allowed. Adds no external
        dependency, no network request, and negligible weight, so it shouldn't move the Lighthouse
        performance score.
      - Not pursued: page-transition animation, parallax, video backgrounds, or an animated stat
        counter (the client stat is a range, "120–130" — counting up to a range reads as fake
        precision, so it was left as a static reveal instead of a ticking number).
- [x] **SEO foundation** — added the official `@astrojs/sitemap` integration
      (`astro.config.mjs`); `sitemap-index.xml` now generates on every build and `robots.txt`
      already pointed at it. Added `AccountingService` JSON-LD structured data to
      `BaseLayout.astro`, built from the same `site.config.ts` facts as the rest of the site (name,
      URL, email, phone, address, and the UK/US/UAE `areaServed` already stated elsewhere on the
      site) so it can't drift out of sync. Still outstanding: submitting the sitemap to Google
      Search Console once the site is actually live at the real domain (can't be done from a
      preview), and the Lighthouse performance/accessibility/best-practices/SEO audit itself.
- [x] **Automated QA pass** — ran what can actually be checked without a live deployment or a
      real browser lab:
      - Internal link check: all 289 internal `href`s across all 15 pages resolve to a real page —
        zero broken links.
      - Automated accessibility audit (axe-core via Playwright, WCAG 2A/2AA + best-practice rules)
        on all 15 pages: found and fixed two real, recurring issues — several pages jumped straight
        from `<h1>` to `<h3>` with no `<h2>` in between (added a proper section heading to each,
        visually hidden on the Contact page where a visible one would have been redundant), and
        several inline links inside paragraph text (mailto links, cross-page references) relied on
        colour alone to read as links (added an underline to links inside body copy sitewide,
        leaving nav/footer/button links, which already have their own visual treatment, untouched).
        Re-ran after fixing: zero violations across all 15 pages.
      - Still outstanding, and can't be done from here: real cross-browser/cross-device testing
        (Chrome, Safari, Firefox; mobile/tablet/desktop) and a live Lighthouse run against the
        deployed site — automated static checks are a real start, not a substitute for those.

## Technical

- [ ] Run `npm run build` locally (or let CI do it) and fix any Astro/TypeScript errors before
      merging to `main` — the deploy workflow only runs on pushes to `main`.
- [ ] Confirm the domain's DNS points at GitHub Pages (A/AAAA records or CNAME per GitHub's docs)
      to match the `public/CNAME` file, and enable "Enforce HTTPS" in repo Settings → Pages once
      the certificate is issued.
- [ ] Add a trusted second GitHub collaborator (mentioned as a next step in the strategy doc).
