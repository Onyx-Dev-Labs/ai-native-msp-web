import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { hero } from "./content";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// Wordmark only, to match the logo lettering.
const wordmark = Montserrat({
  subsets: ["latin"],
  weight: ["500", "800"],
  display: "swap",
  variable: "--font-wordmark",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-native-msp-web.vercel.app"),
  title: "AI Native MSP",
  description: hero.subhead,
  openGraph: {
    title: "AI Native MSP",
    description: hero.subhead,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Native MSP",
    description: hero.subhead,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1622",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${wordmark.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
