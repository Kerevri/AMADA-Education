import { HeroSection } from "@/components/shared/HeroSection";
import { InfoCard, ChecklistCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Təbliğat Proqramları | AMADA",
  description: "Yarış, turnir və idman tədbirləri zamanı AMADA-nın hadisə əsaslı antidopinq maarifləndirməsi.",
};

export default async function EventsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title={isAz ? "Təbliğat Proqramları" : "Event-Based Education"}
        subtitle={isAz
          ? "Yarış, turnir və idman tədbirləri zamanı AMADA hadisə əsaslı antidopinq maarifləndirməsi həyata keçirir. Bu fəaliyyətlər ISE Maddə 9.2-nin Event-Based Education kateqoriyasına uyğun gəlir."
          : "Ensuring athletes are educated before they arrive at major sporting events, and engaged while they are there."}
        compact
      />

      <section className="py-16 bg-white">
        <div className="max-w-5xl">

          <div className="mb-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {isAz ? "Tədbirlərdə nə edilir?" : "What happens at events?"}
            </h2>
            <p className="text-[#102033] leading-relaxed">
              {isAz
                ? "Milli yarışlar, turnir və beynəlxalq tədbirlər zamanı AMADA idman mühitinin içindəki natural öyrənmə imkanlarından istifadə edir. Əsas məqsəd — idmançıların antidopinq qaydalarını yarışdan öncə özündə möhkəmləndirməsinə dəstək verməkdir."
                : "During national championships and major events, AMADA leverages natural learning opportunities within the sports environment. The goal is to reinforce anti-doping knowledge right before competition."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <div className="bg-slate-50 p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">
                {isAz ? "Tədbird\u0259 n\u0259 görmək olar?" : "What to Expect at Events"}
              </h3>
              <ul className="space-y-3 text-sm text-[#102033]">
                {(isAz ? [
                  "Yarışlara aid xüsusi antidopinq qaydaları",
                  "Tanıtım materialları: flayerlər, bukletlər, afişalar",
                  "AMADA stendi: məlumat, sual-cavab",
                  "QR kodlar vasitəsilə onlayn resurslara birbaşa keçid",
                ] : [
                  "Competition-specific anti-doping rules",
                  "Promotional materials: flyers, booklets, posters",
                  "AMADA booth: information, Q&A",
                  "QR codes for direct access to online resources",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amada-teal mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-border">
              <h3 className="text-xl font-bold text-primary mb-4">
                {isAz ? "ISE Maddə 9.2-yə uyğunluq" : "ISE Article 9.2 Compliance"}
              </h3>
              <p className="text-sm text-[#102033] mb-4">
                {isAz
                  ? "AMADA-nın hadisə əsaslı maarifləndirməsi WADA-nın Beynəlxalq Təhsil Standardının (ISE) Maddə 9.2-də müəyyən edilmiş Event-Based Education kateqoriyasına tam uyğundur."
                  : "AMADA's event-based education aligns with the Event-Based Education category defined in Article 9.2 of the WADA International Standard for Education (ISE)."}
              </p>
              <p className="text-sm text-[#102033]">
                {isAz
                  ? "Bu fəaliyyətlər federasiyalarla, Milli Olimpiya Komitəsi ilə və tədbirləri təşkil edən qurumlarla birlikdə planlaşdırılır."
                  : "These activities are planned in coordination with federations, the National Olympic Committee, and event organizers."}
              </p>
            </div>
          </div>

          <InfoCard
            title={isAz ? "Azərbaycanda Tədbiriniz var?" : "Hosting an Event in Azerbaijan?"}
            content={isAz
              ? "AMADA-nın maarifləndirməsini tədbirinizə daxil etmək istəyirsinizsə, education@amada.az ünvanına müraciət edin."
              : "If you'd like to include AMADA education at your event, contact education@amada.az"}
            type="info"
          />

          <div className="mt-14">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {isAz ? "Tədbirlərimizdən Video" : "Video from Our Events"}
            </h2>
            <p className="text-[#102033] mb-6">
              {isAz
                ? "Aşağıda AMADA-nın maarifləndirmə tədbirlərindən görüntülər yer alır."
                : "Watch AMADA's outreach education activities at sporting events."}
            </p>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border shadow-md">
              <iframe
                src="https://www.youtube.com/embed/gbwKUA0jKoI"
                title={isAz ? "AMADA Maarifləndirmə Tədbirləri" : "AMADA Outreach Events"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={isAz ? "Tədbiriniz üçün müraciət edin" : "Request Event Outreach"}
        description={isAz
          ? "AMADA Təhsil komandası növbəti tədbiriniz üçün hazırdır."
          : "Book the AMADA Education team for your next major championship."}
        primaryAction={{ label: isAz ? "Bizimlə əlaqə" : "Contact Us", path: `/${lang}/education/contact` }}
        variant="light"
      />
    </div>
  );
}
