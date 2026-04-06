import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import azContent from "@/content/az/target-groups.json";

export const metadata: Metadata = {
  title: "Valideynlər & Himayədarlar | AMADA Təhsil",
  description: "Gənc idmançıları təmiz idman mühitində dəstəkləmək üçün valideynlər üçün məlumat və resurslar.",
};

export default async function ParentsTargetGroupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";
  const az = azContent.parents;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Valideynlər & Müəllimlər" : "Parents & Teachers"}
        subtitle={isAz 
          ? "Valideynlər və müəllimlər gənc idmançıların dəyərlərini formalaşdıran ən mühüm insanlardır. AMADA onları informasiyalı müttəfiq kimi görür — çünki uşaqlıq dövründə formalaşan etik anlayış, karyera boyu davam edir." 
          : "Parents and teachers are among the most important influences on young athletes. AMADA sees them as informed allies — because ethical understanding formed in childhood lasts throughout a career."}
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <InfoCard
              title={isAz ? "Valideynlərin Önəmi" : "Why Parents Matter"}
              content={isAz 
                ? "Valideynlər gənc idmançının dəyərlərinə, qidalanmasına və qalibiyyətə dair psixoloji yanışmasına dərindən təsir göstərir. Onlara dürüstlüyün qələbədən daha vacib olduğunu öyrətmək, gələcək dopinq təzyiqlərinə qarşı davamlılıq yaradır." 
                : "Parents profoundly influence a young athlete's values, nutrition, and psychological approach to winning. Teaching them that integrity is more important than victory builds resilience against future pressures to dope."}
              type="info"
            />
            <InfoCard
              title={isAz ? "Riskləri Tanımaq" : "Recognizing Risks"}
              content={isAz 
                ? "Yaxşı niyyətli məşqçilər və ya həmyaşıdlar performansı artırmaq üçün 'möcüzəvi' əlavə qidalar təklif etdikdə diqqətli olun. Həmişə qida-öncəlikli yanaşmaya üstünlük verin və hər hansı əlavə qida verməzdən əvvəl tibb mütəxəssisləri ilə məsləhətləşin." 
                : "Be cautious when well-meaning coaches or peers suggest 'miracle' supplements to boost performance. Always prioritize a food-first approach and consult medical professionals before providing any supplements."}
              type="warning"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ChecklistCard
              title={isAz ? az.parentsTitle : "How to Help (Parents)"}
              items={isAz
                ? az.parentsItems
                : [
                    "Instill the core values of fair play and respect",
                    "Be the gatekeeper for any medications given to your child",
                    "Promote healthy nutrition and rest over supplements",
                    "Ensure your child's coaches support clean sport principles",
                    "Create a safe environment for your child to discuss pressures",
                  ]}
            />
            <ChecklistCard
              title={isAz ? az.teachersTitle : "For Teachers"}
              items={isAz
                ? az.teachersItems
                : [
                    "Use AMADA's school programme classroom materials",
                    "Incorporate values-based sport topics into PE discussions",
                    "Invite AMADA's seminar programme to your school: education@amada.az",
                  ]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Valideynlər Üçün Alətlər" : "Find Tools for Parents"}
        description={isAz 
          ? "Valideynlərə təmiz idman söhbətlərini aparmağa kömək etmək üçün xüsusi hazırlanmış bələdçi və fakt-vərəqlərinə giriş əldə edin." 
          : "Access guides and factsheets specifically designed to help parents navigate clean sport conversations."}
        primaryAction={{ label: isAz ? "Resurs Kitabxanasına Keç" : "Go to Resource Library", path: `/${lang}/education/resources` }}
        variant="light"
      />
    </div>
  );
}
