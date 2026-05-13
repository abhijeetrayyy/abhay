"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const defaultVideos = [
  { id: "y1", title: "Meeting with Master", label: "Student Story", yt: "PKpKIkGQGv4" },
  { id: "l1", title: "Karnudeja", label: "Testimonial", src: "/video-testimonials/Karnudeja-English.mp4" },
  { id: "y2", title: "Expanded Consciousness", label: "Teaching", yt: "buldB9zzREs" },
  { id: "l2", title: "Las Vegas Experience", label: "Testimonial", src: "/video-testimonials/Erfahrungs Bericht in Las Vegas.mp4" },
  { id: "y3", title: "Shaman Lead to Happiness", label: "Testimony", yt: "Lw2A4Rbyxm0" },
  { id: "l3", title: "Doris", label: "Testimonial", src: "/video-testimonials/doris eng.MP4" },
  { id: "y4", title: "Unlimited Love", label: "Workshop", yt: "6fYzu6ZdKJA" },
  { id: "l4", title: "Ceci", label: "Testimonial", src: "/video-testimonials/Ceci.MP4" },
];

function Card({ v, i, onSelect }: { v: any; i: number; onSelect: (v: any) => void }) {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const isYT = !v.src;

  useEffect(() => {
    if (isYT || !vidRef.current) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2 });
    obs.observe(vidRef.current);
    return () => obs.disconnect();
  }, [isYT]);

  useEffect(() => { if (inView && vidRef.current) vidRef.current.play(); }, [inView]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(v)} style={{ position: "relative", borderRadius: 2, overflow: "hidden", cursor: "pointer", aspectRatio: "16/9", background: "#0A1020",
        border: "1px solid", borderColor: hovered ? "rgba(201,160,74,0.25)" : "rgba(31,27,22,0.04)",
        boxShadow: hovered ? "0 20px 48px rgba(31,27,22,0.1), 0 0 0 1px rgba(201,160,74,0.08)" : "0 4px 16px rgba(31,27,22,0.03)",
        transition: "all 0.3s ease", transform: hovered ? "translateY(-4px)" : "translateY(0)" }}>
      {isYT ? (
        <img src={`https://img.youtube.com/vi/${v.yt}/maxresdefault.jpg`} alt={v.title}
          onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${v.yt}/hqdefault.jpg`; }}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "all 0.4s, transform 0.4s", transform: hovered ? "scale(1.05)" : "scale(1)" }} />
      ) : (
        <video ref={vidRef} src={v.src} loop muted playsInline preload="none"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", transition: "filter 0.4s" }} />
      )}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,16,32,0.65) 0%, rgba(10,16,32,0.05) 45%, transparent 70%)" }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, zIndex: 3, background: "linear-gradient(90deg, transparent, rgba(201,160,74,0.25), transparent)", opacity: hovered ? 0.8 : 0.15, transition: "opacity 0.4s ease" }} />
      <span style={{ position: "absolute", top: 12, left: 12, zIndex: 2, fontFamily: "'Cinzel', serif", fontSize: "0.42rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C9A04A", padding: "3px 9px", borderRadius: 2, background: "rgba(10,16,32,0.45)", backdropFilter: "blur(6px)", border: "1px solid rgba(201,160,74,0.15)" }}>{v.label}</span>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 2, width: 50, height: 50, borderRadius: "50%",
        background: hovered ? "rgba(201,160,74,0.18)" : "rgba(201,160,74,0.1)", border: "1.5px solid", borderColor: hovered ? "rgba(201,160,74,0.35)" : "rgba(201,160,74,0.2)",
        backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.3s ease" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 2.5l9 5.5-9 5.5V2.5z" fill="#C9A04A" /></svg>
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 18px", zIndex: 2 }}>
        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.05rem", color: "#FDFCFA", margin: 0, fontWeight: 400, lineHeight: 1.15 }}>{v.title}</p>
      </div>
    </motion.div>
  );
}

function Viewer({ v, onClose }: { v: any; onClose: () => void }) {
  const [muted, setMuted] = useState(true);
  const vidRef = useRef<HTMLVideoElement>(null);
  const isYT = !v?.src;

  useEffect(() => { if (v && !isYT && vidRef.current) vidRef.current.play(); }, [v, isYT]);
  if (!v) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(8,11,24,0.95)", backdropFilter: "blur(16px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(20px, 5vw, 60px)" }}>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxWidth: 960, position: "relative" }}>
        <button onClick={onClose} style={{ position: "absolute", top: -44, right: 0, zIndex: 10, background: "none", border: "none", cursor: "pointer", fontFamily: "'Cinzel', serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 8 }}>
          Close<span style={{ fontSize: "1.1rem" }}>✕</span>
        </button>
        <div style={{ position: "relative", borderRadius: 3, overflow: "hidden", aspectRatio: isYT ? "16/9" : "9/16", maxHeight: "80vh", background: "#000", margin: "0 auto", width: isYT ? "100%" : "auto" }}>
          {isYT ? (
            <iframe src={`https://www.youtube.com/embed/${v.yt}?autoplay=1&rel=0&modestbranding=1`} title={v.title} allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
          ) : (
            <>
              <video ref={vidRef} src={v.src} loop muted={muted} playsInline autoPlay style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 24px", background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", color: "#FDFCFA", margin: 0, fontWeight: 400 }}>{v.title}</p>
                  <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.4)", margin: "3px 0 0" }}>{v.label}</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); if (!vidRef.current) return; const n = !muted; vidRef.current.muted = n; setMuted(n); }}
                  style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                  {muted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="22" y1="9" x2="16" y2="15" /><line x1="16" y1="9" x2="22" y2="15" /></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function VideoTestimonialsSection({ sanity }: { sanity?: Record<string, any> }) {
  const [selected, setSelected] = useState<any>(null);
  const eyebrow = sanity?.eyebrow || 'Video Stories';
  const heading = sanity?.heading || 'Real Voices';
  const subheading = sanity?.subheading || 'of Transformation';

  const videos = sanity?.videos?.map((v: any) => ({
    id: v._key || v.title?.replace(/\s/g, ''),
    title: v.title,
    label: v.label,
    ...(v.source === 'local' || v.videoFile ? { src: v.videoFile } : { yt: v.youtubeId }),
  })) || defaultVideos;

  return (
    <section style={{ background: "#FBF9F5", padding: "clamp(60px, 8vw, 100px) 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 14 }}>
            <div style={{ width: 36, height: 1, background: "linear-gradient(to right, transparent, #C9A04A)" }} />
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase", color: "#A07D2E" }}>{eyebrow}</span>
            <div style={{ width: 36, height: 1, background: "linear-gradient(to left, transparent, #C9A04A)" }} />
          </div>
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "#1F1B16" }}>
            {heading}<span style={{ fontStyle: "italic", color: "rgba(31,27,22,0.3)" }}> {subheading}</span>
          </h2>
        </motion.div>
        <div className="vg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {videos.map((v: any, i: number) => (<Card key={v.id} v={v} i={i} onSelect={setSelected} />))}
        </div>
        <p style={{ textAlign: "center", marginTop: 24, fontFamily: "'Cinzel', serif", fontSize: "0.55rem", color: "rgba(31,27,22,0.2)" }}>Click to watch in fullscreen</p>
      </div>
      <AnimatePresence>{selected && <Viewer v={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
      <style>{`@media (max-width: 900px) { .vg { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 500px) { .vg { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
