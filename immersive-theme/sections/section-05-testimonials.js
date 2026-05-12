// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 05: TESTIMONIALS
// Sacred transformations. Stories of healing.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Real, authentic healing stories
// - "I could be them" feeling
// - Warm, intimate, trustworthy
// - Beautiful card presentation
// - Quotes that touch the heart
// - Names and locations for authenticity
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS DATA
// ═══════════════════════════════════════════════════════════════
const TESTIMONIALS = [
  {
    quote: "After one session with Abhay, I felt a weight lift from my chest that I had been carrying for 20 years. It was like my cells remembered how to breathe again.",
    name: "Maria K.",
    location: "Berlin, Germany",
    icon: "✦",
  },
  {
    quote: "The Sampo System completely rewired how I experience stress. What used to cripple me now passes through me. I have never felt more whole, more present, more alive.",
    name: "James R.",
    location: "London, United Kingdom",
    icon: "✦",
  },
  {
    quote: "I traveled to three continents seeking healing. What Abhay achieved in a single session surpassed everything. This is ancient wisdom in its purest form.",
    name: "Elena V.",
    location: "Moscow, Russia",
    icon: "✦",
  },
  {
    quote: "What I remember most is the feeling — an all-embracing warmth that touched my heart deeply. I finally felt like I belonged somewhere. Like I was finally home.",
    name: "Priya S.",
    location: "Mumbai, India",
    icon: "✦",
  },
  {
    quote: "The drum healing ceremony was unlike anything I've experienced. I released grief I'd held for years. I emerged feeling lighter, clearer, more myself than ever before.",
    name: "Michael T.",
    location: "Toronto, Canada",
    icon: "✦",
  },
  {
    quote: "Abhay doesn't just heal — he transforms. In one session, patterns I struggled with for decades simply dissolved. The change was immediate, profound, and lasting.",
    name: "Ana M.",
    location: "Barcelona, Spain",
    icon: "✦",
  },
];

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Testimonials Section Styles
// ═══════════════════════════════════════════════════════════════
const TESTIMONIALS_CSS = `
// ── Section Container ──
.testimonials-section {
  position: relative;
  overflow: hidden;
}

// ── Decorative Background ──
@keyframes shimmer-slow {
  0% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.05); }
  100% { opacity: 0.1; transform: scale(1); }
}

.testimonials-bg-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
}

.testimonials-bg-orb-1 {
  top: -150px;
  left: -150px;
  width: 400px;
  height: 400px;
  background: ${P.GOLD_PALE};
  animation: shimmer-slow 10s ease-in-out infinite;
}

.testimonials-bg-orb-2 {
  bottom: -150px;
  right: -150px;
  width: 350px;
  height: 350px;
  background: ${P.SAGE};
  animation: shimmer-slow 12s ease-in-out infinite reverse;
}

// ── Section Header ──
.testimonials-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 56px;
}

.testimonials-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.testimonials-eyebrow-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.testimonials-eyebrow-line-r {
  width: 40px;
  height: 1px;
  background: linear-gradient(to left, transparent, ${P.GOLD});
}

.testimonials-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

.testimonials-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.5px;
  color: ${P.CHARCOAL};
  margin-bottom: 16px;
}

.testimonials-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.FOREST});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.testimonials-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: ${P.BROWN};
}

// ── Testimonials Grid ──
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

// ── Individual Testimonial Card ──
.testimonial-card {
  position: relative;
  background: ${P.IVORY};
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(196, 148, 42, 0.08);
  box-shadow: 0 12px 40px rgba(44, 36, 22, 0.04);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(44, 36, 22, 0.08);
  border-color: rgba(196, 148, 42, 0.15);
}

// ── Card Top: Decorative Quote Mark ──
.testimonial-quote-mark {
  position: absolute;
  top: 20px;
  right: 28px;
  font-family: 'Cinzel', serif;
  font-size: 72px;
  line-height: 1;
  color: ${P.GOLD_PALE};
  opacity: 0.5;
  pointer-events: none;
}

// ── Card Top: Gradient Bar ──
.testimonial-card-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  opacity: 0.7;
  transition: all 0.4s ease;
}

.testimonial-card:hover .testimonial-card-bar {
  height: 5px;
  opacity: 1;
}

// ── Quote Text ──
.testimonial-quote {
  font-family: 'Cinzel', serif;
  font-style: italic;
  font-size: 18px;
  line-height: 1.75;
  color: ${P.CHARCOAL};
  margin: 0 0 28px 0;
  position: relative;
  z-index: 1;
}

// ── Person Info ──
.testimonial-person {
  display: flex;
  align-items: center;
  gap: 14px;
}

.testimonial-divider {
  width: 36px;
  height: 2px;
  background: linear-gradient(to right, ${P.GOLD}, transparent);
  flex-shrink: 0;
}

.testimonial-details {}

.testimonial-name {
  font-family: 'Cinzel', serif;
  font-size: 15px;
  font-weight: 600;
  color: ${P.CHARCOAL};
  margin-bottom: 4px;
}

.testimonial-location {
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
}

// ── Decorative Element ──
.testimonial-icon {
  position: absolute;
  bottom: 20px;
  left: 40px;
  font-size: 24px;
  opacity: 0.15;
  color: ${P.GOLD};
}

// ── Large Featured Testimonial ──
.testimonial-featured {
  grid-column: span 2;
  background: linear-gradient(135deg, ${P.IVORY} 0%, ${P.GOLD_PALE}20 100%);
  padding: 48px;
}

.testimonial-featured .testimonial-quote {
  font-size: 22px;
}

.testimonial-featured .testimonial-quote-mark {
  font-size: 96px;
  top: 16px;
  right: 36px;
}

// ── Responsive ──
@media (max-width: 1024px) {
  .testimonials-grid {
    gap: 20px;
  }

  .testimonial-card {
    padding: 32px;
  }

  .testimonial-featured {
    grid-column: span 1;
  }
}

@media (max-width: 767px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .testimonial-featured {
    grid-column: span 1;
  }

  .testimonial-quote {
    font-size: 16px;
  }

  .testimonial-featured .testimonial-quote {
    font-size: 18px;
  }

  .testimonial-card {
    padding: 28px;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD TESTIMONIALS SECTION
// ═══════════════════════════════════════════════════════════════
function buildTestimonialsSection() {
  // Build testimonial cards
  const testimonialCards = TESTIMONIALS.map((t, index) => {
    const isFeatured = index === 0;
    const cardClass = isFeatured ? 'testimonial-featured' : '';

    return text(`<div class="testimonial-card ${cardClass}">
      <div class="testimonial-card-bar"></div>
      <span class="testimonial-quote-mark">"</span>
      <p class="testimonial-quote">"${t.quote}"</p>
      <div class="testimonial-person">
        <div class="testimonial-divider"></div>
        <div class="testimonial-details">
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-location">${t.location}</div>
        </div>
      </div>
      <span class="testimonial-icon">${t.icon}</span>
    </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
      ...anim('fadeInUp', 'slow', index * 120),
    });
  });

  return sec({
    layout: 'full_width',

    // Warm moonlight background
    background_background: 'classic',
    background_color: P.MOONLIGHT,

    // Generous padding
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),

    // Z-index
    z_index: 10,

    // Sacred CSS
    custom_css: TESTIMONIALS_CSS,
    css_classes: 'testimonials-section',
  }, [
    // ── Background Orbs ──
    col(100, {
      content_position: 'top',
      padding: pad(0, 0, 0, 0),
    }, [
      text(`<div class="testimonials-bg-orb testimonials-bg-orb-1"></div>
            <div class="testimonials-bg-orb testimonials-bg-orb-2"></div>`, '', typo('typography', { f: 'Lato', s: 12 })),
    ]),

    // ── Section Header ──
    col(100, {
      content_position: 'center',
    }, [
      text(`<div class="testimonials-header">
        <div class="testimonials-eyebrow">
          <div class="testimonials-eyebrow-line"></div>
          <span class="testimonials-eyebrow-text">Sacred Transformations</span>
          <div class="testimonials-eyebrow-line-r"></div>
        </div>
        <h2 class="testimonials-title">
          Stories of<br>
          <span class="testimonials-title-accent">Healing & Belonging</span>
        </h2>
        <p class="testimonials-subtitle">
          Thousands have come from places of pain and disconnection — and left feeling whole, grounded, and alive. These are some of their stories.
        </p>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInUp'),
      }),
    ]),

    // ── Testimonials Grid ──
    col(100, {
      content_position: 'top',
      padding: pad(40, 0, 0, 0),
    }, testimonialCards),
  ]);
}

module.exports = { buildTestimonialsSection };
