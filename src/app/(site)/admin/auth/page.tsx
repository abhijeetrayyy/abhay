'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function AdminAuth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (mode === 'signin') {
      const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) { setError(authError.message); }
      else { window.location.href = '/admin'; }
    } else {
      const { error: authError } = await supabase.auth.signUp({ email, password });
      if (authError) { setError(authError.message); }
      else { setError('Check your email for confirmation'); }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#FBF9F5' }}>
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ backgroundColor: '#F5F1EA' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #1F1B16 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 flex flex-col justify-center p-16">
          <div className="mb-12">
            <h1 className="text-6xl mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 200, color: '#1F1B16' }}>
              Abhay Oyun
            </h1>
            <p className="text-lg max-w-md" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.4)' }}>
              Between Worlds. Siberian Shaman working at the edge of the known.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: '◈', title: 'Manage Events', desc: 'Create and publish ceremonies' },
              { icon: '◉', title: 'Track Leads', desc: 'Manage inquiries and applications' },
              { icon: '◌', title: 'Newsletter', desc: 'Engage with your community' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-xl" style={{ backgroundColor: 'rgba(201,160,74,0.08)', color: '#C9A04A', borderRadius: 2 }}>
                  <span>{item.icon}</span>
                </div>
                <div>
                  <p style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>{item.title}</p>
                  <p className="text-sm" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t" style={{ background: 'linear-gradient(to top, #F5F1EA, transparent)' }} />
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-10">
            <h1 className="text-3xl mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16' }}>
              Abhay Oyun
            </h1>
            <p className="text-xs" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.2em', color: 'rgba(31,27,22,0.3)' }}>
              ADMIN PORTAL
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, color: '#1F1B16' }}>
              {mode === 'signin' ? 'Welcome back' : 'Create account'}
            </h2>
            <p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.45)' }}>
              {mode === 'signin' ? 'Sign in to access the admin panel' : 'Sign up to get started'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs mb-3" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.35)' }}>
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 text-base transition-all"
                style={{
                  fontFamily: "'Lora', Georgia, serif", borderRadius: 2,
                  backgroundColor: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)',
                  color: '#1F1B16', outline: 'none',
                }}
                placeholder="admin@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs mb-3" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.1em', color: 'rgba(31,27,22,0.35)' }}>
                PASSWORD
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 text-base transition-all"
                style={{
                  fontFamily: "'Lora', Georgia, serif", borderRadius: 2,
                  backgroundColor: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)',
                  color: '#1F1B16', outline: 'none',
                }}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>

            {error && (
              <div className="p-4" style={{ backgroundColor: 'rgba(139,126,110,0.08)', border: '1px solid rgba(139,126,110,0.15)', borderRadius: 2 }}>
                <p className="text-sm" style={{ fontFamily: "'Lora', Georgia, serif", color: '#8B7E6E' }}>{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%', padding: '1rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA',
                fontFamily: "'Cinzel', serif", fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s ease',
                opacity: loading ? 0.5 : 1,
              }}
            >
              {loading ? 'Processing...' : (mode === 'signin' ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              className="text-sm transition-colors"
              style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.4)' }}
            >
              {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em', color: 'rgba(31,27,22,0.3)' }}>
              &larr; Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
