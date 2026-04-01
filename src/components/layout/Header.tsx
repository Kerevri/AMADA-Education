"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { translations, t, type Lang } from "@/i18n/translations";

export function Header({ lang }: { lang: string }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const l = lang as Lang;
  const n = translations.nav;

  const NAV_ITEMS = [
    { label: t(n.education, l), path: "/education" },
    { label: t(n.whoWeEducate, l), path: "/education/target-groups" },
    { label: t(n.cleanSportTopics, l), path: "/education/topics" },
    { label: t(n.learning, l), path: "/education/learning" },
    { label: t(n.resources, l), path: "/education/resources" },
    { label: t(n.reportConcern, l), path: "/education/report-doping" },
    { label: t(n.contact, l), path: "/education/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/education" && pathname === `/${l}/education`) return true;
    if (path !== "/education" && pathname.startsWith(`/${l}${path}`)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link href={`/${l}/education`} className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center text-white font-bold text-lg group-hover:bg-secondary transition-colors">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-primary leading-tight">AMADA</span>
            <span className="text-sm text-[#003466] font-medium leading-tight">{t(n.education, l)}</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              href={`/${l}${item.path}`}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? "text-primary border-b-2 border-amada-teal" : "text-[#003466]"
              } py-2`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 text-[#003466] hover:bg-muted rounded-md" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({ variant: "outline", size: "sm" })}>
              {l.toUpperCase()}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href={`/az/education`} className="flex-1">AZ - Azərbaycan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/en/education`} className="flex-1">EN - English</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/ru/education`} className="flex-1">RU - Русский</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href={`/${l}/education/topics`}
            className={buttonVariants({ variant: "default" }) + " bg-amada-teal hover:bg-amada-teal/90 text-white font-semibold"}
          >
            {t(n.startLearning, l)}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button className="p-2 text-[#003466]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white py-4 px-4 space-y-4">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={`/${l}${item.path}`}
                className={`text-base font-medium ${
                  isActive(item.path) ? "text-amada-teal" : "text-[#003466]"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="h-px bg-border my-2" />
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Link href="/az/education" className="text-sm font-semibold">AZ</Link>
              <span className="text-border">|</span>
              <Link href="/en/education" className="text-sm font-semibold">EN</Link>
              <span className="text-border">|</span>
              <Link href="/ru/education" className="text-sm font-semibold">RU</Link>
            </div>
          </div>
          <Link
            href={`/${lang}/education/topics`}
            className={buttonVariants({ variant: "default" }) + " w-full bg-amada-teal hover:bg-amada-teal/90 text-white font-semibold justify-center"}
            onClick={() => setMobileOpen(false)}
          >
            Start Learning
          </Link>
        </div>
      )}
    </header>
  );
}
