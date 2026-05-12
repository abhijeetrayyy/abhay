// ── Standalone Teachings Section — Premium Redesign ──
// 3 rich individual cards (not a plain accordion) each with image, tag, description, CTA
const fs = require('fs');
const { px, pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, eyebrow, GOLD, GOLD_LIGHT, DARK, SAND, BEIGE, SITE } = require('./gen-parts/helpers');

const allCSS = `
selector .ao-practice-card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(13,17,23,0.04);
  box-shadow: 0 20px 60px rgba(13,17,23,0.05);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
selector .ao-practice-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 80px rgba(13,17,23,0.08);
}
selector .ao-practice-img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}
selector .ao-practice-body {
  padding: 40px 36px 44px;
}
selector .ao-practice-num {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 400;
  background: linear-gradient(135deg, ${GOLD}, #9e7529);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin-bottom: 12px;
}
selector .ao-practice-tag {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${GOLD};
  padding: 5px 14px;
  border: 1px solid rgba(212,168,83,0.3);
  border-radius: 4px;
  margin-bottom: 16px;
}
selector .ao-practice-title {
  font-family: 'Playfair Display', serif;
  font-size: 26px;
  font-weight: 700;
  color: ${DARK};
  line-height: 1.2;
  margin: 0 0 16px 0;
}
selector .ao-practice-desc {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.75;
  color: rgba(13,17,23,0.6);
  margin: 0 0 28px 0;
}
selector .ao-practice-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #050505;
  background: ${GOLD};
  padding: 14px 32px;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s ease;
}
selector .ao-practice-cta:hover {
  background: #c49a48;
}
selector .ao-practice-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, ${GOLD}, transparent);
  margin-bottom: 20px;
}
@media (max-width: 767px) {
  selector .ao-practice-img { height: 200px; }
  selector .ao-practice-body { padding: 28px 24px 32px; }
  selector .ao-practice-title { font-size: 22px; }
  selector .ao-practice-num { font-size: 36px; }
}`;

const practices = [
  { num: '01', tag: 'SAMPO System', title: 'Psycho-Energetic Training', desc: 'A complete system for accumulating, protecting and directing your vital energy. Ancient Siberian methods to shield from external influences and awaken your dormant life force.', img: 'shaman_birch_forest.png' },
  { num: '02', tag: 'Sound Medicine', title: 'Sacred Drum Healing', desc: "The shaman's drum is a portal. Its frequencies shift brainwave states instantly, dissolve trauma held in the cellular body, and initiate spontaneous healing responses.", img: 'drum_moss_forest.png' },
  { num: '03', tag: 'Personal Healing', title: '1-on-1 Shamanic Session', desc: 'Direct, private energetic work with Shaman Abhay Oyun. Each session identifies the root cause of imbalance — physical, emotional, or ancestral — and applies targeted shamanic intervention.', img: 'yurt_fire_healing.png' },
];

const practiceCards = practices.map(p =>
  col(33, { _column_size_mobile: 100, _column_size_tablet: 100 }, [
    text(`<div class="ao-practice-card">
      <img src="${SITE}/${p.img}" alt="${p.title}" class="ao-practice-img" />
      <div class="ao-practice-body">
        <div class="ao-practice-num">${p.num}</div>
        <div class="ao-practice-divider"></div>
        <span class="ao-practice-tag">${p.tag}</span>
        <h3 class="ao-practice-title">${p.title}</h3>
        <p class="ao-practice-desc">${p.desc}</p>
        <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="ao-practice-cta">Book Session →</a>
      </div>
    </div>`, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInUp') })
  ])
);

let _id = 0x4a00000;
const uid = () => (_id++).toString(16);

const template = {
  title: 'Abhay Oyun Teachings Section',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [
    sec({
      background_background: 'classic', background_color: SAND,
      padding: pad(120, 60, 120, 60),
      padding_mobile: pad(60, 20, 60, 20),
      custom_css: allCSS,
    }, [
      col(100, {}, [
        eyebrow('The Work'),
        spacer(10),
        heading(`Ancient Practices.<br><em style="color:rgba(13,17,23,0.4)">Modern Mastery.</em>`, 'h2', DARK,
          { f: 'Playfair Display', s: 56, sm: 32, st: 42, w: 400, lh: 1.0, ls: -1 },
          { ...anim('fadeInUp') }),
        spacer(6),
        text(`<p style="max-width:560px;">Three pillars of the SAMPO system, refined across 35 years and 40 countries of direct energetic healing work.</p>`, '#666c76',
          typo('typography', { f: 'Inter', s: 17, sm: 15, lh: 1.7 })),
        spacer(50),
        // 3-card grid
        sec({ padding: pad(0, 0, 0, 0), gap: 30 }, practiceCards, true),
      ])
    ]),
  ],
};

fs.writeFileSync('abhay-oyun-teachings.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-teachings.json');
