"use client";
import { motion } from "framer-motion";
import { getSectionStyleClasses, SectionStylingData } from "@/lib/section-styling";

const defaultBenefits = [
  "Live introduction to the SAMPO psycho-energetic system",
  "Discover your unique energy type and its strengths",
  "First steps in shamanic self-healing techniques",
  "Live Q&A with Shaman Abhay Oyun",
];

export default function WebinarCTASection({ sanity }: { sanity?: Record<string, any> & SectionStylingData }) {
  const { style: sectionStyle, containerClass, accent } = getSectionStyleClasses(sanity?.sectionStyling);
  const accentColor = accent || '#C9A04A';

  const eyebrow = sanity?.eyebrow || 'Free Webinar';
  const heading = sanity?.heading || 'Your Transformation';
  const subheading = sanity?.subheading || 'Starts Free';
  const description = sanity?.description || 'Join thousands of people who made their first shift in a single free masterclass. No experience required — only willingness.';
  const benefits = sanity?.benefits || defaultBenefits;
  const card = sanity?.card || {};
  const cardLabel = card.label || 'Next Session';
  const cardDate = card.date || 'March 19, 2025';
  const cardMeta = card.meta || 'Online · Free Entry · Global';
  const cardQuote = card.quote || 'The first step costs nothing but the courage to begin.';
  const primaryLabel = card.primaryButton || 'Reserve Your Spot — Free →';
  const primaryUrl = card.primaryUrl || 'https://forms.gle/jEDaUrKwbyHd8WvUA';
  const secondaryLabel = card.secondaryButton || 'Book Private 1-on-1 Session';
  const secondaryUrl = card.secondaryUrl || 'https://calendly.com/hurraymangalam/individualsessions';

  return (
    <section style={{ background: "#FBF9F5", position: "relative", marginTop: "-1px", zIndex: 20, ...sectionStyle }}>
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 70% 50%, ${accentColor}0F 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div className="webinar-wrapper" style={{ maxWidth: 1440, margin: "0 auto", padding: "140px 80px", position: "relative", zIndex: 5 }}>
        <div className="webinar-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ width: 32, height: 1, background: accentColor }} />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" as const, color: accentColor }}>{eyebrow}</span>
            </div>
            <h2 style={{ margin: "0 0 28px 0", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(2rem, 7vw, 3.8rem)", letterSpacing: "-0.02em", color: "inherit", lineHeight: 0.95 }}>
              {heading}<br />
              <span style={{ fontStyle: "italic", background: `linear-gradient(135deg, #E8CD7A, ${accentColor}, #A07D2E)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{subheading}</span>
            </h2>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(31,27,22,0.6)", maxWidth: 440, marginBottom: 44, fontWeight: 400 }}>{description}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 18 }}>
              {benefits.map((b: string, i: number) => (
                <motion.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", border: `1px solid ${accentColor}4D`, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill={accentColor}><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" /></svg>
                  </div>
                  <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.9rem", color: "rgba(31,27,22,0.6)", lineHeight: 1.5, fontWeight: 400 }}>{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
            <div style={{ background: "#FDFCFA", border: "1px solid rgba(31,27,22,0.06)", borderRadius: 2, padding: "clamp(28px, 4vw, 48px)", position: "relative", overflow: "hidden", boxShadow: "0 30px 60px rgba(31,27,22,0.05)" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${accentColor}66, transparent)` }} />
              <div style={{ position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 280, height: 180, background: `radial-gradient(ellipse, ${accentColor}0F, transparent 70%)`, pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <div style={{ marginBottom: 26 }}>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: accentColor, marginBottom: 8 }}>{cardLabel}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", color: "#1F1B16", fontWeight: 400 }}>{cardDate}</div>
                  <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.85rem", color: "rgba(31,27,22,0.45)", marginTop: 8, fontWeight: 400 }}>{cardMeta}</div>
                </div>
                <div style={{ borderTop: "1px solid rgba(31,27,22,0.06)", paddingTop: 26, marginBottom: 30 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", color: "rgba(31,27,22,0.6)", lineHeight: 1.6, fontWeight: 400 }}>&ldquo;{cardQuote}&rdquo;</div>
                </div>
                <a href={primaryUrl} target="_blank" rel="noopener noreferrer"
                  className="webinar-primary-btn"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "15px", borderRadius: 2, textDecoration: "none", marginBottom: 8 }}>
                  {primaryLabel}
                </a>
                <a href={secondaryUrl} target="_blank" rel="noopener noreferrer"
                  className="webinar-secondary-btn"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "15px", borderRadius: 2, textDecoration: "none" }}>
                  {secondaryLabel}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
