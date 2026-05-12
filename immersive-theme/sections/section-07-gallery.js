// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 07: GALLERY
// Sacred moments. The global journey.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Showcase the global shamanic journey
// - "40 countries" visual story
// - Immersive photo grid with hover effects
// - Soft, warm presentation
// - Invites exploration
// - Lightbox-ready images
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// GALLERY DATA
// ═══════════════════════════════════════════════════════════════
const GALLERY_IMAGES = [
  { url: 'sao-gallery-img1.jpg', alt: 'Sacred Ceremony' },
  { url: 'sao-gallery-img2.jpg', alt: 'Shamanic Ritual' },
  { url: 'sao-gallery-img3.jpg', alt: 'Community Gathering' },
  { url: 'sao-gallery-img4.jpg', alt: 'Nature Connection' },
  { url: 'sao-gallery-img5.jpg', alt: 'Healing Circle' },
  { url: 'sao-gallery-img6.jpg', alt: 'Sacred Fire' },
  { url: 'sao-gallery-img7.jpg', alt: 'Drum Ceremony' },
  { url: 'sao-gallery-img8.jpg', alt: 'Forest Practice' },
  { url: 'visited-countries-img.png', alt: '40 Countries Journey' },
];

const SOCIAL_IMAGES = [
  { url: 'sao-gallery-img1.jpg', alt: '@EarthForPeace' },
  { url: 'sao-gallery-img2.jpg', alt: '@EarthForPeace' },
  { url: 'sao-gallery-img3.jpg', alt: '@EarthForPeace' },
  { url: 'sao-gallery-img4.jpg', alt: '@EarthForPeace' },
  { url: 'sao-gallery-img5.jpg', alt: '@EarthForPeace' },
];

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Gallery Section Styles
// ═══════════════════════════════════════════════════════════════
const GALLERY_CSS = `
// ── Section Container ──
.gallery-section {
  position: relative;
  overflow: hidden;
}

// ── Section Header ──
.gallery-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
}

.gallery-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.gallery-eyebrow-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.gallery-eyebrow-line-r {
  width: 40px;
  height: 1px;
  background: linear-gradient(to left, transparent, ${P.GOLD});
}

.gallery-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

.gallery-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.5px;
  color: ${P.CHARCOAL};
  margin-bottom: 16px;
}

.gallery-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// ── Gallery Grid ──
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

// ── Individual Gallery Item ──
.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-item:hover {
  transform: scale(1.02);
  z-index: 2;
  box-shadow: 0 24px 60px rgba(44, 36, 22, 0.15);
}

/* Aspect ratio variations for visual interest */
.gallery-item:nth-child(1) { aspect-ratio: 1; }
.gallery-item:nth-child(2) { aspect-ratio: 1; }
.gallery-item:nth-child(3) { aspect-ratio: 1; }
.gallery-item:nth-child(4) { aspect-ratio: 1; }
.gallery-item:nth-child(5) { aspect-ratio: 1; }
.gallery-item:nth-child(6) { aspect-ratio: 1; }
.gallery-item:nth-child(7) { aspect-ratio: 1; }
.gallery-item:nth-child(8) { aspect-ratio: 1; }
.gallery-item:last-child { grid-column: span 3; aspect-ratio: 3/1; }

/* On tablet: 2 columns */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-item:last-child {
    grid-column: span 2;
    aspect-ratio: 16/9;
  }
}

/* On mobile: 2 columns */
@media (max-width: 767px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .gallery-item {
    aspect-ratio: 1;
  }

  .gallery-item:last-child {
    grid-column: span 2;
    aspect-ratio: 16/9;
  }
}

// ── Image ──
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

// ── Overlay ──
.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(44, 36, 22, 0.7) 0%,
    rgba(44, 36, 22, 0.3) 40%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

// ── Caption ──
.gallery-caption {
  font-family: 'Cinzel', serif;
  font-size: 12px;
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-caption {
  transform: translateY(0);
}

// ── View More Link ──
.gallery-footer {
  text-align: center;
  margin-top: 40px;
}

.gallery-view-more {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 36px;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${P.CHARCOAL};
  text-decoration: none;
  background: ${P.IVORY};
  border: 1.5px solid rgba(196, 148, 42, 0.3);
  border-radius: 100px;
  transition: all 0.4s ease;
}

.gallery-view-more:hover {
  background: ${P.GOLD};
  border-color: ${P.GOLD};
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(196, 148, 42, 0.3);
}

.gallery-view-more-arrow {
  transition: transform 0.3s ease;
}

.gallery-view-more:hover .gallery-view-more-arrow {
  transform: translateX(4px);
}

// ── Social Section ──
.gallery-social-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
}

.gallery-social-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery-social-icon svg {
  width: 16px;
  height: 16px;
  fill: #fff;
}

.gallery-social-text {
  font-family: 'Cinzel', serif;
  font-size: 14px;
  font-weight: 600;
  color: ${P.CHARCOAL};
  letter-spacing: 2px;
}

.gallery-social-handle {
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: ${P.STONE_GRAY};
  letter-spacing: 1px;
}
`;

