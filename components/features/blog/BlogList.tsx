"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blog";

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <h1 className="text-[5.5rem] md:text-[6.5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[0.9] mb-16 transition-colors">
          The Blog.
        </h1>

        <div className="flex flex-col gap-8 mb-16 pb-8 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
          <div className="w-full max-w-3xl">
            <div className="flex items-center w-full h-16 bg-white dark:bg-zinc-900 border-2 border-zinc-900 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-sm focus-within:ring-4 focus-within:ring-zinc-900/10 dark:focus-within:ring-zinc-50/10 transition-all">
              <div className="flex items-center justify-center w-16 h-full bg-zinc-50 dark:bg-zinc-950 border-r-2 border-zinc-900 dark:border-zinc-700 shrink-0 transition-colors">
                <Search className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 w-full h-full bg-transparent px-6 text-lg text-zinc-900 dark:text-zinc-50 font-medium placeholder:text-zinc-400 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl px-8 py-3 text-base font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-md"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 hover:text-zinc-900 dark:hover:text-zinc-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 animate-in fade-in duration-500">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white dark:bg-zinc-900 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
              >
                
                <div className="relative w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-800 border-b-2 border-zinc-200 dark:border-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-semibold text-lg z-0">
                    Image Placeholder
                  </div>
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105 relative z-10" 
                    onError={(e) => (e.currentTarget.style.opacity = "0")} 
                  />
                </div>

                <div className="flex flex-col flex-grow p-8 lg:p-10 space-y-5">
                  
                  <div className="flex items-center gap-3 text-sm font-bold text-zinc-500 dark:text-zinc-400 transition-colors">
                    <span>{post.date}</span>
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <span className="text-zinc-900 dark:text-zinc-50 transition-colors">{post.category}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 leading-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-[2.5rem]">
              <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400">No articles found matching &ldquo;{searchQuery}&rdquo;</p>
              <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-6 text-zinc-950 dark:text-zinc-50 font-black border-b-2 border-zinc-950 dark:border-zinc-50 pb-1.5 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                Clear filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}