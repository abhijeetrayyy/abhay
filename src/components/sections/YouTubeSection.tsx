"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const videos = [
  { id: "kjFiyWgyvu0", title: "Abhay Oyun Teaching", subtitle: "First Steps of SAMPO" },
  { id: "EqEK-5uJrAA", title: "Sacred Drum Ceremony", subtitle: "Sound Healing Practice" },
  { id: "MXW78uQR7xg", title: "Shamanic Initiation", subtitle: "Psycho-Energetic Training" },
  { id: "rNviNzWV-e4", title: "Nature Synchronization", subtitle: "Siberian Forest Ritual" },
  { id: "9ftcHfDEjeI", title: "The SAMPO System", subtitle: "Ancient Energy Mastery" },
];

function VideoCard({ video, index }: { video: (typeof videos)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); }}
      style={{
        borderRadius: 2,
        overflow: "hidden",
        background: "#FDFCFA",
        border: "1px solid rgba(31,27,22,0.06)",
        position: "relative",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px rgba(201,160,74,0.2)"
          : "0 6px 24px rgba(0,0,0,0.06)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {playing ? (
        <div style={{ position: "relative", paddingBottom: "56.25%", background: "#000" }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      ) : (
        <div style={{ position: "relative", paddingBottom: "56.25%", cursor: "pointer" }} onClick={() => setPlaying(true)}>
          <img
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`; }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: hovered ? "saturate(1.05) contrast(1.02)" : "saturate(0.6) contrast(1.05)",
              transition: "filter 0.4s ease",
            }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: hovered ? "rgba(31,27,22,0.25)" : "rgba(31,27,22,0.4)",
            transition: "background 0.4s ease",
          }} />
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: hovered ? "#C9A04A" : "rgba(253,252,250,0.7)",
              backdropFilter: "blur(8px)",
              border: "1.5px solid rgba(253,252,250,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M6 4.5l8 4.5-8 4.5V4.5z" fill={hovered ? "#FDFCFA" : "#1F1B16"} />
            </svg>
          </motion.div>
        </div>
      )}

      <div style={{ padding: "16px 18px" }}>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "0.58rem",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase" as const,
          color: "#A07D2E",
          marginBottom: 5,
        }}>
          {video.subtitle}
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 400,
          fontSize: "0.95rem",
          color: "#1F1B16",
          lineHeight: 1.3,
        }}>
          {video.title}
        </div>
      </div>
    </motion.div>
  );
}

export default function YouTubeSection() {
  return (
    <section style={{ background: "#F5F1EA", overflow: "hidden", position: "relative", marginTop: "-1px", zIndex: 20 }}>
      <div className="yt-wrapper" style={{ maxWidth: 1440, margin: "0 auto", padding: "140px 7vw" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 64,
            flexWrap: "wrap" as const,
            gap: 24,
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div style={{ width: 26, height: 1, background: "#C9A04A" }} />
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.58rem",
                fontWeight: 600,
                letterSpacing: "0.35em",
                textTransform: "uppercase" as const,
                color: "#A07D2E",
              }}>
                Watch &amp; Learn
              </span>
            </div>
            <h2 style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 7vw, 4.2rem)",
              letterSpacing: "-0.03em",
              color: "#1F1B16",
              lineHeight: 0.95,
            }}>
              Abhay Oyun
              <br />
              <span style={{ fontStyle: "italic", color: "rgba(31,27,22,0.3)" }}>Teaching</span>
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@AbhayOyun"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "13px 26px",
              background: "rgba(31,27,22,0.04)",
              border: "1px solid rgba(31,27,22,0.08)",
              borderRadius: 2,
              fontFamily: "'Cinzel', serif",
              fontSize: "0.62rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#1F1B16",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="#C9A04A">
              <path d="M15.7 1.9A2 2 0 0 0 14.3.5C13 .1 8 .1 8 .1s-5 0-6.3.4A2 2 0 0 0 .3 1.9C0 3.2 0 6 0 6s0 2.8.3 4.1A2 2 0 0 0 1.7 11.5C3 11.9 8 11.9 8 11.9s5 0 6.3-.4a2 2 0 0 0 1.4-1.4C16 8.8 16 6 16 6s0-2.8-.3-4.1z" />
              <path d="M6.4 8.5V3.5l4.2 2.5-4.2 2.5z" fill="white" />
            </svg>
            View Channel
          </a>
        </motion.div>

        <div className="yt-grid-top" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginBottom: 18 }}>
          {videos.slice(0, 3).map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>
        <div className="yt-grid-bottom" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {videos.slice(3).map((v, i) => (
            <VideoCard key={v.id} video={v} index={i + 3} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .yt-wrapper { padding: 80px 5vw !important; } }
        @media (max-width: 900px) { .yt-grid-top, .yt-grid-bottom { grid-template-columns: 1fr !important; } }
        @media (max-width: 768px) { .yt-wrapper { padding: 60px 20px !important; } }
        .yt-btn:hover {
          transform: translateY(-2px);
          background: rgba(31,27,22,0.07) !important;
        }
      `}</style>
    </section>
  );
}
