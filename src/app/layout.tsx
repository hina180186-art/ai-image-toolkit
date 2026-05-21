import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "AI Image Toolkit | Antigravity - Deep Space Aurora",
  description: "Mission control for your images. Compress, resize and convert privately in your browser with zero uploads.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans min-h-screen antialiased bg-void text-text-primary`}>
        {children}
      </body>
    </html>
  );
}