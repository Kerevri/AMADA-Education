import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    path: string;
  };
  secondaryAction?: {
    label: string;
    path: string;
  };
  variant?: "primary" | "light" | "teal";
}

export function CTASection({ title, description, primaryAction, secondaryAction, variant = "primary" }: CTASectionProps) {
  const bgColors = {
    primary: "bg-primary text-white",
    light: "bg-muted text-primary border-t border-b border-border",
    teal: "bg-amada-teal text-white",
  };

  const buttonClasses = {
    primary: "bg-amada-teal hover:bg-amada-teal/90 text-white",
    light: "bg-primary hover:bg-primary/90 text-white",
    teal: "bg-white text-amada-teal hover:bg-white/90",
  };

  const secondaryClasses = {
    primary: "border-white text-white hover:bg-white/10",
    light: "border-primary text-primary hover:bg-primary/5",
    teal: "border-white text-white hover:bg-white/10",
  };

  return (
    <section className={`py-12 md:py-16 rounded-2xl ${bgColors[variant]}`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${variant === "light" ? "text-primary" : "text-white"}`}>
          {title}
        </h2>
        <p className={`text-base mb-8 ${variant === "light" ? "text-[#102033]" : "text-white/80"}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryAction.path}
            className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold rounded-md h-11 px-8 ${buttonClasses[variant]} transition-colors shadow-sm`}
          >
            {primaryAction.label}
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
          
          {secondaryAction && (
            <Link
              href={secondaryAction.path}
              className={`inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold rounded-md h-11 px-8 border-2 ${secondaryClasses[variant]} transition-colors`}
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
