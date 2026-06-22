import { Check } from "lucide-react";
import { Reveal } from "@/components/landing-sp/reveal";
import { Eyebrow, SectionTitle } from "@/components/landing-sp/section-heading";
import { benefits } from "@/data/landing-sp-content";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-cream px-[5%] py-24">
      <Reveal>
        <Eyebrow>Resultados</Eyebrow>
        <SectionTitle>O que muda na sua empresa</SectionTitle>
      </Reveal>

      <div className="mt-13 grid max-w-[880px] grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
        {benefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.05}>
            <div className="flex items-start gap-[18px]">
              <div className="flex size-[34px] shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Check className="size-[17px]" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="mb-1 text-[15px] font-bold text-ink">{b.title}</h3>
                <p className="text-[13px] leading-[1.55] text-muted-ink">{b.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
