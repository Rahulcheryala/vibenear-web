import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
