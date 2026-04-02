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

          <h2 className="text-2xl font-bold text-[#003466] mb-5">
            {isAz ? "İdmançı kateqoriyaları" : "Athlete Categories"}
          </h2>
          <div className="mb-14 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-[#003466] text-white">
                  <th className="text-left px-5 py-3 font-semibold">{isAz ? "Kateqoriya" : "Category"}</th>
                  <th className="text-left px-5 py-3 font-semibold">{isAz ? "Tərif" : "Definition"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {(isAz ? [
                  ["Milli Səviyyəli İdmançı", "AMADA tərəfindən müəyyən edilən milli yarışlarda iştirak edən idmançı"],
                  ["Beynəlxalq Səviyyəli İdmançı", "Müvafiq Beynəlxalq Federasiya tərəfindən müəyyən edilən idmançı"],
                  ["Azyaşlı (Minor)", "18 yaşına çatmamış fiziki şəxs"],
                  ["Qorunan Şəxs", "Pozuntu zamanı 16 yaşına çatmamış VƏ heç vaxt beynəlxalq açıq kateqoriyada yarışmamış idmançı — xüsusi mühafizə statusu tətbiq edilir"],
                  ["QTQ İdmançısı", "Qeydiyyata alınmış Test Qrupuna daxil olan, ADAMS-da məkan məlumatı öhdəliyi olan idmançı"],
                  ["Rekreasiya idmançısı", "Bədən tərbiyəsi məqsədilə idmanla məşğul olan, rəsmi yarışlarda iştirak etməyən şəxs"],
                ] : [
                  ["National-Level Athlete", "An athlete competing at national level as defined by AMADA"],
                  ["International-Level Athlete", "An athlete competing at international level as defined by the relevant International Federation"],
                  ["Minor", "A natural person who has not reached the age of 18"],
                  ["Protected Person", "Not yet 16 at time of violation AND never competed in open category international event — special protection status applies"],
                  ["RTP Athlete", "Member of the Registered Testing Pool with whereabouts obligations in ADAMS"],
                  ["Recreational Athlete", "A person participating in sport for fitness purposes, not competing in official competitions"],
                ]).map(([cat, def], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-3 font-semibold text-[#003466] whitespace-nowrap">{cat}</td>
                    <td className="px-5 py-3 text-[#102033]">{def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
