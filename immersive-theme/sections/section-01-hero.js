// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 01: HERO (v2)
// Premium Shamanic • Mindvalley-Inspired Rebuild
// ═══════════════════════════════════════════════════════════════
//
// PRINCIPLES:
// - Full-viewport hero (100vh)
// - Massive typography that dominates
// - Minimal text - one powerful message
// - Dark overlay on image for text contrast
// - Single strong CTA
// - Social proof logos bar
// - No busy decorations
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Hero Section Styles
// ═══════════════════════════════════════════════════════════════
const HERO_CSS = `
// ── Hero Section ──
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

// ── Background Image ──
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

// Dark gradient overlay for text contrast
.hero-bg::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 26, 20, 0.85) 0%,
    rgba(26, 26, 20, 0.6) 50%,
    rgba(26, 26, 20, 0.75) 100%
  );
}

// ── Content Container ──
.hero-container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  width: 100%;
}

// ── Main Content Grid ──
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  min-height: calc(100vh - 160px);
  padding: 80px 0;
}

// ── Left: Text Content ──
.hero-text {
  max-width: 600px;
}

// ── Eyebrow ──
.hero-eyebrow {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.2s;
}

// ── Main Title ──
.hero-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(48px, 6vw, 80px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: #FAF8F3;
  margin: 0 0 32px 0;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.4s;
}

.hero-title-line {
  display: block;
}

.hero-title-line:last-child {
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// ── Subtitle ──
.hero-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: clamp(16px, 1.2vw, 20px);
  line-height: 1.8;
  color: rgba(250, 248, 243, 0.8);
  margin: 0 0 48px 0;
  max-width: 480px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.6s;
}

// ── CTA Group ──
.hero-cta {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.8s;
}

.hero-cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  color: ${P.CHARCOAL};
  font-family: 'Cinzel', serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.4s ease;
}

.hero-cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(196, 148, 42, 0.3);
}

.hero-cta-primary svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.hero-cta-primary:hover svg {
  transform: translateX(4px);
}

.hero-cta-secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(250, 248, 243, 0.7);
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease;
}

.hero-cta-secondary:hover {
  color: ${P.GOLD};
}

.hero-cta-secondary svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

// ── Stats Bar ──
.hero-stats {
  display: flex;
  gap: 48px;
  margin-top: 64px;
  padding-top: 48px;
  border-top: 1px solid rgba(250, 248, 243, 0.15);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 1s;
}

.hero-stat {
  text-align: left;
}

.hero-stat-number {
  font-family: 'Cinzel', serif;
  font-size: clamp(32px, 3vw, 48px);
  font-weight: 600;
  color: ${P.GOLD};
  line-height: 1;
  margin-bottom: 8px;
}

.hero-stat-label {
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(250, 248, 243, 0.5);
}

// ── Right: Image ──
.hero-image-wrap {
  position: relative;
  height: calc(100vh - 160px);
  max-height: 700px;
  opacity: 0;
  animation: fadeIn 1.2s ease forwards 0.6s;
}

.hero-image-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.hero-image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// Decorative frame lines
.hero-image-frame::before {
  content: '';
  position: absolute;
  top: -20px;
  right: -20px;
  width: 100%;
  height: 100%;
  border: 1px solid ${P.GOLD};
  border-radius: 8px;
  opacity: 0.3;
  z-index: -1;
}

.hero-image-frame::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: -12px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, ${P.GOLD} 0%, transparent 70%);
  opacity: 0.15;
  z-index: -1;
}

// ── Social Proof Bar ──
.hero-social-proof {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 24px 0;
  background: rgba(26, 26, 20, 0.9);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(250, 248, 243, 0.08);
}

.hero-social-proof-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  align-items: center;
  gap: 48px;
}

.hero-social-proof-label {
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(250, 248, 243, 0.4);
  white-space: nowrap;
}

.hero-social-proof-logos {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.hero-social-proof-logo {
  font-family: 'Cinzel', serif;
  font-size: 14px;
  font-weight: 600;
  color: rgba(250, 248, 243, 0.35);
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.hero-social-proof-logo:hover {
  color: rgba(250, 248, 243, 0.7);
}

// ── Scroll Indicator ──
.hero-scroll {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 15;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: fadeIn 1s ease forwards 1.2s;
}

.hero-scroll-text {
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(250, 248, 243, 0.4);
}

.hero-scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, ${P.GOLD}, transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
  50% { opacity: 0.8; transform: scaleY(1); }
}

// ── Animations ──
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

// ── Responsive ──
@media (max-width: 1200px) {
  .hero-container,
  .hero-social-proof-inner {
    padding: 0 40px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 48px;
    text-align: center;
  }

  .hero-text {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-subtitle {
    max-width: 600px;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-image-wrap {
    display: none;
  }
}

@media (max-width: 767px) {
  .hero-container,
  .hero-social-proof-inner {
    padding: 0 24px;
  }

  .hero-content {
    padding: 60px 0 120px;
    min-height: auto;
  }

  .hero-stats {
    gap: 32px;
  }

  .hero-social-proof-label {
    display: none;
  }

  .hero-social-proof-logos {
    justify-content: center;
  }

  .hero-scroll {
    display: none;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD HERO SECTION
// ═══════════════════════════════════════════════════════════════
function buildHeroSection() {
  return sec({
    layout: 'full_width',
    height: 'min-height',
    custom_height: { unit: 'vh', size: 100 },
    content_position: 'middle',
    background_background: 'classic',
    background_color: '#1A1A14',
    custom_css: HERO_CSS,
    css_classes: 'hero-section',
  }, [
    // ── Background Image ──
    col(100, { content_position: 'top', padding: pad(0, 0, 0, 0) }, [
      text(`<div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80');"></div>`, '', typo('typography', { f: 'Lato', s: 12 }), {
        z_index: 1,
      }),
    ]),

    // ── Main Content ──
    col(100, { content_position: 'center' }, [
      text(`<div class="hero-container">
        <div class="hero-content">
          <!-- Left: Text -->
          <div class="hero-text">
            <div class="hero-eyebrow">Siberian Shaman • Guardian of Our Planet</div>
            <h1 class="hero-title">
              <span class="hero-title-line">Heal Your Wild</span>
              <span class="hero-title-line">Reclaim Your Power</span>
            </h1>
            <p class="hero-subtitle">
              Ancient Siberian shamanic practices for modern seekers. Transform trauma into power. Reconnect with nature's wisdom. Find your way home.
            </p>
            <div class="hero-cta">
              <a href="https://forms.gle/jEDaUrKwbyHd8WvUA" target="_blank" class="hero-cta-primary">
                Start Your Journey
                <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#" class="hero-cta-secondary">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Watch the Film
              </a>
            </div>
            <div class="hero-stats">
              <div class="hero-stat">
                <div class="hero-stat-number">35+</div>
                <div class="hero-stat-label">Years of Practice</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-number">40</div>
                <div class="hero-stat-label">Countries Served</div>
              </div>
              <div class="hero-stat">
                <div class="hero-stat-number">10K+</div>
                <div class="hero-stat-label">Lives Transformed</div>
              </div>
            </div>
          </div>

          <!-- Right: Image -->
          <div class="hero-image-wrap">
            <div class="hero-image-frame">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Abhay Oyun - Siberian Shaman">
            </div>
          </div>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        align: 'center',
        z_index: 10,
      }),
    ]),

    // ── Social Proof Bar ──
    col(100, { content_position: 'bottom', padding: pad(0, 0, 0, 0) }, [
      text(`<div class="hero-social-proof">
        <div class="hero-social-proof-inner">
          <span class="hero-social-proof-label">Featured In</span>
          <div class="hero-social-proof-logos">
            <span class="hero-social-proof-logo">Forbes</span>
            <span class="hero-social-proof-logo">BBC</span>
            <span class="hero-social-proof-logo">The Guardian</span>
            <span class="hero-social-proof-logo">Entrepreneur</span>
            <span class="hero-social-proof-logo">Mindvalley</span>
          </div>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        z_index: 20,
      }),
    ]),

    // ── Scroll Indicator ──
    col(100, { content_position: 'bottom', padding: pad(0, 0, 0, 0) }, [
      text(`<div class="hero-scroll">
        <span class="hero-scroll-text">Scroll</span>
        <div class="hero-scroll-line"></div>
      </div>`, '', typo('typography', { f: 'Lato', s: 10 }), {
        z_index: 15,
      }),
    ]),
  ]);
}

module.exports = { buildHeroSection };
