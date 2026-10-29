import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "NekoMaki | Infra Engineer",
  description: "NekoMakiのポートフォリオ - Infra Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
