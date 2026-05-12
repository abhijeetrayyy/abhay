// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 08: VIDEO / YOUTUBE
// Sacred teachings. Watch and learn.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - YouTube video embeds presented beautifully
// - Grid layout with thumbnails
// - Lightbox on click (Elementor default behavior)
// - "Dive deeper" feeling
// - Clean, immersive video presentation
// - Subscribe CTA
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// VIDEO DATA
// ═══════════════════════════════════════════════════════════════
const VIDEOS = [
  {
    id: 'kjFiyWgyvu0',
    title: 'Abhay Oyun Teaching',
    thumb: 'https://img.youtube.com/vi/kjFiyWgyvu0/maxresdefault.jpg',
  },
  {
    id: 'EqEK-5uJrAA',
    title: 'Sacred Drum Ceremony',
    thumb: 'https://img.youtube.com/vi/EqEK-5uJrAA/maxresdefault.jpg',
  },
  {
    id: 'MXW78uQR7xg',
    title: 'Shamanic Initiation',
    thumb: 'https://img.youtube.com/vi/MXW78uQR7xg/maxresdefault.jpg',
  },
  {
    id: 'rNviNzWV-e4',
    title: 'Nature Synchronization',
    thumb: 'https://img.youtube.com/vi/rNviNzWV-e4/maxresdefault.jpg',
  },
  {
    id: '9ftcHfDEjeI',
    title: 'The SAMPO System',
    thumb: 'https://img.youtube.com/vi/9ftcHfDEjeI/maxresdefault.jpg',
  },
];

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Video Section Styles
// ═══════════════════════════════════════════════════════════════
const VIDEO_CSS = `
// ── Section Container ──
.video-section {
  position: relative;
  overflow: hidden;
}

// ── Section Header ──
.video-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
}

.video-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.video-eyebrow-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD});
}

.video-eyebrow-line-r {
  width: 40px;
  height: 1px;
  background: linear-gradient(to left, transparent, ${P.GOLD});
}

.video-eyebrow-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${P.GOLD};
}

.video-title {
  font-family: 'Cinzel', serif;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.1;
  letter-spacing: -0.5px;
  color: ${P.CHARCOAL};
  margin-bottom: 16px;
}

.video-title-accent {
  display: block;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.FOREST});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.video-subtitle {
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 1.8;
  color: ${P.BROWN};
}

// ── Video Grid ──
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

// ── Top Row: 3 Videos ──
.video-row-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}

// ── Bottom Row: 2 Videos ──
.video-row-bottom {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 66.66%;
  margin: 0 auto;
}

// ── Individual Video Card ──
.video-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.video-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 24px 60px rgba(44, 36, 22, 0.15);
}

/* Staggered animations */
.video-card:nth-child(1) { transition-delay: 0s; }
.video-card:nth-child(2) { transition-delay: 0.1s; }
.video-card:nth-child(3) { transition-delay: 0.2s; }
.video-card:nth-child(4) { transition-delay: 0.3s; }
.video-card:nth-child(5) { transition-delay: 0.4s; }

// ── Video Thumbnail ──
.video-thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: ${P.CHARCOAL};
}

.video-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease, opacity 0.4s ease;
}

.video-card:hover .video-thumbnail img {
  transform: scale(1.08);
  opacity: 0.85;
}

// ── Play Button Overlay ──
.video-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(44, 36, 22, 0.3);
  transition: all 0.4s ease;
}

.video-card:hover .video-play-overlay {
  background: rgba(44, 36, 22, 0.15);
}

// ── Play Button ──
.video-play-btn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(196, 148, 42, 0.4);
  transition: all 0.4s ease;
}

.video-card:hover .video-play-btn {
  transform: scale(1.1);
  box-shadow: 0 12px 40px rgba(196, 148, 42, 0.5);
}

.video-play-btn svg {
  width: 24px;
  height: 24px;
  fill: #fff;
  margin-left: 4px; /* Optical centering for play icon */
}

/* Duration badge */
.video-duration {
  position: absolute;
  bottom: 12px;
  right: 12px;
  padding: 4px 8px;
  background: rgba(44, 36, 22, 0.85);
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.5px;
}

// ── Video Info ──
.video-info {
  padding: 16px 0 0 0;
}

.video-title-text {
  font-family: 'Cinzel', serif;
  font-size: 15px;
  font-weight: 500;
  color: ${P.CHARCOAL};
  margin-bottom: 4px;
  line-height: 1.3;
}

.video-channel {
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  color: ${P.STONE_GRAY};
  letter-spacing: 0.5px;
}

// ── Subscribe Section ──
.video-subscribe {
  text-align: center;
  margin-top: 56px;
  padding-top: 48px;
  border-top: 1px solid ${P.DUNE};
}

.video-subscribe-content {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
  background: ${P.IVORY};
  border-radius: 100px;
  border: 1px solid rgba(196, 148, 42, 0.15);
}

.video-subscribe-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.video-subscribe-icon svg {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.video-subscribe-text {
  text-align: left;
}

.video-subscribe-title {
  font-family: 'Cinzel', serif;
  font-size: 14px;
  font-weight: 600;
  color: ${P.CHARCOAL};
  margin-bottom: 2px;
}

.video-subscribe-sub {
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  color: ${P.STONE_GRAY};
}

.video-subscribe-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  box-shadow: 0 4px 16px rgba(196, 148, 42, 0.3);
  transition: all 0.4s ease;
  flex-shrink: 0;
}

.video-subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(196, 148, 42, 0.45);
}

.video-subscribe-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

// ── Responsive ──
@media (max-width: 1024px) {
  .video-row-top {
    grid-template-columns: repeat(2, 1fr);
  }

  .video-row-top .video-card:last-child {
    grid-column: span 2;
    max-width: 50%;
    margin: 0 auto;
  }

  .video-row-bottom {
    max-width: 50%;
  }
}

@media (max-width: 767px) {
  .video-row-top,
  .video-row-bottom {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .video-row-top .video-card:last-child,
  .video-row-bottom .video-card {
    grid-column: span 1;
    max-width: 100%;
  }

  .video-grid {
    gap: 20px;
  }

  .video-subscribe-content {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }

  .video-subscribe-text {
    text-align: center;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD VIDEO SECTION
// ═══════════════════════════════════════════════════════════════
function buildVideoSection() {
  // Build video cards
  const videoCards = VIDEOS.map((video, index) =>
    text(`<div class="video-card">
      <div class="video-thumbnail">
        <img src="${video.thumb}" alt="${video.title}">
        <div class="video-play-overlay">
          <div class="video-play-btn">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="video-info">
        <div class="video-title-text">${video.title}</div>
        <div class="video-channel">Abhay Oyun</div>
      </div>
    </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
      ...anim('fadeInUp', 'slow', index * 100),
    })
  );

  // Split into top row (3) and bottom row (2)
  const topRowVideos = videoCards.slice(0, 3);
  const bottomRowVideos = videoCards.slice(3, 5);

  return sec({
    layout: 'full_width',
    background_background: 'classic',
    background_color: P.PARCHMENT,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
    z_index: 10,
    custom_css: VIDEO_CSS,
    css_classes: 'video-section',
  }, [
    // ── Section Header ──
    col(100, { content_position: 'center' }, [
      text(`<div class="video-header">
        <div class="video-eyebrow">
          <div class="video-eyebrow-line"></div>
          <span class="video-eyebrow-text">Sacred Teachings</span>
          <div class="video-eyebrow-line-r"></div>
        </div>
        <h2 class="video-title">
          Watch &<br>
          <span class="video-title-accent">Learn</span>
        </h2>
        <p class="video-subtitle">
          Dive deeper into the ancient wisdom of Siberian shamanism. These sacred teachings are offered freely to all who seek.
        </p>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        ...anim('fadeInUp'),
      }),
    ]),

    // ── Video Grid ──
    col(100, { content_position: 'top' }, [
      // Top row: 3 videos
      text(`<div class="video-row-top">${topRowVideos.map(() => '').join('')}</div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 200),
      }),

      // Bottom row: 2 videos
      text(`<div class="video-row-bottom">${bottomRowVideos.map(() => '').join('')}</div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 500),
      }),
    ]),

    // ── Subscribe Section ──
    col(100, { content_position: 'center' }, [
      text(`<div class="video-subscribe">
        <div class="video-subscribe-content">
          <div class="video-subscribe-icon">
            <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 2.78 2.78 0 0 0-1.94-2C21.12 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A2.78 2.78 0 0 0 23 9.86z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"></polygon></svg>
          </div>
          <div class="video-subscribe-text">
            <div class="video-subscribe-title">Subscribe to the Channel</div>
            <div class="video-subscribe-sub">More sacred teachings every week</div>
          </div>
          <a href="https://www.youtube.com/@AbhayOyun" target="_blank" class="video-subscribe-btn">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            Subscribe Now
          </a>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 700),
      }),
    ]),
  ]);
}

module.exports = { buildVideoSection };
