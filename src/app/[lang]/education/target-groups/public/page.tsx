import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İctimaiyyət, Media & Geniş İcma | AMADA",
  description: "İdman dürüstlüyü haqqında məlumat alın və ictimaiyyətin təmiz idmanı necə dəstəklədiyini öyrənin.",
};

export default async function PublicTargetGroupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "İctimaiyyət & Geniş İcma" : "Public & Wider Community"}
        subtitle={isAz 
          ? "Təmiz idman ictimai maraq, sağlamlıq və milli dürüstlük məsələsidir. Hər kəsin idman ruhunu qorumaqda rolu var." 
          : "Clean sport is a matter of public interest, health, and national integrity. Everyone has a role to play in protecting the spirit of sport."}
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <InfoCard
              title={isAz ? "Təmiz İdman Niyə İctimaiyyət Üçün Vacibdir" : "Why Clean Sport Matters Publicly"}
              content={isAz 
                ? "Dopinq təkcə idmanda saxtakarlıq deyil; o, ciddi bir ictimai sağlamlıq təhlükəsidir və idmanın gənclərimizə öyrətdiyi etik dəyərlərə xələl gətirir. Azarkeşlər, media və sponsorlar təmiz idman tələb etdikdə, idmançılar düzgün qərarlar verməkdə dəstəklənirlər." 
                : "Doping is not just cheating in sports; it represents a serious public health hazard and undermines the ethical values that sports teach our youth. When fans, media, and sponsors demand clean sport, athletes are supported in making right decisions."}
              type="info"
            />
            <InfoCard
              title={isAz ? "Medianın Rolu" : "The Role of Media"}
              content={isAz 
                ? "Media ictimai qavrayışı formalaşdırır. Dopinqə qarşı qaydalar haqqında dəqiq hesabatlar vermək, sensasiyadan qaçmaq və təhsil ilə reabilitasiyanın əhəmiyyətini vurğulamaq məlumatlı idman mədəniyyətinin yaradılmasına kömək edir." 
                : "The media shapes public perception. Accurate reporting on anti-doping rules, avoiding sensationalism, and emphasizing the importance of education and rehabilitation helps create a well-informed sporting culture."}
              type="default"
            />
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Qaydalar Haqqında Daha Ətraflı Öyrənin" : "Learn More About the Rules"}
        description={isAz 
          ? "İstər hekayə hazırlayan jurnalist, istərsə də sistemin necə işlədiyini bilmək istəyən azarkeş olun, Təmiz İdman Mövzusularını araşdırın." 
          : "Whether you are a journalist researching a story or a fan wanting to know how the system works, explore our Clean Sport Topics."}
        primaryAction={{ label: isAz ? "Təmiz İdman Mövzularını Bax" : "View Clean Sport Topics", path: `/${lang}/education/topics` }}
        variant="teal"
      />
    </div>
  );
}
