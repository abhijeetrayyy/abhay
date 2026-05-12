// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 06: EVENTS
// Sacred gatherings. Join the circle.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Upcoming events presented beautifully
// - Each event has its own character
// - Urgency without pressure (spots remaining)
// - "Be part of something sacred" feeling
// - Clear pricing and registration
// - Mobile-friendly event cards
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// EVENTS DATA
// ═══════════════════════════════════════════════════════════════
const EVENTS = [
  {
    tag: "Men's Intensive",
    title: 'Reclaim Your Masculine Power',
    date: 'March 25–29, 2025',
    location: 'Denver, Colorado',
    price: 'From $1,200',
    seats: '18 spots remaining',
    badge: 'Filling Fast',
    badgeColor: P.FOREST,
    desc: 'A 5-day immersive for men ready to step fully into their energetic sovereignty. Cold exposure, sacred fire ceremony, drum healing, and direct shamanic mentorship with Master Abhay.',
    highlights: ['Cold Plunge Ceremony', 'Sacred Fire Ritual', 'Drum Healing', '1-on-1 Session'],
    image: 'sao-gallery-img3.jpg',
    ctaText: 'Register Now →',
    ctaLink: 'https://forms.gle/jEDaUrKwbyHd8WvUA',
  },
  {
    tag: "Women's Gathering",
    title: 'Shamanism — Source of Happiness & Love',
    date: 'March 20–22, 2025',
    location: 'Denver, Colorado',
    price: 'From $890',
    seats: '12 spots remaining',
    badge: 'Limited',
    badgeColor: P.TERRA,
    desc: 'A sacred gathering for women. Reconnect with the ancient feminine power of the Earth through ceremony, sound medicine, and shamanic healing circles in an intimate group setting.',
    highlights: ['Sound Ceremony', 'Sisterhood Circle', 'Energy Work', 'Forest Ritual'],
    image: 'sao-gallery-img1.jpg',
    ctaText: 'Join the Circle →',
    ctaLink: 'https://forms.gle/jEDaUrKwbyHd8WvUA',
  },
  {
    tag: 'Free Webinar',
    title: 'Your First Step Into the SAMPO System',
    date: 'March 19, 2025',
    location: 'Online · Global Access',
    price: 'Free',
    seats: 'Open registration',
    badge: 'Free Entry',
    badgeColor: P.GOLD,
    desc: 'Experience the SAMPO System from anywhere. A live initiation into the foundations of shamanic energy work. Open to all seekers — no prior experience required.',
    highlights: ['Live Q&A', 'Energy Practice', 'SAMPO Introduction', 'Worldwide Access'],
    image: 'healing-global-harmony.jpg',
    ctaText: 'Reserve Your Spot →',
    ctaLink: 'https://forms.gle/jEDaUrKwbyHd8WvUA',
  },
];

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Events Section Styles
// ═══════════════════════════════════════════════════════════════
const EVENTS_CSS = `
// ── Section Container ──
.events-section {
  position: relative;
  overflow: hidden;
}

// ── Section Header ──
.events-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 56px;
}

.events-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.events-eyebrow-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.events-eyebrow-line-r {
  width: 40px;
  height: 1px;
  background: linear-gradient(to left, transparent, ${P.GOLD});
}

.events-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

.events-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(36px, 4.5vw, 56px);
  line-height: 1.1;
  letter-spacing: -0.5px;
  color: ${P.CHARCOAL};
  margin-bottom: 20px;
}

.events-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.TERRA});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.events-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 17px;
  line-height: 1.8;
  color: ${P.BROWN};
}

// ── Events List ──
.events-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

// ── Individual Event Card ──
.event-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  background: ${P.IVORY};
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(196, 148, 42, 0.1);
  box-shadow: 0 16px 48px rgba(44, 36, 22, 0.05);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.event-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 64px rgba(44, 36, 22, 0.1);
  border-color: rgba(196, 148, 42, 0.2);
}

// ── Event Image ──
.event-card-image {
  position: relative;
  height: 100%;
  min-height: 200px;
  overflow: hidden;
}

.event-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.event-card:hover .event-card-image img {
  transform: scale(1.05);
}

// ── Event Content ──
.event-card-content {
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

// ── Event Header: Tags + Badge ──
.event-card-tags {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.event-tag {
  display: inline-block;
  padding: 5px 12px;
  font-family: 'Lato', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 100px;
}

.event-badge {
  display: inline-block;
  padding: 5px 12px;
  font-family: 'Lato', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 100px;
  background: ${P.PARCHMENT};
  color: ${P.STONE_GRAY};
}

// ── Event Title ──
.event-card-title {
  font-family: 'Cinzel', serif;
  font-size: 24px;
  font-weight: 600;
  color: ${P.CHARCOAL};
  margin-bottom: 12px;
  line-height: 1.2;
}

// ── Event Description ──
.event-card-desc {
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: ${P.BROWN};
  margin-bottom: 16px;
}

// ── Event Highlights ──
.event-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.event-highlight {
  display: inline-block;
  padding: 4px 10px;
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 500;
  color: ${P.BROWN};
  background: ${P.PARCHMENT};
  border-radius: 100px;
}

// ── Event Meta ──
.event-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid ${P.DUNE};
  margin-bottom: 20px;
}

.event-meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.event-meta-icon {
  font-size: 14px;
}

.event-meta-text {
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: ${P.CHARCOAL};
}

.event-meta-sub {
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  color: ${P.STONE_GRAY};
}

.event-price {
  font-family: 'Cinzel', serif;
  font-size: 28px;
  font-weight: 600;
  color: ${P.CHARCOAL};
}

// ── Event CTA ──
.event-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 32px;
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.4s ease;
}

.event-cta:hover {
  transform: translateY(-2px);
}

.event-cta-arrow {
  transition: transform 0.3s ease;
}

.event-cta:hover .event-cta-arrow {
  transform: translateX(4px);
}

// ── Event Card Color Variants ──
.event-card[data-event="1"] .event-tag {
  background: ${P.FOREST}15;
  color: ${P.FOREST};
  border: 1px solid ${P.FOREST}25;
}

.event-card[data-event="1"] .event-cta {
  background: linear-gradient(135deg, ${P.FOREST}, ${P.MOSS});
  color: #fff;
  box-shadow: 0 6px 24px ${P.FOREST}40;
}

.event-card[data-event="2"] .event-tag {
  background: ${P.TERRA}15;
  color: ${P.TERRA};
  border: 1px solid ${P.TERRA}25;
}

.event-card[data-event="2"] .event-cta {
  background: linear-gradient(135deg, ${P.TERRA}, ${P.CLAY});
  color: #fff;
  box-shadow: 0 6px 24px ${P.TERRA}40;
}

.event-card[data-event="3"] .event-tag {
  background: ${P.GOLD}15;
  color: ${P.GOLD};
  border: 1px solid ${P.GOLD}25;
}

.event-card[data-event="3"] .event-cta {
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  color: #fff;
  box-shadow: 0 6px 24px rgba(196, 148, 42, 0.3);
}

// ── Responsive ──
@media (max-width: 1024px) {
  .event-card {
    grid-template-columns: 180px 1fr;
  }

  .event-card-content {
    padding: 28px 32px;
  }
}

@media (max-width: 767px) {
  .event-card {
    grid-template-columns: 1fr;
    grid-template-rows: 200px auto;
  }

  .event-card-image {
    height: 200px;
    min-height: 200px;
  }

  .event-card-content {
    padding: 24px;
  }

  .event-card-title {
    font-size: 20px;
  }

  .event-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .event-price {
    font-size: 24px;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD EVENTS SECTION
// ═══════════════════════════════════════════════════════════════
function buildEventsSection() {
  // Build event cards
  const eventCards = EVENTS.map((event, index) => {
    const highlightTags = event.highlights.map(h =>
      `<span class="event-highlight">${h}</span>`
    ).join('');

    return text(`<div class="event-card" data-event="${index + 1}">
      <div class="event-card-image">
        <img src="${P.SITE}/${event.image}" alt="${event.title}">
      </div>
      <div class="event-card-content">
        <div class="event-card-tags">
          <span class="event-tag">${event.tag}</span>
          <span class="event-badge">${event.badge}</span>
        </div>
        <h3 class="event-card-title">${event.title}</h3>
        <p class="event-card-desc">${event.desc}</p>
        <div class="event-highlights">${highlightTags}</div>
        <div class="event-meta">
          <div>
            <div class="event-meta-item">
              <span class="event-meta-icon">📅</span>
              <span class="event-meta-text">${event.date}</span>
            </div>
            <div class="event-meta-item" style="margin-top:6px;">
              <span class="event-meta-icon">📍</span>
              <span class="event-meta-sub">${event.location}</span>
            </div>
          </div>
          <div class="event-price">${event.price}</div>
        </div>
        <a href="${event.ctaLink}" target="_blank" class="event-cta">
          ${event.ctaText}
          <span class="event-cta-arrow">→</span>
        </a>
      </div>
    </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
      ...anim('fadeInUp', 'slow', index * 150),
    });
  });

  return sec({
    layout: 'full_width',

    // Warm dune background
    background_background: 'classic',
    background_color: P.DUNE,

    // Generous padding
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),

    // Z-index
    z_index: 10,

    // Sacred CSS
    custom_css: EVENTS_CSS,
    css_classes: 'events-section',
  }, [
    // ── Section Header ──
    col(100, {
      content_position: 'center',
    }, [
      text(`<div class="events-header">
        <div class="events-eyebrow">
          <div class="events-eyebrow-line"></div>
          <span class="events-eyebrow-text">Upcoming Gatherings</span>
          <div class="events-eyebrow-line-r"></div>
        </div>
        <h2 class="events-title">
          Join the<br>
          <span class="events-title-accent">Sacred Circle</span>
        </h2>
        <p class="events-subtitle">
          Each gathering is a doorway into ancient wisdom. Whether in person or online, you are invited to step into sacred space with your community.
        </p>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInUp'),
      }),
    ]),

    // ── Events List ──
    col(100, {
      content_position: 'top',
      padding: pad(40, 0, 0, 0),
    }, [
      text(`<div class="events-list">${eventCards.map(() => '').join('')}</div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 200),
      }),
    ]),
  ]);
}

