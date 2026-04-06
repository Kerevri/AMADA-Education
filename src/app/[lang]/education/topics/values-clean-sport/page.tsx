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
  Scale,
  HeartPulse,
  Trophy,
  Gem,
  Laugh,
  Users,
  Award,
  Flame,
  Globe,
  MessageSquare,
  Gamepad2,
  ClipboardList,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dəyərlər & Təmiz İdman | AMADA Təhsil",
  description:
    "İdmanın ruhu — WADA Məcəlləsinin əsasına qoyulan 9 dəyər və dəyər əsaslı antidopinq təhsil proqramı.",
};

const VALUES = [
  {
    number: "01",
    name: "Dürüstlük & Ədalətli oyun",
    icon: Scale,
    body: "Hər yarış əxlaq çərçivəsində aparılmalıdır. Qalib gəlmək üçün yollar seçərkən bu dəyər kompas rolunu oynayır. Ədalətli oyun rəqibinizə bərabər şərait gözləyərək mübarizə aparmaq deməkdir.",
  },
  {
    number: "02",
    name: "Sağlamlıq",
    icon: HeartPulse,
    body: "İdman bədəni gücləndirir, sağlamlığı qoruyur. Dopinq isə bunu tam tərsinə çevirir — bədəni zədələyir, həyatı qısaldır. İdmançının sağlamlığı hər zaman performansdan önəmlidir.",
  },
  {
    number: "03",
    name: "Üstünlük & Əzmkarlıq",
    icon: Trophy,
    body: "Nailiyyətlər bioloji üstünlüklərə deyil, təbii bacarıq, əzmkarlıq və fədakarlığa əsaslanmalıdır. Çətin məşq, intizam və özünə inam — bunlar həqiqi üstünlüyün mənbəyidir.",
  },
  {
    number: "04",
    name: "Xarakter & Təhsil",
    icon: Gem,
    body: "İdman çətin anlarda xarakteri üzə çıxarır. Uduzmaq qarşısındakı əzmkarlıq qalibiyyətdən daha çox şey öyrədir. İdman insanı həyat üçün formalaşdırır.",
  },
  {
    number: "05",
    name: "Əyləncə & Sevinc",
    icon: Laugh,
    body: "İdmanın ilkin məqsədi oyunun sevincini yaşamaqdır. Bu intrinsik motivasiya dopinqlə əldə edilən qalibiyyətdə yox olur. Həqiqi sevinc dürüst mübarizədən gəlir.",
  },
  {
    number: "06",
    name: "Komanda ruhu",
    icon: Users,
    body: "Birlikdə nail olmaq — paylaşılmış zəfər — fərdi şöhrətdən daha güclü bir motivasiyadır. Komanda üzvlərini qorumaq həm yarış meydanında, həm də ondan kənarda davam edir.",
  },
  {
    number: "07",
    name: "Hörmət",
    icon: Award,
    body: "Rəqibə, hakimə, qaydaya və özünüzə hörmət — sağlam rəqabətin əsasıdır. Dopinq bu hörmət anlayışını korlayır — həm rəqibinizə, həm də öz bədəninizə qarşı.",
  },
  {
    number: "08",
    name: "Cəsarət",
    icon: Flame,
    body: "Dürüst olmaq, qaydalara uymaq, cazibedar tənliflərə 'xeyr' demək — bütün bunlar cəsarət tələb edir. Ən çətin seçim çox vaxt düzgün seçimdir.",
  },
  {
    number: "09",
    name: "İctimai ruh",
    icon: Globe,
    body: "İdman icmaya məxsusdur. Bir dopinq işi bütün idman növünü, ölkəni, nəsli ləkələyir. Təmiz idman — kollektiv bir məsuliyyətdir.",
  },
];

