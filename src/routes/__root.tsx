import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";
import { SITE } from "../lib/site-config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">Erro 404</p>
        <h1 className="mt-4 text-5xl text-foreground md:text-6xl">Página não encontrada</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-colors hover:bg-primary-deep"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo deu errado do nosso lado. Tente novamente ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Ir para o início
          </a>
        </div>
      </div>
    </div>
  );
}

const defaultTitle = `${SITE.shortName} | Planejamento Financeiro e Gestão Estratégica`;
const defaultDescription = SITE.description;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      { name: "author", content: SITE.name },
      { name: "publisher", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "theme-color", content: "#2A258C" },
      { name: "format-detection", content: "telephone=no" },
      { httpEquiv: "content-language", content: "pt-BR" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: defaultTitle },
      { property: "og:description", content: defaultDescription },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: defaultTitle },
      { name: "twitter:description", content: defaultDescription },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
      { rel: "alternate", hrefLang: "pt-BR", href: SITE.url },
      { rel: "alternate", hrefLang: "x-default", href: SITE.url },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              name: SITE.name,
              alternateName: SITE.shortName,
              url: SITE.url,
              email: SITE.email,
              telephone: SITE.phone,
              description: SITE.description,
              logo: {
                "@type": "ImageObject",
                url: `${SITE.url}/og-image.jpg`,
              },
              areaServed: [
                { "@type": "City", name: "São Paulo", "@id": "https://www.wikidata.org/wiki/Q174" },
                { "@type": "Country", name: "Brasil" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer service",
                email: SITE.email,
                telephone: SITE.phone,
                areaServed: "BR",
                availableLanguage: ["Portuguese", "pt-BR"],
              }],
              sameAs: [
                "https://instagram.com/efreire",
                "https://linkedin.com/company/efreire",
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": `${SITE.url}/#business`,
              name: SITE.name,
              url: SITE.url,
              parentOrganization: { "@id": `${SITE.url}/#organization` },
              priceRange: "$$$",
              areaServed: [
                { "@type": "City", name: "São Paulo" },
                { "@type": "Country", name: "Brasil" },
              ],
              serviceType: [
                "Planejamento Financeiro",
                "Consultoria Financeira e FP&A",
                "Fluxo de Caixa e Modelagem Financeira",
                "DRE Gerencial",
                "Estruturação de Processos Financeiros",
                "Compliance e Governança",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE.url}/#website`,
              url: SITE.url,
              name: SITE.name,
              inLanguage: "pt-BR",
              publisher: { "@id": `${SITE.url}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
