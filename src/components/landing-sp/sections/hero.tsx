import { motion } from "framer-motion";
import { Button } from "@/components/landing-sp/ui/button";
import { heroStats } from "@/data/landing-sp-content";
import { SITE } from "@/lib/landing-sp/site";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderValue(v: string) {
  // destaca "+" e "%" em roxo, como no design original
  const m = v.match(/^(\+?)(\d+)(%?)$/);
  if (!m) return v;
  const [, plus, num, pct] = m;
  return (
    <>
      {plus && <span className="text-brand">{plus}</span>}
      {num}
      {pct && <span className="text-brand">{pct}</span>}
    </>
  );
}

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-[5%] pb-20 pt-[130px] text-center"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(134,121,230,.22) 0%, transparent 65%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="mb-[30px] inline-flex items-center gap-2 rounded-full border border-brand/45 px-[18px] py-[7px] text-xs font-semibold uppercase tracking-[1.5px] text-lilac">
          <span className="size-2 rounded-full bg-brand" />
          Assessoria Financeira Especializada — {SITE.cidade}
        </div>

        <h1 className="mb-6 max-w-[880px] text-[clamp(36px,5.5vw,64px)] font-extrabold leading-[1.1] tracking-[-1.2px] text-white">
          Visibilidade total do seu caixa <span className="text-lilac">em 30 dias</span>
        </h1>

        <p className="mb-11 max-w-[600px] text-[clamp(16px,1.8vw,19px)] leading-[1.75] text-white/60">
          Transformamos a desordem financeira da sua empresa em processos claros,
          rentabilidade crescente e decisões baseadas em dados reais.
        </p>

        <div className="flex flex-wrap justify-center gap-3.5">
          <Button size="lg" onClick={() => scrollTo("formulario")}>
            Agendar Diagnóstico Gratuito
          </Button>
          <Button size="lg" variant="ghost" onClick={() => scrollTo("solucao")}>
            Conhecer a solução
          </Button>
        </div>
      </motion.div>

      <div className="relative z-10 mt-[66px] flex flex-wrap justify-center gap-x-14 gap-y-8 border-t border-white/10 pt-12">
        {heroStats.map((s) => (
          <div key={s.label} className="text-center">
            <strong className="block text-[44px] font-extrabold leading-none tracking-[-1px] text-white">
              {renderValue(s.value)}
            </strong>
            <small className="mt-2 block text-[13px] text-white/45">{s.label}</small>
          </div>
        ))}
      </div>
    </header>
  );
}
