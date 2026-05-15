'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const SOCIAL = [
  { label: 'YouTube', href: 'https://www.youtube.com/@earthforpeace' },
  { label: 'Instagram', href: 'https://www.instagram.com/earthforpeace' },
  { label: 'Facebook', href: 'https://facebook.com/earthforpeace' },
  { label: 'TikTok', href: 'https://tiktok.com/@earthforpeace' },
  { label: 'WhatsApp', href: 'https://wa.me/12122561366' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/teachings', label: 'Teachings' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ─── TOP BAR ─── */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 51,
        height: 38,
        display: 'flex', alignItems: 'center',
        background: scrolled ? '#1F1B16' : 'rgba(10,16,32,0.65)',
        backdropFilter: scrolled ? 'none' : 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
        transition: 'background 0.4s ease',
      }}>
        <div style={{
          maxWidth: 1400, width: '100%', margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 48px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div className="top-bar-contact" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="mailto:contact@earthforpeace.com"
              style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              contact@earthforpeace.com
            </a>
            <a href="tel:+12122561366"
              style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +1 (212) 256 1366
            </a>
          </div>
          <div className="top-bar-social" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.52rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MAIN NAV ─── */}
      <nav style={{
        position: 'fixed', top: 38, left: 0, right: 0, zIndex: 50,
        paddingTop: scrolled ? '8px' : '14px',
        paddingBottom: scrolled ? '8px' : '10px',
        background: scrolled ? 'rgba(251,249,245,0.95)' : 'linear-gradient(to bottom, rgba(11,14,26,0.5) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(31,27,22,0.06)' : 'none',
        transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Image src="/icon1.png" alt="" width={26} height={26} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', color: scrolled ? '#1F1B16' : '#FDFCFA', fontWeight: 500, letterSpacing: '-0.01em', transition: 'color 0.4s ease' }}>
                Abhay Oyun
              </span>
            </Link>

            <div className="nav-links-desktop" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                  style={{ color: scrolled ? 'rgba(31,27,22,0.65)' : 'rgba(255,255,255,0.55)', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              ))}
              <Link href="/contact"
                style={{ background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', padding: '8px 20px', borderRadius: 2, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: "'Cinzel', serif", boxShadow: '0 4px 20px rgba(201,160,74,0.25)' }}>
                Begin Journey
              </Link>
            </div>

            {/* ─── HAMBURGER ─── */}
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              className="hamburger-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#1F1B16' : '#FDFCFA', borderRadius: 1, transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#1F1B16' : '#FDFCFA', borderRadius: 1, transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#1F1B16' : '#FDFCFA', borderRadius: 1, transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE OVERLAY ─── */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, top: 94, zIndex: 49,
          background: 'rgba(10,16,32,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          padding: '40px clamp(24px, 6vw, 48px)',
          overflowY: 'auto',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/contact"
            style={{ marginTop: 32, background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', padding: '14px 28px', borderRadius: 2, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: "'Cinzel', serif", textAlign: 'center' }}>
            Begin Journey
          </Link>
          <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              <a href="mailto:contact@earthforpeace.com"
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                contact@earthforpeace.com
              </a>
              <a href="tel:+12122561366"
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +1 (212) 256 1366
              </a>
            </div>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-links-desktop { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (max-width: 640px) {
          .top-bar-social { display: none !important; }
          .top-bar-contact { gap: 12px !important; }
          .top-bar-contact a { font-size: 0.5rem !important; }
        }
      `}</style>
    </>
  );
}
