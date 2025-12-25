import { PostResponse } from "../types/posts";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function loadPost() {
  if (!BASE_URL) {
    throw new Error("API URL is not defined");
  }
  const res = await fetch(`${BASE_URL}posts`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const posts: PostResponse[] = await res.json();
  return posts;
}
export async function fetchDetailsPost(id: string) {
  if (!BASE_URL) {
    throw new Error("API URL is not defined");
  }
  const data = await fetch(`${BASE_URL}posts/${id}`, { cache: "no-store" });
  if (!data.ok) {
    throw new Error("Failed to fetch post details");
  }
  const post = await data.json();
  return post;
}
