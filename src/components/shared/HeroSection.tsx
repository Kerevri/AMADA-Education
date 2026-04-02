import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CTA {
  label: string;
  path: string;
  variant?: "primary" | "secondary" | "outline";
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctas?: CTA[];
  compact?: boolean; // For subpages
}

export function HeroSection({ title, subtitle, ctas = [], compact = false }: HeroSectionProps) {
  return (
    <div className="mb-10 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row relative">
      {/* Subtle decorative accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amada-teal"></div>
      
      <div className="flex-1 px-6 py-8 md:px-10 md:py-10">
        <h1 className={`${compact ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'} font-bold text-[#003466] mb-4 
leading-tight tracking-tight`}>
          {title}
        </h1>
        <p className="text-base md:text-[17px] text-slate-600 leading-relaxed font-medium mb-6 max-w-2xl">
          {subtitle}
        </p>
        
        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-4">
            {ctas.map((cta, index) => {
              const getVariantClass = () => {
                if (cta.variant === "primary") return "bg-amada-teal hover:bg-[#008A8D] text-white border-0 shadow-sm";
                if (cta.variant === "secondary") return "bg-slate-100 text-[#003466] border-0 hover:bg-slate-200";
                if (cta.variant === "outline") return "bg-white text-[#003466] border border-slate-300 hover:border-[#003466] hover:bg-slate-50";
                return "bg-[#005EB8] hover:bg-[#004A99] text-white border-0";
              };

              return (
                <Link
                  key={index}
                  href={cta.path}
                  className={`inline-flex items-center justify-center whitespace-nowrap text-sm h-10 px-5 font-semibold rounded-md transition-all duration-200 ${getVariantClass()}`}
                >
                  {cta.label}
                  {cta.variant === "primary" && <ChevronRight className="ml-1.5 w-4 h-4" />}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
