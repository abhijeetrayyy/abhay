"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const practices = [
  {
    num: "01",
    tag: "SAMPO System",
    title: "Psycho-Energetic Training",
    desc: "A complete system for accumulating, protecting and directing your vital energy. Ancient Siberian methods to shield from external influences and awaken your dormant life force.",
    img: "/D9DB5CE5-E5BD-400D-9114-E5A90138CFFA_1_105_c.jpeg",
  },
  {
    num: "02",
    tag: "Sound Medicine",
    title: "Sacred Drum Healing",
    desc: "The shaman's drum is a portal. Its frequencies shift brainwave states instantly, dissolve trauma held in the cellular body, and initiate spontaneous healing responses.",
    img: "/drum_moss_forest.png",
  },
  {
    num: "03",
    tag: "Personal Healing",
    title: "1-on-1 Shamanic Session",
    desc: "Direct, private energetic work with Master Abhay Oyun. Each session identifies the root cause of imbalance — physical, emotional, or ancestral — and applies targeted shamanic intervention.",
    img: "/yurt_fire_healing.png",
  },
];

export default function TeachingsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="teachings"
      className="teachings-section"
      style={{
        backgroundColor: "var(--soft-sand)",
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
            top: 140, // Sticks nicely under the navbar
            height: "calc(100vh - 200px)",
            minHeight: 600,
            maxHeight: 800,
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
          }}
        >
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                position: "absolute",
                inset: 0,
              }}
            >
              <Image
                src={practices[activeIdx].img}
                alt={practices[activeIdx].title}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                quality={100}
                priority
              />
              {/* Subtle elegant gradient overlay for depth */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(8,10,14,0.4) 0%, transparent 40%)",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Content & Accordion */}
        <div
          className="editorial-content-col"
          style={{
            flex: 1,
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: 60 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div style={{ width: 40, height: 1, background: "#d4a853" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#d4a853",
                }}
              >
                The Work
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "clamp(3rem, 4vw, 4.5rem)",
                color: "#0d1117",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Ancient Practices.
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  color: "rgba(13,17,23,0.4)",
                }}
              >
                Modern Mastery.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "#666c76",
                marginTop: 24,
                lineHeight: 1.6,
                maxWidth: 480,
              }}
            >
              Three pillars of the SAMPO system, refined across 35 years and 40
              countries of direct energetic healing work.
            </p>
          </motion.div>

          {/* Clean Editorial Accordion */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {practices.map((p, i) => {
              const isActive = activeIdx === i;
              return (
                <div
                  key={p.num}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    borderTop: "1px solid rgba(13,17,23,0.1)",
                    borderBottom:
                      i === practices.length - 1
                        ? "1px solid rgba(13,17,23,0.1)"
                        : "none",
                    padding: "32px 0",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  {/* Accordion Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 24,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "1rem",
                          fontWeight: 500,
                          color: isActive ? "#d4a853" : "rgba(13,17,23,0.3)",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {p.num}
                      </span>
                      <h3
                        style={{
                          margin: 0,
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "clamp(1.4rem, 6vw, 2.5rem)",
                          color: isActive ? "#0d1117" : "rgba(13,17,23,0.4)",
                          transition: "color 0.4s ease",
                          fontWeight: 400,
                        }}
                      >
                        {p.title}
                      </h3>
                    </div>
                    {/* Plus / Minus indicator */}
                    <div
                      style={{
                        width: 24,
                        height: 24,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: 0,
                          right: 0,
                          height: 1,
                          background: isActive
                            ? "#ffffff"
                            : "rgba(255,255,255,0.4)",
                          transition: "all 0.4s ease",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          left: "50%",
                          width: 1,
                          background: isActive
                            ? "#ffffff"
                            : "rgba(255,255,255,0.4)",
                          transform: isActive
                            ? "rotate(90deg) scale(0)"
                            : "rotate(0deg) scale(1)",
                          transition: "all 0.4s ease",
                        }}
                      />
                    </div>
                  </div>

                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div style={{ paddingLeft: 42, paddingTop: 24 }}>
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              letterSpacing: "0.2em",
                              textTransform: "uppercase",
                              color: "#d4a853",
                              padding: "4px 12px",
                              border: "1px solid rgba(212, 168, 83, 0.3)",
                              borderRadius: 4,
                              display: "inline-block",
                              marginBottom: 16,
                            }}
                          >
                            {p.tag}
                          </span>
                          <p
                            style={{
                              margin: "0 0 32px 0",
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "1.1rem",
                              color: "rgba(13,17,23,0.7)",
                              lineHeight: 1.6,
                              maxWidth: 500,
                            }}
                          >
                            {p.desc}
                          </p>
                          <Link
                            href="https://calendly.com/hurraymangalam/neues-meeting"
                            target="_blank"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 12,
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.85rem",
                              fontWeight: 600,
                              letterSpacing: "0.1em",
                              textTransform: "uppercase",
                              color: "#050505",
                              background: "#d4a853",
                              padding: "16px 40px",
                              borderRadius: 4,
                              textDecoration: "none",
                              transition: "all 0.3s ease",
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.background = "#faf6eb";
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.background = "#d4a853";
                            }}
                          >
                            Book Session
                            <svg
                              width="18"
                              height="12"
                              viewBox="0 0 14 8"
                              fill="none"
                            >
                              <path
                                d="M1 4h12M10 1l3 3-3 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
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
          .teachings-section {
            padding: 80px 4vw !important;
          }
          .editorial-container {
            flex-direction: column !important;
          }
          .editorial-image-col {
            width: 100% !important;
            height: 50vh !important;
            min-height: auto !important;
            position: relative !important;
            top: 0 !important;
            margin-bottom: 40px;
          }
          .editorial-content-col {
            padding-top: 0 !important;
          }
        }
        @media (max-width: 768px) {
          .teachings-section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