const CURRICULA = [
  {
    audience: "İdmançılar",
    icon: Trophy,
    topics: [
      "İdmançının hüquq və öhdəlikləri",
      "Dopinq nədir? — Antidopinq Qayda pozuntuları",
      "Dopinq nəzarəti prosesi",
      "Qadağan edilmiş Siyahı",
      "Terapevtik İstifadə üçün İstisnalar (Tİİ)",
      "Məkan Məlumatı & ADAMS",
      "Qida əlavələri riskləri",
      "Dopinq barədə məlumat vermək (Speak Up)",
    ],
  },
  {
    audience: "İdmançı Köməkçi Heyəti",
    icon: Users,
    topics: [
      "İDH-ə kimlər aiddir — tərif",
      "İDH-in vəzifə və öhdəlikləri (Məcəllə Maddə 21.2)",
      "Antidopinq qayda pozuntuları (İDH üçün)",
      "Qadağan edilmiş Siyahı",
      "Terapevtik İstifadə üçün İstisnalar",
      "İdmançıların məkan məlumatına dəstək",
      "Komandada təmiz idman mədəniyyəti yaratmaq",
    ],
  },
  {
    audience: "Valideynlər & Müəllimlər",
    icon: HeartPulse,
    topics: [
      "Antidopinq qayda pozuntuları — valideynlər üçün",
      "Qadağan edilmiş Siyahı & GlobalDRO istifadəsi",
      "Təhlükəsiz qida əlavəsi seçimi",
      "Valideyn üçün yaddaş kitabçası",
      "Gənclərlə açıq söhbət aparmaq strategiyaları",
    ],
  },
  {
    audience: "İdman Federasiyaları",
    icon: Award,
    topics: [
      "Federasiyanın antidopinq sahəsindəki rolu və öhdəlikləri",
      "ISE tələblərinə uyğunluq — milli plan",
      "Seminar keçirilməsi üçün Maarifləndirici şəbəkəsi",
      "İdmançı məlumatlarının idarəsi",
    ],
  },
  {
    audience: "KİV Nümayəndələri",
    icon: Globe,
    topics: [
      "Təmiz idman — Təmiz qələbə",
      "Dopinq nədir? Antidopinq Qayda pozuntuları",
      "Dəyərlərə əsaslanan maarifləndirmə",
      "Məsuliyyətli hesabatçılıq qaydaları",
    ],
  },
];

