import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Federasiyalar & Klublar | AMADA",
  description: "Milli Federasiyalar və klublar üçün koordinasiya, uyğunluq və təhsil dəstəyi.",
};

export default async function FederationsTargetGroupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Federasiyalar & Klublar" : "Federations & Clubs"}
        subtitle={isAz 
          ? "Milli Federasiyalar öz idmançılarının və dəstək heyətinin məcburi dopinqə qarşı təhsil almasını təmin etməkdə mühüm rol oynayırlar." 
          : "National Federations play a crucial role in ensuring their athletes and support personnel receive mandatory anti-doping education."}
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 gap-8 mb-16">
            <InfoCard
              title={isAz ? "Federasiya Məsuliyyətləri" : "Federation Responsibilities"}
              content={isAz 
                ? "Milli Dopinqə Qarşı Qaydalara əsasən, Federasiyalar öz üzvləri üçün təhsil proqramlarını həyata keçirmək üçün AMADA ilə əməkdaşlıq etməlidirlər. Təhsil Hovuzundakı idmançıları müəyyən etməli, böyük tədbirlərdən əvvəl təhsili məcburi etməli və AMADA-nın İllik Təhsil Planını dəstəkləməlisiniz." 
                : "Under the National Anti-Doping Rules, Federations are required to cooperate with AMADA to implement education programs for their members. You must identify athletes in the Education Pool, mandate education prior to major events, and support AMADA's Annual Education Plan."}
              type="info"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ChecklistCard
              title={isAz ? "İllik Planlaşdırma Yanaşması" : "Annual Planning Approach"}
              items={isAz 
                ? [
                    "Təhsil Hovuzu üçün dəqiq idmançı məlumatlarını təqdim edin",
                    "Milli seminar və vebinarları AMADA ilə birlikdə planlaşdırın",
                    "Milli komanda idmançılarının yarışdan əvvəl eLearning-i tamamlamasını təmin edin",
                    "Federasiya daxilində dopinqə qarşı mübarizə üzrə əlaqələndirici şəxs təyin edin",
                    "Milli məşqçilik sertifikatlarına təmiz idman mövzularını daxil edin"
                  ]
                : [
                    "Submit accurate athlete data for the Education Pool",
                    "Co-plan national seminars and webinars with AMADA",
                    "Ensure national team athletes complete eLearning before competing",
                    "Appoint an anti-doping point of contact within the federation",
                    "Integrate clean sport topics into national coaching certifications"
                  ]}
            />
            <ChecklistCard
              title={isAz ? "AMADA Necə Kömək Edə Bilər" : "How AMADA Can Help"}
              items={isAz 
                ? [
                    "AMADA Maarifləndiriciləri tərəfindən yerində seminarların keçirilməsi",
                    "Milli Çempionatlarda xüsusi maarifləndirmə stendlərinin təşkili",
                    "Xüsusi rəqəmsal və çap materiallarının təmin edilməsi",
                    "Səlahiyyətli Maarifləndirici olmaq üçün federasiya nümayəndələrinin təlimi",
                    "Dopinqə qarşı uyğunluq üzrə strateji rəhbərlik"
                  ]
                : [
                    "Delivery of in-person seminars by AMADA Educators",
                    "Provision of tailored outreach booths at National Championships",
                    "Access to specialized digital and print materials",
                    "Training federation representatives to become authorized Educators",
                    "Strategic guidance on anti-doping compliance"
                  ]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Təhsil Planınızı Koordinasiya Edin" : "Coordinate Your Education Plan"}
        description={isAz 
          ? "Federasiyanızın fəaliyyətini AMADA-nın İllik Təhsil Planı ilə uyğunlaşdırmaq üçün bizimlə əlaqə saxlayın." 
          : "Get in touch to align your federation's activities with AMADA's Annual Education Plan."}
        primaryAction={{ label: isAz ? "Federasiya Təhsili Üçün Müraciət" : "Request Federation Education", path: `/${lang}/education/contact` }}
        secondaryAction={{ label: isAz ? "İllik Plana Bax" : "View Annual Plan", path: `/${lang}/education/education-plan` }}
        variant="light"
      />
    </div>
  );
}
