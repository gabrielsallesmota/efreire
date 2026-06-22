import { i as faqs, t as SITE } from "./site-B6pKJFdk.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as SITE$1 } from "./site-config-CByyk9Ud.mjs";
import { c as lazyRouteComponent, d as Link, f as useRouter, l as createFileRoute, n as Scripts, o as createRouter, r as HeadContent, s as Outlet, u as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as INSIGHTS } from "./insights-Bc6ZktaA.mjs";
import { t as Route$8 } from "./insights._slug-UazC9eCn.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-s-WPd6RL.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-WpAiJ5nf.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow justify-center",
					children: "Erro 404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl text-foreground md:text-6xl",
					children: "Página não encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "O conteúdo que você procura não existe ou foi movido."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-colors hover:bg-primary-deep",
						children: "Voltar ao início"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight text-foreground",
					children: "Esta página não carregou"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Algo deu errado do nosso lado. Tente novamente ou volte ao início."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep",
						children: "Tentar novamente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted",
						children: "Ir para o início"
					})]
				})
			]
		})
	});
}
var defaultTitle = `${SITE$1.shortName} | Planejamento Financeiro e Gestão Estratégica`;
var defaultDescription = SITE$1.description;
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: defaultTitle },
			{
				name: "description",
				content: defaultDescription
			},
			{
				name: "author",
				content: SITE$1.name
			},
			{
				name: "publisher",
				content: SITE$1.name
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
			},
			{
				name: "googlebot",
				content: "index, follow, max-image-preview:large, max-snippet:-1"
			},
			{
				name: "theme-color",
				content: "#2A258C"
			},
			{
				name: "format-detection",
				content: "telephone=no"
			},
			{
				httpEquiv: "content-language",
				content: "pt-BR"
			},
			{
				property: "og:site_name",
				content: SITE$1.name
			},
			{
				property: "og:title",
				content: defaultTitle
			},
			{
				property: "og:description",
				content: defaultDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "pt_BR"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: defaultTitle
			},
			{
				name: "twitter:description",
				content: defaultDescription
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
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
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "alternate",
				hrefLang: "pt-BR",
				href: SITE$1.url
			},
			{
				rel: "alternate",
				hrefLang: "x-default",
				href: SITE$1.url
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@graph": [
					{
						"@type": "Organization",
						"@id": `${SITE$1.url}/#organization`,
						name: SITE$1.name,
						alternateName: SITE$1.shortName,
						url: SITE$1.url,
						email: SITE$1.email,
						telephone: SITE$1.phone,
						description: SITE$1.description,
						logo: {
							"@type": "ImageObject",
							url: `${SITE$1.url}/og-image.jpg`
						},
						areaServed: [{
							"@type": "City",
							name: "São Paulo",
							"@id": "https://www.wikidata.org/wiki/Q174"
						}, {
							"@type": "Country",
							name: "Brasil"
						}],
						address: {
							"@type": "PostalAddress",
							addressLocality: "São Paulo",
							addressRegion: "SP",
							addressCountry: "BR"
						},
						contactPoint: [{
							"@type": "ContactPoint",
							contactType: "customer service",
							email: SITE$1.email,
							telephone: SITE$1.phone,
							areaServed: "BR",
							availableLanguage: ["Portuguese", "pt-BR"]
						}],
						sameAs: ["https://instagram.com/efreire", "https://linkedin.com/company/efreire"]
					},
					{
						"@type": "ProfessionalService",
						"@id": `${SITE$1.url}/#business`,
						name: SITE$1.name,
						url: SITE$1.url,
						parentOrganization: { "@id": `${SITE$1.url}/#organization` },
						priceRange: "$$$",
						areaServed: [{
							"@type": "City",
							name: "São Paulo"
						}, {
							"@type": "Country",
							name: "Brasil"
						}],
						serviceType: [
							"Planejamento Financeiro",
							"Consultoria Financeira e FP&A",
							"Fluxo de Caixa e Modelagem Financeira",
							"DRE Gerencial",
							"Estruturação de Processos Financeiros",
							"Compliance e Governança"
						]
					},
					{
						"@type": "WebSite",
						"@id": `${SITE$1.url}/#website`,
						url: SITE$1.url,
						name: SITE$1.name,
						inLanguage: "pt-BR",
						publisher: { "@id": `${SITE$1.url}/#organization` }
					}
				]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$5 = () => import("./sobre-DIuY8E15.mjs");
