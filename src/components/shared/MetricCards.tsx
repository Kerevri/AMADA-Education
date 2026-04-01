import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Metric {
  label: string;
  value: string | number;
  description?: string;
  trend?: string; // e.g. "+15%"
}

interface MetricCardsProps {
  metrics: Metric[];
}

export function MetricCards({ metrics }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, idx) => (
        <Card key={idx} className="border-border shadow-sm hover:shadow-md transition-shadow bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#102033] uppercase tracking-wider">
              {metric.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
            {metric.description && (
              <p className="text-xs text-[#102033]">{metric.description}</p>
            )}
            {metric.trend && (
              <p className="text-xs font-semibold text-amada-teal mt-2">
                {metric.trend} from last year
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
