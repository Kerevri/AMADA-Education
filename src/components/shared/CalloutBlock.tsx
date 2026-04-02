import { Lightbulb, AlertTriangle, Info } from "lucide-react";

export type CalloutVariant = "fact" | "warning" | "note";

interface CalloutBlockProps {
  title?: string;
  children: React.ReactNode;
  variant?: CalloutVariant;
  className?: string; // Add this line
}

export function CalloutBlock({ title, children, variant = "note", className = "" }: CalloutBlockProps) {
  const getStyles = () => {
    switch (variant) {
      case "fact":
        return {
          container: "bg-amada-teal/10 border-l-4 border-amada-teal",
          iconContainer: "bg-amada-teal text-white",
          icon: <Lightbulb className="w-5 h-5" />,
          titleText: "text-[#008A8D]",
        };
      case "warning":
        return {
          container: "bg-amber-50 border-l-4 border-amber-500",
          iconContainer: "bg-amber-500 text-white",
          icon: <AlertTriangle className="w-5 h-5" />,
          titleText: "text-amber-700",
        };
      case "note":
      default:
        return {
          container: "bg-[#F0F7FF] border-l-4 border-[#0055a4]",
          iconContainer: "bg-[#0055a4] text-white",
          icon: <Info className="w-5 h-5" />,
          titleText: "text-[#003466]",
        };
    }
  };

  const s = getStyles();

  return (
    <div className={`flex rounded-r-xl ${s.container} p-4 md:p-6 shadow-sm my-6 ${className}`}>
      <div className={`mt-1 shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 shadow-sm ${s.iconContainer}`}>
        {s.icon}
      </div>
      <div>
        {title && <h4 className={`text-lg font-bold mb-2 ${s.titleText}`}>{title}</h4>}
        <div className="text-[#102033] leading-relaxed font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}
