import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MessageCircle, MapPin, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SITE, WHATSAPP_URL } from "@/lib/site-config";
import { sendLead } from "@/lib/lead";

export const Route = createFileRoute("/contato")({
  head: () => {
    const title = `Contato | Agende um Diagnóstico Financeiro — Efreire`;
    const description = "Fale com a Efreire e agende um diagnóstico financeiro inicial gratuito, de 30 minutos, sem compromisso. Resposta rápida por e-mail, telefone ou WhatsApp.";
    const url = `${SITE.url}/contato`;
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
            "@type": "ContactPage",
            name: title,
            description,
            url,
            mainEntity: {
              "@type": "Organization",
              "@id": `${SITE.url}/#organization`,
              email: SITE.email,
              telephone: SITE.phone,
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer service",
                email: SITE.email,
                telephone: SITE.phone,
                areaServed: "BR",
                availableLanguage: ["Portuguese", "pt-BR"],
              }],
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Início", item: `${SITE.url}/` },
              { "@type": "ListItem", position: 2, name: "Contato", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ContatoPage,
});

const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100, "Máximo 100 caracteres"),
  cargo: z.string().trim().max(100, "Máximo 100 caracteres").optional(),
  empresa: z.string().trim().min(2, "Informe sua empresa").max(120, "Máximo 120 caracteres"),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20, "Máximo 20 caracteres"),
  email: z.string().trim().email("E-mail inválido").max(160, "Máximo 160 caracteres"),
  desafio: z.string().trim().max(120, "Máximo 120 caracteres").optional(),
  faturamento: z.string().trim().max(80, "Máximo 80 caracteres").optional(),
  mensagem: z.string().trim().min(10, "Conte um pouco mais").max(1500, "Máximo 1500 caracteres"),
});

const desafioOptions = [
  "Fluxo de caixa desorganizado",
  "Falta de relatórios gerenciais",
  "Margens e custos incertos",
  "Processos financeiros manuais",
  "Planejamento estratégico",
  "Outro",
] as const;

const faturamentoOptions = [
  "Até R$ 100 mil",
  "R$ 100 mil - R$ 500 mil",
  "R$ 500 mil - R$ 2 milhões",
  "Acima de R$ 2 milhões",
] as const;

type Status = "idle" | "loading" | "success" | "error";

function ContatoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      nome: String(formData.get("nome") ?? ""),
      cargo: String(formData.get("cargo") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      telefone: String(formData.get("telefone") ?? ""),
      email: String(formData.get("email") ?? ""),
      desafio: String(formData.get("desafio") ?? ""),
      faturamento: String(formData.get("faturamento") ?? ""),
      mensagem: String(formData.get("mensagem") ?? ""),
    };

    const parsed = leadSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    const result = await sendLead(parsed.data);
    if (result.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
      setErrorMsg(result.error ?? "Erro ao enviar. Tente novamente.");
    }
  }

  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_50%_0%,oklch(0.71_0.13_285/0.18),transparent_60%)]" />
        <div className="container-page py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow justify-center"><Sparkles className="h-3.5 w-3.5" /> Contato</span>
            <h1 className="mt-6 text-balance text-4xl text-foreground md:text-5xl lg:text-6xl">
              Vamos conversar sobre o <span className="italic text-primary">futuro da sua empresa</span>.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato para agendar um diagnóstico inicial gratuito, de 30 minutos, sem compromisso.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Atendemos empresas presencialmente em <strong className="text-foreground">São Paulo</strong> e remotamente em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-10 lg:col-span-3"
            >
              <form onSubmit={onSubmit} className="grid gap-5" noValidate>
                <Field label="Nome" name="nome" type="text" placeholder="Seu nome completo" error={errors.nome} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Cargo" name="cargo" type="text" placeholder="CEO, Diretor..." error={errors.cargo} />
                  <Field label="Empresa" name="empresa" type="text" placeholder="Nome da empresa" error={errors.empresa} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Telefone" name="telefone" type="tel" placeholder="(11) 00000-0000" error={errors.telefone} />
                  <Field label="E-mail" name="email" type="email" placeholder="voce@empresa.com" error={errors.email} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField label="Maior desafio financeiro hoje" name="desafio" options={desafioOptions} error={errors.desafio} />
                  <SelectField label="Faturamento mensal aproximado" name="faturamento" options={faturamentoOptions} error={errors.faturamento} />
                </div>
                <div>
                  <label htmlFor="mensagem" className="text-sm font-medium text-foreground">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    placeholder="Conte um pouco sobre sua empresa e o que você gostaria de organizar."
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
                  />
                  {errors.mensagem && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.mensagem}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-all hover:bg-primary-deep hover:shadow-glow disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                {status === "success" && (
                  <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-accent-soft/40 p-4 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold">Mensagem enviada com sucesso!</p>
                      <p className="mt-1 text-muted-foreground">Entraremos em contato em breve.</p>
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm text-foreground">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <div>
                      <p className="font-semibold">Não foi possível enviar.</p>
                      <p className="mt-1 text-muted-foreground">{errorMsg} Tente novamente ou fale conosco no WhatsApp.</p>
                    </div>
                  </div>
                )}
              </form>
            </motion.div>

            {/* Info lateral */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl border border-border bg-surface p-7 md:p-9">
                <h2 className="text-2xl text-foreground">Comece com um diagnóstico gratuito</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  Uma conversa de 30 minutos, sem compromisso, para entender os principais gaps financeiros da sua empresa.
                </p>
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                  Experiência em grandes operações de{" "}
                  <span className="font-semibold text-foreground">varejo e B2B</span>.
                </p>
                <ul className="mt-8 space-y-5">
                  <ContactItem icon={Phone} label="Telefone" value={SITE.phoneDisplay} />
                  <ContactItem icon={Mail} label="E-mail" value={SITE.email} />
                  <ContactItem icon={MessageCircle} label="WhatsApp" value="Falar agora" href={WHATSAPP_URL} external />
                  <ContactItem icon={MapPin} label="Atendimento" value="Brasil — online e presencial" />
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  label, name, type, placeholder, error,
}: { label: string; name: string; type: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
      {error && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label, name, options, error,
}: { label: string; name: string; options: readonly string[]; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/10"
      >
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

function ContactItem({
  icon: Icon, label, value, href, external,
}: { icon: typeof Phone; label: string; value: string; href?: string; external?: boolean }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="mt-0.5 font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
  if (!href) return <li>{content}</li>;
  return (
    <li>
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer noopener" : undefined} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    </li>
  );
}
