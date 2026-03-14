"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";

const reels = [
  {
    src: "/IMG_1651.MOV",
    label: "Shamanic Ceremony",
    platform: "Instagram" as const,
    views: "24K",
    duration: "0:58",
    link: "https://www.instagram.com/earthforpeace/",
  },
  {
    src: "/IMG_1652.MOV",
    label: "Healing Ritual Fire",
    platform: "Instagram" as const,
    views: "18K",
    duration: "1:12",
    link: "https://www.instagram.com/earthforpeace/",
  },
  {
    src: "/IMG_1651.MOV",
    label: "SAMPO Teaching",
    platform: "YouTube" as const,
    views: "41K",
    duration: "2:34",
    link: "https://www.youtube.com/@earthforpeace",
  },
  {
    src: "/IMG_1652.MOV",
    label: "Sacred Drum Journey",
    platform: "Instagram" as const,
    views: "31K",
    duration: "0:47",
    link: "https://www.instagram.com/earthforpeace/",
  },
  {
    src: "/IMG_1651.MOV",
    label: "Nature Synchronization",
    platform: "YouTube" as const,
    views: "19K",
    duration: "1:55",
    link: "https://www.youtube.com/@earthforpeace",
  },
];

const PLATFORM_COLORS: Record<string, string> = {
  Instagram: "#d4a853",
  YouTube: "#d4a853",
  Facebook: "#d4a853",
  TikTok: "#d4a853",
};

function ReelCard({
  reel,
  index,
  shouldReduce,
}: {
  reel: (typeof reels)[0];
  index: number;
  shouldReduce: boolean | null;
}) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };
  const onLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.a
      href={reel.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: shouldReduce ? 0 : 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay: shouldReduce ? 0 : index * 0.07,
      }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        borderRadius: 18,
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "9/16",
        background: "#080e1c",
        display: "block",
        textDecoration: "none",
        boxShadow: hovered
          ? "0 28px 72px rgba(0,0,0,0.65), 0 0 0 1px rgba(212,168,83,0.22)"
          : "0 8px 32px rgba(0,0,0,0.38)",
        transition: "box-shadow 0.4s ease, transform 0.4s ease",
        transform: hovered ? "scale(1.04) translateY(-5px)" : "scale(1)",
      }}
    >
      <video
        ref={videoRef}
        src={reel.src}
        loop
        muted
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: hovered ? "saturate(1.15) brightness(0.95)" : "saturate(0.75) brightness(0.8)",
          transition: "filter 0.45s ease",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(3,7,15,0.95) 0%, rgba(3,7,15,0.15) 55%, rgba(3,7,15,0.25) 100%)",
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Platform badge */}
      <div style={{ position: "absolute", top: 12, left: 12 }}>
        <span
          style={{
            background: "rgba(3,7,15,0.65)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: 99,
            padding: "3px 10px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.57rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: PLATFORM_COLORS[reel.platform] ?? "#ffffff",
            border: `1px solid ${PLATFORM_COLORS[reel.platform] ?? "#fff"}28`,
          }}
        >
          {reel.platform}
        </span>
      </div>

      {/* Duration badge */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(3,7,15,0.65)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          borderRadius: 4,
          padding: "3px 8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "0.04em",
          }}
        >
          {reel.duration}
        </span>
      </div>

      {/* Play button */}
      <motion.div
        animate={{ scale: hovered ? 0.5 : 1, opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.22 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 50,
          height: 50,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 14 14" fill="none">
          <path d="M4 3l7 4-7 4V3z" fill="white" />
        </svg>
      </motion.div>

      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 14px 18px",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "#ffffff",
            marginBottom: 5,
            lineHeight: 1.3,
          }}
        >
          {reel.label}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="2" fill="rgba(255,255,255,0.28)" />
            <path
              d="M1 6a5 5 0 0 1 10 0"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.57rem",
              color: "rgba(255,255,255,0.32)",
              letterSpacing: "0.08em",
            }}
          >
            {reel.views} views
          </span>
        </div>
      </div>
    </motion.a>
  );
}

export default function SocialReelSection() {
  const shouldReduce = useReducedMotion();
  const [filter, setFilter] = useState<"All" | "Instagram" | "YouTube">("All");

  const filteredReels = reels.filter((r) => filter === "All" || r.platform === filter);

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
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "40%",
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding:
            "clamp(72px, 10vw, 140px) clamp(20px, 7vw, 100px) clamp(64px, 8vw, 120px)",
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: shouldReduce ? 0 : 0.9 }}
          className="reel-header"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: "clamp(14px, 2vh, 20px)",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 1,
                  background:
                    "linear-gradient(to right, #d4a853, transparent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.57rem, 0.72vw, 0.65rem)",
                  fontWeight: 700,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase" as const,
                  color: "#d4a853",
                }}
              >
                @EarthForPeace
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4vw, 4.5rem)",
                letterSpacing: "-0.03em",
                color: "#0d1117",
                lineHeight: 0.95,
              }}
            >
              Sacred Moments.
              <br />
              <span style={{ fontStyle: "italic", color: "rgba(13,17,23,0.25)" }}>
                Witnessed.
              </span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-end" }}>
            {/* Filters */}
            <div style={{ display: "flex", gap: 12 }}>
              {(["All", "Instagram", "YouTube"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    background: filter === f ? "rgba(212,168,83,0.15)" : "transparent",
                    border: `1px solid ${filter === f ? "rgba(212,168,83,0.5)" : "rgba(13,17,23,0.08)"}`,
                    color: filter === f ? "#d4a853" : "rgba(13,17,23,0.4)",
                    padding: "6px 16px",
                    borderRadius: 20,
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="reel-social-links">
              {(
                [
                  ["Instagram", "https://www.instagram.com/earthforpeace/"],
                  ["YouTube", "https://www.youtube.com/@earthforpeace"],
                  ["Facebook", "#"],
                  ["TikTok", "#"],
                ] as [string, string][]
              ).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 18px",
                    background: "rgba(13,17,23,0.04)",
                    border: "1px solid rgba(13,17,23,0.08)",
                    borderRadius: 4,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase" as const,
                    color: "rgba(13,17,23,0.45)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reel grid */}
        <div className="reel-grid">
          {filteredReels.map((r, i) => (
            <ReelCard key={`${r.label}-${i}`} reel={r} index={i} shouldReduce={shouldReduce} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: shouldReduce ? 0 : 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "clamp(20px, 3vh, 36px)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            color: "rgba(13,17,23,0.3)",
            letterSpacing: "0.12em",
          }}
        >
          Hover to preview · Click to watch full
        </motion.p>
      </div>

      <style>{`
        .reel-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: clamp(40px, 6vh, 72px);
          flex-wrap: wrap;
          gap: 24px;
        }
        .reel-social-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .social-btn:hover {
          background: rgba(13,17,23,0.08) !important;
          border-color: rgba(13,17,23,0.18) !important;
          color: #0d1117 !important;
          transform: translateY(-2px);
        }
        .reel-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: clamp(10px, 1.2vw, 18px);
        }
        @media (max-width: 1100px) {
          .reel-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 680px) {
          .reel-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .reel-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        @media (max-width: 420px) {
          .reel-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </section>
  );
}
