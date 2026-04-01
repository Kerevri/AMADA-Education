import { HeroSection } from "@/components/shared/HeroSection";
import { AudienceCardGrid } from "@/components/shared/CardGrids";
import { Milestone, Users, Stethoscope, BookOpen, Building, Globe } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Educate | Target Groups",
  description: "Explore the different target groups for our anti-doping education, tailored for athletes, coaches, medical staff, and more.",
};

export default async function TargetGroupsHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Who We Educate"
        subtitle="Education is for everyone in sport. Select your role to find tailored information, behavioral expectations, and learning opportunities designed specifically for you."
        compact
      />

      <section className="py-20 bg-background">
        <div className="">
          <AudienceCardGrid
            lang={lang}
            columns={3}
            items={[
              { 
                title: "Athletes", 
                path: "/education/target-groups/athletes", 
                description: "Essential guidance for all levels, from youth sport to Elite RTP athletes.", 
                icon: <Milestone className="w-8 h-8" /> 
              },
              { 
                title: "Coaches & Support Personnel", 
                path: "/education/target-groups/support-personnel", 
                description: "Learn your responsibilities and how to support clean athletes properly.", 
                icon: <Users className="w-8 h-8" /> 
              },
              { 
                title: "Medical Professionals", 
                path: "/education/target-groups/medical", 
                description: "Guidance on TUEs, medications, and safeguarding athlete health.", 
                icon: <Stethoscope className="w-8 h-8" /> 
              },
              { 
                title: "Parents & Guardians", 
                path: "/education/target-groups/parents", 
                description: "How to properly support and guide young athletes in their early careers.", 
                icon: <Users className="w-8 h-8 opacity-80" /> 
              },
              { 
                title: "Teachers & Schools", 
                path: "/education/target-groups/teachers-schools", 
                description: "Building strong values in early sport education and youth programs.", 
                icon: <BookOpen className="w-8 h-8" /> 
              },
              { 
                title: "Federations & Clubs", 
                path: "/education/target-groups/federations", 
                description: "Compliance, joint planning, and education delivery support.", 
                icon: <Building className="w-8 h-8" /> 
              },
              { 
                title: "Public & Media", 
                path: "/education/target-groups/public", 
                description: "Learn about the mission of clean sport governance and integrity.", 
                icon: <Globe className="w-8 h-8" /> 
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
