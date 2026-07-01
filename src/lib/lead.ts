import { submitLeadFn } from "./send-lead.server";

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

export async function sendLead(lead: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  try {
    await submitLeadFn({ data: { ...lead, origem: "Site Institucional" } });
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Erro ao enviar" };
  }
}
