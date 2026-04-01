import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMADA Education",
  description: "Official Anti-Doping Education Platform",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <Header lang={lang} />
        <main className="flex-1 bg-background">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
