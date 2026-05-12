"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function SacredGeometry() {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', opacity: 0.35 }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: 700,
          height: 700,
          border: '1px solid rgba(201,160,74,0.12)',
          borderRadius: '50%',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: 520,
          height: 520,
          border: '1px solid rgba(201,160,74,0.15)',
          borderRadius: '50%',
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: 850,
          height: 850,
          border: '1px solid rgba(201,160,74,0.06)',
          borderRadius: '50%',
        }}
      />
      {/* Sacred geometry star */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: 380,
          height: 380,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0.08,
        }}
      >
        <svg width="380" height="380" viewBox="0 0 200 200" fill="none" stroke="#C9A04A" strokeWidth="0.5">
          <polygon points="100,10 120,70 180,70 130,105 150,170 100,135 50,170 70,105 20,70 80,70" />
        </svg>
      </motion.div>
    </div>
  );
}

function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "110vh",
            x: `${Math.random() * 100}vw`,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 80 - 40}px)`,
            opacity: [0, Math.random() * 0.5 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 18 + 12,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 12,
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            borderRadius: '50%',
            background: i % 3 === 0 ? 'rgba(201,160,74,0.7)' : i % 3 === 1 ? 'rgba(155,168,139,0.5)' : 'rgba(255,255,255,0.5)',
            boxShadow: i % 3 === 0 ? '0 0 12px rgba(201,160,74,0.5)' : i % 3 === 1 ? '0 0 8px rgba(155,168,139,0.4)' : 'none',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2 }}
      style={{
        position: 'absolute',
        bottom: 36,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        zIndex: 20,
      }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          width: 22,
          height: 38,
          border: '1.5px solid rgba(201,160,74,0.35)',
          borderRadius: 11,
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 7,
        }}
      >
        <motion.div
          animate={{ opacity: [1, 0.4, 1], y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 2.5, height: 7, background: '#C9A04A', borderRadius: 2 }}
        />
      </motion.div>
      <span style={{ color: 'rgba(31,27,22,0.35)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>
        Scroll
      </span>
    </motion.div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.85, 0.45]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 800,
        backgroundColor: "#FBF9F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ position: "absolute", inset: 0, zIndex: 1, scale, opacity: imgOpacity }}>
        <img
          src="/D9DB5CE5-E5BD-400D-9114-E5A90138CFFA_1_105_c.jpeg"
          alt="Shaman Abhay Oyun"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
            filter: "brightness(1.05) saturate(0.9)",
          }}
        />
      </motion.div>

      {/* Light overlay gradients */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(251,249,245,0.5) 0%, rgba(251,249,245,0.2) 35%, rgba(251,249,245,0.8) 85%, rgba(251,249,245,0.95) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "radial-gradient(ellipse at 50% 90%, rgba(201,160,74,0.15) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 4, background: "radial-gradient(ellipse at 25% 25%, rgba(155,168,139,0.1) 0%, transparent 50%)" }} />

      {/* Animated Elements */}
      <SacredGeometry />
      <Particles />

      {/* Main Content */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 20,
          textAlign: "center",
          y: textY,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 6vw",
          maxWidth: 1200,
        }}
      >
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 22px",
            borderRadius: 2,
            border: "1px solid rgba(201,160,74,0.25)",
            background: "rgba(251,249,245,0.7)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            marginBottom: 36,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A04A' }} />
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#A07D2E" }}>
            Siberian Shaman & Guardian of Our Planet
          </span>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A04A' }} />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 style={{
            margin: 0,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: "clamp(3.2rem, 10vw, 7.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.02,
            color: "#1F1B16",
          }}>
            Between Worlds
            <br />
            <span style={{
              fontStyle: "italic",
              backgroundImage: "linear-gradient(135deg, #E8CD7A 0%, #C9A04A 40%, #A07D2E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Abhay Oyun
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Lora', Georgia, serif",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            lineHeight: 1.85,
            color: "rgba(31,27,22,0.65)",
            maxWidth: 680,
            marginTop: 28,
            marginBottom: 0,
            fontWeight: 400,
          }}
        >
          Awakening the world to the raw power of ancient Siberian shamanic traditions.
          Sacred ceremonies, healing, and training since 1991.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center", marginTop: 40 }}
        >
          <Link
            href="https://calendly.com/hurraymangalam/individualsessions"
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              padding: "18px 44px",
              background: "linear-gradient(135deg, #C9A04A, #A07D2E)",
              color: "#FDFCFA",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: 2,
              textDecoration: "none",
              boxShadow: "0 8px 36px rgba(201,160,74,0.3)",
              transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
              <path d="M6 5l4 3-4 3V5z" fill="currentColor" />
            </svg>
            Book a Free Session
          </Link>
          <Link
            href="https://forms.gle/jEDaUrKwbyHd8WvUA"
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "18px 44px",
              background: "rgba(31,27,22,0.04)",
              backdropFilter: "blur(10px)",
              color: "#1F1B16",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: 2,
              border: "1px solid rgba(31,27,22,0.12)",
              textDecoration: "none",
              transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            Join the Webinar
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      <style>{`
        a[href*="calendly"]:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 44px rgba(201,160,74,0.45) !important;
        }
        a[href*="forms.gle"]:hover {
          background: rgba(31,27,22,0.08) !important;
          border-color: rgba(31,27,22,0.25) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
