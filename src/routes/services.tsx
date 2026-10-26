import { createFileRoute, Link } from "@tanstack/react-router";
import eyeTestImage from "@/assets/service-eye-test.jpg";
import contactLensImage from "@/assets/service-contact-lens.jpg";
import boutiqueImage from "@/assets/service-boutique.jpg";
import { CLINIC, whatsappLink, BOOKING_MESSAGE } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site-header";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Eye Care Services — Sai Drishti Eye Care & Optics, Baddi",
      },
      {
        name: "description",
        content:
          "Computerized eye testing, pediatric refraction, contact lens fitting and a premium optical boutique in Baddi, Himachal Pradesh. Eye tests are always free.",
      },
      {
        property: "og:title",
        content: "Eye Care Services — Sai Drishti Eye Care & Optics",
      },
      {
        property: "og:description",
        content:
          "Computerized eye testing, pediatric care, contact lenses and a premium optical boutique. Free eye testing in Baddi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function ServiceRow({
  image,
  imageAlt,
  title,
  children,
}: {
  image: string;
  imageAlt: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid items-center gap-8 md:grid-cols-2">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        width={1200}
        height={800}
        className="h-72 w-full rounded-3xl object-cover shadow-md md:h-80"
      />
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 space-y-3 text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <main>
      <section className="bg-deep py-16 text-deep-foreground">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Our services
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Everything your eyes need, in one visit
          </h1>
          <p className="mt-5 max-w-xl text-deep-foreground/85">
            Every eye test and consultation at {CLINIC.shortName} is completely
            free. You only ever pay for what you choose to take home.
          </p>
        </div>
      </section>

      <section className="container-page space-y-24 py-20">
        <ServiceRow
          image={eyeTestImage}
          imageAlt="Optometrist performing a slit lamp eye examination"
          title="Comprehensive eye testing"
        >
          <p>
            Specialized computerized eye testing, slit lamp biomicroscopy and
            retinoscopy — the same technology used in big-city clinics, right
            here on Sai Road.
          </p>
          <p>
            Dr. {CLINIC.doctor.replace("Dr. ", "")} takes the time to explain
            what's happening with your eyes, so you leave with a prescription
            you actually understand.
          </p>
        </ServiceRow>

        <ServiceRow
          image={contactLensImage}
          imageAlt="Contact lens fitting with lens case and solution"
          title="Contact lens clinic"
        >
          <p>
            Professional fitting sessions for every variant — prescription
            lenses, multi-use lenses and cosmetic fashion lenses — with clear
            guidance on wear time and care.
          </p>
          <p>
            We make sure your first pair feels right before you walk out, and
            we're always a WhatsApp message away afterwards.
          </p>
        </ServiceRow>

        <ServiceRow
          image={boutiqueImage}
          imageAlt="Luxury sunglasses and frames on boutique display shelves"
          title="Optical boutique"
        >
          <p>
            A diverse gallery of premium prescription spectacles and trendy
            luxury sunglasses from major global brands like Ray-Ban, Cartier and
            Prada.
          </p>
          <p>
            Minor emergencies? We do free screw-tightening and frame adjustments
            on the spot, any time you pass by.
          </p>
        </ServiceRow>

        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Pediatric eye care
            </h2>
            <div className="mt-4 space-y-3 text-muted-foreground">
              <p>
                Children can't always tell us what they can't see. Cycloplegic
                refraction assessments are specifically tailored for kids —
                gentle, patient and accurate.
              </p>
              <p>
                If your child squints, sits too close to the TV, or struggles at
                school, bring them in for a free check-up.
              </p>
            </div>
          </div>
          <div className="order-1 flex h-72 items-center justify-center rounded-3xl bg-accent md:order-2 md:h-80">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-24 w-24 text-accent-foreground/60"
              aria-hidden="true"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
              <path d="M9 11c1 .9 2 1.3 3 1.3s2-.4 3-1.3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-4xl bg-secondary px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Send us a message describing what you're experiencing — we'll guide
            you honestly, even if that means telling you not to buy anything.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink(BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Ask on WhatsApp
            </a>
            <Link
              to="/lens-prices"
              className="inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-accent"
            >
              See lens prices
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
