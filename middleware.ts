import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define supported locales
const locales = ["id", "en"];
const defaultLocale = "id";

// Get the preferred locale from request headers
function getLocale(request: NextRequest): string {
  // Check if there's a locale cookie
  const localeCookie = request.cookies.get("locale")?.value;
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie;
  }

  // Check Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    // Parse accepted languages
    const acceptedLanguages = acceptLanguage
      .split(",")
      .map((lang) => {
        const [code, quality = "1"] = lang.trim().split(";q=");
        return { code: code.split("-")[0], quality: parseFloat(quality) };
      })
      .sort((a, b) => b.quality - a.quality);

    // Find first matching locale
    for (const { code } of acceptedLanguages) {
      if (locales.includes(code)) {
        return code;
      }
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Skip API routes and static files
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/manifest") ||
    pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|css|js|json)$/)
  ) {
    return NextResponse.next();
  }

  // Detect locale and redirect
  const locale = getLocale(request);
  
  // Create new URL with locale prefix
  const newUrl = new URL(request.url);
  newUrl.pathname = `/${locale}${pathname}`;

  // Create response with redirect
  const response = NextResponse.redirect(newUrl);
  
  // Set locale cookie for future visits
  response.cookies.set("locale", locale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
  });

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon|robots\\.txt|sitemap|manifest|.*\\.).*)",
    // Optional: only run on root URL
    // '/'
  ],
};
