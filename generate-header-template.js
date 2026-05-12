// ── Standalone Header Template Generator ──
const fs = require('fs');
const { px, pad, typo, GOLD, SITE } = require('./gen-parts/helpers');

// ALL CSS in Elementor's custom_css field — never gets stripped by TinyMCE
const allCSS = `
selector .ao-header { display:flex; align-items:center; justify-content:space-between; min-height:80px; width:100%; }
selector .ao-header-logo { display:flex; align-items:center; gap:14px; flex-shrink:0; text-decoration:none; }
selector .ao-header-logo-icon { width:34px; height:34px; background-image:url(${SITE}/icon1.png); background-size:contain; background-repeat:no-repeat; background-position:center; flex-shrink:0; }
selector .ao-header-logo-text { font-family:'Playfair Display',serif; font-size:20px; font-weight:700; letter-spacing:0.06em; color:#fff; line-height:1; }
selector .ao-header-logo-sub { font-family:'Inter',sans-serif; font-size:8.5px; font-weight:600; letter-spacing:0.28em; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-top:4px; }
selector .ao-header-nav { display:flex; align-items:center; gap:32px; }
selector .ao-header-nav a { font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.18em; text-transform:uppercase; color:#fff; text-decoration:none; }
selector .ao-header-right { display:flex; align-items:center; gap:8px; flex-shrink:0; }
selector .ao-header-social { display:flex; align-items:center; gap:4px; border-right:1px solid rgba(255,255,255,0.15); padding-right:16px; margin-right:8px; }
selector .ao-header-social a { display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; color:rgba(255,255,255,0.6); font-size:9px; font-weight:600; text-decoration:none; }
selector .ao-header-cta { display:inline-flex; align-items:center; padding:10px 24px; background:linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03)); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.15); color:#fff; font-family:'Inter',sans-serif; font-size:10px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; border-radius:4px; text-decoration:none; white-space:nowrap; }
@media (max-width:767px) {
  selector .ao-header { min-height:60px; }
  selector .ao-header-nav { display:none !important; }
  selector .ao-header-social { display:none !important; }
  selector .ao-header-logo-text { font-size:16px; }
  selector .ao-header-logo-sub { font-size:7px; }
  selector .ao-header-logo-icon { width:28px; height:28px; }
  selector .ao-header-cta { padding:8px 16px; font-size:8px; letter-spacing:0.12em; }
}
@media (min-width:768px) and (max-width:1024px) {
  selector .ao-header-nav { gap:20px; }
  selector .ao-header-nav a { font-size:10px; }
  selector .ao-header-social { display:none !important; }
  selector .ao-header-cta { padding:8px 18px; font-size:9px; }
}
.sticky-header { position: sticky !important; top: 0; z-index: 100; }`;

// Clean HTML — no <style>, no <img>
const headerHtml = `<div class="ao-header">
  <a href="/" class="ao-header-logo">
    <div class="ao-header-logo-icon"></div>
    <div>
      <div class="ao-header-logo-text">ABHAY <span style="color:${GOLD};">OYUN</span></div>
      <div class="ao-header-logo-sub">Siberian Shamanism</div>
    </div>
  </a>
  <div class="ao-header-nav">
    <a href="#teachings">TEACHINGS</a>
    <a href="#events">EVENTS</a>
    <a href="#transform">TRANSFORM</a>
  </div>
  <div class="ao-header-right">
    <div class="ao-header-social">
      <a href="https://www.instagram.com/abhayoyun/" target="_blank">IG</a>
      <a href="https://www.youtube.com/@earthforpeace" target="_blank">YT</a>
      <a href="https://www.facebook.com/abhayoyun0/" target="_blank">FB</a>
      <a href="https://wa.me/12122561366" target="_blank">WA</a>
    </div>
    <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="ao-header-cta">Book Session</a>
  </div>
</div>`;

let _id = 0x3a00000;
const uid = () => (_id++).toString(16);

const template = {
  title: 'Abhay Oyun Header',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [{
    id: uid(), elType: 'section',
    settings: {
      stretch_section: 'section-stretched', layout: 'full_width',
      background_background: 'classic', background_color: '#0b0c10',
      padding: pad(0, 40, 0, 40),
      padding_mobile: pad(0, 16, 0, 16),
      z_index: 100,
      css_classes: 'sticky-header',
      custom_css: allCSS,
    },
    elements: [{
      id: uid(), elType: 'column',
      settings: { _column_size: 100, _inline_size: 100, content_position: 'center' },
      elements: [{
        id: uid(), elType: 'widget', widgetType: 'text-editor',
        settings: {
          editor: headerHtml,
          text_color: '',
          typography_typography: 'custom',
          typography_font_family: 'Inter',
          typography_font_size: px(14),
        }
      }]
    }],
    isInner: false,
  }],
};

fs.writeFileSync('abhay-oyun-header.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-header.json (fixed)');
