import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Truck, g as Menu, m as Package, t as X, u as Settings, v as Leaf, y as Handshake } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-C9mwgiLr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/products",
		label: "Quality"
	},
	{
		to: "/products",
		label: "Packaging"
	},
	{
		to: "/products",
		label: "Exports"
	},
	{
		to: "/products",
		label: "Contact Us"
	}
];
function Navbar({ active }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-navy-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-4 md:px-8 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3 shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 items-center justify-center rounded-sm border border-gold text-gold font-serif text-2xl font-bold",
						children: "7"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-lg font-bold tracking-wider text-cream",
								children: "7 SEAS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold tracking-[0.25em] text-gold",
								children: "ENTERPRISE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[8px] tracking-[0.2em] text-cream/60",
								children: "BRIDGING BORDERS. BUILDING TRADE."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-7 text-xs font-semibold tracking-[0.15em]",
					children: links.map((l, i) => {
						const isActive = active === "about" && l.label === "About Us" || active === "products" && l.label === "Products" || active === "home" && l.label === "Home";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: `relative py-1 transition-colors hover:text-gold ${isActive ? "text-gold" : "text-cream"}`,
							children: [l.label.toUpperCase(), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 right-0 h-[2px] bg-gold" })]
						}, i);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "hidden md:inline-flex btn-gold",
							children: "Request Export Quote"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/918237887289",
							"aria-label": "WhatsApp",
							className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								className: "h-5 w-5",
								fill: "currentColor",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen(!open),
							className: "lg:hidden text-cream",
							"aria-label": "Menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:hidden border-t border-cream/10 bg-navy-deep px-4 py-4 space-y-3",
			children: [links.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.to,
				onClick: () => setOpen(false),
				className: "block text-sm font-semibold tracking-wider text-cream hover:text-gold",
				children: l.label.toUpperCase()
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn-gold w-full justify-center",
				children: "Request Export Quote"
			})]
		})]
	});
}
var trust = [
	{
		icon: Leaf,
		label: "Authentic Indian Jaggery"
	},
	{
		icon: Settings,
		label: "Modern & Hygienic Processing"
	},
	{
		icon: Package,
		label: "Export Quality Packaging"
	},
	{
		icon: Truck,
		label: "Timely Delivery"
	},
	{
		icon: Handshake,
		label: "Long-term Business Partnership"
	}
];
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-navy-deep border-t border-cream/10 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-4 md:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-y-5 gap-x-4 sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-cream/10",
				children: trust.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 lg:justify-center lg:px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "h-6 w-6 text-gold shrink-0",
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-semibold tracking-[0.15em] text-cream uppercase",
						children: label
					})]
				}, label))
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-navy py-6 text-center text-xs text-cream/60",
		children: [
			"© ",
			(/* @__PURE__ */ new Date()).getFullYear(),
			" 7 Seas Enterprise. All rights reserved."
		]
	})] });
}
//#endregion
export { Navbar as n, Footer as t };
