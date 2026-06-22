import { Reveal } from "@/components/landing-sp/reveal";
import { Button } from "@/components/landing-sp/ui/button";
import { pillars } from "@/data/landing-sp-content";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SolutionSection() {
  return (
    <section id="solucao" className="bg-ink px-[5%] py-24">
      <Reveal>
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[2.5px] text-brand">
          Nossa Abordagem
        </div>
        <h2 className="max-w-[600px] text-[clamp(28px,3.5vw,42px)] font-extrabold leading-[1.15] tracking-[-0.6px] text-white">
          7 pilares para transformar
          <br />
          sua gestão financeira
        </h2>
        <p className="mt-3.5 max-w-[540px] text-base leading-[1.75] text-white/45">
          Uma metodologia completa, construída para empresas que querem crescer com
          solidez.
        </p>
      </Reveal>

      <div className="mt-13 grid grid-cols-1 overflow-hidden rounded-[18px] border border-brand/15 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <div
            key={p.num}
            className="border-b border-r border-brand/10 bg-white/[0.03] p-8 transition-colors hover:bg-brand/[0.07]"
          >
            <div className="mb-3.5 text-[13px] font-bold tracking-wide text-brand">
              {p.num} —
            </div>
            <h3 className="mb-2.5 text-base font-bold text-white">{p.title}</h3>
            <p className="text-sm leading-[1.65] text-white/50">{p.text}</p>
          </div>
        ))}
        <div className="flex flex-col justify-center border-b border-r border-brand/10 bg-brand/10 p-8">
          <h3 className="mb-2 text-lg font-bold text-white">Pronto para começar?</h3>
          <p className="mb-4 text-sm leading-[1.65] text-white/60">
            Agende um diagnóstico gratuito e descubra por onde começar.
          </p>
          <Button
            size="sm"
            className="h-auto self-start px-5 py-2.5"
            onClick={() => scrollTo("formulario")}
          >
            Falar agora →
          </Button>
        </div>
      </div>
    </section>
  );
}
