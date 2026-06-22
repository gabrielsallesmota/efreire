import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Award,
  Users,
  TrendingUp,
  BarChart3,
  Database,
  Workflow,
  Eye,
  Wallet,
  Building2,
  LineChart,
  Compass,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { WHATSAPP_URL, SITE } from "@/lib/site-config";
import { INSIGHTS } from "@/lib/insights";
import heroImg from "@/assets/hero-executivos.jpg";

export const Route = createFileRoute("/")({
  head: () => {
    const title = `${SITE.shortName} | Gestão Financeira Estratégica para Empresas`;
    const description = "Consultoria financeira para PMEs: planejamento, fluxo de caixa, DRE gerencial, FP&A e governança. Clareza, controle e crescimento orientados por dados.";
    const url = `${SITE.url}/`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "consultoria financeira, planejamento financeiro, fluxo de caixa, DRE gerencial, FP&A, governança financeira, gestão financeira PME, controladoria" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "pt_BR" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
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
                  text: "É a prática de transformar informações financeiras em decisões orientadas por dados — combinando planejamento, fluxo de caixa, indicadores e governança para apoiar o crescimento da empresa com segurança.",
                },
              },
              {
                "@type": "Question",
                name: "Para que tipo de empresa a Efreire atende?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Atendemos pequenas e médias empresas em crescimento que querem profissionalizar a gestão financeira, ganhar previsibilidade de caixa e tomar decisões com base em indicadores confiáveis.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo leva para ver resultados?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nossa metodologia entrega ganhos rápidos nos primeiros 30 a 90 dias: diagnóstico, estruturação, implementação e evolução contínua, com indicadores mensuráveis em cada etapa.",
                },
              },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: HomePage,
});

const problemas = [
  { icon: Wallet, title: "Fluxo de caixa sem segurança", text: "Processos manuais e falta de previsibilidade nas entradas e saídas." },
  { icon: Workflow, title: "Fechamento financeiro lento", text: "A consolidação das informações demora mais do que deveria." },
  { icon: Database, title: "Dados espalhados", text: "Informações em diferentes sistemas e planilhas, sem uma única fonte da verdade." },
  { icon: Eye, title: "Falta de visão da rentabilidade", text: "O gestor não enxerga com clareza o que realmente gera resultado." },
  { icon: BarChart3, title: "Decisões com informações atrasadas", text: "Escolhas importantes tomadas com dados incompletos ou desatualizados." },
];

const pilares = [
  { icon: Eye, title: "Visibilidade financeira", text: "Entenda o presente e antecipe cenários futuros através de análises e modelos financeiros." },
  { icon: Workflow, title: "Processos organizados", text: "Padronização das rotinas financeiras para reduzir falhas, retrabalho e controles paralelos." },
  { icon: BarChart3, title: "Gestão orientada por dados", text: "Informações estruturadas para apoiar decisões de sócios, CFOs e controllers." },
  { icon: TrendingUp, title: "Maior eficiência operacional", text: "Implementações práticas com foco em ganhos rápidos e resultados mensuráveis." },
];

