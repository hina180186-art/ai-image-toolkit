import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AI Image Toolkit. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/legal/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="/legal/refund" className="hover:text-gray-900 transition-colors">Refund Policy</Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            🔒 Your images stay private and secure. Most processing happens directly in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}