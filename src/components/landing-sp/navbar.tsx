import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/landing-sp/ui/button";

const links = [
  { href: "#solucao", label: "Solução" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#faq", label: "FAQ" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-[999] flex h-[70px] items-center justify-between border-b border-brand/20 bg-ink/[0.97] px-[5%] backdrop-blur-md">
      <a
        href="#top"
        className="flex items-center"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img
          src="/efreire-assessoria-e-servicos-especializados-logo-landing-sp.png"
          alt="Efreire Assessoria e Serviços Especializados"
          className="h-[38px] w-auto"
        />
      </a>

      <ul className="hidden items-center gap-[30px] md:flex">
        {links.map((l) => (
          <li key={l.href}>
            <button
              onClick={() => go(l.href.slice(1))}
              className="text-sm font-medium text-white/70 transition-colors hover:text-lilac"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <Button size="sm" className="h-auto px-6 py-2.5" onClick={() => go("formulario")}>
          Diagnóstico Gratuito
        </Button>
      </div>

      <button
        className="flex size-11 items-center justify-center text-white md:hidden"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-[70px] flex flex-col gap-1 border-b border-white/10 bg-ink/[0.98] px-[5%] pb-4 pt-2 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href.slice(1))}
              className="border-b border-white/10 py-3.5 text-left text-[15px] text-white/80"
            >
              {l.label}
            </button>
          ))}
          <Button className="mt-3" onClick={() => go("formulario")}>
            Diagnóstico Gratuito
          </Button>
        </div>
      )}
    </nav>
  );
}
