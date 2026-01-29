import type { Metadata } from "next";
import { Inter, Spectral, MonteCarlo, Sacramento } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AosInit } from "@/components/aos-init";

export const metadata: Metadata = {
  title: "Leonardo da Vinci Website",
  description: "The work and story of Da Vinci",
  openGraph: {
    title: "Leonardo da Vinci Website",
    description: "Fictional website about the famous polymath",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-spectral",
});

export const montecarlo = MonteCarlo({
  weight: "400",
  variable: "--font-montecarlo",
});

export const sacramento = Sacramento({
  weight: "400",
  variable: "--font-sacramento",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full overflow-x-hidden">
        <Header></Header>
        {children}
        <AosInit></AosInit>
        <Footer></Footer>
      </body>
    </html>
  );
}
