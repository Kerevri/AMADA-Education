import { HeroSection } from "@/components/shared/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dəyərlər & Təmiz İdman prinsipləri | AMADA",
  description: "İdmanın ruhu — WADA 2027 Məcəlləsinin əsasına qoyulan dəyərlər və gənc idmançılar üçün dəyərlərə əsaslanan təhsil proqramı.",
};

const sportValues = [
  { az: "Dürüstlük & Fair Play", en: "Integrity & Fair Play", icon: "⚖️", desc: { az: "Hər yarış etik əsasda aparılmalıdır. Hər idmançı rəqibinə bərabər şərait gözlənilərək mübarizə aparır.", en: "Every competition must be conducted on an ethical basis." } },
  { az: "Sağlamlıq", en: "Health", icon: "❤️", desc: { az: "İdman sağlamlığı qorumaq üçün mövcuddur, ona zərər vermək üçün deyil. Dopinq bu prinsipə birbaşa ziddir.", en: "Sport exists to protect health, not to harm it. Doping is fundamentally opposed to this principle." } },
  { az: "Üstünlük & Əzmkarlıq", en: "Excellence & Dedication", icon: "🏆", desc: { az: "Nailiyyətlər yalnız təbii bacarıq, çalışqanlıq və əzmkarlığa əsaslanmalıdır — xarici gücləndiricilərə deyil.", en: "Achievements must be based on natural talent, hard work and dedication — not artificial enhancers." } },
  { az: "Xarakter", en: "Character", icon: "🦁", desc: { az: "İdman çətin vəziyyətlərdə xarakteri üzə çıxarır. Qazananda da, uduzanda da şərəfli olmaq idmançılığın əlamətidir.", en: "Sport reveals character in difficult situations. Being dignified in both victory and defeat is the mark of a true athlete." } },
  { az: "Əyləncə & Sevinc", en: "Fun & Joy", icon: "🌟", desc: { az: "İdman öz içindəki sevincə görə qiymətlidir. Bu intrinsiq motivasiya dopinqin antitezi olan sağlam idman mədəniyyətini qoruyur.", en: "Sport is valuable for the joy within itself. This intrinsic motivation protects a healthy sport culture." } },
  { az: "Komanda ruhu", en: "Team Spirit", icon: "🤝", desc: { az: "Birlikdə nail olmaq fərdi maraqdan üstündür. Komanda üzvləri bir-birini həm döyüş meydanında, həm də bütünlükdə qoruyur.", en: "Achieving together is greater than individual interests. Team members protect each other on and off the field." } },
  { az: "Hörmət", en: "Respect", icon: "🎖️", desc: { az: "Rəqibə, hakimə, qaydaya, öz bədəninə — hamısına hörmət vacibdir. Dopinq bu hörmət anlayışını korlayır.", en: "Respect for opponents, referees, rules, and your own body. Doping corrupts this concept of respect." } },
];

const audienceCurricula: Array<{
  audience: string;
  icon: string;
  topics: string[];
}> = [
  {
    audience: "İdmançılar",
    icon: "🏃",
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
    icon: "🧑‍🏫",
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
    icon: "👨‍👩‍👧",
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
    icon: "🏛️",
    topics: [
      "Federasiyanın antidopinq sahəsindəki rolu və öhdəlikləri",
      "ISE tələblərinə uyğunluq — milli plan",
      "Seminar keçirilməsi üçün Maarifləndirici şəbəkəsi",
      "İdmançı məlumatlarının idarəsi",
    ],
  },
  {
    audience: "KİV Nümayəndələri",
    icon: "📺",
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
  const isAz = lang === "az";

  return (
    <div className="flex flex-col">
      <HeroSection
        title={isAz ? "Dəyərlər & Təmiz İdman prinsipləri" : "Values & Clean Sport Principles"}
        subtitle={isAz
          ? "WADA 2027-ci il Məcəlləsi idmanın ruhunu — insanın mənəvi xüsusiyyətlərinin ifadəsi kimi — antidopinqin əsasına qoyur. Dəyərlər idmançıların hər gün etdiyi seçimlərə rəhbərlik edir."
          : "The WADA 2027 Code places the spirit of sport — the celebration of the human spirit, body and mind — at the core of anti-doping."}
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl">

          {/* 7 sport values grid */}
          <h2 className="text-2xl font-bold text-[#003466] mb-8">
            {isAz ? "İdmanın ruhu — 7 əsas dəyər" : "Spirit of Sport — 7 Core Values"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {sportValues.map((v) => (
              <div key={v.az} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#003466] mb-2">
                  {isAz ? v.az : v.en}
                </h3>
                <p className="text-sm text-[#102033] leading-relaxed">
                  {isAz ? v.desc.az : v.desc.en}
                </p>
              </div>
            ))}
          </div>

          {/* Values-based education */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[#003466] mb-4">
              {isAz ? "Dəyərlərə əsaslanan Təhsil proqramı" : "Values-Based Education Programme"}
            </h2>
            <p className="text-[#102033] leading-relaxed mb-6">
              {isAz
                ? "Dəyərlərə əsaslanan təhsil — uşaq, yeniyetmə və gənclər arasında təmiz idman, şəxsi mənəvi dəyərlər, etik normalara uyğun davranış və fərdi prinsiplərə əsaslanaraq qərar vermək qabiliyyətinin inkişafına yönəldilmiş proqramlardır."
                : "Values-based education encompasses training programmes aimed at developing the ability to make decisions based on clean sport, personal values, ethical norms, and individual principles among children, youth and young adults."}
            </p>
            <p className="text-[#102033] leading-relaxed mb-6">
              {isAz
                ? "Proqramın məqsədi: Gənc idmançılara ədalətli, dürüst olmağı, özünə və digər iştirakçılara hörmət etməyi, idman dəyərlərinə əsaslanan davranışı öyrətmək."
                : "Programme goal: To teach young athletes to be fair and honest, to respect themselves and other participants, and to base their conduct on sport values."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: "🎮", label: isAz ? "Oyunlar & simulyasiyalar" : "Games & simulations" },
                { icon: "💬", label: isAz ? "Qrup müzakirələri" : "Group discussions" },
                { icon: "🎯", label: isAz ? "Əyləncəli viktorinalar" : "Fun quizzes" },
              ].map((m) => (
                <div key={m.label} className="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-center gap-3">
                  <span className="text-2xl">{m.icon}</span>
                  <span className="font-medium text-[#003466] text-sm">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection
        title={isAz ? "Yerlər haqqında məlumat & ADAMS" : "Whereabouts & ADAMS"}
        description={isAz
          ? "QTQ idmançıları üçün məkan məlumatı sistemi necə işləyir?"
          : "How does the whereabouts system work for RTP athletes?"}
        primaryAction={{
          label: isAz ? "ADAMS mövzusuna keç" : "Go to Whereabouts & ADAMS",
          path: `/${lang}/education/topics/whereabouts-adams`
        }}
        variant="light"
      />
    </div>
  );
}
