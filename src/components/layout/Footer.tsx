import Link from "next/link";
import { translations, t, type Lang } from "@/i18n/translations";

export function Footer({ lang }: { lang: string }) {
  const l = lang as Lang;
  const isAz = l === "az";
  const footer = translations.footer;
  const nav = translations.nav;
  const s = translations.sidebar;

  return (
    <footer className="bg-primary text-white border-t border-border/20 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-primary font-bold">
                A
              </div>
              <span className="font-bold text-lg tracking-wide">AMADA Education</span>
            </div>
            <p className="text-sm text-white/70 max-w-xs leading-relaxed">
              {t(footer.description, l)}
            </p>
            <div className="text-sm text-white/70 space-y-1">
              <p>Email: education@amada.az</p>
              <p>Phone: +994 12 000 00 00</p>
            </div>
          </div>

          {/* Column 2: Key Learning Pages */}
          <div>
            <h3 className="font-semibold text-amada-gold mb-4 text-sm uppercase tracking-wider">{t(footer.keyLearning, l)}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/education/target-groups`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(nav.whoWeEducate, l)}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/athlete-pathway`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(s.athletePathway, l)}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/topics`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(nav.cleanSportTopics, l)}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/clean-sport-behaviors`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(s.cleanSportBehaviors, l)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Organization */}
          <div>
            <h3 className="font-semibold text-amada-gold mb-4 text-sm uppercase tracking-wider">{t(footer.resources, l)}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/education/resources`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(nav.resources, l)}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/education-plan`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(s.annualEducationPlan, l)}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/impact`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(s.monitorImpact, l)}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/educators`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(s.educatorNetwork, l)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Reporting & Support */}
          <div>
            <h3 className="font-semibold text-amada-gold mb-4 text-sm uppercase tracking-wider">{t(footer.support, l)}</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/education/report-doping`} className="text-sm text-white/80 hover:text-white transition-colors font-medium">
                  {t(nav.reportConcern, l)}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/faq`} className="text-sm text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/contact`} className="text-sm text-white/80 hover:text-white transition-colors">
                  {t(nav.contact, l)}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {t(footer.copyright, l)}
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white transition-colors">{t(footer.privacy, l)}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t(footer.accessibility, l)}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
