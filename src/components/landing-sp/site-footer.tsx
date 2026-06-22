import { SITE, whatsappLink } from "@/lib/landing-sp/site";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SiteFooter() {
  return (
    <footer className="bg-ink-dark px-[5%] pb-8 pt-13 text-white/45">
      <div className="flex flex-wrap items-start justify-between gap-10 border-b border-white/10 pb-8">
        <div>
          <img src="/efreire-landing-sp-logo.png" alt="Efreire" className="mb-4 h-10" />
          <p className="max-w-[300px] text-[13px] leading-[1.7]">
            Efreire Assessoria e Serviços Especializados Ltda. Transformamos gestão
            financeira em crescimento sustentável.
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[13px] font-bold uppercase tracking-wide text-white/70">
            Contato
          </h4>
          <span className="mb-2.5 block text-sm text-white/50">
            {SITE.telefoneDisplay}
          </span>
          <span className="mb-2.5 block text-sm text-white/50">
            {SITE.email}
          </span>
          <a href={whatsappLink} target="_blank" rel="noopener" className="mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac">
            WhatsApp
          </a>
        </div>
        <div>
          <h4 className="mb-3.5 text-[13px] font-bold uppercase tracking-wide text-white/70">
            Navegação
          </h4>
          <button onClick={() => scrollTo("solucao")} className="mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac">
            Solução
          </button>
          <button onClick={() => scrollTo("processo")} className="mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac">
            Como funciona
          </button>
          <button onClick={() => scrollTo("faq")} className="mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac">
            FAQ
          </button>
          <button onClick={() => scrollTo("formulario")} className="mb-2.5 block text-sm text-white/50 transition-colors hover:text-lilac">
            Diagnóstico Gratuito
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 pt-6 text-xs">
        <span className="text-white/30">
          © {new Date().getFullYear()} Efreire Assessoria e Serviços Especializados Ltda.
        </span>
        <span className="text-white/30">Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
