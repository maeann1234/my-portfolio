import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-[#faf9f6] dark:bg-zinc-950">
      {/* Increased gap from 12 to 16/20 for better spacing with larger elements */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Image Content - Scaled Up */}
        <div className="flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-[320px] h-[320px] lg:w-[480px] lg:h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src="/profile.jpg" 
              alt="Mae Ann" 
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content - Scaled Up */}
        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          
          {/* Main Heading - Much larger now */}
          <h1 className="text-6xl lg:text-[7.5rem] font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50">
            Hello, I'm<br />Mae Ann.
          </h1>
          
          {/* Subtext - Increased to text-2xl */}
          <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 max-w-[500px] leading-relaxed">
            I am a Full Stack Developer with a Master's in Web Architecture.
          </p>
          
          {/* Action Buttons - Larger text and more padding */}
          <div className="flex items-center space-x-8 pt-4">
            <Link 
              href="/projects" 
              className="text-base font-bold border-b-2 border-zinc-900 dark:border-zinc-50 pb-1 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              Check out my work →
            </Link>
            <Button className="bg-zinc-800 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 text-base font-semibold px-8 py-7 rounded-xl">
              Download Resume
            </Button>
          </div>
          
        </div>

      </div>
    </section>
  );
}