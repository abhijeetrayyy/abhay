"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const milestones = [
  {
    year: "2004",
    loc: "Japan — Mount Fuji",
    text: "2,500 people gathered at the base of Mount Fuji under Abhay's guidance. Shaman chiefs from North America and Asian tribes united in ceremony for the first time.",
    img: "/sao-gallery-img4.jpg",
  },
  {
    year: "2007",
    loc: "South Russia",
    text: "Major peace conferences and large spiritual gatherings where prayers and sacred rituals were held to bring peace and healing to the war-torn region.",
    img: "/sao-gallery-img2.jpg",
  },
  {
    year: "2015",
    loc: "Chile",
    text: "When earthquakes, volcanic ash, and severe drought converged on Chile, Abhay led ceremonies to shift the collective energetic field and support recovery.",
    img: "/sao-gallery-img8.jpg",
  },
  {
    year: "2022",
    loc: "Ukraine",
    text: "During the New Year's Retreat 2021–2022, Abhay received a vision of the invasion. Sacred ceremonies were organized across Europe to focus healing energy on the region.",
    img: "/healing-global-harmony.jpg",
  },
];

export default function TransformationSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const shamY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      id="transformation"
      style={{
        position: "relative",
        background: "var(--soft-sand)",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        marginTop: "-1px",
        zIndex: 20,
      }}
    >
      {/* Full-bleed atmospheric bg */}
      <motion.div style={{ position: "absolute", inset: "-10% 0", y: bgY }}>
        <Image
          src="/forest-mist.png"
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.15 }}
          sizes="100vw"
        />
      </motion.div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(249,246,240,0.98) 0%, rgba(249,246,240,0.7) 50%, rgba(249,246,240,0.95) 100%)",
          zIndex: 3,
        }}
      />

      {/* Shaman silhouette in the bg */}
      <motion.div
        style={{
          position: "absolute",
          right: "4%",
          bottom: 0,
          width: "32%",
          height: "85%",
          y: shamY,
          opacity: 0.08,
        }}
      >
        <Image
          src="/abhayoyun-banner-top.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "bottom" }}
          sizes="30vw"
        />
      </motion.div>

      <div
        className="transform-wrapper"
        style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "140px 80px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          className="transform-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "start",
          }}
        >
          {/* LEFT — Giant quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 1,
                  background: "rgba(212,168,83,0.6)", // Gold Line
                }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase" as const,
                  color: "rgba(212,168,83,0.8)", // Gold Text
                }}
              >
                Global Impact
              </span>
            </div>

            <blockquote style={{ margin: "0 0 48px 0" }}>
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.8rem, 6vw, 3.5rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  margin: "0 0 24px 0",
                  background:
                    "linear-gradient(135deg, #0d1117 0%, rgba(13,17,23,0.6) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                &ldquo;When you reconnect with your wild nature, trauma
                doesn&apos;t just heal —&nbsp; it transforms into power.&rdquo;
              </p>
              <footer
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase" as const,
                  color: "rgba(13,17,23,0.4)",
                }}
              >
                — Master Abhay Oyun
              </footer>
            </blockquote>

            <div
              style={{
                paddingTop: 40,
                borderTop: "1px solid rgba(13,17,23,0.05)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.95,
                  color: "rgba(13,17,23,0.6)",
                  margin: 0,
                }}
              >
                Called the{" "}
                <span
                  style={{ color: "rgba(13,17,23,0.8)", fontWeight: 500 }}
                >
                  World Shaman and Guardian of Our Planet
                </span>
                , Abhay Oyun has dedicated his life to responding to global
                crises — natural disasters, wars, humanitarian emergencies —
                through the ancient lens of shamanic intervention.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, delay: 0.15 }}
            style={{
              position: "relative",
              paddingLeft: 32,
              borderLeft: "1px solid rgba(13,17,23,0.06)",
            }}
          >
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                style={{
                  marginBottom: i < milestones.length - 1 ? 52 : 0,
                  position: "relative",
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -41,
                    top: 8,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    border: "1px solid rgba(212,168,83,0.3)", // Gold outer ring
                    background: "var(--soft-sand)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "rgba(212,168,83,0.6)", // Gold inner dot
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 16,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      color: "#d4a853",
                    }}
                  >
                    {m.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase" as const,
                      color: "rgba(13,17,23,0.35)",
                    }}
                  >
                    {m.loc}
                  </span>
                </div>
                {/* Milestone Image */}
                <motion.div 
                  initial={{ boxShadow: "0 10px 30px rgba(13,17,23,0.06)", borderColor: "rgba(13,17,23,0.04)" }}
                  whileHover={{ boxShadow: "0 20px 50px rgba(212,168,83,0.15)", borderColor: "rgba(212,168,83,0.3)" }}
                  transition={{ duration: 0.4 }}
                  style={{ 
                    marginBottom: 20, 
                    borderRadius: 14, 
                    overflow: "hidden", 
                    width: "100%", 
                    height: 190, 
                    position: "relative",
                    border: "1px solid rgba(13,17,23,0.04)",
                    background: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
                  >
                    <Image 
                      src={m.img} 
                      alt={m.loc}
                      fill
                      style={{ objectFit: "cover", filter: "sepia(25%) saturate(110%) brightness(0.95)" }} 
                    />
                  </motion.div>
                </motion.div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.85,
                    color: "rgba(13,17,23,0.6)",
                    margin: 0,
                  }}
                >
                  {m.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .transform-wrapper { padding: 80px 40px !important; }
          .transform-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 768px) {
          .transform-wrapper { padding: 60px 16px !important; }
        }
      `}</style>
    </section>
  );
}
