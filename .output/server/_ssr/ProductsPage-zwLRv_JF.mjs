import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as Clock, C as Gem, D as Droplet, F as Award, M as CircleCheck, O as Download, P as Boxes, S as Globe, T as FileText, _ as MapPin, a as Truck, b as Hammer, c as Sprout, d as Send, k as Coffee, l as ShieldCheck, m as Package, n as Warehouse, o as Timer, p as Palette, r as Utensils, u as Settings, w as FlaskConical, x as Grid3x3 } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-C9mwgiLr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductsPage-zwLRv_JF.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ image, title, desc, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative rounded-lg border border-gold/30 bg-cream-deep/60 p-5 shadow-[0_2px_16px_-8px_rgba(20,30,60,0.1)] transition-all hover:shadow-[0_20px_40px_-16px_rgba(20,30,60,0.2)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: title,
				loading: "lazy",
				className: "h-24 w-28 shrink-0 rounded-md object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-lg font-bold text-navy-deep",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 h-[1.5px] w-8 bg-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-muted-foreground",
						children: desc
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep text-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5",
					strokeWidth: 1.5
				})
			})
		})]
	});
}
var jaggery_powder_default = "/assets/jaggery-powder-DJx7cujB.jpg";
var jaggery_cubes_default = "/assets/jaggery-cubes-BiZMDB_s.jpg";
var jaggery_blocks_default = "/assets/jaggery-blocks-BLKiah0x.jpg";
var powder_detail_default = "/assets/powder-detail-BN4OVfzF.jpg";
var retail_packaging_default = "/assets/retail-packaging-CVHxpLf5.jpg";
var bulk_packaging_default = "/assets/bulk-packaging-BQdoi5gu.jpg";
var specs = [
	{
		icon: Package,
		k: "Product",
		v: "Sugarcane Jaggery Powder"
	},
	{
		icon: MapPin,
		k: "Origin",
		v: "India"
	},
	{
		icon: Sprout,
		k: "Ingredient",
		v: "Sugarcane juice"
	},
	{
		icon: FlaskConical,
		k: "Appearance",
		v: "Free-flowing powder / granules"
	},
	{
		icon: Palette,
		k: "Colour",
		v: "Golden brown to brown*"
	},
	{
		icon: Utensils,
		k: "Taste",
		v: "Characteristic sweet jaggery flavour"
	},
	{
		icon: Timer,
		k: "Shelf Life",
		v: "12 months from date of packaging*"
	},
	{
		icon: Warehouse,
		k: "Storage",
		v: "Store in a cool, dry place away from moisture and direct sunlight."
	}
];
var benefits = [
	{
		icon: Droplet,
		title: "100% NATURAL",
		desc: "Made from sugarcane juice"
	},
	{
		icon: FlaskConical,
		title: "NO ADDED CHEMICALS,",
		desc: "Colours or Preservatives"
	},
	{
		icon: Hammer,
		title: "TRADITIONALLY CRAFTED",
		desc: "Using traditional methods"
	},
	{
		icon: Gem,
		title: "RICH IN MINERALS",
		desc: "Iron, Calcium, Potassium & more"
	},
	{
		icon: Coffee,
		title: "CONSISTENT TASTE,",
		desc: "Aroma & Quality"
	},
	{
		icon: Award,
		title: "EXPORT QUALITY —",
		desc: "Global Standards"
	},
	{
		icon: Clock,
		title: "12 MONTHS SHELF LIFE",
		desc: "When stored in cool & dry place"
	}
];
var packagingFeatures = [
	{
		icon: ShieldCheck,
		title: "MOISTURE PROTECTED PACKAGING",
		desc: "Protects product quality and freshness"
	},
	{
		icon: Award,
		title: "FOOD GRADE MATERIALS",
		desc: "Safe, hygienic and export compliant"
	},
	{
		icon: Truck,
		title: "EXPORT TRANSIT READY",
		desc: "Designed for safe international shipment"
	},
	{
		icon: Settings,
		title: "CUSTOM PACKAGING AVAILABLE",
		desc: "As per buyer requirement"
	}
];
function ProductsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, { active: "products" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pt-12 pb-10 md:pt-16 md:pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy-deep tracking-tight",
							children: "PRODUCTS & SPECIFICATIONS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm md:text-base text-gold font-medium",
							children: "Premium Indian Jaggery – Traditional Goodness, Export Quality"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rotate-45 bg-gold" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 grid gap-6 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							image: jaggery_powder_default,
							title: "JAGGERY POWDER",
							desc: "Fine, convenient and ideal for retail, food service and food-processing applications.",
							icon: Droplet
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							image: jaggery_cubes_default,
							title: "JAGGERY CUBES",
							desc: "Hygienic, uniform cubes. Perfect for retail, hospitality and portion use.",
							icon: Boxes
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							image: jaggery_blocks_default,
							title: "JAGGERY BLOCKS",
							desc: "Traditional cane jaggery blocks. Ideal for wholesale, food processing and bulk supply.",
							icon: Grid3x3
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-[1.1fr_1.2fr_0.9fr] rounded-lg overflow-hidden border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: powder_detail_default,
									alt: "Jaggery powder detail",
									loading: "lazy",
									className: "h-full w-full object-cover min-h-[300px]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-navy-deep text-cream p-6 md:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl md:text-3xl font-bold text-cream",
										children: "JAGGERY POWDER"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-[2px] w-12 bg-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-cream/75 leading-relaxed",
										children: "Traditional Indian sweetness in fine powder form, made from the finest sugarcane."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 divide-y divide-cream/10",
										children: specs.map(({ icon: Icon, k, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-[24px_100px_1fr] items-start gap-3 py-2.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
													className: "h-4 w-4 text-gold mt-0.5",
													strokeWidth: 1.5
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs font-semibold text-gold tracking-wide",
													children: k
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-xs text-cream/85 leading-relaxed",
													children: v
												})
											]
										}, k))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-cream-deep/70 p-6 md:p-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-4",
									children: benefits.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-deep text-gold",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "h-5 w-5",
												strokeWidth: 1.5
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs font-bold tracking-[0.08em] text-navy-deep",
												children: title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground mt-0.5",
												children: desc
											})]
										})]
									}, title))
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 grid gap-6 md:grid-cols-2",
					children: [{
						img: jaggery_cubes_default,
						title: "JAGGERY CUBES",
						items: [
							"Uniform size and shape",
							"Easy to use and store",
							"Consistent sweetness",
							"Ideal for retail and hospitality"
						]
					}, {
						img: jaggery_blocks_default,
						title: "JAGGERY BLOCKS",
						items: [
							"Traditional cane jaggery",
							"Ideal for bulk buyers",
							"Suitable for food processing industries",
							"Available in multiple weights"
						]
					}].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg border border-border bg-card p-5 md:p-6 shadow-[0_2px_16px_-10px_rgba(20,30,60,0.15)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[110px_1fr] sm:grid-cols-[160px_1fr] gap-5 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.title,
								loading: "lazy",
								className: "h-32 sm:h-40 w-full rounded-md object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl md:text-2xl font-bold text-navy-deep",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2",
									children: s.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-xs md:text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold mt-0.5 shrink-0" }), i]
									}, i))
								})]
							})]
						})
					}, s.title))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg bg-navy-deep text-cream p-6 md:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] items-center md:divide-x md:divide-cream/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:pr-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-xl md:text-2xl font-bold text-gold",
									children: "NEED COMPLETE TECHNICAL DOCUMENTATION?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs md:text-sm text-cream/75 leading-relaxed",
									children: "COA, laboratory reports, product specifications and applicable certifications are available to qualified buyers upon request."
								})]
							}), [
								{
									icon: Download,
									label: "DOWNLOAD SPECIFICATION"
								},
								{
									icon: Package,
									label: "REQUEST SAMPLE"
								},
								{
									icon: FileText,
									label: "GET A QUOTE"
								}
							].map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "flex items-center justify-center md:justify-start gap-3 md:px-6 text-gold group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-8 w-8 shrink-0",
									strokeWidth: 1.5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold tracking-[0.12em] group-hover:underline",
									children: label
								})]
							}, label))]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep",
							children: "PACKAGING & EXPORT SUPPLY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm md:text-base text-muted-foreground",
							children: "Flexible Packaging Solutions for International Markets"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rotate-45 bg-gold" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12 mt-10 grid gap-6 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-lg font-bold text-navy-deep tracking-wide",
										children: "RETAIL PACKAGING"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-gold mt-1",
										children: "Resealable • High Barrier • Export Ready"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: retail_packaging_default,
									alt: "Retail packaging",
									loading: "lazy",
									className: "mt-4 w-full h-56 object-cover rounded-md"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex justify-center gap-3 text-[11px] font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded border border-gold px-3 py-1 text-navy-deep",
										children: "500 g"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded border border-gold px-3 py-1 text-navy-deep",
										children: "1 kg"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2",
									children: [
										"Attractive retail-ready packaging",
										"Custom labeling available on request",
										"Shelf stable and easy to store"
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold mt-0.5 shrink-0" }), i]
									}, i))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-serif text-lg font-bold text-navy-deep tracking-wide",
										children: "BULK / FOOD SERVICE PACKAGING"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-gold mt-1",
										children: "Strong & Safe • For Commercial Use"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: bulk_packaging_default,
									alt: "Bulk packaging",
									loading: "lazy",
									className: "mt-4 w-full h-56 object-cover rounded-md"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex justify-center gap-3 text-[11px] font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded border border-gold px-3 py-1 text-navy-deep",
										children: "5 kg"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded border border-gold px-3 py-1 text-navy-deep",
										children: "10 kg"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-2",
									children: [
										"Food grade packaging materials",
										"Moisture protected for safe transportation",
										"Available in 5 kg & 10 kg packs"
									].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-gold mt-0.5 shrink-0" }), i]
									}, i))
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-lg border border-border bg-card p-6 space-y-5",
							children: packagingFeatures.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-5 w-5",
										strokeWidth: 1.5
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold tracking-[0.08em] text-navy-deep uppercase",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground mt-1",
										children: desc
									})]
								})]
							}, title))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1400px] px-4 md:px-8 lg:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-lg bg-navy-deep text-cream p-6 md:p-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 lg:grid-cols-[auto_1fr_auto] items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
											className: "h-6 w-6",
											strokeWidth: 1.5
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-lg md:text-xl font-bold text-gold",
										children: "LOOKING FOR A RELIABLE INDIAN JAGGERY SUPPLIER?"
									}) })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs md:text-sm text-cream/75 leading-relaxed lg:px-6",
									children: "Tell us your country, required quantity, packaging preference and destination port. Our export team will prepare a suitable commercial proposal for your business."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "btn-gold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Request Export Quote"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://wa.me/919371002996",
										className: "btn-outline-gold",
										style: {
											borderColor: "#25D366",
											color: "#25D366"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											viewBox: "0 0 24 24",
											className: "h-4 w-4",
											fill: "currentColor",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.52 3.48A11.86 11.86 0 0012.05 0C5.49 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.6 5.94L0 24l6.32-1.66a11.87 11.87 0 005.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.42z" })
										}), "WhatsApp Us"]
									})]
								})
							]
						})
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-16" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ProductsPage as t };
