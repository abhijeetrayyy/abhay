"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "After one session with Abhay, I felt a weight lift from my chest that I had been carrying for 20 years. It was like my cells remembered how to breathe again.",
    name: "Maria K.",
    location: "Berlin, Germany",
    img: "/sao-gallery-img5.jpg",
  },
  {
    quote:
      "The Sampo System completely rewired how I experience stress. What used to cripple me now passes through me. I have never felt more sovereign in my own body.",
    name: "James R.",
    location: "London, UK",
    img: "/sao-gallery-img3.jpg",
  },
  {
    quote:
      "I traveled to three continents seeking healing. What Abhay achieved in a single masterclass surpassed everything. This is ancient wisdom in its purest form.",
    name: "Elena V.",
    location: "Moscow, Russia",
    img: "/sao-gallery-img7.jpg",
  },
  {
    quote:
      "What people remember most after a personal encounter with the shaman is the special inner feeling — an all-embracing love that truly touches the heart.",
    name: "Priya S.",
    location: "Mumbai, India",
    img: "/sao-gallery-img8.jpg",
  },
];

export default function TestimonialsSection() {
  const [cur, setCur] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setDir(1);
      setCur((p) => (p + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const go = (i: number) => {
    setDir(i > cur ? 1 : -1);
    setCur(i);
  };

  return (
    <section
      style={{
        position: "relative",
        background: "var(--warm-beige)",
        overflow: "hidden",
      }}
    >
      {/* Decorative large quote mark */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 80,
          fontFamily: "'Playfair Display', serif",
          fontSize: "20rem",
          color: "rgba(212,168,83,0.12)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "140px 80px" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 80,
          }}
        >
          <div style={{ width: 36, height: 1, background: "#d4a853" }} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase" as const,
              color: "#d4a853",
            }}
          >
            Voices of Transformation
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "center",
          }}
        >
          {/* Left — static heading */}
          <div>
            <h2
              style={{
                margin: "0 0 24px 0",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                letterSpacing: "-0.025em",
                color: "#0d1117",
                lineHeight: 0.95,
              }}
            >
              Lives Changed
              <br />
              <span style={{ fontStyle: "italic", color: "#d4a853" }}>
                Across the World
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#666c76",
                maxWidth: 380,
              }}
            >
              Over 10,000 individuals across 40 countries have experienced
              direct healing from Master Abhay Oyun&apos;s practices.
            </p>

            {/* Progress dots */}
            <div style={{ display: "flex", gap: 10, marginTop: 48 }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  style={{
                    width: i === cur ? 32 : 8,
                    height: 8,
                    borderRadius: 99,
                    border: "none",
                    outline: "none",
                    cursor: "pointer",
                    background: i === cur ? "#d4a853" : "rgba(13,17,23,0.15)",
                    transition: "all 0.4s ease",
                    padding: 0,
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — animated quote inside an elegant card */}
          <div
            style={{
              position: "relative",
              height: 440,
              background: "#faf6eb",
              borderRadius: 24,
              boxShadow: "0 20px 80px rgba(13,17,23,0.04)",
              border: "1px solid rgba(13,17,23,0.03)",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={cur}
                custom={dir}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 32, y: 0 }),
                  center: { opacity: 1, x: 0, y: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -32, y: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  width: "100%",
                  height: "100%",
                }}
                className="testimonial-flex-inner"
              >
                {/* Content Side */}
                <div
                  style={{
                    flex: "1.2",
                    padding: "60px 40px 60px 60px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "clamp(1.15rem, 1.8vw, 1.6rem)",
                      lineHeight: 1.6,
                      color: "#0d1117",
                      margin: "0 0 40px 0",
                    }}
                  >
                    &ldquo;{testimonials[cur].quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      style={{
                        width: 32,
                        height: 1,
                        background:
                          "linear-gradient(to right, #d4a853, transparent)",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.95rem",
                          fontWeight: 700,
                          color: "#0d1117",
                        }}
                      >
                        {testimonials[cur].name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 10,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase" as const,
                          color: "rgba(13,17,23,0.4)",
                          marginTop: 6,
                        }}
                      >
                        {testimonials[cur].location}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Image Side */}
                <div style={{ flex: "1", position: "relative", height: "100%", overflow: "hidden" }} className="testimonial-img-side">
                  <motion.img 
                    key={cur}
                    src={testimonials[cur].img} 
                    alt={testimonials[cur].name}
                    initial={{ scale: 1.2, filter: "brightness(0.9) blur(4px)" }}
                    animate={{ scale: 1, filter: "brightness(1) blur(0px)" }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {/* Premium fade mask for seamless elegant edge */}
                  <div 
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to right, #faf6eb 0%, rgba(250,246,235,0.8) 12%, transparent 45%)"
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-flex-inner {
          flex-direction: row;
        }
        @media (max-width: 900px) {
          .testimonial-flex-inner {
            flex-direction: column;
          }
          .testimonial-img-side {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
