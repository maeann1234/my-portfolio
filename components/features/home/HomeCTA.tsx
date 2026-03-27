import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="py-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <div className="relative overflow-hidden w-full bg-zinc-950 dark:bg-zinc-900 rounded-[2.5rem] p-12 lg:p-20 text-center shadow-2xl transition-colors duration-300">
          
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto space-y-10">
            
            <h2 className="text-[3rem] md:text-[3.5rem] font-bold tracking-tight text-white dark:text-zinc-50 leading-[1.05] transition-colors">
              Need help<br />building something?
            </h2>

            <p className="text-xl md:text-2xl text-zinc-200 dark:text-zinc-300 leading-relaxed transition-colors">
              Whether you're searching for a dedicated partner to develop your project or simply need expert support, I'm here to help.
            </p>

            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-bold text-zinc-950 shadow-md hover:bg-zinc-100 transition-all scale-100 hover:scale-105"
            >
              Get in Touch
            </Link>

          </div>

          <div className="absolute -inset-1 opacity-10 bg-[url('/bg-pattern.svg')] bg-repeat" />

        </div>

      </div>
    </section>
  );
}