"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Gallery images with aspect ratios for flex sizing
const gallery = [
  { src: "/sao-gallery-img1.jpg", alt: "Abhay Oyun with community at a sacred gathering", aspect: "4/3" },
  { src: "/sao-gallery-img2.jpg", alt: "Fire ceremony in the night", aspect: "3/4" },
  { src: "/sao-gallery-img3.jpg", alt: "Group healing in the snow", aspect: "4/3" },
  { src: "/sao-gallery-img4.jpg", alt: "Retreat gathering", aspect: "3/4" },
  { src: "/sao-gallery-img5.jpg", alt: "Sacred ritual outdoors", aspect: "4/3" },
  { src: "/sao-gallery-img6.jpg", alt: "Ceremonial gathering", aspect: "3/4" },
  { src: "/sao-gallery-img7.jpg", alt: "Healing session", aspect: "4/3" },
  { src: "/sao-gallery-img8.jpg", alt: "Community", aspect: "3/4" },
  { src: "/visited-countries-img.png", alt: "Abhay Oyun at sacred site", aspect: "3/4" },
];

function GalleryImage({
  img,
  delay,
}: {
  img: (typeof gallery)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.025, y: -4 }}
      style={{
        flexShrink: 0,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        aspectRatio: img.aspect,
        width: "clamp(240px, 60vw, 380px)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "box-shadow 0.4s ease",
        cursor: "zoom-in",
        filter: "sepia(25%) saturate(110%) brightness(0.95)",
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        style={{ objectFit: "cover" }}
        sizes="380px"
      />
      {/* Bottom vignette for depth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,15,28,0.45) 0%, transparent 55%)",
        }}
      />
    </motion.div>
  );
}

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["0%", "-7%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], shouldReduce ? ["0%", "0%"] : ["0%", "7%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        background: "var(--soft-sand)",
        overflow: "hidden",
        padding: "clamp(64px, 9vw, 120px) 0",
        marginTop: "-1px",
        zIndex: 20,
      }}
    >
      {/* Ambient radial overlay */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          height: "50%",
          background:
            "radial-gradient(ellipse, rgba(212,168,83,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        className="gallery-header"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 80px)",
          marginBottom: "clamp(40px, 6vh, 72px)",
          position: "relative",
          zIndex: 3,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduce ? 0 : 0.9 }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: "clamp(12px, 2vh, 18px)",
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
                fontSize: "clamp(0.57rem, 0.72vw, 0.65rem)",
                fontWeight: 700,
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
                color: "#d4a853",
              }}
            >
              Global Footprint
            </span>
          </div>

          <h2
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(2rem, 8vw, 4rem)",
              letterSpacing: "-0.025em",
              color: "#0d1117",
              lineHeight: 1.0,
            }}
          >
            40 Countries.
            <br />
            <span style={{ fontStyle: "italic", color: "rgba(13,17,23,0.35)" }}>
              One Sacred Mission.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Row 1 — shifts left on scroll */}
      <motion.div
        style={{
          x: x1,
          display: "flex",
          gap: "clamp(10px, 1.4vw, 20px)",
          paddingLeft: "clamp(20px, 5vw, 80px)",
          marginBottom: "clamp(10px, 1.4vw, 20px)",
        }}
      >
        {gallery.slice(0, 5).map((img, i) => (
          <GalleryImage key={img.src} img={img} delay={shouldReduce ? 0 : i * 0.07} />
        ))}
      </motion.div>

      {/* Row 2 — shifts right on scroll */}
      <motion.div
        style={{
          x: x2,
          display: "flex",
          gap: "clamp(10px, 1.4vw, 20px)",
          paddingLeft: "clamp(10px, 2.5vw, 40px)",
        }}
      >
        {gallery.slice(4).map((img, i) => (
          <GalleryImage key={img.src + i} img={img} delay={shouldReduce ? 0 : i * 0.07 + 0.1} />
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-header {
            padding: 0 16px !important;
            margin-bottom: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
