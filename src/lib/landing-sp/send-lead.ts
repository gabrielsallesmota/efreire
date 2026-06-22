import type { LeadForm } from "./lead-schema";

/* ============================================================
   Envio de leads — Telegram + E-mail (FormSubmit, sem backend)
   Configure em .env (VITE_*). Cada lead vai pelos canais ativos.
   Basta um canal funcionar para o lead ser registrado.
   ============================================================ */

const EMAIL_DESTINO = import.meta.env.VITE_LEAD_EMAIL ?? "";
const TELEGRAM_TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN ?? "";
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID ?? "";

const LABELS: Record<keyof LeadForm, string> = {
  nome: "Nome",
  cargo: "Cargo",
  empresa: "Empresa",
  telefone: "Telefone/WhatsApp",
  email: "E-mail",
  desafio: "Maior desafio",
  faturamento: "Faturamento",
};

function montarTexto(dados: LeadForm, origem: string) {
  const linhas = ["🚀 <b>Novo Lead — Efreire</b>", ""];
  (Object.keys(LABELS) as (keyof LeadForm)[]).forEach((k) => {
    if (dados[k]) linhas.push(`<b>${LABELS[k]}:</b> ${dados[k]}`);
  });
  linhas.push("", `Origem: ${origem}`, `Data: ${new Date().toLocaleString("pt-BR")}`);
  return linhas.join("\n");
}

export type EnvioResult = {
  ok: boolean;
  simulated: boolean;
  canais: string[];
};

export async function enviarLead(
  dados: LeadForm,
  origem = "Landing Page",
): Promise<EnvioResult> {
  const tarefas: Promise<string>[] = [];

  if (TELEGRAM_TOKEN && TELEGRAM_CHAT_ID) {
    tarefas.push(
      fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: montarTexto(dados, origem),
          parse_mode: "HTML",
        }),
      }).then((r) => {
        if (!r.ok) throw new Error(`Telegram ${r.status}`);
        return "telegram";
      }),
    );
  }

  if (EMAIL_DESTINO) {
    const payload = {
      _subject: `Novo Lead — Efreire (${origem})`,
      _template: "table",
      Origem: origem,
      Data: new Date().toLocaleString("pt-BR"),
      ...dados,
    };
    tarefas.push(
      fetch(`https://formsubmit.co/ajax/${encodeURIComponent(EMAIL_DESTINO)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      }).then((r) => {
        if (!r.ok) throw new Error(`E-mail ${r.status}`);
        return "email";
      }),
    );
  }

  // Nenhum canal configurado: modo demonstração
  if (tarefas.length === 0) {
    console.info("[Efreire] Lead capturado (sem canal configurado):\n" + montarTexto(dados, origem));
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true, simulated: true, canais: [] };
  }

  const resultados = await Promise.allSettled(tarefas);
  const ok = resultados.filter(
    (r): r is PromiseFulfilledResult<string> => r.status === "fulfilled",
  );
  if (ok.length === 0) {
    const erro = resultados.find((r) => r.status === "rejected") as
      | PromiseRejectedResult
      | undefined;
    throw erro?.reason ?? new Error("Falha no envio");
  }
  return { ok: true, simulated: false, canais: ok.map((r) => r.value) };
}
