import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string; // Optional background image URL
}

export function PageHeader({ title, description, breadcrumbs, bgImage }: PageHeaderProps) {
  return (
    <div className="mb-10 w-full">
      {/* Breadcrumbs above the header box */}
      <nav className="flex items-center text-[13px] md:text-sm font-medium text-slate-500 mb-4 flex-wrap gap-y-2 px-1">
        {breadcrumbs.map((item, index) => {
           const isLast = index === breadcrumbs.length - 1;
           return (
             <div key={index} className="flex items-center">
               {index === 0 && <Home className="w-4 h-4 mr-1.5" />}
               {item.href && !isLast ? (
                 <Link href={item.href} className="hover:text-amada-teal transition-colors">
                   {item.label}
                 </Link>
               ) : (
                 <span className={`${isLast ? 'text-[#003466]' : ''} font-bold`}>
                   {item.label}
                 </span>
               )}
               {!isLast && <ChevronRight className="w-3.5 h-3.5 mx-2 opacity-50" />}
             </div>
           );
        })}
      </nav>

      {/* Header Box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm relative overflow-hidden">
        {/* Subtle decorative accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amada-teal"></div>
        
        <div className="flex flex-col md:flex-row gap-6 relative z-10">
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#003466] mb-3 leading-tight text-balance">
              {title}
            </h1>
            
            {description && (
              <p className="text-base md:text-[17px] text-slate-600 max-w-3xl leading-relaxed font-medium">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
