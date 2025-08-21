import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "VibeNear - Connect Businesses and Students",
  description: "VibeNear is your ultimate platform for connecting businesses and students, creating opportunities that drive innovation and growth.",
  icons: {
    icon: "/images/logo/vibenear_logo.jpeg",
    shortcut: "/images/logo/vibenear_logo.jpeg",
    apple: "/images/logo/vibenear_logo.jpeg",
  },
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
