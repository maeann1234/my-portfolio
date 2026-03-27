import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { type BlogPost } from "@/constants/blog";

export function BlogPostArticle({ post }: { post: BlogPost }) {
  return (
    <article className="py-24 bg-[#faf9f6] dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 w-full">
        
        <Link href="/blog" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50 font-bold mb-12 transition-colors">
          <MoveLeft className="w-5 h-5" /> Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400 font-bold mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-[3rem] md:text-[4rem] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.05] transition-colors">
            {post.title}
          </h1>
        </header>

        <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800">
          <Image src={post.imageUrl} alt={post.title} fill className="object-cover" onError={(e) => (e.currentTarget.style.opacity = "0")} />
        </div>

        <div className="space-y-8 text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed transition-colors">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </article>
  );
}