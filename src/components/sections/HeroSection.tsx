"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// ─── RUNNING STARFIELD (like a video) ──────────────

function StarVideo() {
  const [m, setM] = useState(false);
  useEffect(() => { setM(true); }, []);
  if (!m) return null;

  const layers = [
    { count: 60, maxSize: 2, color: '255,255,255', speed: 60, op: 0.6 },
    { count: 40, maxSize: 3, color: '201,160,74', speed: 40, op: 0.5 },
    { count: 25, maxSize: 4, color: '180,210,255', speed: 30, op: 0.4 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', overflow: 'hidden' }}>
      {layers.flatMap((layer, li) =>
        Array.from({ length: layer.count }, (_, i) => {
          const size = Math.random() * layer.maxSize + 0.5;
          const dur = layer.speed + Math.random() * 40;
          return (
            <motion.div
              key={`${li}-${i}`}
              style={{
                position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                width: size, height: size, borderRadius: '50%',
                background: `rgba(${layer.color},${Math.random() * 0.4 + 0.2})`,
                boxShadow: size > 2 ? `0 0 ${size * 4}px rgba(${layer.color},0.2)` : 'none',
              }}
              animate={{
                y: [0, -Math.random() * 80 - 20],
                opacity: [0, layer.op, 0],
              }}
              transition={{
                duration: dur, repeat: Infinity, ease: 'linear',
                delay: Math.random() * dur * 2,
              }}
            />
          );
        })
      )}
    </div>
  );
}

// ─── AURORA ──────────────────────────────────────────

function Aurora() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.div animate={{ x: ['-3%', '4%', '-3%'], opacity: [0.05, 0.14, 0.05] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '0%', left: '-5%', right: '-5%', height: '45%',
          background: 'linear-gradient(180deg, rgba(80,180,240,0.1) 0%, rgba(201,160,74,0.03) 35%, transparent 65%)',
          filter: 'blur(80px)', borderRadius: '50% 50% 30% 70% / 60% 40% 60% 40%',
        }} />
      <motion.div animate={{ x: ['3%', '-3%', '3%'], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        style={{
          position: 'absolute', top: '5%', left: '-5%', right: '-5%', height: '35%',
          background: 'linear-gradient(180deg, rgba(160,100,200,0.06) 0%, transparent 50%)',
          filter: 'blur(100px)', borderRadius: '40% 50% 50% 60%',
        }} />
    </div>
  );
}

// ─── SHAMAN ──────────────────────────────────────────

function Shaman() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
      style={{
        position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none', overflow: 'hidden',
      }}>
      <div style={{
        position: 'absolute', inset: -20,
        backgroundImage: 'url(/AO-2.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center 40%', backgroundRepeat: 'no-repeat',
        opacity: 0.5,
        filter: 'grayscale(0.5) sepia(0.2) brightness(0.8) contrast(1.1)',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: '50%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(201,160,74,0.08) 0%, transparent 60%)',
        filter: 'blur(60px)',
      }} />
    </motion.div>
  );
}

// ─── SACRED RINGS ────────────────────────────────────

function Rings() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 'min(85vw, 650px)', height: 'min(85vw, 650px)', border: '1px solid rgba(201,160,74,0.05)', borderRadius: '50%' }} />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 'min(65vw, 500px)', height: 'min(65vw, 500px)', border: '1px solid rgba(201,160,74,0.07)', borderRadius: '50%' }} />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 'min(45vw, 350px)', height: 'min(45vw, 350px)', border: '1.5px solid rgba(201,160,74,0.05)', borderRadius: '50%' }} />
      <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.02, 0.12, 0.02] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: 'min(55vw, 420px)', height: 'min(55vw, 420px)', border: '2px solid rgba(201,160,74,0.04)', borderRadius: '50%' }} />
    </div>
  );
}

// ─── RUNNING GALLERY CARDS ─────────────────────────

const galleryImages = [
  '/sao-gallery-img1.jpg', '/sao-gallery-img2.jpg', '/sao-gallery-img3.jpg',
  '/sao-gallery-img4.jpg', '/sao-gallery-img5.jpg', '/sao-gallery-img6.jpg',
  '/sao-gallery-img7.jpg', '/sao-gallery-img8.jpg', '/sao-gallery-img9.jpg',
];

