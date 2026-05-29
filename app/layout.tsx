import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Using system fonts instead of Google Fonts to avoid timeout issues
const fontClasses = "font-sans";

export const metadata: Metadata = {
  title: "Abdul Hakim | AI・フルスタックエンジニア",
  description: "Abdul Hakimのポートフォリオ - AI・フルスタックエンジニア",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${fontClasses} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
