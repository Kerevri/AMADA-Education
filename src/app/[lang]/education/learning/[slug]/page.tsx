import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

const LEARNING_DATA: Record<string, Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  audience: string[];
  keyFeatures: string[];
  ctaLabel: string;
  ctaPath: string;
}>> = {
  "elearning": {
    "en": {
      title: "eLearning (WADA ADEL)",
      subtitle: "Anti-Doping Education and Learning Platform",
      intro: "WADA's ADEL platform offers interactive, online modules for all target groups. Completing specific ADEL courses is often mandatory before participating in major national or international events.",
      audience: ["Athletes (all levels)", "Coaches", "Medical Personnel", "Parents"],
      keyFeatures: [
        "Access it anywhere, anytime on your device",
        "Available in multiple languages",
        "Receive a verifiable digital certificate upon completion",
        "Tailored courses for specific roles (e.g., Medical Professional course)"
      ],
      ctaLabel: "Go to ADEL Platform",
      ctaPath: "https://adel.wada-ama.org"
    },
    "az": {
      title: "Elektron öyrənmə (ADEL)",
      subtitle: "Antidopinq və öyrənmə platforması",
      intro: "ADEL platforması müxtəlif hədəf qrupları üçün interaktiv onlayn təhsil modulları təqdim edir. Müəyyən ADEL kurslarının tamamlanması milli və ya beynəlxalq idman tədbirlərində iştirakdan əvvəl tələb oluna bilər.",
      audience: ["İdmançılar (bütün səviyyələr)", "Məşqçilər", "Tibb mütəxəssisləri", "Valideynlər və s."],
      keyFeatures: [
        "İstənilən vaxt və istənilən yerdən çıxış imkanı",
        "Çoxdilli interfeys və məzmun",
        "Tamamlandıqdan sonra yoxlanıla bilən rəqəmsal sertifikat",
        "Müxtəlif hədəf qruplarına uyğunlaşdırılmış kurslar (məsələn, tibb mütəxəssisləri üçün proqramlar və s.)"
      ],
      ctaLabel: "ADEL platformasına keçid",
      ctaPath: "https://adel.wada-ama.org"
    }
  },
  "seminars": {
    "en": {
      title: "In-Person Seminars",
      subtitle: "Direct interaction and tailored learning",
      intro: "Our trained Educators deliver in-person seminars across the country. These sessions allow for direct interaction, Q&A, and practical demonstrations of the testing process.",
      audience: ["National Teams", "Federation Staff", "Clubs", "Support Personnel"],
      keyFeatures: [
        "Facilitated by AMADA Certified Educators",
        "Scenario-based learning and case studies",
        "Practical demonstration of doping control equipment",
        "Can be held at your training facility"
      ],
      ctaLabel: "Request a Seminar",
      ctaPath: "/education/contact"
    },
    "az": {
      title: "Seminarlar",
      subtitle: "Əyani seminarlar və interaktiv sessiyalar",
      intro: "AMADA tərəfindən ölkə üzrə əyani seminarlar təşkil olunur. Bu sessiyalar interaktiv müzakirə, sual-cavab və praktiki nümayiş imkanları yaradır.",
      audience: ["Milli Komandalar", "Federasiya Heyəti", "Klublar", "Dəstək Heyəti"],
      keyFeatures: [
        "AMADA tərəfindən həyata keçirilir",
        "Ssenari əsaslı öyrənmə və praktiki nümunələr",
        "Dopinq nəzarəti prosedurlarının nümayişi",
        "Müvafiq idman qurumlarının bazasında təşkil oluna bilər"
      ],
      ctaLabel: "Seminar tələb et",
      ctaPath: "/education/contact"
    }
  },
  "webinars": {
    "en": {
      title: "Webinars",
      subtitle: "Topic-specific virtual sessions",
      intro: "AMADA regularly hosts webinars focusing on specific, critical topics such as changes to the Prohibited List, navigating the TUE process, or new anti-doping policies.",
      audience: ["All Target Groups", "General Public"],
      keyFeatures: [
        "Live Q&A with anti-doping experts",
        "Accessible remotely",
        "Recorded for later viewing in our Resource Library",
        "Focuses on current events and updates"
      ],
      ctaLabel: "View Upcoming Webinars",
      ctaPath: "/education/events"
    },
    "az": {
      title: "Vebinarlar",
      subtitle: "Mövzuya uyğun xüsusi onlayn sessiyalar",
      intro: "AMADA mütəmadi olaraq, Qadağan olunmuş siyahıdakı dəyişikliklər, Terapevtik İstifadə üçün İstisna (Tİİ) prosesi və antidopinq siyasətində yeniliklər kimi aktual mövzular üzrə vebinarlar təşkil edir.",
      audience: ["İdmançılar (bütün səviyyələr)", "Məşqçilər", "Tibb mütəxəssisləri", "Valideynlər və s.", "İctimaiyyət"],
      keyFeatures: [
        "Antidopinq üzrə mütəxəssislərlə canlı sual-cavab imkanı",
        "Məsafədən qoşulma imkanı",
        "Sessiyaların sonradan baxış üçün resurs bazasında yerləşdirilməsi",
        "Cari dəyişikliklər və yeniliklərə fokuslanmış məzmun"
      ],
      ctaLabel: "Gələcək vebinarlara bax",
      ctaPath: "/education/events"
    }
  },
  "outreach": {
    "en": {
      title: "Outreach Activities",
      subtitle: "Engaging education at events",
      intro: "Look for the AMADA Outreach Booth at major national championships and sporting events. Our booth offers a fun, informal way to test your knowledge through quizzes and interactive games.",
      audience: ["Athletes", "Spectators", "Youth", "Parents"],
      keyFeatures: [
        "Interactive WADA Play True Quiz",
        "Spin-the-wheel trivia",
        "Informational brochures and giveaways",
        "Informal chats with AMADA staff"
      ],
      ctaLabel: "See Event Calendar",
      ctaPath: "/education/events"
    },
    "az": {
      title: "Maarifləndirmə Fəaliyyətləri",
      subtitle: "Tədbirlərdə cəlbedici təhsil",
      intro: "Böyük milli çempionatlarda və idman tədbirlərində AMADA Maarifləndirmə Stendini axtarın. Stendimiz viktorinalar və interaktiv oyunlar vasitəsilə biliklərinizi yoxlamaq üçün əyləncəli və qeyri-rəsmi bir yol təklif edir.",
      audience: ["İdmançılar", "Tamaşaçılar", "Gənclər", "Valideynlər"],
      keyFeatures: [
        "İnteraktiv WADA 'Play True' Viktorinası",
        "Çarxı çevir oyunu",
        "Məlumatverici broşürlər və hədiyyələr",
        "AMADA heyəti ilə qeyri-rəsmi söhbətlər"
      ],
      ctaLabel: "Tədbir Təqviminə Bax",
      ctaPath: "/education/events"
    }
  },
  "schools-program": {
    "en": {
      title: "Schools Program",
      subtitle: "Values-based education in physical education",
      intro: "We partner with schools to deliver values-based education to children. The curriculum focuses on fair play, equity, respect, and healthy nutrition as a foundation before entering competitive sport.",
      audience: ["Teachers", "Students (Primary & Secondary)", "Parents"],
      keyFeatures: [
        "Age-appropriate lesson plans",
        "Focus on ethics and values rather than rules",
        "Train-the-trainer support for PE teachers",
        "Interactive classroom activities"
      ],
      ctaLabel: "Information for Teachers",
      ctaPath: "/education/target-groups/teachers-schools"
    },
    "az": {
      title: "Məktəb Proqramı",
      subtitle: "Bədən tərbiyəsində dəyərlərə əsaslanan təhsil",
      intro: "Biz uşaqlara dəyərlərə əsaslanan təhsil vermək üçün məktəblərlə tərəfdaşlıq edirik. Kurrikulum rəqabətli idmana başlamazdan əvvəl təməl olaraq ədalətli oyun, bərabərlik, hörmət və sağlam qidalanmaya fokuslanır.",
      audience: ["Müəllimlər", "Şagirdlər (İbtidai və Orta)", "Valideynlər"],
      keyFeatures: [
        "Yaşa uyğun dərslik planları",
        "Qaydalardan çox etika və dəyərlərə fokuslanır",
        "Bədən tərbiyəsi müəllimləri üçün təlimçi təlimi dəstəyi",
        "İnteraktiv sinif fəaliyyətləri"
      ],
      ctaLabel: "Müəllimlər Üçün Məlumat",
      ctaPath: "/education/target-groups/teachers-schools"
    }
  },
  "medical-education": {
    "en": {
      title: "Medical Education",
      subtitle: "Specialized training for sports medicine",
      intro: "Comprehensive training designed specifically for doctors, physiotherapists, and pharmacists focusing on TUEs, the Prohibited List, and safeguarding athlete health.",
      audience: ["Sports Doctors", "Physiotherapists", "Pharmacists"],
      keyFeatures: [
        "In-depth analysis of the Prohibited List",
        "Mastering the TUE application process",
        "Understanding strict liability for medical staff",
        "Continuing Medical Education (CME) alignment"
      ],
      ctaLabel: "Information for Medical Staff",
      ctaPath: "/education/target-groups/medical"
    },
    "az": {
      title: "Tibbi Təhsil",
      subtitle: "İdman təbabəti üçün ixtisaslaşmış təlim",
      intro: "Həkimlər, fizioterapevtlər və əməkdaşlar üçün Tİİ-lər, Qadağan olunmuş Siyahı və idmançı sağlamlığının qorunmasına yönəlmiş hərtərəfli təlim.",
      audience: ["İdman Həkimləri", "Fizioterapevtlər", "Əczaçılar"],
      keyFeatures: [
        "Qadağan olunmuş Siyahının dərindən təhlili",
        "Tİİ müraciət prosesini mənimsəmək",
        "Tibb heyəti üçün ciddi məsuliyyəti anlamaq",
        "Davamlı Tibbi Təhsil (DTT) uyğunluğu"
      ],
      ctaLabel: "Tibb Heyəti Üçün Məlumat",
      ctaPath: "/education/target-groups/medical"
    }
  },
  "federation-programs": {
    "en": {
      title: "Federation Programs",
      subtitle: "Custom education for NFs",
      intro: "AMADA works closely with National Federations to develop and execute customized annual education plans tailored to the specific risks of their sport.",
      audience: ["National Federations", "Club Administrators"],
      keyFeatures: [
        "Joint Annual Education Plan development",
        "Support in fulfilling compliance requirements",
        "Sport-specific risk assessments",
        "Delegation of education tasks"
      ],
      ctaLabel: "Information for Federations",
      ctaPath: "/education/target-groups/federations"
    },
    "az": {
      title: "Federasiya Proqramları",
      subtitle: "MF-lər üçün xüsusi təhsil",
      intro: "AMADA idman növünün xüsusi risklərinə uyğunlaşdırılmış illik təhsil planlarını hazırlamaq və icra etmək üçün Milli Federasiyalarla sıx əməkdaşlıq edir.",
      audience: ["Milli Federasiyalar", "Klub Administratorları"],
      keyFeatures: [
        "Birgə İllik Təhsil Planının hazırlanması",
        "Uyğunluq tələblərinin yerinə yetirilməsində dəstək",
        "İdman növünə aid risklərin qiymətləndirilməsi",
        "Təhsil tapşırıqlarının nümayəndə heyətinə verilməsi"
      ],
      ctaLabel: "Federasiyalar Üçün Məlumat",
      ctaPath: "/education/target-groups/federations"
    }
  },
  "educator-training": {
    "en": {
      title: "Educator Training",
      subtitle: "Become an AMADA Certified Educator",
      intro: "We train passionate individuals from federations and clubs to become certified Anti-Doping Educators, expanding our reach and ensuring sport-specific knowledge is utilized.",
      audience: ["Former Athletes", "Coaches", "Federation Staff"],
      keyFeatures: [
        "Intensive 2-day training program",
        "Assessment and certification process",
        "Ongoing support from AMADA",
        "Annual refresher courses"
      ],
      ctaLabel: "Apply to be an Educator",
      ctaPath: "/education/contact"
    },
    "az": {
      title: "Maarifləndirici Təlimi",
      subtitle: "AMADA Sertifikatlı Maarifləndirici olun",
      intro: "Biz federasiya və klublardan olan həvəsli şəxsləri sertifikatlı Dopinqə Qarşı Maarifləndiricilər kimi yetişdiririk, əhatə dairəmizi genişləndiririk və idmana aid biliklərin istifadəsini təmin edirik.",
      audience: ["Keçmiş İdmançılar", "Məşqçilər", "Federasiya Heyəti"],
      keyFeatures: [
        "İntensiv 2 günlük təlim proqramı",
        "Qiymətləndirmə və sertifikatlaşdırma prosesi",
        "AMADA tərəfindən davamlı dəstək",
        "İllik təkmilləşdirmə kursları"
      ],
      ctaLabel: "Maarifləndirici Olmaq Üçün Müraciət Edin",
      ctaPath: "/education/contact"
    }
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string, lang: string }> }) {
  const { slug, lang } = await params;
  const l = (lang === "az" || lang === "en") ? lang : "az";
  // Fallback to English if translation for specific lang is missing (basic check)
  const program = LEARNING_DATA[slug]?.[l] || LEARNING_DATA[slug]?.["en"];
  
  if (!program) return { title: "Program Not Found - AMADA Education" };
  
  return {
    title: `${program.title} | Learning Hub | AMADA`,
    description: program.subtitle,
  };
}

