import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as whatsappLink, i as WhatsAppIcon, n as CLINIC, t as BOOKING_MESSAGE } from "./site-header-tY4C76Xu.mjs";
import { t as hero_clinic_default } from "./hero-clinic-CyXNWhSr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CtgpCIj3.js
var import_jsx_runtime = require_jsx_runtime();
var REVIEWS = [
	{ quote: "I have visited Sai Drishti Eye Care since 2013. Their quality and prices remain reasonable, and the service is very fabulous. The shop is very neat and clean... they made my glasses in just 10 minutes. Thanks to Dr. Umesh Dada. Highly recommended." },
	{ quote: "Very happy to visit Sai Drishti Eye Care... got a pair of glasses, and the price as well as quality and variety is top-notch. Thanks to Umesh Dada for providing world-class service. Strongly recommended." },
	{ quote: "The best and only Sai Drishti Eye Care in Baddi. All kinds of spectacles are available at reasonable prices. Free consultation, no fee." },
	{ quote: "Visited Sai Drishti and had a really good experience here. Staff is good, and the doctor is also very good — helped me understand about my eyes and prescribed me well." }
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-deep py-16 text-deep-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold uppercase tracking-[0.2em] text-gold",
					children: "About us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl",
					children: "A neighbourhood clinic Baddi has trusted since 2012"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page grid items-center gap-10 py-20 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_clinic_default,
				alt: "The Sai Drishti Eye Care & Optics store interior",
				loading: "lazy",
				width: 1600,
				height: 912,
				className: "h-80 w-full rounded-3xl object-cover shadow-md"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold text-foreground sm:text-3xl",
						children: "Our story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [CLINIC.name, " opened its doors in 2012 at Homeland City Mall on Sai Road, with a simple idea: world-class eye care and honest pricing, close to home."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Over a decade later, more than 260 Google reviews rate us",
						" ",
						CLINIC.rating,
						" out of 5 — and the words that come up again and again are \"neat\", \"clean\", \"transparent\" and \"they actually explain things\"."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today we blend clinical optometric services with a curated optical boutique, so one visit covers everything from your prescription to the frames that suit you best." })
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold text-foreground sm:text-3xl",
							children: ["Meet ", CLINIC.doctor]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Our resident specialist, ",
							CLINIC.doctor,
							", is the name patients mention most in their reviews. He takes the time to help you deeply understand your eye health while ensuring your prescription is exactly right."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Whether it's your child's first check-up or a complex progressive lens fitting, you'll never feel rushed or upsold here." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-4xl bg-deep p-10 text-center text-deep-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-6xl font-bold text-gold",
							children: CLINIC.rating
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-lg",
							children: "★ ★ ★ ★ ★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-deep-foreground/80",
							children: [
								"Average rating from ",
								CLINIC.reviewCount,
								" Google reviews, earned over more than a decade of service."
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold text-foreground",
						children: "In our patients' words"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2",
					children: REVIEWS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-3xl border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-gold",
							children: "★★★★★"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-3 text-sm leading-relaxed text-foreground/90",
							children: [
								"\"",
								r.quote,
								"\""
							]
						})]
					}, r.quote))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappLink(BOOKING_MESSAGE),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-lg font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" }), "Come see for yourself"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: [
							"Prefer to browse first?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/lens-prices",
								className: "font-semibold text-primary underline",
								children: "Check our lens prices"
							}),
							"."
						]
					})]
				})
			]
		})
	] });
}
//#endregion
export { About as component };
