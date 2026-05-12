'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-8 lg:p-12 max-w-4xl">
      <div className="mb-10">
        <h1 className="text-cream text-4xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
          Settings
        </h1>
        <p className="text-cream/40" style={{ fontFamily: 'var(--font-body)' }}>
          Configure your admin panel and integrations.
        </p>
      </div>

      {/* Profile */}
      <section className="mb-10">
        <h2 className="text-cream/50 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-label)' }}>
          Profile
        </h2>
        <div className="bg-charcoal-light border border-cream/10 rounded-sm p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-cream/40 text-xs mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                DISPLAY NAME
              </label>
              <input
                type="text"
                defaultValue="Abhay Oyun"
                className="w-full px-4 py-3 bg-charcoal border border-cream/10 rounded-sm text-cream focus:outline-none focus:border-sage/50"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>
            <div>
              <label className="block text-cream/40 text-xs mb-2" style={{ fontFamily: 'var(--font-label)' }}>
                EMAIL
              </label>
              <input
                type="email"
                defaultValue="admin@abhayoyun.com"
                className="w-full px-4 py-3 bg-charcoal border border-cream/10 rounded-sm text-cream focus:outline-none focus:border-sage/50"
                style={{ fontFamily: 'var(--font-body)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notifications */}
      <section className="mb-10">
        <h2 className="text-cream/50 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-label)' }}>
          Notifications
        </h2>
        <div className="bg-charcoal-light border border-cream/10 rounded-sm divide-y divide-cream/10">
          {[
            { label: 'New lead submission', desc: 'Get notified when someone submits a begin journey form' },
            { label: 'New event registration', desc: 'Get notified when someone applies for an event' },
            { label: 'Weekly summary', desc: 'Receive a weekly email with activity overview' },
          ].map((item, i) => (
            <div key={i} className="p-4 flex items-center justify-between">
              <div>
                <p className="text-cream" style={{ fontFamily: 'var(--font-body)' }}>{item.label}</p>
                <p className="text-cream/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>{item.desc}</p>
              </div>
              <button className="relative w-12 h-6 bg-sage/20 rounded-full transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-sage rounded-full transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="mb-10">
        <h2 className="text-cream/50 text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-label)' }}>
          Integrations
        </h2>
        <div className="bg-charcoal-light border border-cream/10 rounded-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-sm flex items-center justify-center">
                <span className="text-green-400">◉</span>
              </div>
              <div>
                <p className="text-cream" style={{ fontFamily: 'var(--font-body)' }}>Supabase</p>
                <p className="text-cream/40 text-sm" style={{ fontFamily: 'var(--font-body)' }}>Database & Authentication</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-sm" style={{ fontFamily: 'var(--font-label)' }}>
              CONNECTED
            </span>
          </div>
          <div className="pt-4 border-t border-cream/10">
            <p className="text-cream/30 text-xs" style={{ fontFamily: 'var(--font-label)' }}>
              Configure Supabase settings in your environment variables.
            </p>
          </div>
        </div>
      </section>

      {/* Save Button */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn-sage text-xs px-8 py-3 disabled:opacity-50 flex items-center gap-2"
        >
          {saving ? (
            <>
              <div className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
              Saving...
            </>
          ) : saved ? (
            '✓ Saved'
          ) : (
            'Save Changes'
          )}
        </button>
        {saved && <span className="text-sage text-sm" style={{ fontFamily: 'var(--font-body)' }}>Changes saved successfully</span>}
      </div>
    </div>
  );
}
