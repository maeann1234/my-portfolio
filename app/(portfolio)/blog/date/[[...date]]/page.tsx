import { BLOG_POSTS } from "@/constants/blog";
import { DateArchiveList } from "@/components/features/blog/DateArchiveList";

export default async function DateArchivePage({ params }: { params: Promise<{ date?: string[] }> }) {
  const resolvedParams = await params;
  let postsToDisplay = BLOG_POSTS; 
  
  if (resolvedParams.date && resolvedParams.date.length > 0) {
    const [year, month, day] = resolvedParams.date;
    
    postsToDisplay = BLOG_POSTS.filter(post => {
      const d = new Date(post.date);
      const postYear = d.getFullYear().toString();
      const postMonth = (d.getMonth() + 1).toString().padStart(2, '0');
      const postDay = d.getDate().toString().padStart(2, '0');
      
      if (year && postYear !== year) return false;
      if (month && postMonth !== month) return false;
      if (day && postDay !== day) return false;
      
      return true;
    });
  } 

  return (
    <main className="flex flex-col min-h-screen">
      <DateArchiveList dateParams={resolvedParams.date} initialPosts={postsToDisplay} />
    </main>
  );
}