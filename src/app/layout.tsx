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
  title: "Dean Wahle | Developer",
  description: "Personal website and portfolio of Dean Wahle, software developer",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" },
  ],
  openGraph: {
    title: "Dean Wahle | Developer",
    description: "Software developer with experience at Gusto, Replit, and Panasonic Avionics",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dean Wahle's portfolio website"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dean Wahle | Developer",
    description: "Software developer with experience at Gusto, Replit, and Panasonic Avionics",
    images: ["/images/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#111]`}
      >
        {children}
      </body>
    </html>
  );
}
