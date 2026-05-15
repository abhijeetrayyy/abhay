"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const defaultPaths = [
  { id: "tengri", title: "The SAMPO System", subtitle: "Tengri — Sky Father", description: "The foundational energy mastery system. Learn to accumulate, protect, and direct your vital force using ancient Siberian techniques passed down from the celestial realms.", video: "/paths/tengri-sky-father.mp4", link: "/teachings", color: "#C9A04A", number: "01" },
  { id: "umai", title: "Sacred Healing", subtitle: "Umai — Earth Mother", description: "Private shamanic healing sessions rooted in the nurturing wisdom of Umai. Soul retrieval, energy clearing, and deep ancestral healing for those ready to transform.", video: "/paths/umai-earth-mother.mp4", link: "https://calendly.com/hurraymangalam/individualsessions", color: "#E8CD7A", number: "02" },
  { id: "ulgen", title: "Shamanic Training", subtitle: "Ulgen — Spirit of Light", description: "A structured path to becoming a practitioner. Level 1 certification through intensive residential immersions, drum journeying, and ceremonial leadership.", video: "/paths/ulgen-spirit-light.mp4", link: "/events", color: "#8B7E6E", number: "03" },
  { id: "erlik", title: "Shadow & Ancestral Work", subtitle: "Erlik — Lord of Depths", description: "Deep transformational work for those ready to face the shadow. Ancestral lineage healing, soul fragment recovery, and karmic release through guided ceremonies.", video: "/paths/erlik-lord-depths.mp4", link: "/teachings", color: "#A07D2E", number: "04" },
];

