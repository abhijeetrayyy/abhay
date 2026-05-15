"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";

const defaultReels = [
  { src: "/IMG_1651.MOV", label: "Shamanic Ceremony", platform: "Instagram", views: "24K", duration: "0:58", link: "https://www.instagram.com/earthforpeace/" },
  { src: "/IMG_1652.MOV", label: "Healing Ritual Fire", platform: "Instagram", views: "18K", duration: "1:12", link: "https://www.instagram.com/earthforpeace/" },
  { src: "/IMG_1651.MOV", label: "SAMPO Teaching", platform: "YouTube", views: "41K", duration: "2:34", link: "https://www.youtube.com/@earthforpeace" },
  { src: "/IMG_1652.MOV", label: "Sacred Drum Journey", platform: "Instagram", views: "31K", duration: "0:47", link: "https://www.instagram.com/earthforpeace/" },
  { src: "/IMG_1651.MOV", label: "Nature Synchronization", platform: "YouTube", views: "19K", duration: "1:55", link: "https://www.youtube.com/@earthforpeace" },
];

const defaultSocialLinks = [
  { label: "YouTube", url: "https://www.youtube.com/@earthforpeace" },
  { label: "Instagram", url: "https://www.instagram.com/earthforpeace" },
  { label: "Facebook", url: "https://facebook.com/earthforpeace" },
  { label: "TikTok", url: "https://tiktok.com/@earthforpeace" },
  { label: "WhatsApp", url: "https://wa.me/12122561366" },
];

function ReelCard({ reel, index, shouldReduce }: { reel: any; index: number; shouldReduce: boolean | null }) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const onEnter = () => { setHovered(true); videoRef.current?.play(); };
  const onLeave = () => { setHovered(false); if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; } };

  return (
    <motion.a href={reel.link} target="_blank" rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: shouldReduce ? 0 : 0.85, ease: [0.16, 1, 0.3, 1], delay: shouldReduce ? 0 : index * 0.07 }}
      onMouseEnter={onEnter} onMouseLeave={onLeave}
      style={{ position: "relative", borderRadius: 2, overflow: "hidden", cursor: "pointer", aspectRatio: "9/16", background: "#1F1B16", display: "block", textDecoration: "none",
        boxShadow: hovered ? "0 28px 72px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,160,74,0.2)" : "0 8px 32px rgba(0,0,0,0.2)", transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hovered ? "scale(1.04) translateY(-4px)" : "scale(1)" }}>
      <video ref={videoRef} src={reel.videoUrl || reel.video || reel.src} loop muted playsInline preload="auto" autoPlay
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: hovered ? "saturate(1.1) brightness(0.9)" : "saturate(0.85) brightness(0.8)", transition: "filter 0.45s ease" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(31,27,22,0.9) 0%, rgba(31,27,22,0.1) 55%, rgba(31,27,22,0.15) 100%)", transition: "opacity 0.4s ease" }} />
      <div style={{ position: "absolute", top: 12, left: 12 }}>
        <span style={{ background: "rgba(31,27,22,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", borderRadius: 2, padding: "3px 9px", fontFamily: "'Cinzel', serif", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#C9A04A", border: "1px solid rgba(201,160,74,0.2)" }}>{reel.platform}</span>
      </div>
      <div style={{ position: "absolute", top: 12, right: 12 }}>
        <span style={{ background: "rgba(31,27,22,0.5)", backdropFilter: "blur(6px)", borderRadius: 2, padding: "3px 7px", fontFamily: "'Cinzel', serif", fontSize: "0.6rem", fontWeight: 500, color: "#FDFCFA" }}>{reel.duration}</span>
      </div>
      <motion.div animate={{ scale: hovered ? 0.5 : 1, opacity: hovered ? 0 : 1 }} transition={{ duration: 0.22 }}
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 3l7 4-7 4V3z" fill="white" /></svg>
      </motion.div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 14px 16px" }}>
        <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "0.85rem", color: "#FDFCFA", marginBottom: 4, lineHeight: 1.3 }}>{reel.label}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", color: "rgba(253,252,250,0.3)", letterSpacing: "0.08em" }}>{reel.views} views</span>
        </div>
      </div>
    </motion.a>
  );
}

