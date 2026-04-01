import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

interface InfoCardProps {
  title: string;
  content: React.ReactNode;
  type?: "info" | "warning" | "success" | "default";
}

export function InfoCard({ title, content, type = "default" }: InfoCardProps) {
  const styles = {
    info: { border: "border-blue-200", bg: "bg-blue-50", icon: <Info className="text-blue-500 w-5 h-5" /> },
    warning: { border: "border-amber-200", bg: "bg-amber-50", icon: <AlertTriangle className="text-amber-500 w-5 h-5" /> },
    success: { border: "border-green-200", bg: "bg-green-50", icon: <CheckCircle2 className="text-green-500 w-5 h-5" /> },
    default: { border: "border-border", bg: "bg-white", icon: null },
  }[type];

  return (
    <Card className={`border ${styles.border} ${styles.bg}`}>
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        {styles.icon}
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-[#102033] text-sm leading-relaxed">
        {content}
      </CardContent>
    </Card>
  );
}

interface ChecklistProps {
  title: string;
  items: string[];
}

export function ChecklistCard({ title, items }: ChecklistProps) {
  return (
    <Card className="h-full border-border shadow-sm">
      <CardHeader className="bg-primary/5 rounded-t-lg border-b border-border pb-4">
        <CardTitle className="text-xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amada-teal shrink-0 mt-0.5" />
              <p className="text-[#102033] text-sm leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
