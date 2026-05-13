"use client";

import dynamic from "next/dynamic";

const VisualEditing = dynamic(
  () => import("@sanity/visual-editing/react").then((m) => m.VisualEditing),
  { ssr: false }
);

export default function VisualEditingWrapper() {
  return <VisualEditing portal />;
}
