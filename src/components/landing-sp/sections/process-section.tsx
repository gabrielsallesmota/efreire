import { Reveal } from "@/components/landing-sp/reveal";
import { Eyebrow, SectionTitle } from "@/components/landing-sp/section-heading";
import { steps } from "@/data/landing-sp-content";

export function ProcessSection() {
  return (
    <section id="processo" className="bg-white px-[5%] py-24">
      <Reveal className="text-center">
        <Eyebrow center>Como Funciona</Eyebrow>
        <SectionTitle center>
          Do primeiro contato
          <br />
          aos resultados
        </SectionTitle>
      </Reveal>

      <div className="relative mt-14 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          className="absolute left-[12.5%] right-[12.5%] top-[29px] hidden h-0.5 lg:block"
          style={{
            background: "linear-gradient(90deg, #8679E6, rgba(134,121,230,.2))",
          }}
        />
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.1} className="relative z-10 px-4 text-center">
            <div className="mx-auto mb-5 flex size-[58px] items-center justify-center rounded-full border-[3px] border-brand bg-ink text-[22px] font-extrabold text-white">
              {s.num}
            </div>
            <h3 className="mb-2 text-[15px] font-bold text-ink">{s.title}</h3>
            <p className="text-[13px] leading-[1.6] text-muted-ink">{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
