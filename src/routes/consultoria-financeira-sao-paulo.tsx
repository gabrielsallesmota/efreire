import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing-sp/navbar";
import { Hero } from "@/components/landing-sp/sections/hero";
import { PainSection } from "@/components/landing-sp/sections/pain-section";
import { SolutionSection } from "@/components/landing-sp/sections/solution-section";
import { BenefitsSection } from "@/components/landing-sp/sections/benefits-section";
import { ProcessSection } from "@/components/landing-sp/sections/process-section";
import { AboutSection } from "@/components/landing-sp/sections/about-section";
import { CtaMid } from "@/components/landing-sp/sections/cta-mid";
import { FaqSection } from "@/components/landing-sp/sections/faq-section";
import { LeadSection } from "@/components/landing-sp/sections/lead-section";
import { SiteFooter } from "@/components/landing-sp/site-footer";
import { WhatsAppFloat } from "@/components/landing-sp/whatsapp-float";
import { faqs } from "@/data/landing-sp-content";
import { SITE } from "@/lib/site-config";
import { SITE as LANDING_SITE } from "@/lib/landing-sp/site";

export const Route = createFileRoute("/consultoria-financeira-sao-paulo")({
  head: () => {
    const title = "Efreire — Visibilidade total do seu caixa em 30 dias";
    const description =
      "Assessoria financeira especializada em São Paulo. Transformamos a desordem financeira da sua empresa em processos claros, rentabilidade e decisões baseadas em dados.";
    const url = `${SITE.url}/consultoria-financeira-sao-paulo`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE.url}/og-image.jpg` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Efreire Assessoria",
            url,
            email: LANDING_SITE.email,
            telephone: LANDING_SITE.telefoneHref,
            areaServed: [
              { "@type": "City", name: "São Paulo" },
              { "@type": "Country", name: "Brasil" },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              addressCountry: "BR",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        },
      ],
    };
  },
  component: ConsultoriaFinanceiraSaoPauloPage,
});

function ConsultoriaFinanceiraSaoPauloPage() {
  return (
    <div className="landing-sp">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <SolutionSection />
        <BenefitsSection />
        <ProcessSection />
        <AboutSection />
        <CtaMid />
        <FaqSection />
        <LeadSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </div>
  );
}
