# Setting Up the Content Editor (CMS) — One-Time Setup

This site now has a real content editor built in: a page at `/admin/` where
someone who isn't a developer can log in with their GitHub account and edit
the site's contact details, services, industries and FAQs — save, and the
site rebuilds and goes live automatically, the same way any other code
change does.

**Cost: £0/month, forever**, at any traffic level this site is realistically
going to see. Nothing here is a trial or a "free tier that starts charging
later" — every piece is either open source running in your own browser, or
a cloud service whose free allowance (Cloudflare Workers: 100,000 requests
a day) is far beyond what a handful of people editing a small site will
ever use.

## What's already done (nothing left for me to build)

- `src/data/site.json`, `src/data/services/*.json`, `src/data/industries/*.json`,
  and `src/data/faqs.json` — the site's editable content, pulled out of
  `.astro` page code into plain data files that both the site *and* the
  editor can read.
- `public/admin/index.html` and `public/admin/config.yml` — the editor
  itself (Sveltia CMS, MIT-licensed, free and open source, loaded from a
  public CDN — nothing to install).
- Every page (`services.astro`, `industries.astro`, `faqs.astro`,
  `site.config.ts`) already reads from these data files, so editing them
  through the CMS is exactly the same as editing them in code — the CMS
  just does it through a form instead of a text editor.

## What's left — and it genuinely needs you (or whoever holds these accounts)

Editing a real GitHub repository requires proving you're allowed to —
that's not something I can do on your behalf without access to actual
account credentials, which I don't have and shouldn't ask you to hand
over. Everything below is copy-paste and clicking buttons, no coding, and
should take about 15–20 minutes total.

### Step 0 — ✅ Done: `SMGlobal4/sm-global-website`

This is already sorted — the code is pushed to
`github.com/SMGlobal4/sm-global-website` (private repo, `main` branch), and
the GitHub Actions deploy workflow already ran successfully (visible under
the repo's **Deployments** as `github-pages`). `config.yml` below has
already been updated with this repo name, so nothing further is needed
here. Just double-check, under the repo's **Settings → Pages**, that the
custom domain is set to `smglobalaccounting.co.in` (to match
`public/CNAME`) and that "Enforce HTTPS" is ticked once the certificate is
issued.

### Step 1 — Create a free GitHub OAuth App

This is what lets the CMS ask "log in with GitHub" instead of needing its
own separate username/password system.

1. Go to <https://github.com/settings/applications/new> (while logged into
   the GitHub account/org that owns the repo).
2. Fill in:
   - **Application name:** `SM Global Accounting Services CMS` (or anything recognisable)
   - **Homepage URL:** `https://smglobalaccounting.co.in`
   - **Authorization callback URL:** leave a placeholder for now — you'll
     get the real value in Step 2 and come back to edit this field.
3. Click **Register application**.
4. Copy the **Client ID**, and click **Generate a new client secret** and
   copy that too. Keep both somewhere safe — you'll need them in Step 3.

### Step 2 — Deploy the free authentication proxy (Cloudflare Workers)

GitHub's login flow needs a small server in the middle to complete
securely — it can't happen entirely inside the browser. This is a tiny,
official, purpose-built piece of open-source code
(`sveltia-cms-auth`) that does only this one job, hosted on Cloudflare's
free tier.

1. Go to <https://dash.cloudflare.com/sign-up> and create a free account,
   if you don't already have one (just an email address — no card needed
   for the Workers free tier).
2. Click this deploy button:
   <https://deploy.workers.cloudflare.com/?url=https://github.com/sveltia/sveltia-cms-auth>
   — it clones the project straight into your Cloudflare account and
   deploys it.
3. ✅ Done — the Worker is deployed and its public URL enabled:
   `https://sveltia-cms-auth.purple-dust-eb4e.workers.dev`. `config.yml`
   below has already been updated with this value.
4. Still needed: go back to the GitHub OAuth App from Step 1 (Settings →
   Developer settings → OAuth Apps → SM Global Accounting Services CMS)
   and change its **Authorization callback URL** (shown there as "Redirect
   URI") from the placeholder to:
   `https://sveltia-cms-auth.purple-dust-eb4e.workers.dev/callback`
   — then save.

### Step 3 — Connect the two together

In the Cloudflare dashboard, open the Worker → **Settings → Variables**,
and add:

| Variable | Value |
|---|---|
| `GITHUB_CLIENT_ID` | the Client ID from Step 1 |
| `GITHUB_CLIENT_SECRET` | the Client Secret from Step 1 (click "Encrypt") |
| `ALLOWED_DOMAINS` | `smglobalaccounting.co.in` |

`ALLOWED_DOMAINS` matters — without it, anyone who found your Worker's URL
could point their own site at it. Setting it to your real domain closes
that off.

### Step 4 — Point the CMS at your real values

Edit `public/admin/config.yml` in the repo (either directly on github.com,
or locally and push) and replace the two placeholder lines:

```yaml
backend:
  name: github
  repo: SMGlobal4/sm-global-website   # already set — this is done
  branch: main
  base_url: https://sveltia-cms-auth.purple-dust-eb4e.workers.dev   # already set — this is done too
```

Both values are already filled in — nothing left to edit in this file.
This step is done; it's left here for reference only.

### Step 5 — Try it

Visit `https://smglobalaccounting.co.in/admin/`, click "Login with GitHub",
authorise the OAuth App the first time, and you should see the content
editor with four sections: **Site Settings**, **Services**, **Industries We
Serve**, and **FAQs**. Change something small first (a phone digit, a
sentence) and confirm it appears live on the site within a minute or two
of saving — that's the whole loop working end to end.

## Giving someone else access

Anyone who needs to edit content just needs **write (or admin) access to
the GitHub repository** — add them as a collaborator under the repo's
**Settings → Collaborators**. They log into the CMS with their own GitHub
account; there's no separate CMS password to manage or lose. This does
mean each editor needs a GitHub account (free to create), which is the
trade-off for this being free and maintenance-free — a fully separate
branded login system is possible but would mean paying for a proper
authentication service instead.

## What's *not* covered by this CMS yet

The About page's story and team sections, Testimonials, Careers, and the
Team Structure/Specialisation pages are still hand-coded content, not yet
pulled into editable data files — they change far less often and mix
narrative prose with structure in a way that's harder to turn into clean
form fields. If ongoing editing needs extend to those, the same pattern
used here (a JSON file + a config.yml entry) can be repeated for them.
