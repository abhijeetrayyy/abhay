// ── Standalone Shamanic Aura Section — Premium Ethereal Design ──
// Featured right after the Hero to set the high-vibration feel.
// Light beige base (#F5F0E8) with animated radial "aura" glows.

const fs = require('fs');
const { px, pad, typo, sec, col, heading, text, spacer, anim, GOLD, GOLD_LIGHT, SITE } = require('./gen-parts/helpers');

const allCSS = `
selector {
  position: relative;
  overflow: hidden;
  background-color: #F5F0E8 !important;
}

/* The Animated Aura */
selector .ao-aura-bg {
  position: absolute;
  inset: -10% -10%;
  z-index: 1;
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.6;
}

selector .ao-aura-blob {
  position: absolute;
  border-radius: 50%;
  animation: auraMove 20s infinite alternate ease-in-out;
}

selector .ao-aura-1 {
  width: 80%;
  height: 80%;
  background: radial-gradient(circle, ${GOLD_LIGHT} 0%, transparent 70%);
  top: 10%;
  left: 10%;
  animation-duration: 25s;
}

selector .ao-aura-2 {
  width: 60%;
  height: 60%;
  background: radial-gradient(circle, #ffffff 0%, transparent 60%);
  bottom: 10%;
  right: 10%;
  animation-duration: 18s;
  animation-delay: -5s;
}

@keyframes auraMove {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(5%, 5%) scale(1.1); }
  100% { transform: translate(-5%, -2%) scale(0.9); }
}

/* Pulsating Shamanic Source */
selector .ao-source-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  z-index: 2;
}

selector .ao-source-icon {
  width: 100px;
  height: 100px;
  background-image: url(${SITE}/icon1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: 3;
  animation: sourcePulse 4s infinite ease-in-out;
}

selector .ao-source-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${GOLD};
  filter: blur(40px);
  opacity: 0.2;
  animation: glowPulse 4s infinite ease-in-out;
}

@keyframes sourcePulse {
  0%, 100% { transform: scale(1); filter: brightness(1); }
  50% { transform: scale(1.08); filter: brightness(1.2); }
}

@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.2; }
  50% { transform: scale(1.5); opacity: 0.4; }
}

/* Floating Particles */
selector .ao-particles {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

selector .ao-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${GOLD};
  border-radius: 50%;
  box-shadow: 0 0 10px ${GOLD};
  opacity: 0.4;
  animation: particleFloat 10s infinite linear;
}

@keyframes particleFloat {
  0% { transform: translateY(100vh) scale(0); opacity: 0; }
  20% { opacity: 0.6; }
  80% { opacity: 0.6; }
  100% { transform: translateY(-100px) scale(1); opacity: 0; }
}

/* High-vibration Content */
selector .ao-aura-content {
  position: relative;
  z-index: 5;
  text-align: center;
}

selector .ao-shimmer-text {
  background: linear-gradient(90deg, #0d1117, ${GOLD}, #0d1117);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 5s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}

@media (max-width: 767px) {
  selector .ao-source-icon { width: 70px; height: 70px; }
  selector .ao-source-glow { width: 90px; height: 90px; }
}
`;

const particles = Array.from({ length: 12 }).map((_, i) => {
  const left = Math.random() * 100;
  const delay = Math.random() * 10;
  return `<div class="ao-particle" style="left: ${left}%; animation-delay: ${delay}s;"></div>`;
}).join('');

const template = {
  title: 'Abhay Oyun Shamanic Aura',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [
    sec({
      background_background: 'classic', background_color: '#F5F0E8',
      padding: pad(120, 20, 120, 20),
      custom_css: allCSS,
      css_classes: 'ao-aura-section',
    }, [
      col(100, { align: 'center' }, [
        // Aura Background Layer
        text(`<div class="ao-aura-bg"><div class="ao-aura-blob ao-aura-1"></div><div class="ao-aura-blob ao-aura-2"></div></div>`, '', typo('typography', { f: 'Inter', s: 14 })),
        
        // Particle Layer
        text(`<div class="ao-particles">${particles}</div>`, '', typo('typography', { f: 'Inter', s: 14 })),

        // Source Icon
        text(`<div class="ao-source-wrap"><div class="ao-source-glow"></div><div class="ao-source-icon"></div></div>`, '', typo('typography', { f: 'Inter', s: 14 }), { ...anim('fadeInDown') }),

        // Content
        text(`<div class="ao-aura-content">
          <div style="display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:24px;">
            <div style="width:36px;height:1px;background:linear-gradient(90deg,transparent,${GOLD});"></div>
            <span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">Infinite Presence</span>
            <div style="width:36px;height:1px;background:linear-gradient(90deg,${GOLD},transparent);"></div>
          </div>
        </div>`, '', typo('typography', { f: 'Inter', s: 11 })),

        heading(`Step into the<br><span class="ao-shimmer-text">Energetic Field</span>`, 'h2', '#0d1117',
          { f: 'Playfair Display', s: 64, sm: 38, st: 52, w: 400, lh: 1.1, ls: -1 },
          { ...anim('fadeInUp', 'slow', 200) }),
          
        spacer(30),
        
        text(`<p style="max-width:640px;margin:0 auto;color:rgba(13,17,23,0.7);font-family:'Inter',sans-serif;font-size:18px;line-height:1.75;">
          Experience the subtle shift as you align with the ancient frequencies of the Siberian tradition. Beyond the physical, there is a field of pure potential awaiting your awakening.
        </p>`, '', typo('typography', { f: 'Inter', s: 18, sm: 16 }), { ...anim('fadeInUp', 'slow', 400) }),
        
        spacer(50),
        
        text(`<a href="#transformation" style="display:inline-flex;align-items:center;padding:18px 44px;background:#0d1117;color:#ffffff;font-family:'Inter',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;border-radius:4px;text-decoration:none;transition:all 0.3s;box-shadow:0 10px 30px rgba(13,17,23,0.1);">
          Discover Your Aura
        </a>`, '', typo('typography', { f: 'Inter', s: 12 }), { ...anim('fadeInUp', 'slow', 600) }),
      ])
    ]),
  ],
};

fs.writeFileSync('abhay-oyun-aura.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-aura.json');
