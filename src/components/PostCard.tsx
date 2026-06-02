import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="border-b border-black/10 py-6 dark:border-white/10">
      <h2 className="m-0 text-xl font-semibold">
        <Link href={`/posts/${post.slug}`} className="no-underline hover:underline">
          {post.title}
        </Link>
      </h2>
      {post.date && (
        <time className="mt-1 block text-sm opacity-60" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
      )}
      {post.description && (
        <p className="mt-2 opacity-80">{post.description}</p>
      )}
      {post.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2 p-0">
          {post.tags.map((tag) => (
            <li key={tag} className="list-none">
              <Link
                href={`/tags/${encodeURIComponent(tag)}`}
                className="rounded-full border border-black/10 px-2.5 py-0.5 text-xs no-underline opacity-80 hover:opacity-100 dark:border-white/15"
              >
                #{tag}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
