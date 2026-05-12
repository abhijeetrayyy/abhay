// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 09: TRANSFORMATION / GLOBAL IMPACT
// The global journey. Guardian of our planet.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Global impact story told beautifully
// - Timeline of major healing events
// - "Guardian of Our Planet" narrative
// - Inspiring, not overwhelming
// - Trust-building through real events
// - Mix of quote, text, and visual timeline
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// MILESTONES DATA
// ═══════════════════════════════════════════════════════════════
const MILESTONES = [
  {
    year: '2004',
    location: 'Mount Fuji, Japan',
    title: 'The Great Gathering',
    desc: '2,500 people gathered at the base of Mount Fuji under Abhay\'s guidance. Shaman chiefs from North America and Asian tribes united in ceremony for the first time in recorded history.',
    icon: '🏔️',
  },
  {
    year: '2007',
    location: 'South Russia',
    title: 'Peace Conferences',
    desc: 'Major peace conferences and large spiritual gatherings where prayers and sacred rituals were held to bring peace and healing to the war-torn region.',
    icon: '🕊️',
  },
  {
    year: '2015',
    location: 'Chile',
    title: 'Earth Healing Ceremony',
    desc: 'When earthquakes, volcanic ash, and severe drought converged on Chile, Abhay led ceremonies to shift the collective energetic field and support recovery.',
    icon: '🌍',
  },
  {
    year: '2022',
    location: 'Ukraine',
    title: 'Sacred Ceremonies for Peace',
    desc: 'During the New Year\'s Retreat, Abhay received a vision of the coming conflict. Sacred ceremonies were organized across Europe to focus healing energy on the region.',
    icon: '✦',
  },
];

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Transformation Section Styles
// ═══════════════════════════════════════════════════════════════
const TRANSFORMATION_CSS = `
// ── Section Container ──
.transformation-section {
  position: relative;
  overflow: hidden;
}

// ── Section Header ──
.transformation-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 56px;
}

.transformation-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.transformation-eyebrow-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.transformation-eyebrow-line-r {
  width: 40px;
  height: 1px;
  background: linear-gradient(to left, transparent, ${P.GOLD});
}

.transformation-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

.transformation-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.5px;
  color: ${P.CHARCOAL};
  margin-bottom: 16px;
}

.transformation-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.FOREST});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

// ── Two Column Layout ──
.transformation-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

// ── Left Column: Quote Block ──
.transformation-quote-wrap {
  position: relative;
}

.transformation-quote {
  padding: 40px;
  background: ${P.IVORY};
  border-radius: 24px;
  border: 1px solid rgba(196, 148, 42, 0.1);
  position: relative;
}

.transformation-quote::before {
  content: '"';
  position: absolute;
  top: 20px;
  left: 28px;
  font-family: 'Cinzel', serif;
  font-size: 80px;
  color: ${P.GOLD_PALE};
  line-height: 1;
  pointer-events: none;
}

.transformation-quote-text {
  font-family: 'Cinzel', serif;
  font-style: italic;
  font-size: clamp(20px, 2.2vw, 28px);
  line-height: 1.5;
  color: ${P.CHARCOAL};
  margin: 0 0 24px 0;
  position: relative;
  z-index: 1;
}

.transformation-quote-divider {
  width: 48px;
  height: 2px;
  background: linear-gradient(to right, ${P.GOLD}, transparent);
  margin-bottom: 16px;
}

.transformation-quote-author {
  font-family: 'Cinzel', serif;
  font-size: 13px;
  font-weight: 600;
  color: ${P.CHARCOAL};
  letter-spacing: 1px;
}

.transformation-quote-label {
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${P.GOLD};
  margin-bottom: 4px;
}

// ── Description Text ──
.transformation-desc {
  margin-top: 32px;
  padding: 28px;
  background: ${P.IVORY};
  border-radius: 16px;
  border: 1px solid rgba(196, 148, 42, 0.08);
}

.transformation-desc-text {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1.9;
  color: ${P.BROWN};
  margin: 0;
}

.transformation-desc-text strong {
  color: ${P.CHARCOAL};
  font-weight: 600;
}

// ── Right Column: Timeline ──
.transformation-timeline {
  position: relative;
  padding-left: 32px;
}

// ── Timeline Line ──
.transformation-timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, ${P.GOLD}, ${P.GOLD_PALE}, ${P.FOREST}, ${P.GOLD_PALE}, ${P.GOLD});
  border-radius: 2px;
}

// ── Timeline Items ──
.timeline-item {
  position: relative;
  padding-bottom: 40px;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

// ── Timeline Dot ──
.timeline-dot {
  position: absolute;
  left: -36px;
  top: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${P.IVORY};
  border: 2px solid ${P.GOLD};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.timeline-dot::after {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${P.GOLD};
}

.timeline-item:nth-child(2) .timeline-dot { border-color: ${P.FOREST}; }
.timeline-item:nth-child(2) .timeline-dot::after { background: ${P.FOREST}; }

.timeline-item:nth-child(3) .timeline-dot { border-color: ${P.TERRA}; }
.timeline-item:nth-child(3) .timeline-dot::after { background: ${P.TERRA}; }

.timeline-item:nth-child(4) .timeline-dot { border-color: ${P.GOLD}; }
.timeline-item:nth-child(4) .timeline-dot::after { background: ${P.GOLD}; }

// ── Timeline Content ──
.timeline-year {
  font-family: 'Cinzel', serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 4px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.timeline-location {
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
  margin-bottom: 12px;
}

.timeline-title {
  font-family: 'Cinzel', serif;
  font-size: 18px;
  font-weight: 600;
  color: ${P.CHARCOAL};
  margin-bottom: 8px;
}

.timeline-desc {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: ${P.BROWN};
  margin: 0;
}

// ── Decorative Globe ──
.transformation-globe {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 200px;
  opacity: 0.08;
  pointer-events: none;
}

// ── Responsive ──
@media (max-width: 1024px) {
  .transformation-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .transformation-timeline {
    padding-left: 28px;
  }

  .timeline-dot {
    left: -32px;
  }
}

@media (max-width: 767px) {
  .transformation-quote {
    padding: 28px 24px;
  }

  .transformation-quote-text {
    font-size: 18px;
  }

  .timeline-year {
    font-size: 28px;
  }

  .timeline-title {
    font-size: 16px;
  }

  .timeline-desc {
    font-size: 13px;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD TRANSFORMATION SECTION
// ═══════════════════════════════════════════════════════════════
function buildTransformationSection() {
  // Build timeline items
  const timelineItems = MILESTONES.map((m, index) =>
    text(`<div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-year">${m.year}</div>
      <div class="timeline-location">${m.location}</div>
      <div class="timeline-title">${m.title}</div>
      <p class="timeline-desc">${m.desc}</p>
    </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
      ...anim('fadeInRight', 'slow', 200 + index * 150),
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
    custom_css: TRANSFORMATION_CSS,
    css_classes: 'transformation-section',
  }, [
    // ── Section Header ──
    col(100, { content_position: 'center' }, [
      text(`<div class="transformation-header">
        <div class="transformation-eyebrow">
          <div class="transformation-eyebrow-line"></div>
          <span class="transformation-eyebrow-text">Global Impact</span>
          <div class="transformation-eyebrow-line-r"></div>
        </div>
        <h2 class="transformation-title">
          Guardian of<br>
          <span class="transformation-title-accent">Our Planet</span>
        </h2>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInUp'),
      }),
    ]),

    // ── Two Column Content ──
    col(100, { content_position: 'top' }, [
      text(`<div class="transformation-grid">
        <div class="transformation-grid-item"></div>
        <div class="transformation-grid-item"></div>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 200),
      }),
    ]),
  ]);
}

