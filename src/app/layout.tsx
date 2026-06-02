import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: {
    default: "ISHI Blog",
    template: "%s | ISHI Blog",
  },
  description: "Next.js + MDX で作るブログ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 py-8">
            <Header />
            <main>{children}</main>
            <footer className="mt-16 border-t border-black/10 pt-6 text-sm opacity-60 dark:border-white/10">
              © {new Date().getFullYear()} ISHI Blog
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
