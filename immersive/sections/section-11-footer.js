// ═══════════════════════════════════════════════════════════════
// IMMERSIVE THEME — SECTION 11: FOOTER
// Sacred closure. Until we meet again.
// ═══════════════════════════════════════════════════════════════
//
// VISION:
// - Warm, grounding footer that provides closure
// - Dark earth tones for visual anchor
// - Essential links and contact info
// - Social presence
// - "Until we meet again" feeling
// - Copyright and legal
//
// ═══════════════════════════════════════════════════════════════

const { pad, typo, sec, col, w, heading, text, btn, spacer, img, anim, PALETTE: P } = require('../helpers');

// ═══════════════════════════════════════════════════════════════
// CUSTOM CSS — Footer Styles
// ═══════════════════════════════════════════════════════════════
const FOOTER_CSS = `
// ── Footer Container ──
.footer-section {
  position: relative;
  background: ${P.CHARCOAL};
  color: ${P.STONE_GRAY};
}

// ── Decorative Top Border ──
.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, ${P.GOLD}, transparent);
  position: relative;
}

.footer-divider::before {
  content: '✦';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: ${P.CHARCOAL};
  padding: 0 20px;
  color: ${P.GOLD};
  font-size: 12px;
}

// ── Footer Main Content ──
.footer-main {
  padding: 80px 0 60px;
}

// ── Footer Grid ──
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 48px;
}

// ── Brand Column ──
.footer-brand {
  padding-right: 32px;
}

.footer-logo {
  font-family: 'Cinzel', serif;
  font-size: 28px;
  font-weight: 600;
  color: ${P.IVORY};
  margin-bottom: 16px;
  letter-spacing: 1px;
}

.footer-tagline {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 1.9;
  color: ${P.STONE_GRAY};
  margin-bottom: 24px;
  max-width: 280px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.footer-social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 253, 248, 0.08);
  border: 1px solid rgba(255, 253, 248, 0.1);
  color: ${P.STONE_GRAY};
  text-decoration: none;
  transition: all 0.4s ease;
}

.footer-social-link:hover {
  background: ${P.GOLD};
  border-color: ${P.GOLD};
  color: ${P.CHARCOAL};
  transform: translateY(-3px);
}

.footer-social-link svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

// ── Navigation Columns ──
.footer-nav-title {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${P.IVORY};
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 253, 248, 0.1);
}

.footer-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-nav-item {
  margin-bottom: 12px;
}

.footer-nav-link {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: ${P.STONE_GRAY};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.footer-nav-link::before {
  content: '→';
  position: absolute;
  left: -16px;
  opacity: 0;
  color: ${P.GOLD};
  transition: all 0.3s ease;
  transform: translateX(-4px);
}

.footer-nav-link:hover {
  color: ${P.GOLD};
  padding-left: 8px;
}

.footer-nav-link:hover::before {
  opacity: 1;
  transform: translateX(0);
}

// ── Contact Column ──
.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-contact-icon {
  width: 20px;
  height: 20px;
  color: ${P.GOLD};
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-contact-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

.footer-contact-text {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: ${P.STONE_GRAY};
  line-height: 1.6;
}

.footer-contact-text a {
  color: ${P.STONE_GRAY};
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-contact-text a:hover {
  color: ${P.GOLD};
}

// ── Newsletter Column ──
.footer-newsletter-text {
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  line-height: 1.8;
  color: ${P.STONE_GRAY};
  margin-bottom: 20px;
}

.footer-newsletter-form {
  display: flex;
  gap: 8px;
}

.footer-newsletter-input {
  flex: 1;
  padding: 14px 16px;
  background: rgba(255, 253, 248, 0.06);
  border: 1px solid rgba(255, 253, 248, 0.12);
  border-radius: 8px;
  color: ${P.IVORY};
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  outline: none;
  transition: all 0.3s ease;
}

.footer-newsletter-input::placeholder {
  color: ${P.STONE_GRAY};
}

.footer-newsletter-input:focus {
  border-color: ${P.GOLD};
  background: rgba(255, 253, 248, 0.08);
}

.footer-newsletter-btn {
  padding: 14px 20px;
  background: linear-gradient(135deg, ${P.GOLD}, ${P.GOLD_LIGHT});
  border: none;
  border-radius: 8px;
  color: ${P.CHARCOAL};
  font-family: 'Cinzel', serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.4s ease;
  white-space: nowrap;
}

.footer-newsletter-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(196, 148, 42, 0.35);
}

// ── Footer Bottom ──
.footer-bottom {
  padding: 28px 0;
  border-top: 1px solid rgba(255, 253, 248, 0.08);
}

.footer-bottom-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-copyright {
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: ${P.STONE_GRAY};
}

.footer-copyright a {
  color: ${P.GOLD};
  text-decoration: none;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.footer-legal-link {
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  color: ${P.STONE_GRAY};
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-legal-link:hover {
  color: ${P.IVORY};
}

// ── Mystical Bottom Element ──
.footer-mystical {
  text-align: center;
  padding: 24px 0 0;
}

.footer-mystical-text {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${P.STONE_GRAY};
  opacity: 0.6;
}

.footer-mystical-symbol {
  font-size: 16px;
  color: ${P.GOLD};
  margin-bottom: 8px;
  opacity: 0.4;
}

// ── Responsive ──
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .footer-brand {
    grid-column: span 2;
    padding-right: 0;
  }
}

@media (max-width: 767px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .footer-brand {
    grid-column: span 1;
    text-align: center;
  }

  .footer-tagline {
    max-width: 100%;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-nav-title {
    text-align: center;
  }

  .footer-nav-list {
    text-align: center;
  }

  .footer-contact-item {
    justify-content: center;
    text-align: left;
  }

  .footer-newsletter-form {
    flex-direction: column;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-legal {
    justify-content: center;
  }
}
`;

