import { HeroSection } from "@/components/shared/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import { AlertTriangle, ExternalLink, Clock, CalendarClock, Shield, Dumbbell } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qadağan Edilmiş Siyahı | AMADA Təhsil",
  description:
    "WADA-nın Qadağan Edilmiş Siyahısının tam kateqoriyaları — hər maddə sinfi üzrə ətraflı izah.",
};

interface SubstanceClass {
  code: string;
  name: string;
  badge: "always" | "incompetition" | "method" | "specific";
  examples: string;
  detail: string;
  warning?: string;
}

const ALWAYS_BANNED: SubstanceClass[] = [
  {
    code: "S0",
    name: "Onaylı İstifadəsi Olmayan Farmakologik Maddələr",
    badge: "always",
    examples: "Yeni dizayner dərmanlar, sınaq mərhələsindəki preparatlar, klinik təsdiq almamış bütün stimullaşdırıcı agentlər.",
    detail:
      "Bu kateqoriya heç bir idmançı populyasiyasında terapevtik istifadəsi onaylanmamış bütün farmakologik maddələri əhatə edir. Maddənin yeni və ya az tanınan olması onu təhlükəsiz etmir — əksinə, S0 kateqoriyası məhz bu boşluğu bağlamaq üçün mövcuddur. Yarışda və yarışkənar hər zaman qadağandır.",
    warning: "Onlayn satılan 'araşdırma kimyəvi maddələri' (research chemicals) adlanan preparatlar çox vaxt S0 kateqoriyasına aiddir.",
  },
  {
    code: "S1",
    name: "Anabolik Agentlər",
    badge: "always",
    examples:
      "Anabolik-androgen steroidlər: testosteron, nandrolon, stanozolol, oksandrolon. Seçici androgen reseptor modulatorları (SARM): ostarin, LGD-4033, RAD-140.",
    detail:
      "Anabolik agentlər əzələ kütləsini artırır, sürətli bərpaya kömək edir. Buna görə idman göstəricilərini əhəmiyyətli dərəcədə artırır. Sağlamlığa vurulan zərərlər: ürək-damar sistemi (aritmiya, hipertrofiya, qəfləti ölüm), qaraciyər (zədə, xərçəng riski), hormonal sistem (kişilərdə sonsuzluq, qadınlarda kişilik cizgilərinin inkişafı). Yarışda və yarışkənar hər zaman qadağandır.",
    warning:
      "Bir sıra 'bədən qurma' əlavələri etiketdə göstərilmədən SARM və ya anabolik steroid ehtiva edir.",
  },
  {
    code: "S2",
    name: "Peptid Hormonları, Böyümə Faktorları və Əlaqədar Maddələr",
    badge: "always",
    examples:
      "EPO (eritropoietin) və qan hüceyrəsi stimullaşdırıcıları, İnsan böyümə hormonu (HGH), İnsulin benzəri böyümə faktoru (IGF-1), İnsulin.",
    detail:
      "EPO qırmızı qan hüceyrələrinin sayını artıraraq oksigen daşıma qabiliyyətini gücləndirir — dözümlülük idmanlarında ciddi üstünlük verir. HGH əzələ bərpasını sürətləndirir. Lakin bu maddələrin sui-istifadəsi həyati təhlükə yaradır: EPO qanı qatılaşdırır, insult və ürək tutması riskini kəskin artırır. İnsulin düzgün dozalanmadıqda ölümcül hipoglikemiyaya yol aça bilər.",
    warning:
      "Şəkərli diabet üçün təyin edilmiş insulinin idmançı tərəfindən istifadəsi mütləq Tİİ tələb edir.",
  },
  {
    code: "S3",
    name: "Beta-2 Agonistlər",
    badge: "always",
    examples:
      "Salbutamol, formoterol, salmeterol — astma və tənəffüs yolu xəstəliklərinin müalicəsindəistifadə olunur.",
    detail:
      "Beta-2 agonistlər tənəffüs yollarını genişlədir. Astma xəstəsi olan idmançılar üçün tibbi zərurətdir. Lakin yüksək dozada anabolik effekt göstərə bilər. Buna görə siyahıda yer alır. İstifadə şərtləri: müəyyən dozalarda (məs. salbutamol üçün 24 saatda ≤1600 mq inhalyasiya) Tİİ olmadan icazəlidir, lakin bu həddən yuxarıda Tİİ məcburidir.",
    warning:
      "Astma dərmanınız varsa — AMADA-ya müraciət edərək dozanızın Tİİ tələb edib-etmədiyini öyrənin.",
  },
  {
    code: "S4",
    name: "Hormon və Metabolik Modulyatorlar",
    badge: "always",
    examples:
      "Aromataz inhibitorları (anastrozol, letrozol), seçici estrogen reseptor modulatorları (SERMs: tamoksifen, raloksifen), metabolik modulyatorlar (GW1516/Cardarine, meldonium).",
    detail:
      "Bu maddələr hormonal mühiti manipulyasiya etmək, anabolik steroid istifadəsinin yan təsirlərini azaltmaq və ya enerji metabolizmasını dəyişdirmək üçün istifadə edilir. Meldonium (mildronate) 2016-ci ildə bir çox idmançının diskvalifikasiyasına səbəb olmuşdur — Azərbaycan idmançıları da daxil olmaqla. Yarışda və yarışkənar hər zaman qadağandır.",
    warning:
      "Kardiologiya praktikasında istifadə olunan bəzi dərmanlar (məs. meldonium) bu kateqoriyaya aiddir.",
  },
  {
    code: "S5",
    name: "Diuretiklər və Maskelər",
    badge: "always",
    examples:
      "Furosemid, hidroxlortiazid, spironolakton (diuretiklər); probenesid, plasma genişləndiriciləri (maskelər).",
    detail:
      "Diuretiklər bədəndən su və duz ifrazını artırır. İdmanda iki məqsədlə sui-istifadə edilir: (1) çəki kateqoriyasına salmaq üçün sürətli çəki itkisi, (2) sidikdə qadağan maddəni durulaşdıraraq gizlətmək. Maskelər isə digər qadağan maddələrin nümunədə aşkar edilməsini çətinləşdirmək üçün istifadə edilir. Yarışda və yarışkənar hər zaman qadağandır.",
    warning:
      "Tibbi səbəblərlə diuretik qəbul edirsinizsə — mütləq Tİİ alın. Diuretik istifadəsi müstəqil olaraq pozuntu hesab edilir, həm də başqa maddəni gizlətmə cəhdi kimi də araşdırıla bilər.",
  },
];

