import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { PostResponse } from "@/lib/types/posts";

export default function Cards({ userId, id, title, body }: PostResponse) {
  return (
    <Card className="group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(0,0,0,0.35)] dark:border-white/10 dark:bg-white/5">
      <span className="pointer-events-none absolute inset-0 before:absolute before:inset-0 before:rounded-3xl before:bg-linear-to-br before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100" />
      <CardHeader className="relative z-10 space-y-3">
        <CardTitle className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-sm text-zinc-700 dark:text-zinc-300">
          {body}
        </CardDescription>
        <CardAction className="pt-2">
          <Button
            variant="link"
            size="sm"
            className="p-0 px-0 text-sm font-medium text-zinc-800 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            {userId} · {id}
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
