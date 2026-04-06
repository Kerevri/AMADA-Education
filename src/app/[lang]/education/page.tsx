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
          <CalloutBlock title={l === 'az' ? 'Bilirdinizmi?' : 'Did You Know?'} variant="fact" className="mb-8">
            {l === 'az'
              ? 'İdmançı olaraq, bədəninizdə tapılan istənilən qadağan olunmuş maddəyə görə ciddi məsuliyyət daşıyırsınız. Buna Ciddi Məsuliyyət (Strict Liability) prinsipi deyilir. Hətta qəsdən olmasa belə qaydanı pozmuş hesab oluna bilərsiniz.'
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
          <h2 className="text-2xl font-bold text-[#003466] mb-3">{t(ld.playgroundToPodium, l)}</h2>
          <p className="text-[#003466] mb-6 leading-relaxed">{t(ld.playgroundDesc, l)}</p>

          {/* 6-Stage Pathway Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            {(l === "az" ? [
              { num: "1", name: "İdmanda Uşaqlar", age: "6–12 yaş", desc: "Ədalətli oyun, hörmət və dəyərlərin formalaşdığı mərhələ.", border: "border-emerald-400" },
              { num: "2", name: "Gənc İdmançılar", age: "13–17 yaş", desc: "Qadağan Edilmiş Siyahı və Ciddi Məsuliyyətin ilk tanıdılması.", border: "border-emerald-500" },
              { num: "3", name: "İstedadlı İdmançılar", age: "Elit Öncəsi", desc: "İlk dopinq nəzarəti ehtimalı; ADEL sertifikatı məcburi olur.", border: "border-[#0055a4]" },
              { num: "4", name: "Milli & Beynəlxalq", age: "Elit Mərhələ", desc: "Tam uyğunluq gözlənilir; idmançı nümunə göstərən roluna keçir.", border: "border-[#003466]" },
              { num: "5", name: "Qeydiyyata alınmış Test Qrupu", age: "QTQ / Elit RTP", desc: "ADAMS məkan məlumatı, Tİİ idarəetməsi — ən yüksək nəzarət.", border: "border-[#003466]" },
              { num: "6", name: "Geri Dönən İdmançılar", age: "Reintegrasiya", desc: "Sanksiya sonrası biliyin yenilənməsi və yenidən uyğunlaşma.", border: "border-amber-500" },
            ] : [
              { num: "1", name: "Children in Sport", age: "Ages 6–12", desc: "Building fair play, respect, and values through active play.", border: "border-emerald-400" },
              { num: "2", name: "Youth Athletes", age: "Ages 13–17", desc: "First introduction to the Prohibited List and Strict Liability.", border: "border-emerald-500" },
              { num: "3", name: "Talented Athletes", age: "Pre-Elite", desc: "First doping control exposure; ADEL certificate becomes mandatory.", border: "border-[#0055a4]" },
              { num: "4", name: "National & International", age: "Elite Stage", desc: "Full compliance expected; athlete takes on a role-model duty.", border: "border-[#003466]" },
              { num: "5", name: "Registered Testing Pool", age: "RTP / High-Risk Elite", desc: "ADAMS whereabouts, TUE management — highest-level scrutiny.", border: "border-[#003466]" },
              { num: "6", name: "Returning Athletes", age: "Re-integration", desc: "Post-sanction knowledge refresh and compliance reinstatement.", border: "border-amber-500" },
            ]).map((stage) => (
              <div key={stage.num} className={`bg-white border-2 ${stage.border} rounded-xl p-4 shadow-sm flex flex-col gap-2`}>
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#003466] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{stage.num}</span>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wide">{stage.age}</span>
                </div>
                <p className="text-[#003466] text-sm font-bold leading-snug">{stage.name}</p>
                <p className="text-slate-600 text-xs leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          <Link href={`/${l}/education/athlete-pathway`} className="inline-flex items-center text-sm font-semibold text-[#0055a4] hover:underline group">
            {t(ld.explorePathway, l)} <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Learning Formats */}
      <section id="learning-formats" className="mb-16 scroll-mt-24">
        <div className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-bold text-[#003466] mb-3">{t(ld.learningFormats, l)}</h2>
          <p className="text-[#003466] mb-8">
            {l === "az"
              ? "AMADA antidopinq təhsilini müxtəlif formatlarda çatdırır — onlayn öyrənmədən canlı seminarlara, məktəb proqramlarından hadisə əsaslı fəaliyyətlərə qədər."
              : "AMADA delivers anti-doping education across diverse formats — from online learning to live seminars, school programmes to event-based outreach."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(l === "az" ? [
              {
                icon: <BookOpen className="w-5 h-5 text-amada-teal" />,
                title: "Elektron Öyrənmə (ADEL)",
                desc: "WADA-nın ADEL platformasında pulsuz, interaktiv onlayn kurslar. Uğurla tamamlayanlara rəsmi sertifikat verilir.",
                tag: "adel.wada-ama.org",
                path: `/education/learning/elearning`,
              },
              {
                icon: <Users className="w-5 h-5 text-amada-teal" />,
                title: "Əyani Seminarlar",
                desc: "AMADA-nın akkreditasiyalı maarifləndiriciləri tərəfindən keçirilən interaktiv, ssenari əsaslı sessiyalar. Federasiya, klub, milli komanda.",
                tag: "2–4 saat · Azərbaycan dili",
                path: `/education/learning/seminars`,
              },
              {
                icon: <Stethoscope className="w-5 h-5 text-amada-teal" />,
                title: "Vebinarlar",
                desc: "Qadağan Edilmiş Siyahı yenilikləri, Tİİ prosesi və digər aktual mövzularda canlı onlayn sessiyalar. Yazılar resurs kitabxanasında qorunur.",
                tag: "Virtual · Bütün qruplar",
                path: `/education/learning/webinars`,
              },
              {
                icon: <Globe className="w-5 h-5 text-amada-teal" />,
                title: "Məktəb Proqramları",
                desc: "10–17 yaş şagirdlər üçün dəyər əsaslı sinif dərsləri. Bədən tərbiyəsi dərslərinin bir hissəsi kimi tətbiq olunur.",
                tag: "Gənclər · Müəllimlər",
                path: `/education/learning/schools-program`,
              },
              {
                icon: <Building className="w-5 h-5 text-amada-teal" />,
                title: "Federasiya Proqramları",
                desc: "29 milli federasiya üçün risk qiymətləndirməsinə əsaslanan illik seminar planı. Hər federasiyaya ayrılmış kvota.",
                tag: "29 federasiya · Risk əsaslı",
                path: `/education/learning/federation-programs`,
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-amada-teal" />,
                title: "Hadisə Əsaslı Təhsil",
                desc: "Yarış və turnirlərdə AMADA stendi, flayerlər, QR kodlar vasitəsilə canlı maarifləndirmə. İSE Maddə 9.2 tələbinə uyğun.",
                tag: "Yarışlar · Turniriər",
                path: `/education/learning/outreach`,
              },
            ] : [
              {
                icon: <BookOpen className="w-5 h-5 text-amada-teal" />,
                title: "eLearning (ADEL)",
                desc: "Free interactive online courses on WADA's ADEL platform. Participants receive an official digital certificate upon completion.",
                tag: "adel.wada-ama.org",
                path: `/education/learning/elearning`,
              },
              {
                icon: <Users className="w-5 h-5 text-amada-teal" />,
                title: "In-Person Seminars",
                desc: "Interactive, scenario-based sessions run by AMADA-accredited educators. Available for federations, clubs, and national teams.",
                tag: "2–4 hrs · In-person",
                path: `/education/learning/seminars`,
              },
              {
                icon: <Stethoscope className="w-5 h-5 text-amada-teal" />,
                title: "Webinars",
                desc: "Live online sessions on Prohibited List updates, the TUE process, and other critical topics. Recordings archived in the Resource Library.",
                tag: "Virtual · All groups",
                path: `/education/learning/webinars`,
              },
              {
                icon: <Globe className="w-5 h-5 text-amada-teal" />,
                title: "School Programmes",
                desc: "Values-based classroom lessons for students aged 10–17, integrated into physical education curricula.",
                tag: "Youth · Teachers",
                path: `/education/learning/schools-program`,
              },
              {
                icon: <Building className="w-5 h-5 text-amada-teal" />,
                title: "Federation Programmes",
                desc: "Risk-based annual seminar plan distributed across 29 national federations, with allocated quotas per federation.",
                tag: "29 federations · Risk-based",
                path: `/education/learning/federation-programs`,
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-amada-teal" />,
                title: "Event-Based Education",
                desc: "AMADA booth, flyers, and QR-linked resources at competitions and tournaments. Aligned with ISE Article 9.2.",
                tag: "Competitions · Events",
                path: `/education/learning/outreach`,
              },
            ]).map((item, i) => (
              <Link
                key={i}
                href={`/${l}${item.path}`}
                className="group bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#0055a4] transition-all flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-[#eef4ff] transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-[#003466] font-bold text-sm leading-snug">{item.title}</p>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed flex-1">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{item.tag}</span>
                  <ChevronRight className="w-4 h-4 text-[#0055a4] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
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
