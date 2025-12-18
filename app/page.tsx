import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <PostCard userId={0} id={0} title={"Title"} body={"Body"} />
    </div>
  );
}
