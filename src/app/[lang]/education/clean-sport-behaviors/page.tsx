import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Təmiz İdman Davranışları | AMADA Təhsil",
  description: "İdmançılar və idman dəstək heyəti üçün antidopinq qaydaları çərçivəsində nümayiş etdirilməli konkret davranış normaları.",
};

export default async function CleanSportBehaviorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Təmiz İdman Davranışları" : "Clean Sport Behaviours"}
        subtitle={isAz
          ? "Təmiz idman davranışları — idmançıların və idmançı dəstək heyətinin antidopinq qaydaları çərçivəsində nümayiş etdirməli olduğu konkret hərəkət və davranış normalarıdır."
          : "Clean sport behaviours define exactly what is expected of athletes and support personnel to maintain sport integrity."}
        compact
      />

      <section className="py-16 bg-background text-foreground">
        <div className="max-w-5xl">

          {/* Intro */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#003466] mb-4">
              {isAz ? "Bilik — Əmələ çevrilir" : "Values into Action"}
            </h2>
            <p className="text-[#102033] leading-relaxed">
              {isAz
                ? "Bu davranışlar ISE Maddə 8.1.1-də müəyyən edilmiş məcburi mövzular əsasında formalaşır. AMADA-nın bütün təhsil fəaliyyətləri bu davranışların möhkəmləndirilməsinə yönəldilib. Davranışlar idmançının karyerası boyunca — gənc mərhələdən elit səviyyəyə qədər — inkişaf etdirilməlidir."
                : "Understanding the rules is the first step. Translating that knowledge into everyday protective behaviours is how we maintain a level playing field."}
            </p>
          </div>

          {/* Three pillar cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {/* Bilmək */}
            <div className="bg-white p-7 rounded-xl border-t-4 border-t-amada-teal shadow-sm border border-border">
              <div className="w-10 h-10 rounded-full bg-amada-teal/10 flex items-center justify-center mb-4">
                <span className="text-amada-teal font-bold text-lg">B</span>
              </div>
              <h3 className="text-xl font-bold text-[#003466] mb-4">
                {isAz ? "Bilmək" : "Know"}
              </h3>
              <ul className="space-y-3 text-[#102033] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amada-teal mt-1">✓</span>
                  <span>{isAz ? "Qadağan edilmiş Siyahını mütəmadi yoxlamaq" : "Regularly check the Prohibited List"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amada-teal mt-1">✓</span>
                  <span>{isAz ? "AMADA-nın antidopinq qaydaları ilə tanış olmaq" : "Know AMADA's anti-doping rules"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amada-teal mt-1">✓</span>
                  <span>{isAz ? "Terapevtik İstifadə İcazəsi (Tİİ) prosedurunu başa düşmək" : "Understand the TUE procedure"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amada-teal mt-1">✓</span>
                  <span>{isAz ? "Ciddi Məsuliyyət prinsipini dərk etmək" : "Understand Strict Liability"}</span>
                </li>
              </ul>
            </div>

            {/* Etmək */}
            <div className="bg-white p-7 rounded-xl border-t-4 border-t-[#003466] shadow-sm border border-border">
              <div className="w-10 h-10 rounded-full bg-[#003466]/10 flex items-center justify-center mb-4">
                <span className="text-[#003466] font-bold text-lg">E</span>
              </div>
              <h3 className="text-xl font-bold text-[#003466] mb-4">
                {isAz ? "Etmək" : "Do"}
              </h3>
              <ul className="space-y-3 text-[#102033] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#003466] mt-1">✓</span>
                  <span>{isAz ? "Hər hansı dərman və ya qida əlavəsini qadağan edilmiş Siyahıda yoxlamaq" : "Check every substance against the Prohibited List before taking it"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003466] mt-1">✓</span>
                  <span>{isAz ? "Tibb mütəxəssisi ilə məsləhətləşmək" : "Consult a medical professional"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003466] mt-1">✓</span>
                  <span>{isAz ? "Dopinq nəzarəti prosesinə tam açıqlıqla iştirak etmək" : "Cooperate fully with doping control"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#003466] mt-1">✓</span>
                  <span>{isAz ? "QTQ üzvləri üçün məkan məlumatını vaxtında təqdim etmək" : "Submit whereabouts information on time (RTP members)"}</span>
                </li>
              </ul>
            </div>

            {/* Danışmaq */}
            <div className="bg-white p-7 rounded-xl border-t-4 border-t-green-600 shadow-sm border border-border">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <span className="text-green-700 font-bold text-lg">D</span>
              </div>
              <h3 className="text-xl font-bold text-[#003466] mb-4">
                {isAz ? "Danışmaq" : "Speak Up"}
              </h3>
              <ul className="space-y-3 text-[#102033] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{isAz ? "Şübhəli vəziyyətlər barədə etibarlı şəxsə məlumat vermək" : "Report suspicious situations to a trusted person"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{isAz ? "AMADA-nın Narahatlığı Bildir kanalından istifadə etmək" : "Use AMADA's Report a Concern channel"}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{isAz ? "Komanda yoldaşlarını təmiz idman haqqında məlumatlandırmaq" : "Inform teammates about clean sport"}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl">
            <InfoCard
              title={isAz ? "Ortaq Məsuliyyət" : "A Shared Responsibility"}
              content={isAz
                ? "Hər bir davranış — idmançının baş ağrısı dərmanını iki dəfə yoxlamasından, məşqçinin qəfil performans artışını sorğulamasına, federasiyanın seminar keçirməsinə qədər — dopinqə qarşı güclü bir qalxan formalaşdırır. Siz həllin bir hissəsisiniz."
                : "Every behaviour—from an athlete double-checking a headache tablet, to a coach questioning a sudden performance spike, to a federation hosting a seminar—accumulates to form a robust shield against doping."}
              type="info"
            />
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Biliklərinizi Yoxlayın" : "Check Your Knowledge"}
        description={isAz
          ? "Elektron öyrənmə modullarımız vasitəsilə təmiz idman davranışları haqqında biliklərinizi sınaqdan keçirin."
          : "Put your understanding of clean sport behaviours to the test with our e-learning modules."}
        primaryAction={{ label: isAz ? "Elektron öyrənməyə keç" : "Go to e-Learning", path: `/${lang}/education/learning/elearning` }}
        variant="primary"
      />
    </div>
  );
}
