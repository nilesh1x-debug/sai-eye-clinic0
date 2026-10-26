import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-clinic.jpg";
import { CLINIC, whatsappLink, BOOKING_MESSAGE } from "@/lib/clinic";
import { WhatsAppIcon } from "@/components/site-header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — Sai Drishti Eye Care & Optics, Mohali",
      },
      {
        name: "description",
        content:
          "Serving Mohali since 2012 with free eye testing, honest pricing and personal care from Dr. Umesh Dada. Rated 4.9★ by 260 patients.",
      },
      {
        property: "og:title",
        content: "About Sai Drishti Eye Care & Optics",
      },
      {
        property: "og:description",
        content:
          "A trusted community eye clinic in Mohali since 2012, led by Dr. Umesh Dada. Rated 4.9★ by 260 patients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const REVIEWS = [
  {
    quote:
      "I have visited Sai Drishti Eye Care since 2013. Their quality and prices remain reasonable, and the service is very fabulous. The shop is very neat and clean... they made my glasses in just 10 minutes. Thanks to Dr. Umesh Dada. Highly recommended.",
  },
  {
    quote:
      "Very happy to visit Sai Drishti Eye Care... got a pair of glasses, and the price as well as quality and variety is top-notch. Thanks to Umesh Dada for providing world-class service. Strongly recommended.",
  },
  {
    quote:
      "The best and only Sai Drishti Eye Care in Mohali. All kinds of spectacles are available at reasonable prices. Free consultation, no fee.",
  },
  {
    quote:
      "Visited Sai Drishti and had a really good experience here. Staff is good, and the doctor is also very good — helped me understand about my eyes and prescribed me well.",
  },
] as const;

function About() {
  return (
    <main>
      <section className="bg-deep py-16 text-deep-foreground">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            About us
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            A neighbourhood clinic Mohali has trusted since 2012
          </h1>
        </div>
      </section>

      <section className="container-page grid items-center gap-10 py-20 md:grid-cols-2">
        <img
          src={heroImage}
          alt="The Sai Drishti Eye Care & Optics store interior"
          loading="lazy"
          width={1600}
          height={912}
          className="h-80 w-full rounded-3xl object-cover shadow-md"
        />
        <div className="space-y-4 text-muted-foreground">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Our story
          </h2>
          <p>
            {CLINIC.name} opened its doors in 2012 at Homeland City Mall on Sai
            Road, with a simple idea: world-class eye care and honest pricing,
            close to home.
          </p>
          <p>
            Over a decade later, more than 260 Google reviews rate us{" "}
            {CLINIC.rating} out of 5 — and the words that come up again and
            again are "neat", "clean", "transparent" and "they actually explain
            things".
          </p>
          <p>
            Today we blend clinical optometric services with a curated optical
            boutique, so one visit covers everything from your prescription to
            the frames that suit you best.
          </p>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Meet {CLINIC.doctor}
            </h2>
            <p>
              Our resident specialist, {CLINIC.doctor}, is the name patients
              mention most in their reviews. He takes the time to help you
              deeply understand your eye health while ensuring your prescription
              is exactly right.
            </p>
            <p>
              Whether it's your child's first check-up or a complex progressive
              lens fitting, you'll never feel rushed or upsold here.
            </p>
          </div>
          <div className="rounded-4xl bg-deep p-10 text-center text-deep-foreground">
            <p className="font-display text-6xl font-bold text-gold">
              {CLINIC.rating}
            </p>
            <p className="mt-2 text-lg">★ ★ ★ ★ ★</p>
            <p className="mt-4 text-sm text-deep-foreground/80">
              Average rating from {CLINIC.reviewCount} Google reviews, earned
              over more than a decade of service.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            In our patients' words
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <figure
              key={r.quote}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="text-gold">★★★★★</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">
                "{r.quote}"
              </blockquote>
            </figure>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href={whatsappLink(BOOKING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Come see for yourself
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Prefer to browse first?{" "}
            <Link
              to="/lens-prices"
              className="font-semibold text-primary underline"
            >
              Check our lens prices
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
