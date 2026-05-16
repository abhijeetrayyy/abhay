"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { getSectionStyleClasses, SectionStylingData } from "@/lib/section-styling";

const defaultStats = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 5000, suffix: "+", label: "People Transformed" },
  { value: 50, suffix: "+", label: "Countries" },
  { value: 200, suffix: "+", label: "Ceremonies/Year" },
];

function Counter({ value, suffix = "", label, accent = '#C9A04A' }: { value: number; suffix?: string; label: string; accent?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', padding: '28px 20px' }}>
      <span ref={ref} style={{
        display: 'block', background: `linear-gradient(135deg, ${accent} 0%, #A07D2E 100%)`,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 300,
        fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1,
      }}>
        {count.toLocaleString()}{suffix}
      </span>
      <div style={{ width: 36, height: 1, background: `linear-gradient(90deg, transparent, ${accent}, transparent)`, margin: '14px auto' }} />
      <span style={{ display: 'block', color: 'rgba(31,27,22,0.5)', fontSize: 'clamp(0.65rem, 0.8vw, 0.72rem)', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function StatsSection({ sanity }: { sanity?: Record<string, any> & SectionStylingData }) {
  const { style: sectionStyle, containerClass, accent } = getSectionStyleClasses(sanity?.sectionStyling);
  const accentColor = accent || '#C9A04A';

  const eyebrow = sanity?.eyebrow || 'Proven Results';
  const heading = sanity?.heading || 'Transforming Lives Worldwide';
  const items = sanity?.stats || defaultStats;

  return (
    <section style={{ background: '#FBF9F5', padding: 'clamp(40px, 6vw, 72px) 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(31,27,22,0.04)', ...sectionStyle }}>
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 0%, ${accentColor}0F 0%, transparent 60%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '50%', left: '-5%', width: 350, height: 350, background: 'radial-gradient(circle, rgba(155,168,139,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div className={containerClass} style={{ position: 'relative' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 56, height: 1, background: `linear-gradient(to right, transparent, ${accentColor})` }} />
            <span style={{ color: accentColor, fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>{eyebrow}</span>
            <div style={{ width: 56, height: 1, background: `linear-gradient(to left, transparent, ${accentColor})` }} />
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 400, color: 'inherit', margin: 0, letterSpacing: '-0.01em' }}>{heading}</h3>
        </motion.div>
        <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {items.map((stat: any, i: number) => (
            <Counter key={i} value={stat.value || stat.number} suffix={stat.suffix} label={stat.label} accent={accentColor} />
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr !important; gap: 8px !important; } .stats-grid > div { padding: 20px 12px !important; } }`}</style>
    </section>
  );
}
