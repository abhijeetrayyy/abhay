import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2025-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  stega: {
    enabled: true,
    studioUrl: "https://abhayoyun.sanity.studio",
  },
});

export const isSanityConfigured = Boolean(projectId);

export function getServerClient(token?: string) {
  if (!projectId) return client;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: token || process.env.SANITY_API_READ_TOKEN || "",
  });
}
