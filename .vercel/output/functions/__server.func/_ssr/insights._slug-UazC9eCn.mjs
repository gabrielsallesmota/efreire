import { i as SITE } from "./site-config-CByyk9Ud.mjs";
import { T as notFound, c as lazyRouteComponent, l as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getInsight } from "./insights-Bc6ZktaA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights._slug-UazC9eCn.js
var $$splitComponentImporter = () => import("./insights._slug-CtdzpFhn.mjs");
var $$splitErrorComponentImporter = () => import("./insights._slug-CE-UUXhf.mjs");
var $$splitNotFoundComponentImporter = () => import("./insights._slug-B91aQryL.mjs");
var Route = createFileRoute("/insights/$slug")({
	loader: ({ params }) => {
		const insight = getInsight(params.slug);
		if (!insight) throw notFound();
		return { insight };
	},
	head: ({ params, loaderData }) => {
		const insight = loaderData?.insight;
		if (!insight) return { meta: [{ title: `Insight não encontrado — ${SITE.shortName}` }] };
		const url = `${SITE.url}/insights/${params.slug}`;
		return {
			meta: [
				{ title: `${insight.title} — ${SITE.shortName}` },
				{
					name: "description",
					content: insight.dek
				},
				{
					name: "keywords",
					content: `${insight.category}, gestão financeira, consultoria financeira, ${insight.title}`
				},
				{
					property: "og:title",
					content: insight.title
				},
				{
					property: "og:description",
					content: insight.dek
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:locale",
					content: "pt_BR"
				},
				{
					property: "article:section",
					content: insight.category
				},
				{
					property: "article:published_time",
					content: insight.publishedAt
				},
				{
					property: "article:author",
					content: SITE.name
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				},
				{
					name: "twitter:title",
					content: insight.title
				},
				{
					name: "twitter:description",
					content: insight.dek
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
					"@type": "Article",
					headline: insight.title,
					description: insight.dek,
					datePublished: insight.publishedAt,
					dateModified: insight.publishedAt,
					articleSection: insight.category,
					inLanguage: "pt-BR",
					author: {
						"@type": "Organization",
						name: SITE.name,
						url: SITE.url
					},
					publisher: {
						"@type": "Organization",
						name: SITE.name,
						logo: {
							"@type": "ImageObject",
							url: `${SITE.url}/og-image.jpg`
						}
					},
					mainEntityOfPage: {
						"@type": "WebPage",
						"@id": url
					}
				})
			}, {
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Início",
							item: `${SITE.url}/`
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Insights",
							item: `${SITE.url}/`
						},
						{
							"@type": "ListItem",
							position: 3,
							name: insight.title,
							item: url
						}
					]
				})
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
