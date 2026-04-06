import { HeroSection } from "@/components/shared/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";
import { AlertTriangle, ExternalLink, Users, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Antidopinq Qayda Pozuntuları | AMADA Təhsil",
  description:
    "Ümumdünya Antidopinq Məcəlləsi çərçivəsində 11 AQAQP-ni öyrənin — hər birinin izahı, məsuliyyət subyektləri və nəticələri.",
};

interface RuleViolation {
  number: number;
  name: string;
  who: "athlete" | "personnel" | "both";
  detail: string;
  warning?: string;
}

const VIOLATIONS: RuleViolation[] = [
  {
    number: 1,
    name: "Nümunədə qadağan edilmiş maddənin aşkar edilməsi",
    who: "athlete",
    detail:
      "İdmançının sidik, qan və ya digər bioloji nümunəsində qadağan edilmiş maddə və ya onun metaboliti aşkar edilərsə, bu müstəqil olaraq AQAQP sayılır. Ciddi Məsuliyyət prinsipi əsasında idmançı maddənin haradan gəldiyini sübut etmək məcburiyyətində deyil — varlığı özü kifayətdir. İdmançı maddənin bilmədən qəbul edildiyini sübut etdikdə cəza azaldıla bilər, lakin tamamilə ləğv edilmir.",
    warning:
      "Ən geniş yayılmış AQAQP növüdür. Kontaminasiya edilmiş qida əlavəsi, yanlış dərman — bunlar da bu kateqoriyaya düşür. 'Bilmirdim' bəhanəsi cəzanı aradan qaldırmır.",
  },
  {
    number: 2,
    name: "Qadağan edilmiş maddə/üsulun istifadəsi və ya istifadəyə cəhd",
    who: "athlete",
    detail:
      "İdmançının qadağan edilmiş maddə qəbul etməsi və ya üsuldan istifadə etməsi — hətta uğursuz cəhd belə — pozuntu sayılır. Test nəticəsinin müsbət olması şərt deyil: məşqçinin iddiası, WhatsApp yazışması, anbar qeydi — bunlar da sübut kimi qəbul edilə bilər. Yarışkənar istifadə, yarış dövrü üçün tətbiq edilən maddələr istisna olmaqla, da bu maddəyə daxildir.",
    warning:
      "Yalnız 'cəhd' belə tam cəza ilə nəticələnir. İstifadə etmədim, ancaq sifariş etdim — bu da kifayət ola bilər.",
  },
  {
    number: 3,
    name: "Nümunə toplanmasından yayınma, imtina və ya uğursuzluq",
    who: "athlete",
    detail:
      "İdmançı Dopinq Nəzarəti İnspektoru tərəfindən bildiriş alındıqdan sonra nümunə vermədən qaçarsa, imtina edərsə və ya əsassız gecikmə yaradərsa — bu müstəqil AQAQP sayılır. 'Hazır deyildim', 'Şəxsiyyət vəsiqəm yanımda deyildi' və ya 'İnspektoru tanımadım' bəhanəsi qəbul edilmir. Yüksək risk dövründə (yarış günü) məruz qalma ehtimalı xüsusilə yüksəkdir.",
    warning:
      "Bildirişdən sonra inspektoru tərk etmək və geri dönmək belə imtina kimi şərh edilə bilər. Suallarınız varsa — inspektoru TƏRK ETMƏYİN, cavab istəyin.",
  },
  {
    number: 4,
    name: "Məkan məlumatı pozuntuları",
    who: "athlete",
    detail:
      "Qeydiyyata alınmış Test Qrupuna (QTQ) daxil olan idmançılar rüblük məkan məlumatı bildirişi təqdim etməli və hər gün 60 dəqiqəlik test pəncərəsi müəyyən etməlidir. 12 aylıq bir dövrdə hər hansı kombinasiyada 3 pozuntu — buraxılmış test (inspektoru pəncərədə tapmamaq) və ya məlumat verməmə (bildirişi vaxtında doldurmamaq) — AQAQP sayılır. Bu pozuntu üçün müsbət test nəticəsi tələb olunmur.",
    warning:
      "ADAMS tətbiqini yükləyin, bildirişləri aktiv saxlayın. Tətil vaxtında belə məlumat yeniləmə öhdəliyiniz davam edir.",
  },
  {
    number: 5,
    name: "Dopinq nəzaratına müdaxilə və ya müdaxilə cəhdi",
    who: "both",
    detail:
      "Dopinq nəzarəti prosesinin istənilən hissəsinə müdaxilə etmək — nümunə götürmə, laboratoriya analizi, nəticənin idarə edilməsi — AQAQP sayılır. Nümunəyə qatışıq əlavə etmək, inspektoru yanıltmaq, nümunə saxlanmasına mane olmaq — bunların hamısı bu kateqoriyaya aiddir. Cəhd, hətta uğursuz olsa belə, tam pozuntu sayılır.",
    warning:
      "Bu AQAQP idman dövründən asılı olmayaraq yarışda və yarışkənar eyni dərəcədə tətbiq edilir.",
  },
  {
    number: 6,
    name: "Qadağan edilmiş maddə/üsulun saxlanılması",
    who: "both",
    detail:
      "İdmançı və ya İdmançı Dəstək Heyəti üzvünün qadağan edilmiş maddəni fiziki olaraq saxlaması — tibbi səbəblər olmadan — pozuntudur. Ev anbarında steroid, çantada yasaq maddə, idman çantasında EPO — bunların hər biri bu kateqoriyaya aiddir. Saxlanma məqsədi (özü üçün, başqası üçün) cəzanın dərəcəsinə təsir edə bilər, lakin pozuntunun özünü aradan qaldırmır.",
    warning:
      "Həkimin yazdığı resept olmadan qadağan maddəni evdə saxlamaq belə müstəqil AQAQP-dir. Tibbi zərurət varsa — mütləq Tİİ alın.",
  },
  {
    number: 7,
    name: "Qadağan edilmiş maddə/üsulun ticarəti",
    who: "both",
    detail:
      "Qadağan edilmiş maddənin satışı, paylanması, ötürülməsi — ya da bunların hər hansı cəhdi — ən ağır kateqoriyaları arasındadır. İdmançı Dəstək Heyəti üçün bu pozuntu ömürlük qadağa ilə nəticələnə bilər. Qiymət alıb-vermə tələb olunmur — pulsuz paylaşmaq da bu maddəyə düşür.",
    warning:
      "Bədən qurma zalında başqa bir idmançıya steroid təqdim etmək — hətta pulsuz, hətta bir dəfə — ömürlük idman qadağasına yol aça bilər.",
  },
  {
    number: 8,
    name: "İdmançıya qadağan maddə/üsul tətbiq etmək",
    who: "personnel",
    detail:
      "Bir idmançıya — razılığıyla da olsa — qadağan edilmiş maddə yeritməsi, tətbiq etməsi, daxil etməsi əməliyyatı bu kateqoriyaya aiddir. Tibb mütəxəssisi, məşqçi, fizioterapevt, ailə üzvü — kim olursa olsun. Həkim kimi peşə statusu bu kateqoriyadan xilas etmir. Cəhd uğursuz olsa belə pozuntu sayılır.",
    warning:
      "İdmançı Dəstək Heyəti üzvləri üçün xüsusi risk: 'İdmançı razı idi' müdafiə hesab edilmir. Tətbiq edən şəxs cavabdehdir.",
  },
  {
    number: 9,
    name: "Şəriklik — AQAQP-yə kömək etmək",
    who: "both",
    detail:
      "AQAQP-nin törədilməsinə bilavasitə kömək etmək, aşkarlanmasına mane olmaq, sistemdən gizlənməyə yardım etmək — bunlar bu kateqoriyaya aiddir. Məsələn: dopinq materialı nəql etmək, saxlanma yerinə kömək etmək, laboratoriya nümunəsini əvəz etmək üçün iştirak etmək. Əsas pozuntunu edən şəxsdən fərqli olaraq şərikə ayrı sanksiya tətbiq edilir.",
    warning:
      "Yalnız baxmaq — 'Mən etmədim, o etdi' — yetərli deyil. Bilərəkdən iştirak etmək şəriklik sayılır.",
  },
  {
    number: 10,
    name: "Qadağan edilmiş Əlaqə",
    who: "athlete",
    detail:
      "Sanksiyaya alınmış şəxslə — hansısa idman çərçivəsində — peşəkar xarakterli əlaqə saxlamaq bu kateqoriyaya aiddir. Məşqçi, tibb işçisi, idarəçi — sanksiyalandırılmış istənilən şəxslə işləmək. Sanksiyalı şəxsin kim olduğunu bilmədiyinizi iddia etmək əksər hallarda müdafiə sayılmır. WADA sanksiyalı şəxslərin açıq reyestrini aparır.",
    warning:
      "Yarışdan əvvəl yeni məşqçinizin, mentorunuzun, həkiminizin adını WADA sanksiya reyestrindən yoxlayın.",
  },
  {
    number: 11,
    name: "Bildiriş orqanlarına müraciəti çətinləşdirmək",
    who: "both",
    detail:
      "Şübhəli dopinq fəaliyyəti barədə məlumat verməyi çətinləşdirən, maneə yaradan, məlumat verəni hədələyən və ya ona qisas alan hər hansı hərəkət AQAQP sayılır. Məlumat vermək istəyən idmançını susdurmaq, şahidə təzyiq etmək, araşdırma əməliyyatçısını manipulyasiya etmək — bunların hamısı bu kateqoriyadadır. WADA Speak Up! platforması anonim bildirişi mümkün edir.",
    warning:
      "Məlumat verəni 'siqnalçı' kimi damğalamaq da bu maddəyə daxil ola bilər. Hər kəsin anonim bildiriş hüququ vardır.",
  },
];