export default async function LearningSlugPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const l = (lang === "az" || lang === "en") ? lang : "az";
  const program = LEARNING_DATA[slug]?.[l] || LEARNING_DATA[slug]?.["en"];

  if (!program) {
    return (
      <div className="flex flex-col min-h-screen">
        <HeroSection title="Program Not Found" subtitle="Content for this program is unavailable." compact />
      </div>
    );
  }

  // Handle external links for ADEL
  const isExternal = program.ctaPath.startsWith("http");
  const finalPath = isExternal ? program.ctaPath : `/${lang}${program.ctaPath}`;

  const keyFeaturesTitle = l === "az" ? "Əsas xüsusiyyətlər" : "Key Features";
  const targetAudienceTitle = l === "az" ? "Hədəf auditoriya" : "Target Audience";
  const readyToParticipateTitle = l === "az" ? "İştiraka başlayın" : "Ready to participate?";
  const readyDesc = l === "az" 
    ? `${program.title} resurslarına daxil olmaq üçün aşağıdakı linkdən istifadə edin:`
    : `Follow the link below to access ${program.title.toLowerCase()} resources or request a session.`;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={program.title}
        subtitle={program.subtitle}
        compact
      />

      <section className="py-16 bg-white">
        <div className=" max-w-4xl">
          <div className="prose prose-lg max-w-none text-[#102033] mb-12">
            <p className="text-xl text-primary font-medium leading-relaxed">
              {program.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ChecklistCard
              title={keyFeaturesTitle}
              items={program.keyFeatures}
            />
            <InfoCard
              title={targetAudienceTitle}
              type="info"
              content={
                <div className="flex flex-wrap gap-2 mt-2">
                  {program.audience.map((aud, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-border text-primary text-sm font-semibold rounded-full shadow-sm">
                      {aud}
                    </span>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </section>

      <CTASection
        title={readyToParticipateTitle}
        description={readyDesc}
        primaryAction={{ label: program.ctaLabel, path: finalPath }}
        variant="teal"
      />
    </div>
  );
}