// ═══════════════════════════════════════════════════════════════
// SOCIAL GALLERY SECTION
// ═══════════════════════════════════════════════════════════════
const SOCIAL_GALLERY_CSS = `
// ── Social Gallery Grid ──
.social-gallery-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-top: 40px;
}

.social-gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  transition: all 0.4s ease;
}

.social-gallery-item:hover {
  transform: scale(1.05);
  z-index: 2;
}

.social-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.social-gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(196, 148, 42, 0.6);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-gallery-item:hover .social-gallery-overlay {
  opacity: 1;
}

.social-gallery-overlay svg {
  width: 24px;
  height: 24px;
  fill: #fff;
}

.social-gallery-follow {
  text-align: center;
  margin-top: 20px;
}

.social-gallery-follow a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: ${P.STONE_GRAY};
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.social-gallery-follow a:hover {
  color: ${P.GOLD};
}

@media (max-width: 1024px) {
  .social-gallery-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 767px) {
  .social-gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD GALLERY SECTION
// ═══════════════════════════════════════════════════════════════
function buildGallerySection() {
  // Build main gallery images
  const mainGallery = GALLERY_IMAGES.map((img, index) =>
    text(`<div class="gallery-item">
      <img src="${P.SITE}/${img.url}" alt="${img.alt}">
      <div class="gallery-overlay">
        <span class="gallery-caption">${img.alt}</span>
      </div>
    </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
      ...anim('fadeInUp', 'slow', index * 80),
    })
  );

  // Build social gallery images
  const socialGallery = SOCIAL_IMAGES.map((img, index) =>
    text(`<div class="social-gallery-item">
      <img src="${P.SITE}/${img.url}" alt="${img.alt}">
      <div class="social-gallery-overlay">
        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.070 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </div>
    </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
      ...anim('fadeInUp', 'slow', 400 + index * 100),
    })
  );

  return sec({
    layout: 'full_width',
    background_background: 'classic',
    background_color: P.IVORY,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
    z_index: 10,
    custom_css: GALLERY_CSS + '\n' + SOCIAL_GALLERY_CSS,
    css_classes: 'gallery-section',
  }, [
    // ── Section Header ──
    col(100, { content_position: 'center' }, [
      text(`<div class="gallery-header">
        <div class="gallery-eyebrow">
          <div class="gallery-eyebrow-line"></div>
          <span class="gallery-eyebrow-text">The Global Journey</span>
          <div class="gallery-eyebrow-line-r"></div>
        </div>
        <h2 class="gallery-title">
          Healing Without<br>
          <span class="gallery-title-accent">Borders</span>
        </h2>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInUp'),
      }),
    ]),

    // ── Main Gallery Grid ──
    col(100, { content_position: 'top' }, mainGallery),

    // ── Social Gallery Section ──
    col(100, { content_position: 'top', padding: pad(80, 0, 0, 0) }, [
      text(`<div class="gallery-social-header">
        <div class="gallery-social-icon">
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.070 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </div>
        <span class="gallery-social-text">@EarthForPeace</span>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 300),
      }),
    ]),

    // ── Social Gallery Grid ──
    col(100, { content_position: 'top' }, socialGallery),

    // ── Follow CTA ──
    col(100, { content_position: 'center', padding: pad(24, 0, 0, 0) }, [
      text(`<div class="social-gallery-follow">
        <a href="https://www.instagram.com/earthforpeace/" target="_blank">
          Follow the journey on Instagram →
        </a>
      </div>`, '', typo('typography', { f: 'Lato', s: 12 }), {
        ...anim('fadeInUp', 'slow', 800),
      }),
    ]),
  ]);
}

module.exports = { buildGallerySection };
