import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blog";
import { BlogPostArticle } from "@/components/features/blog/BlogPostArticle";

export async function generateMetadata({ params }: { params: Promise<{ post: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.post);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | Mae Ann` };
}

export default async function SinglePostPage({ params }: { params: Promise<{ post: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.post);

  if (!post) {
    notFound(); 
  }

  return (
    <main className="flex flex-col min-h-screen">
      <BlogPostArticle post={post} />
    </main>
  );
}