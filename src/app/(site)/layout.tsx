import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SanityLive } from "@/lib/sanity/live";
import { draftMode } from "next/headers";
import VisualEditingWrapper from "@/components/VisualEditingWrapper";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const draft = await draftMode();
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation />
      <main style={{ paddingTop: 108 }}>{children}</main>
      <Footer />
      <SanityLive />
      {draft.isEnabled && <VisualEditingWrapper />}
    </>
  );
}
