import type { Metadata } from "next";
import type { Viewport } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Plus_Jakarta_Sans, Playfair_Display, Reddit_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  weight: ["800"],
  variable: "--font-playfair-display",
  preload: true,
});

const redditSans = Reddit_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-reddit-sans",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#FAFAFA"
};

export const metadata: Metadata = {
  applicationName: "VibeNear",
  title: "VibeNear - Live Local Discovery",
  description: "VibeNear is the ultimate live local discovery platform, helping you instantly find what's happening around you. Whether you're a resident, a new tenant, or a student, VibeNear is your go-to guide for a great night out.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "VibeNear",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: "/web-app-manifest-192x192.png", sizes: "32x32", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${playfairDisplay.variable} ${redditSans.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
