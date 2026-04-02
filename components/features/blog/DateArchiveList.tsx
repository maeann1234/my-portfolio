"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveLeft, ArrowUpDown } from "lucide-react";
import { type BlogPost } from "@/constants/blog";

interface DateArchiveListProps {
  dateParams?: string[];
  initialPosts: BlogPost[];
}

export function DateArchiveList({ dateParams, initialPosts }: DateArchiveListProps) {
  const [sortDescending, setSortDescending] = useState(true);

  const isRoot = !dateParams || dateParams.length === 0;
  const year = dateParams?.[0];
  const month = dateParams?.[1];
  const day = dateParams?.[2];

  let displayTitle = "Complete Archive";
  if (year && month && day) displayTitle = `Archive: ${month}/${day}/${year}`;
  else if (year && month) displayTitle = `Archive: ${month}/${year}`;
  else if (year) displayTitle = `Archive: ${year}`;

  const sortedPosts = [...initialPosts].sort(() => {
    return sortDescending ? -1 : 1;
  });

  return (
    <section className="py-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 font-bold mb-12 transition-colors">
          <MoveLeft className="w-5 h-5" /> Back to Blog
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b-2 border-zinc-200 dark:border-zinc-800 transition-colors">
          <div>
            <h1 className="text-[3.5rem] md:text-[4.5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1] mb-4 transition-colors">
              {displayTitle}
            </h1>
            {isRoot && (
              <p className="text-xl text-zinc-600 dark:text-zinc-400 font-medium">
                Viewing all historical posts across all dates.
              </p>
            )}
          </div>
          
          <button 
            onClick={() => setSortDescending(!sortDescending)}
            className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 font-bold hover:border-zinc-900 dark:hover:border-zinc-50 transition-all"
          >
            <ArrowUpDown className="w-4 h-4" />
            Sort {sortDescending ? "Oldest" : "Newest"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
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
          ))}
        </div>

      </div>
    </section>
  );
}