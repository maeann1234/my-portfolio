"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { type Project } from "@/constants/projects";
import { Pagination } from "@/components/common/Pagination";

type CategoryFilter = "All" | "Full Stack" | "UI/UX" | "Backend";

const ITEMS_PER_PAGE = 2;

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeFilter]);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "All" || project.category === activeFilter;
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(lowerCaseQuery) ||
      project.description.toLowerCase().includes(lowerCaseQuery) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(lowerCaseQuery));

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const categories: CategoryFilter[] = ["All", "Full Stack", "UI/UX", "Backend"];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 mb-16 pb-8 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="w-full max-w-3xl">
          <div className="flex items-center w-full h-16 bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm transition-all !border-2 !border-black dark:!border-zinc-700 focus-within:ring-4 focus-within:ring-black/10 dark:focus-within:ring-white/10 dark:focus-within:!border-zinc-500">
            
            <div className="flex items-center justify-center w-16 h-full bg-zinc-50 dark:bg-zinc-800 !border-r-2 !border-black dark:!border-zinc-700 shrink-0 transition-colors">
              <Search className="h-6 w-6 text-zinc-900 dark:text-zinc-300 transition-colors" />
            </div>
            
            <input
              type="text"
              placeholder="Search projects by name or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 w-full h-full bg-transparent px-6 text-lg text-zinc-900 dark:text-zinc-100 font-medium placeholder:text-zinc-500 outline-none !border-none !ring-0 shadow-none transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-xl px-8 py-3 text-base font-bold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 shadow-md"
                  : "bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 hover:text-zinc-900 dark:hover:text-zinc-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 animate-in fade-in duration-500">
        {paginatedProjects.length > 0 ? (
          paginatedProjects.map((project) => (
            <div key={project.id} className="group flex flex-col space-y-5">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900/50 aspect-[4/3] relative shadow-sm hover:shadow-md transition-all"
              >
                <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-semibold border-2 border-zinc-200 dark:border-zinc-800 rounded-[2.5rem] transition-colors">
                  Image Placeholder
                </div>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                  onError={(e) => (e.currentTarget.style.opacity = "0")}
                />
              </a>

              <div className="pt-2">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-sm font-black text-zinc-400 dark:text-zinc-500 transition-colors">{project.id}</span>
                  <span className="text-sm font-bold bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-1.5 rounded-full text-zinc-700 dark:text-zinc-300 transition-colors">
                    {project.category}
                  </span>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-fit"
                >
                  <h3 className="text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors mb-3 leading-tight">
                    {project.title}
                  </h3>
                </a>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
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
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-[2.5rem] bg-zinc-50/50 dark:bg-zinc-900/30 transition-colors">
            <p className="text-2xl font-bold text-zinc-600 dark:text-zinc-400 transition-colors">
              No projects found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("All");
              }}
              className="mt-6 text-lg text-zinc-950 dark:text-zinc-100 font-black border-b-2 border-zinc-950 dark:border-zinc-100 pb-1 hover:text-zinc-600 dark:hover:text-zinc-400 hover:border-zinc-600 dark:hover:border-zinc-400 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
        
      <div className="w-full mt-24 mb-12 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}