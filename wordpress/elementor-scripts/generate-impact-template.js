// ── Standalone Global Impact Section — Premium Light Design ──
// Cinematic split layout: Sticky impact citation left, scrollable visual timeline right
// Light theme matching #F5F0E8
const fs = require('fs');
const { px, pad, typo, sec, col, w, heading, text, btn, spacer, anim, GOLD, GOLD_LIGHT, DARK, SAND, SITE } = require('./gen-parts/helpers');

const allCSS = `
selector { position: relative; background-color: #F5F0E8 !important; }
selector .ao-impact-sticky {
  position: sticky;
  top: 140px;
}
selector .ao-impact-quote-card {
  background: linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.4));
  border: 1px solid rgba(212,168,83,0.15);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(10px);
  margin-bottom: 30px;
  box-shadow: 0 20px 50px rgba(13,17,23,0.05);
}
selector .ao-impact-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 32px;
  line-height: 1.3;
  color: #0d1117;
  margin: 0 0 20px 0;
  background: linear-gradient(135deg, #0d1117 30%, ${GOLD} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
selector .ao-impact-author {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(13,17,23,0.4);
}
/* Timeline styling */
selector .ao-timeline {
  position: relative;
  padding-left: 40px;
  border-left: 1px solid rgba(212,168,83,0.15);
}
selector .ao-timeline-card {
  position: relative;
  margin-bottom: 60px;
  background: #ffffff;
  border: 1px solid rgba(13,17,23,0.05);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  box-shadow: 0 10px 30px rgba(13,17,23,0.04);
}
selector .ao-timeline-card:hover {
  transform: translateX(8px);
  border-color: rgba(212,168,83,0.3);
  box-shadow: 0 20px 50px rgba(13,17,23,0.08);
}
selector .ao-timeline-dot {
  position: absolute;
  left: -49px;
  top: 30px;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #F5F0E8;
  border: 1px solid ${GOLD};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
selector .ao-timeline-dot::after {
  content: '';
  width: 7px;
  height: 7px;
  background: ${GOLD};
  border-radius: 50%;
  box-shadow: 0 0 10px ${GOLD};
}
selector .ao-timeline-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}
selector .ao-timeline-body {
  padding: 24px 28px 32px;
}
selector .ao-timeline-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 12px;
}
selector .ao-timeline-year {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  color: ${GOLD};
  line-height: 1;
}
selector .ao-timeline-loc {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(13,17,23,0.4);
}
selector .ao-timeline-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(13,17,23,0.6);
  margin: 0;
}
@media (max-width: 1024px) {
  selector .ao-impact-sticky { position: relative; top: 0; margin-bottom: 60px; }
  selector .ao-timeline { padding-left: 30px; }
  selector .ao-timeline-dot { left: -39px; }
}
@media (max-width: 767px) {
  selector .ao-impact-quote { font-size: 24px; }
  selector .ao-timeline-img { height: 180px; }
  selector .ao-timeline-body { padding: 20px 20px 24px; }
}`;

const milestones = [
  { year: '2004', loc: 'Japan — Mount Fuji', img: 'sao-gallery-img4.jpg', text: "2,500 people gathered at the base of Mount Fuji under Abhay's guidance. Shaman chiefs from North America and Asian tribes united in ceremony for the first time." },
  { year: '2007', loc: 'South Russia', img: 'sao-gallery-img2.jpg', text: 'Major peace conferences and large spiritual gatherings where prayers and sacred rituals were held to bring peace and healing to the war-torn region.' },
  { year: '2015', loc: 'Chile', img: 'sao-gallery-img8.jpg', text: 'When earthquakes, volcanic ash, and severe drought converged on Chile, Abhay led ceremonies to shift the collective energetic field and support recovery.' },
  { year: '2022', loc: 'Ukraine', img: 'healing-global-harmony.jpg', text: "During the New Year's Retreat 2021–2022, Abhay received a vision of the invasion. Sacred ceremonies were organized across Europe to focus healing energy on the region." },
];

const timelineHtml = `<div class="ao-timeline">
  ${milestones.map(m => `
    <div class="ao-timeline-card">
      <div class="ao-timeline-dot"></div>
      <img src="${SITE}/${m.img}" alt="${m.loc}" class="ao-timeline-img" />
      <div class="ao-timeline-body">
        <div class="ao-timeline-header">
          <span class="ao-timeline-year">${m.year}</span>
          <span class="ao-timeline-loc">${m.loc}</span>
        </div>
        <p class="ao-timeline-text">${m.text}</p>
      </div>
    </div>
  `).join('')}
</div>`;

const template = {
  title: 'Abhay Oyun Global Impact',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [
    sec({
      background_background: 'classic', background_color: '#F5F0E8',
      padding: pad(140, 80, 140, 80),
      padding_mobile: pad(60, 20, 60, 20),
      custom_css: allCSS,
    }, [
      // Left: Sticky Content
      col(45, { _column_size_mobile: 100 }, [
        text(`<div class="ao-impact-sticky">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;">
            <div style="width:36px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div>
            <span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">Global Impact</span>
          </div>
          <div class="ao-impact-quote-card">
            <h2 class="ao-impact-quote">&ldquo;When you reconnect with your wild nature, trauma doesn't just heal — it transforms into power.&rdquo;</h2>
            <div class="ao-impact-author">— Shaman Abhay Oyun</div>
          </div>
          <div style="padding:0 10px;">
            <p style="font-family:'Inter',sans-serif;font-size:16px;line-height:1.8;color:rgba(13,17,23,0.6);margin:0 0 24px 0;">
              Called the <strong style="color:rgba(13,17,23,0.8);font-weight:600;">World Shaman and Guardian of Our Planet</strong>, Abhay Oyun has dedicated his life to responding to global crises — natural disasters, wars, humanitarian emergencies — through the ancient lens of shamanic intervention.
            </p>
            <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" style="display:inline-flex;align-items:center;padding:14px 32px;background:#0d1117;color:#ffffff;font-family:'Inter',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;border-radius:4px;text-decoration:none;box-shadow:0 10px 30px rgba(13,17,23,0.1);">Book a Consultation →</a>
          </div>
        </div>`, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInLeft') }),
      ]),
      // Right: Scrollable Timeline
      col(55, { _column_size_mobile: 100 }, [
        text(timelineHtml, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInUp', 'slow', 300) }),
      ]),
    ]),
  ],
};

fs.writeFileSync('abhay-oyun-impact.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-impact.json (Light Theme)');
