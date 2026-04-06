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
  Dumbbell,
  Activity,
  Zap,
  Wind,
  Droplets,
  FlaskConical,
  Pill,
  BrainCircuit,
  Trophy,
  Wallet,
  Newspaper,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dopinqin Fəsadları | AMADA Təhsil",
  description:
    "Dopinq vasitələrinin istifadəsi sağlamlıq, karyera və sosial həyat üzərindəki ağır, bəzən geri dönüşsüz fəsadlar.",
};

const HEALTH_RISKS = [
  {
    category: "Anabolik agentlər",
    icon: Dumbbell,
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
    icon: Activity,
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
    icon: Zap,
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
    icon: Wind,
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
    icon: FlaskConical,
    severity: "high",
    risks: [
      "Libidонун azalması, çəkinin artması, görmə pozğunluğu",
      "Mədə-bağırsaq sisteminin pozğunluğu",
      "Qaraciyər funksiyasında ağır pozğunluq",
      "Miokardın hipertrofiyası, oynaq-bağ patologiyaları",
    ],
  },
  {
    category: "Diuretiklər & Gizlədici agentlər",
    icon: Droplets,
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
    icon: Pill,
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
    icon: BrainCircuit,
    severity: "critical",
    risks: [
      "Fiziki və psixoloji asılılıq, davranışın sürətlə dəyişməsi",
      "Daxili orqanların fəaliyyətində ağır pozğunluqlar",
      "İnfeksion xəstəliklərə yüksək yoluxma riski",
      "Doza həddinin aşılması — ölüm",
    ],
  },
];

