import { BlogList } from "@/components/features/blog/BlogList";

export const metadata = {
  title: "Blog | Mae Ann",
  description: "Insights on Full Stack Development and UI/UX.",
};

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <BlogList />
    </main>
  );
}