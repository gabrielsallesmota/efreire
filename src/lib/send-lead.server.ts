import { createServerFn } from "@tanstack/react-start";

export interface LeadInput {
  nome: string;
  cargo?: string;
  empresa: string;
  telefone: string;
  email: string;
  desafio?: string;
  faturamento?: string;
  mensagem?: string;
  origem: string;
}

function buildWhatsAppLink(telefone: string): string {
  const digits = telefone.replace(/\D/g, "");
  const number = digits.startsWith("55") && digits.length >= 12 ? digits : `55${digits}`;
  const msg = encodeURIComponent(
    `Olá!\n\nAqui é da Efreire Assessoria.\n\nRecebi seu contato pelo formulário e gostaria de agendar um diagnóstico financeiro gratuito.\n\nTem disponibilidade?`,
  );
  return `https://wa.me/${number}?text=${msg}`;
}

function formatTelegram(d: LeadInput): string {
  const now = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const lines = ["🚀 <b>Novo Lead — Efreire</b>", ""];
  lines.push(`<b>Nome:</b> ${d.nome}`);
  if (d.cargo) lines.push(`<b>Cargo:</b> ${d.cargo}`);
  lines.push(`<b>Empresa:</b> ${d.empresa}`);
  lines.push(`<b>Telefone:</b> ${d.telefone}`);
  lines.push(`<b>E-mail:</b> ${d.email}`);
  if (d.desafio) lines.push(`<b>Maior desafio:</b> ${d.desafio}`);
  if (d.faturamento) lines.push(`<b>Faturamento:</b> ${d.faturamento}`);
  if (d.mensagem) lines.push(`<b>Mensagem:</b> ${d.mensagem}`);
  lines.push(
    "",
    `<b>Origem:</b> ${d.origem}`,
    `<b>Data:</b> ${now}`,
    "",
    `📱 <a href="${buildWhatsAppLink(d.telefone)}">Responder no WhatsApp</a>`,
  );
  return lines.join("\n");
}

function formatEmailHtml(d: LeadInput): string {
  const now = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const fields: [string, string | undefined][] = [
    ["Nome", d.nome],
    ["Cargo", d.cargo],
    ["Empresa", d.empresa],
    ["Telefone", d.telefone],
    ["E-mail", d.email],
    ["Maior desafio", d.desafio],
    ["Faturamento", d.faturamento],
    ["Mensagem", d.mensagem],
    ["Origem", d.origem],
    ["Data/Hora", now],
  ];
  const rows = fields
    .filter(([, v]) => v)
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 14px;background:#f7f6ff;font-weight:600;border:1px solid #e5e3fc;width:160px;color:#1e1b6b;white-space:nowrap">${label}</td>
          <td style="padding:10px 14px;border:1px solid #e5e3fc">${value}</td>
        </tr>`,
    )
    .join("");
  const waLink = buildWhatsAppLink(d.telefone);
  return `<!DOCTYPE html>
<html lang="pt-BR">
<body style="font-family:sans-serif;color:#333;margin:0;padding:24px;background:#fff">
  <div style="max-width:600px;margin:0 auto">
    <h2 style="color:#1e1b6b;margin-bottom:4px">🚀 Novo Lead — Efreire</h2>
    <p style="color:#666;font-size:14px;margin:0 0 20px">Formulário recebido via ${d.origem}</p>
    <table style="border-collapse:collapse;width:100%;font-size:14px">${rows}</table>
    <div style="margin-top:28px;text-align:center">
      <a href="${waLink}" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:8px;text-decoration:none">
        📱 Responder no WhatsApp
      </a>
    </div>
  </div>
</body>
</html>`;
}

export type SubmitResult = { ok: true; simulated: boolean; canais?: string[] };

export const submitLeadFn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as LeadInput)
  .handler(async ({ data }): Promise<SubmitResult> => {

    const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN ?? "";
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? "";
    const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";
    const BREVO_TO_EMAIL = process.env.BREVO_TO_EMAIL ?? "";
    const BREVO_FROM_EMAIL = process.env.BREVO_FROM_EMAIL ?? "";
    const BREVO_FROM_NAME = process.env.BREVO_FROM_NAME ?? "Efreire";

    const tasks: Promise<string>[] = [];

    if (TELEGRAM_TOKEN && TELEGRAM_CHAT_ID) {
      tasks.push(
        fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: formatTelegram(data),
            parse_mode: "HTML",
          }),
        }).then((r) => {
          if (!r.ok) throw new Error(`Telegram ${r.status}`);
          return "telegram";
        }),
      );
    }

    if (BREVO_API_KEY && BREVO_TO_EMAIL && BREVO_FROM_EMAIL) {
      tasks.push(
        fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: { "Content-Type": "application/json", "api-key": BREVO_API_KEY },
          body: JSON.stringify({
            sender: { name: BREVO_FROM_NAME, email: BREVO_FROM_EMAIL },
            to: [{ email: BREVO_TO_EMAIL }],
            subject: `Novo Lead — Efreire (${data.origem})`,
            htmlContent: formatEmailHtml(data),
          }),
        }).then((r) => {
          if (!r.ok) throw new Error(`Brevo ${r.status}`);
          return "email";
        }),
      );
    }

    if (tasks.length === 0) {
      console.info("[Efreire] Lead sem canal configurado:", JSON.stringify(data));
      return { ok: true, simulated: true };
    }

    const results = await Promise.allSettled(tasks);
    const fulfilled = results.filter(
      (r): r is PromiseFulfilledResult<string> => r.status === "fulfilled",
    );

    if (fulfilled.length === 0) {
      const err = (results.find((r) => r.status === "rejected") as PromiseRejectedResult | undefined)
        ?.reason;
      throw err ?? new Error("Falha no envio");
    }

    return { ok: true, simulated: false, canais: fulfilled.map((r) => r.value) };
  },
);
