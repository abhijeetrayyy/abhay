'use client';

import { useEffect, useState } from 'react';
import { getAllContacts, updateContact } from '@/lib/data';
import type { Contact } from '@/lib/supabase';

const statusConfig: Record<string, { color: string; bg: string; label: string }> = {
  new: { color: '#A07D2E', bg: 'rgba(201,160,74,0.1)', label: 'New' },
  contacted: { color: '#7D8E6E', bg: 'rgba(155,168,139,0.1)', label: 'Contacted' },
  in_progress: { color: '#8B7E6E', bg: 'rgba(139,126,110,0.1)', label: 'In Progress' },
  converted: { color: '#6B7B5E', bg: 'rgba(107,123,94,0.1)', label: 'Converted' },
  lost: { color: '#BA8A78', bg: 'rgba(186,138,120,0.1)', label: 'Lost' },
};

const priorityConfig: Record<string, { color: string; bg: string }> = {
  low: { color: 'rgba(31,27,22,0.35)', bg: 'rgba(31,27,22,0.05)' },
  medium: { color: '#A07D2E', bg: 'rgba(201,160,74,0.1)' },
  high: { color: '#8B7E6E', bg: 'rgba(139,126,110,0.1)' },
  urgent: { color: '#BA8A78', bg: 'rgba(186,138,120,0.1)' },
};

