import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Footer from "@/components/Footer";
import { locales, type Locale } from "./dictionary";
import { lang } from "next/root-params";
import { buttonVariants } from "@/components/ui/button";

const localeLabels: Record<Locale, string> = {
  no: "Norsk",
  en: "English",
  ua: "Українська",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoFiks",
  description: "Learning platform for IM students",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const currentLang = await lang();

  return (
    <html
      lang={currentLang}
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body>
        <nav aria-label="Language" className="flex justify-end gap-4 p-4">
          <details className="relative">
            <summary
              className={cn(
                buttonVariants({ variant: "default" }),
                "list-none [&::-webkit-details-marker]:hidden",
              )}
            >
              Options
            </summary>
            <div className="absolute right-0 z-50 mt-2 min-w-48 rounded-2xl bg-popover p-1 text-popover-foreground shadow-2xl ring-1 ring-foreground/5">
              <p className="px-3 py-2.5 text-xs text-muted-foreground">
                Language
              </p>
              {locales.map((locale) => (
                <Link
                  key={locale}
                  href={`/${locale}`}
                  aria-current={currentLang === locale ? "page" : undefined}
                  className="flex items-center rounded-xl px-3 py-2 text-sm outline-none hover:bg-accent focus:bg-accent"
                >
                  {localeLabels[locale]}
                </Link>
              ))}
            </div>
          </details>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
