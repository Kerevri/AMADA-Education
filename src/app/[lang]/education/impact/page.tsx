import { HeroSection } from "@/components/shared/HeroSection";
import { MetricCards } from "@/components/shared/MetricCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Monitoring | AMADA",
  description: "Tracking the effectiveness and reach of our anti-doping education programs.",
};

export default async function ImpactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Placeholder metrics that would typically come from an API/CMS
  const impactMetrics = [
    { label: "Athletes Educated (YTD)", value: "2,450", trend: "Up 12%" },
    { label: "Seminars Delivered", value: "84", description: "Across 24 Federations" },
    { label: "ADEL Certifications", value: "1,120", trend: "Up 45%" },
    { label: "Schools Reached", value: "35", description: "Values-based programs" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Monitoring & Impact"
        subtitle="Education is only effective if it reaches the right people and changes behaviors. See how we measure our impact."
        compact
      />

      <section className="py-16 bg-background text-foreground">
        <div className=" max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Reach This Year</h2>
            <p className="text-lg text-[#102033] mb-8">
              We continually track participation numbers against our Annual Education Plan targets to ensure comprehensive coverage across National Federations.
            </p>
            <MetricCards metrics={impactMetrics} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Evaluating Effectiveness</h3>
              <p className="text-[#102033] leading-relaxed">
                Reaching people is not enough; we must measure if learning occurred. We conduct post-seminar surveys and knowledge retention quizzes to evaluate whether athletes genuinely understand their responsibilities. Feedback is used to constantly improve our curriculum.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
              <h4 className="font-semibold text-primary mb-4">Monitoring Framework</h4>
              <ul className="space-y-3 text-sm text-[#102033]">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Participant Feedback</span>
                  <span className="font-bold text-amada-teal">94% Satisfaction</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Knowledge Assessment Score</span>
                  <span className="font-bold text-amada-teal">88% Average</span>
                </li>
                <li className="flex justify-between">
                  <span>Planned vs Actual Delivery</span>
                  <span className="font-bold text-amada-teal">105% of Goal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Read the Annual Report"
        description="For a detailed breakdown of our educational reach and systemic impact, download our official annual report."
        primaryAction={{ label: "Go to Resources", path: `/${lang}/education/resources` }}
        variant="light"
      />
    </div>
  );
}
