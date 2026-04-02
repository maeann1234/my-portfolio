import Image from "next/image";

export function AboutSection() {
  return (
    <section className="pt-24 pb-16 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-start gap-12 lg:gap-20">
        
        <div className="relative w-full max-w-sm shrink-0 items-start mt-2">
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

        <div className="flex-grow space-y-8">
          
          <h2 className="text-[5.5rem] lg:text-[6.5rem] font-bold leading-[1.05] tracking-tight text-zinc-950 dark:text-zinc-50 transition-colors">
            Behind the<br />code.
          </h2>
          
          <div className="space-y-6 text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl transition-colors">
            <p>
              I am a Full Stack Developer who bridges the gap between complex backend architectures and intuitive, human-centered design. 
            </p>
            <p>
              Whether I&apos;m mapping out user journeys, troubleshooting enterprise systems, or building responsive web applications, my goal is always the same: creating digital experiences that are robust under the hood and beautiful on the screen.
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