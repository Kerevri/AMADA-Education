import { HeroSection } from "@/components/shared/HeroSection";
import { TopicCardGrid } from "@/components/shared/CardGrids";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import { ShieldAlert, Scale, ShieldX, Building2, HeartHandshake, FlaskConical, FileText, MapPin, Stethoscope, Pill, AlertTriangle, AlertOctagon, PhoneCall } from "lucide-react";
import { translations, t, type Lang } from "@/i18n/translations";

export const metadata: Metadata = {
  title: "Clean Sport Topics | AMADA Education",
  description: "Explore essential anti-doping topics including rules, testing, medications, and your rights.",
};

export default async function TopicsHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
  const tp = translations.topics;
  const c = translations.common;

  const hubTitles = {
    az: {
      hero: "Təmiz İdman Mövzuları",
      heroDesc: "Dopinqə qarşı mübarizənin qaydaları, prosedurlar və risklərini dərindən araşdırın. İdmanda bütün iştirakçılar üçün vacib biliklər.",
      heading: "Əsas Mövzuları Kəşf Edin",
      cta: "Axtardığınızı tapa bilmirsəniz?",
      ctaDesc: "Tez-tez soruşulan suallarımıza baxın və ya bilavasitə təhsil komandamızla əlaqə saxlayın.",
      faq: "TSS-ə Keç",
      contact: "Bizimlə Əlaqə",
    },
    en: {
      hero: "Clean Sport Topics",
      heroDesc: "Dive deep into the rules, procedures, and risks of anti-doping. Essential knowledge for all participants in sport.",
      heading: "Explore Essential Topics",
      cta: "Can't find what you are looking for?",
      ctaDesc: "Check our Frequently Asked Questions or contact our education team directly.",
      faq: "Go to FAQ",
      contact: "Contact Us",
    },
    ru: {
      hero: "Темы чистого спорта",
      heroDesc: "Изучите правила, процедуры и риски антидопинга. Важные знания для всех участников спорта.",
      heading: "Изучить основные темы",
      cta: "Не можете найти то, что ищете?",
      ctaDesc: "Проверьте часто задаваемые вопросы или напрямую свяжитесь с командой.",
      faq: "К часто задаваемым вопросам",
      contact: "Связаться",
    },
  };

  const ui = hubTitles[l] ?? hubTitles.en;

  const topicItems = [
    { title: t(tp.adrv, l), description: t(tp.adrvDesc, l), path: "/education/topics/anti-doping-rule-violations", icon: <ShieldAlert className="w-6 h-6" /> },
    { title: t(tp.rights, l), description: t(tp.rightsDesc, l) + " Your basic rights and strict responsibilities as an athlete.", path: "/education/topics/rights-and-responsibilities", icon: <Scale className="w-6 h-6" /> },
    {
      title: l === "az" ? "Dopinqin Nəticələri" : l === "ru" ? "Последствия допинга" : "Consequences of Doping",
      description: l === "az" ? "Sağlamlıq, sosial, maliyyə və idman nəticələri." : l === "ru" ? "Последствия для здоровья, социальные, финансовые и спортивные." : "Health, social, financial, and sporting consequences.",
      path: "/education/topics/consequences-of-doping",
      icon: <ShieldX className="w-6 h-6" />
    },
    {
      title: l === "az" ? "Dopinqə Qarşı Mübarizə Sistemi" : l === "ru" ? "Антидопинговая система" : "The Anti-Doping System",
      description: l === "az" ? "WADA, AMADA və İF-lərin idmanı qorumaq üçün necə birlikdə çalışdığı." : l === "ru" ? "Как ВАДА, АМАДА и МФ работают вместе." : "How WADA, AMADA, and IFs work together to protect sport.",
      path: "/education/topics/anti-doping-system",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: l === "az" ? "Dəyərlər & Etika" : l === "ru" ? "Ценности и этика" : "Values & Ethics",
      description: l === "az" ? "İdmanın əsas ruhu və ədalətli oyunun nə üçün vacib olduğu." : l === "ru" ? "Дух спорта и важность честной игры." : "The underlying spirit of sport and why fair play matters.",
      path: "/education/topics/values-and-ethics",
      icon: <HeartHandshake className="w-6 h-6" />
    },
    { title: t(tp.testing, l), description: t(tp.testingDesc, l), path: "/education/topics/testing-procedures", icon: <FlaskConical className="w-6 h-6" /> },
    { title: t(tp.prohibitedList, l), description: t(tp.prohibitedListDesc, l), path: "/education/topics/prohibited-list", icon: <FileText className="w-6 h-6" /> },
    {
      title: l === "az" ? "Yerləşmə & ADAMS" : l === "ru" ? "Местонахождение и ADAMS" : "Whereabouts & ADAMS",
      description: l === "az" ? "Sınaq Hovuzundaysanızsa yerləşməni necə bildirmək olar." : l === "ru" ? "Как подать сведения о местонахождении." : "How to file whereabouts if you are in a Testing Pool.",
      path: "/education/topics/whereabouts-adams",
      icon: <MapPin className="w-6 h-6" />
    },
    { title: t(tp.tue, l), description: t(tp.tueDesc, l), path: "/education/topics/tue", icon: <Stethoscope className="w-6 h-6" /> },
    {
      title: l === "az" ? "Dərmanlar" : l === "ru" ? "Медикаменты" : "Medications",
      description: l === "az" ? "Dərmanınızın idmanda istifadə üçün təhlükəsiz olub-olmadığını necə yoxlamaq olar." : l === "ru" ? "Как проверить безопасность вашего лекарства." : "How to check if your medicine is safe to use in sport.",
      path: "/education/topics/medications",
      icon: <Pill className="w-6 h-6" />
    },
    { title: t(tp.supplements, l), description: t(tp.supplementsDesc, l), path: "/education/topics/supplements-risk", icon: <AlertTriangle className="w-6 h-6" /> },
    { title: t(tp.strictLiability, l), description: t(tp.strictLiabilityDesc, l), path: "/education/topics/strict-liability", icon: <AlertOctagon className="w-6 h-6" /> },
    {
      title: l === "az" ? "Dopinqi Bildirmək" : l === "ru" ? "Сообщить о допинге" : "Reporting Doping",
      description: l === "az" ? "Dopinq şübhələrini necə təhlükəsiz bildirmək olar." : l === "ru" ? "Как безопасно сообщить о подозрении в допинге." : "How to securely report suspicions of doping.",
      path: "/education/topics/reporting-doping",
      icon: <PhoneCall className="w-6 h-6" />
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title={ui.hero}
        subtitle={ui.heroDesc}
        compact
      />

      <section className="py-20 bg-background text-foreground">
        <div className="max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-border">
            <h2 className="text-2xl font-bold text-primary">{ui.heading}</h2>
            <div className="text-sm font-medium text-[#003466] mt-4 md:mt-0">
              {t(c.showing, l)} {topicItems.length} {t(c.coreTopics, l)}
            </div>
          </div>
          
          <TopicCardGrid lang={lang} items={topicItems} columns={3} />
        </div>
      </section>

      <CTASection
        title={ui.cta}
        description={ui.ctaDesc}
        primaryAction={{ label: ui.faq, path: `/${lang}/education/faq` }}
        secondaryAction={{ label: ui.contact, path: `/${lang}/education/contact` }}
        variant="light"
      />
    </div>
  );
}