// ═══════════════════════════════════════════════════════════════
// BUILD FOOTER SECTION
// ═══════════════════════════════════════════════════════════════
function buildFooterSection() {
  return sec({
    layout: 'full_width',
    background_background: 'classic',
    background_color: P.CHARCOAL,
    padding: pad(0, 80, 0, 80),
    padding_mobile: pad(0, 24, 0, 24),
    padding_tablet: pad(0, 40, 0, 40),
    z_index: 10,
    custom_css: FOOTER_CSS,
    css_classes: 'footer-section',
  }, [
    // ── Top Decorative Divider ──
    col(100, { content_position: 'center', padding: pad(0, 0, 0, 0) }, [
      text(`<div class="footer-divider"></div>`, '', typo('typography', { f: 'Lato', s: 12 }), {
        ...anim('fadeIn', 'slow'),
      }),
    ]),

    // ── Main Footer Content ──
    col(100, { content_position: 'top' }, [
      text(`<div class="footer-main">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <div class="footer-logo">Abhay Oyun</div>
            <p class="footer-tagline">
              Siberian Shaman & Guardian of Our Planet. Guiding seekers toward wild healing, inner peace, and reconnection with nature's ancient wisdom.
            </p>
            <div class="footer-social">
              <a href="https://www.instagram.com/earthforpeace/" target="_blank" class="footer-social-link" title="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.070 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.youtube.com/@earthforpeace" target="_blank" class="footer-social-link" title="YouTube">
                <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 2.78 2.78 0 0 0-1.94-2C21.12 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2 2.78 2.78 0 0 0-1.94-2C21.12 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2A2.78 2.78 0 0 0 1 9.86a2.78 2.78 0 0 0 1.94 2c1.71.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2A2.78 2.78 0 0 0 23 9.86z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
              </a>
              <a href="https://www.facebook.com/abhayoyun0/" target="_blank" class="footer-social-link" title="Facebook">
                <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <!-- Explore Column -->
          <div class="footer-nav">
            <div class="footer-nav-title">Explore</div>
            <ul class="footer-nav-list">
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Home</a></li>
              <li class="footer-nav-item"><a href="#about" class="footer-nav-link">About Abhay</a></li>
              <li class="footer-nav-item"><a href="#teachings" class="footer-nav-link">Teachings</a></li>
              <li class="footer-nav-item"><a href="#events" class="footer-nav-link">Events</a></li>
              <li class="footer-nav-item"><a href="#gallery" class="footer-nav-link">Gallery</a></li>
            </ul>
          </div>

          <!-- Learn Column -->
          <div class="footer-nav">
            <div class="footer-nav-title">Learn</div>
            <ul class="footer-nav-list">
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Free Webinar</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">SAMPO System</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Sound Medicine</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">YouTube Channel</a></li>
              <li class="footer-nav-item"><a href="#" class="footer-nav-link">Blog</a></li>
            </ul>
          </div>

          <!-- Contact Column -->
          <div class="footer-contact">
            <div class="footer-nav-title">Connect</div>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div class="footer-contact-text">
                <a href="mailto:contact@earthforpeace.com">contact@earthforpeace.com</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div class="footer-contact-text">
                <a href="https://wa.me/1234567890" target="_blank">WhatsApp</a>
              </div>
            </div>
            <div class="footer-contact-item">
              <div class="footer-contact-icon">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="footer-contact-text">
                Serving worldwide through sacred ceremonies and online sessions
              </div>
            </div>
          </div>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), {
        ...anim('fadeInUp', 'slow', 100),
      }),
    ]),

    // ── Footer Bottom ──
    col(100, { content_position: 'top' }, [
      text(`<div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="footer-copyright">
            © ${new Date().getFullYear()} <a href="#">Abhay Oyun</a>. All rights reserved. Crafted with sacred intention.
          </div>
          <div class="footer-legal">
            <a href="#" class="footer-legal-link">Privacy Policy</a>
            <a href="#" class="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>`, '', typo('typography', { f: 'Lato', s: 12 }), {
        ...anim('fadeInUp', 'slow', 200),
      }),
    ]),

    // ── Mystical Closing ──
    col(100, { content_position: 'center' }, [
      text(`<div class="footer-mystical">
        <div class="footer-mystical-symbol">✦ ✦ ✦</div>
        <div class="footer-mystical-text">Until We Meet Again</div>
      </div>`, '', typo('typography', { f: 'Cinzel', s: 11 }), {
        ...anim('fadeInUp', 'slow', 300),
      }),
    ]),
  ]);
}

module.exports = { buildFooterSection };
