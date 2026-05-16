"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "MAR 25–29",
    location: "Denver, CO",
    tag: "Men's Intensive",
    title: "Reclaim Your Masculine Power",
    desc: "A 5-day immersive for men ready to step fully into their energetic sovereignty. Cold exposure, sacred fire ceremony, drum healing, and direct shamanic mentorship.",
    image: "/sao-gallery-img3.jpg",
    color: "#00ffaa",
    href: "https://forms.gle/jEDaUrKwbyHd8WvUA",
  },
  {
    date: "MAR 20–22",
    location: "Denver, CO",
    tag: "Women's Gathering",
    title: "Shamanism — Source of Happiness & Love",
    desc: "A sacred gathering for women. Reconnect with the ancient feminine power of the Earth through ceremony, sound medicine, and shamanic healing circles.",
    image: "/sao-gallery-img1.jpg",
    color: "#d4a853",
    href: "https://forms.gle/jEDaUrKwbyHd8WvUA",
  },
  {
    date: "MAR 19",
    location: "Online · Worldwide",
    tag: "Free Webinar",
    title: "Your First Step Into the SAMPO System",
    desc: "Experience the Sampo System from anywhere in the world. A live initiation into the foundations of shamanic energy work. Open to all seekers — no experience needed.",
    image: "/shamanic-practices.jpg",
    color: "#00ffaa",
    href: "https://forms.gle/jEDaUrKwbyHd8WvUA",
  },
];

export default function EventsSection() {
  return (
    <section
      id="events"
      style={{
        background: "#f5f0ea",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(48px, 8vw, 88px) clamp(20px, 5vw, 80px)" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "end",
            marginBottom: 96,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div style={{ width: 36, height: 1, background: "#d4a853" }} />
              <span
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.3em",
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
                fontWeight: 400,
                fontSize: "clamp(2.5rem, 4.5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                color: "#0d1117",
                lineHeight: 0.95,
              }}
            >
              Join Abhay
              <br />
              <span style={{ fontStyle: "italic", color: "#d4a853" }}>
                in the Field
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "#666c76",
              maxWidth: 380,
              marginLeft: "auto",
            }}
          >
            All events are small, intimate gatherings — designed for
            transformation, not performance. Limited spaces available.
          </motion.p>
        </div>

        {/* Event cards — editorial horizontal layout */}
        <div
          style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}
        >
          {events.map((ev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    i % 2 === 0 ? "300px 1fr auto" : "auto 1fr 300px",
                  gap: 0,
                  borderTop: "1px solid rgba(13,17,23,0.08)",
                  padding: "clamp(24px, 4vw, 40px) 0",
                  alignItems: "center",
                }}
              >
                {i % 2 === 0 ? (
                  <>
                    {/* Image */}
                    <div
                      style={{
                        position: "relative",
                        height: 220,
                        borderRadius: 14,
                        overflow: "hidden",
                        marginRight: "clamp(24px, 4vw, 48px)",
                      }}
                    >
                      <Image
                        src={ev.image}
                        alt={ev.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="300px"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(13,17,23,0.12)",
                        }}
                      />
                      <div style={{ position: "absolute", top: 16, left: 16 }}>
                        <span
                          style={{
                            background: "rgba(13,17,23,0.7)",
                            backdropFilter: "blur(8px)",
                            borderRadius: 99,
                            padding: "4px 12px",
                            fontFamily: "'Cinzel', serif",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase" as const,
                            color: ev.color,
                          }}
                        >
                          {ev.tag}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ padding: "0 clamp(24px, 3vw, 48px) 0 0" }}>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase" as const,
                          color: "rgba(13,17,23,0.3)",
                          marginBottom: 12,
                        }}
                      >
                        {ev.date} · {ev.location}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 400,
                          fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                          color: "#0d1117",
                          margin: "0 0 16px 0",
                          lineHeight: 1.2,
                        }}
                      >
                        {ev.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.85,
                          color: "#666c76",
                          margin: 0,
                          maxWidth: 440,
                        }}
                      >
                        {ev.desc}
                      </p>
                    </div>
                    {/* CTA */}
                    <div style={{ textAlign: "right" }}>
                      <Link
                        href={ev.href}
                        target="_blank"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "13px 28px",
                          background: "#0d1117",
                          color: "#ffffff",
                          fontFamily: "'Cinzel', serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase" as const,
                          borderRadius: 3,
                          textDecoration: "none",
                        }}
                      >
                        Register →
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* CTA */}
                    <div style={{ textAlign: "left" }}>
                      <Link
                        href={ev.href}
                        target="_blank"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "13px 28px",
                          background: "#0d1117",
                          color: "#ffffff",
                          fontFamily: "'Cinzel', serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase" as const,
                          borderRadius: 3,
                          textDecoration: "none",
                        }}
                      >
                        Register →
                      </Link>
                    </div>
                    {/* Content */}
                    <div style={{ padding: "0 clamp(24px, 3vw, 48px)" }}>
                      <div
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase" as const,
                          color: "rgba(13,17,23,0.3)",
                          marginBottom: 12,
                        }}
                      >
                        {ev.date} · {ev.location}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontWeight: 400,
                          fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                          color: "#0d1117",
                          margin: "0 0 16px 0",
                          lineHeight: 1.2,
                        }}
                      >
                        {ev.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Cinzel', serif",
                          fontSize: "0.9rem",
                          lineHeight: 1.85,
                          color: "#666c76",
                          margin: 0,
                          maxWidth: 440,
                        }}
                      >
                        {ev.desc}
                      </p>
                    </div>
                    {/* Image */}
                    <div
                      style={{
                        position: "relative",
                        height: 220,
                        borderRadius: 14,
                        overflow: "hidden",
                        marginLeft: "clamp(24px, 4vw, 48px)",
                      }}
                    >
                      <Image
                        src={ev.image}
                        alt={ev.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="300px"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "rgba(13,17,23,0.12)",
                        }}
                      />
                      <div style={{ position: "absolute", top: 16, right: 16 }}>
                        <span
                          style={{
                            background: "rgba(13,17,23,0.7)",
                            backdropFilter: "blur(8px)",
                            borderRadius: 99,
                            padding: "4px 12px",
                            fontFamily: "'Cinzel', serif",
                            fontSize: 10,
                            fontWeight: 600,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase" as const,
                            color: ev.color,
                          }}
                        >
                          {ev.tag}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid rgba(13,17,23,0.08)" }} />
        </div>
      </div>
    </section>
  );
}
