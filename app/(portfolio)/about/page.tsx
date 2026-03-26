import { AboutSection } from "@/components/features/about/AboutSection";
import { SkillsSection } from "@/components/features/about/SkillsSection";

export const metadata = {
  title: "About | Mae Ann",
  description: "Learn more about Mae Ann, a Full Stack Developer specializing in web architecture and UI/UX.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutSection />
      <SkillsSection />
    </main>
  );
}