function RunningGallery() {
  return (
    <div style={{
      position: 'absolute', bottom: 76, left: 0, right: 0,
      zIndex: 20, overflow: 'hidden',
      maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
    }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
        style={{ display: 'flex', gap: 10, width: 'max-content', paddingLeft: 10 }}
      >
        {[...galleryImages, ...galleryImages].map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6, scale: 1.04 }}
            style={{
              width: 120, height: 80, borderRadius: 2, overflow: 'hidden', flexShrink: 0,
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              cursor: 'pointer',
            }}
          >
            <img
              src={src}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── SCROLL ──────────────────────────────────────────

function ScrollIn() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}
      style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 21, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, opacity: 0.5 }}>
      <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ width: 16, height: 26, border: '1px solid rgba(201,160,74,0.2)', borderRadius: 8, display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
        <motion.div animate={{ opacity: [1, 0.2, 1], y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 2, height: 5, background: '#C9A04A', borderRadius: 1 }} />
      </motion.div>
    </motion.div>
  );
}

// ─── HERO ───────────────────────────────────────────

export default function HeroSection() {
  const [ready, setReady] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  useEffect(() => { setReady(true); }, []);

  return (
    <section ref={ref} style={{
      position: 'relative', height: '100svh', minHeight: 800,
      background: 'linear-gradient(175deg, #0A1020 0%, #0F1A30 50%, #0A1020 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <Aurora />
      {ready && <StarVideo />}
      {ready && <Shaman />}
      {ready && <Rings />}

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none',
        background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(10,16,32,0.4) 80%, rgba(10,16,32,0.85) 100%)',
      }} />

      {/* Content */}
      <motion.div style={{
        position: 'relative', zIndex: 20, textAlign: 'center',
        y: ready ? textY : '0%', display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '0 6vw', maxWidth: 1000, marginBottom: 60,
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', borderRadius: 2, border: '1px solid rgba(201,160,74,0.12)', background: 'rgba(10,16,32,0.5)', backdropFilter: 'blur(16px)', marginBottom: 32 }}>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A04A', boxShadow: '0 0 8px rgba(201,160,74,0.4)' }} />
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,160,74,0.7)' }}>
            Siberian Shaman & Guardian of Our Planet
          </span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A04A', boxShadow: '0 0 8px rgba(201,160,74,0.4)' }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
          <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 200, fontSize: 'clamp(3.5rem, 11vw, 8rem)', letterSpacing: '-0.03em', lineHeight: 1.02, color: '#FDFCFA' }}>
            Between Worlds
            <br />
            <span style={{ fontStyle: 'italic', backgroundImage: 'linear-gradient(135deg, #F9D58B 0%, #C9A04A 35%, #A07D2E 65%, #E8CD7A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Abhay Oyun
            </span>
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', lineHeight: 1.9, color: 'rgba(255,255,255,0.4)', maxWidth: 620, marginTop: 28, marginBottom: 0, fontWeight: 400 }}>
          Awakening the world to the raw power of ancient Siberian shamanic traditions. Sacred ceremonies, healing, and training since 1991.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 44 }}>
          <Link href="https://calendly.com/hurraymangalam/individualsessions" target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '18px 44px', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#0A1020', fontFamily: "'Cinzel', serif", fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, textDecoration: 'none', boxShadow: '0 8px 36px rgba(201,160,74,0.25)', transition: 'all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" /><path d="M6 5l4 3-4 3V5z" fill="currentColor" /></svg>
            Book a Free Session
          </Link>
          <Link href="https://forms.gle/jEDaUrKwbyHd8WvUA" target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '18px 44px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', color: 'rgba(255,255,255,0.75)', fontFamily: "'Cinzel', serif", fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none', transition: 'all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
            Join the Webinar
          </Link>
        </motion.div>
      </motion.div>

      {ready && <RunningGallery />}
      <ScrollIn />
      <style>{`
        a[href*="calendly"]:hover { transform: translateY(-3px); box-shadow: 0 16px 46px rgba(201,160,74,0.45) !important; }
        a[href*="forms.gle"]:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.2) !important; transform: translateY(-3px); }
      `}</style>
    </section>
  );
}
