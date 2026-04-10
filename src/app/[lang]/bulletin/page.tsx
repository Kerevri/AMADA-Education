import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Download, ChevronRight, Mail, BookOpen, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "e-Bülletin | AMADA Təhsil",
  description: "AMADA-nın aylıq Antidopinq e-Bülleteni — son xəbərlər, qərar nümunələri, Qadağan Edilmiş Siyahı yenilikləri və proqram xülasələri.",
};

interface Bulletin {
  id: string;
  issue: string;
  date: string;
  dateEn: string;
  title: string;
  titleEn: string;
  highlights: string[];
  highlightsEn: string[];
  tag: string;
  featured?: boolean;
}

const BULLETINS: Bulletin[] = [
  {
    id: "2025-04",
    issue: "№ 04 / 2025",
    date: "Aprel 2025",
    dateEn: "April 2025",
    title: "Qadağan Edilmiş Siyahı 2025: Yeni Əlavələr və Dəyişikliklər",
    titleEn: "2025 Prohibited List: New Additions and Changes",
    highlights: [
      "Stimulyatorlar bölməsindəki yeniliklər",
      "Peptid hormonları: iki yeni maddə əlavə edildi",
      "Narko analgetiklər: dəyişdirilmiş hədlər",
      "GlobalDRO v2 interfeys yeniləməsi haqqında məlumat",
    ],
    highlightsEn: [
      "Updates in the Stimulants section",
      "Peptide hormones: two new substances added",
      "Narcotic analgesics: revised thresholds",
      "Information on GlobalDRO v2 interface update",
    ],
    tag: "Qadağan Edilmiş Siyahı",
    featured: true,
  },
  {
    id: "2025-03",
    issue: "№ 03 / 2025",
    date: "Mart 2025",
    dateEn: "March 2025",
    title: "Dopinq Nəzarəti: Yarış Mövsümünə Hazırlıq",
    titleEn: "Doping Control: Preparing for the Competition Season",
    highlights: [
      "Yarış öncəsi yoxlama: nə etməli?",
      "ADAMS hesabını aktiv saxlamağın 5 yolu",
      "Tibb heyəti üçün xatırlatma: Tİİ müraciəti",
      "Federasiya Seminar Cədvəli — 2025 I rüb nəticələri",
    ],
    highlightsEn: [
      "Pre-competition checklist: what to do?",
      "5 ways to keep your ADAMS account active",
      "Reminder for medical staff: TUE applications",
      "Federation Seminar Schedule — Q1 2025 results",
    ],
    tag: "Nəzarət & Hazırlıq",
  },
  {
    id: "2025-02",
    issue: "№ 02 / 2025",
    date: "Fevral 2025",
    dateEn: "February 2025",
    title: "Qida Əlavələri: Gizli Risklər və Qorunma Yolları",
    titleEn: "Food Supplements: Hidden Risks and How to Stay Safe",
    highlights: [
      "Qidalanmada 'Sağlam Qida Əvvəlcə' prinsipi",
      "Sertifikatlı əlavə qidaların siyahısı: Informed Sport",
      "Nümunə hadisə: çirklənmiş protein tozu",
      "Həkimlə məsləhət: nə soruşmalısınız?",
    ],
    highlightsEn: [
      "'Food First' approach in nutrition",
      "List of certified supplements: Informed Sport",
      "Case study: contaminated protein powder",
      "Consulting your doctor: what to ask?",
    ],
    tag: "Qida Əlavələri",
  },
  {
    id: "2025-01",
    issue: "№ 01 / 2025",
    date: "Yanvar 2025",
    dateEn: "January 2025",
    title: "2025-ci İlə Xoş Gəldiniz: AMADA Proqramlarında Yeniliklər",
    titleEn: "Welcome to 2025: Updates to AMADA Programs",
    highlights: [
      "2025-ci İl Təhsil Planı: əsas hədəflər",
      "ADEL platformasında yeni kurslar",
      "29 federasiya üzrə seminar paylanması",
      "Maarifləndirici şəbəkəsi genişləndirildi: yeni 8 akkreditasiya",
    ],
    highlightsEn: [
      "2025 Education Plan: key targets",
      "New courses on the ADEL platform",
      "Seminar distribution across 29 federations",
      "Educator network expanded: 8 new accreditations",
    ],
    tag: "İllik Plan",
  },
  {
    id: "2024-12",
    issue: "№ 12 / 2024",
    date: "Dekabr 2024",
    dateEn: "December 2024",
    title: "2024-cü İlin Yekunu: Nəticələr, Perspektivlər",
    titleEn: "Year in Review 2024: Results and Outlook",
    highlights: [
      "2024-cü ildə keçirilən seminarların statistikası",
      "İştirakçı sayı: 1,200+ idmançı və İKH",
      "ADEL platformasında sertifikat alanların sayı",
      "2025-ci il üçün strateji hədəflər",
    ],
    highlightsEn: [
      "2024 seminar statistics",
      "Participants: 1,200+ athletes and support personnel",
      "Number of ADEL platform certificate holders",
      "Strategic targets for 2025",
    ],
    tag: "İllik Hesabat",
  },
  {
    id: "2024-11",
    issue: "№ 11 / 2024",
    date: "Noyabr 2024",
    dateEn: "November 2024",
    title: "Gənc İdmançılar: Antidopinq Təhsilinə Erkən Başlanğıc",
    titleEn: "Young Athletes: Starting Anti-Doping Education Early",
    highlights: [
      "İdmanta Uşaqlar mərhələsi üçün yeni materiallar",
      "Valideynlər üçün yaddaş vərəqi",
      "Məktəb proqramı pilot nəticələri",
      "Bədən tərbiyəsi müəlimləri üçün metodiki tövsiyələr",
    ],
    highlightsEn: [
      "New materials for the Children in Sport stage",
      "Information sheet for parents",
      "School program pilot results",
      "Methodological recommendations for PE teachers",
    ],
    tag: "Gənclər",
  },
];