function PathCard({ path, index }: { path: any; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setInView(true); videoRef.current?.play(); } else { setInView(false); videoRef.current?.pause(); } }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const isExternal = path.link?.startsWith("http");

  return (
    <motion.div ref={cardRef} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      style={{ position: "relative", borderRadius: 2, overflow: "hidden", cursor: "pointer", minHeight: 380, background: "#0A1020", border: "1px solid rgba(255,255,255,0.03)",
        boxShadow: hovered ? "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,160,74,0.12)" : "0 20px 50px rgba(0,0,0,0.3)", transition: "box-shadow 0.5s ease, transform 0.5s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}>
      <video ref={videoRef} src={path.previewVideoUrl || path.video} loop muted playsInline preload="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: hovered ? "saturate(1.1) brightness(0.6)" : "saturate(0.9) brightness(0.7)", transition: "filter 0.6s ease, transform 0.6s ease", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
      <div style={{ position: "absolute", inset: 0, background: hovered ? "linear-gradient(to top, rgba(10,16,32,0.65) 0%, rgba(10,16,32,0.1) 40%, rgba(10,16,32,0.25) 100%)" : "linear-gradient(to top, rgba(10,16,32,0.65) 0%, rgba(10,16,32,0.15) 50%, rgba(10,16,32,0.05) 100%)", transition: "background 0.6s ease" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${path.color}, transparent)`, opacity: hovered ? 0.5 : 0.15, transition: "opacity 0.5s ease" }} />
      <div style={{ position: "absolute", top: 20, right: 24, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "3.5rem", fontWeight: 200, color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none" }}>{path.number || index + 1}</div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(20px, 3vw, 32px)" }}>
        <motion.div animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }} transition={{ duration: 0.3 }} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(201,160,74,0.12)", border: "1px solid rgba(201,160,74,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M4 2.5l6 3.5-6 3.5V2.5z" fill="#C9A04A" /></svg>
          </motion.div>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.5rem", color: "rgba(201,160,74,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Preview ceremony</span>
        </motion.div>
        <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: path.color, display: "block", marginBottom: 6 }}>{path.subtitle}</span>
        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 400, color: "#FDFCFA", margin: "0 0 10px 0", lineHeight: 1.15 }}>{path.title}</h3>
        <motion.p animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0, marginBottom: hovered ? 18 : 0 }} transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.82rem", lineHeight: 1.65, color: "rgba(255,255,255,0.5)", maxWidth: 360, overflow: "hidden" }}>
          {path.description}
        </motion.p>
        <motion.div animate={{ opacity: hovered ? 1 : 0.5 }} transition={{ duration: 0.3 }}>
          {isExternal ? (
            <a href={path.link} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Cinzel', serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: path.color, textDecoration: "none", borderBottom: "1px solid", borderColor: hovered ? path.color : "transparent", paddingBottom: 3, transition: "border-color 0.3s ease" }}>
              Explore path <svg width="13" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 4h12M10 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          ) : (
            <Link href={path.link}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Cinzel', serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: path.color, textDecoration: "none", borderBottom: "1px solid", borderColor: hovered ? path.color : "transparent", paddingBottom: 3, transition: "border-color 0.3s ease" }}>
              Explore path <svg width="13" height="8" viewBox="0 0 14 8" fill="none"><path d="M1 4h12M10 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PathsSection({ sanity }: { sanity?: Record<string, any> }) {
  const heading = sanity?.heading || 'Choose Your';
  const subheading = sanity?.subheading || 'Path to Power';
  const description = sanity?.description || 'Four sacred doors into the ancient Siberian tradition. Each path is guarded by a spirit — choose the one that calls to you.';

  const sanityPaths = sanity?.paths;
  const paths = sanityPaths && sanityPaths.length > 0
    ? sanityPaths.map((sp: any, i: number) => {
        const def = defaultPaths[i] || defaultPaths[0];
        return {
          id: sp._key || sp.title?.toLowerCase().replace(/\s+/g, '-') || def.id,
          title: sp.title || def.title,
          subtitle: sp.subtitle || def.subtitle,
          description: sp.description || def.description,
          link: sp.link || def.link,
          color: sp.color || def.color,
          number: sp.number || String(i + 1).padStart(2, '0'),
          previewVideoUrl: sp.previewVideoUrl || null,
          video: sp.previewVideoUrl || def.video,
        };
      })
    : defaultPaths;

  if (paths.length === 0) return null;

  return (
    <section style={{ position: "relative", background: "#FBF9F5", overflow: "hidden", padding: "clamp(60px, 8vw, 120px) 0" }}>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "60%", background: "radial-gradient(ellipse, rgba(201,160,74,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(20px, 5vw, 80px)" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ textAlign: "center", marginBottom: "clamp(36px, 6vh, 64px)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: "linear-gradient(to right, transparent, #C9A04A)" }} />
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "#A07D2E" }}>The Four Paths</span>
            <div style={{ width: 40, height: 1, background: "linear-gradient(to left, transparent, #C9A04A)" }} />
          </div>
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 200, fontSize: "clamp(2.2rem, 5vw, 4rem)", color: "#1F1B16", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            {heading}<br />
            <span style={{ fontStyle: "italic", backgroundImage: "linear-gradient(135deg, #F9D58B, #C9A04A, #A07D2E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{subheading}</span>
          </h2>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(0.9rem, 1.2vw, 1rem)", color: "rgba(31,27,22,0.5)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.8, fontWeight: 400 }}>{description}</p>
        </motion.div>
        <div className="paths-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "clamp(12px, 1.5vw, 20px)" }}>
          {paths.map((path: any, i: number) => (<PathCard key={path.id || i} path={{ ...path, number: path.number || String(i + 1).padStart(2, '0') }} index={i} />))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          style={{ textAlign: "center", marginTop: "clamp(32px, 4vh, 44px)", fontFamily: "'Cinzel', serif", fontSize: "0.58rem", color: "rgba(31,27,22,0.2)", letterSpacing: "0.15em" }}>
          Hover to preview · Click to explore the path
        </motion.p>
      </div>
      <style>{`@media (max-width: 1200px) { .paths-grid { grid-template-columns: repeat(2, 1fr) !important; } .paths-grid > * { min-height: 320px !important; } } @media (max-width: 700px) { .paths-grid { grid-template-columns: 1fr !important; } .paths-grid > * { min-height: 280px !important; } }`}</style>
    </section>
  );
}
