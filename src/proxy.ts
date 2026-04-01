import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['az', 'en', 'ru'];
const defaultLocale = 'az';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If the path is exactly `/${locale}`, redirect to `/${locale}/education` for convenience
    const currentLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathname === `/${currentLocale}`) {
      return NextResponse.redirect(new URL(`/${currentLocale}/education`, request.url));
    }
    return;
  }

  // Redirect if there is no locale
  const locale = defaultLocale;
  
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${locale}/education`, request.url));
  }
  
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
