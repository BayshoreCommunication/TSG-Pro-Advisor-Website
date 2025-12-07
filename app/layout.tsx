import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

import { Quattrocento, Arya, Manrope } from "next/font/google";

const quattrocento = Quattrocento({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-quattrocento",
});

const arya = Arya({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-arya",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "TSG Pro Advisor",
  description: "TSG Pro Advisor Website",
  metadataBase: new URL("https://tsg-pro-advisor-website.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={` ${quattrocento.variable} ${arya.variable} ${manrope.variable}`}
    >
      <body className="bg-white text-[#0B0C0E]">
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