const paginas = [
  {
    icon: Building2,
    eyebrow: "Sobre",
    title: "Quem somos",
    text: "Mais de 20 anos de experiência em Finanças, Controladoria e Contabilidade.",
    to: "/sobre" as const,
  },
  {
    icon: LineChart,
    eyebrow: "Serviços",
    title: "O que entregamos",
    text: "Consultoria Financeira, FP&A, processos, fluxo de caixa, DRE gerencial e governança.",
    to: "/servicos" as const,
  },
  {
    icon: Compass,
    eyebrow: "Metodologia",
    title: "Como trabalhamos",
    text: "Diagnóstico, estruturação, implementação e evolução — sem modelos engessados.",
    to: "/metodologia" as const,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,oklch(0.71_0.13_285/0.18),transparent_60%),radial-gradient(45%_40%_at_85%_0%,oklch(0.32_0.17_275/0.14),transparent_60%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Efreire Assessoria & Estratégia Financeira
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
              >
                Gestão Financeira Estratégica para empresas que buscam{" "}
                <span className="italic text-primary">clareza, controle e crescimento</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                Sua empresa cresceu. A gestão financeira precisa acompanhar. Transformamos informações
                financeiras dispersas em processos estruturados, indicadores confiáveis e decisões
                orientadas por dados.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  to="/contato"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary-deep hover:text-primary-foreground hover:shadow-glow"
                >
                  Agende uma conversa estratégica
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-3 text-xs text-muted-foreground"
              >
                Diagnóstico inicial gratuito, de 30 minutos, sem compromisso.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  +20 anos de experiência
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  Resultados mensuráveis
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  PMEs em crescimento
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-xs uppercase tracking-wider text-muted-foreground"
              >
                Experiência prática em{" "}
                <span className="font-semibold text-foreground">Grupo Casas Bahia</span>,{" "}
                <span className="font-semibold text-foreground">Grupo Pão de Açúcar</span>,{" "}
                <span className="font-semibold text-foreground">Track&amp;Field</span> e{" "}
                <span className="font-semibold text-foreground">Assaí Atacadista</span>.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:col-span-5"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-glow">
                <img
                  src={heroImg}
                  alt="Executivos analisando indicadores financeiros e crescimento empresarial"
                  width={1600}
                  height={1200}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent mix-blend-multiply" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="Diagnóstico"
            title={<>Quando a operação cresce, a falta de estrutura financeira aparece.</>}
            description="Muitas empresas chegam a um ponto em que a gestão financeira não acompanha o crescimento. A consequência? Menos previsibilidade, mais retrabalho e dificuldade para planejar o futuro."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {problemas.map((p, i) => (
              <motion.article
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO: PILARES */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Solução"
            title={<>A solução: transformar o financeiro em uma área <span className="italic text-primary">estratégica</span>.</>}
            description="A Efreire estrutura a gestão financeira para que sua empresa tenha clareza, controle e previsibilidade."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pilares.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-elegant">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl text-foreground">{p.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS / PERSPECTIVAS */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Perspectivas"
              title={<>Insights na prática em <span className="italic text-primary">gestão financeira</span>.</>}
              description="Análises curtas e acionáveis sobre fluxo de caixa, controladoria e governança — extraídas de mais de 20 anos de experiência corporativa."
            />
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {INSIGHTS.map((article, i) => (
              <motion.article
                key={article.slug}
                {...fadeUp}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group flex flex-col"
              >
                <Link
                  to="/insights/$slug"
                  params={{ slug: article.slug }}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
                >
                  <span className="eyebrow">{article.category}</span>
                  <h3 className="mt-4 text-pretty text-xl leading-tight text-foreground md:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {article.dek}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xs font-medium text-muted-foreground">{article.readTime}</span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                      Ler artigo
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* NAVEGAÇÃO PARA PÁGINAS */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader
            eyebrow="Explore"
            title={<>Conheça a <span className="italic text-primary">Efreire</span> em detalhe.</>}
            description="Cada área do nosso trabalho tem uma página dedicada. Escolha por onde começar."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {paginas.map((p, i) => (
              <motion.div
                key={p.to}
                {...fadeUp}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <Link
                  to={p.to}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground shadow-elegant">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <p className="eyebrow mt-6">{p.eyebrow}</p>
                  <h3 className="mt-3 text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{p.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
                    Ver página
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-y">
        <div className="container-page">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground shadow-glow md:px-16 md:py-20"
          >
            <div className="absolute inset-0 -z-0 opacity-40 [background:radial-gradient(60%_60%_at_80%_0%,oklch(0.71_0.13_285/0.6),transparent_60%),radial-gradient(50%_60%_at_0%_100%,oklch(0.95_0.05_285/0.25),transparent_60%)]" />
            <div className="relative z-10 grid items-center gap-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <span className="eyebrow text-primary-foreground/80">
                  <Sparkles className="h-3.5 w-3.5" />
                  Vamos conversar?
                </span>
                <h2 className="mt-5 text-balance text-3xl text-primary-foreground md:text-4xl lg:text-5xl">
                  Sua empresa não precisa de mais planilhas. Precisa de gestão.
                </h2>
                <p className="mt-5 max-w-2xl text-pretty text-primary-foreground/80">
                  Uma estrutura financeira organizada permite enxergar oportunidades, reduzir riscos e tomar decisões com mais confiança.
                </p>
                <p className="mt-3 text-sm font-medium text-primary-foreground/70">
                  Diagnóstico inicial gratuito, de 30 minutos, sem compromisso.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-2 lg:justify-end">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand-hover hover:text-primary-foreground"
                >
                  Agende uma conversa estratégica
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
