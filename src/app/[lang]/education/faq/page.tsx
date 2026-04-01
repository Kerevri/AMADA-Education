import { HeroSection } from "@/components/shared/HeroSection";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import { translations, t, type Lang } from "@/i18n/translations";

export const metadata: Metadata = {
  title: "FAQ | AMADA Education",
  description: "Find quick answers to common questions about anti-doping rules, testing, and medications.",
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
          question: "Seçilsəm dərman sınağından keçməliyəmmi?",
          answer: "Bəli. Bildirişdən sonra nümunə toplanmasından yayınmaq, imtina etmək və ya bunu etməmək Dopinqə Qarşı Qayda Pozuntusudur (DQAQP) və adətən 4 illik qadağana yol açır.",
        },
        {
          question: "Qida əlavələri istifadəsi üçün təhlükəsizdir?",
          answer: "Heç bir əlavə qida 100% risksiz deyil. Sənayenin zəif tənzimlənməsi səbəbindən əlavə qidalar etiketdə göstərilməyən qadağan olunmuş maddələrlə çirklənə bilər. İdmançılar onlardan öz ciddi məsuliyyəti ilə istifadə edir.",
        },
        {
          question: "Həkim qadağan olunmuş dərman yazdırsa nə etməliyəm?",
          answer: "Tibbi fövqəladə hal olmadıqca, dərmanı istifadə etməzdən ƏVVƏL Terapevtik İstifadə İcazəsi (Tİİ) üçün müraciət etməlisiniz. AMADA icazə vermək üçün tibbi sənədlərinizi nəzərdən keçirəcək.",
        },
        {
          question: "Yarışma xaricindən sınaqdan keçirilə bilərəm?",
          answer: "Bəli. İstənilən idmançı istənilən yerdə, istənilən vaxt sınaqdan keçirilə bilər. Qeydiyyatlı Sınaq Hovuzundakı (QSH) idmançılar, DNZ-lərin yarışma xarici sınaqlar üçün onları tapa bilməsi üçün gündəlik Yerləşmə məlumatı verməlidir.",
        },
        {
          question: "Müsbət test versəm, lakin bu təsadüfi olursa nə olur?",
          answer: "Ciddi Məsuliyyət prinsipinə görə, niyyətdən asılı olmayaraq bədəninizdə tapılan maddədən məsuliyyət daşıyırsınız. Bunun əksliyini sübut etmək cəzanızı azalda bilər, lakin bu yenə DQAQP-dir.",
        },
      ]
    : [
        {
          question: "Do I have to take a drug test if I am selected?",
          answer: "Yes. Evading, refusing, or failing to submit to sample collection after being notified is an Anti-Doping Rule Violation (ADRV) and typically carries a 4-year ban from sport.",
        },
        {
          question: "Are dietary supplements safe to use?",
          answer: "No supplement is 100% risk-free. Due to poor industry regulation, supplements can be contaminated with prohibited substances not listed on the label. Athletes use them at their own strict liability.",
        },
        {
          question: "What should I do if my doctor prescribes a prohibited medication?",
          answer: "You must apply for a Therapeutic Use Exemption (TUE) BEFORE using the medication, provided it is not a medical emergency. AMADA will review your medical file to grant authorization.",
        },
        {
          question: "Can I be tested out-of-competition?",
          answer: "Yes. Any athlete can be tested anywhere, anytime. If you are in a Registered Testing Pool (RTP), you must provide daily Whereabouts information so DCOs can locate you for out-of-competition testing.",
        },
        {
          question: "What happens if I test positive but it was an accident?",
          answer: "Under the principle of Strict Liability, you are responsible for any substance found in your body regardless of intent. While proving it was accidental may reduce your sanction, it is still an ADRV.",
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
