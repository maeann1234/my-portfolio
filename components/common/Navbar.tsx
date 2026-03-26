"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "PROJECTS", href: "/projects" },
    { name: "BLOG", href: "/blog" }, 
    { name: "CONTACTS", href: "/contacts" },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-[#faf9f6]/90 dark:bg-zinc-950/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex h-28 items-center justify-between">
        
        {/* Logo - Scaled Up */}
        <Link 
          href="/" 
          className="text-3xl md:text-4xl font-black tracking-tighter text-zinc-900 dark:text-zinc-50"
        >
          MA.
        </Link>

        {/* Desktop Navigation - Scaled Up & Spaced Out */}
        <nav className="hidden md:flex items-center space-x-10">
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
      </div>
    </header>
  );
}