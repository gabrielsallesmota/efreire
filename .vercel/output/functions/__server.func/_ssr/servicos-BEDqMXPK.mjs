import { L as ChartPie, N as CircleCheck, R as ChartLine, S as Layers, U as ArrowUpRight, c as Sparkles, l as ShieldCheck, r as Wallet } from "../_libs/lucide-react.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-CplRlhip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/servicos-BEDqMXPK.js
var import_jsx_runtime = require_jsx_runtime();
var servicos = [
	{
		icon: ChartLine,
		title: "Consultoria Financeira e FP&A",
		description: "Estruturamos planejamento financeiro, acompanhamento de resultados, análises e indicadores para transformar números em direcionamento estratégico.",
		beneficios: [
			"Visão clara do futuro financeiro",
			"Decisões com base em projeções",
			"Identificação antecipada de riscos"
		],
		resultados: [
			"Previsibilidade de caixa",
			"Metas financeiras realistas",
			"Maior segurança em investimentos"
		]
	},
	{
		icon: Layers,
		title: "Estruturação de Processos Financeiros",
		description: "Mapeamos, organizamos e aprimoramos os processos para gerar maior controle sobre contas a pagar e receber, rotinas financeiras, fluxos de aprovação, conciliações e a integração financeiro × contabilidade.",
		beneficios: [
			"Operação previsível e padronizada",
			"Redução de retrabalho e erros",
			"Empresa menos dependente de pessoas-chave"
		],
		resultados: [
			"Escalabilidade do negócio",
			"Maior eficiência operacional",
			"Controles internos mais sólidos"
		]
	},
	{
		icon: Wallet,
		title: "Fluxo de Caixa e Modelagem Financeira",
		description: "Criamos modelos que permitem acompanhar entradas e saídas, projetar cenários, identificar riscos financeiros e apoiar decisões com maior segurança.",
		beneficios: [
			"Controle total das entradas e saídas",
			"Eliminação de surpresas no caixa",
			"Apoio para negociações com bancos"
		],
		resultados: [
			"Redução de juros e tarifas",
			"Capital de giro otimizado",
			"Confiança nas decisões diárias"
		]
	},
	{
		icon: ChartPie,
		title: "DRE Gerencial e Análises de Performance",
		description: "Construímos visões gerenciais para acompanhar rentabilidade real do negócio, resultado por unidade, produto ou serviço, margens, indicadores financeiros e evolução dos resultados.",
		beneficios: [
			"Visibilidade real do lucro",
			"Análise de margens por área",
			"Apoio em decisões de mix e precificação"
		],
		resultados: [
			"Aumento de margem",
			"Eliminação de produtos deficitários",
			"Foco no que realmente dá resultado"
		]
	},
	{
		icon: ShieldCheck,
		title: "Compliance e Governança",
		description: "Fortalecemos controles internos para aumentar a confiabilidade das informações: conciliações financeiras, organização documental, integração entre financeiro e contabilidade, e modelo de governança.",
		beneficios: [
			"Informações financeiras confiáveis",
			"Redução de riscos e retrabalho",
			"Preparação para auditorias e due diligence"
		],
		resultados: [
			"Maior credibilidade com stakeholders",
			"Processos auditáveis",
			"Base sólida para crescimento"
		]
	}
];
var fadeUp = {
	initial: {
		opacity: 0,
		y: 20
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
function ServicosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_70%_0%,oklch(0.71_0.13_285/0.15),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20 md:py-28 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Serviços"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl",
						children: [
							"Como ajudamos sua empresa a ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "crescer com controle"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground",
						children: "Combinamos planejamento financeiro, indicadores, estruturação de processos e governança em um portfólio integrado — sob medida para o estágio e o setor do seu negócio."
					})
				]
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-20 md:pb-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6",
				children: servicos.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					...fadeUp,
					transition: {
						duration: .6,
						delay: i * .04
					},
					className: "group grid gap-8 rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-elegant md:p-10 lg:grid-cols-12 lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 text-3xl text-foreground md:text-4xl",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-pretty leading-relaxed text-muted-foreground",
								children: s.description
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:col-span-8 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Benefícios"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: s.beneficios.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-sm text-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
								}, b))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Resultados esperados"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: s.resultados.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-sm text-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r })]
								}, r))
							})]
						})]
					})]
				}, s.title))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 rounded-3xl bg-primary p-10 text-primary-foreground shadow-glow md:p-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 md:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-balance text-3xl text-primary-foreground md:text-4xl",
							children: "Quer entender qual serviço faz mais sentido para sua empresa?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-primary-foreground/80",
							children: "Em uma conversa de diagnóstico mostramos exatamente onde começar."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:text-right",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contato",
							className: "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand-hover hover:text-primary-foreground",
							children: ["Agende uma conversa", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
						})
					})]
				})
			})]
		})
	})] });
}
//#endregion
export { ServicosPage as component };
