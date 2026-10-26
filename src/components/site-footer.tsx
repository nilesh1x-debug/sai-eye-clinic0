import { Link } from "@tanstack/react-router";
import { CLINIC } from "@/lib/clinic";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-deep-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-gold">
            {CLINIC.name}
          </h3>
          <p className="mt-3 max-w-xs text-sm text-deep-foreground/80">
            {CLINIC.tagline}
          </p>
          <p className="mt-4 text-sm text-deep-foreground/80">
            Rated {CLINIC.rating}★ by {CLINIC.reviewCount} patients on Google
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Visit us
          </h4>
          <p className="mt-3 text-sm text-deep-foreground/80">
            {CLINIC.address}
          </p>
          <p className="mt-2 text-sm text-deep-foreground/80">{CLINIC.hours}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">
            Explore
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            {(
              [
                ["Home", "/"],
                ["Services", "/services"],
                ["Lens Prices", "/lens-prices"],
                ["About us", "/about"],
                ["Contact", "/contact"],
              ] as const
            ).map(([label, to]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-deep-foreground/80 transition-colors hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <p className="container-page text-center text-xs text-deep-foreground/60">
          © {new Date().getFullYear()} {CLINIC.name}, Baddi, Himachal Pradesh.
          Information on this site is for general guidance — for medical advice,
          please consult our doctor in person.
        </p>
      </div>
    </footer>
  );
}
