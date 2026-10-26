# Website for Sai Drishti Eye Care & Optics, Baddi

A multi-page marketing website for the eye clinic and optical boutique, built with
the project's existing TanStack Start + Tailwind v4 setup. No database needed —
appointments work through WhatsApp links, so no backend is required.

## Design direction

- Palette (custom, defined in `src/styles.css` as oklch tokens):
  deep teal-navy base, teal accents, warm gold highlights for the optical
  boutique, soft cream background. Fully themed light mode; dark-mode safe.
- Typography: Libre Baskerville for headings, IBM Plex Sans for body —
  loaded via Google Fonts `<link>` tags in `src/routes/__root.tsx`.
- Homepage layout: hero banner + service card grid (your choice).

## Pages (each with its own title, description, og tags)

1. `/` — Home
   - Hero: clinic name, "Free eye test — glasses ready in 10–20 minutes",
     two buttons: "Book on WhatsApp" + "View services". Hero image generated
     to match the palette (modern optical clinic interior).
   - Trust strip: 4.9★ rating (260 reviews), serving Baddi since 2012.
   - Services grid: computerized eye testing, pediatric eye care, contact
     lens clinic, optical boutique.
   - "Why patients choose us" section + short patient testimonials (from
     the reviews you shared).
   - Closing call-to-action banner with WhatsApp booking button.
2. `/services` — Detailed description of each service, with images.
3. `/lens-prices` — Lens packages and frame brands section (Ray-Ban, Cartier,
   Prada mentioned as available brands), transparent-pricing messaging.
4. `/about` — Clinic story since 2012, Dr. Umesh Dada, patient reviews.
5. `/contact` — Address (Homeland City Mall, Sai Road, Baddi, HP), embedded
   Google Map, opening hours, phone + WhatsApp buttons.

## WhatsApp booking

- Floating WhatsApp button on every page.
- "Book appointment" buttons open `wa.me` with a pre-filled message like
  "Hi, I'd like to book an eye test appointment." — no forms, no backend.

## What I need from you (one thing)

- **The clinic's WhatsApp/phone number.** I will not invent one. Until you
  share it, buttons will use a clearly marked placeholder and I'll remind you
  to send the real number before publishing. Same for exact lens prices: the
  pricing page will use sensible placeholder tiers you can correct later.

## Verification

- Check the build log after edits, then load each page in a browser
  (Playwright) to confirm layout, links, and the WhatsApp buttons work.
