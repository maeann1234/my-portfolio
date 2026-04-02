import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] flex items-center bg-[#faf9f6] dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
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

        <div className="flex flex-col space-y-8 order-1 lg:order-2">
          
          <h1 className="text-6xl lg:text-[7.5rem] font-bold leading-[1.05] tracking-tight text-zinc-900 dark:text-zinc-50">
            Hello, I&apos;m<br />Mae Ann.
          </h1>
          
          <p className="text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 max-w-[500px] leading-relaxed">
            I am a Full Stack Developer with a Master&apos;s in Web Architecture.
          </p>
          
          <div className="flex items-center space-x-8 pt-4">
            <Link 
              href="/projects" 
              className="text-base font-bold border-b-2 border-zinc-900 dark:border-zinc-50 pb-1 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              Check out my work →
            </Link>
            
            <Button asChild className="bg-zinc-800 text-zinc-50 hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 text-base font-semibold px-8 py-7 rounded-xl">
              <a href="/mae-ann-resume.pdf" download="mae-ann-resume.pdf">
                Download Resume
              </a>
            </Button>
            
          </div>
          
        </div>

      </div>
    </section>
  );
}