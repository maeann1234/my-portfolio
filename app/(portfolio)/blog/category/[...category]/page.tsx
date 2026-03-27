import { BLOG_POSTS } from "@/constants/blog";
import { CategoryList } from "@/components/features/blog/CategoryList";

export default function CategoryPage({ params }: { params: { category: string[] } }) {
  const categoryPath = params.category.join(" / ").replace(/-/g, " ");
  
  const filteredPosts = BLOG_POSTS.filter(
    (post) => post.category.toLowerCase() === params.category[0].replace(/-/g, " ").toLowerCase()
  );

  return (
    <main className="flex flex-col min-h-screen">
      <CategoryList categoryName={categoryPath} posts={filteredPosts} />
    </main>
  );
}