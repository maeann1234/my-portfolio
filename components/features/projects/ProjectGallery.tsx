"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { type Project } from "@/constants/projects";

type CategoryFilter = "All" | "Full Stack" | "UI/UX" | "Backend";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === "All" || project.category === activeFilter;
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(lowerCaseQuery) ||
      project.description.toLowerCase().includes(lowerCaseQuery) ||
      project.techStack.some(tech => tech.toLowerCase().includes(lowerCaseQuery));

    return matchesCategory && matchesSearch;
  });

  const categories: CategoryFilter[] = ["All", "Full Stack", "UI/UX", "Backend"];

  return (
    <div className="w-full">
      <div className="flex flex-col gap-8 mb-12 pb-8 border-b border-zinc-200">
        
        <div className="relative w-full max-w-2xl group">
          <input
            type="text"
            placeholder="Search projects by name or tech stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-16 pl-8 pr-20 text-lg border-2 border-zinc-200 rounded-full bg-white text-zinc-900 focus:outline-none focus:border-zinc-950 focus:ring-4 focus:ring-zinc-950/10 transition-all placeholder:text-zinc-400 shadow-sm"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-950 p-3 rounded-full pointer-events-none transition-transform group-focus-within:scale-105">
            <Search className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-8 py-3 text-base font-bold transition-all duration-200 ${
                activeFilter === category
                  ? "bg-zinc-950 text-white shadow-md"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-950 hover:text-zinc-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-in fade-in duration-500">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="group flex flex-col space-y-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-3xl bg-zinc-100 aspect-[4/3] relative">
                <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center text-zinc-400 font-medium border-2 border-zinc-200 rounded-3xl">
                  Image Placeholder
                </div>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                  onError={(e) => (e.currentTarget.style.opacity = '0')} 
                />
              </a>

              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-sm font-bold text-zinc-500">{project.id}</span>
                  <span className="text-sm font-semibold bg-zinc-100 px-3 py-1 rounded-full text-zinc-700">
                    {project.category}
                  </span>
                </div>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-fit">
                  <h3 className="text-3xl font-bold text-zinc-950 hover:text-zinc-600 transition-colors mb-2">
                    {project.title}
                  </h3>
                </a>
                
                <p className="text-lg text-zinc-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-sm font-medium text-zinc-600 border border-zinc-200 rounded-md px-3 py-1 bg-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center border-2 border-dashed border-zinc-200 rounded-3xl">
            <p className="text-xl font-bold text-zinc-500">No projects found matching "{searchQuery}"</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveFilter("All"); }}
              className="mt-4 text-zinc-950 font-bold border-b-2 border-zinc-950 pb-1 hover:text-zinc-600 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}