export default async function BulletinPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isAz = lang === "az";

  const featured = BULLETINS.find((b) => b.featured);
  const rest = BULLETINS.filter((b) => !b.featured);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1F3864] via-[#003466] to-[#0D9488] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 text-teal-300 text-sm font-semibold mb-4 uppercase tracking-widest">
            <Bell className="w-4 h-4" />
            {isAz ? "Rəsmi Nəşr" : "Official Publication"}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            AMADA <span className="text-teal-300">e-Bülletin</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            {isAz
              ? "Antidopinq sahəsindəki son yeniliklər, qərar nümunələri, Qadağan Edilmiş Siyahı dəyişiklikləri və proqram xülasələri — hər ay bir bülletendə."
              : "The latest updates in anti-doping, case examples, Prohibited List changes, and program summaries — delivered monthly in one bulletin."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#bulletins"
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              {isAz ? "Bülletenləri Gör" : "Browse Bulletins"}
            </a>
            <a
              href={`/${lang}/bulletin/subscribe`}
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              {isAz ? "Abunə Ol" : "Subscribe"}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Featured / Latest */}
        {featured && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-1 bg-teal-500 block rounded" />
              <h2 className="text-xl font-bold text-[#1F3864]">
                {isAz ? "Son Bülletin" : "Latest Bulletin"}
              </h2>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-[#003466] to-[#0D9488] h-2" />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {isAz ? "Ən Yeni" : "Latest"}
                  </span>
                  <span className="text-slate-500 text-sm font-semibold">{featured.issue}</span>
                  <span className="flex items-center gap-1 text-slate-400 text-sm">
                    <Calendar className="w-3.5 h-3.5" />
                    {isAz ? featured.date : featured.dateEn}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#1F3864] mb-4">
                  {isAz ? featured.title : featured.titleEn}
                </h3>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  {isAz ? "Bu sayda:" : "In this issue:"}
                </p>
                <ul className="space-y-2 mb-6">
                  {(isAz ? featured.highlights : featured.highlightsEn).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#003466] text-sm">
                      <ChevronRight className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    href={`/${lang}/bulletin/${featured.id}`}
                    className="inline-flex items-center gap-2 bg-[#003466] hover:bg-[#0D9488] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    {isAz ? "Oxu" : "Read"}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <button className="inline-flex items-center gap-2 border border-slate-200 hover:border-slate-300 text-[#003466] font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">
                    <Download className="w-4 h-4" />
                    PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Archive */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-1 bg-[#003466] block rounded" />
            <h2 className="text-xl font-bold text-[#1F3864]">
              {isAz ? "Arxiv" : "Archive"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((bulletin) => (
              <div
                key={bulletin.id}
                className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0D9488] transition-all p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1 rounded-full">
                    {bulletin.tag}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    {isAz ? bulletin.date : bulletin.dateEn}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 mb-1">{bulletin.issue}</p>
                  <h3 className="font-bold text-[#1F3864] text-sm leading-snug">
                    {isAz ? bulletin.title : bulletin.titleEn}
                  </h3>
                </div>
                <ul className="space-y-1">
                  {(isAz ? bulletin.highlights : bulletin.highlightsEn).slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-500 text-xs">
                      <ChevronRight className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-auto pt-2">
                  <Link
                    href={`/${lang}/bulletin/${bulletin.id}`}
                    className="inline-flex items-center gap-1 text-[#0D9488] hover:text-[#003466] font-semibold text-xs transition-colors"
                  >
                    {isAz ? "Oxu" : "Read"}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-slate-200">|</span>
                  <button className="inline-flex items-center gap-1 text-slate-400 hover:text-[#003466] font-semibold text-xs transition-colors">
                    <Download className="w-3.5 h-3.5" />
                    PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#1F3864] to-[#0D9488] rounded-2xl p-8 text-white text-center">
          <Mail className="w-10 h-10 mx-auto mb-4 text-teal-200" />
          <h2 className="text-2xl font-bold mb-3">
            {isAz ? "Hər Ay Bülleteni Alın" : "Get the Bulletin Every Month"}
          </h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
            {isAz
              ? "AMADA e-Bülletenə abunə olun və antidopinq sahəsindəki ən son yenilikləri birbaşa e-poçtunuza alın."
              : "Subscribe to the AMADA e-Bulletin and receive the latest anti-doping updates directly in your inbox."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={isAz ? "E-poçt ünvanınız" : "Your email address"}
              className="flex-1 px-4 py-3 rounded-lg text-[#003466] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm whitespace-nowrap">
              {isAz ? "Abunə Ol" : "Subscribe"}
            </button>
          </div>
          <p className="text-xs text-blue-200 mt-3">
            {isAz ? "Məxfilik siyasətimizə uyğun olaraq e-poçtunuz qorunur." : "Your email is protected per our privacy policy."}
          </p>
        </div>
      </div>
    </div>
  );
}
