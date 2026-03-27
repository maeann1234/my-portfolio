import { PROJECTS_DATA } from "@/constants/projects";
import { ProjectGallery } from "@/components/features/projects/ProjectGallery";

export const metadata = {
  title: "Projects | Mae Ann",
  description: "A selection of Full Stack, Backend, and UI/UX projects by Mae Ann.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">

        <div className="mb-16">
          <h1 className="text-[5.5rem] md:text-[6.5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[0.9] mb-6 transition-colors">
            Selected<br />Works.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl transition-colors">
            A collection of web platforms, backend architectures, and human-centered design research.
          </p>
        </div>
        <ProjectGallery projects={PROJECTS_DATA} />

      </div>
    </main>
  );
}