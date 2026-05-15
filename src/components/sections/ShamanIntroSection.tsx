"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const defaultStats = [
  { number: "5,000+", label: "Healed" },
  { number: "200+", label: "Ceremonies/Year" },
  { number: "30+", label: "Years" },
];

export default function ShamanIntroSection({ sanity }: { sanity?: Record<string, any> }) {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  const eyebrow = sanity?.eyebrow || 'The Shaman';
  const headingLines = sanity?.heading || ['30+ Years.', '50+ Countries.', 'One Mission.'];
  const description = sanity?.description || 'Born in Siberia and initiated into the shamanic path in 1991, Abhay Oyun has dedicated his life to preserving and sharing the ancient wisdom of his ancestors. Trained in the sacred traditions of the Altai Mountains, he bridges the seen and unseen worlds.\n\nHis mission is simple yet profound: to awaken humanity to the transformative power of nature-based spirituality.';
  const image = sanity?.image || '/AO 2.JPG';
  const imageCaption = sanity?.imageCaption || 'Guardian of Our Planet';
  const imageQuote = sanity?.imageQuote || 'Walk in Power. Walk in Light.';
  const stats = sanity?.stats || defaultStats;
  const primaryLabel = sanity?.primaryButton?.label || 'Book a Session';
  const primaryUrl = sanity?.primaryButton?.url || 'https://calendly.com/hurraymangalam/individualsessions';
  const secondaryLabel = sanity?.secondaryButton?.label || 'Learn More';
  const secondaryUrl = sanity?.secondaryButton?.url || '/about';

  return (
    <section ref={ref} className="shaman-intro-section" style={{ position: "relative", background: "#FBF9F5", overflow: "hidden", zIndex: 10 }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,160,74,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: -120, left: -120, width: 450, height: 450, background: "radial-gradient(circle, rgba(155,168,139,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(60px, 10vw, 140px) clamp(24px, 5vw, 80px)" }}>
        <div className="shaman-intro-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(40px, 8vw, 100px)", alignItems: "center" }}>
          <motion.div style={{ y: shouldReduce ? 0 : textY }} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduce ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: "clamp(20px, 3vh, 36px)" }}>
              <div style={{ width: 44, height: 1, background: "linear-gradient(to right, #C9A04A, transparent)" }} />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#A07D2E" }}>{eyebrow}</span>
            </div>
            <h2 style={{ margin: "0 0 clamp(24px, 4vh, 40px) 0", padding: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.02em", color: "#1F1B16", fontSize: "clamp(2.4rem, 7vw, 4.8rem)" }}>
              {(Array.isArray(headingLines) ? headingLines : [headingLines]).map((line: string, i: number, arr: string[]) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h2>
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(0.92rem, 1.1vw, 1.05rem)", lineHeight: 1.9, color: "rgba(31,27,22,0.6)", maxWidth: 580, marginBottom: "clamp(36px, 5vh, 52px)", fontWeight: 400, whiteSpace: "pre-line" }}>{description}</p>
            <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(201,160,74,0.15)", marginBottom: "clamp(36px, 5vh, 52px)" }}>
              {stats.map((s: any, i: number) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="stats-col" style={{ padding: "clamp(20px, 3vh, 30px)", borderRight: i < 2 ? "1px solid rgba(201,160,74,0.1)" : "none" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, background: "linear-gradient(135deg, #C9A04A, #A07D2E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.number}</div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(0.52rem, 0.75vw, 0.62rem)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(31,27,22,0.35)", marginTop: 8 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <Link href={primaryUrl} target="_blank"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 30px", background: "linear-gradient(135deg, #1F1B16, #2D2924)", color: "#FDFCFA", fontFamily: "'Cinzel', serif", fontSize: "clamp(0.65rem, 0.85vw, 0.72rem)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: 2, textDecoration: "none", boxShadow: "0 8px 28px rgba(31,27,22,0.15)", transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7.25" stroke="#C9A04A" strokeWidth="1.5" /><path d="M6 5l5 3-5 3V5z" fill="#C9A04A" /></svg>
                {primaryLabel}
              </Link>
              <Link href={secondaryUrl} style={{ display: "inline-flex", alignItems: "center", padding: "15px 30px", background: "transparent", border: "1px solid rgba(31,27,22,0.15)", color: "#1F1B16", fontFamily: "'Cinzel', serif", fontSize: "clamp(0.65rem, 0.85vw, 0.72rem)", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: 2, textDecoration: "none", transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                {secondaryLabel}
              </Link>
            </div>
          </motion.div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: -28, right: -28, width: "65%", height: "65%", background: "#C9A04A", opacity: 0.04, borderRadius: 2, zIndex: 0 }} />
            <div style={{ position: "absolute", bottom: -28, left: -28, width: "45%", height: "45%", background: "radial-gradient(circle, rgba(201,160,74,0.12) 0%, transparent 70%)", borderRadius: "50%", zIndex: 0 }} />
            <motion.div style={{ y: shouldReduce ? 0 : imgY, position: "relative", zIndex: 1 }} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ borderRadius: 2, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.1)", aspectRatio: "3/4", position: "relative", background: "#F5F1EA" }}>
                <img src={typeof image === 'string' ? image : '/AO 2.JPG'} alt="Abhay Oyun - Siberian Shaman" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(31,27,22,0.35) 0%, transparent 50%)" }} />
                <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 1, background: "#C9A04A" }} />
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A04A" }}>{imageCaption}</span>
                  </div>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", color: "#FDFCFA", fontStyle: "italic", lineHeight: 1.4, fontWeight: 400 }}>&ldquo;{imageQuote}&rdquo;</p>
                </div>
              </div>
            </motion.div>
            <motion.div style={{ position: "absolute", top: -20, left: -20, zIndex: 5 }} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}>
              <motion.div animate={shouldReduce ? {} : { y: [0, -8, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ opacity: 0.5 }}>
                <svg width="52" height="52" viewBox="0 0 100 100" fill="none" stroke="#C9A04A" strokeWidth="1.2"><circle cx="50" cy="50" r="45" /><polygon points="50,85 18,35 88,60 12,60 82,35" /></svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px) { .shaman-intro-grid { grid-template-columns: 1fr !important; gap: 48px !important; } } @media (max-width: 600px) { .stats-row { grid-template-columns: 1fr !important; gap: 24px; } .stats-col { border-right: none !important; border-bottom: 1px solid rgba(201,160,74,0.15); padding: 24px 0 !important; } } .shaman-intro-section a[href*="calendly"]:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(31,27,22,0.25) !important; } .shaman-intro-section a[href*="#about"]:hover { background: rgba(31,27,22,0.04) !important; border-color: rgba(31,27,22,0.3) !important; transform: translateY(-3px); }`}</style>
    </section>
  );
}
