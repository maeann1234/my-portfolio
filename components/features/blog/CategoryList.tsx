import Link from "next/link";
import Image from "next/image";
import { MoveLeft } from "lucide-react";
import { type BlogPost } from "@/constants/blog";

interface CategoryListProps {
  categoryName: string;
  posts: BlogPost[];
}

export function CategoryList({ categoryName, posts }: CategoryListProps) {
  return (
    <section className="py-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 font-bold mb-12 transition-colors">
          <MoveLeft className="w-5 h-5" /> Back to Blog
        </Link>

        <h1 className="text-[4rem] md:text-[5rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.05] mb-16 capitalize transition-colors">
          Category: <br/><span className="text-zinc-500 dark:text-zinc-400">{categoryName}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group flex flex-col bg-white dark:bg-zinc-900 rounded-[2.5rem] border-2 border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-800">
                  <Image src={post.imageUrl} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" onError={(e) => (e.currentTarget.style.opacity = "0")} />
                </div>
                <div className="flex items-center gap-3 mb-4 text-sm font-bold">
                  <span className="text-zinc-500 dark:text-zinc-400">{post.date}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-zinc-950 dark:text-zinc-50 mb-3 leading-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-[2.5rem]">
              <p className="text-xl font-bold text-zinc-600 dark:text-zinc-400">No articles found for this specific category path.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}