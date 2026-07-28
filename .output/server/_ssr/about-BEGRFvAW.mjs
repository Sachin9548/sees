import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Eye, F as Award, I as Anchor, N as ChevronRight, S as Globe, T as FileText, a as Truck, f as Search, h as PackageOpen, i as Users, j as ClipboardCheck, l as ShieldCheck, m as Package, s as Target, u as Settings, v as Leaf, y as Handshake } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-C9mwgiLr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BEGRFvAW.js
var import_jsx_runtime = require_jsx_runtime();
function InfoCard({ icon: Icon, title, paragraphs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-card p-6 shadow-[0_2px_20px_-8px_rgba(20,30,60,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(20,30,60,0.18)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-6 w-6",
					strokeWidth: 1.5
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-xl font-bold text-navy-deep",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-[2px] w-10 bg-gold" })]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground",
			children: paragraphs.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, i))
		})]
	});
}
function ApproachCard({ icon: Icon, title, desc }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center text-center px-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-16 w-16 items-center justify-center rounded-full bg-navy-deep text-gold shadow-[0_10px_30px_-12px_rgba(20,30,60,0.35)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-7 w-7",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mt-4 text-[11px] font-bold tracking-[0.12em] text-navy-deep uppercase leading-snug",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-[2px] w-8 bg-gold/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-muted-foreground",
				children: desc
			})
		]
	});
}
var hero_jaggery_default = "/assets/hero-jaggery-nS9FR7cG.jpg";
var world_map_default = "/assets/world-map-K5OMpZt1.jpg";
var approach = [
	{
		icon: Leaf,
		title: "Quality-Controlled Sourcing",
		desc: "Carefully selected sugarcane from trusted and ethical sources."
	},
	{
		icon: Settings,
		title: "Hygienic Processing",
		desc: "Processed in hygienic facilities using modern methods."
	},
	{
		icon: ClipboardCheck,
		title: "Batch Documentation",
		desc: "Batch-wise documentation and COA available for every shipment."
	},
	{
		icon: ShieldCheck,
		title: "COA Availability",
		desc: "Certificate of Analysis available to ensure quality transparency."
	},
	{
		icon: Package,
		title: "Export-Ready Packaging",
		desc: "Professional & secure packaging suitable for international transit."
	},
	{
		icon: Search,
		title: "Third-Party Inspection Support",
		desc: "Inspection support at every stage for complete peace of mind."
	},
	{
		icon: Truck,
		title: "Reliable Supply",
		desc: "Consistent quality, competitive pricing and on-time delivery."
	}
];
var globalPoints = [
	{
		icon: Globe,
		title: "Global Reach",
		desc: "Expanding to key markets worldwide"
	},
	{
		icon: Handshake,
		title: "Trusted by Partners",
		desc: "Building long-term business relationships"
	},
	{
		icon: Award,
		title: "Premium Quality",
		desc: "Strict quality control at every step"
	},
	{
		icon: Anchor,
		title: "Consistent Supply",
		desc: "Reliable supply with timely deliveries"
	}
];
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { active: "about" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden bg-navy-deep text-cream",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 pt-6 pb-14 lg:pb-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-cream/60 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-gold",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "About Us"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-2 gap-10 items-center mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gold-diamond mb-5 inline-flex",
								children: "About 7 Seas Enterprise"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-cream",
								children: [
									"Bringing India's ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" Natural Goodness to ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "Global Markets"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-16 bg-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rotate-45 bg-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-16 bg-gold" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-sm md:text-base leading-relaxed text-cream/80",
								children: "7 Seas Enterprise is an Indian export company focused on supplying premium Indian jaggery to international buyers. We work with quality-focused producers and follow a structured approach to sourcing, quality verification, packaging and export supply."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "btn-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" }), " Explore Products"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "btn-outline-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageOpen, { className: "h-4 w-4" }), " Packaging Solutions"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "btn-outline-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " Request Export Quote"]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_jaggery_default,
								alt: "Premium Indian jaggery — powder and cubes",
								width: 1400,
								height: 1200,
								className: "w-full rounded-lg object-cover shadow-2xl"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -top-2 right-2 md:top-6 md:right-6 flex h-24 w-24 md:h-32 md:w-32 flex-col items-center justify-center rounded-full border-2 border-gold bg-navy-deep text-center text-gold shadow-2xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, {
										className: "h-6 w-6 md:h-7 md:w-7",
										strokeWidth: 1.5
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[9px] md:text-[10px] font-bold tracking-wider leading-tight px-2",
										children: "QUALITY YOU CAN TRUST"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-gold",
										children: "★ ★ ★"
									})
								]
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: Users,
							title: "WHO WE ARE",
							paragraphs: ["We are an Indian exporter dedicated to bringing premium quality jaggery to global markets.", "Our focus is on building long-term relationships with importers, distributors, wholesalers, retailers and food-service buyers through quality products, transparent communication and dependable service."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: Target,
							title: "OUR MISSION",
							paragraphs: ["To deliver consistent-quality Indian jaggery with dependable packaging, documentation and professional export service.", "We aim to exceed buyer expectations through quality assurance, timely delivery and a commitment to ethical and sustainable business practices."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
							icon: Eye,
							title: "OUR VISION",
							paragraphs: ["To build 7 Seas Enterprise into a trusted Indian food-export brand across international markets.", "We envision a future where our jaggery is recognized worldwide for its purity, taste, quality and the trust it creates with every partnership we build."]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream-deep/60 py-14 md:py-20 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gold-diamond",
							children: "Our Approach"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-serif text-3xl md:text-4xl font-bold text-navy-deep",
							children: "Quality at Every Step. Trust in Every Shipment."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7",
						children: approach.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApproachCard, { ...a }, a.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream py-14 md:py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-lg bg-navy-deep p-8 md:p-12 lg:p-16 text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-40 bg-cover bg-center",
							style: { backgroundImage: `url(${world_map_default})` }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative grid gap-10 lg:grid-cols-2 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-diamond",
									children: "From India to Global Markets"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight",
									children: [
										"Connecting Goodness ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										" Across the Globe"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-sm md:text-base text-cream/75 leading-relaxed",
									children: "We supply premium Indian jaggery to importers, distributors, wholesalers, food-service companies and retail partners worldwide."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8 grid grid-cols-2 gap-6",
									children: globalPoints.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-6 w-6 shrink-0 text-gold",
											strokeWidth: 1.5
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-bold tracking-[0.12em] text-cream uppercase",
												children: title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 text-xs text-cream/70 leading-relaxed",
												children: desc
											})]
										})]
									}, title))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block" })]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-cream pb-16 md:pb-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-center items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-16 bg-gold" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-2xl md:text-4xl font-bold text-navy-deep",
									children: "From India. Built for the World."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[1px] w-16 bg-gold" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted-foreground tracking-wide",
							children: [
								"Quality ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "•"
								}),
								" Integrity ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "•"
								}),
								" Consistency ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: "•"
								}),
								" Partnership"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products",
									className: "btn-gold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4" }), " Explore Products"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "btn-outline-navy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" }), " Quality & Compliance"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									className: "btn-outline-navy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " Request Export Quote"]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var SplitComponent = AboutPage;
//#endregion
export { SplitComponent as component };
