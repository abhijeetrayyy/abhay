import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  perspective = "published",
  stega = true,
}: {
  query: string;
  params?: Record<string, unknown>;
  tags?: string[];
  perspective?: "published" | "previewDrafts";
  stega?: boolean;
}): Promise<{ data: T | null }> {
  const data = await client.fetch<T>(query, params, {
    next: {
      revalidate: tags.length ? false : 60,
      tags,
    },
    perspective,
    stega,
    useCdn: process.env.NODE_ENV === "production",
  });

  return { data };
}

export function SanityLive() {
  return null;
}
