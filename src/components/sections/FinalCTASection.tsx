"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--warm-beige)",
      }}
    >
      {/* Full-bleed image */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/ritual-gathering.png"
          alt="Sacred ceremony"
          fill
          style={{ objectFit: "cover", opacity: 0.08, filter: "grayscale(100%) contrast(1.2)" }}
          sizes="100vw"
        />
      </div>

      {/* Floating shaman silhouette, right side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          right: 80,
          top: 0,
          bottom: 0,
          width: 480,
          opacity: 0.10,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/abhayoyun-banner-top.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "center bottom" }}
          sizes="480px"
        />
      </motion.div>

      <div
        className="final-cta-wrapper"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "160px 80px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 800 }}
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
              Begin Your Path
            </span>
          </div>

          <h2
            style={{
              margin: "0 0 32px 0",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              letterSpacing: "-0.04em",
              color: "#0d1117",
              lineHeight: 0.9,
            }}
          >
            The Ancient
            <br />
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f9d58b 0%, #d4a853 100%)", // Gold gradient
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Path
            </span>
            <br />
            Awaits You.
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: "rgba(13,17,23,0.55)",
              maxWidth: 480,
              marginBottom: 56,
            }}
          >
            Whether you begin with a free webinar or a personal shamanic session
            — transformation begins with a single decision to show up.
          </p>

          <div
            className="final-cta-buttons"
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap" as const,
              marginBottom: 60,
            }}
          >
            <Link
              href="https://calendly.com/hurraymangalam/neues-meeting"
              target="_blank"
              className="final-primary-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "18px 44px",
                background: "#d4a853",
                color: "#ffffff",
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                borderRadius: 4,
                textDecoration: "none",
                boxShadow: "0 8px 40px rgba(13,17,23,0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              Book a Free Session
            </Link>
            <Link
              href="https://forms.gle/jEDaUrKwbyHd8WvUA"
              target="_blank"
              className="final-secondary-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "18px 44px",
                background: "rgba(13,17,23,0.03)",
                color: "rgba(13,17,23,0.8)",
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase" as const,
                borderRadius: 4,
                border: "1px solid rgba(13,17,23,0.15)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Watch Free Webinar
            </Link>
          </div>

          {/* Trust row */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, marginBottom: 60 }}>
            {[
              "35+ Years of Practice",
              "40 Countries Served",
              "10,000+ Transformations",
            ].map((t) => (
               <div
                key={t}
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <div
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "rgba(212,168,83,0.6)", // Gold dot
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "rgba(13,17,23,0.4)",
                    textTransform: "uppercase" as const,
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>

          {/* Social Links Formatted Similarly */}
          <div
             style={{
               display: "flex",
               gap: 16,
               flexWrap: "wrap" as const,
             }}
           >
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
                 style={{
                   display: "inline-flex",
                   alignItems: "center",
                   gap: 6,
                   padding: "12px 20px",
                   background: "rgba(13,17,23,0.03)",
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
                 onMouseEnter={(e) => {
                   e.currentTarget.style.background = "rgba(13,17,23,0.08)";
                   e.currentTarget.style.borderColor = "rgba(13,17,23,0.18)";
                   e.currentTarget.style.color = "#0d1117";
                   e.currentTarget.style.transform = "translateY(-2px)";
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.background = "rgba(13,17,23,0.03)";
                   e.currentTarget.style.borderColor = "rgba(13,17,23,0.08)";
                   e.currentTarget.style.color = "rgba(13,17,23,0.45)";
                   e.currentTarget.style.transform = "translateY(0)";
                 }}
               >
                 {label}
               </a>
             ))}
           </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .final-cta-wrapper { padding: 80px 40px !important; }
        }
        @media (max-width: 768px) {
          .final-cta-wrapper { padding: 60px 20px !important; }
          .final-cta-buttons {
            flex-direction: column !important;
          }
          .final-primary-btn, .final-secondary-btn {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        .final-primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(13,17,23,0.25) !important;
        }
        .final-secondary-btn:hover {
          background: rgba(13,17,23,0.06) !important;
          border-color: rgba(13,17,23,0.25) !important;
          color: #0d1117 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
