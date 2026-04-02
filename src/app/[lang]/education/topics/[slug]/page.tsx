import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { translations, t, type Lang } from "@/i18n/translations";

export async function generateMetadata({ params }: { params: Promise<{ slug: string; lang: string }> }) {
  const { slug, lang } = await params;
  const l = lang as Lang;
  const pd = translations.topicPages;

  if (slug === "anti-doping-rule-violations") {
    return {
      title: `${t(pd.adrv.title, l)} | AMADA`,
      description: t(pd.adrv.subtitle, l),
    };
  }
  return { title: "Topic | AMADA Education" };
}

// Fallback data for topics not yet in the translation dictionary
const TOPICS_FALLBACK: Record<string, {
  title: string; subtitle: string; introContent: string;
  keyFacts: string[]; risks: string;
  resources: { label: string; url: string }[];
  nextTopic: { label: string; slug: string } | null;
}> = {
  "testing-procedures": {
    title: "Testing Procedures",
    subtitle: "What to expect when you are notified for Doping Control.",
    introContent: "Testing (Doping Control) is conducted to ensure a level playing field. You can be tested anywhere, anytime, in-competition or out-of-competition, without advance notice.",
    keyFacts: [
      "You will be notified by a Doping Control Officer (DCO) or Chaperone.",
      "You have the right to see the DCO's identification.",
      "You must stay in direct sight of the DCO/Chaperone at all times.",
      "You have the right to bring a representative and/or interpreter.",
      "You will be asked to provide a urine sample, blood sample, or both.",
      "You must visually observe the sealing of your samples.",
    ],
    risks: "Refusing to provide a sample or fleeing the testing station after being notified is treated as an Anti-Doping Rule Violation (ADRV) and carries a standard 4-year ban.",
    resources: [{ label: "Urine Testing Process Video", url: "#" }, { label: "Blood Testing Process", url: "#" }],
    nextTopic: { label: "Prohibited List", slug: "prohibited-list" },
  },
  "prohibited-list": {
    title: "The Prohibited List",
    subtitle: "The official international standard identifying substances and methods prohibited in sport.",
    introContent: "The WADA Prohibited List is updated every year on January 1st. It outlines what substances and methods are banned In-Competition, Out-of-Competition, and within particular sports.",
    keyFacts: [
      "Banned at all times: Anabolic agents, peptide hormones, diuretics, masking agents.",
      "Banned In-Competition only: Stimulants, narcotics, cannabinoids (cannabis/THC), glucocorticoids.",
      "Substances are added if they meet 2 of 3 criteria: enhances performance, poses a health risk, violates the spirit of sport.",
      "It is YOUR responsibility to ensure that no prohibited substance enters your body.",
    ],
    risks: "Taking a common cold medication or supplement without checking it against the current Prohibited List can lead to an accidental positive test.",
    resources: [{ label: "Current WADA Prohibited List", url: "#" }, { label: "GlobalDRO Medication Check", url: "#" }],
    nextTopic: { label: "Medications", slug: "medications" },
  },
  "tue": {
    title: "Therapeutic Use Exemptions (TUE)",
    subtitle: "How to compete cleanly when you have a legitimate medical condition.",
    introContent: "Athletes, like anyone else, can have illnesses or conditions that require them to take medications. If the medication you need is on the Prohibited List, you must apply for a TUE.",
    keyFacts: [
      "A TUE gives you authorization to use a prohibited substance for a specific medical reason without committing an ADRV.",
      "You must apply to AMADA (or your International Federation) BEFORE using the medication, except in medical emergencies.",
      "Your application must be accompanied by a comprehensive medical file from your doctor.",
      "The TUE must meet strict criteria set by WADA's International Standard for TUEs (ISTUE).",
    ],
    risks: "Using a prohibited substance without an approved TUE—even if prescribed by a doctor—will result in an Anti-Doping Rule Violation if you are tested.",
    resources: [{ label: "TUE Application Form", url: "#" }, { label: "ISTUE Requirements", url: "#" }],
    nextTopic: { label: "Supplements Risk", slug: "supplements-risk" },
  },
  "supplements-risk": {
    title: "The Risk of Supplements",
    subtitle: "Why dietary and nutritional supplements pose one of the highest risks to clean athletes.",
    introContent: "The supplement industry is loosely regulated. Unlike medications, supplements do not undergo strict quality control before being sold. A supplement can contain banned substances that aren't listed on the label.",
    keyFacts: [
      "There is no 100% guarantee that any supplement is free from prohibited substances.",
      "Labeling can be inaccurate: banned ingredients might have alternative names.",
      "Cross-contamination often occurs in factories that manufacture both legal and banned supplements.",
      "Always take a 'Food First' approach—optimize your diet before considering supplements.",
    ],
    risks: "Ignorance is not an excuse. If a contaminated supplement causes a positive drug test, you will still face a ban from sport under the principle of Strict Liability.",
    resources: [{ label: "Informed Sport Batch Checker", url: "#" }, { label: "Nutrition Guide for Athletes", url: "#" }],
    nextTopic: { label: "Strict Liability", slug: "strict-liability" },
  },
};

