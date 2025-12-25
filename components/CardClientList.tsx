"use client";

import Link from "next/dist/client/link";
import { use } from "react";
import Cards from "./Cards";
import { PostResponse } from "@/lib/types/posts";

export default function CardClientList({
  loadPost,
}: {
  loadPost: Promise<PostResponse[]>;
}) {
  const posts = use(loadPost);
  console.log(posts);
  return (
    <div>
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
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
