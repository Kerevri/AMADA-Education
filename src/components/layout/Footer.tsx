import Link from "next/link";

export function Footer({ lang }: { lang: string }) {
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
              Empowering clean sport through high-quality, accessible, and prevention-focused anti-doping education.
            </p>
            <div className="text-sm text-white/70 space-y-1">
              <p>Email: education@amada.az</p>
              <p>Phone: +994 12 000 00 00</p>
            </div>
          </div>

          {/* Column 2: Key Learning Pages */}
          <div>
            <h3 className="font-semibold text-amada-gold mb-4 text-sm uppercase tracking-wider">Key Learning</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/education/target-groups`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Who We Educate
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/athlete-pathway`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Athlete Pathway
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/topics`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Clean Sport Topics
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/clean-sport-behaviors`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Clean Sport Behaviors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Organization */}
          <div>
            <h3 className="font-semibold text-amada-gold mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/education/resources`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/education-plan`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Annual Education Plan
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/impact`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Monitoring & Impact
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/educators`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Educators
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Reporting & Support */}
          <div>
            <h3 className="font-semibold text-amada-gold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${lang}/education/report-doping`} className="text-sm text-white/80 hover:text-white transition-colors font-medium">
                  Report a Concern
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/faq`} className="text-sm text-white/80 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/education/contact`} className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Azerbaijan National Anti-Doping Agency (AMADA). All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="#" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