export default async function ValuesCleanSportPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Dəyərlər & Təmiz İdman prinsipləri"
        subtitle="WADA Məcəlləsi idmanın ruhunu — insanın mənəvi xüsusiyyətlərinin ifadəsini — antidopinqin əsasına qoyur. Dəyərlər idmançıların hər gün etdiyi seçimlərə rəhbərlik edir."
        compact
      />

      <div className="flex flex-col gap-14">

        {/* Lead */}
        <div className="border-l-4 border-amada-teal pl-5">
          <p className="text-[17px] text-[#003466] font-medium leading-relaxed">
            Ümumdünya Antidopinq Məcəlləsi antidopinqin əsasına &quot;İdmanın Ruhu&quot; anlayışını qoyur. Bu ruh — insanın ən yüksək mənəvi xüsusiyyətlərinin ifadəsidir. Dopinq bu ruhu birbaşa alçaldır. AMADA-nın dəyər əsaslı təhsili qaydaları ezberləməkdən deyil, bu dəyərləri daxildən hiss etməkdən başlayır.
          </p>
        </div>

        {/* WADA quote */}
        <div className="bg-[#003466] rounded-2xl px-8 py-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-10 w-24 h-24 rounded-full bg-amada-teal/10 translate-y-1/2" />
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3 relative">
            WADA Məcəlləsi — İdmanın Ruhu
          </p>
          <p className="text-white text-lg font-medium leading-relaxed relative max-w-2xl">
            &ldquo;İdmanın ruhu insanın cismani, mənəvi və zehni xüsusiyyətlərinin ifadəsidir. Bu ruh həm hər idmançıda, həm də kollektiv olaraq idmanda əks olunur.&rdquo;
          </p>
        </div>

        {/* 9 Values */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            İdmanın Ruhu — 9 Əsas Dəyər
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.number}
                  className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-amada-teal/40 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amada-teal/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amada-teal" />
                    </div>
                    <span className="text-xs font-bold text-slate-300 tabular-nums">
                      {v.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#003466] text-base mb-2 leading-snug">
                    {v.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values-based education */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Proqram haqqında
          </p>
          <h2 className="text-xl font-bold text-[#003466] mb-4 leading-snug">
            Dəyərlərə əsaslanan Təhsil proqramı
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-2xl">
            Dəyərlərə əsaslanan təhsil — uşaq, yeniyetmə və gənclər arasında təmiz idman, şəxsi mənəvi dəyərlər, etik normalara uyğun davranış və fərdi prinsiplərə əsaslanaraq qərar vermək qabiliyyətinin inkişafına yönəldilmiş proqramlardır. Məqsəd qaydaları əzbərləmək deyil — bu dəyərləri daxildən hiss etməkdir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Gamepad2, label: "Oyunlar & simulyasiyalar", desc: "Əyləncəli, interaktiv öyrənmə formatları" },
              { icon: MessageSquare, label: "Qrup müzakirələri", desc: "Real ssenarilərlə kritik düşüncə" },
              { icon: ClipboardList, label: "Viktorinalar & testlər", desc: "Bilikləri möhkəmləndirən qiymətləndirmə" },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} className="bg-white border border-slate-200 rounded-xl p-5">
                  <div className="w-9 h-9 rounded-lg bg-amada-teal/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-amada-teal" />
                  </div>
                  <p className="font-semibold text-[#003466] text-sm mb-1">{m.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Audience curricula */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Hədəf qruplara görə tədris planı
          </p>
          {/* @ts-ignore */}
          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {CURRICULA.map((c, i) => {
              const Icon = c.icon;
              return (
                <AccordionItem
                  key={c.audience}
                  value={String(i)}
                  className="border border-slate-200 rounded-xl px-5 py-1 bg-white shadow-sm"
                >
                  <AccordionTrigger className="hover:no-underline py-4 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amada-teal/10 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-amada-teal" />
                      </div>
                      <span className="font-semibold text-[#003466] text-base">
                        {c.audience}
                      </span>
                      <span className="text-xs text-slate-400 font-normal">
                        {c.topics.length} mövzu
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <ul className="flex flex-col gap-2 pt-1">
                      {c.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-amada-teal shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600 leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Risk callout */}
        <div className="bg-[#003466] rounded-2xl p-7 text-white">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-base mb-2">Mühüm Risk Amili</p>
              <p className="text-blue-100 leading-relaxed text-sm">
                Dəyərlərə əsaslanmayan idman mühiti dopinqi, saxtakarlığı və manipulyasiyanı tədricən normallaşdırır. Gənc idmançılar karyeralarının ilk illərində bu mühitdən formalaşırlarsa — korreksiya çox çətin olur. Erkən yaşda səlim dəyərlərin aşılanması ən güclü antidopinq vasitəsidir.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col sm:flex-row gap-3 pb-4">
          <a
            href="https://www.wada-ama.org/en/what-we-do/education-prevention/values-education"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-4 h-4 text-[#0055a4] shrink-0" />
            <p className="font-semibold text-[#003466] text-sm group-hover:underline leading-snug">
              WADA Dəyər Əsaslı Təhsil Proqramı
            </p>
          </a>
          <a
            href="mailto:education@amada.az"
            className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-4 h-4 text-[#0055a4] shrink-0" />
            <p className="font-semibold text-[#003466] text-sm group-hover:underline leading-snug">
              AMADA Məktəb Proqramları: education@amada.az
            </p>
          </a>
        </div>

      </div>

      <CTASection
        title="Öyrənməyə Davam Et"
        description="Növbəti mövzu: məkan məlumatı sistemi QTQ idmançıları üçün necə işləyir?"
        primaryAction={{
          label: "Məkan məlumatı & ADAMS haqqında öyrən",
          path: `/${lang}/education/topics/whereabouts-adams`,
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
