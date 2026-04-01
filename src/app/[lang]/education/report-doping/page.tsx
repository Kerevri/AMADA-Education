import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import { ShieldCheck, Lock, EyeOff, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Report a Concern | Speak Up! | AMADA",
  description: "Secure and confidential platform to report suspicious behavior and help protect clean sport.",
};

export default async function ReportConcernPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Speak Up for Clean Sport"
        subtitle="Protecting sports integrity is everyone's responsibility. If you see something, say something. Your report is securely handled and completely confidential."
        compact
      />

      <section className="py-20 bg-background text-foreground">
        <div className=" max-w-5xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Report?</h2>
            <p className="text-lg text-[#102033] leading-relaxed">
              Doping fundamentally cheats clean athletes out of their rightful achievements. By reporting doping, you are protecting the health of athletes, defending fair play, and saving the true spirit of sport. Anyone can report—athletes, coaches, medical staff, parents, or fans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">100% Secure</h3>
              <p className="text-[#102033] text-sm leading-relaxed">All information is encrypted and handled exclusively by our designated Intelligence & Investigations team.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <EyeOff className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Anonymous</h3>
              <p className="text-[#102033] text-sm leading-relaxed">You can choose to remain completely anonymous. We do not track IP addresses or caller IDs for anonymous reports.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Protected</h3>
              <p className="text-[#102033] text-sm leading-relaxed">The Anti-Doping Rules strictly prohibit any form of retaliation against individuals who report in good faith.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <InfoCard
              title="What should I report?"
              type="info"
              content="Any information is useful. This includes seeing athletes using suspicious substances, coaches offering performance enhancers, doctors providing questionable treatments, or even overhearing conversations about evading a doping test. Provide as much detail as possible: Who, What, Where, and When."
            />
          </div>

          {/* Action Area */}
          <div className="bg-primary text-white rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Send className="w-64 h-64" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold mb-6">Submit Your Report</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Use our secure external platform to file a report. You will be given a secure inbox code allowing you to communicate anonymously with our investigators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex items-center justify-center whitespace-nowrap text-base font-semibold rounded-md h-14 px-8 bg-amada-teal hover:bg-white hover:text-amada-teal transition-colors">
                  Open Secure Portal
                </a>
                <a href="mailto:report@amada.az" className="inline-flex items-center justify-center whitespace-nowrap text-base font-semibold rounded-md h-14 px-8 border-2 border-white text-white hover:bg-white/10 transition-colors">
                  Email directly
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
