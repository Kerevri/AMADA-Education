import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard } from "@/components/shared/InfoCards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Target, Eye, Compass, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AMADA Education",
  description: "Learn about AMADA's Education Program, our vision, mission, and clean sport philosophy.",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="About AMADA Education"
        subtitle="Discover our vision for clean sport and how we empower athletes through prevention-focused education."
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-4xl">
          <InfoCard
            type="info"
            title="Our Role in Clean Sport"
            content="AMADA is the designated national authority for anti-doping education in Azerbaijan. Our Education Program is designed as a core prevention function, ensuring that all participants in sport understand their rights, responsibilities, and the importance of competing clean."
          />
        </div>
      </section>

      <section className="py-20 bg-light_gray">
        <div className=" max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Vision, Mission & Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-border shadow-sm border-t-4 border-t-amada-teal">
              <CardHeader className="pb-2">
                <Eye className="w-8 h-8 text-amada-teal mb-2" />
                <CardTitle className="text-xl">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#102033] text-sm">
                  To cultivate a sporting environment in Azerbaijan where the culture of clean sport prevails, and every athlete competes fairly, safely, and with integrity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-sm border-t-4 border-t-primary">
              <CardHeader className="pb-2">
                <Target className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-xl">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#102033] text-sm">
                  To protect clean athletes by delivering accessible, high-quality, and tailored anti-doping education that prevents intentional and unintentional rule violations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border shadow-sm border-t-4 border-t-amada-gold">
              <CardHeader className="pb-2">
                <Compass className="w-8 h-8 text-amada-gold mb-2" />
                <CardTitle className="text-xl">Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[#102033]">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amada-teal shrink-0 mt-0.5"/> Instill clean sport values in youth</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amada-teal shrink-0 mt-0.5"/> Inform athletes of their exact responsibilities</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amada-teal shrink-0 mt-0.5"/> Empower support personnel to guide safely</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className=" max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Our Education Philosophy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {[
              { title: "Prevention-First Approach", desc: "Prioritizing education over testing to stop doping before it happens." },
              { title: "Positive Framing", desc: "Focusing on the benefits of clean sport, health, and fair play, rather than just fear of sanctions." },
              { title: "Values-Based Education", desc: "Starting early with young athletes to build strong ethical foundations." },
              { title: "Learner-Centered Design", desc: "Tailoring content, language, and delivery methods to different age groups and roles." },
              { title: "Lifelong Education", desc: "Supporting athletes at every stage, from playground to elite podium." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-lg text-amada-teal mb-2">{item.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className=" max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-12">How Education Works at AMADA</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative">
            <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-border -translate-y-1/2 z-0"></div>
            {[
              "Education Program Definition",
              "Annual Planning",
              "Activity Delivery",
              "Monitoring",
              "Impact Evaluation"
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 w-full md:w-48 bg-white border-2 border-primary rounded-xl p-4 shadow-sm hover:border-amada-teal hover:-translate-y-1 transition-all">
                <div className="w-8 h-8 rounded-full bg-amada-teal text-white flex items-center justify-center font-bold mx-auto mb-3">
                  {idx + 1}
                </div>
                <h4 className="font-semibold text-sm text-primary">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light_gray border-t border-border">
        <div className=" max-w-4xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-border flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
              <Users className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Partnerships and Collaboration</h2>
              <p className="text-[#102033] text-base leading-relaxed mb-6">
                Clean sport is a shared responsibility. AMADA works closely with National Sport Federations, the Ministry of Youth and Sports, the National Olympic Committee, universities, and schools to ensure anti-doping education reaches every corner of the sporting community.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Federations", "Schools", "National Bodies", "Government Inst.", "WADA"].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-amada-teal/10 text-amada-teal text-sm font-semibold rounded-full">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
