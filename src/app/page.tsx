import HeroSection from "@/components/sections/HeroSection";
import ShamanIntroSection from "@/components/sections/ShamanIntroSection";
import GallerySection from "@/components/sections/GallerySection";
import TeachingsSection from "@/components/sections/TeachingsSection";
import EventsShowcaseSection from "@/components/sections/EventsShowcaseSection";
import TransformationSection from "@/components/sections/TransformationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import YouTubeSection from "@/components/sections/YouTubeSection";
import SocialReelSection from "@/components/sections/SocialReelSection";
import WebinarCTASection from "@/components/sections/WebinarCTASection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main style={{ background: "var(--soft-sand)", minHeight: "100vh" }}>
      <HeroSection />
      <ShamanIntroSection />
      <SocialReelSection />
      <GallerySection />
      <TestimonialsSection />
      <TeachingsSection />
      <EventsShowcaseSection />
      <TransformationSection />
      <YouTubeSection />
      <WebinarCTASection />
      <FinalCTASection />
    </main>
  );
}
