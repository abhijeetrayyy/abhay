'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface SocialLink {
  platform: string;
  url: string;
  label?: string;
}

interface SiteSettings {
  topBar?: {
    email?: string;
    phone?: string;
    showTopBar?: boolean;
    socialLinks?: SocialLink[];
  };
  navigation?: {
    logoImage?: string | null;
    logoText?: string;
    links?: NavLink[];
    ctaButton?: { label: string; url: string };
  };
}

const PLATFORM_LABELS: Record<string, string> = {
  youtube: 'YouTube',
  instagram: 'Instagram',
  facebook: 'Facebook',
  tiktok: 'TikTok',
  whatsapp: 'WhatsApp',
  twitter: 'X',
  linkedin: 'LinkedIn',
  telegram: 'Telegram',
};

const DEFAULT_TOP_BAR = {
  email: 'contact@earthforpeace.com',
  phone: '+1 (212) 256 1366',
  showTopBar: true,
  socialLinks: [
    { platform: 'youtube', url: 'https://www.youtube.com/@earthforpeace', label: 'YouTube' },
    { platform: 'instagram', url: 'https://www.instagram.com/earthforpeace', label: 'Instagram' },
    { platform: 'facebook', url: 'https://facebook.com/earthforpeace', label: 'Facebook' },
    { platform: 'tiktok', url: 'https://tiktok.com/@earthforpeace', label: 'TikTok' },
    { platform: 'whatsapp', url: 'https://wa.me/12122561366', label: 'WhatsApp' },
  ],
};

const DEFAULT_NAV = {
  logoText: 'Abhay Oyun',
  links: [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/teachings', label: 'Teachings' },
    { href: '/contact', label: 'Contact' },
  ],
  ctaButton: { label: 'Begin Journey', url: '/contact' },
};

export default function Navigation({ siteSettings }: { siteSettings?: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const topBar = siteSettings?.topBar || DEFAULT_TOP_BAR;
  const nav = siteSettings?.navigation || DEFAULT_NAV;
  const socialLinks = topBar.socialLinks || DEFAULT_TOP_BAR.socialLinks;
  const navLinks = nav.links || DEFAULT_NAV.links;
  const ctaButton = nav.ctaButton || DEFAULT_NAV.ctaButton;
  const logoText = nav.logoText || DEFAULT_NAV.logoText;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ─── TOP BAR ─── */}
      {topBar.showTopBar !== false && (
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 51,
        height: 38,
        display: 'flex', alignItems: 'center',
        background: '#1F1B16',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}>
        <div style={{
          maxWidth: 1400, width: '100%', margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 48px)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div className="top-bar-contact" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href={`mailto:${topBar.email}`}
              style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              {topBar.email}
            </a>
            <a href={`tel:${topBar.phone}`}
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {topBar.phone}
            </a>
          </div>
          <div className="top-bar-social" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {socialLinks.map(s => (
              <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.52rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
                {s.label || PLATFORM_LABELS[s.platform] || s.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* ─── MAIN NAV ─── */}
      <nav style={{
        position: 'fixed', top: 38, left: 0, right: 0, zIndex: 50,
        padding: '6px 0',
        background: 'rgba(251,249,245,0.97)',
        backdropFilter: 'blur(24px) saturate(180%)',
        borderBottom: '1px solid rgba(31,27,22,0.06)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Image src="/icon1.png" alt="" width={26} height={26} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', color: '#1F1B16', fontWeight: 500, letterSpacing: '-0.01em' }}>
                {logoText}
              </span>
            </Link>

            <div className="nav-links-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href}
                  className="nav-link"
                  style={{ color: 'rgba(31,27,22,0.7)', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.3s ease', borderBottom: pathname === link.href ? '1px solid #C9A04A' : '1px solid transparent', paddingBottom: 2 }}>
                  {link.label}
                </Link>
              ))}
              <Link href={ctaButton.url}
                className="nav-cta"
                style={{ background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', padding: '7px 18px', borderRadius: 2, fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: "'Cinzel', serif", boxShadow: '0 4px 16px rgba(201,160,74,0.2)', transition: 'all 0.3s ease' }}>
                {ctaButton.label}
              </Link>
            </div>

            {/* ─── HAMBURGER ─── */}
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
              className="hamburger-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', width: 22, height: 2, background: '#1F1B16', borderRadius: 1, transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#1F1B16', borderRadius: 1, transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: '#1F1B16', borderRadius: 1, transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
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
          <Link href={ctaButton.url}
            style={{ marginTop: 32, background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', padding: '14px 28px', borderRadius: 2, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: "'Cinzel', serif", textAlign: 'center' }}>
            {ctaButton.label}
          </Link>
          <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 28 }}>
              <a href={`mailto:${topBar.email}`}
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {topBar.email}
              </a>
              <a href={`tel:${topBar.phone}`}
                style={{ fontFamily: "'Cinzel', serif", fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                {topBar.phone}
              </a>
            </div>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {socialLinks.map(s => (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                  {s.label || PLATFORM_LABELS[s.platform] || s.platform}
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
        .nav-link:hover { color: #C9A04A !important; }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 6px 28px rgba(201,160,74,0.4) !important; }
      `}</style>
    </>
  );
}
