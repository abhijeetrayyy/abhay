// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 03: ABOUT / INTRO
// The sacred introduction. Meet the shaman.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Personal, intimate, authentic
// - "You are in safe hands" feeling
// - Ancient elder meets modern healer
// - Stats that build trust
// - Sacred but approachable
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — About Section Styles & Animations
// ═══════════════════════════════════════════════════════════════
const ABOUT_CSS = `
// ── Section Container ──
.about-section {
  position: relative;
  overflow: hidden;
}

// ── Decorative Elements ──
@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
}

@keyframes glow-pulse {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.1); }
}

.about-deco-1 {
  position: absolute;
  top: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, ${P.GOLD_PALE} 0%, transparent 70%);
  opacity: 0.3;
  animation: glow-pulse 8s ease-in-out infinite;
  pointer-events: none;
}

.about-deco-2 {
  position: absolute;
  bottom: -80px;
  right: -80px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(circle, ${P.MOSS} 0%, transparent 70%);
  opacity: 0.15;
  animation: glow-pulse 10s ease-in-out infinite reverse;
  pointer-events: none;
}

// ── Image Styling ──
.about-image-wrap {
  position: relative;
  display: inline-block;
}

.about-image-frame {
  position: absolute;
  top: -16px;
  left: -16px;
  right: 16px;
  bottom: 16px;
  border: 2px solid ${P.GOLD_PALE};
  border-radius: 24px;
  opacity: 0.4;
  pointer-events: none;
}

.about-image-frame-2 {
  position: absolute;
  top: -8px;
  left: -8px;
  right: 8px;
  bottom: 8px;
  border: 1px solid ${P.GOLD};
  border-radius: 20px;
  opacity: 0.25;
  pointer-events: none;
}

.about-image-main {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(44, 36, 22, 0.12);
  transition: all 0.6s ease;
}

.about-image-main:hover {
  transform: scale(1.02);
  box-shadow: 0 32px 80px rgba(44, 36, 22, 0.16);
}

.about-image-main img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.about-image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(44, 36, 22, 0.7), transparent);
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
}

// ── Content Styling ──
.about-eyebrow {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.about-eyebrow-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.about-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

.about-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(36px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.5px;
  color: ${P.CHARCOAL};
  margin-bottom: 24px;
}

.about-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 2;
  color: ${P.BROWN};
  margin-bottom: 16px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.about-text:nth-child(2) { animation-delay: 0.2s; }
.about-text:nth-child(3) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

// ── Stats Grid ──
.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
  padding-top: 36px;
  border-top: 2px solid rgba(196, 148, 42, 0.15);
}

.about-stat {
  text-align: center;
  padding: 0 12px;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.about-stat:nth-child(1) { animation-delay: 0.3s; }
.about-stat:nth-child(2) { animation-delay: 0.45s; }
.about-stat:nth-child(3) { animation-delay: 0.6s; }

.about-stat-number {
  font-family: 'Cinzel', serif;
  font-size: clamp(40px, 4vw, 52px);
  font-weight: 600;
  line-height: 1;
  margin-bottom: 8px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-stat:nth-child(2) .about-stat-number {
  background: linear-gradient(135deg, ${P.FOREST}, ${P.MOSS});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-stat:nth-child(3) .about-stat-number {
  background: linear-gradient(135deg, ${P.TERRA}, ${P.CLAY});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-stat-label {
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
}

// ── CTA Buttons ──
.about-ctas {
  display: flex;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.about-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  box-shadow: 0 6px 24px rgba(196, 148, 42, 0.3);
  transition: all 0.4s ease;
}

.about-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 32px rgba(196, 148, 42, 0.45);
}

.about-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: transparent;
  color: ${P.CHARCOAL};
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  border: 1.5px solid rgba(196, 148, 42, 0.35);
  transition: all 0.4s ease;
}

.about-btn-secondary:hover {
  background: ${P.IVORY};
  border-color: ${P.GOLD};
  transform: translateY(-2px);
}

// ── Quote Block ──
.about-quote {
  position: relative;
  padding: 32px 0 32px 32px;
  border-left: 3px solid ${P.GOLD};
  margin: 32px 0;
}

.about-quote-text {
  font-family: 'Cinzel', serif;
  font-style: italic;
  font-size: 20px;
  line-height: 1.6;
  color: ${P.CHARCOAL};
  margin: 0 0 12px 0;
}

.about-quote-author {
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
}

// ── Responsive ──
@media (max-width: 1024px) {
  .about-stats { gap: 16px; }
  .about-stat-number { font-size: 36px; }
}

@media (max-width: 767px) {
  .about-image-wrap { margin-bottom: 32px; }
  .about-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .about-stat-number { font-size: 28px; }
  .about-stat-label { font-size: 8px; letter-spacing: 2px; }
  .about-ctas { flex-direction: column; }
  .about-btn-primary, .about-btn-secondary { width: 100%; justify-content: center; }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD ABOUT SECTION
// ═══════════════════════════════════════════════════════════════
function buildAboutSection() {
  return sec({
    layout: 'full_width',

    // Warm ivory background
    background_background: 'classic',
    background_color: P.IVORY,

    // Generous padding
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 24, 60, 24),
    padding_tablet: pad(80, 48, 80, 48),

    // Z-index for layering
    z_index: 10,

    // Sacred CSS
    custom_css: ABOUT_CSS,
    css_classes: 'about-section',
  }, [
    // ── Left Column: Image ──
    col(45, {
      content_position: 'center',
      _column_size_mobile: 100,
      padding: pad(0, 40, 0, 0),
      padding_mobile: pad(0, 0, 0, 0),
    }, [
      // Decorative backgrounds
      text(`<div class="about-deco-1"></div>
            <div class="about-deco-2"></div>`, '', typo('typography', { f: 'Lato', s: 12 })),

      // Image with decorative frames
      text(`<div class="about-image-wrap">
        <div class="about-image-frame"></div>
        <div class="about-image-frame-2"></div>
      </div>`, '', typo('typography', { f: 'Lato', s: 12 })),

      // Main image
      img(`${P.SITE}/AO 2.JPG`, 'Shaman Abhay Oyun in Sacred Ceremony'),

      // Caption
      text(`<div style="text-align:center;margin-top:16px;">
        <span style="font-family:'Cinzel',serif;font-size:12px;color:${P.STONE_GRAY};letter-spacing:3px;text-transform:uppercase;">In sacred ceremony, worldwide</span>
      </div>`, '', typo('typography', { f: 'Cinzel', s: 12 }), { align: 'center' }),
    ]),

    // ── Right Column: Content ──
    col(55, {
      content_position: 'center',
      _column_size_mobile: 100,
      padding: pad(0, 0, 0, 40),
      padding_mobile: pad(40, 0, 0, 0),
    }, [
      // Eyebrow
      text(`<div class="about-eyebrow">
        <div class="about-eyebrow-line"></div>
        <span class="about-eyebrow-text">The Shaman</span>
      </div>`, '', typo('typography', { f: 'Cinzel', s: 11 })),

      // Title
      heading(`A Life Dedicated to<br><em class="about-title-accent">Earth & Humanity</em>`, 'h2', P.CHARCOAL, {
        f: 'Cinzel', s: 52, sm: 32, st: 42, w: 400, lh: 1.1, ls: -0.5,
      }, { ...anim('fadeInUp') }),

      // Bio text
      text(`<p class="about-text">Shaman Abhay Oyun carries the ancient wisdom of Siberian shamanism — passed through generations, refined across 40 countries, and shared with thousands seeking healing.</p>
      <p class="about-text">Called the <em>Guardian of Our Planet</em> by communities worldwide, he has guided thousands through ceremonial work — restoring vital energy, dissolving trauma, and awakening dormant power.</p>`, '', typo('typography', { f: 'Lato', s: 16, sm: 15, lh: 2 })),

      // Quote
      text(`<div class="about-quote">
        <p class="about-quote-text">"When you reconnect with your wild nature, trauma doesn't just heal — it transforms into power."</p>
        <span class="about-quote-author">— Shaman Abhay Oyun</span>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 })),

      // Stats
      text(`<div class="about-stats">
        <div class="about-stat">
          <div class="about-stat-number">35+</div>
          <div class="about-stat-label">Years of Practice</div>
        </div>
        <div class="about-stat">
          <div class="about-stat-number">40</div>
          <div class="about-stat-label">Countries</div>
        </div>
        <div class="about-stat">
          <div class="about-stat-number">10K+</div>
          <div class="about-stat-label">Lives Transformed</div>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 })),

      // CTAs
      text(`<div class="about-ctas">
        <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="about-btn-primary">
          Begin Your Journey →
        </a>
        <a href="#teachings" class="about-btn-secondary">
          Explore Teachings
        </a>
      </div>`, '', typo('typography', { f: 'Lato', s: 12 })),
    ])
  ]);
}

module.exports = { buildAboutSection };
