// ── Shared Helpers & Constants for Elementor Template Generator ──
let _id = 0x2a00000;
const uid = () => (_id++).toString(16);

const px = (s) => ({ unit: 'px', size: s, sizes: [] });
const em = (s) => ({ unit: 'em', size: s, sizes: [] });
const pad = (t, r, b, l) => ({ unit: 'px', top: String(t), right: String(r), bottom: String(b), left: String(l), isLinked: false });

function typo(prefix, o) {
  const r = {}; r[`${prefix}_typography`] = 'custom';
  if (o.f) r[`${prefix}_font_family`] = o.f;
  if (o.s) r[`${prefix}_font_size`] = px(o.s);
  if (o.sm) r[`${prefix}_font_size_mobile`] = px(o.sm);
  if (o.st) r[`${prefix}_font_size_tablet`] = px(o.st);
  if (o.w) r[`${prefix}_font_weight`] = String(o.w);
  if (o.i) r[`${prefix}_font_style`] = 'italic';
  if (o.t) r[`${prefix}_text_transform`] = o.t;
  if (o.ls) r[`${prefix}_letter_spacing`] = px(o.ls);
  if (o.lh) r[`${prefix}_line_height`] = em(o.lh);
  return r;
}

const sec = (settings, cols, inner = false) => ({ id: uid(), elType: 'section', settings, elements: cols, isInner: inner });
const col = (size, settings, widgets) => ({ id: uid(), elType: 'column', settings: { _column_size: size, _inline_size: size, ...settings }, elements: widgets });
const w = (type, settings) => ({ id: uid(), elType: 'widget', widgetType: type, settings });

const heading = (title, tag, color, typoOpts, extra = {}) => w('heading', { title, header_size: tag, title_color: color, ...typo('typography', typoOpts), ...extra });
const text = (html, color, typoOpts, extra = {}) => w('text-editor', { editor: html, text_color: color, ...typo('typography', typoOpts), ...extra });
const btn = (label, url, bg, txtColor, typoOpts, extra = {}) => w('button', { text: label, link: { url, is_external: 'on', nofollow: '' }, background_color: bg, button_text_color: txtColor, ...typo('typography', typoOpts), border_border: 'none', border_radius: px(4), ...extra });
const spacer = (h) => w('spacer', { space: px(h) });
const dividerW = (color, weight = 1) => w('divider', { style: 'solid', color, weight: px(weight), gap: px(0) });
const img = (url, alt = '') => w('image', { image: { url, id: '' }, image_size: 'full', caption: alt });

// Entrance animation helper
const anim = (type = 'fadeInUp', duration = 'slow', delay = 0) => ({
  _animation: type,
  animation_duration: duration,
  ...(delay ? { _animation_delay: delay } : {}),
});

// ── Color Constants ──
const GOLD = '#d4a853';
const GOLD_LIGHT = '#f9d58b';
const NAVY = '#0B132B';
const DARK = '#0d1117';
const SAND = '#F9F6F0';
const BEIGE = '#f5f0e8';
const SITE = 'https://abhayoyun.org/wp-content/uploads';

// Eyebrow label helper
const eyebrow = (label, goldColor = GOLD) =>
  text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:36px;height:1px;background:linear-gradient(to right,${goldColor},transparent);"></div><span style="font-family:'Inter',sans-serif;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:${goldColor};">${label}</span></div>`, '', typo('typography', { f: 'Inter', s: 12 }));

module.exports = { uid, px, em, pad, typo, sec, col, w, heading, text, btn, spacer, dividerW, img, anim, eyebrow, GOLD, GOLD_LIGHT, NAVY, DARK, SAND, BEIGE, SITE };
