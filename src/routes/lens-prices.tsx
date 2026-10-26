import { createFileRoute, Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site-header";

export const Route = createFileRoute("/lens-prices")({
  head: () => ({
    meta: [
      {
        title:
          "Lens Prices & Frame Brands — Sai Drishti Eye Care & Optics, Mohali",
      },
      {
        name: "description",
        content:
          "Transparent lens and frame pricing at Sai Drishti Eye Care & Optics, Mohali. Free eye testing with every visit. Premium frames from Ray-Ban, Cartier, Prada and more.",
      },
      {
        property: "og:title",
        content: "Lens Prices & Frame Brands — Sai Drishti Eye Care & Optics",
      },
      {
        property: "og:description",
        content:
          "Transparent pricing, premium brands and free eye testing. Ask us for an exact quote on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LensPrices,
});

// PLACEHOLDER PRICING — indicative tiers only. Replace with the clinic's real
// price ranges once confirmed; the CTA on each card already routes customers
// to WhatsApp for the exact live quote.
const LENS_PACKAGES = [
  {
    name: "Single Vision Basic",
    for: "Everyday distance or reading glasses",
    price: "Starting around ₹500–₹800*",
    features: [
      "Clear single-vision lenses",
      "Scratch-resistant coating",
      "Ready in 10–20 minutes",
    ],
  },
  {
    name: "Blue-Cut & Anti-Glare",
    for: "Screen users & drivers",
    price: "Starting around ₹900–₹1,500*",
    features: [
      "Blue-light filtering",
      "Anti-reflective coating",
      "Reduced eye strain",
    ],
  },
  {
    name: "Progressive Premium",
    for: "Reading + distance in one lens",
    price: "Starting around ₹2,500*",
    features: [
      "Seamless near-to-far vision",
      "Wide reading corridor",
      "Premium thin options",
    ],
  },
] as const;

const BRANDS = [
  "Ray-Ban",
  "Cartier",
  "Prada",
  "Versace",
  "Tom Ford",
  "Gucci",
  "Oakley",
  "…and many more",
] as const;

function LensPrices() {
  return (
    <main>
      <section className="bg-deep py-16 text-deep-foreground">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Lens prices
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Honest pricing, no hidden fees
          </h1>
          <p className="mt-5 max-w-2xl text-deep-foreground/85">
            Patients tell us the same thing in review after review: fair,
            transparent prices. The eye test is free — you pay only for frames
            and lenses, and we explain every option before you choose.
          </p>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {LENS_PACKAGES.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {p.for}
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                {p.name}
              </h2>
              <p className="mt-3 font-display text-xl font-bold text-gold-foreground">
                {p.price}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink(
                  `Hi Sai Drishti Eye Care, I'd like a quote for the "${p.name}" lens package.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Get exact price
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground">
          *Indicative ranges only — final pricing depends on your prescription,
          frame choice and lens options. Message us for a precise, no-obligation
          quote.
        </p>
      </section>

      <section className="bg-secondary py-16">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Brands on our shelves
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            From everyday favorites to luxury statement pieces — try on as many
            as you like.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {BRANDS.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground"
              >
                {b}
              </span>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Visit the boutique
          </Link>
        </div>
      </section>
    </main>
  );
}
