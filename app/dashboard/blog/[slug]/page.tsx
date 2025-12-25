import { fetchDetailsPost } from "@/lib/data/fixedPost";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchDetailsPost(slug);
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-14 font-sans dark:bg-black">
      <div className="post-glass mx-auto max-w-3xl cursor-pointer rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl px-8 py-10 shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_35px_80px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/5">
        {/* Meta */}
        <div className="mb-6 flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="rounded-full bg-white/40 px-3 py-1 text-xs font-medium backdrop-blur-md border border-white/30 dark:bg-white/10 dark:border-white/20">
            User #{post.userId}
          </span>
          <span className="opacity-80">Post #{post.id}</span>
        </div>
        {/* Title */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white">
          {post.title}
        </h1>
        {/* Divider */}
        <div className="mb-8 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
        {/* Content */}
        <div className="prose prose-zinc max-w-none text-lg leading-relaxed dark:prose-invert">
          <p>{post.body}</p>
        </div>
        {/* Footer */}
        <footer className="mt-12 border-t border-white/20 pt-6 text-sm text-zinc-500 transition-colors hover:text-zinc-700 dark:border-white/10 dark:text-zinc-400 dark:hover:text-zinc-200">
          <p>
            Written by <span className="font-medium">User #{post.userId}</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
