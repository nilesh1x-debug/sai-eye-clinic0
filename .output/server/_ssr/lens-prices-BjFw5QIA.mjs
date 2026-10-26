import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as whatsappLink, i as WhatsAppIcon } from "./site-header-tY4C76Xu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lens-prices-BjFw5QIA.js
var import_jsx_runtime = require_jsx_runtime();
var LENS_PACKAGES = [
	{
		name: "Single Vision Basic",
		for: "Everyday distance or reading glasses",
		price: "Starting around ₹500–₹800*",
		features: [
			"Clear single-vision lenses",
			"Scratch-resistant coating",
			"Ready in 10–20 minutes"
		]
	},
	{
		name: "Blue-Cut & Anti-Glare",
		for: "Screen users & drivers",
		price: "Starting around ₹900–₹1,500*",
		features: [
			"Blue-light filtering",
			"Anti-reflective coating",
			"Reduced eye strain"
		]
	},
	{
		name: "Progressive Premium",
		for: "Reading + distance in one lens",
		price: "Starting around ₹2,500*",
		features: [
			"Seamless near-to-far vision",
			"Wide reading corridor",
			"Premium thin options"
		]
	}
];
var BRANDS = [
	"Ray-Ban",
	"Cartier",
	"Prada",
	"Versace",
	"Tom Ford",
	"Gucci",
	"Oakley",
	"…and many more"
];
function LensPrices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-deep py-16 text-deep-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.2em] text-gold",
						children: "Lens prices"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl",
						children: "Honest pricing, no hidden fees"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-deep-foreground/85",
						children: "Patients tell us the same thing in review after review: fair, transparent prices. The eye test is free — you pay only for frames and lenses, and we explain every option before you choose."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: LENS_PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col rounded-3xl border border-border bg-card p-7 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold uppercase tracking-wider text-primary",
							children: p.for
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl font-bold text-foreground",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-xl font-bold text-gold-foreground",
							children: p.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex-1 space-y-2.5 text-sm text-muted-foreground",
							children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "✓"
								}), f]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink(`Hi Sai Drishti Eye Care, I'd like a quote for the "${p.name}" lens package.`),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), "Get exact price"]
						})
					]
				}, p.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-6 max-w-2xl text-center text-xs text-muted-foreground",
				children: "*Indicative ranges only — final pricing depends on your prescription, frame choice and lens options. Message us for a precise, no-obligation quote."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold text-foreground",
						children: "Brands on our shelves"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-muted-foreground",
						children: "From everyday favorites to luxury statement pieces — try on as many as you like."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: BRANDS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-foreground",
							children: b
						}, b))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "mt-10 inline-flex items-center rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Visit the boutique"
					})
				]
			})
		})
	] });
}
//#endregion
export { LensPrices as component };
