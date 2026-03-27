import { HeroSection } from "@/components/features/home/HeroSection";
import { RecentProjects } from "@/components/features/home/RecentProjects";
import { HomeCTA } from "@/components/features/home/HomeCTA";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <RecentProjects />
      <HomeCTA />
    </main>
  );
}