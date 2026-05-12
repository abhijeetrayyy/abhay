'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllEvents } from '@/lib/data';
import type { Event as AppEvent } from '@/lib/supabase';

const typeConfig: Record<string, { color: string; bg: string; icon: string }> = {
  retreat: { color: '#8B7E6E', bg: 'rgba(139,126,110,0.1)', icon: '◇' },
  ceremony: { color: '#C9A04A', bg: 'rgba(201,160,74,0.1)', icon: '◉' },
  workshop: { color: '#7D8E6E', bg: 'rgba(155,168,139,0.1)', icon: '◈' },
  online: { color: '#6B5D4E', bg: 'rgba(107,93,78,0.1)', icon: '○' },
  training: { color: '#9BA88B', bg: 'rgba(155,168,139,0.1)', icon: '◌' },
};

const statusConfig: Record<string, { color: string; bg: string }> = {
  draft: { color: 'rgba(31,27,22,0.35)', bg: 'rgba(31,27,22,0.05)' },
  published: { color: '#6B7B5E', bg: 'rgba(107,123,94,0.1)' },
  cancelled: { color: '#BA8A78', bg: 'rgba(186,138,120,0.1)' },
  postponed: { color: '#8B7E6E', bg: 'rgba(139,126,110,0.1)' },
  completed: { color: '#7D8E6E', bg: 'rgba(155,168,139,0.1)' },
};

