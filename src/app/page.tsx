import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getAllPosts, getAllTags } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div>
      {tags.length > 0 && (
        <section className="mb-2">
          <ul className="flex flex-wrap gap-2 p-0">
            {tags.map(({ tag, count }) => (
              <li key={tag} className="list-none">
                <Link
                  href={`/tags/${encodeURIComponent(tag)}`}
                  className="rounded-full border border-black/10 px-3 py-1 text-sm no-underline opacity-80 hover:opacity-100 dark:border-white/15"
                >
                  #{tag} <span className="opacity-50">{count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {posts.length === 0 ? (
        <p className="opacity-70">
          まだ記事がありません。<code>content/posts/</code> に .mdx を追加してください。
        </p>
      ) : (
        <div>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
