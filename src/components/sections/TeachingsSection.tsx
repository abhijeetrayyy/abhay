"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const practices = [
  {
    num: "01",
    tag: "Nature Healing",
    title: "Forest & Elemental Medicine",
    desc: "The Siberian taiga is the original clinic. Through guided forest immersion, elemental ceremonies, and direct communion with the natural world, deep cellular healing occurs naturally. The trees, rivers, and winds become your healers.",
    img: "/sao-gallery-img2.jpg",
  },
  {
    num: "02",
    tag: "Sound Medicine",
    title: "Sacred Drum Healing",
    desc: "The shaman's drum is a portal. Its frequencies shift brainwave states instantly, dissolve trauma held in the cellular body, and initiate spontaneous healing responses.",
    img: "/sao-gallery-img4.jpg",
  },
  {
    num: "03",
    tag: "Personal Healing",
    title: "1-on-1 Shamanic Session",
    desc: "Direct, private energetic work with Shaman Abhay Oyun. Each session identifies the root cause of imbalance — physical, emotional, or ancestral — and applies targeted shamanic intervention.",
    img: "/AO-2.jpg",
  },
];

export default function TeachingsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="teachings"
      className="teachings-section"
      style={{
        backgroundColor: "#FBF9F5",
        padding: "120px 4vw",
        position: "relative",
        marginTop: "-1px",
        zIndex: 20,
      }}
    >
      <div
        className="editorial-container"
        style={{
          maxWidth: 1600,
          margin: "0 auto",
          display: "flex",
          gap: "6vw",
          alignItems: "flex-start",
        }}
      >
        {/* Left Side: Sticky Image Showcase */}
        <div
          className="editorial-image-col"
          style={{
            flex: 1,
            position: "sticky",
            top: 130,
            height: "calc(100vh - 200px)",
            minHeight: 600,
            maxHeight: 800,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={practices[activeIdx].img}
                alt={practices[activeIdx].title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={100}
                priority
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(31,27,22,0.3) 0%, transparent 40%)",
              }} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Content & Accordion */}
        <div className="editorial-content-col" style={{ flex: 1, paddingTop: 40, paddingBottom: 40 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: 60 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 36, height: 1, background: "#C9A04A" }} />
              <span style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#A07D2E",
              }}>
                The Work
              </span>
            </div>
            <h2 style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(2.8rem, 3.8vw, 4.2rem)",
              color: "#1F1B16",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}>
              Ancient Practices.
              <br />
              <span style={{ fontStyle: "italic", color: "rgba(31,27,22,0.35)" }}>
                Modern Mastery.
              </span>
            </h2>
            <p style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "1rem",
              color: "rgba(31,27,22,0.55)",
              marginTop: 24,
              lineHeight: 1.7,
              maxWidth: 460,
              fontWeight: 400,
            }}>
              Three pillars of healing, refined across 35 years and 40 countries of direct shamanic work.
            </p>
          </motion.div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {practices.map((p, i) => {
              const isActive = activeIdx === i;
              return (
                <div
                  key={p.num}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    borderTop: "1px solid rgba(31,27,22,0.08)",
                    borderBottom: i === practices.length - 1 ? "1px solid rgba(31,27,22,0.08)" : "none",
                    padding: "30px 0",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 22 }}>
                      <span style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: isActive ? "#C9A04A" : "rgba(31,27,22,0.25)",
                        transition: "color 0.4s ease",
                      }}>
                        {p.num}
                      </span>
                      <h3 style={{
                        margin: 0,
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(1.4rem, 5vw, 2.2rem)",
                        color: isActive ? "#1F1B16" : "rgba(31,27,22,0.35)",
                        transition: "color 0.4s ease",
                        fontWeight: 400,
                      }}>
                        {p.title}
                      </h3>
                    </div>
                    <div style={{ width: 22, height: 22, position: "relative" }}>
                      <div style={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        right: 0,
                        height: 1,
                        background: isActive ? "#C9A04A" : "rgba(31,27,22,0.2)",
                        transition: "all 0.4s ease",
                      }} />
                      <div style={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: "50%",
                        width: 1,
                        background: isActive ? "#C9A04A" : "rgba(31,27,22,0.2)",
                        transform: isActive ? "rotate(90deg) scale(0)" : "rotate(0deg) scale(1)",
                        transition: "all 0.4s ease",
                      }} />
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div style={{ paddingLeft: 38, paddingTop: 22 }}>
                          <span style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "0.62rem",
                            fontWeight: 600,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "#A07D2E",
                            padding: "3px 10px",
                            border: "1px solid rgba(201,160,74,0.25)",
                            borderRadius: 2,
                            display: "inline-block",
                            marginBottom: 14,
                          }}>
                            {p.tag}
                          </span>
                          <p style={{
                            margin: "0 0 30px 0",
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: "1rem",
                            color: "rgba(31,27,22,0.6)",
                            lineHeight: 1.75,
                            maxWidth: 480,
                            fontWeight: 400,
                          }}>
                            {p.desc}
                          </p>
                          <Link
                            href="https://calendly.com/hurraymangalam/individualsessions"
                            target="_blank"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 10,
                              fontFamily: "'Cinzel', serif",
                              fontSize: "0.78rem",
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "#FDFCFA",
                              background: "#C9A04A",
                              padding: "14px 36px",
                              borderRadius: 2,
                              textDecoration: "none",
                              transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) => { e.currentTarget.style.background = "#A07D2E"; }}
                            onMouseOut={(e) => { e.currentTarget.style.background = "#C9A04A"; }}
                          >
                            Book Session
                            <svg width="16" height="11" viewBox="0 0 14 8" fill="none">
                              <path d="M1 4h12M10 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .teachings-section { padding: 80px 4vw !important; }
          .editorial-container { flex-direction: column !important; }
          .editorial-image-col { width: 100% !important; height: 50vh !important; min-height: auto !important; position: relative !important; top: 0 !important; margin-bottom: 40px; }
          .editorial-content-col { padding-top: 0 !important; }
        }
        @media (max-width: 768px) {
          .teachings-section { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
}