export default function LeadsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    getAllContacts().then(data => {
      setContacts(data);
      setLoading(false);
    });
  }, []);

  const filteredContacts = contacts.filter(contact => {
    const matchesFilter = filter === 'all' || contact.status === filter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || contact.name.toLowerCase().includes(q) || contact.email.toLowerCase().includes(q) || (contact.subject?.toLowerCase().includes(q) ?? false);
    return matchesFilter && matchesSearch;
  });

  const visibleContacts = filteredContacts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredContacts.length;

  const handleUpdateStatus = async (id: string, status: Contact['status']) => {
    await updateContact(id, { status });
    setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
    if (selectedContact?.id === id) setSelectedContact(prev => prev ? { ...prev, status } : null);
  };

  const statusCounts = {
    all: contacts.length,
    new: contacts.filter(c => c.status === 'new').length,
    contacted: contacts.filter(c => c.status === 'contacted').length,
    in_progress: contacts.filter(c => c.status === 'in_progress').length,
    converted: contacts.filter(c => c.status === 'converted').length,
  };

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C9A04A' }} />
            <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>LEADS MANAGEMENT</span>
          </div>
          <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>
            Leads & Inquiries
          </h1>
        </div>
        <div className="mt-6 lg:mt-0 flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.1)', color: '#A07D2E', borderRadius: 2 }}>{statusCounts.new} New</span>
            <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(139,126,110,0.1)', color: '#8B7E6E', borderRadius: 2 }}>{statusCounts.in_progress} In Progress</span>
            <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(107,123,94,0.1)', color: '#6B7B5E', borderRadius: 2 }}>{statusCounts.converted} Converted</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
          {['all', 'new', 'contacted', 'in_progress', 'converted', 'lost'].map((item) => (
            <button key={item} onClick={() => setFilter(item)}
              style={{
                padding: '8px 16px', fontSize: '0.68rem', letterSpacing: '0.08em', borderRadius: 2, cursor: 'pointer', whiteSpace: 'nowrap',
                fontFamily: "'Cinzel', serif", border: 'none', transition: 'all 0.3s ease',
                background: filter === item ? 'linear-gradient(135deg, #C9A04A, #A07D2E)' : 'rgba(31,27,22,0.03)',
                color: filter === item ? '#FDFCFA' : 'rgba(31,27,22,0.35)',
              }}>
              {item === 'all' ? 'All' : item.charAt(0).toUpperCase() + item.slice(1).replace('_', ' ')}
            </button>
          ))}
        </div>
        <input type="text" placeholder="Search by name, email, or subject..." value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-md px-4 py-2.5 text-sm transition-all"
          style={{ fontFamily: "'Lora', Georgia, serif", background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.06)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
      </div>

      <div className="overflow-hidden" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
        {loading ? (
          <div className="p-12 text-center"><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>Loading leads...</p></div>
        ) : filteredContacts.length === 0 ? (
          <div className="p-12 text-center"><span className="text-4xl block mb-4" style={{ color: 'rgba(31,27,22,0.1)' }}>◉</span><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>No leads found</p></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
                  {['CONTACT', 'SOURCE', 'PRIORITY', 'STATUS', 'DATE', ''].map(h => (
                    <th key={h} className="text-left px-6 py-4 text-xs" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>
                      {h === 'DATE' ? <span className="hidden md:table-cell">{h}</span> : h === 'SOURCE' ? <span className="hidden lg:table-cell">{h}</span> : h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y" style={{ borderColor: 'rgba(31,27,22,0.04)' }}>
                {visibleContacts.map((contact) => (
                  <tr key={contact.id} className="transition-colors duration-200 group cursor-pointer" onClick={() => setSelectedContact(contact)}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center font-medium" style={{ background: 'rgba(201,160,74,0.08)', color: '#A07D2E', borderRadius: 2, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{contact.name}</p>
                          <p className="text-xs" style={{ color: 'rgba(31,27,22,0.4)' }}>{contact.email}</p>
                          {contact.subject && <p className="text-xs mt-0.5 truncate max-w-[200px]" style={{ color: '#A07D2E' }}>{contact.subject}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 hidden lg:table-cell">
                      <span className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: contact.source === 'begin_journey' ? 'rgba(201,160,74,0.1)' : 'rgba(31,27,22,0.05)', color: contact.source === 'begin_journey' ? '#A07D2E' : 'rgba(31,27,22,0.4)' }}>
                        {contact.source === 'begin_journey' ? 'BEGIN JOURNEY' : 'CONTACT'}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: priorityConfig[contact.priority].bg, color: priorityConfig[contact.priority].color }}>
                        {contact.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <select value={contact.status} onChange={(e) => { e.stopPropagation(); handleUpdateStatus(contact.id, e.target.value as Contact['status']); }}
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 text-xs border-0 cursor-pointer"
                        style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: statusConfig[contact.status].bg, color: statusConfig[contact.status].color }}>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="in_progress">In Progress</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                    <td className="px-6 py-5 hidden md:table-cell">
                      <p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)' }}>
                        {new Date(contact.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={(e) => { e.stopPropagation(); setSelectedContact(contact); }}
                          className="px-3 py-1.5 text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.5)', borderRadius: 2, border: 'none', cursor: 'pointer' }}>
                          View
                        </button>
                        <a href={`mailto:${contact.email}`} onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.1)', color: '#A07D2E', borderRadius: 2, textDecoration: 'none' }}>
                          Email
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {hasMore && (
              <div className="p-4 text-center" style={{ borderTop: '1px solid rgba(31,27,22,0.06)' }}>
                <button onClick={() => setVisibleCount(prev => prev + 10)} className="px-6 py-2 text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", color: '#A07D2E', border: 'none', cursor: 'pointer', background: 'none' }}>
                  Load More ({filteredContacts.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {selectedContact && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 lg:p-8" style={{ backgroundColor: 'rgba(31,27,22,0.9)', backdropFilter: 'blur(4px)' }}
          onClick={() => setSelectedContact(null)}>
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}
            onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 p-6 flex items-center justify-between z-10" style={{ backgroundColor: '#FDFCFA', borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-lg font-medium" style={{ background: 'rgba(201,160,74,0.08)', color: '#A07D2E', borderRadius: 2, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {selectedContact.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h2 className="text-xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>{selectedContact.name}</h2>
                  <p className="text-sm" style={{ color: '#A07D2E' }}>{selectedContact.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedContact(null)} className="w-10 h-10 flex items-center justify-center text-xl" style={{ color: 'rgba(31,27,22,0.35)', border: 'none', background: 'none', cursor: 'pointer' }}>&times;</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'STATUS', value: statusConfig[selectedContact.status].label, bg: statusConfig[selectedContact.status].bg, color: statusConfig[selectedContact.status].color },
                  { label: 'PRIORITY', value: selectedContact.priority.toUpperCase(), bg: priorityConfig[selectedContact.priority].bg, color: priorityConfig[selectedContact.priority].color },
                  { label: 'SOURCE', value: selectedContact.source === 'begin_journey' ? 'Begin Journey' : 'Contact' },
                  { label: 'DATE', value: new Date(selectedContact.created_at).toLocaleDateString() },
                ].map(item => (
                  <div key={item.label} className="p-4" style={{ backgroundColor: '#FBF9F5', borderRadius: 2 }}>
                    <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>{item.label}</label>
                    {item.bg ? <span className="px-2 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: item.bg, color: item.color }}>{item.value}</span>
                    : <span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{item.value}</span>}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>EMAIL</label><a href={`mailto:${selectedContact.email}`} className="text-sm" style={{ color: '#A07D2E' }}>{selectedContact.email}</a></div>
                <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>PHONE</label><p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{selectedContact.phone || '—'}</p></div>
              </div>
              {selectedContact.subject && <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>SUBJECT</label><p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{selectedContact.subject}</p></div>}
              {selectedContact.message && <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>MESSAGE</label><div className="p-4" style={{ backgroundColor: '#FBF9F5', borderRadius: 2 }}><p className="leading-relaxed text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{selectedContact.message}</p></div></div>}
              {selectedContact.notes && <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>NOTES</label><div className="p-4" style={{ backgroundColor: 'rgba(139,126,110,0.05)', border: '1px solid rgba(139,126,110,0.15)', borderRadius: 2 }}><p className="text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{selectedContact.notes}</p></div></div>}
              <div className="flex flex-wrap gap-3 pt-4" style={{ borderTop: '1px solid rgba(31,27,22,0.06)' }}>
                <a href={`mailto:${selectedContact.email}`} style={{ padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Send Email
                </a>
                <select value={selectedContact.status} onChange={(e) => handleUpdateStatus(selectedContact.id, e.target.value as Contact['status'])}
                  className="px-4 py-2.5 text-xs cursor-pointer" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: statusConfig[selectedContact.status].bg, color: statusConfig[selectedContact.status].color, border: 'none' }}>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="converted">Converted</option>
                  <option value="lost">Lost</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
