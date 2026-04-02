import { HeroSection } from "@/components/shared/HeroSection";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import { translations, t, type Lang } from "@/i18n/translations";

export const metadata: Metadata = {
  title: "TSS — Tez-tez soruşulan suallar | AMADA Təhsil",
  description: "AMADA-nın Təhsil proqramı haqqında ümumi sualların cavabları.",
};

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;

  const faqs = l === "az"
    ? [
        {
          question: "Dopinq nəzarəti nə vaxt baş verə bilər?",
          answer: "Hər hansı vaxt, yarışda və ya yarış xaricində, xəbərdarlıq edilmədən. Beynəlxalq yarışlarda da, milli yarışlarda da həyata keçirilə bilər.",
        },
        {
          question: "Qida əlavəsindəki qadağan edilmiş maddə sübut edildikdə nə baş verir?",
          answer: "İdmançı yenə də Ciddi Məsuliyyət prinsipinə görə cavabdehdir. Lakin bilmədən qəbul edildiyi sübut olunarsa, cəza müddəti azaldıla bilər. AMADA-ya dərhal müraciət edin: education@amada.az",
        },
        {
          question: "Tİİ nə qədər müddət ərzində nəzərdən keçirilir?",
          answer: "Standart müraciətlər 30 gün ərzində, təcili müraciətlər isə 24 saat ərzində nəzərdən keçirilir.",
        },
        {
          question: "Yaşadığım şəhərdə seminar keçirilirmi?",
          answer: "AMADA bütün regionlarda seminarlar keçirir. Müraciət etmək üçün federasiyanızın koordinatoru vasitəsilə AMADA ilə əlaqə saxlayın: education@amada.az",
        },
        {
          question: "ADEL kursları pulludurmu?",
          answer: "Xeyr. WADA-nın ADEL platformasındakı əsas kurslar tamamilə pulsuzdur. Baxış: https://adel.wada-ama.org",
        },
        {
          question: "Məlumat verdikdə mənim kimliyim açıqlanacaqmı?",
          answer: "Xeyr. Bütün müraciətlər tam məxfidir. AMADA-ya və ya WADA Speak Up! platformasına göndərilən məlumatlar anonim olaraq qəbul edilir.",
        },
      ]
    : [
        {
          question: "When can doping control happen?",
          answer: "At any time, in-competition or out-of-competition, without advance notice. It can be carried out at both international and national competitions.",
        },
        {
          question: "What happens if a prohibited substance is found in a dietary supplement I took?",
          answer: "The athlete is still liable under the principle of Strict Liability. However, if it can be proven that the substance was taken unknowingly, the sanction period may be reduced. Contact AMADA immediately: education@amada.az",
        },
        {
          question: "How long does a TUE application take to be reviewed?",
          answer: "Standard applications are reviewed within 30 days, and urgent applications within 24 hours.",
        },
        {
          question: "Are seminars held in my city?",
          answer: "AMADA holds seminars across all regions. To request one, contact AMADA through your federation coordinator: education@amada.az",
        },
        {
          question: "Are ADEL courses free?",
          answer: "Yes. The core courses on WADA's ADEL platform are completely free. Visit: https://adel.wada-ama.org",
        },
        {
          question: "Will my identity be disclosed if I report a concern?",
          answer: "No. All submissions are fully confidential. Reports sent to AMADA or via the WADA Speak Up! platform are received anonymously.",
        },
      ];

  const faqTitle = t(translations.faq.title, l);
  const faqSubtitle = t(translations.faq.subtitle, l);

  return (
    <div className="flex flex-col">
      <HeroSection
        title={faqTitle}
        subtitle={faqSubtitle}
        compact
      />

      <section className="py-20 bg-background text-foreground">
        <div className="">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title={l === "az" ? "Hələ də suallarınız var?" : "Still have questions?"}
        description={l === "az" ? "Təhsil komandamız hər hansı şübhəni aydınlaşdırmaqda köməyə hazırdır. Təxmin etməyin — həmişə soruşun." : "Our education team is here to help clarify any doubts. Don't guess—always ask."}
        primaryAction={{ label: l === "az" ? "Təhsil Qrupu ilə Əlaqə" : "Contact Education Team", path: `/${lang}/education/contact` }}
        variant="teal"
      />
    </div>
  );
}
