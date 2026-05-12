// ── Abhay Oyun Homepage — Elementor Template Generator ──
// Assembles all 13 sections into a single Elementor-compatible JSON file
const fs = require('fs');
const { headerSection, heroSection, shamanIntroSection, socialReelSection, gallerySection, testimonialsSection } = require('./gen-parts/sections-1');
const { teachingsSection, eventsSection, transformationSection, youtubeSection, webinarCTASection, finalCTASection, footerSection } = require('./gen-parts/sections-2');

const template = {
  title: 'Abhay Oyun Homepage',
  type: 'page',
  version: '0.4',
  page_settings: {
    hide_title: 'yes',
    // Removed: template: 'elementor_canvas' — this requires Elementor Pro
    // Without Pro, use WordPress page template "Full Width" instead
  },
  content: [
    headerSection(),        // 1. Sticky Header (NEW)
    heroSection(),          // 2. Full-screen Hero
    shamanIntroSection(),   // 3. Bio / Stats
    socialReelSection(),    // 4. @EarthForPeace Gallery
    gallerySection(),       // 5. 40 Countries Gallery
    testimonialsSection(),  // 6. Testimonial Cards
    teachingsSection(),     // 7. The Work Accordion
    eventsSection(),        // 8. Upcoming Events
    transformationSection(),// 9. Global Impact Timeline
    youtubeSection(),       // 10. YouTube Videos
    webinarCTASection(),    // 11. Webinar CTA
    finalCTASection(),      // 12. Final CTA
    footerSection(),        // 13. Footer
  ],
};

fs.writeFileSync('abhay-oyun-homepage.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-homepage.json');
console.log(`   ${template.content.length} sections created (including header)`);
console.log('   Ready to import into WordPress → Elementor → Templates → Import');
