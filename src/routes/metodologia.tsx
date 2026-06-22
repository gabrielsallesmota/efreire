import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, Search, Settings, Rocket, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/metodologia")({
  head: () => {
    const title = `Metodologia | Diagnóstico, Estruturação, Implementação e Evolução`;
    const description = "Metodologia prática Efreire em 4 etapas: Diagnóstico, Estruturação, Implementação e Evolução. Profissionalize a gestão financeira da sua empresa em 90 dias.";
    const url = `${SITE.url}/metodologia`;
    const steps = [
      { name: "Diagnóstico", text: "Identificação dos principais gargalos financeiros e operacionais." },
      { name: "Estruturação", text: "Definição de processos, controles, indicadores e modelos adequados." },
      { name: "Implementação", text: "Aplicação prática das melhorias junto ao time da empresa." },
      { name: "Evolução", text: "Acompanhamento dos resultados e aprimoramento contínuo." },
    ];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Metodologia Efreire de Estruturação Financeira",
            description,
            step: steps.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.name,
              text: s.text,
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.url}/` },
              { "@type": "ListItem", position: 2, name: "Metodologia", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: MetodologiaPage,
});

const etapas = [
  {
    step: "01",
    title: "Diagnóstico",
    icon: Search,
    text: "Identificação dos principais gargalos financeiros e operacionais. Cada empresa possui uma realidade, desafios e maturidade financeira diferentes — por isso começamos ouvindo e entendendo antes de propor qualquer solução.",
    detalhes: ["Análise do cenário financeiro atual", "Entrevistas com sócios e gestores", "Mapeamento de dores e prioridades"],
  },
  {
    step: "02",
    title: "Estruturação",
    icon: Settings,
    text: "Definição de processos, controles, indicadores e modelos adequados. Desenhamos a arquitetura financeira que vai dar base para as decisões da empresa.",
    detalhes: ["Mapeamento de processos financeiros", "Plano de contas gerencial", "Definição de KPIs e relatórios"],
  },
  {
    step: "03",
    title: "Implementação",
    icon: Rocket,
    text: "Aplicação prática das melhorias junto ao time da empresa. Não entregamos apenas documentos — trabalhamos lado a lado para colocar cada processo e indicador em funcionamento.",
    detalhes: ["Estruturação do fluxo de caixa", "Relatórios gerenciais confiáveis", "Padronização de rotinas e aprovações"],
  },
  {
    step: "04",
    title: "Evolução",
    icon: TrendingUp,
    text: "Acompanhamento dos resultados e aprimoramento contínuo. A gestão financeira é um processo vivo, e evoluímos junto com a empresa.",
    detalhes: ["Reuniões mensais de performance", "Revisão de metas e cenários", "Apoio consultivo contínuo"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function MetodologiaPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,oklch(0.71_0.13_285/0.15),transparent_60%)]" />
        <div className="container-page py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Metodologia</span>
            <h1 className="mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
              Uma metodologia prática, feita para gerar{" "}
              <span className="italic text-primary">evolução rápida</span>.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Não aplicamos modelos engessados. Cada empresa possui uma realidade, desafios e maturidade
              financeira diferentes. Por isso, desenvolvemos uma abordagem personalizada em quatro etapas
              integradas — do diagnóstico à evolução contínua.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="grid gap-6">
            {etapas.map((e, i) => (
              <motion.article
                key={e.step}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="grid gap-8 rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-elegant md:p-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-elegant">
                    <e.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display mt-4 block text-5xl text-primary">{e.step}</span>
                  <h2 className="mt-2 text-3xl text-foreground md:text-4xl">{e.title}</h2>
                  <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{e.text}</p>
                </div>
                <div className="lg:col-span-8">
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <p className="eyebrow">O que fazemos nesta etapa</p>
                    <ul className="mt-4 space-y-3">
                      {e.detalhes.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-foreground/85">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-primary p-10 text-primary-foreground shadow-glow md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-balance text-3xl text-primary-foreground md:text-4xl">
                  Quer aplicar essa metodologia na sua empresa?
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  Começamos pelo diagnóstico — uma conversa estratégica e sem compromisso.
                </p>
              </div>
              <div className="md:text-right">
                <Link
                  to="/contato"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-brand-hover hover:text-primary-foreground"
                >
                  Agende uma conversa
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