const IN_COMPETITION: SubstanceClass[] = [
  {
    code: "S6",
    name: "Stimullaşdırıcılar",
    badge: "incompetition",
    examples:
      "Amfetamin, metamfetamin, kokain, MDMA (ekstazi), psevdoefedrin (≥150 mcg/mL), epinefrin (sistemik istifadədə).",
    detail:
      "Stimullaşdırıcılar mərkəzi sinir sistemini aktivləşdirir, yorğunluğu azaldır, diqqət və reaksiya sürətini artırır. Yalnız yarış dövründə qadağandır. Diqqət: psevdoefedrin bir çox soyuqdəymə preparatında (burun damcıları, antihistaminlər) yer alır. Yarış öncəsi bu preparatları MÜTLƏQ GlobalDRO ilə yoxlayın.",
    warning:
      "Yarışdan bir neçə gün əvvəl qəbul edilmiş soyuqdəymə preparatı belə yarış günü qadağan həddini keçə bilər.",
  },
  {
    code: "S7",
    name: "Narkotiklər",
    badge: "incompetition",
    examples: "Morfin, hidromorfon, oksikodон, fentanil, metadon, tramadol (izlənilir).",
    detail:
      "Güclü ağrıkəsicilər (opioidlər) yarış dövründə qadağandır çünki ağrı siqnallarını basaraq idmançının zədəni hiss etmədən performans göstərməsinə imkan verir — bu həm haqsız üstünlük, həm də sağlamlıq riski yaradır. Tramadol qadağan siyahısında deyil, lakin WADA tərəfindən izlənilir.",
    warning: "Cərrahiyyə sonrası opioid ağrı dərmanı alanlar yarış tarixlərini həkimlə əlaqələndirməlidir.",
  },
  {
    code: "S8",
    name: "Kanabioidlər",
    badge: "incompetition",
    examples:
      "THC (tetrahidrokannabinol — mariхuana, haşiş), sintetik kanabioidlər. CBD (kannabidiol) qadağan deyil.",
    detail:
      "Kanabioidlər yalnız yarış dövründə qadağandır. Yarışdan kənar istifadə AQAQP sayılmır. Lakin THC bədəndə uzun müddət qalır — çəkmə tezliyindən asılı olaraq 7-30 günə qədər. Beləliklə, yarışkənar istifadə yarış günü müsbət test nəticəsinə səbəb ola bilər. CBD (yağ, kapsul, krem şəklindəki) qadağan deyil, lakin CBD məhsullarında THC kontaminasiyası riski mövcuddur.",
    warning:
      "THC-nin bədəndə nə qədər qalacağını dəqiq proqnozlaşdırmaq mümkün deyil — yarış dövrünə yaxın istifadəni tamamilə dayandırın.",
  },
  {
    code: "S9",
    name: "Kortikosteroidlər",
    badge: "incompetition",
    examples:
      "Prednizon, deksametazon, betametazon, triamsinolon — ağız yolu, damardaxili, əzələdaxili, rektal istifadədə.",
    detail:
      "Kortikosteroidlər iltihabı azaldır, bərpanı sürətləndirir. Yerli istifadə (dəri kremi, burun spreyi, göz damcısı, inhalyasiya) qadağan deyil. Lakin sistemik istifadə (ağız yolu, iynə) yarış dövründə qadağandır. İlk dəfə yarışda istifadə edəcəksinizsə — Tİİ alın.",
    warning:
      "Həkiminiz kortikosteroid iynəsi təyin edibsə — yarış tarixini bildirib Tİİ tələb edin. 'Lokal iynə' belə sistemik ola bilər.",
  },
];