// AZ overrides for fallback topics — full ISE content from AMADA_Website_Content_AZ.docx
const TOPICS_FALLBACK_AZ: typeof TOPICS_FALLBACK = {
  "testing-procedures": {
    title: "Sınaq prosedurları",
    subtitle: "Bildirişdən sənədləşdirməyə qədər — sınaq zamanı nə baş verdiyini öyrənin.",
    introContent: "Dopinq nəzarəti prosesi WADA-nın Test etmə və Araşdırmalar üzrə Beynəlxalq Standartına (IST) uyğun həyata keçirilir. Hər bir idmançı istənilən vaxt, istənilən yerdə, heç bir xəbərdarlıq edilmədən dopinq nəzaratına tabe tutula bilər.",
    keyFacts: [
      "1. Seçilmə: İdmançı risk əsaslı, fərdi hədəflənmiş və ya təsadüfi seçim əsasında seçilir.",
      "2. Bildiriş: İdmançıya Dopinq Nəzarəti İnspektoru (DNİ) tərəfindən rəsmi bildiriş verilir.",
      "3. Dopinq Nəzarəti Məntəqəsinə getmə: İdmançı gecikmədən getməlidir.",
      "4. Nümunə seçimi: İdmançı sidik, qan və ya hər ikisini verə bilər.",
      "5. Nümunənin möhürlənməsi: A və B nümunələri ayrıca möhürlənir.",
      "6. WADA akkreditasiyalı laboratoriyada analiz.",
      "7. Nəticə: Müsbət nəticə olduqda Nəticənin İdarə Edilməsi prosesi başlayır.",
      "İdmançı Bioloji Pasportu (IBP): qan biologiyasındakı anormal dəyişiklikləri longitudinal izləyir.",
    ],
    risks: "Nümunə verməkdən imtina etmək və ya bildirişdən sonra sınaq stansiyasından qaçmaq, Dopinqə Qarşı Qayda Pozuntusu (DQAQP) kimi qəbul edilir və standart 4 illik qadağan cəzasını nəzərdə tutur.",
    resources: [{ label: "WADA Test etmə Standartı (IST)", url: "https://www.wada-ama.org" }, { label: "Sidik Sınağı Prosesi", url: "#" }],
    nextTopic: { label: "Ciddi məsuliyyət", slug: "strict-liability" },
  },
  "prohibited-list": {
    title: "Qadağan olunmuş siyahı",
    subtitle: "WADA tərəfindən hər il yenilənən, idmanda istifadəsi qadağan edilmiş maddə və üsulların rəsmi siyahısı.",
    introContent: "Qadağan edilmiş Siyahı hər il 1 yanvar tarixindən qüvvəyə minir. Maddə aşağıdakı meyarlardan ən azı ikisini ödərsə siyahıya salınır: idman göstəricilərini artırma potensialı, idmançının sağlamlığına real və ya potensial zərər, idmanın ruhuna zidd olması.",
    keyFacts: [
      "S0 — Hər zaman qadağan: Onaylı terapevtik istifadəsi olmayan bütün farmakologik maddələr.",
      "S1 — Anabolik agentlər: Anabolik steroidlər, SARM-lar.",
      "S2 — Peptid hormonları, böyümə faktorları: EPO, HGH, IGF-1.",
      "S3 — Beta-2 agonistlər: Yalnız müəyyən şərtlər altında icazəlidir.",
      "S6-S9 — Stimullaşdırıcılar, narkotiklər, kanabioidlər, kortikosteroidlər (yalnız yarış dövründə).",
      "M seriyası — Üsullar: Qan manipulyasiyası, gen dopinqi, kimyəvi/fiziki saxtalaşdırma.",
      "Aktual siyahıya baxmaq: https://www.wada-ama.org/en/prohibited-list",
    ],
    risks: "Cari Qadağan Edilmiş Siyahı ilə yoxlamadan adi soyuqdəymə dərmanı və ya əlavə qidalar qəbul etmək, təsadüfi müsbət test nəticəsinə gətirib çıxara bilər.",
    resources: [{ label: "Cari WADA Qadağan Edilmiş Siyahısı", url: "https://www.wada-ama.org/en/prohibited-list" }, { label: "GlobalDRO Dərman Yoxlaması", url: "https://www.globaldro.com" }],
    nextTopic: { label: "Sınaq prosedurları", slug: "testing-procedures" },
  },
  "tue": {
    title: "Terapevtik İstifadə İcazəsi (Tİİ)",
    subtitle: "Qanuni tibbi vəziyyətiniz olduqda necə təmiz rəqabət aparmaq olar.",
    introContent: "İdmançılar, hər kəs kimi, dərman qəbul etməyi tələb edən xəstəliklərə və ya vəziyyətlərə sahib ola bilər. Ehtiyac duyduğunuz dərman Qadağan Edilmiş Siyahıdadırsa, Tİİ üçün müraciət etməlisiniz.",
    keyFacts: [
      "Zərurət: Maddə istifadə edilməməsi sağlamlığın pisləşməsinə səbəb olmalıdır.",
      "Alternativ: Qeyri-qadağan olunmuş heç bir ağlabatan alternativ müalicə olmamalıdır.",
      "Performans: Maddə istifadəsindən gözlənilən performans artımı əhəmiyyətli olmamalıdır.",
      "Müraciət: Maddəni istifadə etməzdən ƏVVƏL müraciət edilməlidir (təcili hallar istisna).",
      "İllik Yenilənmə: Tİİ-lərin adətən bitmə müddəti olur və yenilənməlidir.",
    ],
    risks: "Həkim tərəfindən təyin edilsə belə, təsdiqlənmiş Tİİ olmadan qadağan olunmuş maddədən istifadə, sınaqdan keçirilsəniz Dopinqə Qarşı Qayda Pozuntusuna səbəb olacaq.",
    resources: [{ label: "Tİİ Müraciəti: education@amada.az", url: "mailto:education@amada.az" }, { label: "WADA ISTUE Tələbləri", url: "https://www.wada-ama.org" }],
    nextTopic: null,
  },
  "supplements-risk": {
    title: "Əlavə qidaların riski",
    subtitle: "Niyə AMADA 'Qida Öncəlikli' yanaşmanı tövsiyə edir.",
    introContent: "İdman qidaları və bioloji fəallığa malik qida əlavələrinin istifadəsi geniş yayılıb. Lakin bu məhsullar ciddi risk daşıyır — çünki antidopinq nəzarəti üçün tənzimlənmiş dərman istehsalı sistemindən fərqli olaraq, qida əlavələri eyni ciddi nəzarətə tabe deyil.",
    keyFacts: [
      "Məhsulun tərkibində qadağan edilmiş maddə ola bilər — etiketdə qeyd edilməsə belə.",
      "İstehsal prosesində qadağan edilmiş maddələrlə çirklənmə baş verə bilər.",
      "Etiketdəki maddə adları Qadağan edilmiş Siyahıdakı adlardan fərqli yazıla bilər.",
      "'Herbal', 'təbii', 'idmançılar üçün təhlükəsiz' kimi ifadələr heç nəyi zəmanət vermir.",
      "İnternetdən alınan məhsullar xüsusilə risk daşıyır.",
      "Informed Sport, NSF for Sport kimi tanınmış sertifikat proqramlarından keçmiş məhsulları üstün tutun.",
    ],
    risks: "Ciddi Məsuliyyət qida əlavələrinə də şamil edilir. İdmançı qida əlavəsindəki qadağan edilmiş maddəni bilmədən qəbul etsə belə — məsuliyyət yenə idmançıdadır.",
    resources: [{ label: "Informed Sport Yoxlaması", url: "https://www.informed.sport" }, { label: "İdmançılar üçün Qidalanma Bələdçisi", url: "#" }],
    nextTopic: { label: "Ciddi məsuliyyət", slug: "strict-liability" },
  },
  "strict-liability": {
    title: "Ciddi məsuliyyət",
    subtitle: "İdmançı öz bədəninə daxil olan hər hansı maddəyə görə şəxsən məsuliyyət daşıyır.",
    introContent: "Ciddi Məsuliyyət — Ümumdünya Antidopinq Məcəlləsinin əsas sütunlarından biridir. Bu prinsipə görə müsbət dopinq nəzarəti nəticəsi aldıqda idmançı maddəni bilərəkdən istifadə etdiyini sübut etməyə məcbur deyil.",
    keyFacts: [
      "Müsbət test zamanı idmançı maddənin istifadəsini sübut etməyə məcbur deyil.",
      "Maddənin bədəninizə necə daxil olduğunu sübut etmək məcburiyyətiniz yoxdur.",
      "İdmançı yalnız müəyyən hallarda cəza müddətini azalda bilər — məsələn, maddənin bilmədən qəbul edildiyi sübut olunduqda.",
      "Lakin bu sübut yükü idmançının üzərindədir.",
      "Hər hansı maddəni qəbul etməzdən əvvəl Qadağan edilmiş Siyahıda yoxlayın.",
      "Hər qida əlavəsi, bitkisel çay, vitamin preparatı — hər şeyi yoxlayın.",
    ],
    risks: "Bu o deməkdir ki, başqa birinin verdiyi maddə qəbul edilsə belə — məsuliyyət idmançıdadır. 'Bilmədim' bəhanəsi qəbul edilmir.",
    resources: [{ label: "WADA Məcəlləsi", url: "https://www.wada-ama.org" }],
    nextTopic: { label: "Terapevtik İstifadə İcazəsi (Tİİ)", slug: "tue" },
  },
  "consequences": {
    title: "Dopinqin fəsadları",
    subtitle: "Dopinq vasitələrinin istifadəsi sağlamlıq, sosial həyat və karyera üzərində ağır fəsadlar doğurur.",
    introContent: "Dopinq vasitələrinin istifadəsi sağlamlıq, sosial həyat və karyera üzərində ağır və bəzən geri dönüşsüz fəsadlar doğurur. Bu fəsadlar yalnız bir sanksiya ilə bitmir.",
    keyFacts: [
      "Anabolik agentlər: Ürək-damar sistemi problemləri, aritmiyalar, qəfləti ölüm riski.",
      "Qaraciyər: Zədələnmə, onkoloji xəstəliklərin sürətlənməsi.",
      "Stimullaşdırıcılar: Psixi pozğunluq, aqressiya, yuxusuzluq, depressiya.",
      "EPO: Qan laxtalanması, insult, ürək tutması riski.",
      "Sosial fəsadlar: Qazanılmış medallar, nəticələrin ləğv edilməsi.",
      "Karyera: Yarışlardan müvəqqəti və ya ömürlük kənarlaşdırılma.",
      "Maliyyə: Dəstəklərin, sponsorluğun itirilməsi.",
    ],
    risks: "Dopinq istifadəsinin nəticəsi yalnız bir sanksiya deyil — sağlamlığın, karyeranın və nüfuzun birdəfəlik itirilməsi ola bilər.",
    resources: [{ label: "WADA Sağlamlıq Riskləri", url: "https://www.wada-ama.org/en/health-and-research" }],
    nextTopic: { label: "Antidopinq sisteminin idarəçiliyi", slug: "governance" },
  },
  "governance": {
    title: "Antidopinq sisteminin idarəçiliyi",
    subtitle: "Qlobal antidopinq sistemi çoxsəviyyəli beynəlxalq quruluşa malikdir.",
    introContent: "Qlobal antidopinq sistemi çoxsəviyyəli beynəlxalq quruluşa malikdir. Bu sistemin əsas dayağını Ümumdünya Antidopinq Agentliyi (WADA) təşkil edir. Azərbaycanda AMADA bu quruluşun milli icrası üçün məsuldur.",
    keyFacts: [
      "WADA — Ümumdünya Antidopinq Agentliyi: Qlobal siyasətin formalaşdırıcısı, Məcəllə və Standartların müəllifi.",
      "AMADA — Azərbaycan Milli Antidopinq Agentliyi: Milli səviyyədə test, təhsil və uyğunluğu həyata keçirir.",
      "Beynəlxalq Federasiyalar (IF): Öz idman növlərini tənzimləyir, milli federasiyaları dəstəkləyir.",
      "Milli Olimpiya Komitəsi (MOK): Olimpik idmançıların uyğunluğunu dəstəkləyir.",
      "WADA hər 4 ildə Məcəlləni yeniləyir. 2027-ci il versiyası hazırda qüvvədədir.",
    ],
    risks: "İdmançılar bu quruluşu bilməlidir: yalnız AMADA-nın deyil, Beynəlxalq Federasiyanızın da hüquq və tələbləri ola bilər.",
    resources: [{ label: "WADA-nın rəsmi saytı", url: "https://www.wada-ama.org" }, { label: "AMADA haqqında", url: "https://amada.az" }],
    nextTopic: { label: "Dəyərlər & Təmiz İdman prinsipləri", slug: "values-clean-sport" },
  },
  "values-clean-sport": {
    title: "Dəyərlər & Təmiz İdman prinsipləri",
    subtitle: "İdmanın ruhu — yarışın özünəməxsus dəyəri olan bir fəaliyyət kimi.",
    introContent: "WADA 2027-ci il Məcəlləsi idmanın ruhunu — insanın mənəvi xüsusiyyətlərinin ifadəsi kimi — antidopinqin əsasına qoyur. Bu dəyərlər idmançıların qərar qəbulunda kompas rolunu oynayır.",
    keyFacts: [
      "Dürüstlük — fair play: Hər yarış etik əsasda aparılmalıdır.",
      "Sağlamlıq: İdman sağlamlığı qorumaq üçün mövcuddur, zədələmək üçün deyil.",
      "Üstünlük — əzmkarlıq: Nailiyyətlər təbii bacarıq və çalışqanlığa əsaslanmalıdır.",
      "Xarakter: İdman çətin situasiyalarda xarakteri ortaya çıxarır.",
      "Komanda ruhu: Birlikdə nail olmaq fərdi maraqdan üstündür.",
      "Hörmət: Rəqib, hakim, qayda — hamısına hörmət vacibdir.",
    ],
    risks: "Dəyərlərə əsaslanmayan bir idman mühiti dopinqi, saxtakarlığı və manipulyasiyanı normallaşdırır.",
    resources: [{ label: "WADA Dəyərlər Proqramı", url: "https://www.wada-ama.org/en/what-we-do/education-prevention/values-education" }],
    nextTopic: { label: "Yerlər haqqında məlumat & ADAMS", slug: "whereabouts-adams" },
  },
  "whereabouts-adams": {
    title: "Yerlər haqqında məlumat & ADAMS",
    subtitle: "Qeydiyyata alınmış Test Qrupuna daxil olan idmançıların məcburi öhdəliyi.",
    introContent: "Məkan məlumatı (Whereabouts) — Qeydiyyata alınmış Test Qrupuna (QTQ) daxil olan idmançıların hər gün müəyyən saatlarda öz yerlərini ADAMS sisteminə qeyd etmələrini nəzərdə tutan məcburi öhdəlikdir.",
    keyFacts: [
      "ADAMS — WADA-nın istifadəçi dostu onlayn platformasıdır. iOS və Android tətbiqləri mövcuddur.",
      "Hər rüb üçün məlumat vaxtında daxil edilməlidir.",
      "Hər gün 60 dəqiqəlik 'test pəncərəsi' (test window) müəyyən edilməlidir.",
      "Ünvan, məşq yeri, yarış cədvəli sisteminə daxil edilir.",
      "Dəyişiklik olduqda dərhal yeniləmə vacibdir.",
      "12 aylıq dövr ərzində üç dəfə qaçırılmış test antidopinq qayda pozuntusudur.",
      "ADAMS-a giriş: https://adams.wada-ama.org",
    ],
    risks: "12 aylıq dövr ərzində üç dəfə qaçırılmış test (Missed Test) və ya məkan məlumatının vaxtında təqdim edilməməsi (Filing Failure) kombinasiyası Antidopinq Qayda Pozuntusu sayılır.",
    resources: [{ label: "ADAMS platforması", url: "https://adams.wada-ama.org" }, { label: "AMADA Yardım", url: "mailto:education@amada.az" }],
    nextTopic: { label: "Əlavə qidaların riski", slug: "supplements-risk" },
  },
  "rights-and-responsibilities": {
    title: "Hüquqlar & Məsuliyyətlər",
    subtitle: "Antidopinq sistemindəki gücünüzü və vəzifələrinizi bilin.",
    introContent: "İdmançıların və İdmançı Dəstək Heyətinin Ümumdünya Antidopinq Məcəlləsi, Beynəlxalq Standartlar və İdmançıların Antidopinq Hüquqları Aktı ilə müəyyən edilmiş hüquq və öhdəlikləri mövcuddur.",
    keyFacts: [
      "Hüquq: Dopinq nəzarəti prosesi haqqında əvvəlcədən məlumat almaq.",
      "Hüquq: Nümunə götürülməsi zamanı nümayəndəsinin (şahidin) iştirakını tələb etmək.",
      "Hüquq: Tibbi zərurət olduqda Tİİ almaq.",
      "Hüquq: İddia edilmiş pozuntu barədə vaxtında xəbərdar edilmək və ədalətli eşitilmə.",
      "Öhdəlik: İstənilən vaxt dopinq nəzaratına tabe olmaq.",
      "Öhdəlik: Bütün qida əlavələri, dərmanlar barədə məsuliyyət daşımaq.",
      "Öhdəlik: RTP üzvləri üçün məkan məlumatını vaxtında təqdim etmək.",
    ],
    risks: "Hüquqlarınızı bilməmək qayda pozuntularına səbəb ola bilər; öhdəliklərinizi yerinə yetirməmək isə birbaşa sanksiya ilə nəticələnir.",
    resources: [{ label: "İdmançıların Antidopinq Hüquqları Aktı", url: "https://athletesrights.org" }, { label: "WADA Məcəlləsi Maddə 21", url: "https://www.wada-ama.org" }],
    nextTopic: { label: "Dopinqin fəsadları", slug: "consequences" },
  },
};

