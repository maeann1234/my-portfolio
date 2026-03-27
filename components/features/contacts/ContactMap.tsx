export function ContactMap() {
  return (
    <section className="pb-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <div className="flex flex-col space-y-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 transition-colors">
            Based in Cordova, Cebu.
          </h2>

          <div 
            className="relative w-full rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm transition-colors duration-300 bg-zinc-100 dark:bg-zinc-900 group"
            style={{ minHeight: "320px" }}
          >
            
            <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-semibold text-lg z-0">
              Loading Map...
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1167.203855018398!2d123.96072947719355!3d10.262376673572913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af5762be06f%3A0xd4bee3697d587b49!2sCordova%20Public%20College!5e0!3m2!1sen!2sph!4v1774604521996!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10 dark:invert dark:grayscale-[0.5] dark:hue-rotate-180 dark:opacity-90 transition-all duration-700"
            />
            
            <div className="absolute inset-0 z-20 pointer-events-none rounded-[2.5rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]" />
          </div>
          
        </div>

      </div>
    </section>
  );
}