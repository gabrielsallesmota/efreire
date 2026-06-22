import { A as Database, B as Building2, H as Award, O as Eye, R as ChartLine, U as ArrowUpRight, a as TrendingUp, c as Sparkles, g as MessageCircle, i as Users, j as Compass, l as ShieldCheck, n as Workflow, r as Wallet, z as ChartColumn } from "../_libs/lucide-react.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { a as WHATSAPP_URL } from "./site-config-CByyk9Ud.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-CplRlhip.mjs";
import { t as INSIGHTS } from "./insights-Bc6ZktaA.mjs";
import { t as SectionHeader } from "./SectionHeader-DRhlU05y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-uFhwZnw2.js
var import_jsx_runtime = require_jsx_runtime();
var hero_executivos_default = "/assets/hero-executivos-PXtfHCZX.jpg";
var problemas = [
	{
		icon: Wallet,
		title: "Fluxo de caixa sem segurança",
		text: "Processos manuais e falta de previsibilidade nas entradas e saídas."
	},
	{
		icon: Workflow,
		title: "Fechamento financeiro lento",
		text: "A consolidação das informações demora mais do que deveria."
	},
	{
		icon: Database,
		title: "Dados espalhados",
		text: "Informações em diferentes sistemas e planilhas, sem uma única fonte da verdade."
	},
	{
		icon: Eye,
		title: "Falta de visão da rentabilidade",
		text: "O gestor não enxerga com clareza o que realmente gera resultado."
	},
	{
		icon: ChartColumn,
		title: "Decisões com informações atrasadas",
		text: "Escolhas importantes tomadas com dados incompletos ou desatualizados."
	}
];
var pilares = [
	{
		icon: Eye,
		title: "Visibilidade financeira",
		text: "Entenda o presente e antecipe cenários futuros através de análises e modelos financeiros."
	},
	{
		icon: Workflow,
		title: "Processos organizados",
		text: "Padronização das rotinas financeiras para reduzir falhas, retrabalho e controles paralelos."
	},
	{
		icon: ChartColumn,
		title: "Gestão orientada por dados",
		text: "Informações estruturadas para apoiar decisões de sócios, CFOs e controllers."
	},
	{
		icon: TrendingUp,
		title: "Maior eficiência operacional",
		text: "Implementações práticas com foco em ganhos rápidos e resultados mensuráveis."
	}
];
var paginas = [
	{
		icon: Building2,
		eyebrow: "Sobre",
		title: "Quem somos",
		text: "Mais de 20 anos de experiência em Finanças, Controladoria e Contabilidade.",
		to: "/sobre"
	},
	{
		icon: ChartLine,
		eyebrow: "Serviços",
		title: "O que entregamos",
		text: "Consultoria Financeira, FP&A, processos, fluxo de caixa, DRE gerencial e governança.",
		to: "/servicos"
	},
	{
		icon: Compass,
		eyebrow: "Metodologia",
		title: "Como trabalhamos",
		text: "Diagnóstico, estruturação, implementação e evolução — sem modelos engessados.",
		to: "/metodologia"
	}
];
var fadeUp = {
	initial: {
		opacity: 0,
		y: 24
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	}
};
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,oklch(0.71_0.13_285/0.18),transparent_60%),radial-gradient(45%_40%_at_85%_0%,oklch(0.32_0.17_275/0.14),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page pt-6 pb-20 md:pt-8 md:pb-28 lg:pt-10 lg:pb-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-12 lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { duration: .5 },
								className: "eyebrow",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Efreire Assessoria & Estratégia Financeira"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .05
								},
								className: "mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl xl:text-7xl",
								children: [
									"Gestão Financeira Estratégica para empresas que buscam",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "italic text-primary",
										children: "clareza, controle e crescimento"
									}),
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .7,
									delay: .15
								},
								className: "mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground",
								children: "Sua empresa cresceu. A gestão financeira precisa acompanhar. Transformamos informações financeiras dispersas em processos estruturados, indicadores confiáveis e decisões orientadas por dados."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .3
								},
								className: "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contato",
									className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary-deep hover:text-primary-foreground hover:shadow-glow",
									children: ["Agende uma conversa estratégica", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: WHATSAPP_URL,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "Falar no WhatsApp"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 6
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .5,
									delay: .4
								},
								className: "mt-3 text-xs text-muted-foreground",
								children: "Diagnóstico inicial gratuito, de 30 minutos, sem compromisso."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .5
								},
								className: "mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-primary" }), "+20 anos de experiência"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4 text-primary" }), "Resultados mensuráveis"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-primary" }), "PMEs em crescimento"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
								initial: {
									opacity: 0,
									y: 8
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: {
									duration: .6,
									delay: .6
								},
								className: "mt-6 text-xs uppercase tracking-wider text-muted-foreground",
								children: [
									"Experiência prática em",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-foreground",
										children: "Via Varejo"
									}),
									"."
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .96,
							y: 20
						},
						animate: {
							opacity: 1,
							scale: 1,
							y: 0
						},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							]
						},
						className: "relative lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-glow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_executivos_default,
								alt: "Executivos analisando indicadores financeiros e crescimento empresarial",
								width: 1600,
								height: 1200,
								loading: "eager",
								fetchPriority: "high",
								decoding: "async",
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent mix-blend-multiply" })]
						})
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Diagnóstico",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Quando a operação cresce, a falta de estrutura financeira aparece." }),
					description: "Muitas empresas chegam a um ponto em que a gestão financeira não acompanha o crescimento. A consequência? Menos previsibilidade, mais retrabalho e dificuldade para planejar o futuro."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: problemas.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
						...fadeUp,
						transition: {
							duration: .5,
							delay: i * .06
						},
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-xl text-foreground",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: p.text
							})
						]
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Solução",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"A solução: transformar o financeiro em uma área ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-primary",
							children: "estratégica"
						}),
						"."
					] }),
					description: "A Efreire estrutura a gestão financeira para que sua empresa tenha clareza, controle e previsibilidade."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2",
					children: pilares.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						transition: {
							duration: .55,
							delay: i * .08
						},
						className: "group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-2xl text-foreground",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 leading-relaxed text-muted-foreground",
								children: p.text
							})
						]
					}, p.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Perspectivas",
						title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							"Insights na prática em ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "gestão financeira"
							}),
							"."
						] }),
						description: "Análises curtas e acionáveis sobre fluxo de caixa, controladoria e governança — extraídas de mais de 20 anos de experiência corporativa."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: INSIGHTS.map((article, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
						...fadeUp,
						transition: {
							duration: .55,
							delay: i * .08
						},
						className: "group flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/insights/$slug",
							params: { slug: article.slug },
							className: "flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: article.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-pretty text-xl leading-tight text-foreground md:text-2xl",
									children: article.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground",
									children: article.dek
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center justify-between border-t border-border pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-medium text-muted-foreground",
										children: article.readTime
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3",
										children: ["Ler artigo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
									})]
								})
							]
						})
					}, article.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Explore",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						"Conheça a ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-primary",
							children: "Efreire"
						}),
						" em detalhe."
					] }),
					description: "Cada área do nosso trabalho tem uma página dedicada. Escolha por onde começar."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: paginas.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						transition: {
							duration: .55,
							delay: i * .08
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: p.to,
							className: "group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-elegant",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow mt-6",
									children: p.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl text-foreground",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 flex-1 leading-relaxed text-muted-foreground",
									children: p.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3",
									children: ["Ver página", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
								})
							]
						})
					}, p.to))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					transition: { duration: .7 },
					className: "relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground shadow-glow md:px-16 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-0 opacity-40 [background:radial-gradient(60%_60%_at_80%_0%,oklch(0.71_0.13_285/0.6),transparent_60%),radial-gradient(50%_60%_at_0%_100%,oklch(0.95_0.05_285/0.25),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 grid items-center gap-10 lg:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "eyebrow text-primary-foreground/80",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Vamos conversar?"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-5 text-balance text-3xl text-primary-foreground md:text-4xl lg:text-5xl",
									children: "Sua empresa não precisa de mais planilhas. Precisa de gestão."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-2xl text-pretty text-primary-foreground/80",
									children: "Uma estrutura financeira organizada permite enxergar oportunidades, reduzir riscos e tomar decisões com mais confiança."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm font-medium text-primary-foreground/70",
									children: "Diagnóstico inicial gratuito, de 30 minutos, sem compromisso."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3 sm:flex-row lg:col-span-2 lg:justify-end",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contato",
								className: "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand-hover hover:text-primary-foreground",
								children: ["Agende uma conversa estratégica", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), "WhatsApp"]
							})]
						})]
					})]
				})
			})
		})
	] });
}
//#endregion
export { HomePage as component };
