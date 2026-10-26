import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as whatsappLink, i as WhatsAppIcon, n as CLINIC, r as SiteHeader, t as BOOKING_MESSAGE } from "./site-header-tY4C76Xu.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D_734sDr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BXd-eDJH.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-deep text-deep-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-14 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold text-gold",
						children: CLINIC.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-xs text-sm text-deep-foreground/80",
						children: CLINIC.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-deep-foreground/80",
						children: [
							"Rated ",
							CLINIC.rating,
							"★ by ",
							CLINIC.reviewCount,
							" patients on Google"
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-sm font-semibold uppercase tracking-wider text-gold",
						children: "Visit us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-deep-foreground/80",
						children: CLINIC.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-deep-foreground/80",
						children: CLINIC.hours
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-gold",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						["Home", "/"],
						["Services", "/services"],
						["Lens Prices", "/lens-prices"],
						["About us", "/about"],
						["Contact", "/contact"]
					].map(([label, to]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to,
						className: "text-deep-foreground/80 transition-colors hover:text-gold",
						children: label
					}) }, to))
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10 py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "container-page text-center text-xs text-deep-foreground/60",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					CLINIC.name,
					", Baddi, Himachal Pradesh. Information on this site is for general guidance — for medical advice, please consult our doctor in person."
				]
			})
		})]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: whatsappLink(BOOKING_MESSAGE),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Book an appointment on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-7 w-7" })
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Back to home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-[60vh] items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: CLINIC.name
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-BPfXibT4.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sai Drishti Eye Care & Optics — Eye Clinic & Optical Store in Baddi" },
		{
			name: "description",
			content: "Free computerized eye testing, pediatric eye care, contact lens fitting and a premium optical boutique in Baddi, Himachal Pradesh. Rated 4.9★ by 260 patients. Glasses ready in 10–20 minutes."
		},
		{
			property: "og:title",
			content: "Sai Drishti Eye Care & Optics — Eye Clinic in Baddi"
		},
		{
			property: "og:description",
			content: "Free eye testing, glasses in 10–20 minutes and a premium frame boutique. Serving Baddi since 2012. Rated 4.9★ by 260 patients."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-CtgpCIj3.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Us — Sai Drishti Eye Care & Optics, Baddi" },
		{
			name: "description",
			content: "Serving Baddi since 2012 with free eye testing, honest pricing and personal care from Dr. Umesh Dada. Rated 4.9★ by 260 patients."
		},
		{
			property: "og:title",
			content: "About Sai Drishti Eye Care & Optics"
		},
		{
			property: "og:description",
			content: "A trusted community eye clinic in Baddi since 2012, led by Dr. Umesh Dada. Rated 4.9★ by 260 patients."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-DaljLlnj.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact & Directions — Sai Drishti Eye Care & Optics, Baddi" },
		{
			name: "description",
			content: "Visit Sai Drishti Eye Care & Optics at Homeland City Mall, Sai Road, Baddi, Himachal Pradesh. Book a free eye test on WhatsApp."
		},
		{
			property: "og:title",
			content: "Contact Sai Drishti Eye Care & Optics, Baddi"
		},
		{
			property: "og:description",
			content: "Find us at Homeland City Mall, Sai Road, Baddi. Book your free eye test on WhatsApp."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./lens-prices-BjFw5QIA.mjs");
var Route$1 = createFileRoute("/lens-prices")({
	head: () => ({ meta: [
		{ title: "Lens Prices & Frame Brands — Sai Drishti Eye Care & Optics, Baddi" },
		{
			name: "description",
			content: "Transparent lens and frame pricing at Sai Drishti Eye Care & Optics, Baddi. Free eye testing with every visit. Premium frames from Ray-Ban, Cartier, Prada and more."
		},
		{
			property: "og:title",
			content: "Lens Prices & Frame Brands — Sai Drishti Eye Care & Optics"
		},
		{
			property: "og:description",
			content: "Transparent pricing, premium brands and free eye testing. Ask us for an exact quote on WhatsApp."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-Rv4uiNr_.mjs");
var Route = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Eye Care Services — Sai Drishti Eye Care & Optics, Baddi" },
		{
			name: "description",
			content: "Computerized eye testing, pediatric refraction, contact lens fitting and a premium optical boutique in Baddi, Himachal Pradesh. Eye tests are always free."
		},
		{
			property: "og:title",
			content: "Eye Care Services — Sai Drishti Eye Care & Optics"
		},
		{
			property: "og:description",
			content: "Computerized eye testing, pediatric care, contact lenses and a premium optical boutique. Free eye testing in Baddi."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AboutRoute: Route$3.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$5
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$5
	}),
	LensPricesRoute: Route$1.update({
		id: "/lens-prices",
		path: "/lens-prices",
		getParentRoute: () => Route$5
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
