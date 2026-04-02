"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
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
  const s = translations.sidebar;

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

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
          <Link href={`/${l}`} className="text-sm font-semibold text-[#003466] hover:text-amada-teal transition-colors">
            {l === "az" ? "Ana Səhifə" : l === "ru" ? "Главная" : "Home"}
          </Link>
          <Link href={`/${l}/about`} className="text-sm font-semibold text-[#003466] hover:text-amada-teal transition-colors">
            {l === "az" ? "Haqqımızda" : l === "ru" ? "О нас" : "About Us"}
          </Link>
          <Link href={`/${l}/anti-doping`} className="text-sm font-semibold text-[#003466] hover:text-amada-teal transition-colors">
            {l === "az" ? "Antidopinq" : l === "ru" ? "Антидопинг" : "Anti-Doping"}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-amada-teal hover:text-[#003466] transition-colors focus:outline-none">
              {t(n.education, l)}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down mt-0.5"><path d="m6 9 6 6 6-6"/></svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-64 mt-2 p-2 bg-white rounded-xl shadow-lg border border-slate-100 font-sans">
              <DropdownMenuItem className="p-0 mb-1">
                <Link href={`/${l}/education`} className="flex w-full px-3 py-2.5 text-[14px] font-medium text-[#003466] hover:bg-[#F0FDFA] hover:text-[#0D9488] rounded-md transition-colors">
                  {t(s.education, l)}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 mb-1">
                <Link href={`/${l}/education/learning`} className="flex w-full px-3 py-2.5 text-[14px] font-medium text-[#003466] hover:bg-[#F0FDFA] hover:text-[#0D9488] rounded-md transition-colors">
                  {t(s.learningHub, l)}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 mb-1">
                <Link href={`/${l}/education/topics`} className="flex w-full px-3 py-2.5 text-[14px] font-medium text-[#003466] hover:bg-[#F0FDFA] hover:text-[#0D9488] rounded-md transition-colors">
                  {t(s.antiDoping, l)}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 mb-2">
                <Link href={`/${l}/education/target-groups`} className="flex w-full px-3 py-2.5 text-[14px] font-medium text-[#003466] hover:bg-[#F0FDFA] hover:text-[#0D9488] rounded-md transition-colors">
                  {t(s.targetGroups, l)}
                </Link>
              </DropdownMenuItem>
              
              <div className="h-px bg-slate-100 mx-2 mb-2"></div>
              
              <DropdownMenuItem className="p-0">
                <Link href={`/${l}/education/resources`} className="flex w-full px-3 py-2.5 text-[14px] font-medium text-[#003466] hover:bg-[#F0FDFA] hover:text-[#0D9488] rounded-md transition-colors">
                  {t(s.resourceLibrary, l)}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={`/${l}/contact`} className="text-sm font-semibold text-[#003466] hover:text-amada-teal transition-colors">
            {t(n.contact, l)}
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger className={buttonVariants({ variant: "outline", size: "sm" })}>
              {l.toUpperCase()}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href={`/az/education`} className="w-full cursor-pointer">AZ - Azərbaycan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/en/education`} className="w-full cursor-pointer">EN - English</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/ru/education`} className="w-full cursor-pointer">RU - Русский</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex lg:hidden items-center gap-4">
          <button className="p-2 text-[#003466]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white py-4 px-4 space-y-4">
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-slate-500">Language / Dil</span>
            <div className="flex gap-4">
              <Link href="/az/education" className={`text-sm font-semibold ${l === 'az' ? 'text-primary' : ''}`}>AZ</Link>
              <span className="text-border">|</span>
              <Link href="/en/education" className={`text-sm font-semibold ${l === 'en' ? 'text-primary' : ''}`}>EN</Link>
              <span className="text-border">|</span>
              <Link href="/ru/education" className={`text-sm font-semibold ${l === 'ru' ? 'text-primary' : ''}`}>RU</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

