import { HeroSection } from "@/components/shared/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import {
  HeartPulse,
  TrendingDown,
  Users,
  AlertTriangle,
  ExternalLink,
  XCircle,
  Clock,
  Ban,
  Minus,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dopinqin Fəsadları | AMADA Təhsil",
  description:
    "Dopinq vasitələrinin istifadəsi sağlamlıq, karyera və sosial həyat üzərindəki ağır, bəzən geri dönüşsüz fəsadlar.",
};

const HEALTH_RISKS = [
  {
    category: "Anabolik agentlər",
    severity: "critical",
    risks: [
      "Ürək-damar sistemi: aritmiyalar, yüksək qan təzyiqi, qəfləti ölüm riski",
      "Qaraciyər: zədələnmə, onkoloji xəstəliklərin sürətlənməsi",
      "Psixoloji: asılılıq, psixi pozğunluq, aqressiya",
      "Kişilərdə: sonsuzluq, libido pozğunluğu, keçəllik",
      "Qadınlarda: menstrual pozğunluq, kişilərə xas tüklənmə, səsin qalınlaşması",
    ],
  },
  {
    category: "Peptid hormonları — EPO, HGH",
    severity: "critical",
    risks: [
      "Akromeqaliya — bədənin bəzi hissələrinin qeyri-proporsional böyüməsi",
      "Ürək əzələsinin degenerasiyası, qan təzyiqinin artması",
      "Qan laxtalanması: insult, ürək tutması, ağciyər emboliyası",
      "Şəkərli diabet, onkoloji xəstəliklərin sürətlənməsi",
      "EPO yüksək dozada birbaşa ölümcüldür",
    ],
  },
  {
    category: "Stimullaşdırıcılar",
    severity: "high",
    risks: [
      "Psixi pozğunluq, aqressiya, depressiya, yuxusuzluq",
      "Arterial qan təzyiqinin kəskin artması",
      "Ürək əzələsinin hipertrofiyası, aritmiya",
      "Qəfləti ölüm",
    ],
  },
  {
    category: "Beta-2 agonistlər",
    severity: "high",
    risks: [
      "Tremor (titrəmə), əsəbilik, gərginlik",
      "Aritmiyalar, elektrolit mübadiləsinin pozğunluğu",
      "Qıcolmalar, halüsinasiyalar",
      "Qəfləti ölüm",
    ],
  },
  {
    category: "Hormon & Metabolik modulyatorlar",
    severity: "high",
    risks: [
      "Libidонun azalması, çəkinin artması, görmə pozğunluğu",
      "Mədə-bağırsaq sisteminin pozğunluğu",
      "Qaraciyər funksiyasında ağır pozğunluq",
      "Miokardın hipertrofiyası, oynaq-bağ patologiyaları",
    ],
  },
  {
    category: "Diuretiklər & Gizlədici agentlər",
    severity: "medium",
    risks: [
      "Dehidratasiya, qan təzyiqinin artması",
      "Maye və elektrolit balansının pozulması",
      "Hipokalimiya (kalium çatışmazlığı), podaqra",
      "Başgicəllənmə, ürək ritm pozğunluqları",
    ],
  },
  {
    category: "Qan manipulyasiyası & Gen dopinqi",
    severity: "critical",
    risks: [
      "Ürək-damar sisteminin həddən artıq yüklənməsi",
      "Hepatit B/C, İİV kimi yoluxucu xəstəliklər (transfüziyadan)",
      "Qan laxtalanması, insult, ürək çatışmazlığı",
      "Allergik reaksiyalar, anafilaktik şok",
    ],
  },
  {
    category: "Narkotiklər",
    severity: "critical",
    risks: [
      "Fiziki və psixoloji asılılıq, davranışın sürətlə dəyişməsi",
      "Daxili orqanların fəaliyyətində ağır pozğunluqlar",
      "İnfeksion xəstəliklərə yüksək yoluxma riski",
      "Doza həddinin aşılması — ölüm",
    ],
  },
];

const severityStyles: Record<string, { badge: string; dot: string }> = {
  critical: {
    badge: "bg-red-50 border-red-200 text-red-700",
    dot: "bg-red-500",
  },
  high: {
    badge: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
  },
  medium: {
    badge: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-500",
  },
};

const severityLabel: Record<string, string> = {
  critical: "Kritik risk",
  high: "Yüksək risk",
  medium: "Orta risk",
};

const CAREER_CONSEQUENCES = [
  "Qazanılmış medallar, xallar, sertifikatlar və bütün nəticələrin avtomatik ləğvi",
  "Beynəlxalq yarışlarda iştirak hüququnun itirilməsi",
  "İdman karyerasının, həmçinin gələcək məşqçi fəaliyyətinin dayandırılması",
  "Dövlət dəstəklərinin, sponsorluq müqavilələrinin, federasiya stipendiyalarının itirilməsi",
  "Media, ictimaiyyət və ailə qarşısında ictimai damğalanma",
  "Psixoloji zərər — çox vaxt hüquqi cəzadan da uzunmüddətli və ağır olur",
];

