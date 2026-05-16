"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionStyling } from "@/hooks/useSectionStyling";

export default function ShamanicAuraSection({ sanity }: { sanity?: Record<string, any> }) {
  const { sectionStyle, accent, overlayStyle, dividerJSX, responsiveCSS, id, dataAttributes } = useSectionStyling(sanity, 'shamanic-aura');
  const particles = Array.from({ length: 15 });

  return (
    <section
      id={id}
      {...dataAttributes}
      className="shamanic-aura-section"
      style={{
        position: "relative",
        backgroundColor: "#F5F0E8",
        padding: "clamp(60px, 8vw, 96px) 4vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 5,
        marginTop: "-1px",
        ...sectionStyle,
      }}
    >
      {overlayStyle && <div style={overlayStyle} />}
      {dividerJSX}
      {/* 1. Animated Aura Background */}
      <div
        style={{
          position: "absolute",
          inset: "-10% -10%",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.7,
        }}
      >
        <motion.div
          animate={{
            x: ["-5%", "5%"],
            y: ["-5%", "5%"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            top: "10%",
            left: "10%",
            background: "radial-gradient(circle, rgba(212,168,83,0.3) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{
            x: ["5%", "-5%"],
            y: ["5%", "-5%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: -5,
          }}
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            bottom: "10%",
            right: "10%",
            background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* 2. Floating Gold Particles */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: "110%", 
              opacity: 0, 
              scale: 0 
            }}
            animate={{ 
              y: "-10%", 
              opacity: [0, 0.6, 0.6, 0],
              scale: [0, 1, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: 4,
              height: 4,
              backgroundColor: "#d4a853",
              borderRadius: "50%",
              boxShadow: "0 0 10px #d4a853",
            }}
          />
        ))}
      </div>

      {/* 3. Pulsating Shamanic Source */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", marginBottom: 60, zIndex: 3 }}
      >
        {/* Primary Glow */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 140,
            height: 140,
            x: "-50%",
            y: "-50%",
            borderRadius: "50%",
            backgroundColor: "#d4a853",
            filter: "blur(40px)",
          }}
        />
        {/* Secondary Outer Glow */}
        <motion.div
          animate={{ scale: [1, 2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 180,
            height: 180,
            x: "-50%",
            y: "-50%",
            borderRadius: "50%",
            backgroundColor: "#f9d58b",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ 
            scale: [1, 1.12, 1], 
            rotate: [0, 5, 0, -5, 0],
            filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"] 
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "relative", width: 110, height: 110 }}
        >
          <Image
            src="/icon1.png"
            alt="Shamanic Source"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      </motion.div>

      {/* 4. Content Content */}
      <div style={{ position: "relative", zIndex: 5, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, transparent, #d4a853)" }} />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#d4a853",
            }}
          >
            Chosen from the Spirits
          </span>
          <div style={{ width: 40, height: 1, background: "linear-gradient(90deg, #d4a853, transparent)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#0d1117",
            marginBottom: 32,
            letterSpacing: "-0.02em",
          }}
        >
          Step into the<br />
          <motion.span
            animate={{
              backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #0d1117, #d4a853, #0d1117)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Field of Ancient Knowledge
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "1.1rem",
            color: "rgba(13,17,23,0.7)",
            lineHeight: 1.8,
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          Throughout human history, all the great teachers have always spoken of the same eternal truth:
          “Awaken and know thyself.”
          With the power of Shamanic Knowledge, you now have the chance to liberate your spirit from the invisible prison of conditioning, society, and false morality - so you can finally discover who you truly are.
          YOU, in your authentic individuality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginTop: 50 }}
        >
          <a
            href="#teachings"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "16px 40px",
              background: "#0d1117",
              color: "#ffffff",
              fontFamily: "'Cinzel', serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(13,17,23,0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#d4a853";
              e.currentTarget.style.color = "#0d1117";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#0d1117";
              e.currentTarget.style.color = "#ffffff";
            }}
          >
            Siberian Shamanic Knowledge
          </a>
        </motion.div>
      </div>
      <style>{responsiveCSS}</style>
    </section>
  );
}
