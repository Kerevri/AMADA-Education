import { HeroSection } from "@/components/shared/HeroSection";
import { ContactForm } from "@/components/shared/ContactForm";
import { InfoCard } from "@/components/shared/InfoCards";
import { CTASection } from "@/components/shared/CTASection";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact AMADA Education | Get in Touch",
  description: "Contact the AMADA Education team for seminars, schools programs, or general inquiries.",
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection
        title="Contact Education Team"
        subtitle="Request a seminar for your club, order printed materials, or ask us any questions about clean sport."
        compact
      />

      <section className="py-20 bg-light_gray">
        <div className=" max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info Sidebar */}
            <div className="w-full lg:w-1/3 space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amada-teal/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amada-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email Us</h4>
                  <a href="mailto:education@amada.az" className="text-[#102033] hover:text-amada-teal transition-colors">education@amada.az</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amada-teal/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-amada-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Call Us</h4>
                  <a href="tel:+994123456789" className="text-[#102033] hover:text-amada-teal transition-colors">+994 12 345 67 89</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amada-teal/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amada-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Office Address</h4>
                  <p className="text-[#102033]">Baku Olympic Stadium<br/>Heydar Aliyev ave. 323<br/>Baku, Azerbaijan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amada-teal/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amada-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Working Hours</h4>
                  <p className="text-[#102033]">Monday - Friday<br/>09:00 - 18:00</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <InfoCard
                  title="Suspect Doping?"
                  content="This contact form is for educational requests only. If you wish to report suspicious behavior, please use our secure reporting channel."
                  type="warning"
                />
              </div>
            </div>

            {/* Contact Form Area */}
            <div className="w-full lg:w-2/3">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2">Send a Request</h2>
                <p className="text-[#102033]">Fill out the form below and our education experts will respond within 48 hours.</p>
              </div>
              <ContactForm type="seminar" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need to Report a Concern?"
        description="Ensure sports integrity by reporting suspicious activities confidentially."
        primaryAction={{ label: "Go to Secure Reporting", path: `/${lang}/education/report-doping` }}
        variant="light"
      />
    </div>
  );
}
