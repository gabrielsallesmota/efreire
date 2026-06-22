import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { E as Globe, U as ArrowUpRight, _ as Menu, g as MessageCircle, h as Phone, t as X, w as Instagram, x as Linkedin, y as Mail } from "../_libs/lucide-react.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { a as WHATSAPP_URL, i as SITE, n as LINKEDIN_URL, r as NAV_LINKS, t as INSTAGRAM_URL } from "./site-config-CByyk9Ud.mjs";
import { d as Link, i as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-CplRlhip.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var efreire_logo_horizontal_default = "/assets/efreire-logo-horizontal-KBikNiVg.png";
function Logo({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		"aria-label": SITE.name,
		className: `inline-flex items-center ${className ?? ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: efreire_logo_horizontal_default,
			alt: SITE.name,
			width: 210,
			height: 64,
			className: "h-9 w-auto md:h-10"
		})
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-16 items-center justify-between md:h-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					"aria-label": "Navegação principal",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "relative px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary",
						activeProps: { className: "text-primary" },
						activeOptions: { exact: true },
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-3 lg:flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contato",
						className: "group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary-deep hover:shadow-glow",
						children: ["Agendar diagnóstico", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -8
			},
			transition: { duration: .2 },
			className: "lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page pb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl border border-border bg-card p-3 shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-col",
						children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "rounded-xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary",
							activeProps: { className: "text-primary bg-muted" },
							activeOptions: { exact: true },
							children: link.label
						}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contato",
							className: "mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground",
							children: ["Agendar diagnóstico", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})]
					})
				})
			})
		}) })]
	});
}
var servicos = [
	"Planejamento Financeiro",
	"Fluxo de Caixa",
	"DRE Gerencial",
	"KPIs e Indicadores",
	"Estruturação de Processos",
	"Planejamento Estratégico"
];
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-16 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground",
									children: "Transformamos números em decisões estratégicas. Planejamento financeiro, estruturação empresarial e gestão de indicadores para empresas que querem crescer com segurança e previsibilidade."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-7 flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: WHATSAPP_URL,
											target: "_blank",
											rel: "noreferrer noopener",
											"aria-label": "WhatsApp",
											className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: INSTAGRAM_URL,
											target: "_blank",
											rel: "noreferrer noopener",
											"aria-label": "Instagram",
											className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: LINKEDIN_URL,
											target: "_blank",
											rel: "noreferrer noopener",
											"aria-label": "LinkedIn",
											className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-foreground",
							children: "Navegação"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "text-muted-foreground transition-colors hover:text-primary",
								children: l.label
							}) }, l.to))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold uppercase tracking-wider text-foreground",
							children: "Serviços"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: servicos.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/servicos",
								className: "text-muted-foreground transition-colors hover:text-primary",
								children: s
							}) }, s))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mt-14" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 text-sm text-muted-foreground md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-6 gap-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" ",
									SITE.phoneDisplay
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }),
									" ",
									SITE.email
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.url,
								className: "inline-flex items-center gap-2 hover:text-primary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" }),
									" ",
									SITE.domain
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "md:text-right",
						children: [
							"© ",
							year,
							" ",
							SITE.name,
							". Todos os direitos reservados."
						]
					})]
				})
			]
		})
	});
}
function WhatsAppFloat() {
	const [showLabel, setShowLabel] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const showTimer = setTimeout(() => setShowLabel(true), 1800);
		const hideOnScroll = () => setShowLabel(false);
		window.addEventListener("scroll", hideOnScroll, {
			once: true,
			passive: true
		});
		const hideTimer = setTimeout(() => setShowLabel(false), 7e3);
		return () => {
			clearTimeout(showTimer);
			clearTimeout(hideTimer);
			window.removeEventListener("scroll", hideOnScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-50 flex items-center gap-2 md:bottom-7 md:right-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: showLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				opacity: 0,
				x: 10,
				scale: .95
			},
			animate: {
				opacity: 1,
				x: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				x: 10,
				scale: .95
			},
			transition: { duration: .25 },
			className: "rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-elegant",
			children: "Fale com a gente"
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
			href: WHATSAPP_URL,
			target: "_blank",
			rel: "noreferrer noopener",
			"aria-label": "Falar no WhatsApp",
			initial: {
				opacity: 0,
				scale: .6,
				y: 20
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			transition: {
				delay: 1.2,
				type: "spring",
				stiffness: 180,
				damping: 18
			},
			whileHover: { scale: 1.06 },
			whileTap: { scale: .95 },
			className: "inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] ring-4 ring-white/40 md:h-16 md:w-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-25" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 32 32",
				className: "relative h-7 w-7 md:h-8 md:w-8",
				fill: "currentColor",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.6.14-.18.27-.69.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.83-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 6.4c-5.32 0-9.65 4.33-9.65 9.65 0 1.7.45 3.36 1.3 4.83L6 26l5.31-1.39c1.41.77 3 1.17 4.7 1.17h.01c5.32 0 9.65-4.33 9.65-9.65 0-2.58-1.01-5-2.83-6.83A9.6 9.6 0 0 0 16.02 6.4zm0 17.62c-1.51 0-3-.41-4.29-1.18l-.31-.18-3.18.83.85-3.1-.2-.32a8.05 8.05 0 0 1-1.24-4.31c0-4.45 3.62-8.07 8.08-8.07 2.16 0 4.18.84 5.71 2.37a8 8 0 0 1 2.36 5.71c0 4.45-3.62 8.07-8.08 8.07z" })
			})]
		})]
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-16 md:pt-20",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {})
		]
	});
}
//#endregion
export { SiteLayout as t };
