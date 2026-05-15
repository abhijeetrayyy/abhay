"use client";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

function seededRandom(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

function SpiritWolf() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 1 }}
      style={{ position: 'absolute', bottom: '15%', left: '5%', zIndex: 6, pointerEvents: 'none', opacity: 0.08 }}>
      <svg width="min(35vw, 320px)" height="min(25vw, 220px)" viewBox="0 0 500 350" fill="none">
        {["M80,280 120,240 160,260 200,220 240,240 280,200 320,220 360,180 400,200","M200,220 220,180 250,160 280,180 280,200","M120,240 100,200 130,180 160,200"].map((d, i) => (
          <motion.path key={i} d={d} stroke="#C9A04A" strokeWidth="0.4" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 4, delay: 2 + i * 0.8, ease: 'easeInOut' }} />
        ))}
        {[[250,160],[280,180],[200,220],[240,240],[320,220],[160,260]].map(([cx, cy], i) => (
          <motion.circle key={i} cx={cx} cy={cy} r={2} fill="#C9A04A" initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 3 + i * 0.3 }} />
        ))}
        <motion.circle cx={250} cy={160} r={3} fill="#E8CD7A" animate={{ opacity: [0.3, 1, 0.3], r: [2, 5, 2] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 4 }} />
      </svg>
    </motion.div>
  );
}

function Aurora() {
  const shouldReduce = useReducedMotion();
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.div animate={shouldReduce ? {} : { x: ['-3%', '4%', '-3%'], opacity: [0.06, 0.18, 0.06] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: '0%', left: '-5%', right: '-5%', height: '40%', filter: 'blur(90px)', background: 'linear-gradient(180deg, rgba(80,180,240,0.1) 0%, rgba(201,160,74,0.05) 35%, transparent 65%)', borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%' }} />
      <motion.div animate={shouldReduce ? {} : { x: ['4%', '-3%', '4%'], opacity: [0.04, 0.12, 0.04] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        style={{ position: 'absolute', top: '5%', left: '-5%', right: '-5%', height: '35%', filter: 'blur(100px)', background: 'linear-gradient(180deg, rgba(160,100,220,0.06) 0%, transparent 50%)' }} />
    </div>
  );
}

function LightSweep() {
  return (
    <motion.div animate={{ x: ['-100%', '200%'], opacity: [0, 0.06, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      style={{ position: 'absolute', top: 0, bottom: 0, width: '30%', zIndex: 7, pointerEvents: 'none', background: 'linear-gradient(90deg, transparent, rgba(201,160,74,0.04), transparent)', transform: 'skewX(-20deg)' }} />
  );
}

function Stars() {
  const [m, setM] = useState(false);
  const shouldReduce = useReducedMotion();
  useEffect(() => { setM(true); }, []);
  const starData = useMemo(() => {
    const rng = seededRandom(42);
    return Array.from({ length: 60 }, () => ({ left: `${rng() * 100}%`, top: `${rng() * 100}%`, size: rng() * 2 + 0.3, type: Math.floor(rng() * 3) }));
  }, []);
  if (!m) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none', overflow: 'hidden' }}>
      {starData.map((s, i) => (
        <motion.div key={i} style={{ position: 'absolute', left: s.left, top: s.top, width: s.size, height: s.size, borderRadius: '50%', background: s.type === 0 ? 'rgba(201,160,74,0.5)' : s.type === 1 ? 'rgba(255,255,255,0.3)' : 'rgba(180,210,255,0.3)' }}
          animate={shouldReduce ? {} : { opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }} transition={shouldReduce ? {} : { duration: s.size * 3 + 3, repeat: Infinity, delay: s.size * 4 }} />
      ))}
    </div>
  );
}

function SacredGeometry() {
  const shouldReduce = useReducedMotion();
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={shouldReduce ? {} : { rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 'min(85vw, 700px)', height: 'min(85vw, 700px)', border: '1px solid rgba(201,160,74,0.03)', borderRadius: '50%' }} />
      <motion.div animate={shouldReduce ? {} : { rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 'min(65vw, 540px)', height: 'min(65vw, 540px)', border: '1px solid rgba(201,160,74,0.05)', borderRadius: '50%' }} />
      <motion.div animate={shouldReduce ? {} : { scale: [1, 1.1, 1], opacity: [0.015, 0.08, 0.015] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: 'min(50vw, 420px)', height: 'min(50vw, 420px)', border: '2px solid rgba(201,160,74,0.03)', borderRadius: '50%' }} />
    </div>
  );
}

function FloatingRunes() {
  const [m, setM] = useState(false);
  const shouldReduce = useReducedMotion();
  useEffect(() => { setM(true); }, []);
  if (!m) return null;
  const runes = ['ᛟ', 'ᛉ', 'ᛇ', 'ᚨ', 'ᚱ', 'ᚲ'];
  return (
    <>
      {runes.map((rune, i) => (
        <motion.div key={i} initial={{ y: '110vh', opacity: 0, rotate: 0 }}
          animate={shouldReduce ? {} : { y: '-5vh', opacity: [0, 0.06, 0], rotate: 360 }}
          transition={shouldReduce ? {} : { duration: 25 + i * 3, repeat: Infinity, ease: 'linear', delay: i * 5 }}
          style={{ position: 'absolute', left: `${15 + i * 14}%`, zIndex: 6, pointerEvents: 'none', color: '#C9A04A', fontSize: `${12 + i * 2}px`, fontFamily: 'serif', opacity: 0.04, filter: 'blur(1px)', textShadow: '0 0 20px rgba(201,160,74,0.1)' }}>
          {rune}
        </motion.div>
      ))}
    </>
  );
}

function ScrollIn() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
      style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 16, height: 24, border: '1px solid rgba(201,160,74,0.15)', borderRadius: 8, display: 'flex', justifyContent: 'center', paddingTop: 3 }}>
        <motion.div animate={{ opacity: [1, 0.2, 1], y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 2, height: 5, background: '#C9A04A', borderRadius: 1 }} />
      </motion.div>
    </motion.div>
  );
}

