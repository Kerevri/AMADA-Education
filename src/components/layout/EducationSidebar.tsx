"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { translations, t, type Lang } from "@/i18n/translations";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarProps {
  lang: string;
}

interface NavItem {
  label: string;
  path: string;
}

interface NavSectionProps {
  title: string;
  titleHref: string;
  isActive: (path: string) => boolean;
  activeStyles: string;
  hoverStyles: string;
  items: NavItem[];
}

function NavSection({
  title,
  titleHref,
  isActive,
  activeStyles,
  hoverStyles,
  items,
}: NavSectionProps) {
  const isTitleActive = isActive(titleHref);
  const isAnyChildActive = items.some((item) => isActive(item.path));
  const shouldBeExpanded = isTitleActive || isAnyChildActive;

  const [isExpanded, setIsExpanded] = useState(shouldBeExpanded);

  useEffect(() => {
    if (shouldBeExpanded) {
      setIsExpanded(true);
    }
  }, [shouldBeExpanded]);

  return (
    <div className="flex flex-col mt-2">
      <div className="flex items-center group relative">
        <Link
          href={titleHref}
          className={`flex-1 py-2 px-4 text-[14px] font-medium text-[#0D9488] ml-4 rounded-r-md ${
            isTitleActive ? activeStyles : hoverStyles
          } pr-10`}
        >
          {title}
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsExpanded(!isExpanded);
          }}
          className="absolute right-2 p-1.5 text-[#0D9488] hover:bg-slate-100 rounded-md transition-colors"
          aria-label="Toggle section"
        >
          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      {isExpanded && (
        <div className="flex flex-col ml-8 border-l border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className={`py-1.5 px-4 text-[13px] text-[#4B5563] ml-[-1px] border-l border-transparent rounded-r-md ${
                isActive(item.path) ? activeStyles : hoverStyles
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function EducationSidebar({ lang }: SidebarProps) {
  const pathname = usePathname();
  const l = lang as Lang;
  const s = translations.sidebar;

  const isActive = (path: string) => pathname === path;

  const activeStyles =
    "border-l-[3px] border-amada-teal bg-amada-teal/10 text-amada-teal font-semibold";
  const hoverStyles = "hover:bg-[#F0FDFA] transition-colors duration-200";

  return (
    <aside className="hidden lg:block w-full sticky top-24 h-[calc(100vh-120px)] overflow-y-auto pr-2 pb-10">
      <nav className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-[#1F3864] font-bold text-[13px] uppercase tracking-wider mb-2">
            {t(s.whatWeDo, l)}
          </div>

          <div className="flex flex-col gap-1">
            {/* Təhsil */}
            <NavSection
              title={t(s.education, l)}
              titleHref={`/${l}/education`}
              isActive={isActive}
              activeStyles={activeStyles}
              hoverStyles={hoverStyles}
              items={[
                { label: t(s.educationOverview, l), path: `/${l}/education` },
                { label: t(s.cleanSportBehaviors, l), path: `/${l}/education/clean-sport-behaviors` },
                { label: t(s.athletePathway, l), path: `/${l}/education/athlete-pathway` },
              ]}
            />

            {/* Öyrənmə Mərkəzi */}
            <NavSection
              title={t(s.learningHub, l)}
              titleHref={`/${l}/education/learning`}
              isActive={isActive}
              activeStyles={activeStyles}
              hoverStyles={hoverStyles}
              items={[
                { label: t(s.eLearning, l), path: `/${l}/education/learning/elearning` },
                { label: t(s.webinars, l), path: `/${l}/education/learning/webinars` },
                { label: t(s.seminars, l), path: `/${l}/education/learning/seminars` },
                { label: t(s.schoolsPrograms, l), path: `/${l}/education/learning/schools-program` },
                { label: t(s.eventBasedEducation, l), path: `/${l}/education/events` },
              ]}
            />

            {/* Təmiz İdman Mövzuları */}
            <NavSection
              title={t(s.cleanSportTopics, l)}
              titleHref={`/${l}/education/topics`}
              isActive={isActive}
              activeStyles={activeStyles}
              hoverStyles={hoverStyles}
              items={[
                { label: t(s.antiDopingViolations, l), path: `/${l}/education/topics/anti-doping-rule-violations` },
                { label: t(s.rightsResponsibilities, l), path: `/${l}/education/topics/rights-and-responsibilities` },
                { label: t(s.consequences, l), path: `/${l}/education/topics/consequences` },
                { label: t(s.governance, l), path: `/${l}/education/topics/governance` },
                { label: t(s.valuesCleanSport, l), path: `/${l}/education/topics/values-clean-sport` },
                { label: t(s.whereaboutsAdams, l), path: `/${l}/education/topics/whereabouts-adams` },
                { label: t(s.supplementsRisk, l), path: `/${l}/education/topics/supplements-risk` },
                { label: t(s.prohibitedList, l), path: `/${l}/education/topics/prohibited-list` },
                { label: t(s.testingProcedures, l), path: `/${l}/education/topics/testing-procedures` },
                { label: t(s.strictLiability, l), path: `/${l}/education/topics/strict-liability` },
                { label: t(s.tue, l), path: `/${l}/education/topics/tue` },
                { label: t(s.reportConcern, l), path: `/${l}/education/report-doping` },
              ]}
            />

            {/* Hədəf Qruplar */}
            <NavSection
              title={t(s.targetGroups, l)}
              titleHref={`/${l}/education/target-groups`}
              isActive={isActive}
              activeStyles={activeStyles}
              hoverStyles={hoverStyles}
              items={[
                { label: t(s.athletes, l), path: `/${l}/education/target-groups/athletes` },
                { label: t(s.coachesSupport, l), path: `/${l}/education/target-groups/support-personnel` },
                { label: t(s.medicalProfessionals, l), path: `/${l}/education/target-groups/medical` },
                { label: t(s.parentsTeachers, l), path: `/${l}/education/target-groups/parents` },
                { label: t(s.federations, l), path: `/${l}/education/target-groups/federations` },
                { label: t(s.public, l), path: `/${l}/education/target-groups/public` },
              ]}
            />

            {/* Resurslar & Dəstək */}
            <NavSection
              title={t(s.resourcesSupport, l)}
              titleHref={`/${l}/education/resources`}
              isActive={isActive}
              activeStyles={activeStyles}
              hoverStyles={hoverStyles}
              items={[
                { label: t(s.resourceLibrary, l), path: `/${l}/education/resources` },
                { label: t(s.reportConcern, l), path: `/${l}/education/report-doping` },
                { label: t(s.faq, l), path: `/${l}/education/faq` },
                { label: t(s.contactTeam, l), path: `/${l}/education/contact` },
              ]}
            />
          </div>
        </div>
      </nav>
    </aside>
  );
}
