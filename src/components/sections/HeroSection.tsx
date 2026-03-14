"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Layer 3: Subtle Motion (Particles)
  const renderParticles = () => {
    if (!mounted) return null; // Avoid hydration mismatch
    
    return Array.from({ length: 25 }).map((_, i) => {
      const size = Math.random() * 3 + 1.5;
      const left = Math.random() * 100;
      const duration = Math.random() * 15 + 15;
      const delay = Math.random() * 5;
      
      return (
        <motion.div
          key={i}
          initial={{ 
            y: "110vh", 
            x: `${left}vw`,
            opacity: Math.random() * 0.4 + 0.1
          }}
          animate={{ 
            y: "-10vh",
            x: `calc(${left}vw + ${Math.random() * 80 - 40}px)`
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            ease: "linear",
            delay: delay
          }}
          style={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            background: "rgba(255, 120, 40, 0.8)", // bright ember orange
            boxShadow: "0 0 15px rgba(255, 80, 0, 0.6), 0 0 30px rgba(255, 120, 0, 0.3)",
            filter: "blur(0.5px)",
            zIndex: 15,
            pointerEvents: "none",
          }}
        />
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 700,
        backgroundColor: "var(--deep-navy)", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Layer 1: Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <img
          src="/hero-bg.jpg"
          alt="Shamanic Background"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.65,
          }}
        />
      </div>

      {/* Layer 2: Mystical Overlays */}
      {/* Deep navy gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "linear-gradient(to bottom, rgba(11, 19, 43, 0.5) 0%, rgba(11, 19, 43, 0.3) 40%, rgba(11, 19, 43, 0.85) 100%)",
        }}
      />
      
      {/* Aurora green radial glow */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          background: "radial-gradient(circle at 30% 120%, rgba(0, 210, 128, 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Warm gold accent glow */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          background: "radial-gradient(circle at 70% 30%, rgba(212, 168, 83, 0.08) 0%, transparent 50%)",
        }}
      />

      {/* Layer 3: Subtle Motion (Particles) */}
      {renderParticles()}

      {/* Layer 4 & 5: Typography and CTA */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 20,
          textAlign: "center",
          y: textY,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 6vw"
        }}
      >
        {/* Eyebrow */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           style={{
             display: "inline-block",
             padding: "6px 16px",
             borderRadius: "100px",
             border: "1px solid rgba(212,168,83,0.3)",
             background: "rgba(11,19,43,0.4)",
             backdropFilter: "blur(4px)",
             fontFamily: "'Inter', sans-serif",
             fontSize: "0.65rem",
             fontWeight: 700,
             letterSpacing: "0.2em",
             textTransform: "uppercase",
             color: "#d4a853",
             marginBottom: "2rem"
           }}
        >
          Master Abhay Oyun
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 7rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "#ffffff",
              textShadow: "0 10px 40px rgba(0,0,0,0.6)"
            }}
          >
            Ancient Wisdom.
            <br />
            <span style={{ 
              fontStyle: "italic", 
              color: "transparent",
              backgroundImage: "linear-gradient(135deg, #f9d58b, #d4a853)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text"
            }}>
              for the Modern World
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1.05rem, 1.3vw, 1.35rem)",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.75)",
            maxWidth: 680,
            marginTop: "1.5rem",
            marginBottom: "3rem",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)"
          }}
        >
          Experience 35 years of Siberian shamanic mastery. Restore your vital energy, dissolve trauma, and awaken your dormant life force.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Link
            href="https://calendly.com/hurraymangalam/neues-meeting"
            target="_blank"
            className="hero-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "18px 40px",
              background: "linear-gradient(135deg, #d4a853, #b8893a)",
              color: "#050810",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: 4,
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(212,168,83,0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            Book a Free Session
          </Link>
          <Link
            href="https://forms.gle/jEDaUrKwbyHd8WvUA"
            target="_blank"
            className="hero-cta-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "18px 40px",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: 4,
              border: "1px solid rgba(255,255,255,0.2)",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
          >
            Join the Webinar
          </Link>
        </motion.div>
      </motion.div>

      <style>{`
        .hero-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(212,168,83,0.5) !important;
        }
        .hero-cta-secondary:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: rgba(255,255,255,0.4) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
