import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "styles/globals.css";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

// Initialize your preferred font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mae Ann | Portfolio",
  description: "Full Stack Developer with a Master's in Web Architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#faf9f6] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased`}>
        
        {/* Global Header */}
        <Navbar />
        
        {/* Main page content goes here and flex-grow ensures the footer is pushed down */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />
        
      </body>
    </html>
  );
}