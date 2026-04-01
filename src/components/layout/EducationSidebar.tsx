"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { translations, t, type Lang } from "@/i18n/translations";

interface SidebarProps {
  lang: string;
}

export function EducationSidebar({ lang }: SidebarProps) {
  const pathname = usePathname();
  const l = lang as Lang;
  const s = translations.sidebar;

  const isActive = (path: string) => pathname === path || pathname.startsWith(`${path}/`);

  const menuItems = [
    {
      title: t(s.whatWeDo, l),
      items: [
        {
          title: t(s.education, l),
          path: `/${l}/education`,
          subItems: [
            { label: t(s.educationOverview, l), path: `/${l}/education` },
            { label: t(s.cleanSportBehaviors, l), path: `/${l}/education/clean-sport-behaviors` },
            { label: t(s.athletePathway, l), path: `/${l}/education/athlete-pathway` },
            { label: t(s.annualEducationPlan, l), path: `/${l}/education/education-plan` },
            { label: t(s.educatorNetwork, l), path: `/${l}/education/educators` },
          ]
        },
        {
          title: t(s.learningHub, l),
          path: `/${l}/education/learning`,
          subItems: [
            { label: t(s.eLearning, l), path: `/${l}/education/learning/elearning` },
            { label: t(s.webinars, l), path: `/${l}/education/learning/webinars` },
            { label: t(s.seminars, l), path: `/${l}/education/learning/seminars` },
            { label: t(s.schoolsPrograms, l), path: `/${l}/education/learning/schools-program` },
            { label: t(s.medicalEducation, l), path: `/${l}/education/learning/medical-education` },
            { label: t(s.outreachEvents, l), path: `/${l}/education/events` },
          ]
        },
        {
          title: t(s.antiDoping, l),
          path: `/${l}/education/topics`,
          subItems: [
            { label: t(s.antiDopingViolations, l), path: `/${l}/education/topics/anti-doping-rule-violations` },
            { label: t(s.prohibitedList, l), path: `/${l}/education/topics/prohibited-list` },
            { label: t(s.testingProcedures, l), path: `/${l}/education/topics/testing-procedures` },
            { label: t(s.supplementsRisk, l), path: `/${l}/education/topics/supplements-risk` },
            { label: t(s.strictLiability, l), path: `/${l}/education/topics/strict-liability` },
          ]
        },
        {
          title: t(s.targetGroups, l),
          path: `/${l}/education/target-groups`,
          subItems: [
            { label: t(s.athletes, l), path: `/${l}/education/target-groups/athletes` },
            { label: t(s.supportPersonnel, l), path: `/${l}/education/target-groups/support-personnel` },
            { label: t(s.medicalProfessionals, l), path: `/${l}/education/target-groups/medical` },
            { label: t(s.parents, l), path: `/${l}/education/target-groups/parents` },
            { label: t(s.federations, l), path: `/${l}/education/target-groups/federations` },
          ]
        },
        {
          title: t(s.tue, l),
          path: `/${l}/education/topics/tue`,
          subItems: []
        },
        {
          title: t(s.reportingSupport, l),
          path: `/${l}/education/resources`,
          subItems: [
            { label: t(s.resourceLibrary, l), path: `/${l}/education/resources` },
            { label: t(s.reportConcern, l), path: `/${l}/education/report-doping` },
            { label: t(s.faq, l), path: `/${l}/education/faq` },
            { label: t(s.contactTeam, l), path: `/${l}/education/contact` },
          ]
        }
      ]
    }
  ];

  return (
    <aside className="w-full bg-[#f7f8f9] rounded-xl border border-border p-2">
      {/* @ts-ignore */}
      <Accordion type="multiple" defaultValue={["item-0"]} className="w-full">
        {menuItems.map((section, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-none">
            <AccordionTrigger className="font-bold text-[#003466] hover:no-underline py-3 px-4 text-[15px] hover:bg-slate-50 rounded-lg">
              <span className="flex items-center gap-2">
                <span className="w-0.5 h-3 bg-[#0055a4]"></span>
                {section.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-0 pb-2">
              <div className="flex flex-col ml-3">
                {/* @ts-ignore */}
                <Accordion type="multiple" defaultValue={section.items.map((_, i) => `sub-${i}`)} className="w-full">
                  {section.items.map((item, subIdx) => {
                    const hasSubItems = item.subItems && item.subItems.length > 0;
                    const itemIsActive = isActive(item.path);

                    if (!hasSubItems) {
                      return (
                        <Link
                          key={subIdx}
                          href={item.path}
                          className={`block py-2.5 px-4 text-sm font-medium hover:text-[#0055a4] transition-colors ${itemIsActive ? 'text-[#0055a4] bg-white rounded-md shadow-sm' : 'text-slate-700'}`}
                        >
                          {item.title}
                        </Link>
                      );
                    }

                    return (
                      <AccordionItem key={subIdx} value={`sub-${subIdx}`} className="border-none">
                        <AccordionTrigger className="py-2.5 px-4 text-sm font-medium hover:no-underline hover:text-[#0055a4] text-slate-700 hover:bg-white/50 rounded-md">
                          <span className="flex items-center gap-2">
                            <span className="w-0.5 h-3 bg-amada-teal opacity-70"></span>
                            {item.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-1">
                          <ul className="flex flex-col border-l border-slate-200 ml-5 pl-3 space-y-1">
                            {item.subItems.map((subItem, linkIdx) => {
                              const subIsActive = pathname === subItem.path;
                              return (
                                <li key={linkIdx}>
                                  <Link
                                    href={subItem.path}
                                    className={`block py-1.5 px-3 text-sm rounded transition-colors ${
                                      subIsActive
                                        ? 'text-[#0055a4] font-semibold bg-white shadow-sm'
                                        : 'text-slate-600 hover:text-[#0055a4] hover:bg-white/50'
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
}
