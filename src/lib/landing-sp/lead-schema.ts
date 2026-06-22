import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().min(2, "Informe seu nome"),
  cargo: z.string().optional().or(z.literal("")),
  empresa: z.string().min(2, "Informe a empresa"),
  telefone: z
    .string()
    .min(8, "Informe um WhatsApp válido"),
  email: z
    .string()
    .email("E-mail inválido")
    .optional()
    .or(z.literal("")),
  desafio: z.string().optional().or(z.literal("")),
  faturamento: z.string().optional().or(z.literal("")),
});

export type LeadForm = z.infer<typeof leadSchema>;

export const desafioOptions = [
  "Fluxo de caixa desorganizado",
  "Falta de relatórios gerenciais",
  "Margens e custos incertos",
  "Processos financeiros manuais",
  "Planejamento estratégico",
  "Outro",
] as const;

export const faturamentoOptions = [
  "Até R$ 100 mil",
  "R$ 100 mil – R$ 500 mil",
  "R$ 500 mil – R$ 2 milhões",
  "Acima de R$ 2 milhões",
] as const;