// Better structured version with proper columns
function buildTransformationSection_v2() {
  return sec({
    layout: 'full_width',
    background_background: 'classic',
    background_color: P.IVORY,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
    z_index: 10,
    custom_css: TRANSFORMATION_CSS,
    css_classes: 'transformation-section',
  }, [
    // ── Section Header ──
    col(100, { content_position: 'center' }, [
      text(`<div class="transformation-header">
        <div class="transformation-eyebrow">
          <div class="transformation-eyebrow-line"></div>
          <span class="transformation-eyebrow-text">Global Impact</span>
          <div class="transformation-eyebrow-line-r"></div>
        </div>
        <h2 class="transformation-title">
          Guardian of<br>
          <span class="transformation-title-accent">Our Planet</span>
        </h2>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInUp'),
      }),
    ]),

    // ── Left Column: Quote + Description ──
    col(48, { content_position: 'top', _column_size_mobile: 100 }, [
      // Quote block
      text(`<div class="transformation-quote">
        <p class="transformation-quote-text">When you reconnect with your wild nature, trauma doesn't just heal — it transforms into power.</p>
        <div class="transformation-quote-divider"></div>
        <div class="transformation-quote-label">Shaman Abhay Oyun</div>
        <div class="transformation-quote-author">Guardian of Our Planet</div>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInLeft', 'slow', 200),
      }),

      // Description
      text(`<div class="transformation-desc">
        <p class="transformation-desc-text">Called the <strong>Guardian of Our Planet</strong>, Abhay Oyun has dedicated his life to responding to global crises — natural disasters, wars, humanitarian emergencies — through the ancient lens of shamanic intervention.</p>
      </div>`, '', typo('typography', { f: 'Lato', s: 15 }), {
        ...anim('fadeInLeft', 'slow', 400),
      }),
    ]),

    // ── Right Column: Timeline ──
    col(52, { content_position: 'top', _column_size_mobile: 100 }, [
      text(`<div class="transformation-timeline">
        ${MILESTONES.map((m, index) => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">${m.year}</div>
            <div class="timeline-location">${m.location}</div>
            <div class="timeline-title">${m.title}</div>
            <p class="timeline-desc">${m.desc}</p>
          </div>
        `).join('')}
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInRight', 'slow', 300),
      }),
    ]),
  ]);
}

module.exports = { buildTransformationSection: buildTransformationSection_v2 };
