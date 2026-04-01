import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Məşqçilər & Dəstək Heyəti | AMADA",
  description: "Məşqçilər, təlimçilər və idmançı dəstək heyəti üçün məsuliyyətlər və təmiz idmanın qorunması üzrə təhsil.",
};

export default async function SupportPersonnelTargetGroupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Məşqçilər & Dəstək Heyəti" : "Coaches & Support Personnel"}
        subtitle={isAz 
          ? "Siz idmançının həyatında əsas təsir gücünə maliksiniz. Onları necə təhlükəsiz istiqamətləndirməyi və təmiz idman dəyərlərini necə qorumağı öyrənin." 
          : "You are a key influence in an athlete's life. Learn how to guide them safely and uphold the values of clean sport."}
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <InfoCard
              title={isAz ? "Sizin Təsiriniz" : "Your Influence"}
              content={isAz 
                ? "İdmançılar öz məşqçilərinə və dəstək heyətinə nümunə kimi baxırlar. Sizin təmiz idmana münasibətiniz onların davranışlarını birbaşa formalaşdırır. Müsbət və güzəştsiz nümunə olmaq sizin ən mühüm məsuliyyətinizdir." 
                : "Athletes look up to their coaches and support staff. Your attitude towards clean sport directly shapes their behaviors. Setting a positive, uncompromising example is your most crucial responsibility."}
              type="info"
            />
            <InfoCard
              title={isAz ? "Riskləriniz & Öhdəlikləriniz" : "Your Risks & Liabilities"}
              content={isAz 
                ? "Dəstək heyəti İdarəetmə, Şəriklik və Qadağan edilmiş Əlaqə daxil olmaqla dopinqə qarşı qayda pozuntularına (DQAQP) görə sanksiyaya məruz qala bilər. Qaydaları bilməmək sizi qorumayacaq." 
                : "Support personnel can be sanctioned for anti-doping rule violations (ADRVs) including Administration, Complicity, and Prohibited Association. Ignorance of the rules will not protect you."}
              type="warning"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ChecklistCard
              title={isAz ? "Nələri Bilməlisiniz" : "What You Must Know"}
              items={isAz 
                ? [
                    "Dəstək Heyəti üçün tətbiq olunan Dopinqə Qarşı Qayda Pozuntuları",
                    "Qida əlavələri ilə bağlı risklər",
                    "Terapevtik İstifadə İcazəsi (Tİİ) prosesi",
                    "Komandanızda təmiz idman mədəniyyətini necə inkişaf etdirməli",
                    "Dopinq narahatlıqları üzrə bildiriş mexanizmləri"
                  ]
                : [
                    "The Anti-Doping Rule Violations applicable to Support Personnel",
                    "The risks associated with supplements",
                    "The Therapeutic Use Exemption (TUE) process",
                    "How to foster a clean sport culture in your team",
                    "Reporting mechanisms for doping concerns"
                  ]}
            />
            <ChecklistCard
              title={isAz ? "Gözlənilən Davranışlar" : "Expected Behaviors"}
              items={isAz 
                ? [
                    "Heç vaxt qadağan olunmuş maddələri idarə etməyin və ya istifadəsini təşviq etməyin",
                    "İdmançılara dərmanlarını təkrar yoxlamağı tövsiyə edin",
                    "İdmançıların Yerləşmə tələblərini yerinə yetirməsini təmin edin",
                    "Məcburi dopinqə qarşı təhsil sessiyalarında iştirak edin",
                    "Riskli davranış gördükdə müdaxilə edin"
                  ]
                : [
                    "Never administer or encourage the use of prohibited substances",
                    "Advise athletes to double-check their medications",
                    "Ensure athletes fulfill Whereabouts requirements",
                    "Attend mandatory anti-doping education sessions",
                    "Intervene if you see risky behavior"
                  ]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Təmiz İdman Davranışlarını Yoxlayın" : "Check Clean Sport Behaviors"}
        description={isAz 
          ? "İdmançılar ilə dəstək heyəti üçün gözlənilən davranışların yan-yana müqayisəsinə baxın." 
          : "See a side-by-side comparison of expected behaviors for athletes versus support personnel."}
        primaryAction={{ label: isAz ? "Təmiz İdman Davranışlarına Bax" : "View Clean Sport Behaviors", path: `/${lang}/education/clean-sport-behaviors` }}
        variant="primary"
      />
    </div>
  );
}
