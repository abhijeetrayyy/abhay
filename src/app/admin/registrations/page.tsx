'use client';

import { useEffect, useState } from 'react';
import { EventRegistration } from '@/lib/supabase';

const statusConfig: Record<string, { color: string; bg: string; label: string }> = {
  pending: { color: 'text-yellow-400', bg: 'bg-yellow-500/20', label: 'Pending Review' },
  approved: { color: 'text-green-400', bg: 'bg-green-500/20', label: 'Approved' },
  rejected: { color: 'text-red-400', bg: 'bg-red-500/20', label: 'Rejected' },
  waitlisted: { color: 'text-blue-400', bg: 'bg-blue-500/20', label: 'Waitlisted' },
  cancelled: { color: 'text-cream/50', bg: 'bg-cream/10', label: 'Cancelled' },
  completed: { color: 'text-sage', bg: 'bg-sage/20', label: 'Completed' },
};

const priorityConfig: Record<string, { color: string; bg: string }> = {
  low: { color: 'text-cream/50', bg: 'bg-cream/10' },
  medium: { color: 'text-sage', bg: 'bg-sage/20' },
  high: { color: 'text-terracotta', bg: 'bg-terracotta/20' },
};

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState<EventRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedReg, setSelectedReg] = useState<EventRegistration | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setRegistrations([
        { id: '1', event_id: '1', first_name: 'Elena', last_name: 'Kowalski', email: 'elena.kowalski@email.com', phone: '+48 5 12345678', motivation: 'I have been on a healing journey for several years now. After my father passed away last year, I feel called to reconnect with our family lineage. I believe this retreat will help me release patterns that have been carried through generations.\n\nI have experience with meditation and breathwork, and have read extensively about shamanic traditions. I understand this is serious work and am prepared to face whatever arises with courage and respect.', experience_level: 'intermediate', status: 'pending', priority: 'high', admin_notes: 'Strong application, extensive personal work. Schedule interview.', created_at: '2026-05-10T10:00:00Z' },
        { id: '2', event_id: '1', first_name: 'David', last_name: 'Mueller', email: 'david.m@email.com', phone: null, motivation: 'Seeking profound transformation. I have been working with a therapist for two years on childhood trauma and feel ready for deeper, more direct healing work.', experience_level: 'beginner', status: 'pending', priority: 'medium', admin_notes: null, created_at: '2026-05-08T14:00:00Z' },
        { id: '3', event_id: '3', first_name: 'Sophie', last_name: 'Laurent', email: 'sophie.l@email.com', phone: '+33 6 12345678', motivation: 'I completed Level 1 training last year and have been practicing daily journeying and working with clients informally. I feel called to deepen my practice and potentially become a practitioner myself. This training aligns with my life purpose.', experience_level: 'advanced', status: 'approved', priority: 'high', admin_notes: 'Excellent candidate. Approved for practitioner track.', created_at: '2026-04-20T09:00:00Z' },
        { id: '4', event_id: '2', first_name: 'Marcus', last_name: 'Weber', email: 'marcus.w@email.com', phone: '+49 1 23456789', motivation: 'First ceremony experience. I am experiencing a major life transition (career change, divorce) and feel drawn to explore spiritual work as a way to find clarity and direction.', experience_level: 'beginner', status: 'pending', priority: 'low', admin_notes: null, created_at: '2026-05-12T16:00:00Z' },
        { id: '5', event_id: '1', first_name: 'Ingrid', last_name: 'Nilsen', email: 'ingrid.n@email.com', phone: null, motivation: 'Healing family lineage issues that have affected my relationships and career for decades. Ready to do the deep work.', experience_level: 'intermediate', status: 'waitlisted', priority: 'medium', admin_notes: 'Waitlist - spot may open. Strong motivation but retreat full.', created_at: '2026-04-25T11:00:00Z' },
        { id: '6', event_id: '4', first_name: 'Klaus', last_name: 'Fischer', email: 'klaus.f@email.com', phone: '+41 7 12345678', motivation: 'Experienced in rune work from Norse tradition, seeking to learn Siberian approaches for comparison and deepening.', experience_level: 'advanced', status: 'approved', priority: 'medium', admin_notes: null, created_at: '2026-05-05T08:00:00Z' },
      ]);
      setLoading(false);
    }, 600);
  }, []);

  const filteredRegistrations = filter === 'all'
    ? registrations
    : registrations.filter(r => r.status === filter);

  const updateStatus = (id: string, status: EventRegistration['status']) => {
    setRegistrations(prev => prev.map(r => r.id === id ? { ...r, status } : r));
    if (selectedReg?.id === id) {
      setSelectedReg(prev => prev ? { ...prev, status } : null);
    }
  };

  const getEventName = (eventId: string) => {
    const events: Record<string, string> = {
      '1': 'Ancestral Fire Retreat',
      '2': 'Opening the Ancestral Channel',
      '3': 'Shamanic Training Level 1',
      '4': 'Divination Workshop',
    };
    return events[eventId] || 'Unknown Event';
  };

  const pendingCount = registrations.filter(r => r.status === 'pending').length;

  return (
    <div className="p-8 lg:p-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {pendingCount > 0 && (
              <>
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-sm" style={{ fontFamily: 'var(--font-label)' }}>
                  {pendingCount} PENDING
                </span>
              </>
            )}
            <span className="text-cream/40 text-xs" style={{ fontFamily: 'var(--font-label)' }}>EVENT APPLICATIONS</span>
          </div>
          <h1 className="text-cream text-4xl lg:text-5xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
            Registrations
          </h1>
        </div>

        <div className="mt-6 lg:mt-0">
          <p className="text-cream/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
            {registrations.length} total applications
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['all', 'pending', 'approved', 'rejected', 'waitlisted'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 text-xs rounded-sm transition-all ${
              filter === status
                ? 'bg-sage text-cream'
                : 'bg-charcoal-light border border-cream/10 text-cream/50 hover:text-cream hover:border-cream/20'
            }`}
            style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.08em' }}
          >
            {status.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-charcoal-light border border-cream/10 rounded-sm overflow-hidden">
        {loading ? (
          <div className="p-12 flex flex-col items-center justify-center">
            <div className="w-8 h-8 border-2 border-sage/30 border-t-sage rounded-full animate-spin mb-4" />
            <p className="text-cream/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>Loading registrations...</p>
          </div>
        ) : filteredRegistrations.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center">
            <span className="text-4xl text-cream/20 mb-4">○</span>
            <p className="text-cream/40" style={{ fontFamily: 'var(--font-body)' }}>No registrations found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-cream/10">
                  <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>APPLICANT</th>
                  <th className="text-left px-6 py-4 text-cream/30 text-xs hidden lg:table-cell" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>EVENT</th>
                  <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>EXPERIENCE</th>
                  <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>PRIORITY</th>
                  <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>STATUS</th>
                  <th className="text-left px-6 py-4 text-cream/30 text-xs hidden md:table-cell" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>DATE</th>
                  <th className="text-left px-6 py-4 text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream/5">
                {filteredRegistrations.map((reg, index) => (
                  <tr
                    key={reg.id}
                    className="hover:bg-cream/5 transition-colors cursor-pointer group"
                    onClick={() => setSelectedReg(reg)}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-medium ${
                          statusConfig[reg.status].bg
                        } ${statusConfig[reg.status].color}`} style={{ fontFamily: 'var(--font-display)', fontSize: '1rem' }}>
                          {reg.first_name[0]}{reg.last_name[0]}
                        </div>
                        <div>
                          <p className="text-cream font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                            {reg.first_name} {reg.last_name}
                          </p>
                          <p className="text-cream/40 text-sm">{reg.email}</p>
                          {reg.phone && <p className="text-cream/30 text-xs">{reg.phone}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 hidden lg:table-cell">
                      <p className="text-sage text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                        {getEventName(reg.event_id)}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-cream/10 text-cream/50 text-xs rounded-sm capitalize" style={{ fontFamily: 'var(--font-label)' }}>
                        {reg.experience_level || 'Not specified'}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 text-xs rounded-sm ${priorityConfig[reg.priority].bg} ${priorityConfig[reg.priority].color}`} style={{ fontFamily: 'var(--font-label)' }}>
                        {reg.priority.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <select
                        value={reg.status}
                        onChange={(e) => {
                          e.stopPropagation();
                          updateStatus(reg.id, e.target.value as EventRegistration['status']);
                        }}
                        onClick={(e) => e.stopPropagation()}
                        className={`px-3 py-1.5 text-xs rounded-sm border-0 cursor-pointer ${statusConfig[reg.status].bg} ${statusConfig[reg.status].color}`}
                        style={{ fontFamily: 'var(--font-label)' }}
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                        <option value="waitlisted">Waitlisted</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-6 py-5 hidden md:table-cell">
                      <p className="text-cream/50 text-sm" style={{ fontFamily: 'var(--font-label)' }}>
                        {new Date(reg.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedReg(reg);
                          }}
                          className="px-3 py-1.5 text-xs bg-cream/10 text-cream/70 hover:bg-cream/20 rounded-sm"
                          style={{ fontFamily: 'var(--font-label)' }}
                        >
                          View
                        </button>
                        <a
                          href={`mailto:${reg.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="px-3 py-1.5 text-xs bg-sage/20 text-sage hover:bg-sage/30 rounded-sm"
                          style={{ fontFamily: 'var(--font-label)' }}
                        >
                          Email
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedReg && (
        <div
          className="fixed inset-0 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 lg:p-8"
          onClick={() => setSelectedReg(null)}
        >
          <div
            className="bg-charcoal-light border border-cream/10 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-charcoal-light border-b border-cream/10 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-sm flex items-center justify-center text-lg font-medium ${statusConfig[selectedReg.status].bg} ${statusConfig[selectedReg.status].color}`} style={{ fontFamily: 'var(--font-display)' }}>
                  {selectedReg.first_name[0]}{selectedReg.last_name[0]}
                </div>
                <div>
                  <h2 className="text-cream text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {selectedReg.first_name} {selectedReg.last_name}
                  </h2>
                  <p className="text-sage text-sm">{selectedReg.email}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedReg(null)}
                className="w-10 h-10 flex items-center justify-center text-cream/50 hover:text-cream hover:bg-cream/10 rounded-sm transition-colors text-xl"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-charcoal rounded-sm">
                  <label className="text-cream/30 text-xs block mb-1" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>STATUS</label>
                  <span className={`px-2 py-1 text-xs rounded-sm ${statusConfig[selectedReg.status].bg} ${statusConfig[selectedReg.status].color}`} style={{ fontFamily: 'var(--font-label)' }}>
                    {statusConfig[selectedReg.status].label}
                  </span>
                </div>
                <div className="p-4 bg-charcoal rounded-sm">
                  <label className="text-cream/30 text-xs block mb-1" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>PRIORITY</label>
                  <span className={`px-2 py-1 text-xs rounded-sm ${priorityConfig[selectedReg.priority].bg} ${priorityConfig[selectedReg.priority].color}`} style={{ fontFamily: 'var(--font-label)' }}>
                    {selectedReg.priority.toUpperCase()}
                  </span>
                </div>
                <div className="p-4 bg-charcoal rounded-sm">
                  <label className="text-cream/30 text-xs block mb-1" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>EXPERIENCE</label>
                  <span className="text-cream text-sm capitalize" style={{ fontFamily: 'var(--font-body)' }}>
                    {selectedReg.experience_level || 'Not specified'}
                  </span>
                </div>
                <div className="p-4 bg-charcoal rounded-sm">
                  <label className="text-cream/30 text-xs block mb-1" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>DATE</label>
                  <span className="text-cream text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    {new Date(selectedReg.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Event */}
              <div>
                <label className="text-cream/30 text-xs block mb-2" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>EVENT</label>
                <p className="text-sage text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                  {getEventName(selectedReg.event_id)}
                </p>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-cream/30 text-xs block mb-2" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>EMAIL</label>
                  <a href={`mailto:${selectedReg.email}`} className="text-sage hover:text-sage-light transition-colors">
                    {selectedReg.email}
                  </a>
                </div>
                <div>
                  <label className="text-cream/30 text-xs block mb-2" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>PHONE</label>
                  <p className="text-cream">{selectedReg.phone || '—'}</p>
                </div>
              </div>

              {/* Motivation */}
              {selectedReg.motivation && (
                <div>
                  <label className="text-cream/30 text-xs block mb-2" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>MOTIVATION & BACKGROUND</label>
                  <div className="p-4 bg-charcoal rounded-sm">
                    <p className="text-cream/90 leading-relaxed whitespace-pre-wrap" style={{ fontFamily: 'var(--font-body)' }}>
                      {selectedReg.motivation}
                    </p>
                  </div>
                </div>
              )}

              {/* Admin Notes */}
              {selectedReg.admin_notes && (
                <div>
                  <label className="text-cream/30 text-xs block mb-2" style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.1em' }}>ADMIN NOTES</label>
                  <div className="p-4 bg-terracotta/10 border border-terracotta/20 rounded-sm">
                    <p className="text-cream/90 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                      {selectedReg.admin_notes}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-cream/10">
                <a href={`mailto:${selectedReg.email}`} className="btn-sage text-xs">
                  Send Email
                </a>
                {selectedReg.status === 'pending' && (
                  <>
                    <button
                      onClick={() => updateStatus(selectedReg.id, 'approved')}
                      className="px-4 py-2.5 text-xs bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-sm transition-colors"
                      style={{ fontFamily: 'var(--font-label)' }}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(selectedReg.id, 'waitlisted')}
                      className="px-4 py-2.5 text-xs bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-sm transition-colors"
                      style={{ fontFamily: 'var(--font-label)' }}
                    >
                      Waitlist
                    </button>
                    <button
                      onClick={() => updateStatus(selectedReg.id, 'rejected')}
                      className="px-4 py-2.5 text-xs bg-red-500/20 text-red-400 hover:bg-red-500/30 rounded-sm transition-colors"
                      style={{ fontFamily: 'var(--font-label)' }}
                    >
                      Reject
                    </button>
                  </>
                )}
                <button className="px-4 py-2.5 text-xs bg-cream/10 text-cream/70 hover:bg-cream/20 rounded-sm transition-colors" style={{ fontFamily: 'var(--font-label)' }}>
                  Add Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
