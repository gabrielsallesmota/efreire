import { Reveal } from "@/components/landing-sp/reveal";
import { Eyebrow, SectionTitle } from "@/components/landing-sp/section-heading";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="bg-cream px-[5%] py-24">
      <Reveal className="text-center">
        <Eyebrow center>Depoimentos</Eyebrow>
        <SectionTitle center>O que dizem nossos clientes</SectionTitle>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[#D6D2F0] bg-white px-8 py-11 text-center">
              <p className="text-sm text-[#9C97B8]">Depoimento a inserir</p>
              <strong className="text-[13px] text-brand">Nome · Cargo · Empresa</strong>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