export default async function TopicSlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = lang as Lang;
  const pd = translations.topicPages;
  const c = translations.common;

  // Use the full translation dict for ADRV, fallback for others
  let topic: {
    title: string; subtitle: string; introContent: string;
    keyFacts: string[]; risks: string;
    resources: { label: string; url: string }[];
    nextTopic: { label: string; slug: string } | null;
  } | null = null;

  if (slug === "anti-doping-rule-violations") {
    topic = {
      title: t(pd.adrv.title, l),
      subtitle: t(pd.adrv.subtitle, l),
      introContent: t(pd.adrv.intro, l),
      keyFacts: [...(pd.adrv.keyFacts[l] ?? pd.adrv.keyFacts.en)],
      risks: t(pd.adrv.risks, l),
      resources: [
        { label: l === "az" ? "WADA Məcəlləsi PDF" : "WADA Code PDF", url: "#" },
        { label: l === "az" ? "İdmançıların Dopinqə Qarşı Mübarizə Hüquqları Aktı" : "Athletes' Anti-Doping Rights Act", url: "#" },
      ],
      nextTopic: l === "az"
        ? { label: "Hüquqlar və Məsuliyyətlər", slug: "rights-and-responsibilities" }
        : l === "ru"
        ? { label: "Права и обязанности", slug: "rights-and-responsibilities" }
        : { label: "Rights and Responsibilities", slug: "rights-and-responsibilities" },
    };
  } else {
    const fallback = l === "az" && TOPICS_FALLBACK_AZ[slug]
      ? TOPICS_FALLBACK_AZ[slug]
      : TOPICS_FALLBACK[slug];

    if (fallback) {
      topic = fallback;
    }
  }

  if (!topic) {
    // Basic fallback for unimplemented topics to prevent 404s during demo
    return (
      <div className="flex flex-col">
        <HeroSection title={slug.replace(/-/g, " ").toUpperCase()} subtitle={l === "az" ? "Bu mövzu üçün məzmun yenilənir." : "Content for this topic is being updated."} compact />
        <section className="py-20 text-center">
          <p className="text-[#003466]">{l === "az" ? "Bu mövzuda ətraflı məlumat tezliklə 2027 ISE qaydaları çərçivəsində əlçatan olacaq." : "Detailed information on this topic will be available soon in accordance with the 2027 ISE guidelines."}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <HeroSection
        title={topic.title}
        subtitle={topic.subtitle}
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl">
          <div className="prose prose-lg max-w-none text-[#003466] mb-12">
            <p className="text-xl text-primary font-medium leading-relaxed">
              {topic.introContent}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ChecklistCard
              title={t(c.keyFacts, l)}
              items={topic.keyFacts}
            />
            <div className="flex flex-col gap-6">
              <InfoCard
                title={t(c.crucialRiskFactor, l)}
                content={topic.risks}
                type="warning"
              />
              <InfoCard
                title={t(c.associatedResources, l)}
                type="info"
                content={
                  <ul className="space-y-2 mt-2">
                    {topic.resources.map((res, i) => (
                      <li key={i}>
                        <a href={res.url} className="text-amada-teal font-semibold hover:underline">
                          🔗 {res.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {topic.nextTopic ? (
        <CTASection
          title={t(c.continuelearning, l)}
          description={l === "az"
            ? `Növbəti əsas təmiz idman mövzusuna keçin: ${topic.nextTopic.label}.`
            : `Move on to the next essential clean sport topic: ${topic.nextTopic.label}.`}
          primaryAction={{
            label: l === "az"
              ? `${topic.nextTopic.label} haqqında öyrən`
              : `Learn about ${topic.nextTopic.label}`,
            path: `/${lang}/education/topics/${topic.nextTopic.slug}`
          }}
          variant="light"
        />
      ) : (
        <CTASection
          title={l === "az" ? "Mövzular Mərkəzinə Qayıt" : "Return to Topics Hub"}
          description={l === "az" ? "Digər məcburi təhsil mövzularını nəzərdən keçirin." : "Review other mandatory education topics."}
          primaryAction={{ label: t(c.viewAllTopics, l), path: `/${lang}/education/topics` }}
          variant="light"
        />
      )}
    </div>
  );
}
