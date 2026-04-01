import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export interface CardItem {
  title: string;
  description?: string;
  path: string;
  icon?: React.ReactNode;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3 | 4;
  lang: string;
}

export function AudienceCardGrid({ items, columns = 3, lang }: CardGridProps) {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {items.map((item, idx) => (
        <Link key={idx} href={`/${lang}${item.path}`} className="group h-full">
          <Card className="h-full flex flex-col hover:border-amada-teal hover:shadow-md transition-all">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold text-primary group-hover:text-amada-teal transition-colors">
                {item.title}
              </CardTitle>
              {item.icon && <div className="text-[#003466] opacity-80 group-hover:opacity-100">{item.icon}</div>}
            </CardHeader>
            {item.description && (
              <CardContent className="flex-1">
                <p className="text-[#102033]">{item.description}</p>
              </CardContent>
            )}
            <div className="px-6 pb-6 pt-2 mt-auto">
              <span className="text-sm font-semibold text-amada-teal flex items-center group-hover:underline">
                View Path <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export function TopicCardGrid({ items, columns = 3, lang }: CardGridProps) {
  const gridClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {items.map((item, idx) => (
        <Link key={idx} href={`/${lang}${item.path}`} className="group">
          <div className="bg-white border border-border p-5 rounded-lg h-full flex items-start gap-4 hover:border-primary hover:shadow-sm transition-all">
             <div className="mt-1 w-10 h-10 rounded-full bg-light_gray flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
               {item.icon ? item.icon : <ChevronRight className="w-5 h-5" />}
             </div>
             <div>
               <h3 className="font-semibold text-lg text-primary mb-1 group-hover:text-amada-teal transition-colors">
                 {item.title}
               </h3>
               {item.description && (
                 <p className="text-sm text-[#102033] line-clamp-2">
                   {item.description}
                 </p>
               )}
             </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
