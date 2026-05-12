// Abhay Oyun - Proper Elementor Hero Template
// Uses actual Elementor widgets, not raw HTML

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim } = require('./helpers');

function buildHeroClean() {
  return {
    title: 'Abhay Oyun - Hero',
    type: 'page',
    version: '1.0',
    page_settings: {
      hide_title: 'yes',
    },
    content: [
      // HERO SECTION
      sec({
        layout: 'full_width',
        height: 'min-height',
        custom_height: { unit: 'vh', size: 100 },
        content_position: 'center',
        background_background: 'classic',
        background_color: '#1A1A14',
        css_classes: 'hero-section',
      }, [
        // Background Image Column
        col(100, { content_position: 'top', padding: pad(0, 0, 0, 0) }, [
          // Image widget for background
          w('image', {
            image: { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80' },
            image_size: 'full',
            image_position: 'center center',
            image_size_mobile: 'full',
          }),
        ]),

        // Content Column
        col(100, { content_position: 'center', padding: pad(120, 80, 120, 80) }, [
          // Eyebrow Text
          text('<span style="font-family: \'Cinzel\', serif; font-size: 11px; font-weight: 600; letter-spacing: 5px; text-transform: uppercase; color: #D4A853;">Siberian Shaman • Guardian of Our Planet</span>', '', typo('typography', { f: 'Cinzel', s: 11, t: 'uppercase', ls: 5 })),

          // Spacer
          spacer(24),

          // Main Heading
          heading('Heal Your Wild', 'h1', '#FAF8F3', { f: 'Cinzel', s: 56, w: 600, sm: 32 }),
          heading('Reclaim Your Power', 'h1', '#D4A853', { f: 'Cinzel', s: 56, w: 600, sm: 32 }),

          // Spacer
          spacer(24),

          // Subtitle
          text('<span style="color: rgba(250,248,243,0.8); font-size: 18px; line-height: 1.8; max-width: 500px; display: block;">Ancient Siberian shamanic practices for modern seekers. Transform trauma into power. Reconnect with nature\'s wisdom. Find your way home.</span>', '', typo('typography', { f: 'Lato', s: 18 })),

          // Spacer
          spacer(40),

          // CTA Button
          btn('Start Your Journey', 'https://forms.gle/jEDaUrKwbyHd8WvUA', '#C4942A', '#1A1A14', { f: 'Cinzel', s: 12, t: 'uppercase', w: 600 }),

          // Spacer
          spacer(64),

          // Stats Row
          col(33, { content_position: 'center' }, [
            heading('35+', 'h3', '#D4A853', { f: 'Cinzel', s: 48, w: 600 }),
            text('<span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(250,248,243,0.5);">Years of Practice</span>', '', typo('typography', { f: 'Lato', s: 12, t: 'uppercase', ls: 1 })),
          ]),
          col(33, { content_position: 'center' }, [
            heading('40', 'h3', '#D4A853', { f: 'Cinzel', s: 48, w: 600 }),
            text('<span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(250,248,243,0.5);">Countries Served</span>', '', typo('typography', { f: 'Lato', s: 12, t: 'uppercase', ls: 1 })),
          ]),
          col(33, { content_position: 'center' }, [
            heading('10K+', 'h3', '#D4A853', { f: 'Cinzel', s: 48, w: 600 }),
            text('<span style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(250,248,243,0.5);">Lives Transformed</span>', '', typo('typography', { f: 'Lato', s: 12, t: 'uppercase', ls: 1 })),
          ]),
        ]),
      ]),
    ],
  };
}

module.exports = { buildHeroClean };
