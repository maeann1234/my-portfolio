import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants/blog";
import { BlogPostArticle } from "@/components/features/blog/BlogPostArticle";

export function generateMetadata({ params }: { params: { post: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.post);
  if (!post) return { title: "Post Not Found" };
  return { title: `${post.title} | Mae Ann` };
}

export default function SinglePostPage({ params }: { params: { post: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.post);

  if (!post) {
    notFound(); 
  }

  return (
    <main className="flex flex-col min-h-screen">
      <BlogPostArticle post={post} />
    </main>
  );
}