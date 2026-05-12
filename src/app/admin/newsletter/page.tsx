'use client';

import { useEffect, useState } from 'react';
import { getNewsletterSubscribers, updateSubscription } from '@/lib/data';
import type { NewsletterSubscription } from '@/lib/supabase';

export default function NewsletterPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getNewsletterSubscribers().then(data => { setSubscribers(data); setLoading(false); });
  }, []);

  const filtered = filter === 'all' ? subscribers : subscribers.filter(s => s.status === filter);
  const activeCount = subscribers.filter(s => s.status === 'active').length;
  const unsubscribedCount = subscribers.filter(s => s.status === 'unsubscribed').length;
  const bouncedCount = subscribers.filter(s => s.status === 'bounced').length;

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'unsubscribed' : 'active';
    await updateSubscription(id, { status: newStatus as NewsletterSubscription['status'] });
    setSubscribers(prev => prev.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const exportCSV = () => {
    const active = subscribers.filter(s => s.status === 'active');
    const csv = [['Email', 'Name', 'Subscribed Date', 'Source'], ...active.map(s => [s.email, s.name || '', new Date(s.subscribed_at).toISOString(), s.source])].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'newsletter-subscribers.csv'; a.click();
  };

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C9A04A' }} />
            <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>EMAIL MARKETING</span>
          </div>
          <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>Newsletter</h1>
        </div>
        <div className="mt-6 lg:mt-0 flex items-center gap-3">
          <button onClick={exportCSV} className="px-4 py-2.5 text-xs flex items-center gap-2 transition-colors" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.5)', borderRadius: 2, border: 'none', cursor: 'pointer' }}>
            <span>↓</span> Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'ACTIVE SUBSCRIBERS', count: activeCount, color: '#C9A04A' },
          { label: 'UNSUBSCRIBED', count: unsubscribedCount, color: 'rgba(31,27,22,0.35)' },
          { label: 'BOUNCED', count: bouncedCount, color: '#BA8A78' },
        ].map(item => (
          <div key={item.label} className="p-6" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>{item.label}</span>
            </div>
            <p className="text-4xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: item.color }}>{item.count}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex gap-2">
          {['active', 'unsubscribed', 'bounced', 'all'].map((s) => (
            <button key={s} onClick={() => setFilter(s)}
              style={{ padding: '8px 16px', fontSize: '0.68rem', letterSpacing: '0.08em', borderRadius: 2, cursor: 'pointer', fontFamily: "'Cinzel', serif", border: 'none', transition: 'all 0.3s ease', background: filter === s ? 'linear-gradient(135deg, #C9A04A, #A07D2E)' : 'rgba(31,27,22,0.03)', color: filter === s ? '#FDFCFA' : 'rgba(31,27,22,0.35)' }}>
              {s.toUpperCase()}
            </button>
          ))}
        </div>
        <input type="text" placeholder="Search by email..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 sm:max-w-xs px-4 py-2 text-sm" style={{ fontFamily: "'Lora', Georgia, serif", background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.06)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
      </div>

      <div className="overflow-hidden" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
        {loading ? (
          <div className="p-12 text-center"><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>Loading subscribers...</p></div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center"><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>No subscribers found</p></div>
        ) : (
          <table className="w-full">
            <thead><tr style={{ borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
              {['EMAIL', 'NAME', 'SOURCE', 'SUBSCRIBED', 'ACTIONS'].map(h => (
                <th key={h} className="text-left px-6 py-4 text-xs" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>
                  {h === 'SUBSCRIBED' ? <span className="hidden md:table-cell">{h}</span> : h}
                </th>
              ))}
            </tr></thead>
            <tbody className="divide-y" style={{ borderColor: 'rgba(31,27,22,0.04)' }}>
              {filtered.map((sub) => (
                <tr key={sub.id} className="transition-colors">
                  <td className="px-6 py-4"><p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{sub.email}</p></td>
                  <td className="px-6 py-4"><p className="text-sm" style={{ color: 'rgba(31,27,22,0.55)' }}>{sub.name || '—'}</p></td>
                  <td className="px-6 py-4"><span className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.4)', borderRadius: 2 }}>{sub.source === 'begin_journey' ? 'BEGIN JOURNEY' : 'WEBSITE'}</span></td>
                  <td className="px-6 py-4 hidden md:table-cell"><p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)' }}>{new Date(sub.subscribed_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p></td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <a href={`mailto:${sub.email}`} className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.1)', color: '#A07D2E', borderRadius: 2, textDecoration: 'none' }}>Email</a>
                      {sub.status === 'active' ? (
                        <button onClick={() => handleToggleStatus(sub.id, sub.status)} className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(186,138,120,0.1)', color: '#BA8A78', borderRadius: 2, border: 'none', cursor: 'pointer' }}>Unsubscribe</button>
                      ) : sub.status === 'unsubscribed' ? (
                        <button onClick={() => handleToggleStatus(sub.id, sub.status)} className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(107,123,94,0.1)', color: '#6B7B5E', borderRadius: 2, border: 'none', cursor: 'pointer' }}>Re-subscribe</button>
                      ) : (
                        <span className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.3)', borderRadius: 2 }}>Bounced</span>
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
