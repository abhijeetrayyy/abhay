'use client';

import { useState } from 'react';
import { createContact } from '@/lib/data';
import Link from 'next/link';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      await createContact({ ...form, source: 'contact_form' });
      setSent(true);
    } catch {
      setError('Failed to send. Please try again.');
    }
    setSending(false);
  };

  return (
    <div style={{ background: '#FBF9F5', minHeight: '100vh', paddingTop: 120 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px 80px' }}>
        <Link href="/" style={{ fontFamily: "'Cinzel', serif", fontSize: '0.65rem', color: 'rgba(31,27,22,0.35)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 32 }}>
          <span>←</span> Home
        </Link>

        <div style={{ marginBottom: 40 }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#A07D2E', display: 'block', marginBottom: 12 }}>
            Get in Touch
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#1F1B16', margin: 0, lineHeight: 1.05 }}>
            Contact
            <span style={{ fontStyle: 'italic', color: 'rgba(31,27,22,0.25)' }}> Abhay</span>
          </h1>
          <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: 'rgba(31,27,22,0.5)', maxWidth: 500, marginTop: 14, lineHeight: 1.75 }}>
            Whether you have a question, feel called to begin your journey, or want to know more about ceremonies and trainings — reach out.
          </p>
        </div>

        {sent ? (
          <div style={{ padding: 48, textAlign: 'center', background: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2 }}>
            <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 16, color: '#C9A04A' }}>◉</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: '1.6rem', color: '#1F1B16', margin: '0 0 8px' }}>Message Sent</h2>
            <p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.5)' }}>Thank you for reaching out. Abhay's team will respond within 48 hours.</p>
            <Link href="/" style={{ display: 'inline-block', marginTop: 24, padding: '12px 28px', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2 }}>
              Back to Home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2, padding: 'clamp(24px, 4vw, 48px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)', marginBottom: 6, letterSpacing: '0.1em' }}>NAME *</label>
                <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required
                  style={{ width: '100%', padding: '12px 16px', fontSize: '0.9rem', background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', fontFamily: "'Lora', Georgia, serif" }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)', marginBottom: 6, letterSpacing: '0.1em' }}>EMAIL *</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required
                  style={{ width: '100%', padding: '12px 16px', fontSize: '0.9rem', background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', fontFamily: "'Lora', Georgia, serif" }} />
              </div>
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)', marginBottom: 6, letterSpacing: '0.1em' }}>PHONE</label>
              <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', fontSize: '0.9rem', background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', fontFamily: "'Lora', Georgia, serif" }} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)', marginBottom: 6, letterSpacing: '0.1em' }}>SUBJECT</label>
              <input value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                style={{ width: '100%', padding: '12px 16px', fontSize: '0.9rem', background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', fontFamily: "'Lora', Georgia, serif" }} />
            </div>
            <div style={{ marginBottom: 28 }}>
              <label style={{ display: 'block', fontSize: '0.65rem', fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)', marginBottom: 6, letterSpacing: '0.1em' }}>MESSAGE *</label>
              <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required rows={5}
                style={{ width: '100%', padding: '12px 16px', fontSize: '0.9rem', background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none', resize: 'vertical', fontFamily: "'Lora', Georgia, serif" }} />
            </div>
            {error && <p style={{ fontFamily: "'Lora', Georgia, serif", color: '#BA8A78', marginBottom: 16, fontSize: '0.85rem' }}>{error}</p>}
            <button type="submit" disabled={sending}
              style={{ padding: '14px 36px', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', fontFamily: "'Cinzel', serif", fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: 2, border: 'none', cursor: 'pointer', opacity: sending ? 0.5 : 1 }}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
