"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  "Live introduction to the SAMPO psycho-energetic system",
  "Discover your unique energy type and its strengths",
  "First steps in shamanic self-healing techniques",
  "Live Q&A with Master Abhay Oyun",
];

export default function WebinarCTASection() {
  return (
    <section
      style={{
        background: "var(--soft-sand)",
        position: "relative",
        marginTop: "-1px",
        zIndex: 20,
      }}
    >
      {/* Soft warm texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(212,168,83,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />


      <div
        className="webinar-wrapper"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "140px 80px",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          className="webinar-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "center",
          }}
        >
          {/* Left — editorial */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 1,
                  background: "rgba(212,168,83,0.8)", // Gold
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "rgba(212,168,83,0.8)", // Gold
                }}
              >
                Free Webinar
              </span>
            </div>

            <h2
              style={{
                margin: "0 0 28px 0",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "clamp(2rem, 8vw, 4rem)",
                letterSpacing: "-0.025em",
                color: "#0d1117",
                lineHeight: 0.95,
              }}
            >
              Your Transformation
              <br />
              <span
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #f9d58b, #d4a853)", // Gold gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Starts Free
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.85,
                color: "rgba(13,17,23,0.6)",
                maxWidth: 440,
                marginBottom: 48,
              }}
            >
              Join thousands of people who made their first shift in a single
              free masterclass. No experience required — only willingness.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 0 0",
                display: "flex",
                flexDirection: "column" as const,
                gap: 20,
              }}
            >
              {benefits.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: 16 }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      border: "1px solid rgba(212,168,83,0.3)", // Gold border
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="rgba(212,168,83,0.8)">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.92rem",
                      color: "rgba(13,17,23,0.7)",
                      lineHeight: 1.5,
                    }}
                  >
                    {b}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Dark card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div
              style={{
                background: "#faf6eb",
                border: "1px solid rgba(13,17,23,0.06)",
                borderRadius: 24,
                padding: "48px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 40px 80px rgba(13,17,23,0.06)",
              }}
            >
              {/* Card glow */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(212,168,83,0.4), transparent)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: -80,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 300,
                  height: 200,
                  background:
                    "radial-gradient(ellipse, rgba(212,168,83,0.08), transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative" }}>
                <div style={{ marginBottom: 28 }}>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase" as const,
                      color: "rgba(212,168,83,0.8)",
                      marginBottom: 8,
                    }}
                  >
                    Next Session
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2.2rem",
                      color: "#0d1117",
                    }}
                  >
                    March 19, 2025
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(13,17,23,0.45)",
                      marginTop: 8,
                    }}
                  >
                    Online · Free Entry · Global
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(13,17,23,0.08)",
                    paddingTop: 28,
                    marginBottom: 32,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                      color: "rgba(13,17,23,0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    &ldquo;The first step costs nothing but the courage to
                    begin.&rdquo;
                  </div>
                </div>

                <Link
                  href="https://forms.gle/jEDaUrKwbyHd8WvUA"
                  target="_blank"
                  className="webinar-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    background: "#d4a853",
                    color: "#ffffff",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase" as const,
                    borderRadius: 4,
                    textDecoration: "none",
                    marginBottom: 10,
                    boxShadow: "0 8px 32px rgba(13,17,23,0.15)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  Reserve Your Spot — Free →
                </Link>
                <Link
                  href="https://calendly.com/hurraymangalam/neues-meeting"
                  target="_blank"
                  className="webinar-secondary-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    background: "transparent",
                    color: "rgba(13,17,23,0.6)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase" as const,
                    borderRadius: 4,
                    border: "1px solid rgba(13,17,23,0.15)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  Book Private 1-on-1 Session
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .webinar-wrapper { padding: 80px 40px !important; }
          .webinar-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 768px) {
          .webinar-wrapper { padding: 60px 16px !important; }
        }
        .webinar-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(13,17,23,0.25) !important;
        }
        .webinar-secondary-btn:hover {
          background: rgba(13,17,23,0.04) !important;
          color: #0d1117 !important;
          border-color: rgba(13,17,23,0.3) !important;
        }
      `}</style>
    </section>
  );
}
