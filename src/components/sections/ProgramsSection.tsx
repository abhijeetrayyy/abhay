"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const defaultPrograms = [
  { title: "SAMPO System", subtitle: "Energy Mastery", description: "Learn the ancient Siberian technique for harnessing and amplifying your personal energy field.", price: "$497", image: "/sao-gallery-img1.jpg", tag: "Popular", featured: true, link: "/events" },
  { title: "Shamanic Training", subtitle: "Level 1 Certification", description: "Begin your journey as a practitioner with foundational shamanic knowledge and hands-on experience.", price: "$1,997", image: "/sao-gallery-img4.jpg", tag: null, featured: false, link: "/events" },
  { title: "Mountain Retreat", subtitle: "Siberia Immersion", description: "An intensive 10-day journey to the Altai Mountains for deep healing and transformation.", price: "$3,497", image: "/sao-gallery-img2.jpg", tag: "Premium", featured: false, link: "/events" },
];

export default function ProgramsSection({ sanity }: { sanity?: Record<string, any> }) {
  const eyebrow = sanity?.eyebrow || 'Programs';
  const heading = sanity?.heading || 'Transform Your Life';
  const description = sanity?.description || 'Choose your path to awakening. Each program is designed to unlock ancient wisdom and modern transformation.';
  const programs = sanity?.programs || defaultPrograms;
  const featured = programs.find((p: any) => p.featured) || programs[0];
  const rest = programs.filter((p: any) => p !== featured);

  if (programs.length === 0) return null;

  return (
    <section style={{ background: '#FBF9F5', padding: 'clamp(80px, 10vw, 120px) 0', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, right: 0, width: 500, height: 500, background: 'radial-gradient(circle, rgba(201,160,74,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, width: 400, height: 400, background: 'radial-gradient(circle, rgba(155,168,139,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 18 }}>
            <div style={{ width: 44, height: 1, background: 'linear-gradient(to right, #C9A04A, transparent)' }} />
            <span style={{ color: '#A07D2E', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>{eyebrow}</span>
            <div style={{ width: 44, height: 1, background: 'linear-gradient(to left, #C9A04A, transparent)' }} />
          </div>
          <h2 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#1F1B16', lineHeight: 1.1, letterSpacing: '-0.01em' }}>{heading}</h2>
          <p style={{ marginTop: 14, color: 'rgba(31,27,22,0.55)', fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', maxWidth: 580, margin: '14px auto 0', fontFamily: "'Lora', Georgia, serif", lineHeight: 1.8, fontWeight: 400 }}>{description}</p>
        </motion.div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <motion.div key={featured.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ background: '#FDFCFA', borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(201,160,74,0.3)', boxShadow: '0 8px 40px rgba(201,160,74,0.08), 0 0 0 1px rgba(201,160,74,0.1)', position: 'relative' }}>
              {featured.tag && (
                <div style={{ position: 'absolute', top: 14, right: 14, zIndex: 5, display: 'flex', alignItems: 'center', gap: 5, padding: '4px 10px', borderRadius: 2, background: 'rgba(201,160,74,0.12)', backdropFilter: 'blur(8px)', border: '1px solid rgba(201,160,74,0.2)' }}>
                  <span style={{ color: '#C9A04A', fontSize: '0.55rem' }}>★</span>
                  <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.5rem', fontWeight: 600, color: '#A07D2E', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Recommended</span>
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 300 }}>
                <div style={{ position: 'relative', height: '100%', minHeight: 300, overflow: 'hidden' }}>
                  <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(31,27,22,0.3) 100%)' }} />
                  <span style={{ position: 'absolute', top: 14, left: 14, background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', padding: '5px 12px', borderRadius: 2, fontSize: '0.6rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Cinzel', serif" }}>{featured.tag || 'Popular'}</span>
                </div>
                <div style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ color: '#A07D2E', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>{featured.subtitle}</span>
                  <h3 style={{ margin: '10px 0 14px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', color: '#1F1B16', fontWeight: 600, letterSpacing: '-0.01em' }}>{featured.title}</h3>
                  <p style={{ color: 'rgba(31,27,22,0.55)', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 24, fontFamily: "'Lora', Georgia, serif", fontWeight: 400, maxWidth: 400 }}>{featured.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', color: '#C9A04A', fontWeight: 500 }}>{featured.price}</span>
                    <Link href={featured.link || '/events'} style={{ background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', padding: '12px 28px', borderRadius: 2, textDecoration: 'none', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>Learn More</Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {rest.length > 0 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
              {rest.map((prog: any, i: number) => (
                <motion.div key={prog.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 1) * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                  <div style={{ background: '#FDFCFA', borderRadius: 2, overflow: 'hidden', border: '1px solid rgba(31,27,22,0.06)', boxShadow: '0 4px 30px rgba(0,0,0,0.04)' }}>
                    <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                      <img src={prog.image} alt={prog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(31,27,22,0.35) 0%, transparent 50%)' }} />
                    </div>
                    <div style={{ padding: 24 }}>
                      <span style={{ color: '#A07D2E', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>{prog.subtitle}</span>
                      <h3 style={{ margin: '8px 0 10px', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem', color: '#1F1B16', fontWeight: 500 }}>{prog.title}</h3>
                      <p style={{ color: 'rgba(31,27,22,0.55)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: 18, fontFamily: "'Lora', Georgia, serif", fontWeight: 400 }}>{prog.description}</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(31,27,22,0.06)' }}>
                        <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', color: '#1F1B16', fontWeight: 500 }}>{prog.price}</span>
                        <Link href={prog.link || '/events'} style={{ background: '#1F1B16', color: '#FDFCFA', padding: '9px 20px', borderRadius: 2, textDecoration: 'none', fontSize: '0.64rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>Learn More</Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginTop: 48 }}>
          <Link href="/teachings" style={{ color: '#C9A04A', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid rgba(201,160,74,0.3)', paddingBottom: 4, fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', transition: 'all 0.3s ease' }}>View All Programs &rarr;</Link>
        </motion.div>
      </div>
      <style>{`.program-card:hover img { transform: scale(1.05); }`}</style>
    </section>
  );
}
