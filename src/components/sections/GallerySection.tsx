"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const galleryRow1 = [
  { src: "/sao-gallery-img1.jpg", alt: "Gathering", aspect: "4/3" },
  { src: "/sao-gallery-img2.jpg", alt: "Ceremony", aspect: "3/4" },
  { src: "/sao-gallery-img3.jpg", alt: "Community", aspect: "4/3" },
  { src: "/sao-gallery-img4.jpg", alt: "Ritual", aspect: "3/4" },
  { src: "/sao-gallery-img5.jpg", alt: "Session", aspect: "4/3" },
];

const galleryRow2 = [
  { src: "/sao-gallery-img6.jpg", alt: "Gathering", aspect: "3/4" },
  { src: "/sao-gallery-img7.jpg", alt: "Ceremony", aspect: "4/3" },
  { src: "/sao-gallery-img8.jpg", alt: "Community", aspect: "3/4" },
  { src: "/sao-gallery-img9.jpg", alt: "Ritual", aspect: "1/1" },
  { src: "/visited-countries-img.png", alt: "Global", aspect: "3/4" },
];

function GalleryImage({ img }: { img: (typeof galleryRow1)[0] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      style={{
        flexShrink: 0,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        aspectRatio: img.aspect,
        width: "clamp(260px, 30vw, 420px)",
        boxShadow: "0 16px 40px rgba(31,27,22,0.08)",
        border: "1px solid rgba(31,27,22,0.04)",
        transition: "box-shadow 0.4s ease",
        background: "#FDFCFA",
      }}
    >
      <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} sizes="420px" />
    </motion.div>
  );
}

export default function GallerySection() {
  const shouldReduce = useReducedMotion();

  return (
    <section style={{
      position: "relative",
      background: "#FBF9F5",
      overflow: "hidden",
      padding: "clamp(80px, 12vw, 160px) 0",
      zIndex: 20,
    }}>
      <div className="gallery-header" style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "0 clamp(20px, 6vw, 80px)",
        marginBottom: "clamp(48px, 8vh, 80px)",
        position: "relative",
        zIndex: 3,
      }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "16px" }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(to right, #C9A04A, transparent)" }} />
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.62rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#A07D2E",
            }}>
              Shamanic Retreats
            </span>
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            letterSpacing: "-0.02em",
            color: "#1F1B16",
            lineHeight: 1.1,
          }}>
            Join our
            <br />
            <span style={{ fontStyle: "italic", color: "rgba(31,27,22,0.3)" }}>shamanic family.</span>
          </h2>
        </motion.div>
      </div>

      <div style={{ position: "relative", marginBottom: "28px", width: "100%" }}>
        <motion.div
          animate={shouldReduce ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: "22px", width: "max-content", paddingLeft: "22px" }}
        >
          {[...galleryRow1, ...galleryRow1].map((img, i) => (
            <GalleryImage key={`r1-${i}`} img={img} />
          ))}
        </motion.div>
      </div>

      <div style={{ position: "relative", width: "100%" }}>
        <motion.div
          animate={shouldReduce ? {} : { x: ["-50%", "0%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: "22px", width: "max-content", paddingLeft: "22px" }}
        >
          {[...galleryRow2, ...galleryRow2].map((img, i) => (
            <GalleryImage key={`r2-${i}`} img={img} />
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) { .gallery-header { padding: 0 24px !important; } }
      `}</style>
    </section>
  );
}
