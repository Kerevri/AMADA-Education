import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tibb & Parametrik Mütəxəssislər | AMADA",
  description: "İdman həkimləri, fizioterapevtlər və tibb heyəti üçün ixtisaslaşmış dopinqə qarşı mübarizə məlumatları.",
};

export default async function MedicalTargetGroupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Tibb Mütəxəssisləri" : "Medical Professionals"}
        subtitle={isAz 
          ? "Həkimlər, fizioterapevtlər, əczaçılar və dietoloqlar idmançı sağlamlığının qorunmasında və təsadüfi dopinqin qarşısının alınmasında mühüm rol oynayırlar." 
          : "Doctors, physiotherapists, pharmacists, and dietitians play a critical role in safeguarding athlete health and preventing inadvertent doping."}
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <InfoCard
              title={isAz ? "İdmançının Qorunmasında Rol" : "Role in Athlete Protection"}
              content={isAz 
                ? "Siz idmançıları onların uyğunluğunu pozmadan müalicə etmək məsuliyyətini daşıyırsınız. Reseptlə yazılan və reseptsiz satılan dərmanları həmişə WADA Qadağan olunmuş Siyahısı ilə yoxlamalısınız." 
                : "You bear the responsibility of treating athletes without compromising their eligibility. You must always check prescribed and over-the-counter medications against the WADA Prohibited List."}
              type="info"
            />
            <InfoCard
              title={isAz ? "Tİİ-nin Aktuallığı" : "TUE Relevance"}
              content={isAz 
                ? "Əgər idmançı qanuni tibbi səbəbdən qadağan olunmuş maddəyə ehtiyac duyarsa, siz Terapevtik İstifadə İcazəsi (Tİİ) müraciətini dəstəkləmək üçün zəruri tibbi sənədləri təqdim etməlisiniz." 
                : "If an athlete requires a prohibited substance for a legitimate medical reason, you must provide the necessary medical file to support a Therapeutic Use Exemption (TUE) application."}
              type="success"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ChecklistCard
              title={isAz ? "Peşəkar Məsuliyyətlər" : "Professional Responsibilities"}
              items={isAz 
                ? [
                    "WADA Qadağan olunmuş Siyahısını mütəmadi olaraq yoxlayın (hər il yenilənir)",
                    "Tİİ-lər üzrə Beynəlxalq Standartın prinsiplərini tətbiq edin",
                    "İdmançıları qida əlavələrinin riskləri barədə məlumatlandırın",
                    "Potensial Tİİ-lər üçün aydın tibbi qeydlər aparın",
                    "Müalicələrin dopinqə qarşı qaydalara zidd olmadığını təmin edin"
                  ]
                : [
                    "Regularly consult the WADA Prohibited List (updated annually)",
                    "Apply the principles of the International Standard for TUEs",
                    "Educate athletes about the risks of supplements",
                    "Keep clear medical records for potential TUEs",
                    "Ensure treatments do not violate anti-doping regulations"
                  ]}
            />
            <ChecklistCard
              title={isAz ? "Gözlənilən Davranışlar" : "Expected Behaviors"}
              items={isAz 
                ? [
                    "Həmişə xəstələrdən onların dopinqə qarşı qaydalara tabe olub-olmadıqlarını soruşun",
                    "Dərmanları yoxlamaq üçün GlobalDRO və ya milli məlumat bazalarından istifadə edin",
                    "Qadağan olunmuş müalicələri tətbiq etməzdən əvvəl idmançıya Tİİ üçün müraciət etməyi tövsiyə edin",
                    "Əlavə qidalardan qabaq qida-öncəlikli yanaşmaları təşviq edin",
                    "Heç vaxt qanuni əsaslandırma olmadan qadağan olunmuş maddələrə sahib olmayın"
                  ]
                : [
                    "Always ask patients if they are subject to anti-doping rules",
                    "Use GlobalDRO or national databases to check medications",
                    "Advise athletes to apply for a TUE before administering prohibited treatments",
                    "Promote food-first approaches over supplements",
                    "Never possess prohibited substances without valid justification"
                  ]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Tibbi Təhsil Proqramlarına Baxın" : "Access Medical Education"}
        description={isAz 
          ? "AMADA idman təbabəti mütəxəssisləri üçün xüsusi sessiyalar və resurslar təqdim edir." 
          : "AMADA provides tailored sessions and resources for sports medicine professionals."}
        primaryAction={{ label: isAz ? "Tibbi Təhsil Proqramlarına Bax" : "View Medical Education Programs", path: `/${lang}/education/learning/medical-education` }}
        secondaryAction={{ label: isAz ? "Tİİ Mövzu Səhifəsi" : "TUE Topic Page", path: `/${lang}/education/topics/tue` }}
        variant="light"
      />
    </div>
  );
}
