import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Sport Educators | AMADA",
  description: "Learn about AMADA's Educator Network and how to become a certified Anti-Doping Educator.",
};

export default async function EducatorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Clean Sport Educators"
        subtitle="Building a nationwide network of certified educators to deliver impactful anti-doping education directly within your sport."
        compact
      />

      <section className="py-16 bg-background text-foreground">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <InfoCard
              title="Who are AMADA Educators?"
              content="AMADA Educators are passionate individuals—often former athletes, coaches, or federation staff—who have undergone rigorous training to deliver face-to-face anti-doping education on behalf of AMADA."
              type="info"
            />
            <InfoCard
              title="Why peer-to-peer?"
              content="Research shows that athletes learn best from people who speak their language and understand their sport. By training educators from within specific sports, we ensure education is highly relevant and trusted."
              type="success"
            />
          </div>

          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Become an Educator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ChecklistCard
              title="Who We Are Looking For"
              items={[
                "Strong communicators and presenters",
                "Individuals passionate about fair play and sports integrity",
                "People with deep understanding of the sporting environment",
                "Willingness to travel locally to deliver sessions",
                "Commitment to continuous learning and WADA updates"
              ]}
            />
            <ChecklistCard
              title="The Certification Process"
              items={[
                "Application and initial screening",
                "Completion of mandatory ADEL online courses",
                "Attendance at a 3-day intensive in-person Educator Training Course",
                "Co-delivery of a seminar under AMADA supervision",
                "Final assessment and formal certification (valid for 2 years)"
              ]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to make an impact?"
        description="Join the next intake of the AMADA Educator Training Program."
        primaryAction={{ label: "Apply Now", path: `/${lang}/education/contact` }}
        variant="primary"
      />
    </div>
  );
}