// Override with individual cards outside the nested text
function buildEventsSection_v2() {
  return sec({
    layout: 'full_width',
    background_background: 'classic',
    background_color: P.DUNE,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
    z_index: 10,
    custom_css: EVENTS_CSS,
    css_classes: 'events-section',
  }, [
    col(100, { content_position: 'center' }, [
      text(`<div class="events-header">
        <div class="events-eyebrow">
          <div class="events-eyebrow-line"></div>
          <span class="events-eyebrow-text">Upcoming Gatherings</span>
          <div class="events-eyebrow-line-r"></div>
        </div>
        <h2 class="events-title">
          Join the<br>
          <span class="events-title-accent">Sacred Circle</span>
        </h2>
        <p class="events-subtitle">
          Each gathering is a doorway into ancient wisdom. Whether in person or online, you are invited to step into sacred space with your community.
        </p>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), { ...anim('fadeInUp') }),
    ]),
    col(100, { content_position: 'top' }, [
      ...EVENTS.map((event, index) => {
        const highlightTags = event.highlights.map(h =>
          `<span class="event-highlight">${h}</span>`
        ).join('');

        return text(`<div class="event-card" data-event="${index + 1}">
          <div class="event-card-image">
            <img src="${P.SITE}/${event.image}" alt="${event.title}">
          </div>
          <div class="event-card-content">
            <div class="event-card-tags">
              <span class="event-tag">${event.tag}</span>
              <span class="event-badge">${event.badge}</span>
            </div>
            <h3 class="event-card-title">${event.title}</h3>
            <p class="event-card-desc">${event.desc}</p>
            <div class="event-highlights">${highlightTags}</div>
            <div class="event-meta">
              <div>
                <div class="event-meta-item">
                  <span class="event-meta-icon">📅</span>
                  <span class="event-meta-text">${event.date}</span>
                </div>
                <div class="event-meta-item" style="margin-top:6px;">
                  <span class="event-meta-icon">📍</span>
                  <span class="event-meta-sub">${event.location}</span>
                </div>
              </div>
              <div class="event-price">${event.price}</div>
            </div>
            <a href="${event.ctaLink}" target="_blank" class="event-cta">
              ${event.ctaText}
              <span class="event-cta-arrow">→</span>
            </a>
          </div>
        </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
          ...anim('fadeInUp', 'slow', 200 + index * 150),
        });
      })
    ]),
  ]);
}

module.exports = { buildEventsSection: buildEventsSection_v2 };
