import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Download, FileText, Video, ImageIcon, FileBarChart } from "lucide-react";

export interface ResourceItem {
  id: string;
  title: string;
  category: "Guide" | "Factsheet" | "Poster" | "Video" | "Infographic" | "Presentation";
  audience: string[];
  fileSize?: string;
}

interface ResourceGridProps {
  items: ResourceItem[];
}

export function ResourceGrid({ items }: ResourceGridProps) {
  
  const getIcon = (category: string) => {
    switch (category) {
      case "Video": return <Video className="w-8 h-8 text-amada-teal" />;
      case "Poster":
      case "Infographic": return <ImageIcon className="w-8 h-8 text-amada-teal" />;
      case "Presentation": return <FileBarChart className="w-8 h-8 text-amada-teal" />;
      default: return <FileText className="w-8 h-8 text-amada-teal" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id} className="flex flex-col border-border hover:border-amada-teal hover:shadow-md transition-all group">
          <CardHeader className="flex flex-row items-start gap-4 pb-2">
            <div className="p-3 bg-primary/5 rounded-lg group-hover:bg-amada-teal/10 transition-colors">
              {getIcon(item.category)}
            </div>
            <div>
              <span className="inline-block px-2 py-1 bg-muted text-[#102033] text-xs font-semibold rounded mb-2 uppercase tracking-wider">
                {item.category}
              </span>
              <CardTitle className="text-lg leading-tight text-primary group-hover:text-primary transition-colors">
                {item.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mt-2 text-sm text-[#102033]">
              <span className="font-semibold text-primary">For:</span> {item.audience.join(", ")}
            </div>
          </CardContent>
          <CardFooter className="pt-4 border-t border-border mt-auto">
            <a href="#" className="flex items-center w-full justify-between text-amada-teal font-semibold text-sm hover:underline group-hover:text-amada-teal">
              <span>Download</span>
              <div className="flex items-center gap-2">
                {item.fileSize && <span className="text-[#102033] font-normal text-xs">{item.fileSize}</span>}
                <Download className="w-4 h-4" />
              </div>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
