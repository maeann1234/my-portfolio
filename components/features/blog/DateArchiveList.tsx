"use client";

import { useState } from "react";
import Link from "next/link";
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

  let displayTitle = "Complete Archive";
  if (year && month) displayTitle = `Archive: ${month}/${year}`;
  else if (year) displayTitle = `Archive: ${year}`;

  const sortedPosts = [...initialPosts].sort((a, b) => {
    return sortDescending ? -1 : 1;
  });

  return (
    <section className="py-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
        
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

        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2rem] border-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md group">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-4 text-sm font-bold text-zinc-500 dark:text-zinc-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}