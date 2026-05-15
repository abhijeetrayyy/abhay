// ── Standalone Video Testimonials Section — With Playable YouTube Embeds ──
const fs = require('fs');
const { px, pad, typo, sec, col, w, heading, text, btn, spacer, anim, GOLD, GOLD_LIGHT, DARK, SAND, SITE } = require('./gen-parts/helpers');

const allCSS = `
selector .ao-vid-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
selector .ao-vid-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: #15171c;
  border: 1px solid rgba(255,255,255,0.06);
  transition: transform 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
selector .ao-vid-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212,168,83,0.25);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
selector .ao-vid-iframe-wrap {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}
selector .ao-vid-iframe-wrap iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
selector .ao-vid-info {
  padding: 18px 20px 22px;
}
selector .ao-vid-tag {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${GOLD};
  padding: 3px 10px;
  border: 1px solid rgba(212,168,83,0.25);
  border-radius: 4px;
  margin-bottom: 10px;
}
selector .ao-vid-title {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.35;
  margin: 0;
}
selector .ao-vid-featured {
  grid-column: span 2;
}
selector .ao-vid-featured .ao-vid-title {
  font-size: 20px;
}
selector .ao-vid-media-card {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  background: linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
  border: 2px dashed rgba(255,255,255,0.1);
}
selector .ao-vid-media-label {
  text-align: center;
  color: rgba(255,255,255,0.25);
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
}
selector .ao-vid-media-label span {
  display: block;
  font-size: 32px;
  margin-bottom: 12px;
  opacity: 0.4;
}
@media (max-width: 1024px) {
  selector .ao-vid-grid { grid-template-columns: repeat(2, 1fr); }
  selector .ao-vid-featured { grid-column: span 2; }
}
@media (max-width: 767px) {
  selector .ao-vid-grid { grid-template-columns: 1fr; gap: 16px; }
  selector .ao-vid-featured { grid-column: span 1; }
  selector .ao-vid-card { border-radius: 12px; }
  selector .ao-vid-featured .ao-vid-title { font-size: 17px; }
}`;

const videos = [
  { id: 'PKpKIkGQGv4', title: 'Meeting with Master — Review of Christian', tag: 'Student Story', featured: true },
  { id: 'buldB9zzREs', title: 'Expanded Consciousness — Transformation of Life', tag: 'Teaching' },
  { id: 'Lw2A4Rbyxm0', title: 'Shaman Lead to Happiness', tag: 'Testimony' },
  { id: '6fYzu6ZdKJA', title: 'Unlimited Love Through Energy', tag: 'Workshop' },
];

function makeYTCard(v) {
  const cls = v.featured ? ' ao-vid-featured' : '';
  return `<div class="ao-vid-card${cls}">
    <div class="ao-vid-iframe-wrap">
      <iframe src="https://www.youtube.com/embed/${v.id}?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
    </div>
    <div class="ao-vid-info">
      <span class="ao-vid-tag">${v.tag}</span>
      <h4 class="ao-vid-title">${v.title}</h4>
    </div>
  </div>`;
}

function makeMediaPlaceholder(num) {
  return `<div class="ao-vid-card">
    <div class="ao-vid-media-card">
      <div class="ao-vid-media-label">
        <span>🎬</span>
        Media Video ${num}<br/>Upload from Media Library
      </div>
    </div>
    <div class="ao-vid-info">
      <span class="ao-vid-tag">Media</span>
      <h4 class="ao-vid-title">Video ${num} — Add Title</h4>
    </div>
  </div>`;
}

const allCards = videos.map(v => makeYTCard(v)).join('')
  + makeMediaPlaceholder(1) + makeMediaPlaceholder(2) + makeMediaPlaceholder(3);

const template = {
  title: 'Abhay Oyun Video Testimonials',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [
    sec({
      background_background: 'classic', background_color: '#0a0c12',
      padding: pad(140, 60, 140, 60),
      padding_mobile: pad(60, 16, 60, 16),
      custom_css: allCSS,
    }, [
      col(100, {}, [
        text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:36px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div><span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">Video Testimonials</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
        spacer(14),
        heading(`Real Stories.<br><em style="color:rgba(255,255,255,0.25)">Real Transformation.</em>`, 'h2', '#ffffff',
          { f: 'Playfair Display', s: 56, sm: 32, st: 42, w: 400, lh: 0.95, ls: -1 },
          { ...anim('fadeInUp') }),
        spacer(6),
        text(`<p style="max-width:520px;">Hear directly from students and participants who have experienced the power of Abhay Oyun's shamanic practices.</p>`, 'rgba(255,255,255,0.4)',
          typo('typography', { f: 'Inter', s: 16, sm: 14, lh: 1.75 })),
        spacer(50),
        // Video Grid with actual iframes
        text(`<div class="ao-vid-grid">${allCards}</div>`, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInUp', 'slow', 200) }),
        spacer(40),
        text(`<div style="text-align:center;">
          <a href="https://www.youtube.com/@earthforpeace" target="_blank" style="display:inline-flex;align-items:center;gap:12px;padding:14px 32px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:4px;font-family:'Inter',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.7);text-decoration:none;">
            ▶ View All on YouTube
          </a>
        </div>`, '', typo('typography', { f: 'Inter', s: 12 }), { align: 'center' }),
      ])
    ]),
  ],
};

fs.writeFileSync('abhay-oyun-video-testimonials.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-video-testimonials.json (with playable iframes)');
