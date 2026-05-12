// ── Immersive Theme Helpers & Constants ──
// Build with intention. Sacred code for sacred work.

let _id = 0x7a00000;
const uid = () => (_id++).toString(16);

// Padding helper
const pad = (t, r, b, l) => ({
  unit: 'px',
  top: String(t), right: String(r), bottom: String(b), left: String(l),
  isLinked: false
});

// Typography helper
const typo = (prefix, o) => {
  const r = { [`${prefix}_typography`]: 'custom' };
  if (o.f) r[`${prefix}_font_family`] = o.f;
  if (o.s) r[`${prefix}_font_size`] = o.s;
  if (o.sm) r[`${prefix}_font_size_mobile`] = o.sm;
  if (o.st) r[`${prefix}_font_size_tablet`] = o.st;
  if (o.w) r[`${prefix}_font_weight`] = String(o.w);
  if (o.i) r[`${prefix}_font_style`] = 'italic';
  if (o.t) r[`${prefix}_text_transform`] = o.t;
  if (o.ls) r[`${prefix}_letter_spacing`] = o.ls;
  if (o.lh) r[`${prefix}_line_height`] = o.lh;
  return r;
};

// Section builder
const sec = (settings, cols, inner = false) => ({
  id: uid(), elType: 'section', settings, elements: cols, isInner: inner
});

// Column builder
const col = (size, settings, widgets = []) => ({
  id: uid(), elType: 'column',
  settings: { _column_size: size, _inline_size: size, ...settings },
  elements: widgets
});

// Widget builder
const w = (type, settings) => ({
  id: uid(), elType: 'widget', widgetType: type, settings
});

// Heading widget
const heading = (title, tag, color, typoOpts, extra = {}) =>
  w('heading', { title, header_size: tag, title_color: color, ...typo('typography', typoOpts), ...extra });

// Text/HTML widget
const text = (html, color, typoOpts, extra = {}) =>
  w('text-editor', { editor: html, text_color: color, ...typo('typography', typoOpts), ...extra });

// Button widget
const btn = (label, url, bg, txtColor, typoOpts, extra = {}) =>
  w('button', {
    text: label,
    link: { url, is_external: 'on', nofollow: '' },
    background_color: bg,
    button_text_color: txtColor,
    ...typo('typography', typoOpts),
    border_border: 'none',
    border_radius: { unit: 'px', size: 50, sizes: [] },
    ...extra
  });

// Spacer widget
const spacer = (h) => w('spacer', { space: { unit: 'px', size: h, sizes: [] } });

// Image widget
const img = (url, alt = '') => w('image', {
  image: { url, id: '' },
  image_size: 'full',
  caption: alt
});

// Animation helper
const anim = (type = 'fadeInUp', duration = 'slow', delay = 0) => ({
  _animation: type,
  animation_duration: duration,
  ...(delay ? { _animation_delay: delay } : {}),
});

// ═══════════════════════════════════════════════════════════════
// IMMERSIVE MYSTICAL COLOR PALETTE
// Light, warm, sacred, healing
// ═══════════════════════════════════════════════════════════════

const PALETTE = {
  // Backgrounds - warm ivory/parchment
  IVORY:         '#FFFDF8',
  PARCHMENT:     '#F8F3E8',
  DUNE:          '#EDE4D3',
  STONE:         '#E5DDD0',
  MOONLIGHT:     '#F0EAE0',

  // Text - warm charcoal
  CHARCOAL:      '#2C2416',
  BROWN:         '#5C4A32',
  STONE_GRAY:    '#8B7B65',
  DUST:          '#B5A892',

  // Sacred Gold
  GOLD:          '#C4942A',
  GOLD_LIGHT:    '#E8BC5A',
  GOLD_PALE:     '#F5DFA0',
  GOLD_EMBER:    '#D4A574',

  // Nature - grounding
  FOREST:        '#3A5430',
  MOSS:          '#6B8F5C',
  SAGE:          '#9BAF8C',
  TERRA:         '#B86B4A',
  CLAY:          '#C49A7A',
  ROSE:          '#C9A8A0',

  // Mystical
  RITUAL:        '#7A6B9A',
  SMOKE:         '#9A8E80',

  // Site URL
  SITE: 'https://abhayoyun.org/wp-content/uploads'
};

// Export all
module.exports = {
  uid, pad, typo, sec, col, w, heading, text, btn, spacer, img, anim,
  PALETTE
};
