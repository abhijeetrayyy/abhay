"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const testimonials = [
  {
    quote: "After one session with Abhay, I felt a weight lift from my chest that I had been carrying for 20 years. It was like my cells remembered how to breathe again.",
    name: "Maria K.",
    location: "Berlin, Germany",
    img: "/sao-gallery-img5.jpg",
    type: "Healing Session"
  },
  {
    quote: "The SAMPO System completely rewired how I experience stress. What used to cripple me now passes through me. I have never felt more sovereign in my own body.",
    name: "James R.",
    location: "London, UK",
    img: "/sao-gallery-img3.jpg",
    type: "Training Program"
  },
  {
    quote: "I traveled to three continents seeking healing. What Abhay achieved in a single masterclass surpassed everything. This is ancient wisdom in its purest form.",
    name: "Elena V.",
    location: "Moscow, Russia",
    img: "/sao-gallery-img7.jpg",
    type: "Masterclass"
  },
  {
    quote: "What people remember most after a personal encounter with the shaman is the special inner feeling — an all-embracing love that truly touches the heart.",
    name: "Priya S.",
    location: "Mumbai, India",
    img: "/sao-gallery-img8.jpg",
    type: "Ceremony"
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
    <section style={{ position: "relative", background: "#F5F1EA", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 20% 80%, rgba(201,160,74,0.06) 0%, transparent 50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: 40, left: 30, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18rem", color: "rgba(201,160,74,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none", fontWeight: 400 }}>&ldquo;</div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(80px, 10vw, 140px) 24px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 18 }}>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, #C9A04A, transparent)' }} />
            <span style={{ color: '#A07D2E', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>
              Testimonials
            </span>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(to left, #C9A04A, transparent)' }} />
          </div>
          <h2 style={{
            margin: 0,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
            fontWeight: 400,
            color: '#1F1B16',
            letterSpacing: '-0.01em',
          }}>
            Stories of Transformation
          </h2>
        </motion.div>

        <div style={{ maxWidth: 850, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, x: dir * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ textAlign: 'center' }}
            >
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1.2rem, 2.8vw, 1.7rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.7,
                color: '#1F1B16',
                marginBottom: 36,
              }}>
                &ldquo;{testimonials[cur].quote}&rdquo;
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  background: '#F5F1EA',
                  border: '2px solid rgba(201,160,74,0.3)',
                }}>
                  <img
                    src={testimonials[cur].img}
                    alt={testimonials[cur].name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1.05rem',
                    color: '#1F1B16',
                    fontWeight: 500,
                  }}>
                    {testimonials[cur].name}
                  </div>
                  <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '0.65rem',
                    color: '#A07D2E',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}>
                    {testimonials[cur].location} &bull; {testimonials[cur].type}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 44 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                style={{
                  width: i === cur ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === cur ? '#C9A04A' : 'rgba(201,160,74,0.25)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <Link
            href="/#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 28px',
              background: '#1F1B16',
              color: '#FDFCFA',
              fontFamily: "'Cinzel', serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              borderRadius: 2,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            Share Your Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
