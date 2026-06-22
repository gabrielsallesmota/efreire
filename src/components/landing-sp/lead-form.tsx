import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadForm } from "@/lib/landing-sp/lead-schema";
import { enviarLead } from "@/lib/landing-sp/send-lead";
import { Input } from "@/components/landing-sp/ui/input";
import { Label } from "@/components/landing-sp/ui/label";
import { Button } from "@/components/landing-sp/ui/button";

type Status = null | "ok" | "err";

export function LeadForm() {
  const [status, setStatus] = useState<Status>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadForm>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      nome: "",
      cargo: "",
      empresa: "",
      telefone: "",
      email: "",
      desafio: "",
      faturamento: "",
    },
  });

  const onSubmit = async (data: LeadForm) => {
    setStatus(null);
    try {
      await enviarLead(data, "Landing Page — Tráfego Pago");
      setStatus("ok");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("err");
    }
  };

  return (
    <div className="rounded-[18px] border border-brand/20 bg-white/[0.04] p-9">
      <h3 className="mb-2 text-[22px] font-extrabold tracking-[-0.5px] text-white">
        Fale com um especialista
      </h3>
      <p className="mb-7 text-sm text-white/45">
        Preencha o formulário e entraremos em contato em até 24h.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field label="Nome *" error={errors.nome?.message}>
          <Input placeholder="Seu nome" {...register("nome")} />
        </Field>

        <Field label="Empresa *" error={errors.empresa?.message}>
          <Input placeholder="Nome da empresa" {...register("empresa")} />
        </Field>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Field label="WhatsApp *" error={errors.telefone?.message}>
            <Input type="tel" placeholder="(11) 99999-9999" {...register("telefone")} />
          </Field>
          <Field label="E-mail" error={errors.email?.message}>
            <Input type="email" placeholder="seu@email.com" {...register("email")} />
          </Field>
        </div>

        <Button type="submit" className="mt-2 w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Agendar Diagnóstico Gratuito →"}
        </Button>

        <p className="mt-3 text-center text-[11px] text-white/30">
          Seus dados são confidenciais e não serão compartilhados.
        </p>

        {status === "ok" && (
          <div className="mt-4 rounded-lg border border-brand/40 bg-brand/15 px-4 py-3.5 text-[13.5px] leading-[1.55] text-[#D9D4FA]">
            ✓ Recebemos seus dados! Nossa equipe entra em contato em até 24h.
          </div>
        )}
        {status === "err" && (
          <div className="mt-4 rounded-lg border border-[#e67878]/35 bg-[#e67878]/10 px-4 py-3.5 text-[13.5px] leading-[1.55] text-[#F2C6C6]">
            Não foi possível enviar agora. Tente novamente ou fale no WhatsApp.
          </div>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-4">
      <Label>{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-[11px] text-[#F2A6A6]">{error}</p>}
    </div>
  );
}
