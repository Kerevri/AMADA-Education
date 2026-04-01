import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İdmançılar üçün Təhsil | AMADA",
  description: "İnkişaf yolunun bütün mərhələlərində olan idmançılar üçün vacib dopinqə qarşı mübarizə təhsili.",
};

export default async function AthletesTargetGroupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "İdmançılar" : "Athletes"}
        subtitle={isAz 
          ? "Bir idmançı olaraq siz təmiz idmanın mərkəzindəsiniz. Hüquqlarınızı, məsuliyyətlərinizi və karyeranızı qəsdən və ya təsadüfi dopinqdən necə qoruyacağınızı anlayın." 
          : "As an athlete, you are at the heart of clean sport. Understand your rights, your responsibilities, and how to protect your career from intentional or unintentional doping."}
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <InfoCard
              title={isAz ? "Təhsil Sizin Üçün Nə Üçün Vacibdir" : "Why Education Matters for You"}
              content={isAz 
                ? "Bilməmək bəhanə deyil. Ciddi Məsuliyyət prinsipinə görə, bədəninizdə tapılan hər hansı qadağan olunmuş maddəyə görə yalnız siz məsuliyyət daşıyırsınız. Təhsil təsadüfi səhvlər etməyəcəyinizi təmin edir." 
                : "Ignorance is not an excuse. Under the principle of Strict Liability, you are solely responsible for any prohibited substance found in your system, regardless of how it got there. Education ensures you don't make accidental mistakes."}
              type="warning"
            />
            <InfoCard
              title={isAz ? "Əsas Riskləriniz" : "Your Main Risks"}
              content={isAz 
                ? "İdmançılar üçün ən yüksək risklərə yoxlanılmamış əlavə qidaların istifadəsi, reseptsiz dərmanların Qadağan olunmuş Siyahı ilə yoxlanılmadan qəbulu və Yerləşmə məlumatlarının yenilənməməsi daxildir." 
                : "The highest risks for athletes include using unchecked supplements, taking over-the-counter medications without verifying them against the Prohibited List, and failing to update Whereabouts information if you are in the RTP."}
              type="info"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8 text-center">{isAz ? "Hədəflədiyimiz İdmançı Mərhələləri" : "Athlete Stages We Target"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {(isAz 
              ? [
                  "Gənc İdmançılar",
                  "İstedadlı İdmançılar",
                  "Milli Səviyyəli İdmançılar",
                  "Beynəlxalq Səviyyəli İdmançılar",
                  "QSH (Qeydiyyatlı Sınaq Hovuzu) İdmançıları",
                  "Sanksiyadan Qayıdan İdmançılar"
                ]
              : [
                  "Youth Athletes",
                  "Talented Athletes",
                  "National-Level Athletes",
                  "International-Level Athletes",
                  "RTP (Registered Testing Pool) Athletes",
                  "Athletes Returning from Sanction"
                ]
            ).map((stage, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border flex items-center shadow-sm bg-slate-50">
                <span className="font-semibold text-primary">{stage}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ChecklistCard
              title={isAz ? "Nələri Bilməlisiniz" : "What You Need to Know"}
              items={isAz 
                ? [
                    "11 Dopinqə Qarşı Qayda Pozuntusu (DQAQP)",
                    "Ciddi Məsuliyyət prinsipi",
                    "İstifadədən əvvəl dərmanları necə yoxlamalı",
                    "Qida əlavələri ilə bağlı risklər",
                    "Nümunə toplama prosesi (Sidik və Qan)",
                    "Tibbi vəziyyətiniz olduqda Tİİ üçün necə müraciət etməli"
                  ]
                : [
                    "The 11 Anti-Doping Rule Violations (ADRVs)",
                    "The principle of Strict Liability",
                    "How to check medications before use",
                    "The risks associated with nutritional supplements",
                    "The sample collection process (Urine & Blood)",
                    "How to apply for a TUE if you have a medical condition"
                  ]}
            />
            <ChecklistCard
              title={isAz ? "Gözlənilən Təmiz İdman Davranışları" : "Expected Clean Sport Behaviors"}
              items={isAz 
                ? [
                    "Həmişə təmiz idmanı dəstəkləyin",
                    "Hər bir dərmanı GlobalDRO-da və ya həkimlə yoxlayın",
                    "Tibb heyətinə idmançı olduğunuzu bildirin",
                    "Dopinq Kontrol Əməkdaşları ilə tam əməkdaşlıq edin",
                    "Mümkün olduqda Yerləşmə məlumatlarınızı aktual saxlayın",
                    "Hər hansı dopinq narahatlığını təhlükəsiz şəkildə bildirin"
                  ]
                : [
                    "Always advocate for clean sport",
                    "Verify every medication on GlobalDRO or with a doctor",
                    "Inform medical staff that you are an athlete",
                    "Cooperate fully with Doping Control Officers",
                    "Keep your Whereabouts up to date if applicable",
                    "Report any doping concerns securely"
                  ]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Öyrənməyə Hazırsınız?" : "Ready to Learn?"}
        description={isAz 
          ? "Qaydaları daha dərindən araşdırmaq üçün Təmiz İdman Mövzularını kəşf edin və ya birbaşa e-öyrənmə platformamıza keçin." 
          : "Explore the Clean Sport Topics to dig deeper into the rules, or dive straight into our elearning platform."}
        primaryAction={{ label: isAz ? "Təmiz İdman Mövzularına Keç" : "Go to Clean Sport Topics", path: `/${lang}/education/topics` }}
        secondaryAction={{ label: isAz ? "İdmançı Yoluna Bax" : "View Athlete Pathway", path: `/${lang}/education/athlete-pathway` }}
        variant="light"
      />
    </div>
  );
}
