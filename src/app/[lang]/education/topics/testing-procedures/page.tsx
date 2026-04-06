import { HeroSection } from "@/components/shared/HeroSection";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import {
  Target,
  Bell,
  MapPin,
  Package,
  Droplets,
  Lock,
  FileText,
  Microscope,
  Activity,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sınaq Prosedurları | AMADA Təhsil",
  description:
    "Bildirişdən sənədləşdirməyə qədər — dopinq nəzarəti zamanı addım-addım nə baş verdiyini öyrənin.",
};

interface Step {
  number: number;
  name: string;
  body: string;
  icon: React.ElementType;
  tip?: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    name: "Seçilmə",
    icon: Target,
    body: "İdmançı üç üsuldan biri ilə seçilir: risk əsaslı (yüksək risk dövri — yarış öncəsi/sonrası), fərdi hədəflənmiş (şübhəli profil, istintaq) və ya tamamilə təsadüfi. Seçilmə meyarları idmançıya əvvəlcədən bildirilmir.",
    tip: "İstənilən vaxt, istənilən yerdə seçilə bilərsiniz — yarış, məşq, ev, hətta bayram günü.",
  },
  {
    number: 2,
    name: "Bildiriş",
    icon: Bell,
    body: "Dopinq Nəzarəti İnspektoru (DNİ) və ya Müşayiətçi sizi şəxsən tapır, rəsmi şəxsiyyət vəsiqəsini göstərir və sınaq barədə məlumatlandırır. Bu andan etibarən nümunə toplanması başa çatanadək nəzarət altında qalmalısınız.",
    tip: "İnspektorun şəxsiyyət vəsiqəsini görmək hüququnuz var. Sorğulayın — bu hüququnuzdur.",
  },
  {
    number: 3,
    name: "Məntəqəyə getmə",
    icon: MapPin,
    body: "Bildirişdən dərhal sonra Dopinq Nəzarəti Məntəqəsinə (DNM) getməlisiniz. Mükafat mərasimi, media müsahibəsi kimi zəruri öhdəliklər üçün məhdud gecikmə verilə bilər — lakin bu inspektorla razılaşdırılmalıdır. Gecikmə öz başına nümunədən yayınma sayılmır, amma icazəsiz gecikmə sayılır.",
  },
  {
    number: 4,
    name: "Dəst seçimi",
    icon: Package,
    body: "DNM-ə çatdıqda sizə bir neçə möhürlü nümunə toplama dəsti təqdim edilir. Bunlardan birini özünüz seçirsiniz. Bu addım nümunənin bütövlüyünü təsdiq etmənizdir — dəstin möhürlü olduğunu yoxlayın.",
    tip: "Möhür sınmış və ya şübhəli görünən dəsti rədd etmək hüququnuz var. DNF formasına qeyd yazın.",
  },
  {
    number: 5,
    name: "Nümunə toplanması",
    icon: Droplets,
    body: "Sidik nümunəsi üçün minimum 90 ml tələb olunur. Eyni cinsli şahid nəzarətdə olur. Kifayət qədər nümunə toplana bilmirsə, qısmi nümunə möhürlənir və proses tamamlanana qədər məntəqədə qalırsınız. Lazım gəldikdə qan nümunəsi də alına bilər.",
  },
  {
    number: 6,
    name: "Bölünmə & Möhürlənmə",
    icon: Lock,
    body: "Nümunə iki şüşəyə bölünür: A şüşəsi (əsas analiz üçün) və B şüşəsi (ehtiyat — idmançının tələbi ilə yoxlama üçün). Hər şüşə unikal kodla möhürlənir. Nümunə kod altında işlənir — laboratoriya kimin olduğunu bilmir.",
    tip: "A nəticəsi qeyri-əlverişli çıxarsa, B şüşəsinin müstəqil laboratoriyada açılmasını tələb etmək hüququnuz var.",
  },
  {
    number: 7,
    name: "Sənədləşdirmə",
    icon: FileText,
    body: "Dopinq Nəzarəti Forması (DNF) diqqətlə oxunub imzalanır. Formada son 7 gündə qəbul etdiyiniz bütün dərman, qida əlavəsi və tibbi prosedurları qeyd edin. İradlarınız, hər hansı pozuntu şübhəsi — hamısını bu formada yazın. İmzalamadan əvvəl oxuyun.",
    tip: "DNF surəti sizin hüququnuzdur — inspector verməsə tələb edin. Bu sənəd hüquqi müdafiənizin əsasıdır.",
  },
  {
    number: 8,
    name: "Laboratoriya",
    icon: Microscope,
    body: "Möhürlü nümunə WADA-nın akkreditasiyalı laboratoriyasına göndərilir. A şüşəsi analiz edilir. Nəticə Qeyri-əlverişli (AAF) çıxarsa, AMADA Nəticənin İdarə Edilməsi prosesini başladır. İdmançıya yazılı bildiriş göndərilir.",
  },
];

const RIGHTS = [
  "İnspektorun şəxsiyyət vəsiqəsini görmək",
  "Nümayəndə və ya müdafiəçi dəvət etmək",
  "Nümunə dəstini özünüz seçmək",
  "DNF formasına irad və qeyd yazmaq",
  "B şüşəsinin açılmasını tələb etmək",
  "DNF-nin surətini almaq",
];

