![Skelly Site Banner](./image.png)


# skelly-site

> A barebones, single-page marketing site skeleton for product-first builders.

Skelly Site exists to answer a simple question:

**“Can I put a clean, credible public face on my product without overthinking it?”**

If yes, good. That’s the job.

---

## What This Is

Skelly Site is a **Vite + React marketing site skeleton** intended for:

* Product landing pages
* Early-stage marketing sites
* Public-facing “what is this?” pages
* Shipping something real instead of a blank page

It is:

* Single-page by default
* Section-driven
* Easy to delete and reshape

Nothing here is sacred.

---

## What This Is (and Can Become)

Right now (v0), Skelly Site is:

* A single-page React app
* Pre-wired with common landing page sections
* Styled with Tailwind + shadcn/ui
* Theme-aware (light/dark)

It is meant to be:

* Forked
* Stripped down
* Rearranged
* Extended

If you want to:

* Delete half the sections
* Replace everything with custom markup
* Add routing later
* Turn this into a blog or docs site

Do it.

Skelly Site is a starting point, not a prescription.

---

## Tech Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS + shadcn/ui
* **Theming:** next-themes
* **Runtime:** Browser

No SSR. No CMS. No framework gravity.

---

## Page Structure

The default page is composed by stacking sections in `App.tsx`:

```tsx
<Hero />
<Problem />
<Solution />
<Benefits />
<HowItWorks />
<Features />
<WhoItsFor />
<SocialProof />
<Comparison />
<Pricing />
<FAQ />
<LeadCapture />
<Footer />
```

Each section lives in:

```
src/components/site/
```

Organized by intent, not by design system rules.

---

## Sections Philosophy

The `components/site` directory is **pure scaffolding**.

Each section:

* Is empty or minimal by default
* Has no business logic
* Exists to give you a starting shape

You are expected to:

* Edit them freely
* Delete them aggressively
* Rename them without guilt

High-conversion pages change often.
This structure is meant to keep that cheap.

---

## Local Development

```bash
npm install
npm run dev
```

Site runs at:

```
http://localhost:5173
```

---

## Styling and Layout

Skelly Site favors:

* Simple vertical flow
* Clear section boundaries
* Minimal global styles

You can:

* Replace Tailwind
* Replace shadcn
* Inline everything

The structure matters more than the tools.

---

## Philosophy (Short Version)

* Marketing pages are product surfaces
* Shipping beats perfect copy
* Structure first, polish later
* Delete before you add

Skelly Site gives you a spine.
You add the voice.

---

## When to Outgrow This

You will know it’s time when:

* You need routing or multiple pages
* SEO constraints become complex
* Content editors enter the picture
* The site stops being disposable

Until then, this is enough.

---

## Final Note ☠️

If this site feels almost too plain,
that’s intentional.

The product should do the talking.
