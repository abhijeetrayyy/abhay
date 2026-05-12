'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function NewEventPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    short_description: '',
    description: '',
    event_type: 'ceremony',
    category: '',
    start_date: '',
    end_date: '',
    location_name: '',
    location_city: '',
    location_country: '',
    is_online: false,
    max_participants: 20,
    price_amount: 0,
    price_currency: 'USD',
    hero_image: '',
    status: 'draft' as const,
    is_featured: false,
  });

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleChange = (field: string, value: any) => {
    setForm(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'title') updated.slug = generateSlug(value) + '-' + new Date().getFullYear();
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from('events').insert({
      ...form,
      price_amount: form.price_amount || null,
      max_participants: form.max_participants || 20,
    });
    setSaving(false);
    if (error) { alert('Error: ' + error.message); return; }
    router.push('/admin/events');
    router.refresh();
  };

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: '#FBF9F5', minHeight: '100vh' }}>
      <Link href="/admin/events" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.7rem', color: 'rgba(31,27,22,0.4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
        <span>←</span> Back to Events
      </Link>

      <h1 className="text-3xl lg:text-4xl mb-8" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>
        New Event
      </h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 800 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="md:col-span-2">
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>TITLE *</label>
            <input value={form.title} onChange={e => handleChange('title', e.target.value)} required
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div className="md:col-span-2">
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>SLUG</label>
            <input value={form.slug} onChange={e => handleChange('slug', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: 'rgba(31,27,22,0.5)', outline: 'none' }} />
          </div>
          <div className="md:col-span-2">
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>SHORT DESCRIPTION</label>
            <textarea value={form.short_description} onChange={e => handleChange('short_description', e.target.value)} rows={2}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', resize: 'vertical' }} />
          </div>
          <div className="md:col-span-2">
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>DESCRIPTION</label>
            <textarea value={form.description} onChange={e => handleChange('description', e.target.value)} rows={5}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', resize: 'vertical' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>TYPE *</label>
            <select value={form.event_type} onChange={e => handleChange('event_type', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }}>
              <option value="ceremony">Ceremony</option>
              <option value="retreat">Retreat</option>
              <option value="workshop">Workshop</option>
              <option value="training">Training</option>
              <option value="online">Online</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>STATUS</label>
            <select value={form.status} onChange={e => handleChange('status', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>START DATE *</label>
            <input type="date" value={form.start_date} onChange={e => handleChange('start_date', e.target.value)} required
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>END DATE</label>
            <input type="date" value={form.end_date} onChange={e => handleChange('end_date', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>LOCATION NAME</label>
            <input value={form.location_name} onChange={e => handleChange('location_name', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>CITY</label>
            <input value={form.location_city} onChange={e => handleChange('location_city', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>COUNTRY</label>
            <input value={form.location_country} onChange={e => handleChange('location_country', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>MAX PARTICIPANTS</label>
            <input type="number" value={form.max_participants} onChange={e => handleChange('max_participants', parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>PRICE ($)</label>
            <input type="number" value={form.price_amount} onChange={e => handleChange('price_amount', parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>HERO IMAGE URL</label>
            <input value={form.hero_image} onChange={e => handleChange('hero_image', e.target.value)}
              className="w-full px-4 py-3 text-sm" style={{ background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.68rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)', marginBottom: 6, letterSpacing: '0.08em' }}>ONLINE EVENT?</label>
            <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={form.is_online} onChange={() => handleChange('is_online', true)} style={{ accentColor: '#C9A04A' }} />
                <span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" checked={!form.is_online} onChange={() => handleChange('is_online', false)} style={{ accentColor: '#C9A04A' }} />
                <span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>No</span>
              </label>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 4 }}>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.is_featured} onChange={e => handleChange('is_featured', e.target.checked)} style={{ accentColor: '#C9A04A' }} />
              <span className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>Featured event</span>
            </label>
          </div>
        </div>

        <div className="flex gap-4" style={{ paddingTop: 24, borderTop: '1px solid rgba(31,27,22,0.06)' }}>
          <button type="submit" disabled={saving || !form.title || !form.start_date}
            style={{ padding: '12px 32px', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', opacity: saving ? 0.5 : 1 }}>
            {saving ? 'Saving...' : 'Create Event'}
          </button>
          <Link href="/admin/events" style={{ padding: '12px 24px', fontFamily: "'Cinzel', serif", fontSize: '0.7rem', color: 'rgba(31,27,22,0.4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