const whoStyles: Record<
  RuleViolation["who"],
  { bg: string; text: string; label: string; icon: React.ReactNode }
> = {
  athlete: {
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-700",
    label: "İdmançı",
    icon: <User className="w-3.5 h-3.5" />,
  },
  personnel: {
    bg: "bg-purple-50 border-purple-200",
    text: "text-purple-700",
    label: "Dəstək Heyəti",
    icon: <Users className="w-3.5 h-3.5" />,
  },
  both: {
    bg: "bg-slate-100 border-slate-300",
    text: "text-slate-700",
    label: "İdmançı & Dəstək Heyəti",
    icon: <Users className="w-3.5 h-3.5" />,
  },
};

function ViolationAccordion({ items }: { items: RuleViolation[] }) {
  return (
    // @ts-ignore
    <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
      {items.map((item) => {
        const style = whoStyles[item.who];
        return (
          <AccordionItem
            key={item.number}
            value={String(item.number)}
            className={`rounded-xl border ${style.bg} px-5 py-1 shadow-sm`}
          >
            <AccordionTrigger className="hover:no-underline py-4 gap-4">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span
                  className={`inline-flex items-center justify-center font-bold text-sm px-3 py-1 rounded-lg border ${style.bg} ${style.text} shrink-0 min-w-[2.5rem]`}
                >
                  {item.number}
                </span>
                <span className="text-[#003466] font-semibold text-base text-left leading-snug">
                  {item.name}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <div className="flex flex-col gap-4 pt-1">
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border w-fit ${style.bg} ${style.text}`}>
                  {style.icon}
                  {style.label}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                    İzah
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

export default async function ADRVPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Antidopinq Qayda Pozuntuları (AQAQP)"
        subtitle="Dopinq yalnız müsbət test nəticəsi deyil. Ümumdünya Antidopinq Məcəlləsi çərçivəsində qayda pozuntusunun baş verə biləcəyi 11 yolu anlayın."
        compact
      />

      <section className="py-14 bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro callout */}
          <div className="bg-[#003466] rounded-2xl p-7 mb-12 text-white">
            <p className="text-lg font-bold mb-2">11 AQAQP mövcuddur</p>
            <p className="text-blue-100 leading-relaxed text-sm">
              Onların nə olduğunu bilmək sizin məsuliyyətinizdirdir. Qaydaları bilməmək, Ciddi Məsuliyyət prinsipi çərçivəsində qəbul edilən müdafiə deyil.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {Object.entries(whoStyles).map(([, s]) => (
              <span
                key={s.label}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${s.bg} ${s.text}`}
              >
                {s.icon}
                {s.label}
              </span>
            ))}
          </div>

          {/* Violations accordion */}
          <ViolationAccordion items={VIOLATIONS} />

          {/* Risk box */}
          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-7">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-900 text-base mb-2">Mühüm Risk Amili</p>
                <p className="text-amber-800 leading-relaxed text-sm">
                  Bir çox idmançı yalnız sınaq barədə narahat olmaq lazım olduğunu düşünür. Lakin sınaqdan yayınmaq, sanksiyaya alınmış məşqçi ilə əlaqə saxlamaq və ya məkan məlumatını yeniləməmək — müsbət nəticə ilə eyni 4 illik diskvalifikasiyaya səbəb ola bilər.
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://www.wada-ama.org/en/anti-doping-topics/athletes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
            >
              <ExternalLink className="w-5 h-5 text-[#0055a4] shrink-0" />
              <div>
                <p className="font-bold text-[#003466] text-sm group-hover:underline">
                  WADA Məcəlləsi — Maddə 2 (AQAQP)
                </p>
                <p className="text-xs text-slate-500">wada-ama.org — tam sənəd</p>
              </div>
            </a>
            <a
              href="https://speakup.wada-ama.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
            >
              <ExternalLink className="w-5 h-5 text-[#0055a4] shrink-0" />
              <div>
                <p className="font-bold text-[#003466] text-sm group-hover:underline">
                  WADA Speak Up! — Anonim Bildiriş
                </p>
                <p className="text-xs text-slate-500">speakup.wada-ama.org — 24/7, anonim</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Öyrənməyə Davam Et"
        description="Növbəti əsas mövzu: hüquqlarınız və məsuliyyətləriniz nələrdir?"
        primaryAction={{
          label: "Hüquqlar & Məsuliyyətlər haqqında öyrən",
          path: `/${lang}/education/topics/rights-and-responsibilities`,
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
