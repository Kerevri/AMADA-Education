import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Education Plan | AMADA",
  description: "How AMADA structures, targets, and delivers its national anti-doping education strategy.",
};

export default async function EducationPlanPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Annual Education Plan"
        subtitle="Strategic, targeted, and measurable. Discover how we plan the national delivery of anti-doping education."
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-6">Strategic Planning</h2>
            <p className="text-lg text-[#102033] leading-relaxed">
              In accordance with the WADA International Standard for Education (ISE), AMADA develops an Annual Education Plan. This plan identifies the highest risks of doping in Azerbaijan, defines target audiences (the Education Pool), and outlines exactly what educational activities will be delivered to mitigate those risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border border-border rounded-xl shadow-sm bg-background">
              <div className="w-12 h-12 rounded-full bg-amada-teal/10 flex items-center justify-center text-amada-teal font-bold text-xl mb-4">1</div>
              <h3 className="text-xl font-bold text-primary mb-3">Risk Assessment</h3>
              <p className="text-sm text-[#102033]">We analyze sporting data, past violations, and intelligence to identify which sports and demographics are at the highest risk of intentional or inadvertent doping.</p>
            </div>
            
            <div className="p-6 border border-border rounded-xl shadow-sm bg-background">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4">2</div>
              <h3 className="text-xl font-bold text-primary mb-3">Target Audiences</h3>
              <p className="text-sm text-[#102033]">Based on risks, athletes and support personnel form the 'Education Pool'. First priority is given to RTP athletes, National Teams, and youth coming into the talent pathway.</p>
            </div>
            
            <div className="p-6 border border-border rounded-xl shadow-sm bg-background">
              <div className="w-12 h-12 rounded-full bg-amada-gold/20 flex items-center justify-center text-amada-gold font-bold text-xl mb-4">3</div>
              <h3 className="text-xl font-bold text-primary mb-3">Activity Implementation</h3>
              <p className="text-sm text-[#102033]">Selecting the right tool for the job. We deploy a mix of face-to-face seminars, webinars, school outreach, and eLearning mandates to achieve behavioral objectives.</p>
            </div>
          </div>

          <InfoCard
            title="Federation Involvement"
            content="Federations are legally required to assist AMADA in implementing the plan, primarily by providing accurate athlete data and mandating education prior to national events."
            type="warning"
          />
        </div>
      </section>

      <CTASection
        title="Download the Current Plan"
        description="Review the full AMADA Education Plan for the current calendar year."
        primaryAction={{ label: "Download Plan (PDF)", path: `/${lang}/education/resources` }}
        variant="teal"
      />
    </div>
  );
}
