"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ShamanIntroSection() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        background: "var(--soft-sand)",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      {/* Subtle warm texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(212,168,83,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "clamp(64px, 10vw, 140px) clamp(24px, 6vw, 100px)",
        }}
      >
        <div className="shaman-intro-grid">
          {/* ── LEFT: Editorial text ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: shouldReduce ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: "clamp(20px, 3vh, 36px)",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 1,
                  background: "linear-gradient(to right, #d4a853, transparent)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.6rem, 0.8vw, 0.72rem)",
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "#d4a853",
                }}
              >
                The Master Shaman
              </span>
            </div>

            {/* Hero heading */}
            <h2
              style={{
                margin: "0 0 clamp(20px, 3vh, 36px) 0",
                padding: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "#0d1117",
                fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
              }}
            >
              35 Years.
              <br />
              40 Countries.
              <br />
              <span style={{ fontStyle: "italic", color: "#d4a853" }}>
                One Mission.
              </span>
            </h2>

            {/* Body copy */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                lineHeight: 1.9,
                color: "#555c66",
                maxWidth: 500,
                marginBottom: 16,
              }}
            >
              Abhay Oyun is a shamanic elder rooted in the ancient tradition of
              Siberian shamanism. For over three decades he has traveled to 40
              countries offering spiritual guidance, humanitarian support, and
              direct energetic healing to those in need.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
                lineHeight: 1.9,
                color: "#555c66",
                maxWidth: 500,
                marginBottom: "clamp(32px, 5vh, 56px)",
              }}
            >
              Through his{" "}
              <span style={{ color: "#0d1117", fontWeight: 600 }}>
                SAMPO System
              </span>{" "}
              — a map of psycho-energetic practices rooted in this ancient
              tradition — he helps restore vital energy, dissolve deep trauma,
              and reconnect people with their true purpose.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                borderTop: "1px solid rgba(212,168,83,0.25)",
                marginBottom: "clamp(32px, 5vh, 56px)",
              }}
            >
              {(
                [
                  ["35+", "Years"],
                  ["40", "Countries"],
                  ["10K+", "Healed"],
                ] as [string, string][]
              ).map(([num, label], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduce ? 0 : 0.7,
                    delay: shouldReduce ? 0 : i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    padding: "clamp(20px, 3vh, 32px) 0",
                    borderRight:
                      i < 2 ? "1px solid rgba(212,168,83,0.18)" : "none",
                    paddingRight: i < 2 ? "clamp(12px, 2vw, 24px)" : 0,
                    paddingLeft: i > 0 ? "clamp(12px, 2vw, 24px)" : 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                      lineHeight: 1,
                      background: "linear-gradient(135deg, #d4a853, #9e7529)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.6rem, 0.75vw, 0.68rem)",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase" as const,
                      color: "rgba(13,17,23,0.4)",
                      marginTop: 8,
                    }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="https://calendly.com/hurraymangalam/neues-meeting"
              target="_blank"
              className="intro-btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "clamp(12px, 1.5vh, 16px) clamp(24px, 3vw, 36px)",
                background: "linear-gradient(135deg, #0d1117, #1a222e)",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.68rem, 0.9vw, 0.75rem)",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase" as const,
                borderRadius: 4,
                textDecoration: "none",
                boxShadow: "0 10px 30px rgba(13,17,23,0.18)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7.25" stroke="#d4a853" strokeWidth="1.5" />
                <path d="M6 5l5 3-5 3V5z" fill="#d4a853" />
              </svg>
              Book a Free Session
            </Link>

            <style>{`
              .intro-btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 18px 40px rgba(13,17,23,0.28) !important;
              }
              .shaman-intro-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: clamp(40px, 8vw, 100px);
                align-items: center;
              }
              @media (max-width: 900px) {
                .shaman-intro-grid {
                  grid-template-columns: 1fr;
                  gap: 48px;
                }
                .shaman-intro-image-col {
                  order: -1;
                  max-width: 560px;
                  margin: 0 auto;
                  width: 100%;
                }
              }
            `}</style>
          </motion.div>

          {/* ── RIGHT: Ritual Video Card ── */}
          <div className="shaman-intro-image-col" style={{ position: "relative" }}>
            {/* Decorative gold background block */}
            <div
              style={{
                position: "absolute",
                top: -32,
                right: -32,
                width: "75%",
                height: "75%",
                background: "var(--accent-gold)",
                opacity: 0.05,
                borderRadius: 24,
                zIndex: 0,
              }}
            />

            {/* Video Card */}
            <motion.div
              style={{ y: shouldReduce ? 0 : imgY, position: "relative", zIndex: 1 }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: shouldReduce ? 0 : 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  boxShadow: "0 60px 100px rgba(0,0,0,0.13)",
                  aspectRatio: "4/5",
                  position: "relative",
                  background: "var(--deep-navy)",
                }}
              >
                <img
                  src="/9F490988-7BE8-49C9-9E95-0CEA0ECFC1D7_1_105_c.jpeg"
                  alt="Ritual Background"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "contrast(1.05) brightness(0.9)",
                  }}
                />
                {/* Subtle warm grade overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(13,17,23,0.4), transparent 60%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Mystical Symbols */}
            {/* Symbol 1: Shamanic Sun/Star (Top Left) */}
            <motion.div
              style={{
                position: "absolute",
                top: -20,
                left: -20,
                zIndex: 5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.div
                animate={shouldReduce ? {} : { y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ opacity: 0.7 }}
              >
                <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="50" cy="50" r="45" />
                  <polygon points="50,85 18,35 88,60 12,60 82,35" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Symbol 2: Crescent Moon (Bottom Left) */}
            <motion.div
              style={{
                position: "absolute",
                bottom: 40,
                left: -40,
                zIndex: 5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                animate={shouldReduce ? {} : { y: [0, 12, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ opacity: 0.6 }}
              >
                <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="#d4a853" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M50 75 c -12 -18 -32 -18 -32 0 c 0,18 20,18 32,0 c 12 -18 32 -18 32 0 c 0,18 -20,18 -32,0" />
                  <line x1="50" y1="75" x2="50" y2="15" />
                  <line x1="30" y1="45" x2="70" y2="45" />
                  <line x1="40" y1="30" x2="60" y2="30" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Symbol 3: Sacred Diamond (Bottom Right) */}
            <motion.div
              style={{
                position: "absolute",
                bottom: -30,
                right: 20,
                zIndex: 5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.div
                animate={shouldReduce ? {} : { y: [0, -8, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                style={{ opacity: 0.5 }}
              >
                <svg width="56" height="56" viewBox="0 0 100 100" fill="none" stroke="#d4a853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 50 Q50 10 90 50 Q50 90 10 50 Z" />
                  <ellipse cx="50" cy="50" rx="10" ry="25" fill="#d4a853" />
                  <line x1="50" y1="20" x2="50" y2="80" stroke="#000" strokeWidth="3" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Symbol 4: Minimalist Triple Eye/Dots (Top Right) */}
            <motion.div
              style={{
                position: "absolute",
                top: 60,
                right: -30,
                zIndex: 5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                animate={shouldReduce ? {} : { y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ opacity: 0.8 }}
              >
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" stroke="#d4a853" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="50" y1="10" x2="50" y2="90" />
                  <line x1="25" y1="70" x2="75" y2="70" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
