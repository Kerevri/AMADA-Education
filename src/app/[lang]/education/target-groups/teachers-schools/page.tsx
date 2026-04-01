import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teachers, Schools & Youth Sport | AMADA",
  description: "Values-based education resources for teachers and schools.",
};

export default async function TeachersTargetGroupPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Teachers & Schools"
        subtitle="Values-based education begins before athletes even reach elite sports. Discover how schools shape the next generation of clean athletes."
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <InfoCard
              title="Values-Based Education"
              content="True anti-doping education starts long before athletes learn the rules. It begins with physical education teachers and schools instilling respect, equity, and fair play in children."
              type="info"
            />
            <InfoCard
              title="Role of Schools"
              content="Schools provide the best structured environment to deliver foundational education. Integrating clean sport principles into the physical education curriculum ensures wide, equitable reach."
              type="success"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16">
            <ChecklistCard
              title="How Teachers Can Help"
              items={[
                "Request AMADA's School Program for your students",
                "Integrate values-based lessons (fair play, honesty) into PE classes",
                "Use WADA's youth learning resources and toolkits",
                "Identify and support talented youth moving into competitive sports",
                "Encourage participation and health over 'winning at all costs'"
              ]}
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Request a School Program"
        description="AMADA provides dedicated outreach and education sessions for schools."
        primaryAction={{ label: "Learn About the Program", path: `/${lang}/education/learning/schools-program` }}
        secondaryAction={{ label: "Contact Us to Book", path: `/${lang}/education/contact` }}
        variant="primary"
      />
    </div>
  );
}
