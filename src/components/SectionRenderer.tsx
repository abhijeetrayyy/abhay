"use client";
import type { SanitySection } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: true });
const PathsSection = dynamic(() => import("@/components/sections/PathsSection"), { ssr: true });
const StatsSection = dynamic(() => import("@/components/sections/StatsSection"), { ssr: true });
const ShamanIntroSection = dynamic(() => import("@/components/sections/ShamanIntroSection"), { ssr: true });
const SocialReelSection = dynamic(() => import("@/components/sections/SocialReelSection"), { ssr: true });
const ProgramsSection = dynamic(() => import("@/components/sections/ProgramsSection"), { ssr: true });
const GallerySection = dynamic(() => import("@/components/sections/GallerySection"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: true });
const VideoTestimonialsSection = dynamic(() => import("@/components/sections/VideoTestimonialsSection"), { ssr: true });
const TeachingsSection = dynamic(() => import("@/components/sections/TeachingsSection"), { ssr: true });
const EventsShowcaseSection = dynamic(() => import("@/components/sections/EventsShowcaseSection"), { ssr: true });
const TransformationSection = dynamic(() => import("@/components/sections/TransformationSection"), { ssr: true });
const YouTubeSection = dynamic(() => import("@/components/sections/YouTubeSection"), { ssr: true });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"), { ssr: true });
const WebinarCTASection = dynamic(() => import("@/components/sections/WebinarCTASection"), { ssr: true });
const FinalCTASection = dynamic(() => import("@/components/sections/FinalCTASection"), { ssr: true });

function img(src: unknown) {
  if (!src) return undefined;
  if (typeof src === "string") return src;
  if (typeof src === "object" && src !== null) {
    return urlFor(src as Parameters<typeof urlFor>[0]).url();
  }
  return undefined;
}

function mapItems(items: unknown[] | undefined, imageFields: string[]) {
  if (!items || items.length === 0) return undefined;
  return items.map((item: any) => {
    const resolved = { ...item };
    for (const field of imageFields) {
      if (resolved[field] !== undefined) {
        resolved[field] = img(resolved[field]);
      }
    }
    return resolved;
  });
}

export default function SectionRenderer({ sections }: { sections: SanitySection[] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <>
      {sections.map((section) => (
        <Suspense key={section._key || section._type}>
          <SectionComponent section={section} />
        </Suspense>
      ))}
    </>
  );
}

function SectionComponent({ section }: { section: SanitySection }) {
  switch (section._type) {
    case "hero":
      return <HeroSection sanity={{ ...section, backgroundImage: img(section.backgroundImage), shamanImage: img(section.shamanImage) }} />;
    case "paths":
      return <PathsSection sanity={section} />;
    case "stats":
      return <StatsSection sanity={section} />;
    case "shamanIntro":
      return <ShamanIntroSection sanity={{ ...section, image: img(section.image) }} />;
    case "socialReel":
      return <SocialReelSection sanity={section} />;
    case "programs":
      return <ProgramsSection sanity={{ ...section, programs: mapItems(section.programs as any[], ["image"]) }} />;
    case "gallerySection":
      return <GallerySection sanity={{ ...section, images: mapItems(section.images as any[], ["image"]) }} />;
    case "testimonialsSection":
      return <TestimonialsSection {...{ sanity: { ...section, testimonials: mapItems(section.testimonials as any[], ["clientImage"]) } } as any} />;
    case "videoTestimonials":
      return <VideoTestimonialsSection sanity={section} />;
    case "teachingsSection":
      return <TeachingsSection sanity={{ ...section, teachings: mapItems(section.teachings as any[], ["image"]) }} />;
    case "eventsSection":
      return <EventsShowcaseSection sanity={{ ...section, events: mapItems(section.events as any[], ["image"]) }} />;
    case "transformation":
      return <TransformationSection sanity={{ ...section, milestones: mapItems(section.milestones as any[], ["image"]) }} />;
    case "youtubeSection":
      return <YouTubeSection sanity={section} />;
    case "faqSection":
      return <FAQSection sanity={section} />;
    case "webinarCta":
      return <WebinarCTASection sanity={section} />;
    case "finalCta":
      return <FinalCTASection sanity={section} />;
    default:
      return null;
  }
}
