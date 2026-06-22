// Função isolada para envio de leads ao webhook (Telegram ou similar).
// Mantém o contrato estável para facilitar trocas futuras de integração.

import { TELEGRAM_WEBHOOK_URL } from "./site-config";

export interface LeadPayload {
  nome: string;
  cargo?: string;
  empresa: string;
  telefone: string;
  email: string;
  desafio?: string;
  faturamento?: string;
  mensagem: string;
}

function formatTelegramMessage(lead: LeadPayload): string {
  const now = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "short",
    timeStyle: "short",
  });
  return [
    "🚀 *Novo Lead — Efreire*",
    "",
    `*Nome:* ${lead.nome}`,
    ...(lead.cargo ? [`*Cargo:* ${lead.cargo}`] : []),
    `*Empresa:* ${lead.empresa}`,
    `*Telefone:* ${lead.telefone}`,
    `*E-mail:* ${lead.email}`,
    ...(lead.desafio ? [`*Maior desafio:* ${lead.desafio}`] : []),
    ...(lead.faturamento ? [`*Faturamento:* ${lead.faturamento}`] : []),
    `*Mensagem:* ${lead.mensagem}`,
    "",
    "*Origem:* Site Institucional",
    `*Data/Hora:* ${now}`,
  ].join("\n");
}

/**
 * Envia o lead para o webhook configurado.
 * - Se TELEGRAM_WEBHOOK_URL apontar para a API oficial do Telegram (sendMessage),
 *   o corpo enviado será compatível.
 * - Caso aponte para um webhook customizado, o JSON completo é encaminhado.
 */
export async function sendLead(lead: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  if (!TELEGRAM_WEBHOOK_URL) {
    console.warn("[lead] TELEGRAM_WEBHOOK_URL não configurado — lead apenas registrado em console.", lead);
    return { ok: true };
  }

  const text = formatTelegramMessage(lead);

  try {
    const isTelegramApi = TELEGRAM_WEBHOOK_URL.includes("api.telegram.org");
    const body = isTelegramApi
      ? { text, parse_mode: "Markdown" }
      : { text, lead, source: "site-institucional", timestamp: new Date().toISOString() };

    const res = await fetch(TELEGRAM_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return { ok: false, error: `Webhook respondeu ${res.status}` };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Erro desconhecido" };
  }
}
