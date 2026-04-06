import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import azContent from "@/content/az/education.json";

export const metadata: Metadata = {
  title: "Təmiz İdman Davranışları | AMADA Təhsil",
  description: "İdmançılar və idman dəstək heyəti üçün antidopinq qaydaları çərçivəsində nümayiş etdirilməli konkret davranış normaları.",
};

const enContent = {
  title: "Clean Sport Behaviours",
  intro: "Clean sport behaviours define exactly what is expected of athletes and support personnel to maintain sport integrity. They are grounded in the mandatory topics defined in ISE Article 8.1.1.",
  areasTitle: "Core Behaviour Areas",
  knowTitle: "Know",
  know: [
    "Regularly check the Prohibited List (updated every 1 January)",
    "Know AMADA's anti-doping rules",
    "Understand the Therapeutic Use Exemption (TUE) procedure",
    "Understand what the Strict Liability principle means",
  ],
  doTitle: "Do",
  do: [
    "Check every medicine or supplement against the Prohibited List before taking it",
    "Consult a medical professional before taking any medication and inform them you are an athlete",
    "Participate in doping control with full transparency",
    "If you are a Registered Testing Pool (RTP) member, submit your whereabouts information to ADAMS on time",
  ],
  speakTitle: "Speak Up",
  speak: [
    "Report suspicious situations to a trusted person",
    "Use AMADA's 'Report a Concern' channel",
    "Inform and support teammates about clean sport",
  ],
  closing:
    "These behaviours must be developed and reinforced throughout an athlete's career — from the youth stage to elite level. All of AMADA's education activities are aimed at building exactly these behaviours.",
};

export default async function CleanSportBehaviorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";
  const c = isAz ? azContent.cleanSportBehaviors : enContent;

  const pillars = [
    {
      letter: c.knowTitle[0],
      title: c.knowTitle,
      items: c.know,
      borderColor: "border-t-amada-teal",
      iconBg: "bg-amada-teal/10",
      iconText: "text-amada-teal",
      checkColor: "text-amada-teal",
    },
    {
      letter: c.doTitle[0],
      title: c.doTitle,
      items: c.do,
      borderColor: "border-t-[#003466]",
      iconBg: "bg-[#003466]/10",
      iconText: "text-[#003466]",
      checkColor: "text-[#003466]",
    },
    {
      letter: c.speakTitle[0],
      title: c.speakTitle,
      items: c.speak,
      borderColor: "border-t-green-600",
      iconBg: "bg-green-50",
      iconText: "text-green-700",
      checkColor: "text-green-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={c.title}
        subtitle={c.intro}
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
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`bg-white p-7 rounded-xl border-t-4 ${pillar.borderColor} shadow-sm border border-border`}
              >
                <div className={`w-10 h-10 rounded-full ${pillar.iconBg} flex items-center justify-center mb-4`}>
                  <span className={`${pillar.iconText} font-bold text-lg`}>{pillar.letter}</span>
                </div>
                <h3 className="text-xl font-bold text-[#003466] mb-4">{pillar.title}</h3>
                <ul className="space-y-3 text-[#102033] text-sm">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={`${pillar.checkColor} mt-1`}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <InfoCard
              title={isAz ? "Ortaq Məsuliyyət" : "A Shared Responsibility"}
              content={c.closing}
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
