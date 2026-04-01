import { HeroSection } from "@/components/shared/HeroSection";
import { TimelineSection } from "@/components/shared/TimelineSection";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import { translations, t, type Lang } from "@/i18n/translations";

export const metadata: Metadata = {
  title: "Athlete Pathway | AMADA Education",
  description: "Explore the clean sport educational journey from playground to podium.",
};

export default async function AthletePathwayPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = lang as Lang;
  const p = translations.pathway;

  const stages = [
    {
      title: t(p.stages.children.title, l),
      subtitle: t(p.stages.children.subtitle, l),
      description: t(p.stages.children.description, l),
      keyPoints: [...(p.stages.children.points[l] ?? p.stages.children.points.en)],
    },
    {
      title: t(p.stages.youth.title, l),
      subtitle: t(p.stages.youth.subtitle, l),
      description: t(p.stages.youth.description, l),
      keyPoints: [...(p.stages.youth.points[l] ?? p.stages.youth.points.en)],
    },
    {
      title: t(p.stages.talented.title, l),
      subtitle: t(p.stages.talented.subtitle, l),
      description: t(p.stages.talented.description, l),
      keyPoints: [...(p.stages.talented.points[l] ?? p.stages.talented.points.en)],
    },
    {
      title: t(p.stages.national.title, l),
      subtitle: t(p.stages.national.subtitle, l),
      description: t(p.stages.national.description, l),
      keyPoints: [...(p.stages.national.points[l] ?? p.stages.national.points.en)],
    },
    {
      title: t(p.stages.rtp.title, l),
      subtitle: t(p.stages.rtp.subtitle, l),
      description: t(p.stages.rtp.description, l),
      keyPoints: [...(p.stages.rtp.points[l] ?? p.stages.rtp.points.en)],
    },
    {
      title: t(p.stages.returning.title, l),
      subtitle: t(p.stages.returning.subtitle, l),
      description: t(p.stages.returning.description, l),
      keyPoints: [...(p.stages.returning.points[l] ?? p.stages.returning.points.en)],
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection
        title={t(p.title, l)}
        subtitle={t(p.subtitle, l)}
        compact
      />

      <TimelineSection
        title={t(p.timelineTitle, l)}
        description={t(p.timelineDesc, l)}
        stages={stages}
      />

      <CTASection
        title={l === "az" ? "Yol Xülasəsini Yüklə" : l === "ru" ? "Скачать обзор пути" : "Download Pathway Overview"}
        description={l === "az" ? "Federasiyanız, klubunuz və ya məktəb şurası üçün İdmançı Yolu infoqrafikasının surətini saxlayın." : l === "ru" ? "Сохраните копию инфографики пути спортсмена." : "Keep a copy of the Athlete Pathway infographic for your federation, club, or school board."}
        primaryAction={{ label: l === "az" ? "Yüklə (PDF, 2.1 MB)" : l === "ru" ? "Скачать (PDF, 2.1 МБ)" : "Download PDF (2.1 MB)", path: "#" }}
        variant="teal"
      />
    </div>
  );
}
