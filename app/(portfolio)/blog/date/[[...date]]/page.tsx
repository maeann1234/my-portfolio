import { BLOG_POSTS } from "@/constants/blog";
import { DateArchiveList } from "@/components/features/blog/DateArchiveList";

export default function DateArchivePage({ params }: { params: { date?: string[] } }) {
  const postsToDisplay = BLOG_POSTS; 

  return (
    <main className="flex flex-col min-h-screen">
      <DateArchiveList dateParams={params.date} initialPosts={postsToDisplay} />
    </main>
  );
}