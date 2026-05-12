'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/earthforpeace',
  instagram: 'https://www.instagram.com/earthforpeace',
  youtube: 'https://www.youtube.com/@earthforpeace',
  tiktok: 'https://tiktok.com/@earthforpeace',
  whatsapp: 'https://wa.me/12122561366',
};

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
    { href: '/#about', label: 'About' },
    { href: '/#offerings', label: 'Offerings' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/#stories', label: 'Stories' },
    { href: '/events', label: 'Events' },
    { href: '/teachings', label: 'Teachings' },
  ];

  const linkColor = scrolled ? 'rgba(31,27,22,0.75)' : 'rgba(31,27,22,0.65)';
  const logoColor = scrolled ? '#1F1B16' : '#1F1B16';
  const iconColor = scrolled ? 'rgba(31,27,22,0.45)' : 'rgba(31,27,22,0.4)';

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        paddingTop: scrolled ? '10px' : '22px',
        paddingBottom: scrolled ? '10px' : '12px',
        background: scrolled
          ? 'rgba(251, 249, 245, 0.92)'
          : 'linear-gradient(to bottom, rgba(251,249,245,0.55) 0%, transparent 100%)',
        backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(31,27,22,0.06)' : '1px solid transparent',
        transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 clamp(16px, 4vw, 48px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            {/* Sacred symbol */}
            <svg width="28" height="28" viewBox="0 0 36 36" fill="none" style={{ opacity: 0.5, transition: 'opacity 0.4s' }}>
              <circle cx="18" cy="18" r="17" stroke="#C9A04A" strokeWidth="1.2" />
              <circle cx="18" cy="18" r="6" stroke="#C9A04A" strokeWidth="0.8" />
              <line x1="18" y1="1" x2="18" y2="12" stroke="#C9A04A" strokeWidth="0.6" />
              <line x1="18" y1="24" x2="18" y2="35" stroke="#C9A04A" strokeWidth="0.6" />
              <line x1="1" y1="18" x2="12" y2="18" stroke="#C9A04A" strokeWidth="0.6" />
              <line x1="24" y1="18" x2="35" y2="18" stroke="#C9A04A" strokeWidth="0.6" />
            </svg>
            <span style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.4rem',
              color: logoColor,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              transition: 'color 0.4s ease',
            }}>
              Abhay Oyun
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: linkColor,
                  fontSize: '0.7rem',
                  fontFamily: "'Cinzel', serif",
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A04A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = linkColor; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {[
                { key: 'youtube', href: SOCIAL_LINKS.youtube },
                { key: 'instagram', href: SOCIAL_LINKS.instagram },
                { key: 'facebook', href: SOCIAL_LINKS.facebook },
                { key: 'tiktok', href: SOCIAL_LINKS.tiktok },
                { key: 'whatsapp', href: SOCIAL_LINKS.whatsapp },
              ].map(({ key, href }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: iconColor,
                    transition: 'color 0.3s ease, transform 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A04A'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = iconColor; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {key === 'youtube' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                  {key === 'instagram' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/></svg>}
                  {key === 'facebook' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                  {key === 'tiktok' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.37-4.96 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-3.48V9.56a8.16 8.16 0 0 0 4.77 1.52V8.97a4.85 4.85 0 0 1-1-.28z"/></svg>}
                  {key === 'whatsapp' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>}
                </a>
              ))}
            </div>
            <Link
              href="/#contact"
              style={{
                background: 'linear-gradient(135deg, #C9A04A, #A07D2E)',
                color: '#FDFCFA',
                padding: '10px 22px',
                borderRadius: 2,
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                fontFamily: "'Cinzel', serif",
                boxShadow: '0 4px 20px rgba(201,160,74,0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(201,160,74,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(201,160,74,0.25)';
              }}
            >
              Begin Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span style={{ height: 1.5, background: logoColor, transition: 'all 0.3s', borderRadius: 1 }} />
              <span style={{ height: 1.5, background: logoColor, transition: 'all 0.3s', borderRadius: 1 }} />
              <span style={{ height: 1.5, background: logoColor, transition: 'all 0.3s', borderRadius: 1 }} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
