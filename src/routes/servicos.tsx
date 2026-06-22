import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Wallet,
  LineChart,
  PieChart,
  BarChart3,
  Layers,
  Target,
  Compass,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  FileText,
  HandCoins,
  Landmark,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/servicos")({
  head: () => {
    const title = `Serviços | Consultoria Financeira, FP&A, Fluxo de Caixa e DRE Gerencial`;
    const description = "Consultoria Financeira e FP&A, estruturação de processos, fluxo de caixa e modelagem, DRE gerencial, análises de performance, compliance e governança para PMEs.";
    const url = `${SITE.url}/servicos`;
    const servicesList = [
      "Consultoria Financeira e FP&A",
      "Estruturação de Processos Financeiros",
      "Fluxo de Caixa e Modelagem Financeira",
      "DRE Gerencial e Análises de Performance",
      "Compliance e Governança",
    ];
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "FP&A, fluxo de caixa, DRE gerencial, processos financeiros, compliance, governança, controladoria, modelagem financeira" },
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
            "@type": "ItemList",
            name: "Serviços Efreire",
            itemListElement: servicesList.map((name, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name,
                provider: { "@id": `${SITE.url}/#organization` },
                areaServed: { "@type": "Country", name: "Brasil" },
              },
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
              { "@type": "ListItem", position: 2, name: "Serviços", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ServicosPage,
});

const servicos = [
  {
    icon: LineChart,
    title: "Consultoria Financeira e FP&A",
    description: "Estruturamos planejamento financeiro, acompanhamento de resultados, análises e indicadores para transformar números em direcionamento estratégico.",
    beneficios: ["Visão clara do futuro financeiro", "Decisões com base em projeções", "Identificação antecipada de riscos"],
    resultados: ["Previsibilidade de caixa", "Metas financeiras realistas", "Maior segurança em investimentos"],
  },
  {
    icon: Layers,
    title: "Estruturação de Processos Financeiros",
    description: "Mapeamos, organizamos e aprimoramos os processos para gerar maior controle sobre contas a pagar e receber, rotinas financeiras, fluxos de aprovação, conciliações e a integração financeiro × contabilidade.",
    beneficios: ["Operação previsível e padronizada", "Redução de retrabalho e erros", "Empresa menos dependente de pessoas-chave"],
    resultados: ["Escalabilidade do negócio", "Maior eficiência operacional", "Controles internos mais sólidos"],
  },
  {
    icon: Wallet,
    title: "Fluxo de Caixa e Modelagem Financeira",
    description: "Criamos modelos que permitem acompanhar entradas e saídas, projetar cenários, identificar riscos financeiros e apoiar decisões com maior segurança.",
    beneficios: ["Controle total das entradas e saídas", "Eliminação de surpresas no caixa", "Apoio para negociações com bancos"],
    resultados: ["Redução de juros e tarifas", "Capital de giro otimizado", "Confiança nas decisões diárias"],
  },
  {
    icon: PieChart,
    title: "DRE Gerencial e Análises de Performance",
    description: "Construímos visões gerenciais para acompanhar rentabilidade real do negócio, resultado por unidade, produto ou serviço, margens, indicadores financeiros e evolução dos resultados.",
    beneficios: ["Visibilidade real do lucro", "Análise de margens por área", "Apoio em decisões de mix e precificação"],
    resultados: ["Aumento de margem", "Eliminação de produtos deficitários", "Foco no que realmente dá resultado"],
  },
  {
    icon: ShieldCheck,
    title: "Compliance e Governança",
    description: "Fortalecemos controles internos para aumentar a confiabilidade das informações: conciliações financeiras, organização documental, integração entre financeiro e contabilidade, e modelo de governança.",
    beneficios: ["Informações financeiras confiáveis", "Redução de riscos e retrabalho", "Preparação para auditorias e due diligence"],
    resultados: ["Maior credibilidade com stakeholders", "Processos auditáveis", "Base sólida para crescimento"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function ServicosPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_70%_0%,oklch(0.71_0.13_285/0.15),transparent_60%)]" />
        <div className="container-page py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Serviços</span>
            <h1 className="mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
              Como ajudamos sua empresa a <span className="italic text-primary">crescer com controle</span>.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Combinamos planejamento financeiro, indicadores, estruturação de processos e governança
              em um portfólio integrado — sob medida para o estágio e o setor do seu negócio.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="grid gap-6">
            {servicos.map((s, i) => (
              <motion.article
                key={s.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.04 }}
                className="group grid gap-8 rounded-3xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-elegant md:p-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-elegant">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-3xl text-foreground md:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{s.description}</p>
                </div>
                <div className="grid gap-6 lg:col-span-8 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <p className="eyebrow">Benefícios</p>
                    <ul className="mt-4 space-y-3">
                      {s.beneficios.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <p className="eyebrow">Resultados esperados</p>
                    <ul className="mt-4 space-y-3">
                      {s.resultados.map((r) => (
                        <li key={r} className="flex items-start gap-3 text-sm text-foreground/85">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{r}</span>
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
                  Quer entender qual serviço faz mais sentido para sua empresa?
                </h2>
                <p className="mt-4 text-primary-foreground/80">
                  Em uma conversa de diagnóstico mostramos exatamente onde começar.
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
