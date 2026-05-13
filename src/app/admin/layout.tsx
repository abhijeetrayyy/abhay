'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '◈' },
  { href: '/admin/leads', label: 'Leads', icon: '◉' },
  { href: '/admin/events', label: 'Events', icon: '◇' },
  { href: '/admin/registrations', label: 'Registrations', icon: '○' },
  { href: '/admin/testimonials', label: 'Testimonials', icon: '★' },
  { href: '/admin/newsletter', label: 'Newsletter', icon: '◌' },
  { href: '/admin/export', label: 'Export', icon: '↓' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/auth' || pathname.startsWith('/admin/studio')) {
    return <>{children}</>;
  }

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#FBF9F5' }}>
      {/* Sidebar */}
      <aside style={{
        width: 260, flexShrink: 0,
        backgroundColor: '#FDFCFA',
        borderRight: '1px solid rgba(31,27,22,0.06)',
        display: 'flex', flexDirection: 'column', height: '100vh',
        position: 'fixed', left: 0, top: 0,
      }}>
        {/* Logo */}
        <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
          <Link href="/admin" style={{ textDecoration: 'none' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 500, fontSize: '1.2rem', lineHeight: 1.3 }}>
              Abhay Oyun
            </p>
            <p style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', letterSpacing: '0.18em', color: 'rgba(31,27,22,0.3)', marginTop: 2 }}>
              ADMIN PANEL
            </p>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '12px 10px', overflowY: 'auto' }}>
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px', marginBottom: 2,
                  fontSize: '0.85rem', lineHeight: 1.4,
                  fontFamily: "'Lora', Georgia, serif",
                  background: active ? 'rgba(201,160,74,0.08)' : 'transparent',
                  color: active ? '#A07D2E' : 'rgba(31,27,22,0.5)',
                  borderLeft: `2.5px solid ${active ? '#C9A04A' : 'transparent'}`,
                  borderRadius: 0,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <span style={{ fontSize: '0.9rem', opacity: active ? 1 : 0.5, width: 20, textAlign: 'center', flexShrink: 0 }}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(31,27,22,0.06)', padding: '12px 16px' }}>
          <Link href="/"
            style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
              fontSize: '0.72rem', fontFamily: "'Cinzel', serif", letterSpacing: '0.05em',
              color: 'rgba(31,27,22,0.3)', textDecoration: 'none', borderRadius: 2,
              transition: 'all 0.2s ease',
            }}>
            <span style={{ fontSize: '0.8rem' }}>←</span>
            <span>Back to Website</span>
          </Link>
          <p style={{ fontSize: '0.6rem', textAlign: 'center', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.1)', marginTop: 8 }}>
            v1.0.0
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: 260, minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