export default async function TestingProceduresPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col">
      <HeroSection
        title="Sınaq Prosedurları"
        subtitle="Bildirişdən sənədləşdirməyə qədər — dopinq nəzarəti zamanı addım-addım nə baş verdiyini öyrənin."
        compact
      />

      <div className="flex flex-col gap-12">

        {/* Lead */}
        <div className="border-l-4 border-amada-teal pl-5">
          <p className="text-[17px] text-[#003466] font-medium leading-relaxed">
            Dopinq nəzarəti WADA-nın Test etmə və Araşdırmalar üzrə Beynəlxalq Standartına (IST) uyğun həyata keçirilir. İstənilən vaxt, istənilən yerdə — məşq zamanı, evdə, yarış məntəqəsində, hətta tətil günündə belə — xəbərdarlıq olmadan dopinq nəzaratına çağırıla bilərsiniz. Prosesin hər addımını bilmək sizin hüququnuzu qoruyur.
          </p>
        </div>

        {/* Timeline */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Prosesin 8 Addımı
          </p>

          <div className="relative">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === STEPS.length - 1;
              return (
                <div key={step.number} className="flex gap-6">

                  {/* Left column: circle + connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amada-teal text-white flex items-center justify-center font-bold text-base shrink-0 shadow-md shadow-amada-teal/20 z-10">
                      {String(step.number).padStart(2, "0")}
                    </div>
                    {!isLast && (
                      <div className="w-px bg-slate-200 flex-1 my-2" />
                    )}
                  </div>

                  {/* Right column: content */}
                  <div className={`flex-1 ${isLast ? "pb-0" : "pb-10"}`}>
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className="w-4 h-4 text-amada-teal shrink-0" />
                      <h3 className="font-bold text-[#003466] text-base">
                        {step.name}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      {step.body}
                    </p>
                    {step.tip && (
                      <div className="inline-flex items-start gap-2 bg-amada-teal/5 border border-amada-teal/20 rounded-lg px-3 py-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-amada-teal shrink-0 mt-0.5" />
                        <p className="text-xs text-[#003466] leading-relaxed">
                          {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Athlete Biological Passport callout */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#003466] flex items-center justify-center shrink-0">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="font-bold text-[#003466] text-base mb-1.5">
              İdmançı Bioloji Pasportu (İBP)
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              İBP birbaşa qadağan maddə axtarmır. Qan biologiyasındakı uzunmüddətli anormal dəyişiklikləri izləyərək dopinq istifadəsinə işarə edir. Bu o deməkdir ki, müsbət test nəticəsi olmasa belə — vaxt keçdikcə profildəki sapma AQAQP üçün əsas ola bilər.
            </p>
          </div>
        </div>

        {/* Rights quick reference */}
        <div>
          <h2 className="text-lg font-bold text-[#003466] mb-5 pb-3 border-b border-slate-100 uppercase tracking-wide">
            Sınaq zamanı hüquqlarınız
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RIGHTS.map((right, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
              >
                <ChevronRight className="w-4 h-4 text-amada-teal shrink-0" />
                <p className="text-sm text-[#102033] font-medium">{right}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk callout */}
        <div className="bg-[#003466] rounded-2xl p-7 text-white">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-base mb-2">Mühüm Risk Amili</p>
              <p className="text-blue-100 leading-relaxed text-sm">
                Nümunə verməkdən imtina etmək, bildirişdən sonra inspektoru tərk etmək və ya Dopinq Nəzarəti Məntəqəsinə gəlməmək — bunların hər biri müstəqil Antidopinq Qayda Pozuntusudur (AQAQP) və standart 4 illik diskvalifikasiyaya yol açır. <strong className="text-white">&quot;Hazır deyildim&quot;</strong> və ya <strong className="text-white">&quot;xəbərim olmadı&quot;</strong> bəhanəsi qəbul edilmir.
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="flex flex-col sm:flex-row gap-3 pb-4">
          <a
            href="https://www.wada-ama.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-4 h-4 text-[#0055a4] shrink-0" />
            <p className="font-semibold text-[#003466] text-sm group-hover:underline leading-snug">
              WADA Test etmə Standartı (IST)
            </p>
          </a>
          <a
            href="mailto:education@amada.az"
            className="flex items-center gap-3 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-4 shadow-sm hover:border-[#0055a4] hover:shadow-md transition-all group"
          >
            <ExternalLink className="w-4 h-4 text-[#0055a4] shrink-0" />
            <p className="font-semibold text-[#003466] text-sm group-hover:underline leading-snug">
              AMADA Sınaq Sualları: education@amada.az
            </p>
          </a>
        </div>

      </div>

      <CTASection
        title="Öyrənməyə Davam Et"
        description="Növbəti əsas mövzu: ciddi məsuliyyət prinsipi nə deməkdir?"
        primaryAction={{
          label: "Ciddi Məsuliyyət haqqında öyrən",
          path: `/${lang}/education/topics/strict-liability`,
        }}
        secondaryAction={{
          label: "Bütün Mövzulara Bax",
          path: `/${lang}/education/topics`,
        }}
        variant="light"
      />
    </div>
  );
}
