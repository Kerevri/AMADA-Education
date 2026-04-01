import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-border rounded-xl px-6 py-2 shadow-sm">
      {/* @ts-ignore: shadcn accordion types mismatch with React 19/Next 16 */}
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-border py-2">
            <AccordionTrigger className="text-left font-semibold text-primary hover:text-amada-teal hover:no-underline transition-colors text-lg">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#102033] leading-relaxed text-base pt-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
