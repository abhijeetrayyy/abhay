// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 04: TEACHINGS
// The sacred work. Three paths to awakening.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Three sacred practices, beautifully presented
// - Each practice has its own color identity
// - Accordion or expandable cards
// - "Choose your path" feeling
// - Warm, inviting, not overwhelming
// - Visual hierarchy guides the eye
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// PRACTICES DATA
// ═══════════════════════════════════════════════════════════════
const PRACTICES = [
  {
    num: '01',
    tag: 'SAMPO System',
    title: 'Psycho-Energetic Training',
    shortDesc: 'A complete system for accumulating, protecting, and directing your vital energy.',
    fullDesc: 'Ancient Siberian methods to shield from external influences and awaken your dormant life force. This sacred training teaches you how to work with the energy that flows through all things — strengthening your inner fire, clearing negative patterns, and cultivating unshakeable inner peace.',
    color: P.GOLD,
    colorLight: P.GOLD_PALE,
    image: 'shaman_birch_forest.png',
    icon: '⚡',
  },
  {
    num: '02',
    tag: 'Sound Medicine',
    title: 'Sacred Drum Healing',
    shortDesc: "The shaman's drum is a portal to other dimensions of consciousness.",
    fullDesc: "Its frequencies shift brainwave states instantly, dissolve trauma held in the cellular body, and initiate spontaneous healing responses. The drumbeat connects you to the rhythm of the Earth herself — ancient, steady, alive.",
    color: P.FOREST,
    colorLight: P.SAGE,
    image: 'drum_moss_forest.png',
    icon: '🥁',
  },
  {
    num: '03',
    tag: 'Personal Healing',
    title: '1-on-1 Shamanic Session',
    shortDesc: 'Direct, private energetic work with Shaman Abhay Oyun.',
    fullDesc: 'Each session identifies the root cause of imbalance — physical, emotional, or ancestral — and applies targeted shamanic intervention. You will be held in sacred space as ancient wisdom flows through to restore what has been broken.',
    color: P.TERRA,
    colorLight: P.CLAY,
    image: 'yurt_fire_healing.png',
    icon: '🔥',
  },
];

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Teachings Section Styles
// ═══════════════════════════════════════════════════════════════
const TEACHINGS_CSS = `
// ── Section Container ──
.teachings-section {
  position: relative;
  overflow: hidden;
}

// ── Section Header ──
.teachings-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 56px;
}

.teachings-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.teachings-eyebrow-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.teachings-eyebrow-line-r {
  width: 40px;
  height: 1px;
  background: linear-gradient(to left, transparent, ${P.GOLD});
}

.teachings-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

.teachings-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(36px, 4.5vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.5px;
  color: ${P.CHARCOAL};
  margin-bottom: 20px;
}

.teachings-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.FOREST});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.teachings-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  line-height: 1.8;
  color: ${P.BROWN};
  max-width: 520px;
  margin: 0 auto;
}

// ── Practice Cards ──
.teachings-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.teaching-card {
  position: relative;
  background: ${P.IVORY};
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(196, 148, 42, 0.08);
  box-shadow: 0 16px 48px rgba(44, 36, 22, 0.06);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.teaching-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 64px rgba(44, 36, 22, 0.1);
}

.teaching-card-inner {
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

// ── Card Top: Number + Tag ──
.teaching-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.teaching-card-num {
  font-family: 'Cinzel', serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 1;
  opacity: 0.15;
  color: ${P.CHARCOAL};
}

.teaching-card-tag {
  display: inline-block;
  padding: 6px 14px;
  font-family: 'Lato', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 100px;
  transition: all 0.4s ease;
}

// Tag colors by practice
.teaching-card[data-practice="1"] .teaching-card-tag {
  background: ${P.GOLD}15;
  color: ${P.GOLD};
  border: 1px solid ${P.GOLD}30;
}

.teaching-card[data-practice="2"] .teaching-card-tag {
  background: ${P.FOREST}15;
  color: ${P.FOREST};
  border: 1px solid ${P.FOREST}30;
}

.teaching-card[data-practice="3"] .teaching-card-tag {
  background: ${P.TERRA}15;
  color: ${P.TERRA};
  border: 1px solid ${P.TERRA}30;
}

// ── Card Icon ──
.teaching-card-icon {
  font-size: 48px;
  margin-bottom: 20px;
  transition: transform 0.4s ease;
}

.teaching-card:hover .teaching-card-icon {
  transform: scale(1.1);
}

// ── Card Title ──
.teaching-card-title {
  font-family: 'Cinzel', serif;
  font-size: 22px;
  font-weight: 600;
  color: ${P.CHARCOAL};
  margin-bottom: 12px;
  line-height: 1.2;
}

// ── Card Description ──
.teaching-card-desc {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: ${P.BROWN};
  margin-bottom: 24px;
  flex-grow: 1;
}

// ── Card Bottom: Learn More ──
.teaching-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid ${P.DUNE};
}

.teaching-card-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
}

.teaching-card[data-practice="1"] .teaching-card-cta { color: ${P.GOLD}; }
.teaching-card[data-practice="2"] .teaching-card-cta { color: ${P.FOREST}; }
.teaching-card[data-practice="3"] .teaching-card-cta { color: ${P.TERRA}; }

.teaching-card-cta:hover {
  gap: 12px;
}

.teaching-card-arrow {
  transition: transform 0.3s ease;
}

.teaching-card-cta:hover .teaching-card-arrow {
  transform: translateX(4px);
}

// ── Decorative Gradient Bar ──
.teaching-card-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  transition: height 0.4s ease;
}

.teaching-card:hover .teaching-card-bar {
  height: 6px;
}

.teaching-card[data-practice="1"] .teaching-card-bar {
  background: linear-gradient(90deg, ${P.GOLD}, ${P.GOLD_LIGHT});
}

.teaching-card[data-practice="2"] .teaching-card-bar {
  background: linear-gradient(90deg, ${P.FOREST}, ${P.MOSS});
}

.teaching-card[data-practice="3"] .teaching-card-bar {
  background: linear-gradient(90deg, ${P.TERRA}, ${P.CLAY});
}

// ── Responsive ──
@media (max-width: 1024px) {
  .teachings-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .teaching-card:last-child {
    grid-column: span 2;
    max-width: 50%;
    margin: 0 auto;
  }
}

@media (max-width: 767px) {
  .teachings-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .teaching-card:last-child {
    grid-column: span 1;
    max-width: 100%;
  }

  .teaching-card-title { font-size: 20px; }
  .teaching-card-desc { font-size: 14px; }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD TEACHINGS SECTION
// ═══════════════════════════════════════════════════════════════
function buildTeachingsSection() {
  // Build practice cards
  const practiceCards = PRACTICES.map((practice, index) =>
    text(`<div class="teaching-card" data-practice="${index + 1}">
      <div class="teaching-card-bar"></div>
      <div class="teaching-card-inner">
        <div class="teaching-card-top">
          <span class="teaching-card-num">${practice.num}</span>
          <span class="teaching-card-tag">${practice.tag}</span>
        </div>
        <div class="teaching-card-icon">${practice.icon}</div>
        <h3 class="teaching-card-title">${practice.title}</h3>
        <p class="teaching-card-desc">${practice.shortDesc}</p>
        <div class="teaching-card-bottom">
          <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="teaching-card-cta">
            Begin Your Journey
            <span class="teaching-card-arrow">→</span>
          </a>
        </div>
      </div>
    </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
      ...anim('fadeInUp', 'slow', index * 150),
    })
  );

  return sec({
    layout: 'full_width',

    // Warm parchment background
    background_background: 'classic',
    background_color: P.PARCHMENT,

    // Generous padding
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),

    // Z-index
    z_index: 10,

    // Sacred CSS
    custom_css: TEACHINGS_CSS,
    css_classes: 'teachings-section',
  }, [
    // ── Section Header ──
    col(100, {
      content_position: 'center',
    }, [
      text(`<div class="teachings-header">
        <div class="teachings-eyebrow">
          <div class="teachings-eyebrow-line"></div>
          <span class="teachings-eyebrow-text">The Sacred Work</span>
          <div class="teachings-eyebrow-line-r"></div>
        </div>
        <h2 class="teachings-title">
          Three Paths to<br>
          <span class="teachings-title-accent">Awakening</span>
        </h2>
        <p class="teachings-subtitle">
          Each practice meets you where you are — offering a unique doorway into the ancient wisdom that has healed thousands across 40 countries and 35 years of sacred service.
        </p>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInUp'),
      }),
    ]),

    // ── Practice Cards Grid ──
    col(100, {
      content_position: 'top',
    }, practiceCards),

    // ── Bottom CTA ──
    col(100, {
      content_position: 'center',
      padding: pad(48, 0, 0, 0),
    }, [
      text(`<div style="text-align:center;">
        <p style="font-family:'Cinzel',serif;font-size:14px;color:${P.STONE_GRAY};margin-bottom:20px;letter-spacing:2px;">
          Not sure which path is right for you?
        </p>
        <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" style="display:inline-flex;align-items:center;gap:12px;padding:16px 40px;background:linear-gradient(135deg,${P.GOLD},${P.GOLD_LIGHT});color:#fff;font-family:'Cinzel',serif;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;text-decoration:none;border-radius:100px;box-shadow:0 8px 28px rgba(196,148,42,0.3);transition:all 0.4s ease;">
          Book a Free Discovery Call →
        </a>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 500),
      }),
    ]),
  ]);
}

module.exports = { buildTeachingsSection };
