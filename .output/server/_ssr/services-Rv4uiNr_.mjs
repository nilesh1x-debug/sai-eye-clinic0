import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as whatsappLink, i as WhatsAppIcon, n as CLINIC, t as BOOKING_MESSAGE } from "./site-header-tY4C76Xu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Rv4uiNr_.js
var import_jsx_runtime = require_jsx_runtime();
var service_eye_test_default = "/assets/service-eye-test-BKY1R10g.jpg";
var service_contact_lens_default = "/assets/service-contact-lens-xnU3FAeH.jpg";
var service_boutique_default = "/assets/service-boutique-BrEQJQ3y.jpg";
function ServiceRow({ image, imageAlt, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid items-center gap-8 md:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: imageAlt,
			loading: "lazy",
			width: 1200,
			height: 800,
			className: "h-72 w-full rounded-3xl object-cover shadow-md md:h-80"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl font-bold text-foreground sm:text-3xl",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3 text-muted-foreground",
			children
		})] })]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-deep py-16 text-deep-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold uppercase tracking-[0.2em] text-gold",
						children: "Our services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl",
						children: "Everything your eyes need, in one visit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-xl text-deep-foreground/85",
						children: [
							"Every eye test and consultation at ",
							CLINIC.shortName,
							" is completely free. You only ever pay for what you choose to take home."
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page space-y-24 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ServiceRow, {
					image: service_eye_test_default,
					imageAlt: "Optometrist performing a slit lamp eye examination",
					title: "Comprehensive eye testing",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Specialized computerized eye testing, slit lamp biomicroscopy and retinoscopy — the same technology used in big-city clinics, right here on Sai Road." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Dr. ",
						CLINIC.doctor.replace("Dr. ", ""),
						" takes the time to explain what's happening with your eyes, so you leave with a prescription you actually understand."
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ServiceRow, {
					image: service_contact_lens_default,
					imageAlt: "Contact lens fitting with lens case and solution",
					title: "Contact lens clinic",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Professional fitting sessions for every variant — prescription lenses, multi-use lenses and cosmetic fashion lenses — with clear guidance on wear time and care." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We make sure your first pair feels right before you walk out, and we're always a WhatsApp message away afterwards." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ServiceRow, {
					image: service_boutique_default,
					imageAlt: "Luxury sunglasses and frames on boutique display shelves",
					title: "Optical boutique",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A diverse gallery of premium prescription spectacles and trendy luxury sunglasses from major global brands like Ray-Ban, Cartier and Prada." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Minor emergencies? We do free screw-tightening and frame adjustments on the spot, any time you pass by." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-2 md:order-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold text-foreground sm:text-3xl",
							children: "Pediatric eye care"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 space-y-3 text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Children can't always tell us what they can't see. Cycloplegic refraction assessments are specifically tailored for kids — gentle, patient and accurate." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If your child squints, sits too close to the TV, or struggles at school, bring them in for a free check-up." })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-1 flex h-72 items-center justify-center rounded-3xl bg-accent md:order-2 md:h-80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "1.5",
							className: "h-24 w-24 text-accent-foreground/60",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "7",
									r: "4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 11c1 .9 2 1.3 3 1.3s2-.4 3-1.3" })
							]
						})
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-4xl bg-secondary px-8 py-14 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold text-foreground",
						children: "Not sure which service you need?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-xl text-muted-foreground",
						children: "Send us a message describing what you're experiencing — we'll guide you honestly, even if that means telling you not to buy anything."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink(BOOKING_MESSAGE),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.02]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5" }), "Ask on WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lens-prices",
							className: "inline-flex items-center rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-accent",
							children: "See lens prices"
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { Services as component };
