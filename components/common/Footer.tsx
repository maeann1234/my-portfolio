import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-[#faf9f6] dark:bg-zinc-950 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {currentYear} Mae Ann. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="https://github.com" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-50">GitHub</Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-zinc-900 dark:hover:text-zinc-50">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}