import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Target, Eye, Heart, CheckCircle2, Sparkles, Building2, Briefcase, Users, Landmark, TrendingUp } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SITE } from "@/lib/site-config";
import fundadora from "@/assets/fundadora.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => {
    const title = `Sobre a Efreire | Consultoria Financeira com mais de 20 anos`;
    const description = "Conheça a Efreire: mais de 20 anos em Finanças, Controladoria e Contabilidade, com experiência real em Via Varejo — agora apoiando PMEs.";
    const url = `${SITE.url}/sobre`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "profile" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: title,
            description,
            url,
            mainEntity: { "@id": `${SITE.url}/#organization` },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.url}/` },
              { "@type": "ListItem", position: 2, name: "Sobre", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: SobrePage,
});

const valores = [
  { icon: Target, title: "Missão", text: "Apoiar empresas a tomarem melhores decisões financeiras e estratégicas, com clareza, organização e indicadores confiáveis para crescer com segurança." },
  { icon: Eye, title: "Visão", text: "Ser referência em assessoria financeira e estruturação empresarial para PMEs que buscam profissionalizar a gestão e ampliar resultados sustentáveis." },
  { icon: Heart, title: "Valores", text: "Ética, transparência, compromisso com resultado, parceria de longo prazo, excelência técnica e respeito pela realidade de cada cliente." },
];

const diferenciais = [
  "Visão estratégica do negócio, não apenas operacional",
  "Mais de 20 anos atuando com gestão financeira corporativa",
  "Metodologia estruturada e personalizada para cada empresa",
  "Foco em indicadores e resultados mensuráveis",
  "Acompanhamento próximo, técnico e consultivo",
  "Linguagem clara para empresários e gestores",
];

const experiencias = [
  { icon: Building2, nome: "Via Varejo" },
];

const publico = [
  { icon: Users, title: "Sócios-diretores", text: "Que precisam de mais controle financeiro e clareza para decidir." },
  { icon: Briefcase, title: "CFOs e Controllers", text: "Que buscam estruturação, eficiência e indicadores confiáveis." },
  { icon: TrendingUp, title: "Empresas em crescimento", text: "Que precisam profissionalizar a gestão financeira." },
  { icon: Landmark, title: "Family offices", text: "Que precisam transformar dados em decisões." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

function SobrePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_30%_0%,oklch(0.71_0.13_285/0.15),transparent_60%)]" />
        <div className="container-page py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Sobre a Efreire</span>
            <h1 className="mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
              Experiência que combina visão estratégica e{" "}
              <span className="italic text-primary">execução</span>.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A Efreire Assessoria reúne mais de 20 anos de experiência em Finanças, Controladoria e
              Contabilidade, apoiando empresas na construção de uma gestão financeira mais eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* História + foto */}
      <section className="section-y">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-elegant">
                <img src={fundadora} alt="Sócia fundadora da Efreire Assessoria" width={1024} height={1280} loading="lazy" className="h-full w-full object-cover" />
              </div>
            </motion.div>
            <div className="lg:col-span-7">
              <SectionHeader eyebrow="Nossa história" title={<>Da experiência corporativa à <span className="italic text-primary">consultoria estratégica</span>.</>} />
              <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  A Efreire nasceu da percepção de que muitas empresas — mesmo com produtos e serviços
                  de qualidade — enfrentam barreiras para crescer por falta de clareza financeira,
                  ausência de indicadores e processos pouco estruturados.
                </p>
                <p>
                  A sócia fundadora, contadora com especialização em gestão financeira, possui experiência
                  em empresa de relevância no mercado, como{" "}
                  <span className="text-foreground">Via Varejo</span>.
                </p>
                <p>
                  Além da atuação em indústrias de alto valor agregado, possui experiência em serviços de
                  outsourcing financeiro, apoiando empresas de diferentes segmentos e modelos de negócio na
                  estruturação e evolução de suas operações.
                </p>
              </div>

              <div className="mt-8 grid max-w-xs gap-3">
                {experiencias.map((exp, i) => (
                  <motion.div
                    key={exp.nome}
                    {...fadeUp}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                  >
                    <exp.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{exp.nome}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão / Visão / Valores */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeader eyebrow="Princípios" title={<>Missão, visão e <span className="italic text-primary">valores</span>.</>} align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {valores.map((v, i) => (
              <motion.article
                key={v.title}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-2xl text-foreground">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Público"
            title={<>Para quem é essa <span className="italic text-primary">consultoria</span>?</>}
            description="Ideal para empresas que precisam transformar dados em decisões e profissionalizar a gestão financeira."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {publico.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="flex items-start gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section-y bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeader eyebrow="Diferenciais" title={<>Por que escolher a <span className="italic text-primary">Efreire</span>.</>} description="O que nos torna a parceira certa para profissionalizar a gestão da sua empresa." />
            <div className="grid gap-4">
              {diferenciais.map((d, i) => (
                <motion.div key={d} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{d}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-14">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary-deep hover:shadow-glow">
              Agende uma conversa estratégica
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