var Route$6 = createFileRoute("/sobre")({
	head: () => {
		const title = `Sobre a Efreire | Consultoria Financeira com mais de 20 anos`;
		const description = "Conheça a Efreire: mais de 20 anos em Finanças, Controladoria e Contabilidade, com experiência real em Via Varejo — agora apoiando PMEs.";
		const url = `${SITE$1.url}/sobre`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:type",
					content: "profile"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "AboutPage",
					name: title,
					description,
					url,
					mainEntity: { "@id": `${SITE$1.url}/#organization` }
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Início",
						item: `${SITE$1.url}/`
					}, {
						"@type": "ListItem",
						position: 2,
						name: "Sobre",
						item: url
					}]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var BASE_URL = SITE$1.url;
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0",
				lastmod: today
			},
			{
				path: "/sobre",
				changefreq: "monthly",
				priority: "0.8",
				lastmod: today
			},
			{
				path: "/servicos",
				changefreq: "monthly",
				priority: "0.9",
				lastmod: today
			},
			{
				path: "/metodologia",
				changefreq: "monthly",
				priority: "0.8",
				lastmod: today
			},
			{
				path: "/contato",
				changefreq: "monthly",
				priority: "0.7",
				lastmod: today
			},
			...INSIGHTS.map((i) => ({
				path: `/insights/${i.slug}`,
				changefreq: "monthly",
				priority: "0.7",
				lastmod: i.publishedAt
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml; charset=utf-8",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./servicos-BEDqMXPK.mjs");
var Route$4 = createFileRoute("/servicos")({
	head: () => {
		const title = `Serviços | Consultoria Financeira, FP&A, Fluxo de Caixa e DRE Gerencial`;
		const description = "Consultoria Financeira e FP&A, estruturação de processos, fluxo de caixa e modelagem, DRE gerencial, análises de performance, compliance e governança para PMEs.";
		const url = `${SITE$1.url}/servicos`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					name: "keywords",
					content: "FP&A, fluxo de caixa, DRE gerencial, processos financeiros, compliance, governança, controladoria, modelagem financeira"
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ItemList",
					name: "Serviços Efreire",
					itemListElement: [
						"Consultoria Financeira e FP&A",
						"Estruturação de Processos Financeiros",
						"Fluxo de Caixa e Modelagem Financeira",
						"DRE Gerencial e Análises de Performance",
						"Compliance e Governança"
					].map((name, i) => ({
						"@type": "ListItem",
						position: i + 1,
						item: {
							"@type": "Service",
							name,
							provider: { "@id": `${SITE$1.url}/#organization` },
							areaServed: {
								"@type": "Country",
								name: "Brasil"
							}
						}
					}))
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Início",
						item: `${SITE$1.url}/`
					}, {
						"@type": "ListItem",
						position: 2,
						name: "Serviços",
						item: url
					}]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./metodologia-BN9VEiNN.mjs");
var Route$3 = createFileRoute("/metodologia")({
	head: () => {
		const title = `Metodologia | Diagnóstico, Estruturação, Implementação e Evolução`;
		const description = "Metodologia prática Efreire em 4 etapas: Diagnóstico, Estruturação, Implementação e Evolução. Profissionalize a gestão financeira da sua empresa em 90 dias.";
		const url = `${SITE$1.url}/metodologia`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "HowTo",
					name: "Metodologia Efreire de Estruturação Financeira",
					description,
					step: [
						{
							name: "Diagnóstico",
							text: "Identificação dos principais gargalos financeiros e operacionais."
						},
						{
							name: "Estruturação",
							text: "Definição de processos, controles, indicadores e modelos adequados."
						},
						{
							name: "Implementação",
							text: "Aplicação prática das melhorias junto ao time da empresa."
						},
						{
							name: "Evolução",
							text: "Acompanhamento dos resultados e aprimoramento contínuo."
						}
					].map((s, i) => ({
						"@type": "HowToStep",
						position: i + 1,
						name: s.name,
						text: s.text
					}))
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Início",
						item: `${SITE$1.url}/`
					}, {
						"@type": "ListItem",
						position: 2,
						name: "Metodologia",
						item: url
					}]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contato-U_CfJq4y.mjs");
var Route$2 = createFileRoute("/contato")({
	head: () => {
		const title = `Contato | Agende um Diagnóstico Financeiro — Efreire`;
		const description = "Fale com a Efreire e agende um diagnóstico financeiro inicial gratuito, de 30 minutos, sem compromisso. Resposta rápida por e-mail, telefone ou WhatsApp.";
		const url = `${SITE$1.url}/contato`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ContactPage",
					name: title,
					description,
					url,
					mainEntity: {
						"@type": "Organization",
						"@id": `${SITE$1.url}/#organization`,
						email: SITE$1.email,
						telephone: SITE$1.phone,
						contactPoint: [{
							"@type": "ContactPoint",
							contactType: "customer service",
							email: SITE$1.email,
							telephone: SITE$1.phone,
							areaServed: "BR",
							availableLanguage: ["Portuguese", "pt-BR"]
						}]
					}
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Início",
						item: `${SITE$1.url}/`
					}, {
						"@type": "ListItem",
						position: 2,
						name: "Contato",
						item: url
					}]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./consultoria-financeira-sao-paulo-BUeAC0nM.mjs");
var Route$1 = createFileRoute("/consultoria-financeira-sao-paulo")({
	head: () => {
		const title = "Efreire — Visibilidade total do seu caixa em 30 dias";
		const description = "Assessoria financeira especializada em São Paulo. Transformamos a desordem financeira da sua empresa em processos claros, rentabilidade e decisões baseadas em dados.";
		const url = `${SITE$1.url}/consultoria-financeira-sao-paulo`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					name: "robots",
					content: "index, follow"
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:image",
					content: `${SITE$1.url}/og-image.jpg`
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ProfessionalService",
					name: "Efreire Assessoria",
					url,
					email: SITE.email,
					telephone: SITE.telefoneHref,
					areaServed: [{
						"@type": "City",
						name: "São Paulo"
					}, {
						"@type": "Country",
						name: "Brasil"
					}],
					address: {
						"@type": "PostalAddress",
						addressLocality: "São Paulo",
						addressRegion: "SP",
						addressCountry: "BR"
					}
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: faqs.map((f) => ({
						"@type": "Question",
						name: f.q,
						acceptedAnswer: {
							"@type": "Answer",
							text: f.a
						}
					}))
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-uFhwZnw2.mjs");
var Route = createFileRoute("/")({
	head: () => {
		const title = `${SITE$1.shortName} | Gestão Financeira Estratégica para Empresas`;
		const description = "Consultoria financeira para PMEs: planejamento, fluxo de caixa, DRE gerencial, FP&A e governança. Clareza, controle e crescimento orientados por dados.";
		const url = `${SITE$1.url}/`;
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					name: "keywords",
					content: "consultoria financeira, planejamento financeiro, fluxo de caixa, DRE gerencial, FP&A, governança financeira, gestão financeira PME, controladoria"
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					property: "og:locale",
					content: "pt_BR"
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: description
				}
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "FAQPage",
					mainEntity: [
						{
							"@type": "Question",
							name: "O que é gestão financeira estratégica?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "É a prática de transformar informações financeiras em decisões orientadas por dados — combinando planejamento, fluxo de caixa, indicadores e governança para apoiar o crescimento da empresa com segurança."
							}
						},
						{
							"@type": "Question",
							name: "Para que tipo de empresa a Efreire atende?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Atendemos pequenas e médias empresas em crescimento que querem profissionalizar a gestão financeira, ganhar previsibilidade de caixa e tomar decisões com base em indicadores confiáveis."
							}
						},
						{
							"@type": "Question",
							name: "Quanto tempo leva para ver resultados?",
							acceptedAnswer: {
								"@type": "Answer",
								text: "Nossa metodologia entrega ganhos rápidos nos primeiros 30 a 90 dias: diagnóstico, estruturação, implementação e evolução contínua, com indicadores mensuráveis em cada etapa."
							}
						}
					]
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [{
						"@type": "ListItem",
						position: 1,
						name: "Início",
						item: url
					}]
				})
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SobreRoute = Route$6.update({
	id: "/sobre",
	path: "/sobre",
	getParentRoute: () => Route$7
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$7
});
var ServicosRoute = Route$4.update({
	id: "/servicos",
	path: "/servicos",
	getParentRoute: () => Route$7
});
var MetodologiaRoute = Route$3.update({
	id: "/metodologia",
	path: "/metodologia",
	getParentRoute: () => Route$7
});
var ContatoRoute = Route$2.update({
	id: "/contato",
	path: "/contato",
	getParentRoute: () => Route$7
});
var ConsultoriaFinanceiraSaoPauloRoute = Route$1.update({
	id: "/consultoria-financeira-sao-paulo",
	path: "/consultoria-financeira-sao-paulo",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	ConsultoriaFinanceiraSaoPauloRoute,
	ContatoRoute,
	MetodologiaRoute,
	ServicosRoute,
	SitemapDotxmlRoute,
	SobreRoute,
	InsightsSlugRoute: Route$8.update({
		id: "/insights/$slug",
		path: "/insights/$slug",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
