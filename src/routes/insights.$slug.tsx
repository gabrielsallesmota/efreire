import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE } from "@/lib/site-config";
import { getInsight, INSIGHTS, type Insight } from "@/lib/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const insight = getInsight(params.slug);
    if (!insight) throw notFound();
    return { insight };
  },
  head: ({ params, loaderData }) => {
    const insight = loaderData?.insight;
    if (!insight) {
      return {
        meta: [{ title: `Insight não encontrado — ${SITE.shortName}` }],
      };
    }
    const url = `${SITE.url}/insights/${params.slug}`;
    const fullTitle = `${insight.title} — ${SITE.shortName}`;
    return {
      meta: [
        { title: fullTitle },
        { name: "description", content: insight.dek },
        { name: "keywords", content: `${insight.category}, gestão financeira, consultoria financeira, ${insight.title}` },
        { property: "og:title", content: insight.title },
        { property: "og:description", content: insight.dek },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:locale", content: "pt_BR" },
        { property: "article:section", content: insight.category },
        { property: "article:published_time", content: insight.publishedAt },
        { property: "article:author", content: SITE.name },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: insight.title },
        { name: "twitter:description", content: insight.dek },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
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
            author: { "@type": "Organization", name: SITE.name, url: SITE.url },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              logo: { "@type": "ImageObject", url: `${SITE.url}/og-image.jpg` },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.url}/` },
              { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE.url}/` },
              { "@type": "ListItem", position: 3, name: insight.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: InsightPage,
});

function NotFound() {
  return (
    <SiteLayout>
      <section className="container-page py-32 text-center">
        <h1 className="text-4xl text-foreground">Insight não encontrado</h1>
        <p className="mt-4 text-muted-foreground">O artigo que você procura não está disponível.</p>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Voltar para a home
        </Link>
      </section>
    </SiteLayout>
  );
}

function ErrorView({ reset }: { reset: () => void }) {
  return (
    <SiteLayout>
      <section className="container-page py-32 text-center">
        <h1 className="text-3xl text-foreground">Não foi possível carregar este insight.</h1>
        <button onClick={reset} className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
          Tentar novamente
        </button>
      </section>
    </SiteLayout>
  );
}

function InsightPage() {
  const { insight } = Route.useLoaderData() as { insight: Insight };
  const related = INSIGHTS.filter((i) => i.slug !== insight.slug).slice(0, 2);

  return (
    <SiteLayout>
      {/* HERO do artigo */}
      <article>
        <header className="relative overflow-hidden border-b border-border bg-surface">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_15%_0%,oklch(0.71_0.13_285/0.18),transparent_60%)]" />
          <div className="container-page py-20 md:py-28">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para a home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-8 max-w-3xl"
            >
              <span className="eyebrow">{insight.category}</span>
              <h1 className="mt-5 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
                {insight.title}
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                {insight.dek}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  {insight.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Corpo */}
        <div className="container-page py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-pretty text-lg leading-relaxed text-foreground/90 md:text-xl">
              {insight.intro}
            </p>

            <div className="mt-14 space-y-14">
              {insight.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-3xl text-foreground md:text-4xl">{section.heading}</h2>
                  <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-pretty">{p}</p>
                    ))}
                  </div>

                  {section.subsections && (
                    <div className="mt-10 space-y-10">
                      {section.subsections.map((sub) => (
                        <div key={sub.heading} className="border-l-2 border-primary/30 pl-6">
                          <h3 className="text-xl text-foreground md:text-2xl">{sub.heading}</h3>
                          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
                            {sub.paragraphs.map((p, i) => (
                              <p key={i} className="text-pretty">{p}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Takeaway */}
            <aside className="mt-16 rounded-2xl border border-border bg-surface p-8 md:p-10">
              <span className="eyebrow">Em resumo</span>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground">
                {insight.takeaway}
              </p>
            </aside>

            {/* CTA */}
            <div className="mt-16 rounded-3xl bg-primary px-8 py-12 text-primary-foreground shadow-glow md:px-12">
              <h2 className="text-balance text-2xl md:text-3xl">
                Quer aplicar isso na sua empresa?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/80">
                Em uma conversa estratégica, mapeamos onde sua gestão financeira está hoje e o que pode evoluir nos próximos 90 dias.
              </p>
              <Link
                to="/contato"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand-hover hover:text-primary-foreground"
              >
                Agende uma conversa estratégica
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="border-t border-border bg-surface section-y">
          <div className="container-page">
            <span className="eyebrow">Continue lendo</span>
            <h2 className="mt-4 text-3xl text-foreground md:text-4xl">Outras perspectivas</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/insights/$slug"
                  params={{ slug: r.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
                >
                  <span className="eyebrow">{r.category}</span>
                  <h3 className="mt-4 text-2xl text-foreground">{r.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{r.dek}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    Ler artigo
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
