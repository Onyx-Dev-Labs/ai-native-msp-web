import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { hero } from "./content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AI Native MSP",
  description: hero.subhead,
  openGraph: {
    title: "AI Native MSP",
    description: hero.subhead,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
