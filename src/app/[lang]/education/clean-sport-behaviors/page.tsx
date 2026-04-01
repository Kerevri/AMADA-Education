import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clean Sport Behaviors | AMADA Education",
  description: "Define exactly what is expected of athletes and support personnel to maintain sport integrity.",
};

export default async function CleanSportBehaviorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Clean Sport Behaviors"
        subtitle="Education is ultimately about driving behavior. What exactly does a clean athlete or a responsible coach do on a daily basis?"
        compact
      />

      <section className="py-20 bg-background text-foreground">
        <div className=" max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Values into Action</h2>
            <p className="text-lg text-[#102033]">
              Understanding the rules is the first step. Translating that knowledge into everyday protective behaviors is how we maintain a level playing field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl border-t-4 border-t-amada-teal shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">For Athletes</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amada-teal/10 text-amada-teal font-bold">1</span>
                  <span><strong>Check all medications:</strong> Always use GlobalDRO or consult a sports doctor before taking any substance, whether prescribed or over-the-counter.</span>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amada-teal/10 text-amada-teal font-bold">2</span>
                  <span><strong>Inform medical staff:</strong> Proactively identify yourself as an athlete subject to anti-doping rules during any medical consultation.</span>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amada-teal/10 text-amada-teal font-bold">3</span>
                  <span><strong>Question supplements:</strong> Practice a food-first philosophy. Treat all supplements as a high-risk vector for accidental doping.</span>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amada-teal/10 text-amada-teal font-bold">4</span>
                  <span><strong>Maintain absolute control:</strong> Never leave food, drinks, or supplements unattended. Take responsibility for what goes into your body.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-amada-teal/10 text-amada-teal font-bold">5</span>
                  <span><strong>Fully cooperate:</strong> During testing, follow DCO instructions meticulously, observe sample sealing, and understand your rights.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-t-4 border-t-primary shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6">For Coaches & Personnel</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">1</span>
                  <span><strong>Set the standard:</strong> Vocally support clean sport. Establish a zero-tolerance policy for doping within your team or club.</span>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">2</span>
                  <span><strong>Enable verification:</strong> Constantly remind athletes to check their medications and assist them in finding safe alternatives.</span>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">3</span>
                  <span><strong>Promote healthy nutrition:</strong> Emphasize diet and proper recovery over the reliance on sports supplements.</span>
                </li>
                <li className="flex items-start gap-4 pb-4 border-b border-border/50">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">4</span>
                  <span><strong>Support compliance:</strong> Help RTP athletes understand the exact requirements of filing correct and timely Whereabouts.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold">5</span>
                  <span><strong>Report concerns:</strong> Do not turn a blind eye. If you suspect doping behavior, report it securely to AMADA.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <InfoCard
              title="A Shared Responsibility"
              content="Every behavior—from an athlete double-checking a headache tablet, to a coach questioning a sudden performance spike, to a federation hosting a seminar—accumulates to form a robust shield against doping. You are part of the solution."
              type="info"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Check Your Knowledge"
        description="Put your understanding of clean sport behaviors to the test with our e-learning modules."
        primaryAction={{ label: "Go to e-Learning", path: `/${lang}/education/learning/elearning` }}
        variant="primary"
      />
    </div>
  );
}
