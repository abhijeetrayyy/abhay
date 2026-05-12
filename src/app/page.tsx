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
import StatsSection from "@/components/sections/StatsSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <main style={{ background: "var(--soft-sand)", minHeight: "100vh" }}>
      <HeroSection />
      <StatsSection />
      <ShamanIntroSection />
      <SocialReelSection />
      <ProgramsSection />
      <GallerySection />
      <TestimonialsSection />
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
