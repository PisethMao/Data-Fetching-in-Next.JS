import Link from "next/link";
import { PostResponse } from "../../lib/types/posts";
import loadPost from "@/lib/data/fixedPost";
import Cards from "@/components/Cards";

export default async function Dashboard() {
  // Fetch data or perform other async operations here if needed
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // if (!API_URL) {
  //   throw new Error("NEXT_PUBLIC_API_URL is not defined");
  // }
  // const res = await fetch(`${API_URL}posts`);
  // const posts: PostResponse[] = await res.json();
  // console.log(posts);
  const posts: PostResponse[] = await loadPost();
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black px-6 py-10">
      {/* Page Header */}
      <div className="mx-auto max-w-6xl mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Dashboard Page
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">
          Latest posts fetched from the API JSONPlaceholder
        </p>
      </div>
      {/* Post List */}
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          // <div key={post.id}>
          //   <Link href={`dashboard/blog/${post.id}`} key={post.id}>
          //     <div
          //       key={post.id}
          //       className="postCard group relative cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] dark:border-white/10 dark:bg-white/5"
          //     >
          //       {/* Post Card */}
          //       <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-zinc-900 dark:text-white">
          //         Post Title: {post.title}
          //       </h2>
          //       {/* Post Excerpt */}
          //       <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          //         This is a brief excerpt of the post body: {post.body}
          //       </p>
          //       <div className="flex items-center justify-between pt-4 text-sm">
          //         <span className="text-xs text-zinc-500 dark:text-zinc-400">
          //           User #{post.userId}
          //         </span>
          //       </div>
          //     </div>
          //   </Link>
          // </div>
          <div key={post.id}>
            <Link href={`dashboard/blog/${post.id}`} key={post.id}>
              <Cards
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
