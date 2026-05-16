import { draftMode } from "next/headers";
import { sanityFetch } from "@/lib/sanity/live";
import { homepageQuery } from "@/lib/sanity/queries";
import type { SanitySection } from "@/lib/sanity";
import SectionRenderer from "@/components/SectionRenderer";
import HeroSection from "@/components/sections/HeroSection";
import PathsSection from "@/components/sections/PathsSection";
import StatsSection from "@/components/sections/StatsSection";
import ShamanIntroSection from "@/components/sections/ShamanIntroSection";
import SocialReelSection from "@/components/sections/SocialReelSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoTestimonialsSection from "@/components/sections/VideoTestimonialsSection";
import TeachingsSection from "@/components/sections/TeachingsSection";
import EventsShowcaseSection from "@/components/sections/EventsShowcaseSection";
import TransformationSection from "@/components/sections/TransformationSection";
import YouTubeSection from "@/components/sections/YouTubeSection";
import FAQSection from "@/components/sections/FAQSection";
import WebinarCTASection from "@/components/sections/WebinarCTASection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default async function Home() {
  const draft = await draftMode();
  const { data: page } = await sanityFetch<{
    sections?: SanitySection[];
    seoTitle?: string;
    seoDescription?: string;
    ogImage?: string;
    noIndex?: boolean;
  }>({
    query: homepageQuery,
    tags: ["page", "section"],
  });

  if (page?.sections && page.sections.length > 0) {
    return (
      <main style={{ background: "var(--soft-sand)", minHeight: "100vh" }}>
        <SectionRenderer sections={page.sections} />
      </main>
    );
  }

  return (
    <main style={{ background: "var(--soft-sand)", minHeight: "100vh" }}>
      <HeroSection />
      <PathsSection />
      <StatsSection />
      <ShamanIntroSection />
      <SocialReelSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      <TeachingsSection />
      <EventsShowcaseSection />
      <TransformationSection />
      <YouTubeSection />
      <FAQSection />
      <WebinarCTASection />
      <FinalCTASection />
    </main>
  );
}
