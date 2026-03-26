// components/features/about/AboutHero.tsx
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="pt-24 pb-16 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-start gap-12 lg:gap-20">
        
        {/* LEFT SIDE: Image Content */}
        {/* 'shrink-0' keeps the container from collapsing. 'items-start' forces top alignment. */}
        <div className="relative w-full max-w-sm shrink-0 items-start mt-2"> {/* Slight margin to match text visual baseline */}
          <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/profile.jpg" 
              alt="Mae Ann" 
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text Content */}
        {/* The space-y-8 handles the large gap between Header and Bio paragraph */}
        <div className="flex-grow space-y-8">
          
          {/* Main Heading - Using font-bold, tracking-tight as requested previously */}
          <h2 className="text-[5.5rem] lg:text-[6.5rem] font-bold leading-[1.05] tracking-tight text-zinc-950">
            Behind the<br />code.
          </h2>
          
          {/* Bio Text - Standard paragraph styles from your mockup */}
          <div className="space-y-6 text-xl text-zinc-700 leading-relaxed max-w-3xl">
            <p>
              I am a Full Stack Developer who bridges the gap between complex backend architectures and intuitive, human-centered design. 
            </p>
            <p>
              Whether I'm mapping out user journeys, troubleshooting enterprise systems, or building responsive web applications, my goal is always the same: creating digital experiences that are robust under the hood and beautiful on the screen.
            </p>
            <p>
              Beyond the code, I communicate fluently across technical and creative domains, bringing ideas to life in English, Tagalog, and Bisaya.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}