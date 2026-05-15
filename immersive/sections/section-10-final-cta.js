// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 10: FINAL CTA
// Your journey begins. Step into the sacred field.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Powerful, emotionally resonant call to action
// - "This is where transformation starts" feeling
// - Warm, inviting, not pushy
// - Clear next steps presented beautifully
// - Trust indicators
// - Social proof elements
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Final CTA Section Styles
// ═══════════════════════════════════════════════════════════════
const FINAL_CTA_CSS = `
// ── Section Container ──
.final-cta-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, ${P.DUNE} 0%, ${P.STONE} 100%);
}

// ── Decorative Background Elements ──
@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(3deg); }
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 0.08; transform: scale(1); }
  50% { opacity: 0.12; transform: scale(1.05); }
}

.final-cta-bg-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
}

.final-cta-bg-orb-1 {
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background: ${P.GOLD_PALE};
  animation: pulse-subtle 8s ease-in-out infinite;
}

.final-cta-bg-orb-2 {
  bottom: -100px;
  left: -100px;
  width: 350px;
  height: 350px;
  background: ${P.MOSS};
  animation: pulse-subtle 10s ease-in-out infinite reverse;
}

.final-cta-bg-orb-3 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: ${P.GOLD_PALE};
  animation: pulse-subtle 12s ease-in-out infinite;
  opacity: 0.05;
}

// ── Decorative Lines ──
.final-cta-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.final-cta-line {
  position: absolute;
  background: linear-gradient(to bottom, transparent, ${P.GOLD_PALE}, transparent);
  width: 1px;
  opacity: 0.3;
}

.final-cta-line-1 { left: 15%; height: 100%; animation: fadeIn 2s ease forwards; }
.final-cta-line-2 { left: 30%; height: 80%; animation: fadeIn 2s ease 0.3s forwards; }
.final-cta-line-3 { right: 30%; height: 80%; animation: fadeIn 2s ease 0.6s forwards; }
.final-cta-line-4 { right: 15%; height: 100%; animation: fadeIn 2s ease 0.9s forwards; }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 0.3; }
}

// ── Main Content Wrapper ──
.final-cta-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 720px;
  margin: 0 auto;
}

// ── Eyebrow ──
.final-cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.2s;
}

.final-cta-eyebrow-line {
  width: 48px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.final-cta-eyebrow-line-r {
  width: 48px;
  height: 1px;
  background: linear-gradient(to left, transparent, ${P.GOLD});
}

.final-cta-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

// ── Main Title ──
.final-cta-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(38px, 5vw, 64px);
  line-height: 1.1;
  letter-spacing: -1px;
  color: ${P.CHARCOAL};
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.4s;
}

.final-cta-title-line {
  display: block;
}

.final-cta-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT}, ${P.FOREST});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
}

// ── Subtitle ──
.final-cta-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.85;
  color: ${P.BROWN};
  max-width: 560px;
  margin: 0 auto 40px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.6s;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

// ── CTA Buttons ──
.final-cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 0.8s;
}

.final-cta-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 48px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  box-shadow: 0 12px 40px rgba(196, 148, 42, 0.4), 0 0 80px rgba(196, 148, 42, 0.15);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.final-cta-btn-primary:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 52px rgba(196, 148, 42, 0.55), 0 0 100px rgba(196, 148, 42, 0.2);
}

.final-cta-btn-primary svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
  transition: transform 0.3s ease;
}

.final-cta-btn-primary:hover svg {
  transform: translateX(4px);
}

.final-cta-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  background: ${P.IVORY};
  color: ${P.CHARCOAL};
  font-family: 'Cinzel', serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  border: 1.5px solid rgba(196, 148, 42, 0.35);
  box-shadow: 0 8px 24px rgba(44, 36, 22, 0.06);
  transition: all 0.4s ease;
}

.final-cta-btn-secondary:hover {
  background: ${P.IVORY};
  border-color: ${P.GOLD};
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(44, 36, 22, 0.1);
}

// ── Trust Indicators ──
.final-cta-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 1s;
}

.final-cta-trust-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.final-cta-trust-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.final-cta-trust-text {
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
}

// ── Social Links ──
.final-cta-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 1.2s;
}

.final-cta-social-label {
  font-family: 'Cinzel', serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
  margin-right: 8px;
}

.final-cta-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${P.IVORY};
  border: 1px solid rgba(196, 148, 42, 0.15);
  color: ${P.BROWN};
  text-decoration: none;
  transition: all 0.4s ease;
}

.final-cta-social-link:hover {
  background: ${P.GOLD};
  border-color: ${P.GOLD};
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(196, 148, 42, 0.3);
}

.final-cta-social-link svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

// ── Decorative Divider ──
.final-cta-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 32px;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards 1.1s;
}

.final-cta-divider-line {
  width: 80px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.DUST});
}

.final-cta-divider-icon {
  font-size: 20px;
  color: ${P.GOLD};
}

// ── Responsive ──
@media (max-width: 767px) {
  .final-cta-buttons {
    flex-direction: column;
  }

  .final-cta-btn-primary,
  .final-cta-btn-secondary {
    width: 100%;
    justify-content: center;
  }

  .final-cta-trust {
    flex-direction: column;
    gap: 16px;
  }

  .final-cta-social {
    flex-wrap: wrap;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD FINAL CTA SECTION
// ═══════════════════════════════════════════════════════════════
function buildFinalCTASection() {
  return sec({
    layout: 'full_width',
    height: 'min-height',
    custom_height: { unit: 'vh', size: 80 },
    custom_height_mobile: { unit: 'vh', size: 75 },
    content_position: 'middle',
    background_background: 'classic',
    background_color: P.DUNE,
    padding: pad(120, 80, 120, 80),
    padding_mobile: pad(80, 24, 80, 24),
    padding_tablet: pad(100, 40, 100, 40),
    z_index: 10,
    custom_css: FINAL_CTA_CSS,
    css_classes: 'final-cta-section',
  }, [
    // ── Background Orbs ──
    col(100, { content_position: 'top', padding: pad(0, 0, 0, 0) }, [
      text(`<div class="final-cta-bg-orb final-cta-bg-orb-1"></div>
            <div class="final-cta-bg-orb final-cta-bg-orb-2"></div>
            <div class="final-cta-bg-orb final-cta-bg-orb-3"></div>`, '', typo('typography', { f: 'Lato', s: 12 })),
    ]),

    // ── Decorative Lines ──
    col(100, { content_position: 'top', padding: pad(0, 0, 0, 0) }, [
      text(`<div class="final-cta-lines">
        <div class="final-cta-line final-cta-line-1"></div>
        <div class="final-cta-line final-cta-line-2"></div>
        <div class="final-cta-line final-cta-line-3"></div>
        <div class="final-cta-line final-cta-line-4"></div>
      </div>`, '', typo('typography', { f: 'Lato', s: 12 })),
    ]),

    // ── Main Content ──
    col(100, { content_position: 'center' }, [
      text(`<div class="final-cta-content">
        <!-- Eyebrow -->
        <div class="final-cta-eyebrow">
          <div class="final-cta-eyebrow-line"></div>
          <span class="final-cta-eyebrow-text">Your Journey Begins</span>
          <div class="final-cta-eyebrow-line-r"></div>
        </div>

        <!-- Main Title -->
        <h2 class="final-cta-title">
          <span class="final-cta-title-line">Step Into the</span>
          <span class="final-cta-title-accent">Sacred Field</span>
        </h2>

        <!-- Subtitle -->
        <p class="final-cta-subtitle">
          Whether you begin with a free webinar or a personal shamanic session —
          transformation begins with a single decision to show up for yourself.
          Here, you are welcomed, held, and seen.
        </p>

        <!-- CTA Buttons -->
        <div class="final-cta-buttons">
          <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="final-cta-btn-primary">
            Book a Free Session
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://forms.gle/jEDaUrKwbyHd8WvUA" target="_blank" class="final-cta-btn-secondary">
            Watch Free Webinar
          </a>
        </div>

        <!-- Decorative Divider -->
        <div class="final-cta-divider">
          <div class="final-cta-divider-line"></div>
          <span class="final-cta-divider-icon">✦</span>
          <div class="final-cta-divider-line"></div>
        </div>

        <!-- Trust Indicators -->
        <div class="final-cta-trust">
          <div class="final-cta-trust-item">
            <div class="final-cta-trust-dot" style="background: ${P.GOLD};"></div>
            <span class="final-cta-trust-text">35+ Years of Practice</span>
          </div>
          <div class="final-cta-trust-item">
            <div class="final-cta-trust-dot" style="background: ${P.FOREST};"></div>
            <span class="final-cta-trust-text">40 Countries Served</span>
          </div>
          <div class="final-cta-trust-item">
            <div class="final-cta-trust-dot" style="background: ${P.TERRA};"></div>
            <span class="final-cta-trust-text">10,000+ Transformed</span>
          </div>
        </div>

        <!-- Social Links -->
        <div class="final-cta-social">
          <span class="final-cta-social-label">Connect:</span>
          <a href="https://www.instagram.com/earthforpeace/" target="_blank" class="final-cta-social-link" title="Instagram">
            <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.070 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.youtube.com/@earthforpeace" target="_blank" class="final-cta-social-link" title="YouTube">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 2.78 2.78 0 0 0-1.94-2C21.12 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 2.78 2.78 0 0 0-1.94-2C21.12 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 2.78 2.78 0 0 0-1.94-2C21.12 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A2.78 2.78 0 0 0 23 9.86z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
          </a>
          <a href="https://www.facebook.com/abhayoyun0/" target="_blank" class="final-cta-social-link" title="Facebook">
            <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        align: 'center',
      }),
    ]),
  ]);
}

module.exports = { buildFinalCTASection };
