import { BLOG_POSTS } from "@/constants/blog";
import { CategoryList } from "@/components/features/blog/CategoryList";

export default async function CategoryPage({ params }: { params: Promise<{ category: string[] }> }) {
  const resolvedParams = await params;
  const categoryPath = resolvedParams.category.join(" / ").replace(/-/g, " ");
  
  const filteredPosts = BLOG_POSTS.filter(
    (post) => post.category.toLowerCase() === resolvedParams.category[0].replace(/-/g, " ").toLowerCase()
  );

  return (
    <main className="flex flex-col min-h-screen">
      <CategoryList categoryName={categoryPath} posts={filteredPosts} />
    </main>
  );
}