import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-clinic.jpg";
import { CLINIC, whatsappLink, BOOKING_MESSAGE } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Sai Drishti Eye Care & Optics — Eye Clinic & Optical Store in Baddi",
      },
      {
        name: "description",
        content:
          "Free computerized eye testing, pediatric eye care, contact lens fitting and a premium optical boutique in Baddi, Himachal Pradesh. Rated 4.9★ by 260 patients. Glasses ready in 10–20 minutes.",
      },
      {
        property: "og:title",
        content: "Sai Drishti Eye Care & Optics — Eye Clinic in Baddi",
      },
      {
        property: "og:description",
        content:
          "Free eye testing, glasses in 10–20 minutes and a premium frame boutique. Serving Baddi since 2012. Rated 4.9★ by 260 patients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    title: "Computerized Eye Testing",
    description:
      "Advanced computerized refraction, slit lamp examination and retinoscopy — free of charge, with no hidden fees.",
    icon: "scan",
    to: "/services",
  },
  {
    title: "Pediatric Eye Care",
    description:
      "Gentle cycloplegic refraction designed especially for children, so little eyes get accurate prescriptions.",
    icon: "child",
    to: "/services",
  },
  {
    title: "Contact Lens Clinic",
    description:
      "Professional fitting for prescription, daily-use and cosmetic fashion lenses, with aftercare guidance.",
    icon: "lens",
    to: "/services",
  },
  {
    title: "Optical Boutique",
    description:
      "Premium prescription frames and luxury sunglasses from brands like Ray-Ban, Cartier and Prada.",
    icon: "glasses",
    to: "/lens-prices",
  },
] as const;

const WHY = [
  {
    title: "Free eye test & consultation",
    text: "No fees, no hidden charges — walk in for a complete computerized eye test any time.",
  },
  {
    title: "Glasses in 10–20 minutes",
    text: "Prescription lenses crafted on advanced computerized machines, often ready before you finish your tea.",
  },
  {
    title: "Honest, transparent pricing",
    text: "Competitive frame and lens prices, clearly explained before you decide on anything.",
  },
  {
    title: "Clean & sanitized clinic",
    text: "Patients consistently describe our space as exceptionally neat, safe and welcoming.",
  },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "I have visited Sai Drishti Eye Care since 2013. Their quality and prices remain reasonable, and the service is very fabulous. The shop is very neat and clean... they made my glasses in just 10 minutes. Highly recommended.",
    author: "Long-time patient",
  },
  {
    quote:
      "Got a pair of glasses, and the price as well as quality and variety is top-notch. World-class service. Strongly recommended.",
    author: "Customer",
  },
  {
    quote:
      "The doctor is also very good — helped me understand about my eyes and prescribed me well. Staff is good, and free consultation, no fee.",
    author: "Patient",
  },
] as const;

function ServiceIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    className: "h-6 w-6",
  } as const;
  switch (name) {
    case "scan":
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "child":
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <circle cx="12" cy="6" r="3" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <path d="M9 10c1 .8 2 1.2 3 1.2s2-.4 3-1.2" />
        </svg>
      );
    case "lens":
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <path d="M12 3c4 3 6 6.5 6 9.5A6 6 0 0 1 6 12.5C6 9.5 8 6 12 3z" />
          <path d="M9.5 13a2.5 2.5 0 0 0 2.5 2.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...common} aria-hidden="true">
          <circle cx="6.5" cy="15" r="4.5" />
          <circle cx="17.5" cy="15" r="4.5" />
          <path d="M11 15c.5-1 1.5-1 2 0M2 13l3-5h14l3 5" />
        </svg>
      );
  }
}

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-deep text-deep-foreground">
        <img
          src={heroImage}
          alt="Inside the Sai Drishti Eye Care & Optics clinic and boutique"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative container-page flex min-h-[560px] flex-col items-start justify-center py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-deep/60 px-4 py-1.5 text-sm text-gold">
            ★ {CLINIC.rating} · {CLINIC.reviewCount} Google reviews
          </span>
          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Clear vision, honest prices —{" "}
            <span className="text-gold-gradient">since 2012</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-deep-foreground/90">
            Free computerized eye testing, glasses ready in 10–20 minutes, and a
            premium boutique for frames and sunglasses — right here in Baddi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-deep-foreground/40 px-6 py-3 font-semibold transition-colors hover:bg-deep-foreground/10"
            >
              View our services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-secondary">
        <div className="container-page grid grid-cols-2 gap-6 py-6 text-center md:grid-cols-4">
          {[
            ["Since 2012", "Trusted in Baddi"],
            ["Free eye test", "No consultation fee"],
            ["10–20 min", "Glasses ready fast"],
            [`${CLINIC.rating}★ rating`, `${CLINIC.reviewCount} happy reviews`],
          ].map(([big, small]) => (
            <div key={big}>
              <p className="font-display text-lg font-bold text-primary sm:text-xl">
                {big}
              </p>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {small}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What we do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            Complete eye care under one roof
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your child's first eye test to luxury sunglasses — everything
            is handled by Dr. {CLINIC.doctor.replace("Dr. ", "")} and our team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                <ServiceIcon name={s.icon} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Why patients choose us
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Care that earns 4.9 stars
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHY.map((w) => (
              <div
                key={w.title}
                className="rounded-3xl border border-border bg-card p-7"
              >
                <h3 className="font-display text-lg font-bold text-foreground">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Patient voices
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Baddi says about us
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.quote}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="text-gold">★★★★★</div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container-page pb-24">
        <div className="rounded-4xl bg-deep px-8 py-14 text-center text-deep-foreground">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Your eyes deserve a proper test
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-deep-foreground/85">
            Message us on WhatsApp and we'll find a time that works for you. The
            eye test and consultation are free — always.
          </p>
          <a
            href={whatsappLink(BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Book your free eye test
          </a>
        </div>
      </section>
    </main>
  );
}
