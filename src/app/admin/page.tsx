'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Stats {
  totalLeads: number;
  newLeads: number;
  totalEvents: number;
  activeEvents: number;
  totalRegistrations: number;
  pendingRegistrations: number;
  newsletterSubscribers: number;
}

interface Activity {
  id: string;
  type: 'lead' | 'registration' | 'newsletter';
  name: string;
  action: string;
  time: string;
  status?: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalLeads: 24,
    newLeads: 8,
    totalEvents: 6,
    activeEvents: 4,
    totalRegistrations: 18,
    pendingRegistrations: 5,
    newsletterSubscribers: 156,
  });
  const [loading, setLoading] = useState(true);
  const [animatedStats, setAnimatedStats] = useState<Stats>(stats);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setStats({
        totalLeads: 24,
        newLeads: 8,
        totalEvents: 6,
        activeEvents: 4,
        totalRegistrations: 18,
        pendingRegistrations: 5,
        newsletterSubscribers: 156,
      });
      setLoading(false);
    }, 800);

    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const duration = 1500;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setAnimatedStats({
          totalLeads: Math.round(stats.totalLeads * easeOut),
          newLeads: Math.round(stats.newLeads * easeOut),
          totalEvents: Math.round(stats.totalEvents * easeOut),
          activeEvents: Math.round(stats.activeEvents * easeOut),
          totalRegistrations: Math.round(stats.totalRegistrations * easeOut),
          pendingRegistrations: Math.round(stats.pendingRegistrations * easeOut),
          newsletterSubscribers: Math.round(stats.newsletterSubscribers * easeOut),
        });
        if (progress < 1) requestAnimationFrame(animate);
      };
      animate();
    }
  }, [loading, stats]);

  const statCards = [
    { label: 'New Leads', value: animatedStats.newLeads, icon: '◉', href: '/admin/leads', trend: '+3 this week' },
    { label: 'Total Leads', value: animatedStats.totalLeads, icon: '◈', href: '/admin/leads' },
    { label: 'Active Events', value: animatedStats.activeEvents, icon: '◇', href: '/admin/events', trend: `${animatedStats.totalEvents - animatedStats.activeEvents} drafts` },
    { label: 'Pending Registrations', value: animatedStats.pendingRegistrations, icon: '○', href: '/admin/registrations', urgent: animatedStats.pendingRegistrations > 3 },
  ];

  const recentActivity: Activity[] = [
    { id: '1', type: 'lead', name: 'Maria Santos', action: 'submitted begin journey form', time: '2 hours ago', status: 'new' },
    { id: '2', type: 'registration', name: 'Elena Kowalski', action: 'applied for Ancestral Fire Retreat', time: '5 hours ago', status: 'pending' },
    { id: '3', type: 'lead', name: 'James Chen', action: 'requested ceremony information', time: '1 day ago', status: 'contacted' },
    { id: '4', type: 'registration', name: 'David Mueller', action: 'applied for Shamanic Training', time: '2 days ago', status: 'pending' },
    { id: '5', type: 'newsletter', name: 'New subscriber', action: 'joined the transmission list', time: '3 days ago' },
  ];

  const quickActions = [
    { label: 'Create Event', href: '/admin/events/new', icon: '✦', description: 'Add new ceremony or retreat' },
    { label: 'View Leads', href: '/admin/leads', icon: '◉', description: 'Manage inquiries' },
    { label: 'Export Data', href: '/admin/export', icon: '↓', description: 'Download reports' },
    { label: 'Settings', href: '/admin/settings', icon: '◈', description: 'Configure system' },
  ];

  return (
    <div className="p-8 lg:p-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>
              Dashboard
            </h1>
            <div className="hidden lg:flex items-center gap-2" style={{ color: '#A07D2E' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C9A04A' }} />
              <span className="text-xs" style={{ fontFamily: "'Cinzel', serif" }}>LIVE</span>
            </div>
          </div>
          <p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.4)' }}>
            {currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex items-center gap-3">
          <Link
            href="/admin/events/new"
            style={{
              padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', border: 'none',
              fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease',
            }}
          >
            + New Event
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {statCards.map((stat, index) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group relative p-6 overflow-hidden transition-all duration-500"
            style={{
              backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2,
              boxShadow: '0 2px 16px rgba(31,27,22,0.03)', textDecoration: 'none',
              animationDelay: `${index * 100}ms`,
            }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(201,160,74,0.03) 0%, transparent 100%)' }} />

            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl transition-colors duration-300" style={{ color: '#C9A04A' }}>{stat.icon}</span>
                <span className="transition-all duration-300 group-hover:translate-x-1" style={{ color: 'rgba(31,27,22,0.15)' }}>→</span>
              </div>

              <div className="space-y-1">
                {loading ? (
                  <div className="w-16 h-10 rounded" style={{ backgroundColor: 'rgba(31,27,22,0.05)' }} />
                ) : (
                  <p className="text-5xl tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16' }}>
                    {stat.value}
                  </p>
                )}
                <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)' }}>
                  {stat.label}
                </p>
                {stat.trend && (
                  <p className="text-xs mt-2" style={{ fontFamily: "'Lora', Georgia, serif", color: '#A07D2E' }}>
                    {stat.trend}
                  </p>
                )}
                {stat.urgent && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#8B7E6E' }} />
                    <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: '#8B7E6E' }}>Needs attention</span>
                  </div>
                )}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-700" style={{ background: 'linear-gradient(to right, transparent, #C9A04A, transparent)' }} />
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 overflow-hidden" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
          <div className="p-6 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(31,27,22,0.05)' }}>
            <div className="flex items-center gap-3">
              <h2 className="text-xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>
                Recent Activity
              </h2>
              <span className="px-2 py-0.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.1)', color: '#A07D2E', borderRadius: 2 }}>
                LIVE
              </span>
            </div>
            <Link href="/admin/leads" className="text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>
              View All &rarr;
            </Link>
          </div>

          <div className="divide-y" style={{ borderColor: 'rgba(31,27,22,0.04)' }}>
            {recentActivity.map((item) => (
              <div
                key={item.id}
                className="p-5 transition-colors duration-300 group" style={{ backgroundColor: 'transparent' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{
                    borderRadius: 2,
                    background: item.type === 'lead' ? 'rgba(201,160,74,0.08)' : item.type === 'registration' ? 'rgba(139,126,110,0.08)' : 'rgba(155,168,139,0.08)',
                    color: item.type === 'lead' ? '#C9A04A' : item.type === 'registration' ? '#8B7E6E' : '#9BA88B',
                  }}>
                    {item.type === 'lead' ? '◉' : item.type === 'registration' ? '○' : '◌'}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif" }}>
                      <span className="font-medium" style={{ color: '#A07D2E' }}>{item.name}</span>
                      <span style={{ color: 'rgba(31,27,22,0.4)' }}> {item.action}</span>
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.2)' }}>
                        {item.time}
                      </span>
                      {item.status && (
                        <span className={`px-2 py-0.5 text-xs`} style={{
                          fontFamily: "'Cinzel', serif", borderRadius: 2,
                          background: item.status === 'new' ? 'rgba(201,160,74,0.1)' : item.status === 'pending' ? 'rgba(139,126,110,0.1)' : 'rgba(31,27,22,0.05)',
                          color: item.status === 'new' ? '#A07D2E' : item.status === 'pending' ? '#8B7E6E' : 'rgba(31,27,22,0.4)',
                        }}>
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <button className="px-3 py-1.5 text-xs transition-all duration-300" style={{
                    fontFamily: "'Cinzel', serif", borderRadius: 2,
                    background: 'rgba(201,160,74,0.1)', color: '#A07D2E', opacity: 0, border: 'none', cursor: 'pointer',
                  }}>
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="p-6" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
            <h2 className="text-xl mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>
              Quick Actions
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  href={action.href}
                  className="group p-4 transition-all duration-300"
                  style={{ borderRadius: 2, border: '1px solid rgba(31,27,22,0.04)', backgroundColor: '#FBF9F5', textDecoration: 'none' }}
                >
                  <span className="text-2xl block mb-3 transition-all duration-300" style={{ color: '#C9A04A' }}>
                    {action.icon}
                  </span>
                  <p className="text-sm font-medium mb-1" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>
                    {action.label}
                  </p>
                  <p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>
                    {action.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-6" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
            <h2 className="text-xl mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>
              Newsletter
            </h2>
            <div className="flex items-end gap-4 mb-4">
              <span className="text-4xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#C9A04A' }}>
                {animatedStats.newsletterSubscribers}
              </span>
              <span className="text-sm mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>
                subscribers
              </span>
            </div>
            <Link href="/admin/newsletter" className="text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>
              Manage Subscribers &rarr;
            </Link>
          </div>

          <div className="p-6" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
            <h2 className="text-xl mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>
              Upcoming Events
            </h2>
            <div className="space-y-3">
              {[
                { title: 'Opening the Ancestral Channel', date: 'May 31', spots: 5 },
                { title: 'Ancestral Fire Retreat', date: 'June 14', spots: 3 },
                { title: 'Plant Medicine Circle', date: 'June 15', spots: 15 },
              ].map((event, i) => (
                <div key={i} className="flex items-center justify-between py-2" style={{ borderBottom: i < 2 ? '1px solid rgba(31,27,22,0.04)' : 'none' }}>
                  <div>
                    <p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.7)' }}>{event.title}</p>
                    <p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>{event.date}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-sm`} style={{
                    fontFamily: "'Cinzel', serif",
                    background: event.spots < 5 ? 'rgba(139,126,110,0.1)' : 'rgba(201,160,74,0.1)',
                    color: event.spots < 5 ? '#8B7E6E' : '#A07D2E',
                  }}>
                    {event.spots} spots
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
