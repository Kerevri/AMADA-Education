import { HeroSection } from "@/components/shared/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dopinqin fəsadları | AMADA Təhsil",
  description: "Dopinq vasitələrinin istifadəsi sağlamlıq, karyera və sosial həyat üzərindəki konkret, kateqoriya üzrə ağır fəsadlar.",
};

const healthRisks = [
  {
    category: "Anabolik agentlər",
    color: "red",
    risks: [
      "Ürək-damar sistemi: aritmiyalar, yüksək qan təzyiqi, qəfləti ölüm riski",
      "Qaraciyər: zədələnmə, onkoloji xəstəliklərin sürətlənməsi",
      "Psixoloji: asılılıq, psixi pozğunluq, aqressiya",
      "Kişilərdə: sonsuzluq, libido pozğunluğu, keçəllik",
      "Qadınlarda: menstrual pozğunluq, kişilərə xas tüklənmə, səsin qalınlaşması",
    ],
  },
  {
    category: "Peptid hormonları (EPO, HGH)",
    color: "orange",
    risks: [
      "Akromeqaliya — bədənin bəzi hissələrinin qeyri-proporsional böyüməsi",
      "Ürək əzələsinin degenerasiyası, qan təzyiqinin artması",
      "Qan laxtalanması: insult, ürək tutması",
      "Şəkərli diabet, onkoloji xəstəliklərin sürətlənməsi",
    ],
  },
  {
    category: "Beta-2 agonistlər",
    color: "yellow",
    risks: [
      "Tremor (titrəmə), əsəbilik, gərginlik",
      "Aritmiyalar, elektrolit mübadiləsinin pozğunluğu, qıcolmalar",
      "Halüsinasiyalar",
      "Qəfləti ölüm",
    ],
  },
  {
    category: "Hormon & Metabolik modulyatorlar",
    color: "purple",
    risks: [
      "Libidонun azalması, çəkinin artması, görmə pozğunluğu",
      "Mədə-bağırsaq sistemində pozğunluq, qaraciyər funksiyasında pozğunluq",
      "Miokardın hipertrofiyası, oynaq-bağ aparatının patologiyaları",
    ],
  },
  {
    category: "Diuretiklər & Gizlədici agentlər",
    color: "blue",
    risks: [
      "Dehidratasiya, qan təzyiqinin artması",
      "Maye və elektrolit balansının pozulması, hipokalimiya",
      "Podaqra, başgicəllənmə",
    ],
  },
  {
    category: "Qan manipulyasiyası & Gen dopinqi",
    color: "darkred",
    risks: [
      "Ürək-damar sisteminin həddən artıq yüklənməsi",
      "Hepatit B/C, İİV kimi yoluxucu xəstəliklər (transfüziyadan)",
      "Qan laxtalanması, insult, ürək çatışmazlığı",
      "Allergik reaksiyalar",
    ],
  },
  {
    category: "Stimullaşdırıcılar",
    color: "orange",
    risks: [
      "Psixi pozğunluq, aqressiya, depressiya, yuxusuzluq",
      "Arterial qan təzyiqinin artması, ürək əzələsinin hipertrofiyası",
      "Həyat üçün təhlükəli aritmiya",
      "Qəfləti ölüm",
    ],
  },
  {
    category: "Narkotiklər",
    color: "gray",
    risks: [
      "Fiziki və psixoloji asılılıq, davranışın sürətlə dəyişməsi",
      "Daxili orqanların fəaliyyətində ağır pozğunluqlar",
      "İnfeksion xəstəliklərə yüksək yoluxma riski",
      "Doza həddinin aşılması — ölüm",
    ],
  },
];

const colorMap: Record<string, string> = {
  red: "border-red-500 bg-red-50",
  orange: "border-orange-500 bg-orange-50",
  yellow: "border-yellow-500 bg-yellow-50",
  purple: "border-purple-500 bg-purple-50",
  blue: "border-blue-500 bg-blue-50",
  darkred: "border-red-800 bg-red-100",
  gray: "border-slate-500 bg-slate-50",
};

