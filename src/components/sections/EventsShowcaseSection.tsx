"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: "01",
    tag: "Men's Intensive",
    title: "Reclaim Your Masculine Power",
    date: "March 25–29, 2025",
    location: "Denver, Colorado",
    seats: "18 spots remaining",
    price: "From $1,200",
    desc: "A 5-day immersive for men ready to step fully into their energetic sovereignty. Cold exposure, sacred fire ceremony, drum healing, and direct shamanic mentorship with Master Abhay.",
    img: "/sao-gallery-img3.jpg",
    color: "#2C4A3B",
    textColor: "#ffffff",
    highlights: [
      "Cold Plunge Ceremony",
      "Sacred Fire Ritual",
      "Drum Healing",
      "1-on-1 Session",
    ],
    badge: "Filling Fast",
  },
  {
    id: "02",
    tag: "Women's Gathering",
    title: "Shamanism — Source of Happiness & Love",
    date: "March 20–22, 2025",
    location: "Denver, Colorado",
    seats: "12 spots remaining",
    price: "From $890",
    desc: "A sacred gathering for women. Reconnect with the ancient feminine power of the Earth through ceremony, sound medicine, and shamanic healing circles in an intimate group setting.",
    img: "/sao-gallery-img1.jpg",
    color: "#d4a853",
    textColor: "#03070f",
    highlights: [
      "Sound Ceremony",
      "Sisterhood Circle",
      "Energy Work",
      "Forest Ritual",
    ],
    badge: "Limited",
  },
  {
    id: "03",
    tag: "Free Webinar",
    title: "Your First Step Into the SAMPO System",
    date: "March 19, 2025",
    location: "Online · Global",
    seats: "Open registration",
    price: "Free",
    desc: "Experience the SAMPO System from anywhere in the world. A live initiation into the foundations of shamanic energy work. Open to all seekers — no prior experience required.",
    img: "/healing-global-harmony.jpg",
    color: "#B87620",
    textColor: "#ffffff",
    highlights: [
      "Live Q&A",
      "Energy Practice",
      "SAMPO Intro",
      "Worldwide Access",
    ],
    badge: "Free Entry",
  },
];

export default function EventsShowcaseSection() {
  return (
    <section
      id="events"
      style={{
        background: "var(--warm-beige)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle warm texture grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "140px 7vw" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 96,
            flexWrap: "wrap" as const,
            gap: 32,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 20,
              }}
            >
              <div style={{ width: 28, height: 1, background: "#d4a853" }} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase" as const,
                  color: "#d4a853",
                }}
              >
                Upcoming Events
              </span>
            </div>
            <h2
              style={{
                margin: 0,
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(2.6rem,4.5vw,5rem)",
                letterSpacing: "-0.04em",
                color: "#0d1117",
                lineHeight: 0.92,
              }}
            >
              Join Abhay
              <br />
              <span style={{ fontStyle: "italic", color: "#d4a853" }}>
                in the Field.
              </span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.92rem",
              lineHeight: 1.85,
              color: "#777e8a",
              maxWidth: 340,
            }}
          >
            Intimate gatherings designed for real transformation. No performance
            — only depth, ceremony, and direct energetic healing.
          </p>
        </motion.div>

        {/* Events — stacked large cards */}
        <div
          style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}
        >
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                background: "#FFFDF8",
                boxShadow: "0 20px 60px rgba(13,17,23,0.06)",
                border: "1px solid rgba(13,17,23,0.04)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 420px" : "420px 1fr",
                }}
              >
                {/* Content side */}
                <div
                  style={{
                    padding: "56px 64px",
                    display: "flex",
                    flexDirection: "column" as const,
                    justifyContent: "center",
                    order: i % 2 === 0 ? 0 : 1,
                  }}
                >
                  {/* Tag + badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 28,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.28em",
                        textTransform: "uppercase" as const,
                        color: ev.color,
                        background: `${ev.color}16`,
                        padding: "5px 14px",
                        borderRadius: 99,
                        border: `1px solid ${ev.color}30`,
                      }}
                    >
                      {ev.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase" as const,
                        color: "rgba(13,17,23,0.4)",
                        background: "rgba(13,17,23,0.04)",
                        padding: "5px 12px",
                        borderRadius: 99,
                      }}
                    >
                      {ev.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "clamp(1.6rem,2.5vw,2.5rem)",
                      color: "#0d1117",
                      margin: "0 0 20px 0",
                      lineHeight: 1.1,
                    }}
                  >
                    {ev.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      lineHeight: 1.9,
                      color: "#666e78",
                      margin: "0 0 32px 0",
                      maxWidth: 480,
                    }}
                  >
                    {ev.desc}
                  </p>

                  {/* Highlights row */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap" as const,
                      gap: 8,
                      marginBottom: 40,
                    }}
                  >
                    {ev.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "rgba(13,17,23,0.5)",
                          background: "rgba(13,17,23,0.04)",
                          border: "1px solid rgba(13,17,23,0.08)",
                          borderRadius: 99,
                          padding: "5px 12px",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Meta + CTA row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap" as const,
                      gap: 16,
                      borderTop: "1px solid rgba(13,17,23,0.06)",
                      paddingTop: 28,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#0d1117",
                          marginBottom: 4,
                        }}
                      >
                        {ev.date}
                      </div>
                      <div style={{ display: "flex", gap: 16 }}>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.65rem",
                            color: "rgba(13,17,23,0.4)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          📍 {ev.location}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.65rem",
                            color: ev.color,
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                          }}
                        >
                          🪑 {ev.seats}
                        </span>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 12 }}
                    >
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.4rem",
                          color: "#0d1117",
                          fontWeight: 700,
                        }}
                      >
                        {ev.price}
                      </span>
                      <Link
                        href="https://forms.gle/jEDaUrKwbyHd8WvUA"
                        target="_blank"
                        className="event-btn"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "16px 32px",
                          background:
                            "linear-gradient(135deg, #0d1117, #1a222e)",
                          color: "#ffffff",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 800,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase" as const,
                          borderRadius: 4,
                          textDecoration: "none",
                          boxShadow: "0 10px 30px rgba(13,17,23,0.15)",
                          transition:
                            "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                      >
                        Register
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 8"
                          fill="none"
                        >
                          <path
                            d="M1 4h12M10 1l3 3-3 3"
                            stroke="#d4a853" // Gold arrow
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Image side */}
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 400,
                    order: i % 2 === 0 ? 1 : 0,
                  }}
                >
                  <Image
                    src={ev.img}
                    alt={ev.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="420px"
                  />
                  {/* Color-grade film overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${ev.color}18, rgba(3,7,15,0.3))`,
                    }}
                  />
                  {/* Large event number */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 20,
                      right: 24,
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "6rem",
                      color: "rgba(255,255,255,0.08)",
                      lineHeight: 1,
                      userSelect: "none" as const,
                    }}
                  >
                    {ev.id}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .event-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(13,17,23,0.25) !important;
        }
      `}</style>
    </section>
  );
}
