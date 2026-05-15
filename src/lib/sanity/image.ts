import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { client } from "./client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const builder = projectId ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) {
    if (typeof source === "object" && source !== null) {
      const obj = source as Record<string, any>;
      if (obj.asset?._ref) {
        console.warn("Sanity not configured — set NEXT_PUBLIC_SANITY_PROJECT_ID");
      }
    }
    return { url: () => undefined } as any;
  }
  return builder.image(source);
}

export function sanityImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("https://cdn.sanity.io")) {
    const params = new URLSearchParams({
      w: String(width),
      q: String(quality || 75),
      fit: "max",
      auto: "format",
    });
    return `${src}?${params}`;
  }
  return src;
}
