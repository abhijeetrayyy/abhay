"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getPublishedTeachings } from "@/lib/data";
import { getSectionStyleClasses, SectionStylingData } from "@/lib/section-styling";

function TeachingCard({ teaching, accent = '#C9A04A' }: { teaching: any; accent?: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: 0.1 }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: "relative", borderRadius: 2, overflow: "hidden", background: "#FDFCFA", border: "1px solid rgba(31,27,22,0.06)", height: "100%", display: "flex", flexDirection: "column", boxShadow: hovered ? `0 16px 40px rgba(0,0,0,0.08), 0 0 0 1px ${accent}1A` : "0 4px 16px rgba(0,0,0,0.03)", transition: "all 0.4s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}>
      <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
        <img src={teaching.image || teaching.featured_image || "/sao-gallery-img3.jpg"} alt={teaching.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", transform: hovered ? "scale(1.08)" : "scale(1)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(31,27,22,0.3), transparent 60%)" }} />
        <span style={{ position: "absolute", bottom: 12, left: 12, fontFamily: "'Cinzel', serif", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: accent, background: "rgba(10,16,32,0.5)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: 2, border: `1px solid ${accent}26` }}>
          {teaching.category || teaching.service_type || 'Teaching'}
        </span>
      </div>
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.2rem", color: "#1F1B16", fontWeight: 500, margin: "0 0 10px", lineHeight: 1.3 }}>
          {teaching.title}
        </h3>
        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(31,27,22,0.55)", margin: "0 0 16px", flex: 1, fontWeight: 400 }}>
          {teaching.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(31,27,22,0.06)", paddingTop: 14 }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.08em", color: "rgba(31,27,22,0.4)" }}>
            {teaching.read_time_minutes || teaching.readTime || '5'} min read
          </span>
          <Link href={teaching.link || '/teachings'} style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", fontWeight: 600, color: accent, textDecoration: "none", letterSpacing: "0.08em", transition: "color 0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#A07D2E"} onMouseLeave={(e) => e.currentTarget.style.color = accent}>
            Read More →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeachingsSection({ sanity }: { sanity?: Record<string, any> & SectionStylingData }) {
  const [teachings, setTeachings] = useState<any[]>([]);
  useEffect(() => { getPublishedTeachings().then(setTeachings).catch(() => {}); }, []);
  const { style: sectionStyle, containerClass, accent } = getSectionStyleClasses(sanity?.sectionStyling);
  const accentColor = accent || '#C9A04A';

  const eyebrow = sanity?.eyebrow || 'Ancient Wisdom';
  const heading = sanity?.heading || 'Shamanic';
  const subheading = sanity?.subheading || 'Teachings';
  const items = sanity?.teachings || (teachings.length > 0 ? teachings : []);

  if (items.length === 0) return null;

  return (
    <section style={{ background: "#F5F1EA", overflow: "hidden", position: "relative", zIndex: 20, marginTop: "-1px", ...sectionStyle }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "60%", height: "50%", background: `radial-gradient(ellipse, ${accentColor}0A 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div className="teachings-wrapper" style={{ maxWidth: 1400, margin: "0 auto", padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 80px)" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ textAlign: "center", marginBottom: "clamp(40px, 6vh, 64px)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 18 }}>
            <div style={{ width: 40, height: 1, background: `linear-gradient(to right, transparent, ${accentColor})` }} />
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: accentColor }}>{eyebrow}</span>
            <div style={{ width: 40, height: 1, background: `linear-gradient(to left, transparent, ${accentColor})` }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "inherit", margin: 0, letterSpacing: "-0.02em" }}>
            {heading}<br /><span style={{ fontStyle: "italic", color: "rgba(31,27,22,0.3)" }}>{subheading}</span>
          </h2>
        </motion.div>
        <div className="teachings-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(14px, 2vw, 24px)" }}>
          {items.slice(0, 6).map((t: any, i: number) => (<TeachingCard key={t._id || t.title || i} teaching={t} accent={accentColor} />))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/teachings" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.75rem", fontWeight: 600, color: accentColor, textDecoration: "none", borderBottom: `1px solid ${accentColor}4D`, paddingBottom: 4, letterSpacing: "0.1em", transition: "all 0.3s" }}>
            View All Teachings →
          </Link>
        </motion.div>
      </div>
      <style>{`@media (max-width: 1024px) { .teachings-wrapper { padding: 60px 24px !important; } .teachings-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 600px) { .teachings-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
