"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── STARFIELD ───────────────────────────────────────

function Stars() {
  const [m, setM] = useState(false);
  useEffect(() => { setM(true); }, []);
  if (!m) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none', overflow: 'hidden' }}>
      {Array.from({ length: 80 }, (_, i) => (
        <motion.div key={i}
          style={{
            position: 'absolute', left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 0.3, height: Math.random() * 2 + 0.3, borderRadius: '50%',
            background: i % 3 === 0 ? 'rgba(201,160,74,0.5)' : i % 3 === 1 ? 'rgba(255,255,255,0.4)' : 'rgba(180,210,255,0.4)',
          }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.4, 1] }}
          transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 5 }} />
      ))}
    </div>
  );
}

// ─── IMAGE FRAGMENTS ─────────────────────────────────

const fragments = [
  { src: "/sao-gallery-img1.jpg", top: "3%", left: "2%", rotate: -8, size: 220, delay: 0, z: 1 },
  { src: "/sao-gallery-img3.jpg", top: "5%", right: "3%", rotate: 10, size: 200, delay: 1.5, z: 1 },
  { src: "/sao-gallery-img5.jpg", top: "55%", left: "-2%", rotate: 6, size: 240, delay: 3, z: 2 },
  { src: "/sao-gallery-img7.jpg", top: "50%", right: "0%", rotate: -12, size: 230, delay: 4, z: 2 },
  { src: "/sao-gallery-img9.jpg", bottom: "2%", left: "15%", rotate: -5, size: 180, delay: 2, z: 3 },
  { src: "/sao-gallery-img8.jpg", bottom: "3%", right: "12%", rotate: 9, size: 190, delay: 3.5, z: 3 },
  { src: "/shaman_birch_forest.png", top: "25%", left: "40%", rotate: -15, size: 250, delay: 1, z: 2 },
  { src: "/shaman_fire.png", top: "70%", left: "40%", rotate: 8, size: 210, delay: 5, z: 3 },
];

function FloatingFragments() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none', overflow: 'hidden' }}>
      {fragments.map((f, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -12, 0], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8 + f.delay, repeat: Infinity, ease: 'easeInOut', delay: f.delay }}
          style={{
            position: 'absolute',
            top: f.top, left: f.left, right: f.right, bottom: f.bottom,
            width: f.size, height: f.size * 0.75,
            borderRadius: 3,
            overflow: 'hidden',
            transform: `rotate(${f.rotate}deg)`,
            border: '1px solid rgba(255,255,255,0.04)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            filter: 'brightness(0.6) saturate(0.7)',
            zIndex: f.z,
          }}
        >
          <Image src={f.src} alt="" fill style={{ objectFit: 'cover' }} sizes="250px" />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,16,32,0.4) 100%)',
          }} />
        </motion.div>
      ))}
    </div>
  );
}

// ─── SHAMAN PORTRAIT (central) ───────────────────────

function ShamanPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.5 }}
      style={{
        position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
      }}>
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 'min(55vw, 600px)', height: 'min(75vh, 750px)',
        opacity: 0.35,
        filter: 'brightness(0.85) contrast(1.1)',
      }}>
        <Image src="/AO-2.jpg" alt="Abhay Oyun" fill style={{ objectFit: 'contain', objectPosition: 'center bottom' }} sizes="600px" />
      </div>
      {/* Warm aura behind shaman */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '70%', height: '50%',
        background: 'radial-gradient(ellipse at 50% 100%, rgba(201,160,74,0.1) 0%, transparent 60%)',
        filter: 'blur(80px)',
      }} />
    </motion.div>
  );
}

// ─── AURORA BANDS ────────────────────────────────────

function AuroraBands() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
      <motion.div animate={{ x: ['-3%', '4%', '-3%'], opacity: [0.04, 0.15, 0.04] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '0%', left: '-5%', right: '-5%', height: '45%', filter: 'blur(90px)',
          background: 'linear-gradient(180deg, rgba(80,180,240,0.1) 0%, rgba(201,160,74,0.04) 35%, transparent 65%)',
        }} />
      <motion.div animate={{ x: ['3%', '-3%', '3%'], opacity: [0.03, 0.1, 0.03] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{
          position: 'absolute', top: '5%', left: '-5%', right: '-5%', height: '35%', filter: 'blur(100px)',
          background: 'linear-gradient(180deg, rgba(160,100,200,0.06) 0%, transparent 50%)',
        }} />
    </div>
  );
}

// ─── SACRED RINGS ────────────────────────────────────

function Rings() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 6, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 'min(85vw, 680px)', height: 'min(85vw, 680px)', border: '1px solid rgba(201,160,74,0.04)', borderRadius: '50%' }} />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 'min(65vw, 520px)', height: 'min(65vw, 520px)', border: '1px solid rgba(201,160,74,0.06)', borderRadius: '50%' }} />
      <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.02, 0.1, 0.02] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', width: 'min(55vw, 440px)', height: 'min(55vw, 440px)', border: '2px solid rgba(201,160,74,0.04)', borderRadius: '50%' }} />
    </div>
  );
}

// ─── SCROLL ──────────────────────────────────────────

function ScrollIn() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}
      style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {[0, 1, 2].map(i => (
          <motion.div key={i}
            animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            style={{ width: 3, height: 3, borderRadius: '50%', background: '#C9A04A' }} />
        ))}
      </div>
      <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ width: 16, height: 24, border: '1px solid rgba(201,160,74,0.2)', borderRadius: 8, display: 'flex', justifyContent: 'center', paddingTop: 3 }}>
        <motion.div animate={{ opacity: [1, 0.2, 1], y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 2, height: 5, background: '#C9A04A', borderRadius: 1 }} />
      </motion.div>
      <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.4rem', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: "'Cinzel', serif" }}>
        Enter between worlds
      </span>
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
      background: 'linear-gradient(175deg, #0A1020 0%, #101D35 50%, #0A1020 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Full-bleed base image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.25 }}>
        <Image src="/healing-global-harmony.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} sizes="100vw" />
      </div>

      {/* Glow behind everything */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.4, background: 'radial-gradient(ellipse at 50% 50%, rgba(201,160,74,0.06) 0%, transparent 60%)' }} />

      <AuroraBands />
      <ShamanPortrait />
      {ready && <FloatingFragments />}
      <Stars />
      {ready && <Rings />}

      {/* Central text contrast */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 7, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 45%, rgba(10,16,32,0.2) 0%, rgba(10,16,32,0.5) 60%, rgba(10,16,32,0.85) 100%)',
      }} />

      {/* Content */}
      <motion.div style={{
        position: 'relative', zIndex: 20, textAlign: 'center',
        y: ready ? textY : '0%', display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '0 6vw', maxWidth: 1000,
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.3 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '8px 20px', borderRadius: 2, border: '1px solid rgba(201,160,74,0.12)', background: 'rgba(10,16,32,0.4)', backdropFilter: 'blur(16px)', marginBottom: 32 }}>
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
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '18px 44px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', color: 'rgba(255,255,255,0.75)', fontFamily: "'Cinzel', serif", fontSize: '0.76rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, border: '1px solid rgba(255,255,255,0.08)', textDecoration: 'none' }}>
            Join the Webinar
          </Link>
        </motion.div>
      </motion.div>

      <ScrollIn />

      <style>{`
        a[href*="calendly"]:hover { transform: translateY(-3px); box-shadow: 0 16px 46px rgba(201,160,74,0.45) !important; }
        a[href*="forms.gle"]:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.2) !important; transform: translateY(-3px); }
      `}</style>
    </section>
  );
}
