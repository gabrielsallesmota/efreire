// Configurações globais do site Efreire.
// Edite estes valores conforme as informações oficiais da empresa.

export const SITE = {
  name: "Efreire Assessoria e Serviços Especializados",
  shortName: "Efreire",
  domain: "efreire.com.br",
  url: "https://efreire.com.br",
  email: "contato@efreire.com.br",
  phone: "+55 (11) 90000-0000",
  phoneDisplay: "(11) 90000-0000",
  address: "São Paulo, SP — Brasil",
  city: "São Paulo",
  state: "SP",
  country: "BR",
  description:
    "Planejamento financeiro, gestão estratégica e estruturação empresarial para empresas que querem crescer com segurança.",
} as const;

// Substitua pelos links reais quando disponíveis.
export const WHATSAPP_URL: string = "https://wa.me/5511900000000?text=Olá%2C%20quero%20agendar%20um%20diagnóstico%20com%20a%20Efreire.";
export const TELEGRAM_WEBHOOK_URL: string = ""; // Ex.: "https://api.telegram.org/bot<TOKEN>/sendMessage" via proxy interno
export const INSTAGRAM_URL: string = "https://instagram.com/efreire";
export const LINKEDIN_URL: string = "https://linkedin.com/company/efreire";

export const NAV_LINKS = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/metodologia", label: "Metodologia" },
  { to: "/contato", label: "Contato" },
] as const;

