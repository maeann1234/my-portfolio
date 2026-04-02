"use client"

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { PROJECTS_DATA } from "@/constants/projects";

export function RecentProjects() {
  const recentProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <section className="py-15 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <h3 className="text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[0.9] mb-16 transition-colors">
          Recent Projects.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {recentProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
            >
              <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 border-b-2 border-zinc-200 dark:border-zinc-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-semibold text-lg z-0">
                  Image Placeholder
                </div>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                  onError={(e) => (e.currentTarget.style.opacity = "0")}
                />
              </div>

              <div className="flex flex-col flex-grow p-8 lg:p-10 space-y-5">
                <div className="flex items-center gap-3 text-sm font-bold text-zinc-500 dark:text-zinc-400 transition-colors">
                  <span>{project.id}</span>
                  <span className="text-zinc-300 dark:text-zinc-700">•</span>
                  <span className="text-zinc-900 dark:text-zinc-50 transition-colors">{project.category}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 leading-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm font-bold text-zinc-600 dark:text-zinc-300 border-2 border-zinc-100 dark:border-zinc-800 rounded-lg px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="w-full mt-20 flex justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2.5 text-lg text-zinc-950 dark:text-zinc-50 font-black border-b-2 border-zinc-950 dark:border-zinc-50 pb-1.5 hover:text-zinc-600 dark:hover:text-zinc-300 hover:border-zinc-600 dark:hover:border-zinc-300 transition-colors"
          >
            VIEW ALL PROJECTS <MoveRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}