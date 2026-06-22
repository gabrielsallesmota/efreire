export const SITE = {
  whatsapp: import.meta.env.VITE_WHATSAPP ?? "5511999999999",
  telefoneDisplay: "(11) 99999-9999",
  telefoneHref: "+5511999999999",
  email: "contato@efreire.org",
  cidade: "São Paulo",
};

export const whatsappLink = `https://wa.me/${SITE.whatsapp}`;
