import { ChevronRight } from "lucide-react";

interface Stage {
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

interface TimelineSectionProps {
  title: string;
  description?: string;
  stages: Stage[];
}

export function TimelineSection({ title, description, stages }: TimelineSectionProps) {
  return (
    <section className="py-10 bg-white">
      <div className="px-1">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#003466] mb-3">{title}</h2>
          {description && <p className="text-base text-[#102033]">{description}</p>}
        </div>

        <div className="relative border-l-2 border-amada-teal/30 ml-4 md:ml-8 space-y-12 pb-8">
          {stages.map((stage, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              <div className="absolute w-6 h-6 bg-amada-teal rounded-full -left-[13px] top-1 border-4 border-white shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <div className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{stage.title}</h3>
                    <p className="text-sm font-semibold text-amada-gold uppercase tracking-wider mt-1">
                      {stage.subtitle}
                    </p>
                  </div>
                </div>
                
                <p className="text-[#102033] mb-6 line-clamp-3 md:line-clamp-none">
                  {stage.description}
                </p>
                
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold text-sm text-primary mb-3">Key Focus Areas:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {stage.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-amada-teal shrink-0 mt-0.5" />
                        <p className="text-[#003466] text-sm leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