export default function EventsAdminPage() {
  const [events, setEvents] = useState<AppEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    getAllEvents().then(data => { setEvents(data); setLoading(false); });
  }, []);

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.status === filter);
  const upcomingEvents = events.filter(e => new Date(e.start_date) > new Date() && e.status === 'published').sort((a, b) => new Date(a.start_date).getTime() - new Date(b.start_date).getTime());

  const toggleFeatured = async (id: string) => {
    const event = events.find(e => e.id === id);
    if (!event) return;
    const { updateEvent } = await import('@/lib/data');
    await updateEvent(id, { is_featured: !event.is_featured });
    setEvents(prev => prev.map(e => e.id === id ? { ...e, is_featured: !e.is_featured } : e));
  };

  const toggleStatus = async (id: string) => {
    const event = events.find(e => e.id === id);
    if (!event) return;
    const newStatus = event.status === 'published' ? 'draft' : 'published';
    const { updateEvent } = await import('@/lib/data');
    await updateEvent(id, { status: newStatus as AppEvent['status'] });
    setEvents(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e));
  };

  const getDaysUntil = (date: string) => {
    const diff = new Date(date).getTime() - new Date().getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days < 0) return 'Past';
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `${days} days`;
  };

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C9A04A' }} />
            <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>EVENT MANAGEMENT</span>
          </div>
          <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>Events</h1>
        </div>
        <div className="mt-6 lg:mt-0 flex items-center gap-4">
          <div className="flex overflow-hidden" style={{ borderRadius: 2, border: '1px solid rgba(31,27,22,0.06)' }}>
            {['grid', 'list'].map(mode => (
              <button key={mode} onClick={() => setViewMode(mode as 'grid' | 'list')}
                className="px-3 py-2 transition-colors"
                style={{ background: viewMode === mode ? 'rgba(201,160,74,0.1)' : 'transparent', color: viewMode === mode ? '#A07D2E' : 'rgba(31,27,22,0.3)', border: 'none', cursor: 'pointer' }}>
                {mode === 'grid' ? '◫' : '☰'}
              </button>
            ))}
          </div>
          <Link href="/admin/events/new" style={{ padding: '0.75rem 1.25rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
            + Create Event
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {['all', 'published', 'draft', 'cancelled'].map((status) => (
          <button key={status} onClick={() => setFilter(status)}
            style={{ padding: '8px 16px', fontSize: '0.68rem', letterSpacing: '0.08em', borderRadius: 2, cursor: 'pointer', fontFamily: "'Cinzel', serif", border: 'none', transition: 'all 0.3s ease', background: filter === status ? 'linear-gradient(135deg, #C9A04A, #A07D2E)' : 'rgba(31,27,22,0.03)', color: filter === status ? '#FDFCFA' : 'rgba(31,27,22,0.35)' }}>
            {status.toUpperCase()}
          </button>
        ))}
      </div>

      {!loading && upcomingEvents.length > 0 && filter === 'all' && (
        <div className="mb-8 p-4" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
          <div className="flex items-center gap-3 mb-3">
            <span style={{ color: '#8B7E6E', fontSize: '0.8rem' }}>◉</span>
            <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>UPCOMING</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {upcomingEvents.slice(0, 4).map((event) => (
              <div key={event.id} className="flex-shrink-0 flex items-center gap-3 px-4 py-2" style={{ backgroundColor: '#FBF9F5', borderRadius: 2, border: '1px solid rgba(31,27,22,0.04)' }}>
                <div className="w-8 h-8 flex items-center justify-center text-sm" style={{ background: typeConfig[event.event_type].bg, color: typeConfig[event.event_type].color, borderRadius: 2 }}>
                  <span>{typeConfig[event.event_type].icon}</span>
                </div>
                <div>
                  <p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{event.title}</p>
                  <p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: event.spots_remaining < 5 ? '#8B7E6E' : 'rgba(31,27,22,0.35)' }}>
                    {getDaysUntil(event.start_date)} &middot; {event.spots_remaining} spots
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden animate-pulse" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
              <div className="aspect-video" style={{ backgroundColor: '#F5F1EA' }} />
              <div className="p-5 space-y-3">
                <div className="h-4 w-1/3 rounded" style={{ backgroundColor: '#F5F1EA' }} />
                <div className="h-6 w-2/3 rounded" style={{ backgroundColor: '#F5F1EA' }} />
              </div>
            </div>
          ))}
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <span className="text-5xl mb-4" style={{ color: 'rgba(31,27,22,0.08)' }}>◇</span>
          <p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>No events found</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group overflow-hidden transition-all duration-500" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
              <div className="relative aspect-[16/10] overflow-hidden">
                {event.hero_image ? <img src={event.hero_image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#FBF9F5' }}><span className="text-4xl" style={{ color: 'rgba(31,27,22,0.08)' }}>{typeConfig[event.event_type].icon}</span></div>}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(31,27,22,0.3) 0%, rgba(31,27,22,0.05) 50%, transparent 100%)' }} />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: typeConfig[event.event_type].bg, color: typeConfig[event.event_type].color }}>{event.event_type.toUpperCase()}</span>
                  {event.is_featured && <span className="px-2 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA' }}>FEATURED</span>}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: statusConfig[event.status].bg, color: statusConfig[event.status].color }}>{event.status.toUpperCase()}</span>
                </div>
                {event.is_online && <div className="absolute bottom-3 left-3"><span className="px-2 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: 'rgba(107,93,78,0.1)', color: '#6B5D4E' }}>ONLINE</span></div>}
              </div>
              <div className="p-5">
                <h3 className="text-lg mb-2 line-clamp-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>{event.title}</h3>
                <p className="text-sm mb-4 line-clamp-1" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.45)' }}>{event.short_description || event.location_name}</p>
                <div className="flex items-center gap-2 text-xs mb-4" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)' }}>
                  <span>{new Date(event.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  {event.end_date && <span>&mdash; {new Date(event.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>}
                  <span className="mx-1">&middot;</span>
                  <span className="truncate">{event.location_city || event.location_name}</span>
                </div>
                <div className="flex items-center justify-between py-3" style={{ borderTop: '1px solid rgba(31,27,22,0.05)' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: event.spots_remaining < 5 ? '#8B7E6E' : '#C9A04A' }} />
                    <span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{event.spots_remaining}/{event.max_participants}</span>
                    <span className="text-xs" style={{ color: 'rgba(31,27,22,0.3)' }}>spots</span>
                  </div>
                  <span className="text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16' }}>${event.price_amount}</span>
                </div>
                <div className="flex gap-2 pt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/admin/events/${event.id}`} className="flex-1 text-center px-3 py-2 text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.5)', borderRadius: 2, textDecoration: 'none' }}>Edit</Link>
                  <button onClick={() => toggleFeatured(event.id)} className="px-3 py-2 text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, border: 'none', cursor: 'pointer', background: event.is_featured ? 'rgba(201,160,74,0.1)' : 'rgba(31,27,22,0.05)', color: event.is_featured ? '#A07D2E' : 'rgba(31,27,22,0.3)' }}>&starf;</button>
                  <button onClick={() => toggleStatus(event.id)} className="px-3 py-2 text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, border: 'none', cursor: 'pointer', background: event.status === 'published' ? 'rgba(186,138,120,0.1)' : 'rgba(107,123,94,0.1)', color: event.status === 'published' ? '#BA8A78' : '#6B7B5E' }}>
                    {event.status === 'published' ? 'Unpublish' : 'Publish'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
          <table className="w-full">
            <thead><tr style={{ borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
              {['EVENT', 'TYPE', 'DATE', 'SPOTS', 'PRICE', 'STATUS', ''].map(h => (
                <th key={h} className="text-left px-6 py-4 text-xs" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody className="divide-y" style={{ borderColor: 'rgba(31,27,22,0.04)' }}>
              {filteredEvents.map((event) => (
                <tr key={event.id} className="transition-colors group">
                  <td className="px-6 py-4"><div className="flex items-center gap-4">
                    <div className="w-12 h-12 overflow-hidden flex-shrink-0" style={{ backgroundColor: '#FBF9F5', borderRadius: 2 }}>
                      {event.hero_image && <img src={event.hero_image} alt="" className="w-full h-full object-cover" />}
                    </div>
                    <div><p className="font-medium text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{event.title}</p><p className="text-xs" style={{ color: 'rgba(31,27,22,0.4)' }}>{event.location_name}</p></div>
                  </div></td>
                  <td className="px-6 py-4"><span className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: typeConfig[event.event_type].bg, color: typeConfig[event.event_type].color }}>{event.event_type.toUpperCase()}</span></td>
                  <td className="px-6 py-4"><p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.5)' }}>{new Date(event.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p></td>
                  <td className="px-6 py-4"><div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: event.spots_remaining < 5 ? '#8B7E6E' : '#C9A04A' }} /><span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{event.spots_remaining}/{event.max_participants}</span></div></td>
                  <td className="px-6 py-4"><span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16' }}>${event.price_amount}</span></td>
                  <td className="px-6 py-4"><span className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: statusConfig[event.status].bg, color: statusConfig[event.status].color }}>{event.status.toUpperCase()}</span></td>
                  <td className="px-6 py-4"><div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"><Link href={`/admin/events/${event.id}`} className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.5)', borderRadius: 2, textDecoration: 'none' }}>Edit</Link></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
