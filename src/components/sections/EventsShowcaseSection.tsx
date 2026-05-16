"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { getSectionStyleClasses, SectionStylingData } from "@/lib/section-styling";

const defaultEvents = [
  { id: "01", tag: "Men's Intensive", title: "Reclaim Your Masculine Power", date: "March 25–29, 2025", location: "Denver, Colorado", seats: "18 spots remaining", price: "From $1,200", desc: "A 5-day immersive for men ready to step fully into their energetic sovereignty.", img: "/sao-gallery-img3.jpg", color: "#1F1B16", highlights: ["Cold Plunge Ceremony", "Sacred Fire Ritual", "Drum Healing", "1-on-1 Session"], badge: "Filling Fast" },
  { id: "02", tag: "Women's Gathering", title: "Shamanism — Source of Happiness & Love", date: "March 20–22, 2025", location: "Denver, Colorado", seats: "12 spots remaining", price: "From $890", desc: "A sacred gathering for women. Reconnect with the ancient feminine power of the Earth.", img: "/sao-gallery-img1.jpg", color: "#C9A04A", highlights: ["Sound Ceremony", "Sisterhood Circle", "Energy Work", "Forest Ritual"], badge: "Limited" },
  { id: "03", tag: "Free Webinar", title: "Your First Step Into the SAMPO System", date: "March 19, 2025", location: "Online · Global", seats: "Open registration", price: "Free", desc: "Experience the SAMPO System from anywhere in the world. A live initiation into shamanic energy work.", img: "/healing-global-harmony.jpg", color: "#8B7E6E", highlights: ["Live Q&A", "Energy Practice", "SAMPO Intro", "Worldwide Access"], badge: "Free Entry" },
];

export default function EventsShowcaseSection({ sanity }: { sanity?: Record<string, any> & SectionStylingData }) {
  const { style: sectionStyle, containerClass, accent } = getSectionStyleClasses(sanity?.sectionStyling);
  const accentColor = accent || '#C9A04A';

  const eyebrow = sanity?.eyebrow || 'Upcoming Events';
  const heading = sanity?.heading || 'Join Abhay';
  const subheading = sanity?.subheading || 'in the Field.';
  const description = sanity?.description || 'Intimate gatherings designed for real transformation. No performance — only depth, ceremony, and direct energetic healing.';
  const events = sanity?.events || defaultEvents;
  const registerUrl = 'https://forms.gle/jEDaUrKwbyHd8WvUA';

  if (events.length === 0) return null;

  return (
    <section id="events" style={{ background: "#F5F1EA", overflow: "hidden", position: "relative", ...sectionStyle }}>
      <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat", backgroundSize: "200px", pointerEvents: "none" }} />
      <div className="events-wrapper" style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(48px, 8vw, 88px) clamp(20px, 5vw, 7vw)" }}>
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80, flexWrap: "wrap" as const, gap: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
              <div style={{ width: 26, height: 1, background: accentColor }} />
              <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: accentColor }}>{eyebrow}</span>
            </div>
            <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(2rem, 7vw, 4.5rem)", letterSpacing: "-0.03em", color: "inherit", lineHeight: 0.95 }}>
              {heading}<br /><span style={{ fontStyle: "italic", color: accentColor }}>{subheading}</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(31,27,22,0.5)", maxWidth: 320, fontWeight: 400 }}>{description}</p>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
          {events.map((ev: any, i: number) => (
            <motion.div key={ev.id || i} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              style={{ position: "relative", borderRadius: 2, overflow: "hidden", background: "#FDFCFA", boxShadow: "0 12px 40px rgba(31,27,22,0.04)", border: "1px solid rgba(31,27,22,0.04)" }}>
              <div className="event-card-grid" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 420px" : "420px 1fr" }}>
                <div className="event-card-content" style={{ padding: "clamp(28px, 4vw, 48px) clamp(28px, 4vw, 52px)", display: "flex", flexDirection: "column" as const, justifyContent: "center", order: i % 2 === 0 ? 0 : 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 26 }}>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: ev.color, background: `${ev.color}10`, padding: "4px 12px", borderRadius: 2, border: `1px solid ${ev.color}20` }}>{ev.tag}</span>
                    <span style={{ fontFamily: "'Cinzel', serif", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(31,27,22,0.35)", background: "rgba(31,27,22,0.03)", padding: "4px 10px", borderRadius: 2 }}>{ev.badge}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(1.5rem,2.2vw,2.2rem)", color: "#1F1B16", margin: "0 0 18px 0", lineHeight: 1.15, letterSpacing: "-0.01em" }}>{ev.title}</h3>
                  <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.88rem", lineHeight: 1.9, color: "rgba(31,27,22,0.55)", margin: "0 0 30px 0", maxWidth: 460, fontWeight: 400 }}>{ev.desc || ev.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 36 }}>
                    {(ev.highlights || []).map((h: string) => (
                      <span key={h} style={{ fontFamily: "'Cinzel', serif", fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.08em", color: "rgba(31,27,22,0.45)", background: "rgba(31,27,22,0.03)", border: "1px solid rgba(31,27,22,0.06)", borderRadius: 2, padding: "4px 10px" }}>{h}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" as const, gap: 16, borderTop: "1px solid rgba(31,27,22,0.05)", paddingTop: 24 }}>
                    <div>
                      <div style={{ fontFamily: "'Cinzel', serif", fontSize: "0.72rem", fontWeight: 600, color: "#1F1B16", marginBottom: 4 }}>{ev.date}</div>
                      <div style={{ display: "flex", gap: 14 }}>
                        <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.7rem", color: "rgba(31,27,22,0.4)", fontWeight: 400 }}>{ev.location}</span>
                        <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "0.7rem", color: ev.color, fontWeight: 500 }}>{ev.seats}</span>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.3rem", color: "#1F1B16", fontWeight: 400 }}>{ev.price}</span>
                      <a href={ev.registerUrl || registerUrl} target="_blank" rel="noopener noreferrer" className="event-btn"
                        style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}>
                        Register <svg width="12" height="9" viewBox="0 0 14 8" fill="none"><path d="M1 4h12M10 1l3 3-3 3" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="event-card-image" style={{ position: "relative", overflow: "hidden", minHeight: 400, order: i % 2 === 0 ? 1 : 0 }}>
                  <Image src={ev.image || ev.img} alt={ev.title} fill style={{ objectFit: "cover" }} sizes="420px" />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${ev.color}10, rgba(31,27,22,0.2))` }} />
                  <div style={{ position: "absolute", bottom: 16, right: 20, fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontSize: "5.5rem", color: "rgba(253,252,250,0.1)", lineHeight: 1, userSelect: "none" as const, fontWeight: 400 }}>{ev.id}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) { .events-wrapper { padding: 48px 5vw !important; } .event-card-grid { grid-template-columns: 1fr !important; } .event-card-image { order: 1 !important; min-height: 260px !important; } .event-card-content { order: 2 !important; padding: 28px 24px !important; } }
        @media (max-width: 768px) { .events-wrapper { padding: 36px 20px !important; } .event-card-content { padding: 24px 16px !important; } }
      `}</style>
    </section>
  );
}
