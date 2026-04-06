import { HeroSection } from "@/components/shared/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { translations, t, type Lang } from "@/i18n/translations";
import { CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";

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

// Slug aliases — maps URL slugs to data keys (avoids duplicate content blocks)
const SLUG_ALIASES: Record<string, string> = {
  "consequences-of-doping": "consequences",
  "anti-doping-system": "governance",
  "values-and-ethics": "values-clean-sport",
};

// AZ overrides for fallback topics — full ISE content from AMADA_Website_Content_AZ.docx
const TOPICS_FALLBACK_AZ: typeof TOPICS_FALLBACK = {
  "testing-procedures": {
    title: "Sınaq prosedurları",
    subtitle: "Bildirişdən sənədləşdirməyə qədər — dopinq nəzarəti zamanı addım-addım nə baş verdiyini öyrənin.",
    introContent: "Dopinq nəzarəti WADA-nın Test etmə və Araşdırmalar üzrə Beynəlxalq Standartına (IST) uyğun həyata keçirilir. İstənilən vaxt, istənilən yerdə — məşq zamanı, evdə, yarış məntəqəsindəhətta tətil günündə belə — xəbərdarlıq olmadan dopinq nəzaratına çağırıla bilərsiniz. Prosesin hər addımını bilmək sizin hüququnuzu qoruyur.",
    keyFacts: [
      "Addım 1 — Seçilmə: İdmançı risk əsaslı, fərdi hədəflənmiş və ya təsadüfi seçim üsulu ilə müəyyən edilir.",
      "Addım 2 — Bildiriş: Dopinq Nəzarəti İnspektoru (DNİ) şəxsiyyət vəsiqəsini göstərir, hüquq və öhdəliklərinizi izah edir. Bildiriş anından nümunə toplanması başa çatanadək nəzarət altında qalmalısınız.",
      "Addım 3 — Məntəqəyə getmə: Gecikmədən Dopinq Nəzarəti Məntəqəsinə (DNM) getməlisiniz. Mükafat mərasimi kimi zəruri öhdəliklər üçün məhdud vaxt verilə bilər.",
      "Addım 4 — Dəst seçimi: Bir neçə möhürlü nümunə toplama dəstindən birini özünüz seçirsiniz. Bu sizin nümunənin bütövlüyünü təsdiq etmənizdir.",
      "Addım 5 — Nümunə toplanması: Sidik nümunəsi üçün minimum 90 ml tələb olunur. Lazım olduqda qan nümunəsi də alına bilər.",
      "Addım 6 — Bölünmə & möhürlənmə: Nümunə A şüşəsinə (sınaq üçün) və B şüşəsinə (ehtiyat üçün) bölünür. Hər şüşə unikal kodla möhürlənir.",
      "Addım 7 — Sənədləşdirmə: Dopinq Nəzarəti Formasını (DNF) diqqətlə oxuyub imzalayın. İrad və qeydlərinizi bu formada yazın.",
      "Addım 8 — Laboratoriya: Nümunə WADA akkreditasiyalı laboratoriyaya göndərilir. Analiz nəticəsi Qeyri-əlverişli olduqda (AAF) Nəticənin İdarə Edilməsi prosesi başlayır.",
      "İdmançı Bioloji Pasportu (İBP): Birbaşa maddə axtarmır — qan biologiyasındakı uzunmüddətli anormal dəyişiklikləri izləyərək dopinq istifadəsinə işarə edir.",
    ],
    risks: "Nümunə verməkdən imtina etmək, bildirişdən sonra inspektoru tərk etmək və ya Dopinq Nəzarəti Məntəqəsinə gəlməmək — bunların hər biri müstəqil Antidopinq Qayda Pozuntusudur (AQAQP) və standart 4 illik diskvalifikasiyaya yol açır. 'Hazır deyildim' və ya 'xəbərim olmadı' bəhanəsi qəbul edilmir.",
    resources: [
      { label: "WADA Test etmə Standartı (IST)", url: "https://www.wada-ama.org" },
      { label: "AMADA Sınaq Sualları: education@amada.az", url: "mailto:education@amada.az" },
    ],
    nextTopic: { label: "Ciddi məsuliyyət", slug: "strict-liability" },
  },
  "prohibited-list": {
    title: "Qadağan Edilmiş Siyahı",
    subtitle: "WADA tərəfindən hər il yenilənən bu siyahı — idmançı üçün ən vacib sənəddir. Hər il 1 yanvarda oxuyun.",
    introContent: "Qadağan Edilmiş Siyahı WADA-nın idmanda istifadəsi qadağan edilmiş maddə və üsulların rəsmi siyahısıdır. Siyahı hər il yenilənir — öncəki il qanuni olan bir maddə bu il qadağan edilmiş ola bilər. İdmançı olaraq siyahının aktual versiyasını bilmək — Ciddi Məsuliyyət prinsipi əsasında — sizin şəxsi öhdəliyinizdir.",
    keyFacts: [
      "Siyahıya daxilolma meyarı: Bir maddə aşağıdakılardan minimum ikisini ödəyirsə qadağan edilir — (1) idman göstəricilərini artırma potensialı, (2) sağlamlığa zərər, (3) idmanın ruhuna zidd olması.",
      "S0 — Hər zaman qadağan (yarışkənar daxil): Onaylı terapevtik istifadəsi olmayan bütün farmakologik maddələr. Bu kateqoriya yeni dizayner dərmanları əhatə edir.",
      "S1 — Anabolik agentlər: Anabolik steroidlər (testosteron, stanozolol), seçici androgen reseptor modulatorları (SARM). Yarışda və yarışkənar qadağandır.",
      "S2 — Peptid hormonlar, böyümə faktorları: EPO (eritropoietin), insan böyümə hormonu (HGH), IGF-1. Yarışda və yarışkənar qadağandır.",
      "S3 — Beta-2 agonistlər: Astma müalicəsində istifadə olunan bir sıra maddələr yalnız Tİİ ilə icazəlidir.",
      "S4 — Hormon və metabolik modulyatorlar: Aromataz inhibitorları, insulin. Yarışda və yarışkənar qadağandır.",
      "S5 — Diuretiklər & maskelər: Başqa qadağan maddələri gizlətmək üçün istifadə edilir. Yarışda və yarışkənar qadağandır.",
      "S6–S9 — Yalnız yarış dövründə qadağan: Stimullaşdırıcılar (amfetamin, psevdoefedrin), narkotiklər (morfin), kanabioidlər (THC/marihuana), kortikosteroidlər.",
      "M seriyası — Qadağan edilmiş üsullar: Qan manipulyasiyası (transfuziya, sun'i daşıyıcılar), gen dopinqi, kimyəvi/fiziki saxtalaşdırma.",
      "P seriyası — Xüsusi idman növlərindəqadağan: Beta-blokerlər atıcılıq, oxatma, golf kimi dəqiqlik tələb edən idman növlərindəqadağandır.",
    ],
    risks: "Siyahı hər il dəyişir. Keçən il istifadə etdiyiniz bir əlavə bu il qadağan edilmiş ola bilər. Əgər düzenli istifadə etdiyiniz bir dərman və ya əlavə varsa — hər il yanvarda yenidən yoxlayın.",
    resources: [
      { label: "Aktual WADA Qadağan Edilmiş Siyahısı (hər il yenilənir)", url: "https://www.wada-ama.org/en/prohibited-list" },
      { label: "GlobalDRO — Dərman Yoxlaması", url: "https://www.globaldro.com" },
    ],
    nextTopic: { label: "Sınaq prosedurları", slug: "testing-procedures" },
  },
  "tue": {
    title: "Terapevtik İstifadə İcazəsi (Tİİ)",
    subtitle: "Tibbi zərurətiniz var — amma dərmanınız siyahıdadır. Tİİ prosesi ilə yarışmağa hüququnuzu qoruyun.",
    introContent: "İdmançılar da xəstələnir, zədə alır, xroniki tibbi vəziyyətlərə sahib olur. Astma, şəkərli diabet, ADHD, tiroid xəstəliyi — bunlar tez-tez rast gəlinən tibbi vəziyyətlərdir. Lakin bu xəstəliklərin müalicəsindəistifadə olunan bəzi dərmanlar Qadağan Edilmiş Siyahıda yer alır. Terapevtik İstifadə İcazəsi (Tİİ) — idmançının tibbi ehtiyacı ilə antidopinq uyğunluğu arasındakı körpüdür.",
    keyFacts: [
      "Tİİ almaq üçün 4 şərt (ISTUE Maddə 4.1) eyni vaxtda ödənməlidir:",
      "1. Zərurət: Müalicə edilməsə tibbi vəziyyətin əhəmiyyətli dərəcədəpisləşəcəyi sübut edilməlidir.",
      "2. Alternativin olmaması: Qadağan edilməmiş ağlabatan heç bir müalicə seçimi mövcud olmamalıdır.",
      "3. Performans artımı yoxdur: İstifadədən əlavə performans artımı gözlənilməməlidir.",
      "4. Maddə öncədən qəbul edilməyib: Tibbi vəziyyət qadağan maddə qəbulundan yaranmamalıdır.",
      "Müraciət prosesi: Tibbi sənədləri hazırlayın → ADAMS-da ərizə doldurun → Tİİ Komitəsi 30 gün (təcili hallarda 24 saat) ərzində qərar verir.",
      "Kim kimə müraciət edir: Milli səviyyəli idmançılar AMADA-ya, beynəlxalq səviyyəli idmançılar müvafiq Beynəlxalq Federasiyaya müraciət edir.",
      "Müddət: Tİİ-lərin bitmə tarixi var. Dərmanı davam etdirmək üçün vaxtında yeniləmə müraciəti edilməlidir.",
      "Retroaktiv Tİİ: Tibbi fövqəladə hallarda istifadədən sonra da müraciət mümkündür — lakin bu halı izah etmək idmançının öhdəsinə düşür.",
      "Apellyasiya: Rədd edildikdə İdman Arbitraj Məhkəməsinə (CAS) müraciət hüququ mövcuddur.",
    ],
    risks: "Həkimin yazdığı resept Tİİ-nin əvəzini tutmur. Approved TUE olmadan qadağan maddəni istifadə etmək — hətta tibbi zərurət olsa belə — antidopinq qayda pozuntusudur. Müraciəti yarışdan çox əvvəl — ideal olaraq mövsüm başlamazdan öncə — edin.",
    resources: [
      { label: "Tİİ Müraciəti: education@amada.az (mövzu: 'Tİİ müraciəti')", url: "mailto:education@amada.az" },
      { label: "ADAMS platforması (ərizə üçün)", url: "https://adams.wada-ama.org" },
      { label: "WADA ISTUE Beynəlxalq Standartı", url: "https://www.wada-ama.org" },
    ],
    nextTopic: { label: "Dərmanlar", slug: "medications" },
  },
  "supplements-risk": {
    title: "Əlavə qidaların riski",
    subtitle: "Niyə heç bir əlavə 100% təhlükəsiz deyil — və AMADA 'Qida Öncəlikli' yanaşmanı tövsiyə edir.",
    introContent: "Dünya miqyasında idmançıların antidopinq qayda pozuntularının əhəmiyyətli bir hissəsi qida əlavələrindən qaynaqlanır. Əlavə sənayesi dərman sənayesi qədər ciddi tənzimlənmir — bu o deməkdir ki, etiketdə yazılmayan maddələr tərkibdə ola bilər. AMADA ilk tövsiyəsi həmişə 'Qida Öncəlikli' yanaşmadır: zəruri olmayan heç bir əlavə qəbul etməyin.",
    keyFacts: [
      "Zəif tənzimləmə: Qida əlavəsi istehsalçıları məhsulu satışa çıxarmadan əvvəl dövlət tərəfindən yoxlanmır. Dərman istehsalçılarından fərqli olaraq, onlar zəmanət vermir.",
      "Gizli maddələr: Bir sıra əlavələr etiketdə göstərilməyən anabolik maddələr, stimullaşdırıcılar və ya hormonlar ehtiva edir. Bəzən bu qəsdən edilir, bəzən isə istehsal xətasıdır.",
      "Çarpaz çirklənmə: Eyni istehsal xəttindəhəm qanuni, həm qadağan maddələr istehsal olunarsa — kiçik miqdar belə nümunədə aşkar edilə bilər.",
      "Alternativ adlar: Qadağan maddənin kimyəvi adı istehsalçı tərəfindən yenidən adlandırılmış ola bilər. Etiketdə tanıdıq görünən maddə adı həqiqətdə qadağan bir maddə ola bilər.",
      "İnternet satışı: Online platformalarda alınan əlavələr — əsasən bədən qurma üçün nəzərdə tutulmuş məhsullar — ən yüksək risk kateqoriyasındadır.",
      "'Bitki mənşəli' & 'Təbii': Bu etiketlər hüquqi müdafiə vermir. Bir çox güclü qadağan maddə bitki mənşəlidir.",
      "Üçüncü tərəf sertifikasiyası (Informed Sport, NSF): Bu yoxlamalar riski əhəmiyyətli dərəcədəazaldır, lakin tamamilə aradan qaldırmır. Hər partiya ayrıca yoxlanmır.",
      "Ciddi Məsuliyyət: Kontaminasiya sübut edilsə belə — idmançı sanksiyadan tam xilas olmur. Yalnız cəzanın azaldılmasını tələb edə bilər.",
    ],
    risks: "Son illərdə dünyada çoxsaylı idmançı yüksək performans göstərərək beynəlxalq yarışlara hazırlaşan bir dövrdə — qida əlavəsindəki gizli maddəyə görə karyeralarını itiriblər. 'Bilmirdim' bəhanəsi məhkəmədə cəzanı aradan qaldırmır, yalnız bəzən azaldır. Əlavə qəbul etməzdən əvvəl AMADA ilə məsləhətləşin.",
    resources: [
      { label: "Informed Sport — Əlavə Sertifikasiyası", url: "https://www.informed.sport" },
      { label: "AMADA məsləhəti: education@amada.az", url: "mailto:education@amada.az" },
    ],
    nextTopic: { label: "Ciddi məsuliyyət", slug: "strict-liability" },
  },
  "strict-liability": {
    title: "Ciddi məsuliyyət",
    subtitle: "Bədəninizə daxil olan hər maddəyə görə şəxsən məsuliyyət daşıyırsınız — niyyətinizdən asılı olmayaraq.",
    introContent: "Ciddi Məsuliyyət (Strict Liability) — Ümumdünya Antidopinq Məcəlləsinin ən fundamental prinsipidir. Bu prinsip ədaləti qorumaq üçün mövcuddur: inspektorlar hər idmançının niyyətini sübut etmək imkanına malik deyil. Buna görə qayda sadədir — bədəninizdə tapılan maddəyə görə məsuliyyət sizindir.",
    keyFacts: [
      "Əsas qayda: Qeyri-əlverişli Analiz Nəticəsi (AAF) olduqda idmançı maddəni bilərəkdən istifadə etdiyini SÜBUT ETMƏK məcburiyyətINDƏ DEYİL.",
      "Niyyət sübut tələb edilmir: Maddənin bədəninizə necə daxil olduğu sübut edilmədən belə pozuntu sabit sayılır.",
      "Cəzanın azaldılması: İdmançı maddənin bilmədən qəbul edildiyini (məs. kontaminasiya) sübut edərsə, cəza azaldıla bilər — lakin bu sübut yükü tamamilə idmançının üzərindədir.",
      "Başqasının verdiyi maddə: Məşqçiniz, həkiminiz, yaxın dostunuz veribsə belə — məsuliyyət sizdədir. Başqa birini günahlandırmaq cəzanı aradan qaldırmır.",
      "'Bilmirdim' bəhanəsi yoxdur: Antidopinq hüququnda cahillik müdafiə kimi qəbul edilmir.",
      "Qida əlavəsi çirklənməsi: Ən çox görülən 'bilmədən' pozuntu hallarından biridir. Bu sübut olunduqda cəza azaldıla bilər, lakin tamamilə aradan qalxmır.",
      "Nə etməli: Hər dərman, qida əlavəsi, bitki çayı, vitamin — GlobalDRO (globaldro.com) və ya AMADA ilə yoxlayın. Şübhəli olduqda qəbul etməyin.",
    ],
    risks: "'Bilmirdim', 'Həkim yazdı', 'Arkadaşım verdi', 'Əlavənin üzündə qadağan maddə yazılmamışdı' — bunların heç biri antidopinq hüququnda tam müdafiə deyil. Nəticə həmişə eynidir: sübut yükü sizin üzərinizdədir. Bu prinsip ağır görünə bilər — amma eyni qaydanın bütün idmançılara bərabər tətbiqi yarışın ədalətini qoruyur.",
    resources: [
      { label: "WADA Məcəlləsi Maddə 2.1 (Strict Liability)", url: "https://www.wada-ama.org" },
      { label: "GlobalDRO Dərman Yoxlaması", url: "https://www.globaldro.com" },
    ],
    nextTopic: { label: "Terapevtik İstifadə İcazəsi (Tİİ)", slug: "tue" },
  },
  "consequences": {
    title: "Dopinqin fəsadları",
    subtitle: "Dopinq vasitələrinin istifadəsi sağlamlıq, sosial həyat, karyera və nüfuz üzərindəağır, bəzən geri dönüşsüz fəsadlar doğurur.",
    introContent: "Dopinq bir anlıq üstünlük vəd etsə də, uzunmüddətli dəyəri çox yüksəkdir. Sağlamlıq zərərləri illərlə — hətta idmandan çıxdıqdan sonra da — davam edə bilər. Sanksiyalar isə yalnız yarışdan kənarlaşdırılmaqla bitmir: karyera, nüfuz, ailə, maddi vəziyyət — hamısı birlikdə dağılır.",
    keyFacts: [
      "Anabolik steroidlər: Ürək-damar sistemi — aritmiya, hipertrofiya, qəfləti ölüm riski. Qaraciyər zədəsi, onkoloji xəstəliklərin sürətlənməsi. Kişilərdə: sonsuzluq, libido pozğunluğu. Qadınlarda: menstrual pozğunluq, kişilik cizgilərinin inkişafı.",
      "Stimullaşdırıcılar (amfetaminlər, kokain): Psixi asılılıq, aqressiya, yuxusuzluq, depressiya, qan təzyiqinin sıçraması, qəfləti ürək dayanması riski.",
      "EPO (eritropoietin): Qanın qatılaşması — insult, ürək tutması, ağciyər emboliyası riski. Yüksək dozada ölümcüldür.",
      "Böyümə hormonu (HGH): Akromeqaliya (üz, əl, ayaqların qeyri-proporsional böyüməsi), şəkərli diabet, oynaq ağrıları.",
      "İdman sanksiyaları: İlk pozuntuda 4 illik diskvalifikasiya standartdır. Ağırlaşdırıcı hallar olduqda ömürlük qadağa tətbiq edilir.",
      "Nəticələrin ləğvi: Sanksiya dövrünü əhatə edən bütün yarış nəticələri, medallar, reytinq xalları avtomatik ləğv edilir.",
      "Maliyyə: Dövlət dəstəkləri, sponsor müqavilələri, federasiya stipendiyaları — sanksiya ilə birlikdə dayandırılır.",
      "Karyeranın sonu: 4 illik qadağa demək əksər idmançılar üçün aktiv karyeranın sona çatması deməkdir. Geri qayıtmaq isə nadir haldır.",
      "Sosial nüfuz: Media, ictimaiyyət, ailə — bir müsbət nəticə ictimai damğaya çevrilir. Bu psixoloji zərər çox vaxt hüquqi cəzadan da ağır olur.",
    ],
    risks: "Dopinq istifadəsinin nəticəsi yalnız bir sanksiya deyil — sağlamlığın, karyeranın, maliyyənin və nüfuzun birdəfəlik itirilməsidir. Rəqibləriniz haqqında da düşünün: siz qazan, onlar itirir. Bu ədalətsizlik sizi sağ çıxarsın deyə, sistemi ədalətsizləşdirir.",
    resources: [
      { label: "WADA Sağlaqlıq Riskləri", url: "https://www.wada-ama.org/en/health-and-research" },
      { label: "WADA Antidopinq Məcəlləsi", url: "https://www.wada-ama.org/en/what-we-do/the-code" },
    ],
    nextTopic: { label: "Antidopinq sisteminin idarəçiliyi", slug: "anti-doping-system" },
  },
  "governance": {
    title: "Antidopinq sisteminin idarəçiliyi",
    subtitle: "WADA-dan AMADA-ya — qlobal antidopinq quruluşunun Azərbaycandakı tətbiqi.",
    introContent: "Antidopinq sistemi heç bir tək qurum tərəfindən deyil, çoxsəviyyəli beynəlxalq bir şəbəkə tərəfindən idarə olunur. Bu şəbəkənin hər halqası ayrı rol oynayır. İdmançı olaraq bu quruluşu bilmək — kimin hansı sualınıza cavab verəcəyini, harada kömək axtaracağınızı bilmək — sizin üçün birbaşa faydalıdır.",
    keyFacts: [
      "WADA (Ümumdünya Antidopinq Agentliyi): 1999-cu ildə qurulub. Ümumdünya Antidopinq Məcəlləsini, Qadağan Edilmiş Siyahını və bütün Beynəlxalq Standartları hazırlayır. Uyğunluğu izləyir, akkreditasiyalı laboratoriyalar şəbəkəsini idarə edir.",
      "AMADA (Azərbaycan Milli Antidopinq Agentliyi): Azərbaycanda antidopinq siyasətinin icraçısıdır. Milli test proqramını həyata keçirir, təhsil verir, Tİİ müraciətlərini nəzərdən keçirir.",
      "Beynəlxalq Federasiyalar (IF): Öz idman növlərinin beynəlxalq yarışlarında test proqramını idarə edir. Beynəlxalq səviyyəli idmançılar üçün müvafiq IF-ə müraciət etmək lazım ola bilər.",
      "Milli Federasiyalar: Ölkə daxilindəki çempionat sistemini idarə edir. AMADA ilə birgə seminar planı hazırlayır.",
      "ADAMS (Antidopinq İnzibatçılıq və İdarəetmə Sistemi): WADA-nın rəqəmsal platformasıdır. İdmançılar məkan məlumatlarını buraya daxil edir, Tİİ müraciətlərini izləyirlər.",
      "CAS (İdman Arbitraj Məhkəməsi): Antidopinq işlərini müstəqil nəzərdən keçirir. WADA-dan, AMADA-dan, federasiyadan asılı deyil.",
      "Ümumdünya Antidopinq Məcəlləsi hər 4 ildə yenilənir. Hazırda 2027-ci il versiyası qüvvədədir. Azərbaycan Respublikası imzaçı dövlətdir.",
    ],
    risks: "İdmançının hansı federasiyanın (milli, yoxsa beynəlxalq) siyasətinə tabe olduğunu bilməməsi əlavə pozuntulara yol aça bilər. Beynəlxalq yarışlarda iştirak etmisinizsə — IF-in tələblərini ayrıca öyrənin.",
    resources: [
      { label: "WADA-nın rəsmi saytı", url: "https://www.wada-ama.org" },
      { label: "ADAMS platforması", url: "https://adams.wada-ama.org" },
      { label: "AMADA: education@amada.az", url: "mailto:education@amada.az" },
    ],
    nextTopic: { label: "Dəyərlər & Etika", slug: "values-and-ethics" },
  },
  "values-clean-sport": {
    title: "Dəyərlər & Təmiz İdman prinsipləri",
    subtitle: "İdmanın ruhu — yarışın texniki qaydalardan çox dərin insan dəyərlərinə əsaslandığını anlayın.",
    introContent: "Ümumdünya Antidopinq Məcəlləsi antidopinqin əsasına 'İdmanın Ruhu' anlayışını qoyur. Bu ruh — insanın ən yüksək mənəvi xüsusiyyətlərinin ifadəsidir. Dopinq bu ruhu birbaşa alçaldır. AMADA-nın dəyər əsaslı təhsili qaydaları ezberləməkdən deyil, bu dəyərləri daxildən hiss etməkdən başlayır.",
    keyFacts: [
      "Dürüstlük & Ədalətli oyun: Hər yarış əxlaq çərçivəsindəaparılmalıdır. Qalib gəlmək üçün yollar seçərkən bu dəyər kompas rolunu oynayır.",
      "Sağlamlıq: İdman bədəni gücləndirir, sağlamlığı qoruyur. Dopinq isə bunu tam tərsinə çevirir — bədəni zədələyir, həyatı qısaldır.",
      "Üstünlük & Əzmkarlıq: Nailiyyətlər bioloji üstünlüklərə deyil, təbii bacarıq, əzmkarlıq və fədakarlığa əsaslanmalıdır.",
      "Xarakter & Təhsil: İdman çətin anlarda xarakteri üzə çıxarır. Qaybetmə qarşısındakı əzmkarlıq qalibiyyətdən daha çox nəyi öyrədir.",
      "Əyləncə & Sevinc: İdmanın ilkin məqsədi oyunun sevincini yaşamaqdır. Bu duyğu dopinqlə əldə edilən qalibiyyətdə yox olur.",
      "Komanda ruhu: Birlikdə nail olmaq — paylaşılmış zəfər — fərdi şöhrətdən daha güclü bir motivasiyadır.",
      "Hörmət: Rəqibə, hakimə, qaydaya və özünüzə hörmət — sağlam rəqabətin əsasıdır.",
      "Cəsarət: Dürüst olmaq, qaydalara uymaq, cazibedar tənliflərə 'xeyr' demək — bütün bunlar cəsarət tələb edir.",
      "İctimai ruh: İdman icmaya məxsusdur. Bir dopinq işi bütün idman növünü, ölkəni, nəsli ləkələyir.",
    ],
    risks: "Dəyərlərə əsaslanmayan idman mühiti dopinqi, saxtakarlığı və manipulyasiyanı tədricən normallaşdırır. Gənc idmançılar karyeralarının ilk illərindəbu mühitdən formalaşırlarsa — korreksiya çox çətin olur. Erkən yaşda səlim dəyərlərin aşılanması ən güclü antidopinq vasitəsidir.",
    resources: [
      { label: "WADA Dəyər Əsaslı Təhsil Proqramı", url: "https://www.wada-ama.org/en/what-we-do/education-prevention/values-education" },
      { label: "AMADA Məktəb Proqramları haqqında: education@amada.az", url: "mailto:education@amada.az" },
    ],
    nextTopic: { label: "Məkan məlumatı & ADAMS", slug: "whereabouts-adams" },
  },
  "whereabouts-adams": {
    title: "Məkan məlumatı & ADAMS",
    subtitle: "Qeydiyyata alınmış Test Qrupuna (QTQ) daxil olan idmançılar üçün məcburi öhdəliklərin tam bələdçisi.",
    introContent: "Yarışkənar dopinq nəzarəti — antidopinq sisteminin ən güclü alətlərindən biridir. Lakin inspektorun sizi tapa bilməsi üçün hər gün harada olduğunuzu sistemə daxil etməlisiniz. Bu öhdəlik Qeydiyyata alınmış Test Qrupuna (QTQ) daxil olan bütün idmançılara aiddir. Lazımi diqqət göstərilmədikdə sadə bir buraxılmış məlumat belə antidopinq qayda pozuntusuna çevrilə bilər.",
    keyFacts: [
      "ADAMS (adams.wada-ama.org) — WADA-nın rəsmi məkan məlumatı platformasıdır. iOS və Android üçün rəsmi tətbiqi mövcuddur.",
      "Rüblük bildiriş: Hər rübün son günü saat 23:59-a qədər növbəti rüb üçün məkan məlumatı daxil edilməlidir.",
      "Günlük test pəncərəsi: Hər gün minimum 60 dəqiqəlik bir zaman aralığı müəyyən edilməlidir. Bu pəncərə ərzində inspektoru qəbul etməyə hazır olmalısınız.",
      "Daxil edilməli məlumat: Gecələmə yeri (ev, otel, yataqxana), gündəlik məşq yeri, yarış cədvəli, ünvan, kontakt nömrəsi.",
      "Dəyişiklik qaydası: Planlarınız dəyişdikdə test pəncərəsindən ƏVVƏL ADAMS-ı yeniləyin. Gecikmiş yeniləmə Buraxılmış Test sayıla bilər.",
      "Buraxılmış test (Missed Test): İnspektoru müəyyən etdiyiniz pəncərədə tapılmamaq — 1 itirilmiş test hesab olunur.",
      "Məlumat Verməmə (Filing Failure): Rüblük bildirişi vaxtında tamamlamamaq — 1 itirilmiş məlumat hesab olunur.",
      "12 aylıq dövrdəhər hansı kombinasiyada 3 pozuntu (Buraxılmış test + Məlumat Verməmə) = Antidopinq Qayda Pozuntusu.",
    ],
    risks: "Müsbət dopinq testi olmadan da — yalnız məkan məlumatı öhdəliklərini yerinə yetirməməkdən — 2 illik diskvalifikasiya ala bilərsiniz. ADAMS-ı mütəmadi yeniləyin, tətbiqi telefonunuzda aktiv saxlayın.",
    resources: [
      { label: "ADAMS platforması", url: "https://adams.wada-ama.org" },
      { label: "AMADA QTQ sualları: education@amada.az", url: "mailto:education@amada.az" },
    ],
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
      "Hüquq: Dopinq Nəzarəti Formasına (DNF) irad və qeydləri daxil etmək.",
      "Hüquq: Məxfilik — şəxsi tibbi məlumatlarınız yalnız icazə verdiyiniz hallarda paylaşılır.",
      "Öhdəlik: İstənilən vaxt dopinq nəzaratına tabe olmaq.",
      "Öhdəlik: Bütün qida əlavələri, dərmanlar barədə məsuliyyət daşımaq.",
      "Öhdəlik: QTQ üzvləri üçün məkan məlumatını vaxtında ADAMS-a daxil etmək.",
      "Öhdəlik: Tibb mütəxəssislərinə idmançı olduğunuzu bildirmək.",
    ],
    risks: "Hüquqlarınızı bilməmək qayda pozuntularına səbəb ola bilər; öhdəliklərinizi yerinə yetirməmək isə birbaşa sanksiya ilə nəticələnir.",
    resources: [{ label: "İdmançıların Antidopinq Hüquqları Aktı", url: "https://athletesrights.org" }, { label: "WADA Məcəlləsi Maddə 21", url: "https://www.wada-ama.org" }],
    nextTopic: { label: "Dopinqin fəsadları", slug: "consequences-of-doping" },
  },
  "medications": {
    title: "Dərmanlar",
    subtitle: "Hər hansı dərmanı qəbul etməzdən əvvəl idmanda istifadəsi üçün təhlükəsizliyini yoxlayın.",
    introContent: "İdmançılar da hər kəs kimi xəstəliyə tutulur, zədə alır, müalicəyə ehtiyac duyur. Lakin adi resept dərmanlar, həkimsiz alınan preparatlar, hətta bitkisel məhsullar belə Qadağan Edilmiş Siyahıda olan maddələri ehtiva edə bilər. Bunu bilmədən qəbul etmək Ciddi Məsuliyyət prinsipi çərçivəsindəsanksiyaya yol aça bilər. Hər dərman — istifadə etməzdən əvvəl — mütləq yoxlanılmalıdır.",
    keyFacts: [
      "GlobalDRO (globaldro.com) — WADA-nın rəsmi dərman yoxlama platformasıdır. Dərmanın adını, istehsalçısını və ölkəsini daxil edin, idmanda istifadə statusunu öyrənin.",
      "GlobalDRO yalnız rəsmi dərmanları əhatə edir — qida əlavələri bu siyahıda olmur. Əlavələr ayrıca risk kateqoriyasıdır.",
      "Resept olmadan alınan dərmanlar da risklidir: psevdoefedrin ehtiva edən soyuqdəymə preparatları, bəzi ağrıkəsicilər, kortikosteroid əsaslı kremler.",
      "Eyni aktiv maddə fərqli ölkələrdə fərqli statusda ola bilər — GlobalDRO-da ölkənizi düzgün seçin.",
      "Həkimə müraciət etdikdə idmançı olduğunuzu açıq şəkildə bildirin. Bu məlumat müalicə seçimini dəyişə bilər.",
      "Dərman Qadağan Edilmiş Siyahıda olduqda, yarışdan əvvəl AMADA-ya müraciət edərək Terapevtik İstifadə İcazəsi (Tİİ) alın.",
      "Bəzi maddələr yalnız yarış dövründə qadağandır (S6–S9 kateqoriyaları). Yarış tarixlərini nəzərə alaraq dərman istifadəsini planlaşdırın.",
      "Şübhəli olduğunuzda gözləyin və AMADA-ya müraciət edin: education@amada.az",
    ],
    risks: "Həkimin yazdığı reseptə güvənmək kifayət deyil. Ciddi Məsuliyyət prinsipi çərçivəsindəidmançı özü cavabdehdir — 'Həkim yazdı' bəhanəsi antidopinq hüququnda qanuni müdafiə sayılmır. Düzgün yoxlanmayan bir dərman uğurla qazanılmış medalı, neçə illik karyeranı məhv edə bilər.",
    resources: [
      { label: "GlobalDRO — Dərman Yoxlaması", url: "https://www.globaldro.com" },
      { label: "WADA Qadağan Edilmiş Siyahısı", url: "https://www.wada-ama.org/en/prohibited-list" },
      { label: "Tİİ Müraciəti: education@amada.az", url: "mailto:education@amada.az" },
    ],
    nextTopic: { label: "Əlavə qidaların riski", slug: "supplements-risk" },
  },
  "reporting-doping": {
    title: "Dopinqi Bildirmək",
    subtitle: "Şübhəli vəziyyəti gördükdə necə təhlükəsiz, anonim şəkildə məlumat verməyin yolları.",
    introContent: "Hər kəs — idmançı, məşqçi, valideyn, tibb mütəxəssisi, ya da sadəcə idman sevəri — şübhəli dopinq fəaliyyəti barədə məlumat verə bilər. Bu yalnız bir hüquq deyil, eyni zamanda təmiz idmanı qorumaq üçün mühüm bir vəzifədir. Susqunluq öz növbəsində dopinq mədəniyyətinin davam etməsinə şərait yaradır.",
    keyFacts: [
      "WADA Speak Up! (speakup.wada-ama.org) — beynəlxalq, 24 saat/7 gün əlçatan, tam anonim bildiriş platformasıdır. Bir neçə dildə istifadə olunur.",
      "AMADA-ya birbaşa müraciət: education@amada.az — mövzu: 'Narahatlığı Bildir'. Onlayn forma da amada.az saytında mövcuddur.",
      "Məlumat verən şəxsin kimliyinin açıqlanması qanunla qadağandır. Bütün müraciətlər ciddi məxfilik çərçivəsindəidarə edilir.",
      "Ümumdünya Antidopinq Məcəlləsi, Maddə 17: məlumat verənlərə hər hansı qisas alınmasını açıq şəkildə qadağan edir.",
      "Məlumatda nə qədər detal olarsa, araşdırma bir o qədər effektiv olar: şübhəli şəxs, vaxt, yer, müşahidə etdiyiniz davranış.",
      "Məlumat əsassız çıxarsa da, vicdanla məlumat vermişsinizsə heç bir hüquqi məsuliyyət yaranmır.",
      "İdmançı yoldaşınız barədə şübhəniz olduqda onu birbaşa üzləşdirməyin — bu ağır nəticələrə yol aça bilər. Anonim kanallardan istifadə edin.",
      "Dopinq barəsindəki hər məlumat sistem üçün dəyərlidir — hətta dolayı şübhə belə araşdırmaya rəvac verə bilər.",
    ],
    risks: "Susqunluq günahsız idmançılara zərər verir, yarış şəraitini ədalətsizləşdirir. Məlumat vermək cəsarət tələb edir, lakin qanun məlumat verəni tam qoruyur. Əgər gördüklərinizə şübhə edirsinizsə — bildirin.",
    resources: [
      { label: "WADA Speak Up! Platforması", url: "https://speakup.wada-ama.org" },
      { label: "AMADA Bildiriş: education@amada.az", url: "mailto:education@amada.az" },
    ],
    nextTopic: { label: "Antidopinq Qayda Pozuntuları", slug: "anti-doping-rule-violations" },
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
        : { label: "Rights and Responsibilities", slug: "rights-and-responsibilities" },
    };
  } else {
    const resolvedSlug = SLUG_ALIASES[slug] ?? slug;
    const fallback = l === "az" && TOPICS_FALLBACK_AZ[resolvedSlug]
      ? TOPICS_FALLBACK_AZ[resolvedSlug]
      : TOPICS_FALLBACK[resolvedSlug];

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

      <div className="flex flex-col gap-10">

        {/* Lead paragraph */}
        <div className="border-l-4 border-amada-teal pl-5">
          <p className="text-[17px] text-[#003466] font-medium leading-relaxed">
            {topic.introContent}
          </p>
        </div>

        {/* Key facts */}
        <div>
          <h2 className="text-lg font-bold text-[#003466] mb-5 pb-3 border-b border-slate-100 uppercase tracking-wide">
            {t(c.keyFacts, l)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {topic.keyFacts.map((fact, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-amada-teal/30 hover:bg-slate-100/60 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-amada-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amada-teal" />
                </div>
                <p className="text-sm text-[#102033] leading-relaxed">{fact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk callout */}
        <div className="bg-[#003466] rounded-2xl p-7 text-white">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-base mb-2">{t(c.crucialRiskFactor, l)}</p>
              <p className="text-blue-100 leading-relaxed text-sm">{topic.risks}</p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col sm:flex-row gap-3 pb-4">
          {topic.resources.map((res, i) => (
            <a
              key={i}
              href={res.url}
              className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
            >
              <ExternalLink className="w-4 h-4 text-[#0055a4] shrink-0" />
              <p className="font-semibold text-[#003466] text-sm group-hover:underline leading-snug">
                {res.label}
              </p>
            </a>
          ))}
        </div>

      </div>

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
