"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { getSectionStyleClasses, SectionStylingData } from "@/lib/section-styling";

const defaultMilestones = [
  { year: "2004", loc: "Japan — Mount Fuji", text: "2,500 people gathered at the base of Mount Fuji under Abhay's guidance. Shaman chiefs from North America and Asian tribes united in ceremony for the first time.", img: "/sao-gallery-img4.jpg" },
  { year: "2007", loc: "South Russia", text: "Major peace conferences and large spiritual gatherings where prayers and sacred rituals were held to bring peace and healing to the war-torn region.", img: "/sao-gallery-img2.jpg" },
  { year: "2015", loc: "Chile", text: "When earthquakes, volcanic ash, and severe drought converged on Chile, Abhay led ceremonies to shift the collective energetic field and support recovery.", img: "/sao-gallery-img8.jpg" },
  { year: "2022", loc: "Ukraine", text: "During the New Year's Retreat 2021–2022, Abhay received a vision of the invasion. Sacred ceremonies were organized across Europe to focus healing energy on the region.", img: "/healing-global-harmony.jpg" },
];

export default function TransformationSection({ sanity }: { sanity?: Record<string, any> & SectionStylingData }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const shamY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const { style: sectionStyle, containerClass, accent } = getSectionStyleClasses(sanity?.sectionStyling);
  const accentColor = accent || '#C9A04A';

  const eyebrow = sanity?.eyebrow || 'Global Impact';
  const quote = sanity?.quote || 'When you reconnect with your wild nature, trauma doesn\'t just heal — it transforms into power.';
  const quoteAttr = sanity?.quoteAttribution || '— Shaman Abhay Oyun';
  const description = sanity?.description || 'Called the World Shaman and Guardian of Our Planet, Abhay Oyun has dedicated his life to responding to global crises — natural disasters, wars, humanitarian emergencies — through the ancient lens of shamanic intervention.';
  const milestones = sanity?.milestones || defaultMilestones;

  return (
    <section ref={ref} id="transformation" className="transformation-section" style={{ position: "relative", background: "#FBF9F5", marginTop: "-1px", zIndex: 20, ...sectionStyle }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <motion.div style={{ position: "absolute", inset: "-10% 0", y: bgY }}>
          <Image src="/forest-mist.png" alt="" fill style={{ objectFit: "cover", opacity: 0.12 }} sizes="100vw" />
        </motion.div>
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, rgba(251,249,245,0.97) 0%, rgba(251,249,245,0.7) 50%, rgba(251,249,245,0.95) 100%)`, zIndex: 3 }} />
        <motion.div style={{ position: "absolute", right: "4%", bottom: 0, width: "32%", height: "85%", y: shamY, opacity: 0.06 }}>
          <Image src="/abhayoyun-banner-top.png" alt="" fill style={{ objectFit: "contain", objectPosition: "bottom" }} sizes="30vw" />
        </motion.div>
      </div>
      <div className="transform-wrapper" style={{ width: "100%", maxWidth: 1440, margin: "0 auto", padding: "clamp(60px, 8vw, 120px) clamp(24px, 6vw, 80px) clamp(80px, 10vw, 160px)", position: "relative", zIndex: 10 }}>
        <div className="transform-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div className="sticky-quote" style={{ position: "sticky", top: 140, alignSelf: "start" }}>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
                <div style={{ width: 32, height: 1, background: accentColor }} />
                <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase" as const, color: accentColor }}>{eyebrow}</span>
              </div>
              <blockquote style={{ margin: "0 0 48px 0" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "clamp(1.8rem, 5.5vw, 3.2rem)", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0 0 24px 0", fontWeight: 400, color: "inherit" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <footer style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: "rgba(31,27,22,0.35)" }}>{quoteAttr}</footer>
              </blockquote>
              <div style={{ paddingTop: 36, borderTop: "1px solid rgba(31,27,22,0.05)" }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.92rem", lineHeight: 1.95, color: "rgba(31,27,22,0.55)", margin: 0, fontWeight: 400 }}>{description}</p>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.1, delay: 0.15 }}
            style={{ position: "relative", paddingLeft: 30, borderLeft: "1px solid rgba(31,27,22,0.06)" }}>
            {milestones.map((m: any, i: number) => (
              <motion.div key={m.year || i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }} style={{ marginBottom: i < milestones.length - 1 ? 48 : 0, position: "relative" }}>
                <div style={{ position: "absolute", left: -38, top: 7, width: 14, height: 14, borderRadius: "50%", border: `1.5px solid ${accentColor}4D`, background: "#FBF9F5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: accentColor }} />
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 12 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.4rem", color: accentColor, fontWeight: 400 }}>{m.year}</span>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "rgba(31,27,22,0.3)" }}>{m.location || m.loc}</span>
                </div>
                <motion.div initial={{ boxShadow: "0 8px 24px rgba(31,27,22,0.06)" }} whileHover={{ boxShadow: `0 18px 44px ${accentColor}1F`, borderColor: `${accentColor}40` }}
                  transition={{ duration: 0.4 }}
                  style={{ marginBottom: 18, borderRadius: 2, overflow: "hidden", width: "100%", height: 180, position: "relative", border: "1px solid rgba(31,27,22,0.04)", background: "#FDFCFA", cursor: "pointer" }}>
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.7, ease: "easeOut" }} style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                    <Image src={m.image || m.img} alt={m.location || m.loc} fill style={{ objectFit: "cover", filter: "brightness(0.95)" }} />
                  </motion.div>
                </motion.div>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.85rem", lineHeight: 1.85, color: "rgba(31,27,22,0.55)", margin: 0, fontWeight: 400 }}>{m.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
