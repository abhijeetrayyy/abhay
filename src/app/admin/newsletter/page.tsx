'use client';

import { useEffect, useState } from 'react';
import { NewsletterSubscription } from '@/lib/supabase';

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSubscribers([
        { id: '1', email: 'devoted.follower@email.com', name: 'Devoted Follower', source: 'website', status: 'active', subscribed_at: '2026-04-01T10:00:00Z' },
        { id: '2', email: 'spiritual.seeker@email.com', name: null, source: 'begin_journey', status: 'active', subscribed_at: '2026-04-15T14:00:00Z' },
        { id: '3', email: 'retreat.participant@email.com', name: 'Retreat Participant', source: 'begin_journey', status: 'active', subscribed_at: '2026-05-01T09:00:00Z' },
        { id: '4', email: 'meditation.practitioner@email.com', name: 'Meditation Practitioner', source: 'website', status: 'active', subscribed_at: '2026-03-20T11:00:00Z' },
        { id: '5', email: 'former.subscriber@email.com', name: null, source: 'website', status: 'unsubscribed', subscribed_at: '2026-01-15T08:00:00Z' },
        { id: '6', email: 'healing.journey@email.com', name: 'Healing Journey', source: 'begin_journey', status: 'active', subscribed_at: '2026-05-10T16:00:00Z' },
        { id: '7', email: 'new.teacher@email.com', name: 'New Teacher', source: 'website', status: 'active', subscribed_at: '2026-05-12T12:00:00Z' },
        { id: '8', email: 'bounced.email@email.com', name: null, source: 'website', status: 'bounced', subscribed_at: '2026-02-01T10:00:00Z' },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  const filteredSubscribers = filter === 'all'
    ? subscribers
    : subscribers.filter(s => s.status === filter);

  const activeCount = subscribers.filter(s => s.status === 'active').length;
  const unsubscribedCount = subscribers.filter(s => s.status === 'unsubscribed').length;
  const bouncedCount = subscribers.filter(s => s.status === 'bounced').length;

  const exportCSV = () => {
    const activeSubs = subscribers.filter(s => s.status === 'active');
    const csv = [
      ['Email', 'Name', 'Subscribed Date', 'Source'],
      ...activeSubs.map(s => [s.email, s.name || '', new Date(s.subscribed_at).toISOString(), s.source])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-subscribers.csv';
    a.click();
  };

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            <span className="text-cream/40 text-xs" style={{ fontFamily: 'var(--font-label)' }}>EMAIL MARKETING</span>
          </div>
          <h1 className="text-cream text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
            Newsletter
          </h1>
        </div>

        <div className="mt-6 lg:mt-0 flex items-center gap-3">
          <button
            onClick={exportCSV}
            className="px-4 py-2.5 text-xs bg-cream/10 text-cream/70 hover:bg-cream/20 rounded-sm transition-colors flex items-center gap-2"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            <span>↓</span> Export CSV
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-charcoal-light border border-cream/10 rounded-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>ACTIVE SUBSCRIBERS</span>
            <span className="text-sage">◉</span>
          </div>
          <p className="text-4xl text-cream" style={{ fontFamily: 'var(--font-display)' }}>{activeCount}</p>
        </div>
        <div className="bg-charcoal-light border border-cream/10 rounded-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>UNSUBSCRIBED</span>
            <span className="text-cream/30">○</span>
          </div>
          <p className="text-4xl text-cream/50" style={{ fontFamily: 'var(--font-display)' }}>{unsubscribedCount}</p>
        </div>
        <div className="bg-charcoal-light border border-cream/10 rounded-sm p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>BOUNCED</span>
            <span className="text-red-400/50">!</span>
          </div>
          <p className="text-4xl text-cream/30" style={{ fontFamily: 'var(--font-display)' }}>{bouncedCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2">
          {['active', 'unsubscribed', 'bounced', 'all'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 text-xs rounded-sm transition-all ${
                filter === status
                  ? 'bg-sage text-cream'
                  : 'bg-charcoal-light border border-cream/10 text-cream/50 hover:text-cream'
              }`}
              style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.08em' }}
            >
              {status.toUpperCase()}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search by email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 sm:max-w-xs px-4 py-2 bg-charcoal-light border border-cream/10 rounded-sm text-cream placeholder:text-cream/30 text-sm focus:outline-none focus:border-sage/50"
          style={{ fontFamily: 'var(--font-body)' }}
        />
      </div>

      {/* Table */}
      <div className="bg-charcoal-light border border-cream/10 rounded-sm overflow-hidden">
        {loading ? (
          <div className="p-12 flex flex-col items-center justify-center">
            <div className="w-8 h-8 border-2 border-sage/30 border-t-sage rounded-full animate-spin mb-4" />
            <p className="text-cream/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>Loading subscribers...</p>
          </div>
        ) : filteredSubscribers.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center">
            <span className="text-4xl text-cream/20 mb-4">◌</span>
            <p className="text-cream/40" style={{ fontFamily: 'var(--font-body)' }}>No subscribers found</p>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream/10">
                <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>EMAIL</th>
                <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>NAME</th>
                <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>SOURCE</th>
                <th className="text-left px-6 py-4 text-cream/30 text-xs hidden md:table-cell" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>SUBSCRIBED</th>
                <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cream/5">
              {filteredSubscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-cream/5 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-cream">{sub.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-cream/70">{sub.name || '—'}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-cream/10 text-cream/50 text-xs rounded-sm" style={{ fontFamily: 'var(--font-label)' }}>
                      {sub.source === 'begin_journey' ? 'BEGIN JOURNEY' : 'WEBSITE'}
                    </span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <p className="text-cream/50 text-sm" style={{ fontFamily: 'var(--font-label)' }}>
                      {new Date(sub.subscribed_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <a
                        href={`mailto:${sub.email}`}
                        className="px-3 py-1 text-xs bg-sage/20 text-sage hover:bg-sage/30 rounded-sm transition-colors"
                        style={{ fontFamily: 'var(--font-label)' }}
                      >
                        Email
                      </a>
                      {sub.status === 'active' ? (
                        <button
                          className="px-3 py-1 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-sm transition-colors"
                          style={{ fontFamily: 'var(--font-label)' }}
                        >
                          Unsubscribe
                        </button>
                      ) : sub.status === 'unsubscribed' ? (
                        <button
                          className="px-3 py-1 text-xs bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-sm transition-colors"
                          style={{ fontFamily: 'var(--font-label)' }}
                        >
                          Re-subscribe
                        </button>
                      ) : (
                        <span className="px-3 py-1 text-xs bg-cream/10 text-cream/30 rounded-sm" style={{ fontFamily: 'var(--font-label)' }}>
                          Bounced
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
