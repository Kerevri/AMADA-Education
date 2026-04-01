import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Sport Event Education | AMADA",
  description: "Pre-event education and in-event outreach for major national and international games.",
};

export default async function EventsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Event-Based Education"
        subtitle="Ensuring athletes are educated before they arrive at major sporting events, and engaged while they are there."
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-5xl">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">The Importance of Event Education</h2>
            <p className="text-lg text-[#102033] leading-relaxed">
              Major Games (like the Olympics, Paralympics, and Continental Games) are the pinnacle of an athlete's career. It is critical that athletes do not inadvertently commit a doping offence at these stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-light_gray p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">Pre-Event Education</h3>
              <p className="text-[#102033] mb-6">
                Under the WADA International Standard for Education, athletes must be educated prior to participating in major events. AMADA works with the National Olympic Committee and Federations to ensure all delegates complete required anti-doping training before departure.
              </p>
              <ul className="space-y-2 text-sm text-[#102033] font-medium">
                <li>• Verification of ADEL module completion</li>
                <li>• Pre-departure seminars for the national delegation</li>
                <li>• Support for TUE applications ahead of the games</li>
              </ul>
            </div>
            
            <div className="bg-light_gray p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">In-Event Outreach</h3>
              <p className="text-[#102033] mb-6">
                During National Championships and Major Events held in Azerbaijan, AMADA sets up Outreach Booths in the athlete village or competition venues to promote clean sport values in a fun, pressure-free environment.
              </p>
              <ul className="space-y-2 text-sm text-[#102033] font-medium">
                <li>• Play True interactive quizzes</li>
                <li>• Clean Sport Pledge walls</li>
                <li>• Distribution of practical informational materials</li>
              </ul>
            </div>
          </div>

          <InfoCard
            title="Hosting an Event in Azerbaijan?"
            content="If you are an International or National Federation hosting a major championship event in Azerbaijan, contact our Education Department to coordinate an Outreach Booth for your athletes."
            type="info"
          />
        </div>
      </section>

      <CTASection
        title="Request Event Outreach"
        description="Book the AMADA Education team for your next major championship."
        primaryAction={{ label: "Contact Us", path: `/${lang}/education/contact` }}
        variant="light"
      />
    </div>
  );
}
