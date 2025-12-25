import CardClientList from "@/components/CardClientList";
import Cards from "@/components/Cards";
import LoadingCard from "@/components/Loading";
import { Button } from "@/components/ui/button";
import loadPost from "@/lib/data/fixedPost";
import { Suspense } from "react";

export default function Home() {
  const postsPromise = loadPost();
  return (
    <div className="text-center p-10 bg-black/50 min-h-screen text-black">
      {/* <PostCard userId={0} id={0} title={"Title"} body={"Body"} /> */}
      <h2 className="text-2xl font-bold">Home Page</h2>
      <div className="space-y-4 my-8 mx-auto max-w-md p-10 border rounded-lg">
        <Button variant="outline" size="lg" className="m-5">
          Click Me
        </Button>
        <Button variant="destructive" size="lg" className="m-5">
          Delete
        </Button>
        <Button variant="ghost" size="lg" className="m-5">
          More Info
        </Button>
        <Button variant="link" size="lg" className="m-5">
          Learn More
        </Button>
        <Button variant="default" size="lg" className="m-5">
          Default
        </Button>
        <Cards
          userId={0}
          id={0}
          title={"ជម្រាបសួរ 🙏 ពិសិដ្ឋ!"}
          body={"Body"}
        />
      </div>
      <Suspense fallback={<LoadingCard />}>
        <CardClientList loadPost={postsPromise} />
      </Suspense>
      {/* <LoadingCard /> */}
    </div>
  );
}
