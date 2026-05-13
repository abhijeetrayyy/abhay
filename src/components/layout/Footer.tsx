'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { subscribeToNewsletter } from '@/lib/data';

const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/earthforpeace',
  instagram: 'https://www.instagram.com/earthforpeace',
  youtube: 'https://www.youtube.com/@earthforpeace',
  tiktok: 'https://tiktok.com/@earthforpeace',
  whatsapp: 'https://wa.me/12122561366',
};

export default function Footer() {
  const year = new Date().getFullYear();
  const [newsEmail, setNewsEmail] = useState('');
  const [newsStatus, setNewsStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [newsError, setNewsError] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail) return;
    setNewsStatus('sending');
    const result = await subscribeToNewsletter(newsEmail);
    if (result.success) {
      setNewsStatus('success');
      setNewsEmail('');
    } else {
      setNewsError(result.error || 'Something went wrong.');
      setNewsStatus('error');
      setTimeout(() => setNewsStatus('idle'), 3000);
    }
  };

  return (
    <footer style={{
      background: '#F5F1EA',
      padding: '80px 0 36px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(31,27,22,0.05)',
    }}>
      {/* Subtle gold glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 700,
        height: 250,
        background: 'radial-gradient(ellipse at center top, rgba(201,160,74,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Sacred divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 56,
        opacity: 0.5,
      }}>
        <div style={{ width: 72, height: 1, background: 'linear-gradient(to right, transparent, #C9A04A)' }} />
        <svg width="22" height="22" viewBox="0 0 28 28" fill="none" stroke="#C9A04A" strokeWidth="1.2">
          <circle cx="14" cy="14" r="12" />
          <circle cx="14" cy="14" r="4" />
          <line x1="14" y1="2" x2="14" y2="10" />
          <line x1="14" y1="18" x2="14" y2="26" />
          <line x1="2" y1="14" x2="10" y2="14" />
          <line x1="18" y1="14" x2="26" y2="14" />
        </svg>
        <div style={{ width: 72, height: 1, background: 'linear-gradient(to left, transparent, #C9A04A)' }} />
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 48,
          paddingBottom: 44,
          borderBottom: '1px solid rgba(31,27,22,0.06)',
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <Image src="/icon1.png" alt="" width={26} height={26} style={{ objectFit: 'contain' }} />
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.4rem',
                color: '#1F1B16',
                fontWeight: 500,
              }}>
                Abhay Oyun
              </span>
            </Link>
            <p style={{
              color: 'rgba(31,27,22,0.5)',
              fontSize: '0.85rem',
              marginTop: 14,
              lineHeight: 1.8,
              maxWidth: 260,
              fontFamily: "'Lora', Georgia, serif",
            }}>
              Master Shaman & Guardian of Our Planet. Guiding seekers home since 1991.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
              {Object.entries(SOCIAL_LINKS).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(31,27,22,0.04)',
                    color: 'rgba(31,27,22,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    border: '1px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(201,160,74,0.1)';
                    e.currentTarget.style.color = '#C9A04A';
                    e.currentTarget.style.borderColor = 'rgba(201,160,74,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(31,27,22,0.04)';
                    e.currentTarget.style.color = 'rgba(31,27,22,0.4)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  {key === 'youtube' && <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                  {key === 'instagram' && <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/></svg>}
                  {key === 'facebook' && <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>}
                  {key === 'tiktok' && <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.37-4.96 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-3.48V9.56a8.16 8.16 0 0 0 4.77 1.52V8.97a4.85 4.85 0 0 1-1-.28z"/></svg>}
                  {key === 'whatsapp' && <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg>}
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 style={{
              color: '#1F1B16',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 18,
              fontFamily: "'Cinzel', serif",
            }}>
              Navigate
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Events', href: '/events' },
                { label: 'Teachings', href: '/teachings' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(31,27,22,0.45)',
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      fontFamily: "'Lora', Georgia, serif",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A04A'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(31,27,22,0.45)'; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 style={{
              color: '#1F1B16',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 18,
              fontFamily: "'Cinzel', serif",
            }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li>
                <a
                  href="https://www.youtube.com/@earthforpeace"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'rgba(31,27,22,0.45)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@earthforpeace.com"
                  style={{
                    color: 'rgba(31,27,22,0.45)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  contact@earthforpeace.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12122561366"
                  style={{
                    color: 'rgba(31,27,22,0.45)',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                >
                  +1 (212) 256 1366
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{
              color: '#1F1B16',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 10,
              fontFamily: "'Cinzel', serif",
            }}>
              Awaken Weekly
            </h4>
            <p style={{
              color: 'rgba(31,27,22,0.45)',
              fontSize: '0.82rem',
              marginBottom: 14,
              lineHeight: 1.6,
              fontFamily: "'Lora', Georgia, serif",
            }}>
              Receive potent insights directly from Abhay.
            </p>
            {newsStatus === 'success' ? (
              <div style={{
                padding: '11px 14px',
                background: 'rgba(107,123,94,0.08)',
                border: '1px solid rgba(107,123,94,0.15)',
                borderRadius: 2,
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.82rem',
                color: '#6B7B5E',
              }}>
                ✓ You're subscribed. Welcome to the circle.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex' }}>
                <input
                  type="email"
                  value={newsEmail}
                  onChange={e => setNewsEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  style={{
                    flex: 1,
                    padding: '11px 14px',
                    background: 'rgba(31,27,22,0.03)',
                    border: '1px solid rgba(31,27,22,0.08)',
                    borderRight: 'none',
                    borderRadius: '2px 0 0 2px',
                    color: '#1F1B16',
                    fontSize: '0.82rem',
                    outline: 'none',
                    fontFamily: "'Lora', Georgia, serif",
                  }}
                />
                <button
                  type="submit"
                  disabled={newsStatus === 'sending'}
                  style={{
                    padding: '11px 18px',
                    background: newsStatus === 'error' ? '#BA8A78' : '#C9A04A',
                    color: '#FDFCFA',
                    border: 'none',
                    borderRadius: '0 2px 2px 0',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    fontFamily: "'Cinzel', serif",
                    transition: 'background 0.3s ease',
                  }}
                >
                  {newsStatus === 'sending' ? '...' : newsStatus === 'error' ? 'Retry' : 'Join'}
                </button>
              </form>
            )}
            {newsStatus === 'error' && (
              <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.72rem', color: '#BA8A78', marginTop: 8 }}>{newsError}</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: 24,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <p style={{
            color: 'rgba(31,27,22,0.3)',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: "'Cinzel', serif",
          }}>
            &copy; {year} Abhay Oyun. All Rights Reserved.
          </p>
          <p style={{
            color: 'rgba(31,27,22,0.25)',
            fontSize: '0.9rem',
            fontStyle: 'italic',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            &ldquo;Walk in Power. Walk in Light.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
