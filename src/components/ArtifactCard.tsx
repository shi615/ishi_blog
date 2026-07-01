import Link from "next/link";
import { ArtifactMeta } from "@/lib/artifacts";

export function ArtifactCard({ artifact }: { artifact: ArtifactMeta }) {
  return (
    <article className="border-b border-black/10 py-6 dark:border-white/10">
      <h2 className="m-0 text-xl font-semibold">
        <Link href={`${artifact.link}`} className="no-underline hover:underline">
          {artifact.title}🔗
        </Link>
      </h2>
      {artifact.description && (
        <p className="mt-2 opacity-80">{artifact.description}</p>
      )}
    </article>
  );
}
