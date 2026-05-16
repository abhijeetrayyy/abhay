import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { SanityLive } from "@/lib/sanity/live";
import { draftMode } from "next/headers";
import VisualEditingWrapper from "@/components/VisualEditingWrapper";
import { getSiteSettings } from "@/lib/sanity/queries";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const draft = await draftMode();
  const siteSettings = await getSiteSettings();
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Navigation siteSettings={siteSettings || undefined} />
      <main style={{ paddingTop: 108 }}>{children}</main>
      <Footer siteSettings={siteSettings || undefined} />
      <SanityLive />
      {draft.isEnabled && <VisualEditingWrapper />}
    </>
  );
}
