import { Reveal } from "@/components/landing-sp/reveal";
import { Eyebrow, SectionTitle } from "@/components/landing-sp/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/landing-sp/ui/accordion";
import { faqs } from "@/data/landing-sp-content";

export function FaqSection() {
  return (
    <section id="faq" className="bg-white px-[5%] py-24">
      <Reveal className="text-center">
        <Eyebrow center>FAQ</Eyebrow>
        <SectionTitle center>Perguntas frequentes</SectionTitle>
      </Reveal>

      <Reveal className="mx-auto mt-12 max-w-[740px]">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
