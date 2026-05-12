'use client';

import { useEffect, useState } from 'react';
import { getAllRegistrations, updateRegistration } from '@/lib/data';
import type { EventRegistration } from '@/lib/supabase';

const statusConfig: Record<string, { color: string; bg: string; label: string }> = {
  pending: { color: '#A07D2E', bg: 'rgba(201,160,74,0.1)', label: 'Pending Review' },
  approved: { color: '#6B7B5E', bg: 'rgba(107,123,94,0.1)', label: 'Approved' },
  rejected: { color: '#BA8A78', bg: 'rgba(186,138,120,0.1)', label: 'Rejected' },
  waitlisted: { color: '#7D8E6E', bg: 'rgba(155,168,139,0.1)', label: 'Waitlisted' },
  cancelled: { color: 'rgba(31,27,22,0.35)', bg: 'rgba(31,27,22,0.05)', label: 'Cancelled' },
  completed: { color: '#6B7B5E', bg: 'rgba(107,123,94,0.1)', label: 'Completed' },
};

const priorityConfig: Record<string, { color: string; bg: string }> = {
  low: { color: 'rgba(31,27,22,0.35)', bg: 'rgba(31,27,22,0.05)' },
  medium: { color: '#A07D2E', bg: 'rgba(201,160,74,0.1)' },
  high: { color: '#8B7E6E', bg: 'rgba(139,126,110,0.1)' },
};

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<EventRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedReg, setSelectedReg] = useState<EventRegistration | null>(null);

  useEffect(() => {
    getAllRegistrations().then(data => { setRegistrations(data); setLoading(false); });
  }, []);

  const filtered = filter === 'all' ? registrations : registrations.filter(r => r.status === filter);
  const pendingCount = registrations.filter(r => r.status === 'pending').length;

  const handleUpdateStatus = async (id: string, status: EventRegistration['status']) => {
    await updateRegistration(id, { status });
    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    if (selectedReg?.id === id) setSelectedReg(prev => prev ? { ...prev, status } : null);
  };

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {pendingCount > 0 && (
              <>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#A07D2E' }} />
                <span className="px-2 py-0.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.1)', color: '#A07D2E', borderRadius: 2 }}>{pendingCount} PENDING</span>
              </>
            )}
            <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>EVENT APPLICATIONS</span>
          </div>
          <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>Registrations</h1>
        </div>
        <div className="mt-6 lg:mt-0"><p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>{registrations.length} total applications</p></div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {['all', 'pending', 'approved', 'rejected', 'waitlisted'].map((s) => (
          <button key={s} onClick={() => setFilter(s)}
            style={{ padding: '8px 16px', fontSize: '0.68rem', letterSpacing: '0.08em', borderRadius: 2, cursor: 'pointer', fontFamily: "'Cinzel', serif", border: 'none', transition: 'all 0.3s ease', background: filter === s ? 'linear-gradient(135deg, #C9A04A, #A07D2E)' : 'rgba(31,27,22,0.03)', color: filter === s ? '#FDFCFA' : 'rgba(31,27,22,0.35)' }}>
            {s.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="overflow-hidden" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
        {loading ? (
          <div className="p-12 text-center"><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>Loading registrations...</p></div>
        ) : filtered.length === 0 ? (
          <div className="p-12 text-center"><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>No registrations found</p></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead><tr style={{ borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
                {['APPLICANT', 'EVENT', 'EXPERIENCE', 'PRIORITY', 'STATUS', 'DATE', ''].map(h => (
                  <th key={h} className="text-left px-6 py-4 text-xs" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>
                    {h === 'EVENT' ? <span className="hidden lg:table-cell">{h}</span> : h === 'DATE' ? <span className="hidden md:table-cell">{h}</span> : h}
                  </th>
                ))}
              </tr></thead>
              <tbody className="divide-y" style={{ borderColor: 'rgba(31,27,22,0.04)' }}>
                {filtered.map((reg) => (
                  <tr key={reg.id} className="transition-colors cursor-pointer group" onClick={() => setSelectedReg(reg)}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex items-center justify-center text-sm font-medium" style={{ background: statusConfig[reg.status].bg, color: statusConfig[reg.status].color, borderRadius: 2, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                          {reg.first_name[0]}{reg.last_name[0]}
                        </div>
                        <div>
                          <p className="font-medium text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{reg.first_name} {reg.last_name}</p>
                          <p className="text-xs" style={{ color: 'rgba(31,27,22,0.4)' }}>{reg.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 hidden lg:table-cell"><p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#A07D2E' }}>{/* event name from lookup - basic */}{reg.event_id.slice(0, 8)}</p></td>
                    <td className="px-6 py-5"><span className="px-3 py-1 text-xs capitalize" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.4)', borderRadius: 2 }}>{reg.experience_level || 'Not specified'}</span></td>
                    <td className="px-6 py-5"><span className="px-3 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: priorityConfig[reg.priority].bg, color: priorityConfig[reg.priority].color }}>{reg.priority.toUpperCase()}</span></td>
                    <td className="px-6 py-5">
                      <select value={reg.status} onChange={(e) => { e.stopPropagation(); handleUpdateStatus(reg.id, e.target.value as EventRegistration['status']); }}
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1.5 text-xs border-0 cursor-pointer"
                        style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: statusConfig[reg.status].bg, color: statusConfig[reg.status].color }}>
                        <option value="pending">Pending</option><option value="approved">Approved</option><option value="rejected">Rejected</option><option value="waitlisted">Waitlisted</option><option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-5 hidden md:table-cell"><p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)' }}>{new Date(reg.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p></td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={(e) => { e.stopPropagation(); setSelectedReg(reg); }} className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.5)', borderRadius: 2, border: 'none', cursor: 'pointer' }}>View</button>
                        <a href={`mailto:${reg.email}`} onClick={(e) => e.stopPropagation()} className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.1)', color: '#A07D2E', borderRadius: 2, textDecoration: 'none' }}>Email</a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selectedReg && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 lg:p-8" style={{ backgroundColor: 'rgba(31,27,22,0.9)', backdropFilter: 'blur(4px)' }}
          onClick={() => setSelectedReg(null)}>
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}
            onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 p-6 flex items-center justify-between" style={{ backgroundColor: '#FDFCFA', borderBottom: '1px solid rgba(31,27,22,0.06)' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-lg font-medium" style={{ background: statusConfig[selectedReg.status].bg, color: statusConfig[selectedReg.status].color, borderRadius: 2, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  {selectedReg.first_name[0]}{selectedReg.last_name[0]}
                </div>
                <div>
                  <h2 className="text-xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>{selectedReg.first_name} {selectedReg.last_name}</h2>
                  <p className="text-sm" style={{ color: '#A07D2E' }}>{selectedReg.email}</p>
                </div>
              </div>
              <button onClick={() => setSelectedReg(null)} className="w-10 h-10 text-xl" style={{ color: 'rgba(31,27,22,0.35)', border: 'none', background: 'none', cursor: 'pointer' }}>&times;</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'STATUS', value: statusConfig[selectedReg.status].label, bg: statusConfig[selectedReg.status].bg, color: statusConfig[selectedReg.status].color },
                  { label: 'PRIORITY', value: selectedReg.priority.toUpperCase(), bg: priorityConfig[selectedReg.priority].bg, color: priorityConfig[selectedReg.priority].color },
                  { label: 'EXPERIENCE', value: selectedReg.experience_level || 'Not specified' },
                  { label: 'DATE', value: new Date(selectedReg.created_at).toLocaleDateString() },
                ].map(item => (
                  <div key={item.label} className="p-4" style={{ backgroundColor: '#FBF9F5', borderRadius: 2 }}>
                    <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>{item.label}</label>
                    {item.bg ? <span className="px-2 py-1 text-xs" style={{ fontFamily: "'Cinzel', serif", borderRadius: 2, background: item.bg, color: item.color }}>{item.value}</span>
                    : <span className="text-sm capitalize" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{item.value}</span>}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>EMAIL</label><a href={`mailto:${selectedReg.email}`} style={{ color: '#A07D2E' }}>{selectedReg.email}</a></div>
                <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>PHONE</label><p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{selectedReg.phone || '—'}</p></div>
              </div>
              {selectedReg.motivation && <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>MOTIVATION</label><div className="p-4" style={{ backgroundColor: '#FBF9F5', borderRadius: 2 }}><p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{selectedReg.motivation}</p></div></div>}
              {selectedReg.admin_notes && <div><label className="text-xs block mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.3)' }}>ADMIN NOTES</label><div className="p-4" style={{ backgroundColor: 'rgba(139,126,110,0.05)', border: '1px solid rgba(139,126,110,0.15)', borderRadius: 2 }}><p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{selectedReg.admin_notes}</p></div></div>}
              <div className="flex flex-wrap gap-3 pt-4" style={{ borderTop: '1px solid rgba(31,27,22,0.06)' }}>
                <a href={`mailto:${selectedReg.email}`} style={{ padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>Send Email</a>
                {selectedReg.status === 'pending' && (
                  <>
                    <button onClick={() => handleUpdateStatus(selectedReg.id, 'approved')} className="px-4 py-2.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(107,123,94,0.1)', color: '#6B7B5E', borderRadius: 2, border: 'none', cursor: 'pointer' }}>Approve</button>
                    <button onClick={() => handleUpdateStatus(selectedReg.id, 'waitlisted')} className="px-4 py-2.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(155,168,139,0.1)', color: '#7D8E6E', borderRadius: 2, border: 'none', cursor: 'pointer' }}>Waitlist</button>
                    <button onClick={() => handleUpdateStatus(selectedReg.id, 'rejected')} className="px-4 py-2.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(186,138,120,0.1)', color: '#BA8A78', borderRadius: 2, border: 'none', cursor: 'pointer' }}>Reject</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
