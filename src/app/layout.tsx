import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display, Reddit_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  weight: ["800"],
  variable: "--font-playfair-display",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const redditSans = Reddit_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
  variable: "--font-reddit-sans",
});

export const viewport = {
  themeColor: "#FAFAFA"
};

export const metadata: Metadata = {
  applicationName: "VibeNear",
  title: "VibeNear - Connect Businesses and Students",
  description: "VibeNear is your ultimate platform for connecting businesses and students, creating opportunities that drive innovation and growth.",
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
      <body className={`${inter.variable} ${plusJakarta.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
