import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, Instagram, Linkedin, Globe } from "lucide-react";
import { Logo } from "./Logo";
import {
  SITE,
  WHATSAPP_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  NAV_LINKS,
} from "@/lib/site-config";

const servicos = [
  "Planejamento Financeiro",
  "Fluxo de Caixa",
  "DRE Gerencial",
  "KPIs e Indicadores",
  "Estruturação de Processos",
  "Planejamento Estratégico",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              Transformamos números em decisões estratégicas. Planejamento financeiro,
              estruturação empresarial e gestão de indicadores para empresas que querem
              crescer com segurança e previsibilidade.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {servicos.map((s) => (
                <li key={s}>
                  <Link to="/servicos" className="text-muted-foreground transition-colors hover:text-primary">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline mt-14" />

        <div className="mt-8 grid gap-6 text-sm text-muted-foreground md:grid-cols-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href={`tel:${SITE.phone.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 hover:text-primary">
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
            <a href={SITE.url} className="inline-flex items-center gap-2 hover:text-primary">
              <Globe className="h-4 w-4" /> {SITE.domain}
            </a>
          </div>
          <p className="md:text-right">
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
