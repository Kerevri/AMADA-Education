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
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#003466] mb-6">
        {title}
      </h1>
      
      <div className="bg-[#e6f2f5] rounded-xl p-6 md:p-8 border border-[#cbe3e9]">
        <p className="text-lg md:text-xl text-[#1a3845] leading-relaxed">
          {subtitle}
        </p>
        
        {ctas.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-6">
            {ctas.map((cta, index) => {
              const getVariantClass = () => {
                if (cta.variant === "primary") return "bg-[#0055a4] hover:bg-[#004080] text-white border-0";
                if (cta.variant === "secondary") return "bg-white text-[#003466] border border-[#003466] hover:bg-slate-50";
                if (cta.variant === "outline") return "bg-transparent text-[#003466] border border-[#003466] hover:bg-white/50";
                return "bg-[#0055a4] hover:bg-[#004080] text-white border-0";
              };

              return (
                <Link
                  key={index}
                  href={cta.path}
                  className={`inline-flex items-center justify-center whitespace-nowrap text-sm h-11 px-6 font-semibold rounded-md transition-colors shadow-sm ${getVariantClass()}`}
                >
                  {cta.label}
                  {cta.variant === "primary" && <ChevronRight className="ml-2 w-4 h-4" />}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
