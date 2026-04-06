import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import azContent from "@/content/az/target-groups.json";

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
  const az = azContent.supportPersonnel;

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <InfoCard
              title={isAz ? "İdmançı Dəstək Heyəti (İDH) kimdir?" : "Who is Athlete Support Personnel (ASP)?"}
              content={isAz 
                ? "İdmançı Dəstək Heyəti (İDH) — idmançı ilə birbaşa işləyən, onun fəaliyyətinə təsir edən hər kəsi əhatə edir: məşqçilər, idman menecerləri, tibb mütəxəssisləri, fizioterapevtlər, psixoloqlar, valideynlər (profesional müqavilə çərçivəsində) və digərləri." 
                : "Athlete Support Personnel (ASP) includes everyone who works directly with athletes and influences their performance: coaches, sports managers, medical professionals, physiotherapists, psychologists, parents (within professional contracts), and others."}
              type="info"
            />
            <InfoCard
              title={isAz ? "AMADA Məşqçilərin Təlimi (ToT) Proqramı" : "AMADA Training of Trainers (ToT) Program"}
              content={isAz 
                ? "AMADA Məşqçilərin Təlimi (ToT) proqramı vasitəsilə idman federasiyaları daxilində dayanıqlı Maarifləndirici şəbəkəsi qurur. Akkreditasiyadan keçən məşqçilər federasiya daxilindəki seminarları müstəqil şəkildə keçirə bilərlər." 
                : "AMADA's Training of Trainers (ToT) program builds a sustainable Educator network within sports federations. Accredited coaches can independently deliver seminars within their federation."}
              type="success"
            />
          </div>

          {/* Öhdəliklər */}
          <div className="mb-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <h3 className="text-lg font-bold text-[#003466] mb-3">
              {isAz ? az.dutiesTitle : "Obligations — Code Article 21.2"}
            </h3>
            <ul className="space-y-2 text-sm text-[#102033]">
              {(isAz ? az.duties : [
                "Be familiar with anti-doping policies and rules",
                "Pass anti-doping knowledge on to their athletes",
                "Not facilitate doping rule violations",
                "Actively participate in AMADA's Education Programmes",
                "Report suspicious situations to AMADA",
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