export default function SocialReelSection({ sanity }: { sanity?: Record<string, any> }) {
  const shouldReduce = useReducedMotion();
  const handle = sanity?.handle || '@EarthForPeace';
  const heading = sanity?.heading || 'Sacred Moments.';
  const subheading = sanity?.subheading || 'Witnessed.';
  const sanityReels = sanity?.reels;
  const reels = sanityReels && sanityReels.length > 0
    ? sanityReels.map((sr: any, i: number) => {
        const def = defaultReels[i] || defaultReels[0];
        return {
          src: sr.videoUrl || def.src,
          label: sr.label || def.label,
          platform: sr.platform || def.platform,
          views: sr.views || def.views,
          duration: sr.duration || def.duration,
          link: sr.link || def.link,
        };
      })
    : defaultReels;
  const socialLinks = sanity?.socialLinks || defaultSocialLinks;

  return (
    <section style={{ background: "#F5F1EA", overflow: "hidden", position: "relative", marginTop: "-1px", zIndex: 20 }}>
      <div style={{ position: "absolute", top: "30%", left: "50%", transform: "translate(-50%, -50%)", width: "60%", height: "40%", background: "radial-gradient(ellipse, rgba(201,160,74,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(72px, 10vw, 140px) clamp(20px, 7vw, 100px) clamp(64px, 8vw, 120px)" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: shouldReduce ? 0 : 0.9 }} className="reel-header">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(14px, 2vh, 18px)" }}>
              <div style={{ width: 26, height: 1, background: "linear-gradient(to right, #C9A04A, transparent)", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(0.55rem, 0.7vw, 0.62rem)", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "#A07D2E" }}>{handle}</span>
            </div>
            <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(2.2rem, 3.8vw, 4.2rem)", letterSpacing: "-0.02em", color: "#1F1B16", lineHeight: 0.95 }}>
              {heading}<br /><span style={{ fontStyle: "italic", color: "rgba(31,27,22,0.2)" }}>{subheading}</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {socialLinks.map((s: any) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 2, textDecoration: "none", fontFamily: "'Cinzel', serif", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(31,27,22,0.35)", background: "rgba(31,27,22,0.03)", border: "1px solid rgba(31,27,22,0.06)", transition: "all 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A04A"; e.currentTarget.style.borderColor = "rgba(201,160,74,0.3)"; e.currentTarget.style.background = "rgba(201,160,74,0.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(31,27,22,0.35)"; e.currentTarget.style.borderColor = "rgba(31,27,22,0.06)"; e.currentTarget.style.background = "rgba(31,27,22,0.03)"; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="reel-grid">
          {reels.map((r: any, i: number) => (<ReelCard key={`${r.label}-${i}`} reel={r} index={i} shouldReduce={shouldReduce} />))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: shouldReduce ? 0 : 0.6 }}
          style={{ textAlign: "center", marginTop: "clamp(20px, 3vh, 32px)", fontFamily: "'Cinzel', serif", fontSize: "0.68rem", color: "rgba(31,27,22,0.25)", letterSpacing: "0.12em" }}>
          Hover to preview &middot; Click to watch full
        </motion.p>
      </div>
      <style>{`.reel-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: clamp(40px, 6vh, 64px); flex-wrap: wrap; gap: 24px; } .reel-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: clamp(10px, 1.2vw, 16px); } @media (max-width: 1100px) { .reel-grid { grid-template-columns: repeat(3, 1fr); } } @media (max-width: 680px) { .reel-grid { grid-template-columns: repeat(2, 1fr); } .reel-header { flex-direction: column; align-items: flex-start; } } @media (max-width: 420px) { .reel-grid { grid-template-columns: 1fr 1fr; gap: 10px; } }`}</style>
    </section>
  );
}
