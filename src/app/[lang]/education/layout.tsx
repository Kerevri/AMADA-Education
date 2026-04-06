import { EducationSidebar } from "@/components/layout/EducationSidebar";

export default async function EducationLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Sidebar Navigation */}
        <div className="w-full lg:w-[280px] shrink-0 print:hidden">
          <div className="sticky top-24">
            <EducationSidebar lang={lang} />
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 w-full min-w-0">
          <main className="bg-white rounded-xl lg:p-6 pb-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
