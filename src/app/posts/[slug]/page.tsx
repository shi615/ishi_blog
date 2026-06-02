import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/posts";

// 全記事をビルド時に静的生成する。
export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert">
      <h1 className="mb-1">{post.title}</h1>
      {post.date && (
        <p className="mt-0 text-sm opacity-60">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      )}
      {post.tags.length > 0 && (
        <p className="flex flex-wrap gap-2 text-sm">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="no-underline opacity-80 hover:opacity-100"
            >
              #{tag}
            </Link>
          ))}
        </p>
      )}
      <MDXRemote source={post.content} />
    </article>
  );
}
