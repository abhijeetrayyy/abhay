// ── Standalone "The Master" Section — Premium About/Bio ──
// Cinematic split layout: editorial text left, portrait image right
// Features: 3 credential badges, elegant typography, gold accents, dark premium feel
const fs = require('fs');
const { px, pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, eyebrow, GOLD, GOLD_LIGHT, DARK, SAND, BEIGE, SITE } = require('./gen-parts/helpers');

const allCSS = `
selector .ao-master-wrap {
  position: relative;
  overflow: hidden;
}
selector .ao-master-credential {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 28px;
  padding: 24px 28px;
  background: linear-gradient(145deg, rgba(212,168,83,0.06), rgba(212,168,83,0.02));
  border: 1px solid rgba(212,168,83,0.12);
  border-radius: 16px;
  transition: border-color 0.3s ease;
}
selector .ao-master-credential:hover {
  border-color: rgba(212,168,83,0.3);
}
selector .ao-master-cred-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.05));
  border: 1px solid rgba(212,168,83,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 18px;
}
selector .ao-master-cred-title {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: ${DARK};
  line-height: 1.3;
  margin-bottom: 2px;
}
selector .ao-master-cred-sub {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: rgba(13,17,23,0.45);
  line-height: 1.5;
}
selector .ao-master-quote-box {
  position: relative;
  margin-top: 40px;
  padding: 36px 32px;
  background: #0d1117;
  border-radius: 20px;
  overflow: hidden;
}
selector .ao-master-quote-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, ${GOLD}, transparent);
}
selector .ao-master-quote-text {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 17px;
  line-height: 1.65;
  color: rgba(255,255,255,0.8);
  margin: 0 0 24px 0;
}
selector .ao-master-quote-cite {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${GOLD};
}
selector .ao-master-img-wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 40px 80px rgba(13,17,23,0.12);
}
selector .ao-master-img-wrap img {
  width: 100%;
  display: block;
}
selector .ao-master-img-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 32px;
  background: linear-gradient(to top, rgba(13,17,23,0.85), transparent);
}
selector .ao-master-img-badge {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${GOLD};
  padding: 6px 14px;
  border: 1px solid rgba(212,168,83,0.3);
  border-radius: 99px;
  background: rgba(13,17,23,0.5);
  backdrop-filter: blur(10px);
}
selector .ao-master-cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 44px;
  background: ${GOLD};
  color: #050810;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: 4px;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(212,168,83,0.2);
  transition: all 0.3s ease;
}
selector .ao-master-cta:hover {
  background: #c49a48;
  box-shadow: 0 16px 40px rgba(212,168,83,0.3);
}
@media (max-width: 767px) {
  selector .ao-master-credential { padding: 18px 20px; }
  selector .ao-master-cred-icon { width: 36px; height: 36px; font-size: 14px; }
  selector .ao-master-quote-box { padding: 28px 24px; }
  selector .ao-master-img-overlay { padding: 28px 20px; }
}`;

const credentials = [
  { icon: '⚡', title: 'Master of Ancient Traditions', sub: 'Shamanic practices across all world religions and spiritual systems' },
  { icon: '🔥', title: 'Master of Energy — 35 Years', sub: 'Three decades of direct psycho-energetic healing practice worldwide' },
  { icon: '🛡️', title: 'Founder of SAMPO System', sub: 'Creator of the psycho-energetic defense & personal transformation system' },
];

const credHtml = credentials.map(c =>
  `<div class="ao-master-credential">
    <div class="ao-master-cred-icon">${c.icon}</div>
    <div>
      <div class="ao-master-cred-title">${c.title}</div>
      <div class="ao-master-cred-sub">${c.sub}</div>
    </div>
  </div>`
).join('');

const template = {
  title: 'Abhay Oyun Master Section',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [
    sec({
      background_background: 'classic', background_color: SAND,
      padding: pad(140, 80, 140, 80),
      padding_mobile: pad(60, 20, 60, 20),
      custom_css: allCSS,
      css_classes: 'ao-master-wrap',
    }, [
      // Left: Content
      col(55, { content_position: 'center', _column_size_mobile: 100 }, [
        text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:36px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div><span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">The Master</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
        spacer(16),
        heading(`Ancient Wisdom.<br><em style="background:linear-gradient(135deg,${GOLD_LIGHT},${GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Living Legacy.</em>`, 'h2', DARK,
          { f: 'Playfair Display', s: 56, sm: 34, st: 44, w: 400, lh: 0.95, ls: -1 },
          { ...anim('fadeInUp') }),
        spacer(20),
        // 3 credential badges
        text(credHtml, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInUp', 'slow', 200) }),
        spacer(10),
        // Body text
        text(`<p>The books, courses and seminars were born as a result of the answers to thousands of questions posed to Abhay Oyun by his students over a period of 35 years. It is based on the ancient knowledge of psycho-energetic protection, respect for the traditions and knowledge of the peoples of the world, as well as Abhay Oyun's own personal experience.</p>
        <p>After communicating with Abhay Oyun, people often call him the <strong>Master of ancient traditions</strong>, because he knows and understands all religions and their rituals, and also has vast experience in the practice of spiritual perfection and can give advice and help in any area and situation of life.</p>`, 'rgba(13,17,23,0.6)',
          typo('typography', { f: 'Inter', s: 16, sm: 14, lh: 1.85 }), { ...anim('fadeInUp', 'slow', 300) }),
        spacer(24),
        // CTA
        text(`<a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="ao-master-cta">Book Now →</a>`, '', typo('typography', { f: 'Inter', s: 12 })),
      ]),
      // Right: Image with overlay
      col(45, { content_position: 'center', _column_size_mobile: 100 }, [
        text(`<div class="ao-master-img-wrap">
          <img src="${SITE}/abhay_img.png" alt="Shaman Abhay Oyun" />
          <div class="ao-master-img-overlay">
            <span class="ao-master-img-badge">35 Years · 40 Countries · 10K+ Healed</span>
          </div>
        </div>`, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInRight') }),
        spacer(20),
        // Dark quote box
        text(`<div class="ao-master-quote-box">
          <p class="ao-master-quote-text">&ldquo;When you reconnect with your wild nature, trauma doesn't just heal — it transforms into power.&rdquo;</p>
          <div class="ao-master-quote-cite">— Shaman Abhay Oyun</div>
        </div>`, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInUp', 'slow', 300) }),
      ]),
    ]),
  ],
};

fs.writeFileSync('abhay-oyun-master.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-master.json');