const METHODS: SubstanceClass[] = [
  {
    code: "M1",
    name: "Qan və Qan Komponentlərinin Manipulyasiyası",
    badge: "method",
    examples:
      "Autoloji, homoloji və ya alloloji qan transfuziyaları; oksigen daşıma qabiliyyətini artıran sintetik daşıyıcılar.",
    detail:
      "Qan dopinqi eritrosit kütləsini artıraraq oksigen daşıma qabiliyyətini gücləndirir — xüsusilə dözümlülük idmanlarında (velosiped, xizək, atletizm) böyük üstünlük verir. İdmançı Bioloji Pasportu (İBP) məhz bu metodun aşkarlanması üçün inkişaf etdirilib — qan parametrlərindəki anormal dəyişiklikləri uzunmüddətli izlənilmə ilə aşkar edir.",
    warning: "Yarışkənar olaraq qan donoru olduğunuzda da İBP profilinizə təsiri ola bilər — AMADA-ya bildirin.",
  },
  {
    code: "M2",
    name: "Kimyəvi və Fiziki Saxtalaşdırma",
    badge: "method",
    examples:
      "Nümunəni dəyişdirmək, qatışıq əlavə etmək, sidik axınına müdaxilə etmək, kateter istifadəsi.",
    detail:
      "Dopinq nəzarəti prosesinin hər hansı hissəsinə müdaxilə etmək Antidopinq Qayda Pozuntusudur. Bu kateqoriya nümunənin toplanması, saxlanılması, daşınması və laboratoriya mərhələlərini əhatə edir. Müdaxilə cəhdi — hətta uğursuz olsa belə — tam pozuntu sayılır.",
    warning: undefined,
  },
  {
    code: "M3",
    name: "Gen və Hüceyrə Dopinqi",
    badge: "method",
    examples:
      "Gen redaktəsi (CRISPR daxil olmaqla), gen ifadəsini dəyişdirən nükleik turşu bazlı agentlər, normal hüceyrə genomunu dəyişdirən hər hansı üsul.",
    detail:
      "Gen dopinqi idman göstəricilərini artırmaq məqsədilə genomu dəyişdirməyi nəzərdə tutur. Hal-hazırda klinik praktikada geniş yayılmamışdır, lakin biotexnologiyanın inkişafı ilə bu risk artmaqdadır. WADA müvafiq araşdırma metodlarını inkişaf etdirməkdədir. Bu üsul həm idmanda yolverilməzdir, həm də sağlamlıq baxımından son dərəcə risklidir.",
    warning: "Gen terapiyası alan idmançılar AMADA-ya məlumat verməlidir.",
  },
];

