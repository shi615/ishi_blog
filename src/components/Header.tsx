import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="mb-10 flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
      <Link href="/" className="text-lg font-bold tracking-tight no-underline">
        ISHI Blog
      </Link>
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/" className="opacity-80 hover:opacity-100">
          記事
        </Link>
        <Link href="/artifacts/" className="opacity-80 hover:opacity-100">
          アーティファクト
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
