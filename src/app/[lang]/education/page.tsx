import { HeroSection } from "@/components/shared/HeroSection";
import { AudienceCardGrid, TopicCardGrid } from "@/components/shared/CardGrids";
import { CTASection } from "@/components/shared/CTASection";
import { CalloutBlock } from "@/components/shared/CalloutBlock";
import { Metadata } from "next";
import { Milestone, BookOpen, Stethoscope, Users, Building, Globe, Scale, FlaskConical, ShieldAlert, FileText, Pill, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";
import { translations, t, type Lang } from "@/i18n/translations";

export const metadata: Metadata = {
  title: "AMADA Education | Empowering Clean Sport",
  description: "Accessible, prevention-focused anti-doping education for athletes, support personnel, and the wider sport community in Azerbaijan.",
};

export default async function EducationPlatformHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
  const ld = translations.landing;
  const tg = translations.targetGroups;
  const tp = translations.topics;
  const lp = translations.learning;
  const c = translations.common;

  return (
    <div className="flex flex-col">
      <HeroSection
        title={t(ld.heroTitle, l)}
        subtitle={t(ld.heroSubtitle, l)}
        ctas={[
          { label: t(ld.startLearning, l), path: `/${l}/education/topics`, variant: "primary" },
        ]}
      />

      {/* "On this page" Directory */}
      <div className="mb-12 bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4 text-[#003466]">
          <span className="w-8 h-1 bg-[#0055a4] block"></span>
          {t(ld.onThisPage, l)}
        </h2>
        <ul className="space-y-3 mt-4 text-[#003466] font-medium">
          <li><a href="#learning-path" className="hover:underline hover:text-[#0055a4]">{t(ld.choosePath, l)}</a></li>
          <li><a href="#essential-topics" className="hover:underline hover:text-[#0055a4]">{t(ld.essentialTopics, l)}</a></li>
          <li><a href="#athlete-pathway" className="hover:underline hover:text-[#0055a4]">{t(ld.playgroundToPodium, l)}</a></li>
          <li><a href="#learning-formats" className="hover:underline hover:text-[#0055a4]">{t(ld.learningFormats, l)}</a></li>
          <li><a href="#reporting" className="hover:underline hover:text-[#0055a4]">{t(ld.reporting, l)}</a></li>
        </ul>
      </div>

      {/* Choose Your Learning Path */}
      <section id="learning-path" className="mb-16 scroll-mt-24">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#003466] mb-3">{t(ld.choosePath, l)}</h2>
          <p className="text-[#003466]">{t(ld.choosePathDesc, l)}</p>
        </div>
        <AudienceCardGrid
          lang={l}
          columns={2}
          items={[
            { title: t(tg.athletes, l), path: "/education/target-groups/athletes", description: t(tg.athletesDesc, l), icon: <Milestone className="w-6 h-6" /> },
            { title: t(tg.coaches, l), path: "/education/target-groups/support-personnel", description: t(tg.coachesDesc, l), icon: <Users className="w-6 h-6" /> },
            { title: t(tg.medical, l), path: "/education/target-groups/medical", description: t(tg.medicalDesc, l), icon: <Stethoscope className="w-6 h-6" /> },
            { title: t(tg.parents, l), path: "/education/target-groups/teachers-schools", description: t(tg.parentsDesc, l), icon: <BookOpen className="w-6 h-6" /> },
            { title: t(tg.federations, l), path: "/education/target-groups/federations", description: t(tg.federationsDesc, l), icon: <Building className="w-6 h-6" /> },
            { title: t(tg.public, l), path: "/education/target-groups/public", description: t(tg.publicDesc, l), icon: <Globe className="w-6 h-6" /> },
          ]}
        />
      </section>

      {/* Essential Clean Sport Topics */}
      <section id="essential-topics" className="mb-16 scroll-mt-24">
        
        <div className="border-t border-slate-200 pt-10 mb-8">
          <CalloutBlock title={l === 'az' ? 'Bilirdinizmi?' : l === 'ru' ? 'Знаете ли вы?' : 'Did You Know?'} variant="fact" className="mb-8">
            {l === 'az' 
              ? 'İdmançı olaraq, bədəninizdə tapılan istənilən qadağan olunmuş maddəyə görə ciddi məsuliyyət daşıyırsınız. Buna Ciddi Məsuliyyət (Strict Liability) prinsipi deyilir. Hətta qəsdən olmasa belə qaydanı pozmuş hesab oluna bilərsiniz.'
              : l === 'ru'
              ? 'Как спортсмен, вы несете полную ответственность за любое запрещенное вещество, найденное в вашем организме. Это известно как принцип строгой ответственности.'
              : 'As an athlete, you are solely responsible for any prohibited substance found in your system. This is known as the principle of Strict Liability. You can face a violation even if it was completely unintentional!'}
          </CalloutBlock>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mt-6">
            <div>
              <h2 className="text-2xl font-bold text-[#003466] mb-3">{t(ld.essentialTopics, l)}</h2>
              <p className="text-[#003466]">{t(ld.essentialTopicsDesc, l)}</p>
            </div>
            <Link href={`/${l}/education/topics`} className="text-[#0055a4] text-sm font-semibold flex items-center hover:underline group whitespace-nowrap">
              {t(ld.viewAllTopics, l)} <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        <TopicCardGrid
          lang={l}
          columns={2}
          items={[
            { title: t(tp.adrv, l), description: t(tp.adrvDesc, l), path: "/education/topics/anti-doping-rule-violations", icon: <ShieldAlert className="w-5 h-5" /> },
            { title: t(tp.testing, l), description: t(tp.testingDesc, l), path: "/education/topics/testing-procedures", icon: <FlaskConical className="w-5 h-5" /> },
            { title: t(tp.prohibitedList, l), description: t(tp.prohibitedListDesc, l), path: "/education/topics/prohibited-list", icon: <FileText className="w-5 h-5" /> },
            { title: t(tp.tue, l), description: t(tp.tueDesc, l), path: "/education/topics/tue", icon: <Stethoscope className="w-5 h-5" /> },
            { title: t(tp.supplements, l), description: t(tp.supplementsDesc, l), path: "/education/topics/supplements-risk", icon: <Pill className="w-5 h-5" /> },
            { title: t(tp.rights, l), description: t(tp.rightsDesc, l), path: "/education/topics/rights-and-responsibilities", icon: <Scale className="w-5 h-5" /> },
          ]}
        />
      </section>

      {/* Athlete Pathway */}
      <section id="athlete-pathway" className="mb-16 scroll-mt-24">
        <div className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-[#003466] mb-4">{t(ld.playgroundToPodium, l)}</h2>
          <p className="text-[#003466] mb-6 leading-relaxed">{t(ld.playgroundDesc, l)}</p>
          <div className="relative h-48 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center overflow-hidden mb-6">
            <div className="absolute inset-x-8 h-1.5 bg-slate-200 top-1/2 -translate-y-1/2"></div>
            <div className="flex justify-between w-full px-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white border-4 border-amada-teal shadow-sm"></div>
              <div className="w-10 h-10 rounded-full bg-white border-4 border-amada-teal shadow-sm"></div>
              <div className="w-10 h-10 rounded-full bg-white border-4 border-amada-teal shadow-sm"></div>
              <div className="w-12 h-12 rounded-full bg-[#003466] border-4 border-amada-gold shadow-md"></div>
            </div>
          </div>
          <Link href={`/${l}/education/athlete-pathway`} className="inline-flex items-center text-sm font-semibold text-[#0055a4] hover:underline group">
            {t(ld.explorePathway, l)} <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Learning Formats */}
      <section id="learning-formats" className="mb-16 scroll-mt-24">
        <div className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-[#003466] mb-6">{t(ld.learningFormats, l)}</h2>
          <div className="flex flex-wrap gap-3">
            {[
              t(lp.seminars, l),
              t(lp.webinars, l),
              t(lp.outreach, l),
              t(lp.eLearning, l),
              t(lp.schoolSessions, l),
              t(lp.federationEducation, l),
            ].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-md text-[#003466] text-sm font-medium shadow-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amada-teal" /> {tag}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <Link href={`/${l}/education/learning`} className="inline-flex items-center text-sm font-semibold text-[#0055a4] hover:underline group">
              {t(ld.viewLearningHub, l)} <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reporting CTA */}
      <section id="reporting" className="scroll-mt-24">
        <div className="border-t border-slate-200 pt-10">
          <CTASection
            title={t(ld.speakUp, l)}
            description={t(ld.speakUpDesc, l)}
            variant="primary"
            primaryAction={{ label: t(ld.reportingOptions, l), path: `/${l}/education/report-doping` }}
          />
        </div>
      </section>
    </div>
  );
}
