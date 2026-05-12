// ── Shared Helpers & Constants for Elementor Template Generator ──
// IMMERSIVE MYSTICAL THEME - Mystical, Sacred, Healing, Ancient yet Modern
let _id = 0x3a00000;
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
const btn = (label, url, bg, txtColor, typoOpts, extra = {}) => w('button', { text: label, link: { url, is_external: 'on', nofollow: '' }, background_color: bg, button_text_color: txtColor, ...typo('typography', typoOpts), border_border: 'none', border_radius: px(50), ...extra });
const spacer = (h) => w('spacer', { space: px(h) });
const dividerW = (color, weight = 1) => w('divider', { style: 'solid', color, weight: px(weight), gap: px(0) });
const img = (url, alt = '') => w('image', { image: { url, id: '' }, image_size: 'full', caption: alt });

const anim = (type = 'fadeInUp', duration = 'slow', delay = 0) => ({
  _animation: type,
  animation_duration: duration,
  ...(delay ? { _animation_delay: delay } : {}),
});

// ═══════════════════════════════════════════════════════════════
// IMMERSIVE MYSTICAL PALETTE — Sacred, Living, Breathing
// ═══════════════════════════════════════════════════════════════

// Backgrounds — Warm, earthy, alive
const IVORY         = '#FFFDF8';  // Primary background
const PARCHMENT     = '#F8F3E8';  // Secondary background
const DUNE_SAND     = '#EDE4D3';  // Tertiary/section
const WARM_STONE    = '#E5DDD0';  // Card backgrounds
const MOONLIGHT     = '#F0EAE0';  // Light sections

// Text — Warm, readable
const CHARCOAL_WARM = '#2C2416';  // Primary text
const EARTH_BROWN    = '#5C4A32';  // Secondary text
const STONE_GRAY     = '#8B7B65';  // Muted text
const DUST          = '#B5A892';  // Labels/placeholders

// Sacred Accents — Divine light and earth
const DIVINE_GOLD    = '#C4942A';  // Primary gold - sacred
const LIGHT_GOLD     = '#E8BC5A';  // Lighter gold
const PALE_GOLD      = '#F5DFA0';  // Soft gold
const EMBER_GLOW     = '#D4A574';  // Warm ember accent
const SUNSET_GOLD    = '#E8A55A';  // Golden orange

// Nature Accents — Grounding and alive
const FOREST_DEEP    = '#3A5430';  // Deep forest
const MOSS_LIFE      = '#6B8F5C';  // Living moss
const SAGE_CALM      = '#9BAF8C';  // Calming sage
const EARTH_TERRA    = '#B86B4A';  // Terracotta - earth
const CLAY_WARM     = '#C49A7A';  // Warm clay
const MIST_ROSE     = '#C9A8A0';  // Soft rose/feminine

// Mystical elements
const RITUAL_PURPLE  = '#7A6B9A';  // Subtle mystical purple
const SMOKE_GRAY     = '#9A8E80';  // Smoke/mist
const LIGHT_RAY      = 'rgba(245, 223, 160, 0.3)';  // Light ray overlay
const DIVINE_SHADOW  = 'rgba(44, 36, 22, 0.08)';    // Soft shadow

// Site URL
const SITE = 'https://abhayoyun.org/wp-content/uploads';

// ═══════════════════════════════════════════════════════════════
// DECORATIVE COMPONENTS
// ═══════════════════════════════════════════════════════════════

// Eyebrow with sacred line
const eyebrow = (label, color = DIVINE_GOLD) =>
  text(`<div style="display:flex;align-items:center;gap:16px;">
    <div style="width:40px;height:1px;background:linear-gradient(to right,transparent,${color});"></div>
    <span style="font-family:'Cinzel',serif;font-size:11px;font-weight:600;letter-spacing:5px;text-transform:uppercase;color:${color};">${label}</span>
  </div>`, '', typo('typography', { f: 'Cinzel', s: 11 }));

