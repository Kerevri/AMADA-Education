import { HeroSection } from "@/components/shared/HeroSection";
import { TopicCardGrid } from "@/components/shared/CardGrids";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import { MonitorPlay, Users, BookOpen, Stethoscope, Building, Tent, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Hub | AMADA Education",
  description: "Discover our educational programs, from eLearning to in-person seminars and outreach.",
};

export default async function LearningHubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const learningItems = [
    { 
      title: "eLearning (WADA ADEL)", 
      description: "Complete mandatory online courses and receive certifications at your own pace.", 
      path: "/education/learning/elearning", 
      icon: <MonitorPlay className="w-6 h-6" /> 
    },
    { 
      title: "Seminars", 
      description: "Interactive, face-to-face sessions delivered by AMADA's trained Educators.", 
      path: "/education/learning/seminars", 
      icon: <Users className="w-6 h-6" /> 
    },
    { 
      title: "Webinars", 
      description: "Virtual topic-specific sessions accessible from anywhere.", 
      path: "/education/learning/webinars", 
      icon: <MonitorPlay className="w-6 h-6" /> 
    },
    { 
      title: "Outreach Activities", 
      description: "Engaging, fun quizzes and activities at major sporting events.", 
      path: "/education/learning/outreach", 
      icon: <Tent className="w-6 h-6" /> 
    },
    { 
      title: "Schools Programs", 
      description: "Values-based education delivered directly in the classroom.", 
      path: "/education/learning/schools-program", 
      icon: <BookOpen className="w-6 h-6" /> 
    },
    { 
      title: "Medical Education", 
      description: "Specialized training for sports doctors and physiotherapists.", 
      path: "/education/learning/medical-education", 
      icon: <Stethoscope className="w-6 h-6" /> 
    },
    { 
      title: "Federation Programs", 
      description: "Joint educational activities designed for national federations.", 
      path: "/education/learning/federation-programs", 
      icon: <Building className="w-6 h-6" /> 
    },
    { 
      title: "Educator Training", 
      description: "Become a certified Anti-Doping Educator for your sport.", 
      path: "/education/learning/educator-training", 
      icon: <GraduationCap className="w-6 h-6" /> 
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Learning Hub"
        subtitle="Explore the variety of ways AMADA delivers anti-doping education. Find the right format for your needs, from quick digital courses to comprehensive in-person seminars."
        compact
      />

      <section className="py-20 bg-background text-foreground">
        <div className=" max-w-6xl">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-4">Educational Programs</h2>
            <p className="text-lg text-[#102033]">Select a program below to learn more, find out who it is for, and request a session.</p>
          </div>
          
          <TopicCardGrid lang={lang} items={learningItems} columns={4} />
        </div>
      </section>

      <CTASection
        title="Need to Request a Session?"
        description="Whether you're a federation, club, or school, you can request a dedicated educational session from AMADA."
        primaryAction={{ label: "Request a Session", path: `/${lang}/education/contact` }}
        secondaryAction={{ label: "View Event Calendar", path: `/${lang}/education/events` }}
        variant="primary"
      />
    </div>
  );
}
