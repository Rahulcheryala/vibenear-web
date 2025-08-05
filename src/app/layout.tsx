import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VibeNear - Connect Businesses and Students",
  description: "VibeNear is your ultimate platform for connecting businesses and students, creating opportunities that drive innovation and growth.",
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D560BAQG3jhhgj3Bdqg/company-logo_200_200/B56ZdVIRV2GQAU-/0/1749479921859/vibenear_logo?e=2147483647&v=beta&t=TlqEqpJhUJtRmJ7nF7N9jXIV7gwHd_47CTREI2MvRbo",
    shortcut: "https://media.licdn.com/dms/image/v2/D560BAQG3jhhgj3Bdqg/company-logo_200_200/B56ZdVIRV2GQAU-/0/1749479921859/vibenear_logo?e=2147483647&v=beta&t=TlqEqpJhUJtRmJ7nF7N9jXIV7gwHd_47CTREI2MvRbo",
    apple: "https://media.licdn.com/dms/image/v2/D560BAQG3jhhgj3Bdqg/company-logo_200_200/B56ZdVIRV2GQAU-/0/1749479921859/vibenear_logo?e=2147483647&v=beta&t=TlqEqpJhUJtRmJ7nF7N9jXIV7gwHd_47CTREI2MvRbo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