// Decorative sacred circle
const sacredCircle = (size = 200, color = DIVINE_GOLD, opacity = 0.15) =>
  `<div style="position:absolute;width:${size}px;height:${size}px;border-radius:50%;border:1px solid ${color};opacity:${opacity};"></div>`;

// Light ray decoration
const lightRay = (angle = 0, width = 1, height = 300) =>
  `<div style="position:absolute;width:${width}px;height:${height}px;background:linear-gradient(to bottom,${PALE_GOLD},transparent);transform:rotate(${angle}deg);opacity:0.25;pointer-events:none;"></div>`;

// Floating particle
const particle = (size = 4, color = DIVINE_GOLD, top = '20%', left = '15%', duration = 6) =>
  `<div style="position:absolute;top:${top};left:${left};width:${size}px;height:${size}px;border-radius:50%;background:${color};opacity:0.4;animation:float-particle ${duration}s ease-in-out infinite;"></div>`;

// ═══════════════════════════════════════════════════════════════
// SECTION 1: HEADER — Sacred Navigation
// ═══════════════════════════════════════════════════════════════
function headerSection() {
  const allCSS = `
/* Header base */
selector .ao-header {
  display:flex; align-items:center; justify-content:space-between;
  min-height:88px; width:100%;
  background:rgba(255,253,248,0.95);
  backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px);
  border-bottom:1px solid rgba(196,148,42,0.12);
}
/* Logo */
selector .ao-header-logo { display:flex; align-items:center; gap:14px; flex-shrink:0; text-decoration:none; }
selector .ao-header-logo-icon {
  width:40px; height:40px;
  background-image:url(${SITE}/icon1.png);
  background-size:contain; background-repeat:no-repeat;
  background-position:center; flex-shrink:0;
  filter: brightness(0) saturate(100%) sepia(50%) saturate(450%) hue-rotate(5deg) brightness(0.85);
}
selector .ao-header-logo-text {
  font-family:'Cinzel',serif; font-size:20px; font-weight:600;
  letter-spacing:0.12em; color:${CHARCOAL_WARM}; line-height:1;
}
selector .ao-header-logo-sub {
  font-family:'Lato',sans-serif; font-size:7px; font-weight:400;
  letter-spacing:0.3em; text-transform:uppercase; color:${STONE_GRAY}; margin-top:4px;
}
/* Navigation */
selector .ao-header-nav { display:flex; align-items:center; gap:40px; }
selector .ao-header-nav a {
  font-family:'Lato',sans-serif; font-size:12px; font-weight:400;
  letter-spacing:2px; text-transform:uppercase; color:${EARTH_BROWN};
  text-decoration:none; position:relative;
  transition:color 0.3s ease;
}
selector .ao-header-nav a::after {
  content:''; position:absolute; bottom:-4px; left:0; width:0; height:1px;
  background:linear-gradient(90deg,${DIVINE_GOLD},${LIGHT_GOLD});
  transition:width 0.3s ease;
}
selector .ao-header-nav a:hover { color:${DIVINE_GOLD}; }
selector .ao-header-nav a:hover::after { width:100%; }
/* Social icons */
selector .ao-header-social { display:flex; align-items:center; gap:8px; }
selector .ao-header-social a {
  display:inline-flex; align-items:center; justify-content:center;
  width:34px; height:34px; border-radius:50%;
  background:${PARCHMENT};
  color:${STONE_GRAY};
  font-family:'Lato',sans-serif; font-size:10px; font-weight:700;
  text-decoration:none;
  transition: all 0.3s ease;
}
selector .ao-header-social a:hover {
  background:${DIVINE_GOLD}; color:#fff;
  transform:translateY(-2px);
}
/* CTA Button - Sacred glow */
selector .ao-header-cta {
  display:inline-flex; align-items:center;
  padding:12px 28px;
  background:linear-gradient(135deg,${DIVINE_GOLD},${LIGHT_GOLD});
  color:#fff;
  font-family:'Cinzel',serif; font-size:10px; font-weight:600;
  letter-spacing:2px; text-transform:uppercase;
  border-radius:50px;
  text-decoration:none;
  box-shadow:0 4px 20px rgba(196,148,42,0.3);
  transition: all 0.4s ease;
}
selector .ao-header-cta:hover {
  box-shadow:0 8px 32px rgba(196,148,42,0.5);
  transform:translateY(-2px);
}
/* Scroll behavior */
.sticky-header { position:sticky !important; top:0; z-index:999; }
/* Mobile */
@media (max-width:767px) {
  selector .ao-header { min-height:68px; }
  selector .ao-header-nav { display:none !important; }
  selector .ao-header-social { display:none !important; }
  selector .ao-header-logo-text { font-size:18px; }
}
@media (min-width:768px) and (max-width:1024px) {
  selector .ao-header-nav { gap:20px; }
  selector .ao-header-social { display:none !important; }
}
`;

  const headerHtml = `<div class="ao-header">
  <a href="/" class="ao-header-logo">
    <div class="ao-header-logo-icon"></div>
    <div>
      <div class="ao-header-logo-text">ABHAY <span style="color:${DIVINE_GOLD};">OYUN</span></div>
      <div class="ao-header-logo-sub">Siberian Shamanism</div>
    </div>
  </a>
  <nav class="ao-header-nav">
    <a href="#teachings">Teachings</a>
    <a href="#events">Events</a>
    <a href="#about">About</a>
    <a href="#transform">Journey</a>
  </nav>
  <div class="ao-header-right">
    <div class="ao-header-social">
      <a href="https://www.instagram.com/abhayoyun/" target="_blank">IG</a>
      <a href="https://www.youtube.com/@earthforpeace" target="_blank">YT</a>
      <a href="https://wa.me/12122561366" target="_blank">WA</a>
    </div>
    <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="ao-header-cta">Begin Journey</a>
  </div>
</div>`;

  return sec({
    stretch_section: 'section-stretched', layout: 'full_width',
    background_background: 'classic', background_color: 'transparent',
    padding: pad(0, 48, 0, 48),
    padding_mobile: pad(0, 16, 0, 16),
    z_index: 100,
    css_classes: 'sticky-header',
    custom_css: allCSS,
  }, [
    col(100, { content_position: 'center' }, [
      text(headerHtml, '', typo('typography', { f: 'Lato', s: 14 })),
    ]),
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 2: HERO — Immersive Sacred Entrance
// ═══════════════════════════════════════════════════════════════
function heroSection() {
  const heroCSS = `
/* Hero full immersive experience */
@keyframes float-particle { 0%,100% { transform:translateY(0) rotate(0deg); opacity:0.3; } 50% { transform:translateY(-30px) rotate(180deg); opacity:0.7; } }
@keyframes float-orb { 0%,100% { transform:translateY(0) scale(1); } 50% { transform:translateY(-20px) scale(1.05); } }
@keyframes pulse-glow { 0%,100% { opacity:0.15; transform:scale(1); } 50% { opacity:0.3; transform:scale(1.1); } }
@keyframes ray-rotate { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
@keyframes breathe { 0%,100% { opacity:0.2; } 50% { opacity:0.4; } }
@keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
/* Ambient floating particles */
.mystical-particle { position:absolute; border-radius:50%; pointer-events:none; }
.mystical-orb {
  position:absolute; border-radius:50%; pointer-events:none;
  animation:float-orb ease-in-out infinite;
}
.mystical-ray-wrap {
  position:absolute; top:50%; left:50%;
  transform:translate(-50%,-50%);
  animation:ray-rotate 120s linear infinite;
}
.mystical-ray {
  position:absolute; top:50%; left:50%;
  transform-origin:bottom center;
}
/* Content glow effect */
.hero-glow {
  text-shadow:0 0 60px rgba(196,148,42,0.15);
}
/* CTA pulse */
.hero-cta:hover { animation:pulse-glow 1.5s ease-in-out infinite; }
`;

  return sec({
    stretch_section: 'section-stretched', layout: 'full_width',
    height: 'min-height', custom_height: { unit: 'vh', size: 100 },
    custom_height_mobile: { unit: 'vh', size: 92 },
    content_position: 'middle',
    background_background: 'classic',
    background_color: IVORY,
    padding: pad(0, 0, 0, 0),
    padding_mobile: pad(0, 0, 0, 0),
    overflow: 'hidden',
    custom_css: heroCSS,
  }, [
    col(100, { padding: pad(0, 0, 0, 0) }, [
      // Background image with mystical overlay
      img(`${SITE}/hero-bg.jpg`, 'Sacred Background'),

      // Mystical overlay gradient
      text(`<div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,rgba(255,253,248,0.92) 0%,rgba(248,243,232,0.85) 50%,rgba(237,228,211,0.75) 100%);"></div>`, '', typo('typography', { f: 'Lato', s: 12 })),

      // Floating mystical orbs
      text(`<div style="position:absolute;top:15%;left:8%;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,${PALE_GOLD} 0%,transparent 70%);opacity:0.3;animation:float-orb 10s ease-in-out infinite;"></div>
            <div style="position:absolute;bottom:25%;right:10%;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,${RITUAL_PURPLE}22 0%,transparent 70%);opacity:0.2;animation:float-orb 14s ease-in-out infinite reverse;"></div>
            <div style="position:absolute;top:60%;left:60%;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,${MOSS_LIFE}33 0%,transparent 70%);opacity:0.2;animation:float-orb 12s ease-in-out infinite;"></div>`, '', typo('typography', { f: 'Lato', s: 12 })),

      // Mystical particles (floating dots)
      text(`<div class="mystical-particle" style="top:20%;left:12%;width:6px;height:6px;background:${DIVINE_GOLD};animation:float-particle 8s ease-in-out infinite;"></div>
            <div class="mystical-particle" style="top:35%;left:20%;width:4px;height:4px;background:${LIGHT_GOLD};animation:float-particle 6s ease-in-out 1s infinite;"></div>
            <div class="mystical-particle" style="top:15%;left:40%;width:5px;height:5px;background:${PALE_GOLD};animation:float-particle 10s ease-in-out 2s infinite;"></div>
            <div class="mystical-particle" style="top:45%;left:55%;width:3px;height:3px;background:${MOSS_LIFE};animation:float-particle 7s ease-in-out 0.5s infinite;"></div>
            <div class="mystical-particle" style="top:70%;left:30%;width:4px;height:4px;background:${EMBER_GLOW};animation:float-particle 9s ease-in-out 3s infinite;"></div>
            <div class="mystical-particle" style="top:25%;left:75%;width:5px;height:5px;background:${DIVINE_GOLD};animation:float-particle 11s ease-in-out 1.5s infinite;"></div>
            <div class="mystical-particle" style="top:55%;left:85%;width:3px;height:3px;background:${LIGHT_GOLD};animation:float-particle 8s ease-in-out 4s infinite;"></div>
            <div class="mystical-particle" style="top:80%;left:50%;width:4px;height:4px;background:${PALE_GOLD};animation:float-particle 10s ease-in-out 2.5s infinite;"></div>`, '', typo('typography', { f: 'Lato', s: 12 })),

      // Sacred content
      text(`<div style="position:relative;z-index:10;padding:0 8%;width:100%;">
        <div style="max-width:800px;margin:0 auto;text-align:center;">
          <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:24px;">
            <div style="width:60px;height:1px;background:linear-gradient(to right,transparent,${DIVINE_GOLD});"></div>
            <span style="font-family:'Cinzel',serif;font-size:12px;font-weight:600;letter-spacing:8px;text-transform:uppercase;color:${DIVINE_GOLD};">Siberian Shaman Abhay Oyun</span>
            <div style="width:60px;height:1px;background:linear-gradient(to left,transparent,${DIVINE_GOLD});"></div>
          </div>

          <h1 style="font-family:'Cinzel',serif;font-size:clamp(40px,5.5vw,88px);font-weight:400;line-height:1.1;letter-spacing:-1px;color:${CHARCOAL_WARM};margin:0 0 24px;text-shadow:0 4px 40px rgba(196,148,42,0.1);">
            Welcome to a<br>
            <span style="background:linear-gradient(135deg,${DIVINE_GOLD},${SUNSET_GOLD},${LIGHT_GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Sacred Space</span>
          </h1>

          <p style="font-family:'Lato',sans-serif;font-size:clamp(14px,1.3vw,18px);line-height:1.9;color:${EARTH_BROWN};max-width:580px;margin:0 auto 32px;letter-spacing:0.5px;">
            Here, you are welcomed, held, and seen. Ancient Siberian wisdom meets modern seekers — restore your energy, dissolve what weighs you down, and awaken the life force within.
          </p>

          <div style="display:flex;align-items:center;justify-content:center;gap:40px;margin-bottom:40px;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:8px;height:8px;border-radius:50%;background:${DIVINE_GOLD};"></div>
              <span style="font-family:'Lato',sans-serif;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${STONE_GRAY};">35+ Years</span>
            </div>
            <div style="width:1px;height:24px;background:${DUST};opacity:0.5;"></div>
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:8px;height:8px;border-radius:50%;background:${FOREST_DEEP};"></div>
              <span style="font-family:'Lato',sans-serif;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${STONE_GRAY};">40 Countries</span>
            </div>
            <div style="width:1px;height:24px;background:${DUST};opacity:0.5;"></div>
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:8px;height:8px;border-radius:50%;background:${EARTH_TERRA};"></div>
              <span style="font-family:'Lato',sans-serif;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${STONE_GRAY};">10,000+ Transformed</span>
            </div>
          </div>

          <div style="display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap;">
            <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" style="display:inline-flex;align-items:center;gap:12px;padding:18px 44px;background:linear-gradient(135deg,${DIVINE_GOLD},${LIGHT_GOLD});color:#fff;font-family:'Cinzel',serif;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;border-radius:50px;text-decoration:none;box-shadow:0 8px 32px rgba(196,148,42,0.35);transition:all 0.4s ease;">
              Begin Your Free Session →
            </a>
            <a href="https://forms.gle/jEDaUrKwbyHd8WvUA" target="_blank" style="display:inline-flex;align-items:center;gap:12px;padding:18px 40px;background:rgba(255,253,248,0.8);color:${CHARCOAL_WARM};font-family:'Cinzel',serif;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;border-radius:50px;text-decoration:none;border:1px solid rgba(196,148,42,0.3);backdrop-filter:blur(8px);transition:all 0.4s ease;">
              Join Free Webinar
            </a>
          </div>
        </div>

        <div style="position:absolute;bottom:40px;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0.6;">
          <span style="font-family:'Lato',sans-serif;font-size:9px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:${STONE_GRAY};">Scroll to Discover</span>
          <div style="width:1px;height:50px;background:linear-gradient(to bottom,${DIVINE_GOLD},transparent);"></div>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 16 }), {
        align: 'center',
        custom_css: 'selector { position:absolute; top:0; left:0; right:0; bottom:0; display:flex; align-items:center; justify-content:center; }'
      }),
    ]),
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 3: SHAMAN INTRO — Sacred Bio
// ═══════════════════════════════════════════════════════════════
function shamanIntroSection() {
  const statsCSS = `
@keyframes count-up { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
`;

  const statsHtml = `<div style="display:grid;grid-template-columns:repeat(3,1fr);border-top:2px solid rgba(196,148,42,0.2);margin-top:48px;padding-top:40px;">
    <div style="text-align:center;padding:0 20px;">
      <div style="font-family:'Cinzel',serif;font-size:4rem;font-weight:600;line-height:1;margin-bottom:8px;background:linear-gradient(135deg,${DIVINE_GOLD},${LIGHT_GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">35+</div>
      <div style="font-family:'Lato',sans-serif;font-size:10px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:${STONE_GRAY};">Years of Practice</div>
    </div>
    <div style="text-align:center;padding:0 20px;border-left:1px solid rgba(196,148,42,0.15);border-right:1px solid rgba(196,148,42,0.15);">
      <div style="font-family:'Cinzel',serif;font-size:4rem;font-weight:600;line-height:1;margin-bottom:8px;background:linear-gradient(135deg,${FOREST_DEEP},${MOSS_LIFE});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">40</div>
      <div style="font-family:'Lato',sans-serif;font-size:10px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:${STONE_GRAY};">Countries</div>
    </div>
    <div style="text-align:center;padding:0 20px;">
      <div style="font-family:'Cinzel',serif;font-size:4rem;font-weight:600;line-height:1;margin-bottom:8px;background:linear-gradient(135deg,${EARTH_TERRA},${EMBER_GLOW});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">10K+</div>
      <div style="font-family:'Lato',sans-serif;font-size:10px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:${STONE_GRAY};">Lives Transformed</div>
    </div>
  </div>`;

  return sec({
    background_background: 'classic', background_color: IVORY,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
  }, [
    col(45, { content_position: 'center', _column_size_mobile: 100 }, [
      eyebrow('The Shaman'),
      spacer(16),
      heading(`35 Years of<br><em style="background:linear-gradient(135deg,${DIVINE_GOLD},${EARTH_TERRA});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Sacred Service</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 48, sm: 32, st: 40, w: 400, lh: 1.1, ls: -0.5 },
        { ...anim('fadeInLeft') }),
      spacer(20),
      text(`<p style="font-family:'Lato',sans-serif;font-size:16px;line-height:2;color:${EARTH_BROWN};">Shaman Abhay Oyun carries the ancient wisdom of Siberian shamanism — passed through generations, refined across 40 countries, and shared with thousands seeking healing.</p>
      <p style="font-family:'Lato',sans-serif;font-size:16px;line-height:2;color:${EARTH_BROWN};margin-top:16px;">Called the <em>Guardian of Our Planet</em>, he has guided thousands through ceremonial work — restoring vital energy, dissolving trauma, and awakening dormant power in every person who comes to him.</p>`, '',
        typo('typography', { f: 'Lato', s: 16, sm: 14, lh: 2 })),
      text(statsHtml, '', typo('typography', { f: 'Lato', s: 14 })),
      spacer(32),
      sec({ padding: pad(0, 0, 0, 0) }, [
        col(50, { align: 'left', align_mobile: 'center', _column_size_mobile: 100 }, [
          btn('Learn His Story', '#about', 'transparent', CHARCOAL_WARM,
            { f: 'Cinzel', s: 11, w: 600, ls: 2, t: 'uppercase' },
            { text_padding: pad(16, 36, 16, 36), border_border: 'solid', border_width: px(1.5), border_color: `rgba(196,148,42,0.4)`, border_radius: 50 })
        ]),
        col(50, { align: 'left', align_mobile: 'center', _column_size_mobile: 100 }, [
          btn('Begin Your Journey', 'https://calendly.com/hurraymangalam/individualsessions', `linear-gradient(135deg,${FOREST_DEEP},${MOSS_LIFE})`, '#FFFFFF',
            { f: 'Cinzel', s: 11, w: 600, ls: 2, t: 'uppercase' },
            { text_padding: pad(16, 36, 16, 36), border_radius: 50 })
        ])
      ], true)
    ]),
    col(55, { content_position: 'center', _column_size_mobile: 100 }, [
      // Sacred image with decorative frame
      text(`<div style="position:relative;display:inline-block;max-width:100%;">
        <div style="position:absolute;top:-16px;left:-16px;right:-16px;bottom:-16px;border:2px solid ${PALE_GOLD};border-radius:20px;opacity:0.5;"></div>
        <div style="position:absolute;top:-8px;left:-8px;right:-8px;bottom:-8px;border:1px solid ${DIVINE_GOLD};border-radius:16px;opacity:0.3;"></div>
      </div>`, '', typo('typography', { f: 'Lato', s: 12 })),
      img(`${SITE}/AO 2.JPG`, 'Shaman Abhay Oyun in Sacred Ceremony'),
      spacer(20),
      text(`<p style="font-family:'Cinzel',serif;font-size:13px;color:${STONE_GRAY};text-align:center;letter-spacing:3px;">In sacred ceremony, worldwide</p>`, '', typo('typography', { f: 'Cinzel', s: 13 }), { align: 'center' }),
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 4: SOCIAL REELS — Moments Gallery
// ═══════════════════════════════════════════════════════════════
function socialReelSection() {
  const reels = ['sao-gallery-img1.jpg','sao-gallery-img2.jpg','sao-gallery-img3.jpg','sao-gallery-img4.jpg','sao-gallery-img5.jpg'];
  const gallery = reels.map(f => ({ id: '', url: `${SITE}/${f}` }));

  return sec({
    background_background: 'classic', background_color: DUNE_SAND,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    custom_css: `
selector { position:relative; }
selector::before {
  content:''; position:absolute; top:-60px; left:0; right:0; height:120px;
  background:linear-gradient(to bottom, ${IVORY}, transparent);
  pointer-events:none; z-index:1;
}
`
  }, [
    col(100, {}, [
      eyebrow('@EarthForPeace'),
      spacer(16),
      heading(`Moments from<br><em style="color:rgba(44,36,22,0.3)">the Sacred Journey</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 48, sm: 28, st: 38, w: 400, lh: 1.1, ls: -0.5 },
        { ...anim('fadeInUp') }),
      spacer(40),
      w('image-gallery', { gallery, gallery_columns: 5, gallery_columns_mobile: 2, gallery_columns_tablet: 3, gallery_link: 'none' }),
      spacer(20),
      text(`<p style="text-align:center;font-family:'Lato',sans-serif;font-size:12px;color:${STONE_GRAY};letter-spacing:2px;">Follow the journey · @earthforpeace</p>`, '', typo('typography', { f: 'Lato', s: 12 }), { align: 'center' })
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 5: GALLERY — 40 Countries
// ═══════════════════════════════════════════════════════════════
function gallerySection() {
  const images = ['sao-gallery-img1.jpg','sao-gallery-img2.jpg','sao-gallery-img3.jpg','sao-gallery-img4.jpg','sao-gallery-img5.jpg','sao-gallery-img6.jpg','sao-gallery-img7.jpg','sao-gallery-img8.jpg','visited-countries-img.png']
    .map(f => ({ id: '', url: `${SITE}/${f}` }));

  return sec({
    background_background: 'classic', background_color: IVORY,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
  }, [
    col(100, {}, [
      eyebrow('The Global Journey'),
      spacer(16),
      heading(`Healing Without<br><em style="color:rgba(44,36,22,0.3)">Borders</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 48, sm: 28, st: 38, w: 400, lh: 1.1, ls: -0.5 },
        { ...anim('fadeInUp') }),
      spacer(40),
      w('image-gallery', { gallery: images, gallery_columns: 3, gallery_columns_mobile: 2, gallery_link: 'none' })
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 6: TESTIMONIALS — Sacred Transformations
// ═══════════════════════════════════════════════════════════════
function testimonialsSection() {
  const testimonials = [
    { q: 'After one session with Abhay, I felt a weight lift from my chest that I had been carrying for 20 years. It was like my cells remembered how to breathe again.', n: 'Maria K.', l: 'Berlin, Germany', icon: '✦' },
    { q: 'The Sampo System completely rewired how I experience stress. What used to cripple me now passes through me. I have never felt more whole.', n: 'James R.', l: 'London, UK', icon: '✦' },
    { q: 'I traveled to three continents seeking healing. What Abhay achieved in a single session surpassed everything. This is ancient wisdom in its purest form.', n: 'Elena V.', l: 'Moscow, Russia', icon: '✦' },
    { q: 'What I remember most is the feeling — an all-embracing warmth that touched my heart. I finally felt like I belonged somewhere.', n: 'Priya S.', l: 'Mumbai, India', icon: '✦' },
  ];

  const testimonialCards = testimonials.map((t, i) =>
    text(`<div style="background:${IVORY};border-radius:24px;padding:40px 44px;position:relative;overflow:hidden;border:1px solid rgba(196,148,42,0.1);box-shadow:0 12px 40px rgba(44,36,22,0.04);">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,${DIVINE_GOLD},${MOSS_LIFE},${EARTH_TERRA});"></div>
      <div style="position:absolute;top:20px;right:28px;font-family:'Cinzel',serif;font-size:64px;color:${PALE_GOLD};line-height:1;opacity:0.5;">${t.icon}</div>
      <p style="font-family:'Cinzel',serif;font-style:italic;font-size:18px;line-height:1.8;color:${CHARCOAL_WARM};margin:0 0 28px 0;">"${t.q}"</p>
      <div style="display:flex;align-items:center;gap:14px;">
        <div style="width:40px;height:2px;background:linear-gradient(to right,${DIVINE_GOLD},transparent);"></div>
        <div>
          <div style="font-family:'Cinzel',serif;font-size:15px;font-weight:600;color:${CHARCOAL_WARM};">${t.n}</div>
          <div style="font-family:'Lato',sans-serif;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${STONE_GRAY};margin-top:4px;">${t.l}</div>
        </div>
      </div>
    </div>`, '', typo('typography', { f: 'Lato', s: 15 }),
    { ...anim('fadeInUp', 'slow', i * 150) })
  );

  return sec({
    background_background: 'classic', background_color: MOONLIGHT,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
    custom_css: `
selector { position:relative; }
selector::before {
  content:''; position:absolute; top:-60px; left:0; right:0; height:120px;
  background:linear-gradient(to bottom, ${IVORY}, transparent);
  pointer-events:none; z-index:1;
}
selector::after {
  content:''; position:absolute; bottom:-60px; left:0; right:0; height:120px;
  background:linear-gradient(to top, ${IVORY}, transparent);
  pointer-events:none; z-index:1;
}
`
  }, [
    col(100, { content_position: 'center' }, [
      eyebrow('Sacred Transformations'),
      spacer(16),
      heading(`Stories of<br><em style="background:linear-gradient(135deg,${DIVINE_GOLD},${FOREST_DEEP});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Healing & Belonging</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 48, sm: 28, st: 38, w: 400, lh: 1.1, ls: -0.5 },
        { ...anim('fadeInUp') }),
      spacer(16),
      text(`<p style="font-family:'Lato',sans-serif;font-size:16px;line-height:1.8;color:${EARTH_BROWN};max-width:600px;margin:0 auto;text-align:center;">Thousands have come from places of pain and disconnection — and left feeling whole, grounded, and alive.</p>`, '',
        typo('typography', { f: 'Lato', s: 16, sm: 14, lh: 1.8 }), { align: 'center' }),
      spacer(40),
      sec({ padding: pad(0, 0, 0, 0) }, [
        col(50, { _column_size_mobile: 100 }, testimonialCards.slice(0, 2)),
        col(50, { _column_size_mobile: 100 }, testimonialCards.slice(2, 4)),
      ], true),
    ])
  ]);
}

module.exports = {
  headerSection, heroSection, shamanIntroSection,
  socialReelSection, gallerySection, testimonialsSection,
  IVORY, PARCHMENT, DUNE_SAND, WARM_STONE, MOONLIGHT,
  CHARCOAL_WARM, EARTH_BROWN, STONE_GRAY, DUST,
  DIVINE_GOLD, LIGHT_GOLD, PALE_GOLD, EMBER_GLOW, SUNSET_GOLD,
  FOREST_DEEP, MOSS_LIFE, SAGE_CALM, EARTH_TERRA, CLAY_WARM, MIST_ROSE,
  RITUAL_PURPLE, SMOKE_GRAY, LIGHT_RAY, DIVINE_SHADOW, SITE,
  px, em, pad, typo, sec, col, w, heading, text, btn, spacer, dividerW, img, anim, eyebrow, sacredCircle, lightRay, particle
};