const galleryImages = [
  '/sao-gallery-img1.jpg', '/sao-gallery-img2.jpg', '/sao-gallery-img3.jpg',
  '/sao-gallery-img4.jpg', '/sao-gallery-img5.jpg', '/sao-gallery-img6.jpg',
  '/sao-gallery-img7.jpg', '/sao-gallery-img8.jpg', '/sao-gallery-img9.jpg',
];

function GalleryMarquee() {
  const double = [...galleryImages, ...galleryImages, ...galleryImages];
  return (
    <div className="hero-marquee" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 8, overflow: 'hidden', height: 160 }}>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,26,0.6) 0%, transparent 70%)', zIndex: 1, pointerEvents: 'none' }} />
      <motion.div className="hero-marquee-inner" animate={{ x: ['0%', '-33.33%'] }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: 14, width: 'max-content', height: '100%', alignItems: 'center', paddingLeft: 14 }}>
        {double.map((src, i) => (
          <motion.div key={i} whileHover={{ scale: 1.08, opacity: 1, y: -4 }} style={{ flexShrink: 0, width: 130, height: 95, borderRadius: 6, overflow: 'hidden', opacity: 0.45, border: '1px solid rgba(201,160,74,0.12)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', transition: 'opacity 0.4s ease' }}>
            <Image src={src} alt="" fill style={{ objectFit: 'cover' }} sizes="130px" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,26,0.3) 0%, transparent 50%)' }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection({ sanity }: { sanity?: Record<string, any> }) {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  useEffect(() => { setReady(true); }, []);

  const tagline = sanity?.tagline || 'Siberian Shaman & Guardian of Our Planet';
  const heading = sanity?.heading || 'Between Worlds';
  const subheading = sanity?.subheading || 'Abhay Oyun';
  const desc = sanity?.description || 'Awakening the world to the raw power of ancient Siberian shamanic traditions. Sacred ceremonies, healing, and training since 1991.';
  const bgImage = sanity?.backgroundImage || '/healing-global-harmony.jpg';
  const shamImage = sanity?.shamanImage || '/AO-2.jpg';
  const primaryLabel = sanity?.primaryButton?.label || 'Book a Session';
  const primaryUrl = sanity?.primaryButton?.url || 'https://calendly.com/hurraymangalam/individualsessions';
  const secondaryLabel = sanity?.secondaryButton?.label || 'Join the Webinar';
  const secondaryUrl = sanity?.secondaryButton?.url || 'https://forms.gle/jEDaUrKwbyHd8WvUA';

  return (
    <section ref={ref} style={{ position: 'relative', height: '100svh', minHeight: 'min(800px, 100dvh)', background: 'linear-gradient(170deg, #080C1A 0%, #0F1A30 40%, #0A1020 100%)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <Image src={bgImage} alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 40%', opacity: 0.3, filter: 'saturate(0.8) brightness(0.6)' }} sizes="100vw" />
      </div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, background: 'radial-gradient(ellipse at 60% 50%, rgba(201,160,74,0.06) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 3, background: 'linear-gradient(to right, rgba(8,12,26,0.7) 0%, rgba(8,12,26,0.2) 50%, rgba(8,12,26,0.5) 100%)' }} />
      {ready && <Aurora />}
      {ready && <Stars />}
      {ready && <SacredGeometry />}
      {ready && <LightSweep />}
      {ready && <FloatingRunes />}
      {ready && <SpiritWolf />}
      {ready && <GalleryMarquee />}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 0.5 }}
        className="hero-shaman-img"
        style={{ position: 'absolute', bottom: 0, right: '5%', zIndex: 4, pointerEvents: 'none', width: 'min(45vw, 450px)', height: 'min(72vh, 720px)', filter: 'brightness(0.85) contrast(1.1)' }}>
        <Image src={shamImage} alt="Abhay Oyun" fill style={{ objectFit: 'contain', objectPosition: 'center bottom' }} sizes="450px" priority />
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '120%', height: '60%', background: 'radial-gradient(ellipse at 50% 100%, rgba(201,160,74,0.12) 0%, transparent 60%)', filter: 'blur(60px)' }} />
      </motion.div>
      <motion.div style={{ position: 'relative', zIndex: 20, textAlign: 'left', y: ready ? textY : '0%', width: '100%', maxWidth: 1200, padding: '0 clamp(24px, 6vw, 80px)', marginTop: 40 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', borderRadius: 2, border: '1px solid rgba(201,160,74,0.12)', background: 'rgba(8,12,26,0.4)', backdropFilter: 'blur(16px)', marginBottom: 28 }}>
          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A04A', boxShadow: '0 0 8px rgba(201,160,74,0.4)' }} />
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.52rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,160,74,0.7)' }}>{tagline}</span>
          <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A04A', boxShadow: '0 0 8px rgba(201,160,74,0.4)' }} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 200, fontSize: 'clamp(3.5rem, 10vw, 7.5rem)', letterSpacing: '-0.03em', lineHeight: 1.02, color: '#FDFCFA', textShadow: '0 2px 40px rgba(8,12,26,0.5)' }}>
            {heading}<br />
            <span style={{ fontStyle: 'italic', backgroundImage: 'linear-gradient(135deg, #F9D58B 0%, #C9A04A 35%, #A07D2E 65%, #E8CD7A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{subheading}</span>
          </h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.35)', maxWidth: 500, marginTop: 24, marginBottom: 0, fontWeight: 400 }}>
          {desc}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 36 }}>
          <Link href={primaryUrl} target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 40px', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#080C1A', fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', boxShadow: '0 8px 36px rgba(201,160,74,0.25)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" /><path d="M6 5l4 3-4 3V5z" fill="currentColor" /></svg>
            {primaryLabel}
          </Link>
          <Link href={secondaryUrl} target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 40px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', color: 'rgba(255,255,255,0.7)', fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>
            {secondaryLabel}
          </Link>
        </motion.div>
      </motion.div>
      <ScrollIn />
      <style>{`@media (max-width: 768px) { .hero-shaman-img { width: 50vw !important; height: 50vh !important; right: 0 !important; } .hero-shaman-img img { opacity: 0.4 !important; } } @media (max-width: 640px) { .hero-marquee { height: 100px !important; } .hero-marquee-inner { gap: 10px !important; } .hero-marquee-inner > div { width: 80px !important; height: 65px !important; } } @media (max-width: 480px) { .hero-shaman-img { display: none !important; } .hero-marquee { height: 80px !important; } } a[href*="calendly"]:hover { transform: translateY(-3px); box-shadow: 0 16px 46px rgba(201,160,74,0.45) !important; } a[href*="forms.gle"]:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.2) !important; transform: translateY(-3px); }`}</style>
    </section>
  );
}
