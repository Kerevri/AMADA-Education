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

// AZ overrides for fallback topics
const TOPICS_FALLBACK_AZ: typeof TOPICS_FALLBACK = {
  "testing-procedures": {
    title: "Sınaq Prosedurları",
    subtitle: "Dopinq Nəzarəti üçün bildirildiğinizdə nə gözləmək lazımdır.",
    introContent: "Sınaq (Dopinq Nəzarəti) bərabər rəqabət mühitini təmin etmək üçün həyata keçirilir. Yarışma zamanı və ya yarışma xaricində, öncədən xəbər verilmədən istənilən yerdə, istənilən vaxt sınaqdan keçirilə bilərsiniz.",
    keyFacts: [
      "Dopinq Nəzarəti Zabiti (DNZ) və ya Müşaiyətçi tərəfindən xəbərdar ediləcəksiniz.",
      "DNZ-nin şəxsiyyətini görməyə haqqınız var.",
      "Bildirişdən proses tamamlanana qədər hər zaman DNZ/Müşaiyətçinin birbaşa göz önündə olmalısınız.",
      "Nümayəndə və/ya tərcüməçi atmaq haqqına sahibsiniz.",
      "Sidik nümunəsi, qan nümunəsi və ya hər ikisini verməyiniz xahiş ediləcək.",
      "Nümunələrinizin möhürlənməsini vizual olaraq müşahidə etməlisiniz.",
    ],
    risks: "Nümunə verməkdən imtina etmək və ya bildirilişdən sonra sınaq stansiyasından qaçmaq, Dopinqə Qarşı Qayda Pozuntusu (DQAQP) kimi qəbul edilir və standart 4 illik qadağan cəzasını nəzərdə tutur.",
    resources: [{ label: "Sidik Sınağı Prosesinin Videosu", url: "#" }, { label: "Qan Sınağı Prosesi", url: "#" }],
    nextTopic: { label: "Qadağan Edilmiş Siyahı", slug: "prohibited-list" },
  },
  "prohibited-list": {
    title: "Qadağan Edilmiş Siyahı",
    subtitle: "İdmanda qadağan edilmiş maddə və üsulları müəyyən edən rəsmi beynəlxalq standart.",
    introContent: "WADA-nın Qadağan Edilmiş Siyahısı hər il yanvarın 1-də yenilənir. Yarışma zamanı, yarışma xaricində və müəyyən idman növlərində hansı maddə və üsulların qadağan edildiyi müəyyən edilir.",
    keyFacts: [
      "Hər zaman qadağan olunmuş: Anabolik maddələr, peptid hormonları, diuretiklər, maskalayıcı vasitələr.",
      "Yalnız Yarışma zamanı qadağan olunmuş: Stimulyatorlar, narkotiklər, kannabinoidlər (cannabis/THC), qlükokortikoidlər.",
      "Maddələr 3 meyardan 2-ni ödəsələr əlavə edilir: performansı artırır, sağlamlıq riski yaradır, idmanın ruhunu pozur.",
      "Bədəninizə heç bir qadağan olunmuş maddənin daxil olmamasını təmin etmək SİZİN məsuliyyətinizdirdir.",
    ],
    risks: "Cari Qadağan Edilmiş Siyahı ilə yoxlamadan adi soyuqdəymə dərmanı və ya əlavə qidalar qəbul etmək, təsadüfi müsbət test nəticəsinə gətirib çıxara bilər.",
    resources: [{ label: "Cari WADA Qadağan Edilmiş Siyahısı", url: "#" }, { label: "GlobalDRO Dərman Yoxlaması", url: "#" }],
    nextTopic: { label: "Dərmanlar", slug: "medications" },
  },
  "tue": {
    title: "Terapevtik İstifadə İcazəsi (Tİİ)",
    subtitle: "Qanuni tibbi vəziyyətiniz olduqda necə təmiz rəqabət aparmaq olar.",
    introContent: "İdmançılar, hər kəs kimi, dərman qəbul etməyi tələb edən xəstəliklərə və ya vəziyyətlərə sahib ola bilər. Ehtiyac duyduğunuz dərman Qadağan Edilmiş Siyahıdadırsa, Tİİ üçün müraciət etməlisiniz.",
    keyFacts: [
      "Tİİ sizə DQAQP törətmədən müəyyən tibbi səbəbə görə qadağan olunmuş maddədən istifadə icazəsi verir.",
      "Tibbi fövqəladə hallarda istisna olmaqla, dərmanı istifadə etməzdən ÖNCE AMADA-ya (və ya Beynəlxalq Federasiyanıza) müraciət etməlisiniz.",
      "Müraciətinizə həkiminizdən ətraflı tibbi sənəd əlavə edilməlidir.",
      "Tİİ, WADA-nın Terapevtik İstifadə İcazəsi Beynəlxalq Standartı (TIİBS) tərəfindən müəyyən edilmiş ciddi meyarlara cavab verməlidir.",
    ],
    risks: "Həkim tərəfindən təyin edilsə belə, təsdiqlənmiş Tİİ olmadan qadağan olunmuş maddədən istifadə, sınaqdan keçirilsəniz Dopinqə Qarşı Qayda Pozuntusuna səbəb olacaq.",
    resources: [{ label: "Tİİ Müraciət Forması", url: "#" }, { label: "TIİBS Tələbləri", url: "#" }],
    nextTopic: { label: "Əlavə Qidaların Riski", slug: "supplements-risk" },
  },
  "supplements-risk": {
    title: "Əlavə Qidaların Riski",
    subtitle: "Qida və qidalandırıcı əlavələrin nə üçün təmiz idmançılar üçün ən yüksək risklərden birini yaratdığı.",
    introContent: "Əlavə qida sənayesi zəif tənzimlənir. Dərmanlardan fərqli olaraq, əlavə qidalar satışdan əvvəl ciddi keyfiyyət nəzarətindən keçmir. Bir əlavə qida, etiketdə göstərilməyən qadağan olunmuş maddələr ehtiva edə bilər.",
    keyFacts: [
      "Hər hansı bir əlavə qidanın qadağan olunmuş maddələrdən azad olduğuna dair 100% zəmanət yoxdur.",
      "Etiketlər qeyri-dəqiq ola bilər: qadağan olunmuş inqrediyentlər alternativ adlar altında siyahıya alına bilər.",
      "Çarpaz çirklənmə, həm qanuni, həm də qadağan olunmuş əlavə qidaları istehsal edən fabriqlərdə tez-tez baş verir.",
      "Həmişə 'Əvvəlcə Qida' yanaşmasını tətbiq edin - əlavə qidaları nəzərdən keçirməzdən əvvəl pəhrizinizi optimallaşdırın.",
    ],
    risks: "Bilgisizlik bəhanə deyil. Çirklənmiş əlavə qida müsbət dərman testinə səbəb olarsa, Ciddi Məsuliyyət prinsipi çərçivəsində idmandan qadağan cəzasına məruz qalacaqsınız.",
    resources: [{ label: "Informed Sport Seriya Yoxlaması", url: "#" }, { label: "İdmançılar üçün Qidalanma Bələdçisi", url: "#" }],
    nextTopic: { label: "Ciddi Məsuliyyət", slug: "strict-liability" },
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