const labelColorMap: Record<string, string> = {
  red: "text-red-700",
  orange: "text-orange-700",
  yellow: "text-yellow-700",
  purple: "text-purple-700",
  blue: "text-blue-700",
  darkred: "text-red-900",
  gray: "text-slate-700",
};

const socialConsequences = [
  "Qazanılmış medallar, xallar, sertifikatlar və nəticələrin ləğv edilməsi",
  "Yarışlardan müvəqqəti və ya ömürlük kənarlaşdırılma",
  "Beynəlxalq yarışlarda iştirak hüququnun itirilməsi",
  "İdman karyerasının, həmçinin məşqçi fəaliyyətinin dayandırılması",
  "Maliyyə dəstəklərinin, sponsorluğun itirilməsi",
  "İctimai nüfuzun sarsılması",
];

export default async function ConsequencesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col">
      <HeroSection
        title={isAz ? "Dopinqin fəsadları" : "Consequences of Doping"}
        subtitle={isAz
          ? "Dopinq vasitələrinin istifadəsi sağlamlıq, sosial həyat və karyera üzərində ağır və bəzən geri dönüşsüz fəsadlar doğurur. Bu fəsadlar yalnız bir sanksiya ilə bitmir."
          : "The use of doping substances causes severe and sometimes irreversible consequences for health, social life, and career."}
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl">

          {/* Intro */}
          <p className="text-lg text-[#003466] font-medium leading-relaxed mb-12">
            {isAz
              ? "Aşağıda hər doping maddəsi kateqoriyasının sağlamlığa vurduğu konkret zərərlər göstərilir. Bu məlumat WADA-nın tibbi araşdırmalarına və AMADA-nın rəsmi materiallarına əsaslanır."
              : "Below are the specific health risks by doping substance category, based on WADA medical research and AMADA official materials."}
          </p>

          {/* Health risks per category */}
          <h2 className="text-2xl font-bold text-[#003466] mb-6">
            {isAz ? "Sağlamlığa vurulan zərərlər — kateqoriya üzrə" : "Health Consequences by Substance Category"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {healthRisks.map((item) => (
              <div
                key={item.category}
                className={`p-5 rounded-xl border-l-4 ${colorMap[item.color]}`}
              >
                <h3 className={`font-bold text-base mb-3 ${labelColorMap[item.color]}`}>
                  {item.category}
                </h3>
                <ul className="space-y-1.5">
                  {item.risks.map((risk, i) => (
                    <li key={i} className="text-sm text-[#102033] flex items-start gap-2">
                      <span className="mt-1 shrink-0 text-slate-400">▸</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social & Career Consequences */}
          <h2 className="text-2xl font-bold text-[#003466] mb-6">
            {isAz ? "Sosial və iqtisadi fəsadlar" : "Social & Economic Consequences"}
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10">
            <p className="text-[#102033] text-sm mb-4 leading-relaxed">
              {isAz
                ? "Antidopinq qayda pozuntusu baş verərsə, idmançının həm idmandaxili, həm də ictimai həyatına ağır nəticələr yarana bilər:"
                : "If an anti-doping rule violation occurs, the athlete faces severe consequences both within sport and in public life:"}
            </p>
            <ul className="space-y-2">
              {socialConsequences.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#102033]">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</span>
                  <span>{isAz ? item : item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Red warning callout */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-red-800 font-semibold text-base">
              {isAz
                ? "🔴 Dopinq istifadəsinin nəticəsi yalnız bir sanksiya deyil — sağlamlığın, karyeranın və nüfuzun birdəfəlik itirilməsi ola bilər. Hər bir idmançı bu həqiqəti bilməlidir."
                : "🔴 The consequence of doping is not just a sanction — it can mean the permanent loss of health, career, and reputation. Every athlete must know this."}
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Antidopinq sisteminin idarəçiliyini öyrənin" : "Learn About Anti-Doping Governance"}
        description={isAz
          ? "Bu qaydaları kim qoyur? WADA, AMADA və federasiyaların rolu nədir?"
          : "Who sets these rules? What are the roles of WADA, AMADA, and federations?"}
        primaryAction={{
          label: isAz ? "İdarəçilik mövzusuna keç" : "Go to Governance",
          path: `/${lang}/education/topics/governance`
        }}
        variant="light"
      />
    </div>
  );
}
