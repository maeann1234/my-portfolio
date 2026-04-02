"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOG", href: "/blog" }, 
    { name: "CONTACTS", href: "/contacts" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-[#faf9f6]/90 dark:bg-zinc-950/90 backdrop-blur-sm border-b border-transparent dark:border-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex h-28 items-center justify-between">
        
        <Link 
          href="/" 
          className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50 hover:opacity-80 transition-opacity"
        >
          MA.
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <nav className="flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-bold tracking-wide transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                    isActive
                      ? "text-zinc-900 dark:text-zinc-50"
                      : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-zinc-50 hover:text-zinc-900 dark:hover:text-zinc-50 transition-all focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}