const SPORT_SPECIFIC: SubstanceClass[] = [
  {
    code: "P1",
    name: "Beta-Blokerlər",
    badge: "specific",
    examples: "Propranolol, atenolol, metoprolol, karvedilol, bisoprolol.",
    detail:
      "Beta-blokerlər ürək döyüntüsünü yavaşladır, titrəməni azaldır — bu effekt atıcılıq, oxatma, avtomobil yarışları, golf, idman gimnastikası kimi dəqiqlik tələb edən idman növlərindəciddi üstünlük yaradır. Yalnız bu idman növlərindəqadağandır; digər idman növlərindəistifadə AQAQP sayılmır. Tibbi zərurət olduqda Tİİ ilə istifadə mümkündür.",
    warning: "Hansı idman növlərinin bu qadağana aid olduğunu WADA-nın aktual siyahısından yoxlayın — siyahı hər il yenilənə bilər.",
  },
];

const badgeStyles: Record<SubstanceClass["badge"], { bg: string; text: string; label: string }> = {
  always: {
    bg: "bg-red-50 border-red-200",
    text: "text-red-700",
    label: "Hər zaman qadağan",
  },
  incompetition: {
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-700",
    label: "Yarış dövründə qadağan",
  },
  method: {
    bg: "bg-purple-50 border-purple-200",
    text: "text-purple-700",
    label: "Qadağan üsul",
  },
  specific: {
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-700",
    label: "Xüsusi idmanlarda qadağan",
  },
};

