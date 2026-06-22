import { Reveal } from "@/components/landing-sp/reveal";
import { Button } from "@/components/landing-sp/ui/button";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function CtaMid() {
  return (
    <section className="bg-brand px-[5%] py-[66px] text-center">
      <Reveal>
        <h2 className="mb-3 text-[clamp(24px,3vw,36px)] font-extrabold tracking-[-0.5px] text-white">
          Sua empresa merece clareza financeira agora
        </h2>
        <p className="mb-8 text-base text-white/80">
          Diagnóstico gratuito, sem compromisso. 30 minutos que podem mudar a trajetória
          do seu negócio.
        </p>
        <Button size="lg" variant="dark" onClick={() => scrollTo("formulario")}>
          Quero meu diagnóstico gratuito →
        </Button>
      </Reveal>
    </section>
  );
}
