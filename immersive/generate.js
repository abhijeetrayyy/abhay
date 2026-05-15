// ── Immersive Theme Generator ──
// Build one section at a time with 100% focus

const fs = require('fs');
const path = require('path');

// Import sections
const { buildHeroSection } = require('./sections/section-01-hero');
const { buildHeaderSection } = require('./sections/section-02-header');
const { buildAboutSection } = require('./sections/section-03-about');
const { buildTeachingsSection } = require('./sections/section-04-teachings');
const { buildTestimonialsSection } = require('./sections/section-05-testimonials');
const { buildEventsSection } = require('./sections/section-06-events');
const { buildGallerySection } = require('./sections/section-07-gallery');
const { buildVideoSection } = require('./sections/section-08-video');
const { buildTransformationSection } = require('./sections/section-09-transformation');
const { buildFinalCTASection } = require('./sections/section-10-final-cta');
const { buildFooterSection } = require('./sections/section-11-footer');

// ═══════════════════════════════════════════════════════════════
// BUILD OPTIONS
// ═══════════════════════════════════════════════════════════════
const BUILD = {
  hero: true,        // Section 01: Hero
  header: true,      // Section 02: Header/Navigation
  about: true,       // Section 03: About/Introduction
  teachings: true,   // Section 04: Teachings/Three Paths
  testimonials: true, // Section 05: Testimonials/Stories
  events: true,      // Section 06: Events/Gatherings
  gallery: true,       // Section 07: Gallery/Sacred Moments
  video: true,         // Section 08: Video/YouTube Teachings
  transformation: true, // Section 09: Transformation/Global Impact
  final_cta: true,      // Section 10: Final CTA
  footer: true,        // Section 11: Footer
};

// ═══════════════════════════════════════════════════════════════
// GENERATE TEMPLATE
// ═══════════════════════════════════════════════════════════════
function generate() {
  const sections = [];

  if (BUILD.hero) {
    sections.push(buildHeroSection());
    console.log('✓ Section 01: Hero');
  }

  if (BUILD.header) {
    sections.push(buildHeaderSection());
    console.log('✓ Section 02: Header');
  }

  if (BUILD.about) {
    sections.push(buildAboutSection());
    console.log('✓ Section 03: About');
  }

  if (BUILD.teachings) {
    sections.push(buildTeachingsSection());
    console.log('✓ Section 04: Teachings');
  }

  if (BUILD.testimonials) {
    sections.push(buildTestimonialsSection());
    console.log('✓ Section 05: Testimonials');
  }

  if (BUILD.events) {
    sections.push(buildEventsSection());
    console.log('✓ Section 06: Events');
  }

  if (BUILD.gallery) {
    sections.push(buildGallerySection());
    console.log('✓ Section 07: Gallery');
  }

  if (BUILD.video) {
    sections.push(buildVideoSection());
    console.log('✓ Section 08: Video');
  }

  if (BUILD.transformation) {
    sections.push(buildTransformationSection());
    console.log('✓ Section 09: Transformation');
  }

  if (BUILD.final_cta) {
    sections.push(buildFinalCTASection());
    console.log('✓ Section 10: Final CTA');
  }

  if (BUILD.footer) {
    sections.push(buildFooterSection());
    console.log('✓ Section 11: Footer');
  }

  // Build template object
  const template = {
    title: 'Abhay Oyun - Immersive Theme',
    type: 'page',
    version: '1.0',
    page_settings: {
      hide_title: 'yes',
    },
    content: sections,
  };

  // Write to file
  const outputPath = path.join(__dirname, 'abhay-oyun-immersive.json');
  fs.writeFileSync(outputPath, JSON.stringify(template, null, 2));

  console.log('\n' + '='.repeat(50));
  console.log('Generated: abhay-oyun-immersive.json');
  console.log(`Sections: ${sections.length}`);
  console.log('='.repeat(50));
}

// Run
generate();
