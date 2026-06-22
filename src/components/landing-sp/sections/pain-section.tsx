import { Reveal } from "@/components/landing-sp/reveal";
import { Eyebrow } from "@/components/landing-sp/section-heading";
import { pains } from "@/data/landing-sp-content";

export function PainSection() {
  return (
    <section className="bg-white px-[5%] py-24">
      <Reveal>
        <Eyebrow>Identificação</Eyebrow>
        <h2 className="max-w-[600px] text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-ink">
          Você reconhece alguma
          <br />
          dessas situações?
        </h2>
        <p className="mt-3.5 max-w-[540px] text-base leading-[1.75] text-muted-ink">
          Esses são os sinais mais comuns de que sua empresa precisa de estrutura
          financeira.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border border-line bg-[#FAFAFE] p-7 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_8px_28px_rgba(45,46,143,0.1)]">
              <div className="mb-4 flex size-[46px] items-center justify-center rounded-xl bg-brand/10 text-brand">
                <p.icon className="size-6" strokeWidth={2} />
              </div>
              <h3 className="mb-2 text-[15px] font-bold text-ink">{p.title}</h3>
              <p className="text-sm leading-[1.65] text-muted-ink">{p.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
