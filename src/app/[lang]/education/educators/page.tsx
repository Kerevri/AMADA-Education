import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maarifləndirici şəbəkəsi | AMADA Təhsil",
  description: "AMADA-nın Maarifləndirici şəbəkəsi, akkreditasiya prosesi və müraciət qaydaları haqqında məlumat.",
};

export default async function EducatorsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Maarifləndirici şəbəkəsi" : "Educator Network"}
        subtitle={isAz
          ? "Maarifləndirici — AMADA tərəfindən müvafiq qaydada hazırlanmış, qiymətləndirilmiş, akkreditasiyadan keçirilmiş və müəyyən Təhsil Fəaliyyətlərini həyata keçirmək üçün səlahiyyət verilmiş şəxsdir."
          : "Building a nationwide network of certified educators to deliver impactful anti-doping education across Azerbaijan."}
        compact
      />

      <section className="py-16 bg-background text-foreground">
        <div className="max-w-5xl">

          {/* Intro cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <InfoCard
              title={isAz ? "Maarifləndirici kimdir?" : "Who is an AMADA Educator?"}
              content={isAz
                ? "AMADA Maarifləndiriciləri — ISE Maddə 7.0 tərəfindən müəyyən edilən, AMADA-nın hazırlıq və akkreditasiya prosesindən uğurla keçərək xüsusi Təhsil Fəaliyyətlərini aparmağa vəkil edilmiş şəxslərdir. Onlar federasiyalar, məktəblər və idman klubları daxilindəki seminarlara rəhbərlik edirlər."
                : "AMADA Educators are individuals who have completed AMADA's rigorous training and accreditation process and are empowered to lead specific Education Activities on behalf of AMADA."}
              type="info"
            />
            <InfoCard
              title={isAz ? "Niyə bu şəbəkə vacibdir?" : "Why is this network important?"}
              content={isAz
                ? "AMADA Məşqçilərin Təlimi (Training of Trainers — ToT) proqramı vasitəsilə idman federasiyaları daxilində dayanıqlı Maarifləndirici şəbəkəsi qurur. Proqrama iştirak edib akkreditasiyadan keçən məşqçilər federasiya daxilindəki seminarları müstəqil şəkildə keçirə bilərlər."
                : "Research shows that athletes learn best from people who understand their sport. By training educators from within specific sports, we ensure education is highly relevant and trusted."}
              type="success"
            />
          </div>

          {/* Akkreditasiya */}
          <div className="mb-14">
            <h2 className="text-2xl font-bold text-[#003466] mb-6">
              {isAz ? "Akkreditasiya prosesi" : "Accreditation Process"}
            </h2>
            <p className="text-[#102033] mb-6 leading-relaxed">
              {isAz
                ? "AMADA Maarifləndiricilərin akkreditasiyası prosesini ISE Maddə 7.1–7.3 tələblərinə uyğun olaraq həyata keçirir. Akkreditasiya dörd ildən çox olmayan müddət üçün verilir. Yeni Məcəllə tətbiq edildikdə yenidən akkreditasiya prosesi başlanır."
                : "AMADA implements the educator accreditation process in accordance with ISE Articles 7.1–7.3. Accreditation is granted for a period not exceeding four years and must be renewed when a new Code is implemented."}
            </p>
          </div>

          {/* Competencies + How to apply */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <ChecklistCard
              title={isAz ? "Maarifləndiricilərin kompetensiyaları" : "Educator Competencies"}
              items={isAz
                ? [
                    "Təqdimat və şəxslərarası ünsiyyət bacarıqları",
                    "Effektiv kommunikasiya qabiliyyəti",
                    "Təhsil sessiyalarının planlaşdırılması və fəaliyyətlərin işlənib hazırlanması",
                    "Müsbət öyrənmə mühitinin yaradılması",
                    "Ssenari əsaslı fəaliyyətlər vasitəsilə öyrənmənin asanlaşdırılması",
                    "Öyrənməni qiymətləndirmə metodlarının tətbiqi",
                    "Özünüqiymətləndirmə bacarıqları və fəaliyyət planlaması",
                    "ISE Maddə 8.1.1-də sadalanan bütün mövzular üzrə antidopinq texniki biliyi",
                  ]
                : [
                    "Strong presentation and interpersonal communication skills",
                    "Effective communication ability",
                    "Planning educational sessions and developing activities",
                    "Creating a positive learning environment",
                    "Facilitating scenario-based learning activities",
                    "Applying learning assessment methods",
                    "Self-evaluation skills and action planning",
                    "Technical anti-doping knowledge across all ISE Article 8.1.1 topics",
                  ]
              }
            />
            <ChecklistCard
              title={isAz ? "Necə müraciət etmək olar?" : "How to Apply"}
              items={isAz
                ? [
                    "E-poçt: education@amada.az",
                    "Onlayn müraciət forması: amada.az/educators",
                    "AMADA-nın rəsmi sosial media kanalları",
                  ]
                : [
                    "Email: education@amada.az",
                    "Online application form: amada.az/educators",
                    "AMADA official social media channels",
                  ]
              }
            />
          </div>

          <InfoCard
            title={isAz ? "ISE Maddə 7.0 — Maarifləndirici tərifi" : "ISE Article 7.0 — Educator Definition"}
            content={isAz
              ? "Bu tərif ISE Maddə 7.0-da müəyyən edilmişdir. AMADA-nın bütün Maarifləndiriciləri bu tələblərə uyğun olaraq hazırlanır və qiymətləndirilir. Akkreditasiyanı uğurla tamamlayanlar federasiya daxilindəki seminarları müstəqil şəkildə aparma səlahiyyəti əldə edirlər."
              : "This definition is established in ISE Article 7.0. All AMADA Educators are trained and assessed in accordance with these requirements and gain authority to independently lead seminars within their federation."}
            type="warning"
          />
        </div>
      </section>

      <CTASection
        title={isAz ? "Şəbəkəyə qoşulmağa hazırsınız?" : "Ready to make an impact?"}
        description={isAz
          ? "AMADA Maarifləndirici şəbəkəsinə qoşulmaq istəyən şəxslər education@amada.az ünvanına müraciət edə bilərlər."
          : "Join the next intake of the AMADA Educator Training Program."}
        primaryAction={{ label: isAz ? "Müraciət et" : "Apply Now", path: `/${lang}/education/contact` }}
        variant="primary"
      />
    </div>
  );
}
