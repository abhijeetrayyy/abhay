"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSectionStyleClasses, SectionStylingData } from "@/lib/section-styling";
import { useSectionStyling } from "@/hooks/useSectionStyling";

const defaultFaqs = [
  { question: "What can I expect from a session with Abhay?", answer: "Each session is a unique healing journey tailored to your specific needs. Through ancient Siberian techniques, Abhay helps clear energetic blockages, retrieve lost soul fragments, and restore your natural vitality. Clients often report profound shifts in their physical, emotional, and spiritual well-being." },
  { question: "Do I need prior experience with shamanic practices?", answer: "No prior experience is necessary. Whether you're completely new to shamanic work or have been on this path for years, Abhay meets you where you are. His teaching style is accessible yet profound, ensuring each person receives exactly what they need." },
  { question: "How do I prepare for a shamanic ceremony?", answer: "Preparation is simple but important: arrive with an open heart and mind, avoid alcohol for 24 hours before, and come with intention. Abhay will guide you through the rest. Trust the process and allow the ancient wisdom to work through you." },
  { question: "What's included in the Shamanic Training program?", answer: "The training includes foundational knowledge of shamanic principles, hands-on practice with energy techniques, personal healing sessions, group ceremonies, and ongoing support. You'll learn the SAMPO System and leave equipped to begin your own practice." },
];

function FAQItem({ question, answer, isOpen, onToggle, accent = '#C9A04A' }: { question: string; answer: string; isOpen: boolean; onToggle: () => void; accent?: string }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(31,27,22,0.06)" }}>
      <button onClick={onToggle} style={{ width: "100%", textAlign: "left", padding: "22px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.1rem", color: "#1F1B16", fontWeight: 400, lineHeight: 1.4 }}>{question}</span>
        <span style={{ fontSize: "1.4rem", color: accent, transform: isOpen ? "rotate(45deg)" : "rotate(0)", transition: "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)", flexShrink: 0 }}>+</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
            <p style={{ color: "rgba(31,27,22,0.55)", lineHeight: 1.85, paddingBottom: 22, fontFamily: "'Lora', Georgia, serif", fontSize: "0.95rem", fontWeight: 400 }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({ sanity }: { sanity?: Record<string, any> & SectionStylingData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { sectionStyle, accent, overlayStyle, dividerJSX, responsiveCSS, id, dataAttributes, containerClass } = useSectionStyling(sanity, 'faq');
  const accentColor = accent || '#C9A04A';

  const eyebrow = sanity?.eyebrow || 'FAQ';
  const heading = sanity?.heading || 'Common Questions';
  const faqs = sanity?.faqs || defaultFaqs;

  return (
    <section id={id} {...dataAttributes} style={{ background: "#FDFCFA", padding: "clamp(36px, 6vw, 72px) 0", ...sectionStyle }}>
      {overlayStyle && <div style={overlayStyle} />}
      {dividerJSX}
      <div className={containerClass}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 18 }}>
            <div style={{ width: 36, height: 1, background: `linear-gradient(to right, ${accentColor}, transparent)` }} />
            <span style={{ color: accentColor, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "'Cinzel', serif" }}>{eyebrow}</span>
            <div style={{ width: 36, height: 1, background: `linear-gradient(to left, ${accentColor}, transparent)` }} />
          </div>
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", color: "inherit", letterSpacing: "-0.01em" }}>{heading}</h2>
        </div>
        <div>
          {faqs.map((faq: any, i: number) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} accent={accentColor} />
          ))}
        </div>
      </div>
    </section>
  );
}
