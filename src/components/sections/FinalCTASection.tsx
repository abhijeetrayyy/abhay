"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getSectionStyleClasses, SectionStylingData } from "@/lib/section-styling";

export default function FinalCTASection({ sanity }: { sanity?: Record<string, any> & SectionStylingData }) {
  const { style: sectionStyle, containerClass, accent } = getSectionStyleClasses(sanity?.sectionStyling);
  const accentColor = accent || '#C9A04A';

  const heading = sanity?.heading || 'Ready to Begin Your Journey?';
  const description = sanity?.description || "Whether you're seeking healing, transformation, or to awaken your shamanic abilities — the path awaits. Take the first step today.";
  const primaryLabel = sanity?.primaryButton?.label || 'Book a Session';
  const primaryUrl = sanity?.primaryButton?.url || 'https://calendly.com/hurraymangalam/individualsessions';
  const secondaryLabel = sanity?.secondaryButton?.label || 'Contact Abhay';
  const secondaryUrl = sanity?.secondaryButton?.url || 'mailto:contact@earthforpeace.com';
  const bottomQuote = sanity?.bottomQuote || 'Walk in Power. Walk in Light.';

  return (
    <section className="final-cta-section" style={{ position: "relative", background: '#F5F1EA', overflow: 'hidden', borderTop: '1px solid rgba(31,27,22,0.04)', ...sectionStyle }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 100%, ${accentColor}1A 0%, transparent 50%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '15%', right: '-8%', width: 550, height: 550, background: `radial-gradient(circle, ${accentColor}0F 0%, transparent 70%)`, borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: 450, height: 450, background: 'radial-gradient(circle, rgba(155,168,139,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, pointerEvents: 'none' }}>
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none" stroke={accentColor} strokeWidth="0.5">
          <circle cx="100" cy="100" r="95" /><circle cx="100" cy="100" r="45" />
          <polygon points="100,10 120,70 180,70 130,105 150,170 100,135 50,170 70,105 20,70 80,70" />
        </svg>
      </div>
      <div className={containerClass} style={{ padding: 'clamp(48px, 8vw, 88px) 24px', position: 'relative', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 44 }}>
          <div style={{ width: 64, height: 1, background: `linear-gradient(to right, transparent, ${accentColor})` }} />
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={accentColor} strokeWidth="1.2">
            <circle cx="16" cy="16" r="14" /><circle cx="16" cy="16" r="5" />
          </svg>
          <div style={{ width: 64, height: 1, background: `linear-gradient(to left, transparent, ${accentColor})` }} />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: 'inherit', lineHeight: 1.15, marginBottom: 24, letterSpacing: '-0.01em' }}>
          {heading}
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(31,27,22,0.6)', maxWidth: 580, margin: '0 auto 44px', lineHeight: 1.85, fontWeight: 400 }}>
          {description}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="cta-btn-wrap" style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={primaryUrl} target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '18px 40px', background: `linear-gradient(135deg, ${accentColor}, #A07D2E)`, color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', boxShadow: `0 8px 36px ${accentColor}47`, transition: 'all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" /><path d="M6 5l4 3-4 3V5z" fill="currentColor" /></svg>
            {primaryLabel}
          </Link>
          <Link href={secondaryUrl} style={{ display: 'inline-flex', alignItems: 'center', padding: '18px 40px', background: 'transparent', color: '#1F1B16', fontFamily: "'Cinzel', serif", fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, border: '1px solid rgba(31,27,22,0.15)', textDecoration: 'none', transition: 'all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
            {secondaryLabel}
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} style={{ marginTop: 64 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontStyle: 'italic', color: 'rgba(31,27,22,0.35)', fontWeight: 400 }}>&ldquo;{bottomQuote}&rdquo;</p>
        </motion.div>
      </div>
      <style>{`@media (max-width: 480px) { .cta-btn-wrap { flex-direction: column !important; } .cta-btn-wrap a { width: 100% !important; justify-content: center !important; } } .final-cta-section a[href*="calendly"]:hover { transform: translateY(-3px); box-shadow: 0 16px 44px ${accentColor}73 !important; } .final-cta-section a[href*="mailto"]:hover { background: rgba(31,27,22,0.04) !important; border-color: rgba(31,27,22,0.3) !important; transform: translateY(-3px); }`}</style>
    </section>
  );
}