function SubstanceAccordion({ items }: { items: SubstanceClass[] }) {
  return (
    // @ts-ignore
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {items.map((item) => {
        const style = badgeStyles[item.badge];
        return (
          <AccordionItem
            key={item.code}
            value={item.code}
            className={`rounded-xl border ${style.bg} px-5 py-1 shadow-sm`}
          >
            <AccordionTrigger className="hover:no-underline py-4 gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span
                  className={`inline-flex items-center justify-center font-bold text-sm px-3 py-1 rounded-lg border ${style.bg} ${style.text} shrink-0 min-w-[3rem]`}
                >
                  {item.code}
                </span>
                <span className="text-[#003466] font-semibold text-base text-left leading-snug">
                  {item.name}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <div className="flex flex-col gap-4 pt-1">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    Nümunə maddələr
                  </p>
                  <p className="text-sm text-[#102033] leading-relaxed">{item.examples}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    Ətraflı izah
                  </p>
                  <p className="text-sm text-[#102033] leading-relaxed">{item.detail}</p>
                </div>
                {item.warning && (
                  <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-sm text-amber-800 leading-relaxed">{item.warning}</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default async function ProhibitedListPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Qadağan Edilmiş Siyahı"
        subtitle="WADA tərəfindən hər il 1 yanvarda yenilənən bu siyahı idmanda istifadəsi qadağan edilmiş bütün maddə və üsulları əhatə edir. Hər idmançının şəxsi öhdəliyi siyahının aktual versiyasını bilməkdir."
        compact
      />

      <section className="py-14 bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Criteria callout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Dumbbell className="w-4 h-4 text-[#003466]" />
                <p className="font-bold text-[#003466] text-sm">Meyar 1</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                İdman göstəricilərini artırma <strong>potensialı</strong> mövcuddur.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-[#003466]" />
                <p className="font-bold text-[#003466] text-sm">Meyar 2</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                İdmançının sağlamlığına <strong>real və ya potensial zərər</strong> verir.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-[#003466]" />
                <p className="font-bold text-[#003466] text-sm">Meyar 3</p>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>İdmanın ruhuna</strong> zidd hesab edilir.
              </p>
            </div>
          </div>

          <p className="text-slate-500 text-sm mb-10 text-center">
            Maddə bu meyarlardan <strong>ən azı ikisini</strong> ödərsə siyahıya salınır.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {Object.entries(badgeStyles).map(([, s]) => (
              <span key={s.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${s.bg} ${s.text}`}>
                {s.label}
              </span>
            ))}
          </div>

          {/* Always banned */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-red-100" />
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <h2 className="text-base font-bold text-red-700 uppercase tracking-wide">
                  Hər zaman qadağan — yarışda və yarışkənar
                </h2>
              </div>
              <div className="h-px flex-1 bg-red-100" />
            </div>
            <SubstanceAccordion items={ALWAYS_BANNED} />
          </div>

          {/* In-competition only */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-amber-100" />
              <div className="flex items-center gap-2 shrink-0">
                <Clock className="w-4 h-4 text-amber-600" />
                <h2 className="text-base font-bold text-amber-700 uppercase tracking-wide">
                  Yalnız yarış dövründə qadağan
                </h2>
              </div>
              <div className="h-px flex-1 bg-amber-100" />
            </div>
            <SubstanceAccordion items={IN_COMPETITION} />
          </div>

          {/* Methods */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-purple-100" />
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <h2 className="text-base font-bold text-purple-700 uppercase tracking-wide">
                  Qadağan edilmiş üsullar (M seriyası)
                </h2>
              </div>
              <div className="h-px flex-1 bg-purple-100" />
            </div>
            <SubstanceAccordion items={METHODS} />
          </div>

          {/* Sport-specific */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-blue-100" />
              <div className="flex items-center gap-2 shrink-0">
                <CalendarClock className="w-4 h-4 text-blue-600" />
                <h2 className="text-base font-bold text-blue-700 uppercase tracking-wide">
                  Xüsusi idman növlərində qadağan (P seriyası)
                </h2>
              </div>
              <div className="h-px flex-1 bg-blue-100" />
            </div>
            <SubstanceAccordion items={SPORT_SPECIFIC} />
          </div>

          {/* Risk box */}
          <div className="bg-[#003466] rounded-2xl p-7 mb-10 text-white">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-lg mb-2">Yadda saxlayın: Siyahı hər il dəyişir</p>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Keçən il qanuni olan bir maddə bu il qadağan edilmiş ola bilər. Hər il yanvarda — mövsüm başlamazdan əvvəl — siyahının aktual versiyasını yoxlayın. Şübhəli olduğunuzda GlobalDRO (globaldro.com) vasitəsilə dərmanınızı yoxlayın. Qida əlavələri GlobalDRO-da yer almır — bunlar ayrıca risk kateqoriyasıdır.
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.wada-ama.org/en/prohibited-list"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
            >
              <ExternalLink className="w-5 h-5 text-[#0055a4] shrink-0" />
              <div>
                <p className="font-bold text-[#003466] text-sm group-hover:underline">
                  Aktual WADA Qadağan Edilmiş Siyahısı
                </p>
                <p className="text-xs text-slate-500">wada-ama.org — hər il yenilənir</p>
              </div>
            </a>
            <a
              href="https://www.globaldro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
            >
              <ExternalLink className="w-5 h-5 text-[#0055a4] shrink-0" />
              <div>
                <p className="font-bold text-[#003466] text-sm group-hover:underline">
                  GlobalDRO — Dərman Yoxlaması
                </p>
                <p className="text-xs text-slate-500">globaldro.com — pulsuz, anlıq yoxlama</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Öyrənməyə Davam Et"
        description="Növbəti əsas mövzu: sınaq zamanı nə baş verir, hüquqlarınız nələrdir?"
        primaryAction={{
          label: "Sınaq Prosedurları haqqında öyrən",
          path: `/${lang}/education/topics/testing-procedures`,
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