const severityStyles: Record<string, { badge: string; dot: string; iconBg: string; iconColor: string }> = {
  critical: {
    badge: "bg-red-50 border-red-200 text-red-700",
    dot: "bg-red-500",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  high: {
    badge: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-500",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  medium: {
    badge: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-400",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
};

const severityLabel: Record<string, string> = {
  critical: "Kritik",
  high: "Yüksək",
  medium: "Orta",
};

const PROCESS_STEPS = [
  { step: "01", label: "AAF", desc: "Laboratoriya qeyri-əlverişli nəticə bildirir" },
  { step: "02", label: "Bildiriş", desc: "İdmançıya yazılı xəbərdarlıq göndərilir" },
  { step: "03", label: "Müvəqqəti dayandırma", desc: "Yarışlardan dərhal kənarlaşdırılma" },
  { step: "04", label: "Eşitmə", desc: "İdmançı izahat verə bilər, B şüşəsi açıla bilər" },
  { step: "05", label: "Sanksiya", desc: "4 illik diskvalifikasiya (standart)" },
  { step: "06", label: "CAS", desc: "Apellyasiya hüququ — İdman Arbitraj Məhkəməsi" },
];

const CONSEQUENCE_GROUPS = [
  {
    icon: Trophy,
    label: "İdman nəticələri",
    color: "text-red-600",
    bg: "bg-red-50 border-red-100",
    items: [
      "Bütün yarış nəticələri, medallar və reytinq xalları avtomatik ləğv edilir",
      "4 illik yarışdan kənarlaşdırılma — beynəlxalq və milli səviyyədə",
      "Məşqçi, hakim kimi idman fəaliyyəti də qadağa altına düşür",
    ],
  },
  {
    icon: Wallet,
    label: "Maliyyə itkisi",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-100",
    items: [
      "Dövlət dəstəkləri və milli komanda maaşı dərhal dayandırılır",
      "Bütün sponsorluq müqavilələri ləğv edilir — tələbat ödənilmədən",
      "Federasiya stipendiyaları, mükafatlar geri alına bilər",
    ],
  },
  {
    icon: Newspaper,
    label: "Nüfuz & psixologiya",
    color: "text-slate-700",
    bg: "bg-slate-50 border-slate-200",
    items: [
      "Media tərəfindən ictimai damğalanma — karyera boyu davam edər",
      "Ailə, yoldaşlar, icma qarşısında etibar itkisi",
      "Psixoloji zərər çox vaxt hüquqi cəzadan uzunmüddətli olur",
    ],
  },
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

        {/* Impact stat bar */}
        <div className="bg-[#003466] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="px-8 py-7">
              <div className="flex items-center gap-2 mb-1">
                <HeartPulse className="w-4 h-4 text-red-400" />
                <p className="text-red-300 text-xs font-bold uppercase tracking-widest">Sağlamlıq</p>
              </div>
              <p className="text-3xl font-bold text-white mb-1">8 kateqoriya</p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Hər maddə kateqoriyası ürək, qaraciyər, beyin və hormonları dönüşsüz şəkildə zədələyə bilər.
              </p>
            </div>
            <div className="px-8 py-7">
              <div className="flex items-center gap-2 mb-1">
                <TrendingDown className="w-4 h-4 text-amber-400" />
                <p className="text-amber-300 text-xs font-bold uppercase tracking-widest">Karyera</p>
              </div>
              <p className="text-3xl font-bold text-white mb-1">4 il minimum</p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Standart qadağa müddəti. Əksər idmançılar üçün bu aktiv karyeranın sonudur.
              </p>
            </div>
            <div className="px-8 py-7">
              <div className="flex items-center gap-2 mb-1">
                <Users className="w-4 h-4 text-slate-400" />
                <p className="text-slate-300 text-xs font-bold uppercase tracking-widest">Nüfuz</p>
              </div>
              <p className="text-3xl font-bold text-white mb-1">Sıfır nəticə</p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Sanksiya dövrünü əhatə edən bütün medallar, xallar və nəticələr ləğv edilir.
              </p>
            </div>
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
              const Icon = item.icon;
              return (
                <AccordionItem
                  key={item.category}
                  value={String(i)}
                  className="border border-slate-200 rounded-xl px-5 py-1 bg-white shadow-sm hover:border-slate-300 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-4 gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${style.iconBg}`}>
                        <Icon className={`w-4 h-4 ${style.iconColor}`} />
                      </div>
                      <span className="font-semibold text-[#003466] text-sm text-left leading-snug">
                        {item.category}
                      </span>
                      <span className={`ml-auto mr-4 text-xs font-bold px-2.5 py-1 rounded-full border shrink-0 ${style.badge}`}>
                        {severityLabel[item.severity]}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="flex flex-col gap-2.5 pt-1 pl-11">
                      {item.risks.map((risk, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
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

        {/* What happens after a positive test */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
            Müsbət testdən sonra nə baş verir?
          </p>
          <p className="text-sm text-slate-500 mb-8">
            Qeyri-əlverişli analiz nəticəsinin (AAF) ardınca başlayan rəsmi proses.
          </p>
          <div className="flex flex-col sm:flex-row gap-0">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.step} className="flex sm:flex-col items-start sm:items-center flex-1 relative">
                {/* connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <>
                    <div className="hidden sm:block absolute top-5 left-1/2 w-full h-px bg-slate-300 z-0" />
                    <ArrowRight className="sm:hidden w-4 h-4 text-slate-300 mx-3 mt-3 shrink-0" />
                  </>
                )}
                <div className="flex sm:flex-col items-start sm:items-center gap-3 sm:gap-2 z-10 w-full sm:px-1">
                  <div className="w-10 h-10 rounded-full bg-[#003466] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {s.step}
                  </div>
                  <div className="sm:text-center pb-6 sm:pb-0">
                    <p className="font-bold text-[#003466] text-sm leading-snug">{s.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career & consequence groups */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Karyera & sosial fəsadlar
          </p>
          <div className="flex flex-col gap-4">
            {CONSEQUENCE_GROUPS.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.label} className={`rounded-2xl border p-6 ${group.bg}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-5 h-5 shrink-0 ${group.color}`} />
                    <p className={`font-bold text-base ${group.color}`}>{group.label}</p>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing powerful statement */}
        <div className="relative bg-[#003466] rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-amada-teal/10 translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <AlertTriangle className="w-6 h-6 text-amber-400 mb-4" />
            <p className="text-white text-lg font-semibold leading-relaxed mb-3 max-w-2xl">
              &ldquo;Dopinq istifadəsinin nəticəsi yalnız bir sanksiya deyil — sağlamlığın, karyeranın, maliyyənin və nüfuzun birdəfəlik itirilməsidir.&rdquo;
            </p>
            <p className="text-blue-200 text-sm leading-relaxed max-w-xl">
              Rəqibləriniz haqqında da düşünün: siz qazan, onlar itirir. Bu ədalətsizlik sistemi hamı üçün ədalətsizləşdirir.
            </p>
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
