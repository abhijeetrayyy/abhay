// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 02: HEADER / NAVIGATION
// The sacred gateway. First impression after scroll.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Light, frosted glass aesthetic
// - Subtle, refined animations
// - Sacred but not overwhelming
// - "You belong here" from the first moment
// - Sticky with smooth scroll behavior
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Header Styles & Animations
// ═══════════════════════════════════════════════════════════════
const HEADER_CSS = `
// ── Header Base ──
selector.ao-header-wrap {
  position: sticky !important;
  top: 0;
  z-index: 1000;
  width: 100%;
}

selector.ao-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 88px;
  padding: 0 48px;
  background: rgba(255, 253, 248, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(196, 148, 42, 0.08);
  transition: all 0.4s ease;
}

/* Scroll state - slightly more opaque */
.ao-header-scrolled .ao-header {
  background: rgba(255, 253, 248, 0.98);
  box-shadow: 0 4px 30px rgba(44, 36, 22, 0.06);
}

// ── Logo ──
.ao-logo {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  flex-shrink: 0;
}

.ao-logo-icon {
  width: 42px;
  height: 42px;
  background-image: url(${P.SITE}/icon1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(0) saturate(100%) sepia(50%) saturate(450%) hue-rotate(5deg) brightness(0.85);
  transition: transform 0.3s ease;
}

.ao-logo:hover .ao-logo-icon {
  transform: scale(1.05);
}

.ao-logo-text {
  font-family: 'Cinzel', serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: ${P.CHARCOAL};
  line-height: 1;
}

.ao-logo-text span {
  color: ${P.GOLD};
}

.ao-logo-sub {
  font-family: 'Lato', sans-serif;
  font-size: 7px;
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
  margin-top: 4px;
  opacity: 0.8;
}

// ── Navigation ──
.ao-nav {
  display: flex;
  align-items: center;
  gap: 44px;
}

.ao-nav-link {
  font-family: 'Lato', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${P.BROWN};
  text-decoration: none;
  position: relative;
  padding: 4px 0;
  transition: color 0.3s ease;
}

.ao-nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ao-nav-link:hover {
  color: ${P.GOLD};
}

.ao-nav-link:hover::after {
  width: 100%;
}

// ── Right Section ──
.ao-header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.ao-social {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 8px;
}

.ao-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${P.PARCHMENT};
  color: ${P.STONE_GRAY};
  font-family: 'Lato', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.ao-social-link:hover {
  background: ${P.GOLD};
  color: #fff;
  transform: translateY(-2px);
}

.ao-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  color: #fff;
  font-family: 'Cinzel', serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  box-shadow: 0 4px 20px rgba(196, 148, 42, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ao-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(196, 148, 42, 0.45);
}

.ao-cta-icon {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.ao-cta:hover .ao-cta-icon {
  transform: translateX(3px);
}

// ── Mobile Menu Button ──
.ao-mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: ${P.PARCHMENT};
  border-radius: 8px;
  cursor: pointer;
  padding: 8px;
}

.ao-mobile-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: ${P.BROWN};
  border-radius: 2px;
  transition: all 0.3s ease;
}

// ── Mobile Navigation ──
.ao-mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${P.IVORY};
  border-bottom: 1px solid rgba(196, 148, 42, 0.1);
  padding: 24px;
  box-shadow: 0 8px 40px rgba(44, 36, 22, 0.08);
}

.ao-mobile-nav.active {
  display: block;
  animation: slideDown 0.3s ease;
}

.ao-mobile-nav .ao-nav-link {
  display: block;
  padding: 14px 0;
  font-size: 13px;
  border-bottom: 1px solid ${P.DUNE};
}

.ao-mobile-nav .ao-nav-link:last-child {
  border-bottom: none;
}

// ── Animations ──
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

// ── Responsive ──
@media (max-width: 1024px) {
  .ao-nav { gap: 28px; }
  .ao-nav-link { font-size: 10px; letter-spacing: 1.5px; }
  .ao-social { display: none; }
}

@media (max-width: 767px) {
  .ao-header {
    min-height: 68px;
    padding: 0 20px;
  }

  .ao-nav { display: none; }
  .ao-social { display: none; }
  .ao-cta { display: none; }

  .ao-mobile-toggle { display: flex; }

  .ao-logo-text { font-size: 18px; }
  .ao-logo-sub { display: none; }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD HEADER SECTION
// ═══════════════════════════════════════════════════════════════
function buildHeaderSection() {
  return sec({
    layout: 'full_width',
    stretch_section: 'section-stretched',

    // Transparent background - the CSS handles the styling
    background_background: 'classic',
    background_color: 'transparent',

    // No padding - full width
    padding: pad(0, 0, 0, 0),
    padding_mobile: pad(0, 0, 0, 0),

    // Z-index for sticky behavior
    z_index: 1000,

    // Add wrapper class
    css_classes: 'ao-header-wrap',

    // Sacred CSS
    custom_css: HEADER_CSS,
  }, [
    col(100, {
      content_position: 'center',
      padding: pad(0, 0, 0, 0)
    }, [
      // ── Header HTML ──
      text(`<div class="ao-header">
  <!-- Logo -->
  <a href="/" class="ao-logo">
    <div class="ao-logo-icon"></div>
    <div>
      <div class="ao-logo-text">ABHAY <span>OYUN</span></div>
      <div class="ao-logo-sub">Siberian Shamanism</div>
    </div>
  </a>

  <!-- Navigation -->
  <nav class="ao-nav">
    <a href="#about" class="ao-nav-link">About</a>
    <a href="#teachings" class="ao-nav-link">Teachings</a>
    <a href="#events" class="ao-nav-link">Events</a>
    <a href="#journey" class="ao-nav-link">Journey</a>
  </nav>

  <!-- Right Section -->
  <div class="ao-header-right">
    <!-- Social Links -->
    <div class="ao-social">
      <a href="https://www.instagram.com/abhayoyun/" target="_blank" class="ao-social-link" title="Instagram">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a href="https://www.youtube.com/@earthforpeace" target="_blank" class="ao-social-link" title="YouTube">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2C3.12 12 12 12 12 12s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 2.78 2.78 0 0 0-1.94-2C21.12 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2C3.12 12 12 12 12 12s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A2.78 2.78 0 0 0 23 9.86z"></path>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"></polygon>
        </svg>
      </a>
      <a href="https://wa.me/12122561366" target="_blank" class="ao-social-link" title="WhatsApp">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>

    <!-- CTA Button -->
    <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="ao-cta">
      Begin Your Journey
      <span class="ao-cta-icon">→</span>
    </a>

    <!-- Mobile Toggle -->
    <div class="ao-mobile-toggle" onclick="this.classList.toggle('active'); document.querySelector('.ao-mobile-nav').classList.toggle('active');">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <!-- Mobile Navigation -->
  <div class="ao-mobile-nav">
    <a href="#about" class="ao-nav-link">About</a>
    <a href="#teachings" class="ao-nav-link">Teachings</a>
    <a href="#events" class="ao-nav-link">Events</a>
    <a href="#journey" class="ao-nav-link">Journey</a>
    <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" class="ao-nav-link" style="color:${P.GOLD};">Begin Your Journey</a>
  </div>
</div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        custom_css: 'selector { width: 100%; }'
      }),
    ])
  ]);
}

module.exports = { buildHeaderSection };
