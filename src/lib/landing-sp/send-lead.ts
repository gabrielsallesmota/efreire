import { submitLeadFn } from "../send-lead.server";
import type { LeadForm } from "./lead-schema";

export type EnvioResult = { ok: boolean; simulated: boolean; canais: string[] };

export async function enviarLead(
  dados: LeadForm,
  origem = "Landing Page SP",
): Promise<EnvioResult> {
  try {
    const result = await submitLeadFn({ data: { ...dados, origem } });
    return { ok: result.ok, simulated: result.simulated, canais: result.canais ?? [] };
  } catch (err) {
    throw err instanceof Error ? err : new Error("Falha no envio");
  }
}
