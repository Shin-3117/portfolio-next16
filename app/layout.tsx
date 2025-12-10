import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "신현중 | 프론트엔드 개발자",
  description:
    "신현중 프론트엔드 개발자 포트폴리오",
  openGraph: {
    title: "신현중 | 프론트엔드 개발자",
    description:
      "프론트엔드 팀 프로젝트에서 두 차례 우수상 수상. 현재 MES 제작 프론트엔드 담당.",
    type: "website",
    locale: "ko_KR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
