import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "СпецБурСтрой — Геологическая разведка и сопровождение проектов золотодобычи",
  description:
    "ООО «Спецбурстрой» — геологическая разведка, проектирование, отчёты с подсчётом запасов, ТЭО и полное документальное сопровождение от проектно-геологоразведочных работ до полевых работ. С 2020 года.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
