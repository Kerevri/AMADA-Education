import { HeroSection } from "@/components/shared/HeroSection";
import { ResourceGrid } from "@/components/shared/ResourceGrid";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resurs Kitabxanası | AMADA Təhsil",
  description: "Dopinqə qarşı qaydalar, sınaqlar və dərmanlar haqqında bələdçilər, fakt-vərəqlər, posterlər və videolar.",
};

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  const resources = [
    { 
      id: "1", 
      title: isAz ? "İdmançının Dopinqə Qarşı Bələdçisi (2025)" : "Athlete Anti-Doping Guide (2025)", 
      category: isAz ? "Bələdçi" : "Guide", 
      audience: isAz ? ["İdmançılar", "Dəstək Heyəti"] : ["Athletes", "Support Personnel"], 
      fileSize: "2.4 MB" 
    },
    { 
      id: "2", 
      title: isAz ? "Valideynlərin Təmiz İdman Bələdçisi" : "Parents' Guide to Clean Sport", 
      category: isAz ? "Bələdçi" : "Guide", 
      audience: isAz ? ["Valideynlər"] : ["Parents"], 
      fileSize: "1.8 MB" 
    },
    { 
      id: "3", 
      title: isAz ? "Dopinq Kontrol Prosesi Posteri" : "Doping Control Process Poster", 
      category: isAz ? "Poster" : "Poster", 
      audience: isAz ? ["Federasiyalar", "Klublar", "Məktəblər"] : ["Federations", "Clubs", "Schools"], 
      fileSize: "4.1 MB" 
    },
    { 
      id: "4", 
      title: isAz ? "Tİİ Müraciət Fakt-vərəqi" : "TUE Application Factsheet", 
      category: isAz ? "Fakt-vərəqi" : "Factsheet", 
      audience: isAz ? ["Tibb Heyəti", "İdmançılar"] : ["Medical", "Athletes"], 
      fileSize: "800 KB" 
    },
    { 
      id: "5", 
      title: isAz ? "Əlavə Qidaların Təhlükələri" : "Dangers of Supplements", 
      category: isAz ? "İnfografika" : "Infographic", 
      audience: isAz ? ["Bütün Hədəf Qrupları"] : ["All Target Groups"], 
      fileSize: "1.2 MB" 
    },
    { 
      id: "6", 
      title: isAz ? "Qadağan olunmuş Siyahı Nədir?" : "What is the Prohibited List?", 
      category: isAz ? "Video" : "Video", 
      audience: isAz ? ["Bütün Hədəf Qrupları"] : ["All Target Groups"], 
      fileSize: isAz ? "İndi İzlə" : "Watch Now" 
    }
  ] as const;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Resurs Kitabxanası" : "Resource Library"}
        subtitle={isAz 
          ? "Rəsmi AMADA təhsil materiallarına, WADA bələdçilərinə, fakt-vərəqlərinə və multimedia məzmununa daxil olun və yükləyin." 
          : "Access and download official AMADA educational materials, WADA guides, factsheets, and multimedia content."}
        compact
      />

      <section className="py-20 bg-background text-foreground">
        <div className=" max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 pb-4 border-b border-border gap-4">
            <h2 className="text-2xl font-bold text-primary">{isAz ? "Yükləmələr & Multimedia" : "Downloads & Multimedia"}</h2>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              {(isAz ? ["Hamısı", "Bələdçilər", "Fakt-vərəqlər", "Posterlər", "Videolar"] : ["All", "Guides", "Factsheets", "Posters", "Videos"]).map(filter => (
                <button key={filter} className="whitespace-nowrap px-4 py-2 rounded-full border border-border bg-white text-sm font-medium hover:bg-amada-teal hover:text-white hover:border-amada-teal transition-colors">
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <ResourceGrid items={resources as any} />
        </div>
      </section>

      <CTASection
        title={isAz ? "Çap materialları lazımdır?" : "Need printed materials?"}
        description={isAz 
          ? "Federasiyalar və klublar təlim müəssisələri üçün çap olunmuş posterlər və broşürlər sifariş edə bilərlər." 
          : "Federations and clubs can request printed posters and brochures for their training facilities."}
        primaryAction={{ label: isAz ? "Çap Üçün Bizimlə Əlaqə" : "Contact Us for Prints", path: `/${lang}/education/contact` }}
        variant="light"
      />
    </div>
  );
}
