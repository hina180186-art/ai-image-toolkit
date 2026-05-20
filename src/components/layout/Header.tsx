import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-gray-900">AI Image Toolkit</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="/tools" className="hover:text-gray-900 transition-colors">Tools</Link>
          <Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
          <Link href="/dashboard" className="hover:text-gray-900 transition-colors">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/auth/login" className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-gray-900">
            Sign In
          </Link>
          <Link href="/tools" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}