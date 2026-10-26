import { createFileRoute } from "@tanstack/react-router";
import { CLINIC, whatsappLink, BOOKING_MESSAGE } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site-header";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact & Directions — Sai Drishti Eye Care & Optics, Baddi",
      },
      {
        name: "description",
        content:
          "Visit Sai Drishti Eye Care & Optics at Homeland City Mall, Sai Road, Baddi, Himachal Pradesh. Book a free eye test on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Contact Sai Drishti Eye Care & Optics, Baddi",
      },
      {
        property: "og:description",
        content:
          "Find us at Homeland City Mall, Sai Road, Baddi. Book your free eye test on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main>
      <section className="bg-deep py-16 text-deep-foreground">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Drop by, or message us first
          </h1>
          <p className="mt-5 max-w-xl text-deep-foreground/85">
            Walk-ins are always welcome. Want to skip the wait? Book your free
            eye test on WhatsApp.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-10 py-16 md:grid-cols-5">
        <div className="space-y-6 md:col-span-2">
          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="font-display text-lg font-bold text-foreground">
              Address
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {CLINIC.address}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sai+Drishti+Eye+Care+and+Optics+Sai+Road+Baddi+Himachal+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div className="rounded-3xl border border-border bg-card p-7">
            <h2 className="font-display text-lg font-bold text-foreground">
              Hours
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {CLINIC.hours}
            </p>
          </div>

          <div className="rounded-3xl bg-secondary p-7">
            <h2 className="font-display text-lg font-bold text-foreground">
              Book on WhatsApp
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Tell us a convenient time and we'll confirm your appointment.
            </p>
            <a
              href={whatsappLink(BOOKING_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Start a chat
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-border md:col-span-3">
          <iframe
            title={`Map showing the location of ${CLINIC.name}`}
            src={CLINIC.mapEmbed}
            className="h-[420px] w-full md:h-full md:min-h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
