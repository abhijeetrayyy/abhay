// ── Standalone Testimonials Section — Premium Redesign ──
// Dark cinematic background with large centered quote, author info, decorative gold elements
const fs = require('fs');
const { px, pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, eyebrow, GOLD, GOLD_LIGHT, DARK, SAND, BEIGE, SITE } = require('./gen-parts/helpers');

const allCSS = `
selector { position: relative; }
selector .ao-test-bg-quote {
  position: absolute;
  top: 60px;
  left: 80px;
  font-family: 'Playfair Display', serif;
  font-size: 260px;
  color: rgba(212,168,83,0.08);
  line-height: 1;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}
selector .ao-test-card {
  position: relative;
  background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 24px;
  padding: 56px 48px;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;
  transition: border-color 0.3s ease;
}
selector .ao-test-card:hover {
  border-color: rgba(212,168,83,0.2);
}
selector .ao-test-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 22px;
  line-height: 1.65;
  color: rgba(255,255,255,0.9);
  margin: 0 0 36px 0;
  position: relative;
}
selector .ao-test-quote::before {
  content: '\\201C';
  font-family: 'Playfair Display', serif;
  font-size: 60px;
  color: ${GOLD};
  position: absolute;
  top: -20px;
  left: -8px;
  line-height: 1;
  opacity: 0.6;
}
selector .ao-test-author {
  display: flex;
  align-items: center;
  gap: 16px;
}
selector .ao-test-gold-line {
  width: 32px;
  height: 2px;
  background: linear-gradient(to right, ${GOLD}, transparent);
  flex-shrink: 0;
}
selector .ao-test-name {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
}
selector .ao-test-loc {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-top: 6px;
}
selector .ao-test-stars {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
}
selector .ao-test-star {
  color: ${GOLD};
  font-size: 14px;
}
@media (max-width: 767px) {
  selector .ao-test-bg-quote { font-size: 140px !important; top: 20px !important; left: 20px !important; }
  selector .ao-test-card { padding: 36px 24px; }
  selector .ao-test-quote { font-size: 17px; }
}`;

const testimonials = [
  { q: 'After one session with Abhay, I felt a weight lift from my chest that I had been carrying for 20 years. It was like my cells remembered how to breathe again.', n: 'Maria K.', l: 'Berlin, Germany' },
  { q: 'The Sampo System completely rewired how I experience stress. What used to cripple me now passes through me. I have never felt more sovereign in my own body.', n: 'James R.', l: 'London, UK' },
  { q: 'I traveled to three continents seeking healing. What Abhay achieved in a single masterclass surpassed everything. This is ancient wisdom in its purest form.', n: 'Elena V.', l: 'Moscow, Russia' },
  { q: 'What people remember most after a personal encounter with the shaman is the special inner feeling — an all-embracing love that truly touches the heart.', n: 'Priya S.', l: 'Mumbai, India' },
];

const stars = '<div class="ao-test-stars"><span class="ao-test-star">★</span><span class="ao-test-star">★</span><span class="ao-test-star">★</span><span class="ao-test-star">★</span><span class="ao-test-star">★</span></div>';

// Left column: 2 cards, Right column: 2 cards (masonry style offset)
const leftCards = testimonials.slice(0, 2).map(t =>
  `<div class="ao-test-card">
    ${stars}
    <p class="ao-test-quote">${t.q}</p>
    <div class="ao-test-author">
      <div class="ao-test-gold-line"></div>
      <div>
        <div class="ao-test-name">${t.n}</div>
        <div class="ao-test-loc">${t.l}</div>
      </div>
    </div>
  </div>`
).join('');

const rightCards = testimonials.slice(2, 4).map(t =>
  `<div class="ao-test-card">
    ${stars}
    <p class="ao-test-quote">${t.q}</p>
    <div class="ao-test-author">
      <div class="ao-test-gold-line"></div>
      <div>
        <div class="ao-test-name">${t.n}</div>
        <div class="ao-test-loc">${t.l}</div>
      </div>
    </div>
  </div>`
).join('');

const template = {
  title: 'Abhay Oyun Testimonials Section',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [
    sec({
      background_background: 'classic', background_color: '#0a0c12',
      padding: pad(140, 80, 140, 80),
      padding_mobile: pad(60, 20, 60, 20),
      custom_css: allCSS,
    }, [
      col(100, {}, [
        // Decorative background quote mark
        text('<div class="ao-test-bg-quote">&ldquo;</div>', '', typo('typography', { f: 'Playfair Display', s: 14 })),
      ]),
      // Heading area
      col(100, {}, [
        text(`<div style="display:flex;align-items:center;gap:14px;position:relative;z-index:1;"><div style="width:36px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div><span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">Voices of Transformation</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
        spacer(10),
        heading(`Lives Changed<br><em style="color:${GOLD}">Across the World</em>`, 'h2', '#ffffff',
          { f: 'Playfair Display', s: 56, sm: 34, st: 44, w: 400, lh: 0.95, ls: -1 },
          { ...anim('fadeInUp') }),
        spacer(6),
        text('<p style="max-width:480px;">Over 10,000 individuals across 40 countries have experienced direct healing from Shaman Abhay Oyun\'s practices.</p>', 'rgba(255,255,255,0.45)',
          typo('typography', { f: 'Inter', s: 16, sm: 14, lh: 1.8 })),
        spacer(50),
      ]),
      // 2-column masonry testimonial cards
      col(50, { _column_size_mobile: 100, content_position: 'top' }, [
        text(leftCards, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInUp') }),
      ]),
      col(50, { _column_size_mobile: 100, content_position: 'top', margin: pad(40, 0, 0, 0) }, [
        text(rightCards, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInUp', 'slow', 200) }),
      ]),
      // Bottom CTA
      col(100, { align: 'center' }, [
        spacer(40),
        text(`<div style="text-align:center;position:relative;z-index:1;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:20px;color:rgba(255,255,255,0.5);margin:0 0 24px 0;">Ready to begin your transformation?</p>
          <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" style="display:inline-flex;align-items:center;padding:16px 40px;background:${GOLD};color:#050810;font-family:'Inter',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;border-radius:4px;text-decoration:none;">Book a Free Session</a>
        </div>`, '', typo('typography', { f: 'Inter', s: 14 })),
      ]),
    ]),
  ],
};

fs.writeFileSync('abhay-oyun-testimonials.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-testimonials.json');
