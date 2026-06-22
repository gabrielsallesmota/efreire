import { N as CircleCheck, U as ArrowUpRight, a as TrendingUp, c as Sparkles, m as Rocket, p as Search, u as Settings } from "../_libs/lucide-react.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { d as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteLayout } from "./SiteLayout-CplRlhip.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/metodologia-BN9VEiNN.js
var import_jsx_runtime = require_jsx_runtime();
var etapas = [
	{
		step: "01",
		title: "Diagnóstico",
		icon: Search,
		text: "Identificação dos principais gargalos financeiros e operacionais. Cada empresa possui uma realidade, desafios e maturidade financeira diferentes — por isso começamos ouvindo e entendendo antes de propor qualquer solução.",
		detalhes: [
			"Análise do cenário financeiro atual",
			"Entrevistas com sócios e gestores",
			"Mapeamento de dores e prioridades"
		]
	},
	{
		step: "02",
		title: "Estruturação",
		icon: Settings,
		text: "Definição de processos, controles, indicadores e modelos adequados. Desenhamos a arquitetura financeira que vai dar base para as decisões da empresa.",
		detalhes: [
			"Mapeamento de processos financeiros",
			"Plano de contas gerencial",
			"Definição de KPIs e relatórios"
		]
	},
	{
		step: "03",
		title: "Implementação",
		icon: Rocket,
		text: "Aplicação prática das melhorias junto ao time da empresa. Não entregamos apenas documentos — trabalhamos lado a lado para colocar cada processo e indicador em funcionamento.",
		detalhes: [
			"Estruturação do fluxo de caixa",
			"Relatórios gerenciais confiáveis",
			"Padronização de rotinas e aprovações"
		]
	},
	{
		step: "04",
		title: "Evolução",
		icon: TrendingUp,
		text: "Acompanhamento dos resultados e aprimoramento contínuo. A gestão financeira é um processo vivo, e evoluímos junto com a empresa.",
		detalhes: [
			"Reuniões mensais de performance",
			"Revisão de metas e cenários",
			"Apoio consultivo contínuo"
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
function MetodologiaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,oklch(0.71_0.13_285/0.15),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-20 md:py-28 lg:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "eyebrow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Metodologia"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl",
						children: [
							"Uma metodologia prática, feita para gerar",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "evolução rápida"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground",
						children: "Não aplicamos modelos engessados. Cada empresa possui uma realidade, desafios e maturidade financeira diferentes. Por isso, desenvolvemos uma abordagem personalizada em quatro etapas integradas — do diagnóstico à evolução contínua."
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
				children: etapas.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					...fadeUp,
					transition: {
						duration: .6,
						delay: i * .05
					},
					className: "grid gap-8 rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-elegant md:p-10 lg:grid-cols-12 lg:gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-elegant",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.icon, { className: "h-6 w-6" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display mt-4 block text-5xl text-primary",
								children: e.step
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 text-3xl text-foreground md:text-4xl",
								children: e.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-pretty leading-relaxed text-muted-foreground",
								children: e.text
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-surface p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "O que fazemos nesta etapa"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: e.detalhes.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-sm text-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
								}, d))
							})]
						})
					})]
				}, e.step))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 rounded-3xl bg-primary p-10 text-primary-foreground shadow-glow md:p-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 md:grid-cols-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-balance text-3xl text-primary-foreground md:text-4xl",
							children: "Quer aplicar essa metodologia na sua empresa?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-primary-foreground/80",
							children: "Começamos pelo diagnóstico — uma conversa estratégica e sem compromisso."
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
export { MetodologiaPage as component };
