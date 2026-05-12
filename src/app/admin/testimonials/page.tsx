'use client';

import { useEffect, useState } from 'react';
import { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '@/lib/data';
import type { Testimonial } from '@/lib/supabase';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Testimonial> | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getAllTestimonials().then(data => { setTestimonials(data); setLoading(false); });
  }, []);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    if (editing.id) {
      const updated = await updateTestimonial(editing.id, editing);
      if (updated) setTestimonials(prev => prev.map(t => t.id === editing.id ? updated : t));
    } else {
      const created = await createTestimonial(editing);
      if (created) setTestimonials(prev => [...prev, created]);
    }
    setSaving(false);
    setEditing(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this testimonial?')) return;
    await deleteTestimonial(id);
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const handleToggleFeatured = async (t: Testimonial) => {
    const updated = await updateTestimonial(t.id, { is_featured: !t.is_featured });
    if (updated) setTestimonials(prev => prev.map(x => x.id === t.id ? updated : x));
  };

  const handleToggleActive = async (t: Testimonial) => {
    const updated = await updateTestimonial(t.id, { is_active: !t.is_active });
    if (updated) setTestimonials(prev => prev.map(x => x.id === t.id ? updated : x));
  };

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C9A04A' }} />
            <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>TESTIMONIAL MANAGEMENT</span>
          </div>
          <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>Testimonials</h1>
        </div>
        <div className="mt-6 lg:mt-0">
          <button onClick={() => setEditing({ client_name: '', content: '', is_active: true, is_featured: false, display_order: testimonials.length + 1 })}
            style={{ padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer' }}>
            + Add Testimonial
          </button>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(31,27,22,0.9)', backdropFilter: 'blur(4px)' }}
          onClick={() => setEditing(null)}>
          <div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" style={{ backgroundColor: '#FDFCFA', borderRadius: 2 }}
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>
              {editing.id ? 'Edit Testimonial' : 'New Testimonial'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>CLIENT NAME *</label>
                <input value={editing.client_name || ''} onChange={e => setEditing({ ...editing, client_name: e.target.value })}
                  className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
              </div>
              <div>
                <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>LOCATION</label>
                <input value={editing.client_location || ''} onChange={e => setEditing({ ...editing, client_location: e.target.value })}
                  className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
              </div>
              <div>
                <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>CONTENT *</label>
                <textarea value={editing.content || ''} onChange={e => setEditing({ ...editing, content: e.target.value })} rows={4}
                  className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', resize: 'vertical' }} />
              </div>
              <div>
                <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>SHORT QUOTE</label>
                <input value={editing.short_quote || ''} onChange={e => setEditing({ ...editing, short_quote: e.target.value })}
                  className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
              </div>
              <div>
                <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>SERVICE TYPE</label>
                <input value={editing.service_type || ''} onChange={e => setEditing({ ...editing, service_type: e.target.value })}
                  className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>DISPLAY ORDER</label>
                  <input type="number" value={editing.display_order || 0} onChange={e => setEditing({ ...editing, display_order: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
                </div>
                <div>
                  <label className="text-xs block mb-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>RATING (1-5)</label>
                  <input type="number" min={1} max={5} value={editing.rating || 5} onChange={e => setEditing({ ...editing, rating: parseInt(e.target.value) || 5 })}
                    className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
                </div>
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={editing.is_featured || false} onChange={e => setEditing({ ...editing, is_featured: e.target.checked })}
                    style={{ accentColor: '#C9A04A' }} />
                  <span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>Featured</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={editing.is_active ?? true} onChange={e => setEditing({ ...editing, is_active: e.target.checked })}
                    style={{ accentColor: '#C9A04A' }} />
                  <span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>Active</span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 mt-8 pt-6" style={{ borderTop: '1px solid rgba(31,27,22,0.06)' }}>
              <button onClick={handleSave} disabled={saving || !editing.client_name || !editing.content}
                style={{ padding: '0.75rem 2rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', opacity: saving || !editing.client_name || !editing.content ? 0.5 : 1 }}>
                {saving ? 'Saving...' : 'Save'}
              </button>
              <button onClick={() => setEditing(null)} className="px-4 py-2 text-sm" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', border: 'none', background: 'none', cursor: 'pointer' }}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-hidden" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
        {loading ? (
          <div className="p-12 text-center"><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>Loading testimonials...</p></div>
        ) : testimonials.length === 0 ? (
          <div className="p-12 text-center"><p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.35)' }}>No testimonials yet</p></div>
        ) : (
          <div className="divide-y" style={{ borderColor: 'rgba(31,27,22,0.04)' }}>
            {testimonials.map((t) => (
              <div key={t.id} className="p-6 hover:bg-opacity-50 transition-colors" style={{ backgroundColor: t.is_active ? 'transparent' : 'rgba(186,138,120,0.03)' }}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 500 }}>{t.client_name}</h3>
                      {t.client_location && <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>{t.client_location}</span>}
                      {t.is_featured && <span className="px-2 py-0.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', borderRadius: 2 }}>FEATURED</span>}
                      {!t.is_active && <span className="px-2 py-0.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(186,138,120,0.1)', color: '#BA8A78', borderRadius: 2 }}>HIDDEN</span>}
                    </div>
                    <p className="text-sm italic mb-2 line-clamp-2" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.6)' }}>&ldquo;{t.content}&rdquo;</p>
                    {t.short_quote && <p className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: '#A07D2E' }}>&ldquo;{t.short_quote}&rdquo;</p>}
                    {t.service_type && <p className="text-xs mt-1" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>{t.service_type} · Order: {t.display_order}</p>}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => setEditing(t)} className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.05)', color: 'rgba(31,27,22,0.5)', borderRadius: 2, border: 'none', cursor: 'pointer' }}>Edit</button>
                    <button onClick={() => handleToggleFeatured(t)} className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: t.is_featured ? 'rgba(201,160,74,0.1)' : 'rgba(31,27,22,0.05)', color: t.is_featured ? '#A07D2E' : 'rgba(31,27,22,0.3)', borderRadius: 2, border: 'none', cursor: 'pointer' }}>
                      {t.is_featured ? 'Unfeature' : 'Feature'}
                    </button>
                    <button onClick={() => handleToggleActive(t)} className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: t.is_active ? 'rgba(186,138,120,0.1)' : 'rgba(107,123,94,0.1)', color: t.is_active ? '#BA8A78' : '#6B7B5E', borderRadius: 2, border: 'none', cursor: 'pointer' }}>
                      {t.is_active ? 'Hide' : 'Show'}
                    </button>
                    <button onClick={() => handleDelete(t.id)} className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(186,138,120,0.1)', color: '#BA8A78', borderRadius: 2, border: 'none', cursor: 'pointer' }}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
