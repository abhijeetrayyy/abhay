'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '◈' },
  { href: '/admin/leads', label: 'Leads', icon: '◉' },
  { href: '/admin/events', label: 'Events', icon: '◇' },
  { href: '/admin/registrations', label: 'Registrations', icon: '○' },
  { href: '/admin/newsletter', label: 'Newsletter', icon: '◌' },
  { href: '/admin/export', label: 'Export', icon: '↓' },
  { href: '/admin/settings', label: 'Settings', icon: '⚙' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/auth') {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#FBF9F5' }}>
      <aside className="w-64 flex flex-col fixed h-full" style={{ backgroundColor: '#FDFCFA', borderRight: '1px solid rgba(31,27,22,0.06)' }}>
        <div className="p-6" style={{ borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
          <Link href="/admin" className="block">
            <p className="text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 500 }}>
              Admin Panel
            </p>
            <p className="text-xs mt-0.5" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.15em', color: 'rgba(31,27,22,0.3)' }}>
              ABHAY OYUN
            </p>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm transition-all duration-300"
                style={{
                  borderRadius: 2,
                  fontFamily: "'Lora', Georgia, serif",
                  background: isActive ? 'rgba(201,160,74,0.08)' : 'transparent',
                  color: isActive ? '#A07D2E' : 'rgba(31,27,22,0.45)',
                  borderLeft: `2px solid ${isActive ? '#C9A04A' : 'transparent'}`,
                }}
              >
                <span className="text-base" style={{ opacity: 0.7 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="px-6 py-2">
          <div className="h-px" style={{ backgroundColor: 'rgba(31,27,22,0.06)' }} />
        </div>

        <div className="p-4 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 text-xs transition-colors rounded-sm"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em', color: 'rgba(31,27,22,0.3)' }}
          >
            <span>←</span>
            Back to Website
          </Link>
        </div>

        <div className="p-4" style={{ borderTop: '1px solid rgba(31,27,22,0.06)' }}>
          <p className="text-xs text-center" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.15)' }}>
            v1.0.0
          </p>
        </div>
      </aside>

      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
}
