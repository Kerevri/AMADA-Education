import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İllik Təhsil Planı | AMADA",
  description: "AMADA-nın ISE Maddə 9.1 tələbinə uyğun olaraq hazırladığı İllik Təhsil Planı haqqında məlumat.",
};

export default async function EducationPlanPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "İllik Təhsil Planı" : "Annual Education Plan"}
        subtitle={isAz
          ? "İllik Təhsil Planı — AMADA-nın hər il Beynəlxalq Təhsil Standartının (ISE) Maddə 9.1 tələbinə uyğun olaraq hazırladığı, bütün Təhsil Hovuzu kateqoriyaları üzrə fəaliyyətləri əhatə edən rəsmi sənəddir."
          : "Strategic, targeted, and measurable: how we plan the national delivery of anti-doping education."}
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl">

          {/* Intro */}
          <div className="mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {isAz ? "Planın məzmunu" : "What the Plan Covers"}
            </h2>
            <p className="text-[#102033] leading-relaxed">
              {isAz
                ? "Plan ölçülə bilən proqram məqsədlərini, öyrənmə nəticələrini, mövzuları, cədvəlləri, məsul şəxsləri və monitorinq prosedurlarını müəyyən edir. İllik Təhsil Planının tam mətni WADA-nın tələb etdiyi formada ingilis dilində hazırlanır. ISE Maddə 10.1 tələbinə uyğun olaraq planın xülasəsi veb-saytda dərc olunur."
                : "The plan identifies measurable program objectives, learning outcomes, topics, schedules, responsible persons, and monitoring procedures. A summary is published on this website in accordance with ISE Article 10.1."}
            </p>
          </div>

          {/* 3 pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <div className="p-6 border border-border rounded-xl shadow-sm bg-background">
              <div className="w-12 h-12 rounded-full bg-amada-teal/10 flex items-center justify-center text-amada-teal font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {isAz ? "Risk qiymətləndirməsi" : "Risk Assessment"}
              </h3>
              <p className="text-sm text-[#102033]">
                {isAz
                  ? "Federasiyalar üzrə risk qiymətləndirməsinə əsaslanan seminar paylanması. AMADA hər il 29 milli federasiyaya risk koeffisientlərini idmançı sayı bonusları ilə birləşdirərək ədalətli seminar kvotaları ayırır."
                  : "Risk-based seminar allocation across 29 national federations. AMADA combines risk coefficients with athlete population bonuses for fair distribution."}
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl shadow-sm bg-background">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {isAz ? "Hədəf qruplar" : "Target Audiences"}
              </h3>
              <p className="text-sm text-[#102033]">
                {isAz
                  ? "Risk qiymətləndirməsinə əsasən idmançılar və İDH Təhsil Hovuzunu formalaşdırır. İlk prioritet QTQ idmançıları, milli komandalar və istedadlı gənc mərhələyə keçənlərdir."
                  : "Based on risk assessment, athletes and ASP form the Education Pool. First priority is given to RTP athletes, national teams, and youth entering the talent pathway."}
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl shadow-sm bg-background">
              <div className="w-12 h-12 rounded-full bg-amada-gold/20 flex items-center justify-center text-amada-gold font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {isAz ? "Fəaliyyətlər" : "Activities"}
              </h3>
              <p className="text-sm text-[#102033]">
                {isAz
                  ? "Canlı seminarlar, vebinarlar, ADEL platforması, məktəb proqramları, hadisə əsaslı maarifləndirmə və Maarifləndirici şəbəkəsinin inkişafı üzrə fəaliyyətlər."
                  : "Live seminars, webinars, ADEL platform, school programmes, event-based education, and Educator Network development activities."}
              </p>
            </div>
          </div>

          {/* 2026 Activity Categories */}
          <div className="mb-12">
            <ChecklistCard
              title={isAz ? "2026-cı il üzrə Əsas Fəaliyyət Kateqoriyaları" : "2026 Key Activity Categories"}
              items={isAz
                ? [
                    "Federasiyalar üzrə risk qiymətləndirməsinə əsaslanan seminar paylanması",
                    "ADEL platforması vasitəsilə onlayn öyrənmə modulları",
                    "Regionlarda məktəb proqramları",
                    "Tibb mütəxəssisləri üçün ixtisaslaşmış vebinarlar",
                    "Hadisə əsaslı antidopinq maarifləndirməsi",
                    "Maarifləndirici şəbəkəsinin inkişafı üzrə fəaliyyətlər",
                  ]
                : [
                    "Risk-based seminar distribution across federations",
                    "Online learning modules via the ADEL platform",
                    "School programmes across regions",
                    "Specialised webinars for medical professionals",
                    "Event-based anti-doping education",
                    "Educator Network development activities",
                  ]
              }
            />
          </div>

          {/* ISE callout */}
          <InfoCard
            title={isAz ? "ISE Maddə 9.4 — Plan minimum aşağıdakıları əhatə etməlidir" : "ISE Article 9.4 — Plan Minimum Requirements"}
            content={isAz
              ? "• Hansı proqram məqsədləri, mövzular və öyrənmə nəticələrinin həll ediləcəyi\n• Hansı Təhsil Hovuzu kateqoriyalarının hədəf alınacağı\n• Hansı növ fəaliyyətlərin həyata keçiriləcəyi\n• Fəaliyyətləri kimin həyata keçirəcəyi\n• Nə zaman və nə qədər tez-tez həyata keçiriləcəyi\n• Öyrənməni qiymətləndirmə metodları (ISE Maddə 12.2)\n• Monitorinq prosedurları (ISE Maddə 12.1)"
              : "• Which program objectives, topics and learning outcomes will be addressed\n• Which Education Pool categories will be targeted\n• What types of activities will be implemented\n• Who will deliver the activities\n• When and how frequently they will be delivered\n• Learning assessment methods (ISE Article 12.2)\n• Monitoring procedures (ISE Article 12.1)"}
            type="info"
          />
        </div>
      </section>

      <CTASection
        title={isAz ? "Resurslar və Materiallar" : "Resources and Materials"}
        description={isAz
          ? "Seminar materialları, metodiki vəsaitlər və digər resurslar üçün Resurs Kitabxanasına baxın."
          : "View the Resource Library for seminar materials, guides, and other resources."}
        primaryAction={{ label: isAz ? "Resurs Kitabxanası" : "Resource Library", path: `/${lang}/education/resources` }}
        variant="teal"
      />
    </div>
  );
}
