import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Image Toolkit",
  description: "Compress, resize and convert images privately.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        {/* Simple Header */}
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">AI Image Toolkit</Link>
            <nav className="flex gap-4">
              <Link href="/tools" className="hover:text-blue-600">Tools</Link>
              <Link href="/#pricing" className="hover:text-blue-600">Pricing</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Simple Footer */}
        <footer className="border-t py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} AI Image Toolkit. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}