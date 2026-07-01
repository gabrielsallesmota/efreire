import { Reveal } from "@/components/landing-sp/reveal";
import { Button } from "@/components/landing-sp/ui/button";
import { aboutStats } from "@/data/landing-sp-content";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function AboutSection() {
  return (
    <section
      className="flex flex-col items-start gap-12 px-[5%] py-24 lg:flex-row lg:items-center lg:gap-20"
      style={{
        background: "linear-gradient(135deg, #1E1B6B 0%, #2D2A8C 100%)",
      }}
    >
      <Reveal className="flex-1">
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand">
          Quem somos
        </div>
        <h2 className="text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-white">
          +20 anos transformando
          <br />
          gestões financeiras
        </h2>
        <p className="mt-3.5 max-w-[480px] text-base leading-[1.75] text-white/55">
          A Efreire Assessoria e Serviços Especializados atua com gestão financeira de
          pequenas e médias empresas em diversos setores, com atendimento presencial e
          remoto.
        </p>
        <div className="mt-8">
          <Button onClick={() => scrollTo("formulario")}>Falar com um especialista</Button>
        </div>
      </Reveal>

      <div className="grid w-full grid-cols-2 gap-5 lg:w-[360px] lg:shrink-0">
        {aboutStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-brand/25 bg-white/5 p-6">
              <strong className="block text-[34px] font-extrabold tracking-[-1px] text-lilac">
                {s.value}
              </strong>
              <span className="mt-1.5 block text-[13px] leading-[1.4] text-white/50">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
