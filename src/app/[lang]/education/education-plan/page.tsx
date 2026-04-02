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

          {/* Per-audience curriculum */}
          <h2 className="text-2xl font-bold text-[#003466] mb-6">
            {isAz ? "Hədəf qruplar üzrə tədris proqramı" : "Curriculum by Target Audience"}
          </h2>
          <div className="space-y-4 mb-16">
            {(isAz ? [
                { audience: "İdmançılar", icon: "🏃", topics: ["İdmançının hüquq və öhdəlikləri", "Dopinq nədir? — Antidopinq Qayda pozuntuları", "Dopinq nəzarəti prosesi", "Qadağan edilmiş Siyahı", "Terapevtik İstifadə üçün İstisnalar (Tİİ)", "Məkan Məlumatı & ADAMS", "Qida əlavələri riskləri", "Dopinq barədə məlumat vermək (Speak Up)"] },
                { audience: "İdmançı Köməkçi Heyəti", icon: "🧑‍🏫", topics: ["İDH-ə kimlər aiddir — tərif", "İDH-in vəzifə və öhdəlikləri (Məcəllə Maddə 21.2)", "Antidopinq qayda pozuntuları (İDH üçün)", "Qadağan edilmiş Siyahı", "Terapevtik İstifadə üçün İstisnalar", "İdmançıların məkan məlumatına dəstək", "Komandada təmiz idman mədəniyyəti yaratmaq"] },
                { audience: "Valideynlər & Müəllimlər", icon: "👨‍👩‍👧", topics: ["Antidopinq qayda pozuntuları — valideynlər üçün", "Qadağan edilmiş Siyahı & GlobalDRO istifadəsi", "Təhlükəsiz qida əlavəsi seçimi", "Valideyn üçün yaddaş kitabçası", "Gənclərlə açıq söhbət aparmaq strategiyaları"] },
                { audience: "İdman Federasiyaları", icon: "🏛️", topics: ["Federasiyanın antidopinq sahəsindəki rolu və öhdəlikləri", "ISE tələblərinə uyğunluq — milli plan", "Seminar keçirilməsi üçün Maarifləndirici şəbəkəsi", "İdmançı məlumatlarının idarəsi"] },
                { audience: "KİV Nümayəndələri", icon: "📺", topics: ["Təmiz idman — Təmiz qələbə", "Dopinq nədir? Antidopinq Qayda pozuntuları", "Dəyərlərə əsaslanan maarifləndirmə", "Məsuliyyətli hesabatçılıq qaydaları"] }
              ] : [
                { audience: "Athletes", icon: "🏃", topics: ["Athlete rights and responsibilities", "What is doping? — Anti-Doping Rule Violations", "Doping control process", "Prohibited List", "Therapeutic Use Exemptions (TUE)", "Whereabouts & ADAMS", "Risks of supplements", "Reporting doping (Speak Up)"] },
                { audience: "Athlete Support Personnel", icon: "🧑‍🏫", topics: ["Definition of ASP", "ASP roles and responsibilities (Code Art 21.2)", "Anti-doping rule violations (for ASP)", "Prohibited List", "Therapeutic Use Exemptions", "Supporting athlete whereabouts", "Fostering clean sport culture"] },
                { audience: "Parents & Teachers", icon: "👨‍👩‍👧", topics: ["Anti-doping rule violations — for parents", "Prohibited List & GlobalDRO", "Safe supplement choices", "Parent's handbook", "Open conversation strategies with youth"] },
                { audience: "Sports Federations", icon: "🏛️", topics: ["Federation roles and responsibilities", "ISE compliance — national plan", "Educator network for seminars", "Athlete data management"] },
                { audience: "Media Representatives", icon: "📺", topics: ["Clean sport — Clean victory", "What is doping? ADRVs", "Values-based education", "Responsible reporting guidelines"] }
              ]
            ).map((ac) => (
              <details key={ac.audience} className="group border border-slate-200 rounded-xl overflow-hidden">
                <summary className="flex items-center gap-3 cursor-pointer bg-slate-50 px-5 py-4 font-semibold text-[#003466] hover:bg-slate-100 transition-colors">
                  <span className="text-xl">{ac.icon}</span>
                  <span>{ac.audience}</span>
                  <span className="ml-auto text-slate-400 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 py-4 bg-white">
                  <ul className="space-y-2">
                    {ac.topics.map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#102033]">
                        <span className="text-amada-teal mt-0.5">✓</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
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