export default async function ConsequencesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Dopinqin Fəsadları"
        subtitle="Dopinq bir anlıq üstünlük vəd edir. Amma uzunmüddətli dəyəri — sağlamlıq, karyera, nüfuz — geri dönüşsüz ola bilər."
        compact
      />

      <div className="flex flex-col gap-14">

        {/* Lead */}
        <div className="border-l-4 border-amada-teal pl-5">
          <p className="text-[17px] text-[#003466] font-medium leading-relaxed">
            Dopinq bir anlıq üstünlük vəd etsə də, uzunmüddətli dəyəri çox yüksəkdir. Sağlamlıq zərərləri illərlə — hətta idmandan çıxdıqdan sonra da — davam edə bilər. Sanksiyalar isə yalnız yarışdan kənarlaşdırılmaqla bitmir: karyera, nüfuz, ailə, maddi vəziyyət — hamısı birlikdə dağılır.
          </p>
        </div>

        {/* 3 Impact zones */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
              <HeartPulse className="w-5 h-5 text-red-600" />
            </div>
            <p className="font-bold text-red-800 text-base mb-2">Sağlamlıq</p>
            <p className="text-sm text-red-700 leading-relaxed">
              8 maddə kateqoriyasının hər biri ürək, qaraciyər, sinir sistemi və hormonal müvazinəti dönüşsüz şəkildə poza bilər.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
              <TrendingDown className="w-5 h-5 text-amber-700" />
            </div>
            <p className="font-bold text-amber-900 text-base mb-2">Karyera</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              4 illik standart qadağa əksər idmançılar üçün aktiv karyeranın sonu deməkdir. Bütün nəticələr ləğv edilir.
            </p>
          </div>
          <div className="bg-slate-100 border border-slate-200 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-slate-600" />
            </div>
            <p className="font-bold text-slate-800 text-base mb-2">Sosial nüfuz</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Media, ictimaiyyət, sponsor, ailə — bir pozuntu həyatın hər sahəsini dəyişdirir. Psixoloji zərər hüquqi cəzadan ağır ola bilər.
            </p>
          </div>
        </div>

        {/* Health risks accordion */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Sağlamlığa vurulan zərərlər
          </p>
          <p className="text-sm text-slate-500 mb-6">
            Hər maddə kateqoriyasının konkret tibbi fəsadları — WADA araşdırmalarına əsasən.
          </p>
          {/* @ts-ignore */}
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {HEALTH_RISKS.map((item, i) => {
              const style = severityStyles[item.severity];
              return (
                <AccordionItem
                  key={item.category}
                  value={String(i)}
                  className="border border-slate-200 rounded-xl px-5 py-1 bg-white shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-4 gap-4">
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${style.dot}`} />
                      <span className="font-semibold text-[#003466] text-sm text-left">
                        {item.category}
                      </span>
                      <span className={`ml-auto mr-4 text-xs font-semibold px-2.5 py-1 rounded-full border ${style.badge} shrink-0`}>
                        {severityLabel[item.severity]}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="flex flex-col gap-2.5 pt-1">
                      {item.risks.map((risk, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600 leading-relaxed">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Sanction stats */}
        <div className="bg-[#003466] rounded-2xl p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-6">
            İdman sanksiyaları
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <p className="text-4xl font-bold text-white">4 il</p>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                İlk AQAQP üçün standart diskvalifikasiya müddəti
              </p>
            </div>
            <div className="text-center border-t sm:border-t-0 sm:border-l sm:border-r border-white/10 sm:px-6 pt-6 sm:pt-0">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Ban className="w-5 h-5 text-red-400" />
                <p className="text-4xl font-bold text-white">Ömür</p>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Ağırlaşdırıcı hallar və ya təkrar pozuntularda ömürlük qadağa
              </p>
            </div>
            <div className="text-center pt-6 sm:pt-0">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Minus className="w-5 h-5 text-slate-400" />
                <p className="text-4xl font-bold text-white">Sıfır</p>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Sanksiya dövrünü əhatə edən bütün nəticələr, medallar, reytinq xalları
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6">
            <p className="text-blue-100 text-sm leading-relaxed text-center max-w-xl mx-auto">
              Qadağa dövrü boyunca idmançı yarışlarda iştirak edə, məşq edə, hətta idman mühitinə daxil ola bilməz. Geri qayıtmaq isə nadir haldır.
            </p>
          </div>
        </div>

        {/* Career & social consequences */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Karyera & sosial fəsadlar
          </p>
          <div className="flex flex-col gap-3">
            {CAREER_CONSEQUENCES.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <ChevronRight className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <p className="text-sm text-[#102033] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk callout */}
        <div className="bg-[#003466] rounded-2xl p-7 text-white">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-base mb-2">Mühüm Risk Amili</p>
              <p className="text-blue-100 leading-relaxed text-sm">
                Dopinq istifadəsinin nəticəsi yalnız bir sanksiya deyil — sağlamlığın, karyeranın, maliyyənin və nüfuzun birdəfəlik itirilməsidir. Rəqibləriniz haqqında da düşünün: siz qazan, onlar itirir. Bu ədalətsizlik sistemi ədalətsizləşdirir — hamı üçün.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col sm:flex-row gap-3 pb-4">
          <a
            href="https://www.wada-ama.org/en/health-and-research"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-4 h-4 text-[#0055a4] shrink-0" />
            <p className="font-semibold text-[#003466] text-sm group-hover:underline leading-snug">
              WADA Sağlamlıq Riskləri
            </p>
          </a>
          <a
            href="https://www.wada-ama.org/en/what-we-do/the-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-4 h-4 text-[#0055a4] shrink-0" />
            <p className="font-semibold text-[#003466] text-sm group-hover:underline leading-snug">
              WADA Antidopinq Məcəlləsi
            </p>
          </a>
        </div>

      </div>

      <CTASection
        title="Öyrənməyə Davam Et"
        description="Növbəti mövzu: antidopinq sistemi necə idarə olunur — WADA, AMADA və federasiyaların rolu."
        primaryAction={{
          label: "Antidopinq idarəçiliyini öyrən",
          path: `/${lang}/education/topics/anti-doping-system`,
        }}
        secondaryAction={{
          label: "Bütün Mövzulara Bax",
          path: `/${lang}/education/topics`,
        }}
        variant="light"
      />
    </div>
  );
}
