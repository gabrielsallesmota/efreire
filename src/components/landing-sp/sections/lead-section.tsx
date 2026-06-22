import { Reveal } from "@/components/landing-sp/reveal";
import { LeadForm } from "@/components/landing-sp/lead-form";
import { formBenefits } from "@/data/landing-sp-content";
import { SITE } from "@/lib/landing-sp/site";

export function LeadSection() {
  return (
    <section id="formulario" className="bg-ink px-[5%] py-24">
      <Reveal>
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand">
          Contato
        </div>
        <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-white">
          Agende seu diagnóstico
          <br />
          gratuito agora
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
        <Reveal>
          <div>
            {formBenefits.map((b, i) => (
              <div
                key={b.title}
                className="flex items-start gap-3.5 border-b border-white/8 py-4 last:border-b-0"
              >
                <div className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] bg-brand/[0.18] text-lilac">
                  <b.icon className="size-[19px]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="mb-0.5 text-sm font-bold text-white">{b.title}</h4>
                  <p className="text-[13px] leading-[1.5] text-white/45">{b.text}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 border-t border-white/8 pt-8">
              <div className="mb-3 text-xs font-bold uppercase tracking-wide text-white/40">
                Contato direto
              </div>
              <a
                href={`tel:${SITE.telefoneHref}`}
                className="mb-2.5 block text-[15px] text-white/70 transition-colors hover:text-lilac"
              >
                {SITE.telefoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="mb-2.5 block text-[15px] text-white/70 transition-colors hover:text-lilac"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <LeadForm />
        </Reveal>
      </div>
    </section>
  );
}
