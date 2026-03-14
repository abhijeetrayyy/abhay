"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

// 5 YouTube videos
const videos = [
  {
    id: "kjFiyWgyvu0",
    title: "Abhay Oyun Teaching",
    subtitle: "First Steps of SAMPO",
  },
  {
    id: "EqEK-5uJrAA",
    title: "Sacred Drum Ceremony",
    subtitle: "Sound Healing Practice",
  },
  {
    id: "MXW78uQR7xg",
    title: "Shamanic Initiation",
    subtitle: "Psycho-Energetic Training",
  },
  {
    id: "rNviNzWV-e4",
    title: "Nature Synchronization",
    subtitle: "Siberian Forest Ritual",
  },
  {
    id: "9ftcHfDEjeI",
    title: "The SAMPO System",
    subtitle: "Ancient Energy Mastery",
  },
];

function VideoCard({
  video,
  index,
}: {
  video: (typeof videos)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
      }}
      style={{
        borderRadius: 18,
        overflow: "hidden",
        background: "#ffffff",
        border: "1px solid rgba(13,17,23,0.06)",
        position: "relative",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,168,83,0.25)" // Gold hover glow
          : "0 8px 32px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* YouTube embed or thumbnail */}
      {playing ? (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            background: "#000",
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            cursor: "pointer",
          }}
          onClick={() => setPlaying(true)}
        >
          {/* YouTube thumbnail */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
            alt={video.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: hovered
                ? "saturate(1.1) contrast(1.05)"
                : "saturate(0.7) contrast(1.05)",
              transition: "filter 0.4s ease",
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: hovered ? "rgba(6,12,26,0.35)" : "rgba(6,12,26,0.55)",
              transition: "background 0.4s ease",
            }}
          />
          {/* Play button */}
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 60,
              height: 60,
              borderRadius: "50%",
              background: hovered
                ? "rgba(212,168,83,0.95)"
                : "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              border: "2px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M6 4.5l8 4.5-8 4.5V4.5z"
                fill={hovered ? "#03070f" : "#0d1117"}
              />
            </svg>
          </motion.div>
          {/* Duration badge */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              right: 10,
              background: "rgba(3,7,15,0.85)",
              borderRadius: 4,
              padding: "2px 6px",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              YouTube
            </span>
          </div>
        </div>
      )}

      {/* Card footer */}
      <div style={{ padding: "18px 20px" }}>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase" as const,
            color: "rgba(212,168,83,0.8)", // Gold text
            marginBottom: 6,
          }}
        >
          {video.subtitle}
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 400,
            fontSize: "1rem",
            color: "#0d1117",
            lineHeight: 1.3,
          }}
        >
          {video.title}
        </div>
      </div>
    </motion.div>
  );
}

export default function YouTubeSection() {
  return (
    <section
      style={{
        background: "var(--warm-beige)",
        overflow: "hidden",
        position: "relative",
        marginTop: "-1px",
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "140px 7vw" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap" as const,
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 20,
              }}
            >
              <div style={{ width: 28, height: 1, background: "#d4a853" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase" as const,
                  color: "#d4a853",
                }}
              >
                Watch & Learn
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(2.4rem,4vw,4.5rem)",
                letterSpacing: "-0.04em",
                color: "#0d1117",
                lineHeight: 0.95,
              }}
            >
              Abhay Oyun
              <br />
              <span
                style={{ fontStyle: "italic", color: "rgba(13,17,23,0.3)" }}
              >
                Teaching
              </span>
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
              gap: 12,
              padding: "14px 28px",
              background:
                "linear-gradient(135deg, rgba(13,17,23,0.06), rgba(13,17,23,0.02))",
              border: "1px solid rgba(13,17,23,0.1)",
              borderRadius: 4,
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
              color: "#0d1117",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "transform 0.3s ease, background 0.3s ease",
            }}
          >
            <svg width="18" height="13" viewBox="0 0 16 12" fill="#d4a853">
              <path d="M15.7 1.9A2 2 0 0 0 14.3.5C13 .1 8 .1 8 .1s-5 0-6.3.4A2 2 0 0 0 .3 1.9C0 3.2 0 6 0 6s0 2.8.3 4.1A2 2 0 0 0 1.7 11.5C3 11.9 8 11.9 8 11.9s5 0 6.3-.4a2 2 0 0 0 1.4-1.4C16 8.8 16 6 16 6s0-2.8-.3-4.1z" />
              <path d="M6.4 8.5V3.5l4.2 2.5-4.2 2.5z" fill="white" />
            </svg>
            View Channel
          </a>
        </motion.div>

        {/* 5-video grid: 3 top, 2 bottom */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginBottom: 20,
          }}
        >
          {videos.slice(0, 3).map((v, i) => (
            <VideoCard key={v.id} video={v} index={i} />
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}
        >
          {videos.slice(3).map((v, i) => (
            <VideoCard key={v.id} video={v} index={i + 3} />
          ))}
        </div>
      </div>

      <style>{`
        .yt-btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, rgba(13,17,23,0.1), rgba(13,17,23,0.05)) !important;
        }
      `}</style>
    </section>
  );
}
