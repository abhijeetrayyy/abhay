'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="absolute inset-0 scale-110" style={{
        backgroundImage: `url('/shaman_birch_forest.png')`,
        transform: `translateY(${scrollY * 0.3}px)`,
        opacity: 0.6,
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/60 via-[#FBF9F5]/30 to-[#FBF9F5]" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(201,160,74,0.08) 0%, transparent 50%)' }} />

      <div className="absolute top-1/4 left-10 w-32 h-32 border border-[#C9A04A]/20 animate-float-slow opacity-30" style={{ borderRadius: '50%' }} />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-[#C9A04A]/10 rotate-45 animate-float-slow-reverse opacity-30" style={{ borderRadius: '50%' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className={`transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#C9A04A]/50" />
            <span className="text-[#A07D2E] text-xs tracking-[0.35em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
              Sacred Gatherings
            </span>
            <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#C9A04A]/50" />
          </div>
        </div>

        <h1
          className={`transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '400ms', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.95, color: '#1F1B16' }}
        >
          Ceremonies
          <span className="block italic font-light" style={{ background: 'linear-gradient(135deg, #E8CD7A, #C9A04A, #A07D2E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>& Events</span>
        </h1>

        <p
          className={`max-w-xl mx-auto leading-relaxed transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '600ms', fontFamily: "'Lora', Georgia, serif", fontSize: '1.05rem', color: 'rgba(31,27,22,0.55)' }}
        >
          Transformative experiences designed for those ready to remember who they truly are.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-14 bg-gradient-to-b from-[#C9A04A]/40 to-transparent" />
      </div>
    </section>
  );
}

function FeaturedEvent() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F1EA' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,160,74,0.05) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(155,168,139,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className={`relative max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid lg:grid-cols-2 gap-0 overflow-hidden" style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', boxShadow: '0 20px 60px rgba(31,27,22,0.06)', borderRadius: 2 }}>
          <div className="relative overflow-hidden">
            <img src="/shaman_birch_forest.png" alt="Ancestral Fire Retreat" className="w-full h-full object-cover min-h-[400px] lg:min-h-full" style={{ minHeight: 400 }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/30 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', borderRadius: 2 }}>
                FEATURED RETREAT
              </span>
            </div>
          </div>

          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.08)', color: '#A07D2E', borderRadius: 2 }}>
                RETREAT
              </span>
              <span className="px-4 py-2 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(139,126,110,0.1)', color: '#8B7E6E', borderRadius: 2 }}>
                ONLY 3 SPOTS LEFT
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>
              Ancestral Fire Retreat
            </h2>

            <div className="flex items-center gap-3 text-sm mb-6" style={{ fontFamily: "'Cinzel', serif", color: '#A07D2E' }}>
              <span>June 14-21, 2026</span>
              <span style={{ color: 'rgba(31,27,22,0.2)' }}>·</span>
              <span>Altai Mountains, Russia</span>
            </div>

            <p className="leading-relaxed mb-8" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1.05rem', color: 'rgba(31,27,22,0.55)' }}>
              A 7-day immersive journey into the heart of Siberian shamanic traditions. Fire ceremonies under the stars, plant medicine work with ancient teachers, drumming and journeying in sacred landscapes, and deep ancestral healing work.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {['Fire Ceremonies', 'Plant Medicine', 'Drumming & Journeying', 'Ancestral Healing'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(31,27,22,0.55)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A04A', display: 'inline-block' }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid rgba(31,27,22,0.06)' }}>
              <div>
                <span className="text-3xl" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>$2,800</span>
                <span className="text-sm ml-2" style={{ color: 'rgba(31,27,22,0.35)' }}>USD</span>
              </div>
              <Link href="#contact" style={{
                padding: '0.875rem 2rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', border: 'none',
                fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease',
              }}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const FILTERS = ['All', 'Retreat', 'Ceremony', 'Workshop', 'Online', 'Training'];

function FilterBar({ active, onChange }: { active: string; onChange: (f: string) => void }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          style={{
            padding: '10px 22px', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
            fontFamily: "'Cinzel', serif", border: 'none', borderRadius: 2, transition: 'all 0.3s ease',
            background: active === f ? 'linear-gradient(135deg, #C9A04A, #A07D2E)' : 'rgba(31,27,22,0.03)',
            color: active === f ? '#FDFCFA' : 'rgba(31,27,22,0.45)',
            borderBottom: active === f ? 'none' : '1px solid rgba(31,27,22,0.06)',
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

const EVENTS = [
  { title: 'Opening the Ancestral Channel', date: 'May 31, 2026', location: 'Online · Live via Zoom', desc: 'A 3-hour group ceremony to connect with your lineage and release inherited patterns.', type: 'Ceremony', spots: 8, price: '$150', image: '/yurt_fire_healing.png' },
  { title: 'Soul Retrieval Intensive', date: 'July 5, 2026', location: 'Amsterdam, Netherlands', desc: 'A full-day workshop exploring the art of soul retrieval and fragmentation recovery.', type: 'Workshop', spots: 12, price: '$400', image: '/healing-global-harmony.jpg' },
  { title: 'Plant Medicine Integration Circle', date: 'June 15, 2026', location: 'Online · Live via Zoom', desc: 'Monthly integration circle for those who have worked with plant medicines.', type: 'Ceremony', spots: 20, price: '$75', image: '/shaman_fire.png' },
  { title: 'Shamanic Training Level 1', date: 'August 1-7, 2026', location: 'Sintra, Portugal', desc: 'The foundational training for those called to walk the shamanic path.', type: 'Training', spots: 8, price: '$1,800', image: '/drum_gold_waves.png' },
  { title: 'Ancestral Healing Circle', date: 'June 22, 2026', location: 'Online · Live via Zoom', desc: 'Monthly group healing session focused on lineage patterns and ancestral wounds.', type: 'Ceremony', spots: 15, price: '$100', image: '/sampo_energy.png' },
  { title: 'Divination & Oracle Workshop', date: 'July 20, 2026', location: 'Berlin, Germany', desc: 'Learn the art of reading the unseen through Siberian rune traditions.', type: 'Workshop', spots: 10, price: '$300', image: '/sacred-geometry.png' },
];

const typeConfig: Record<string, { color: string; bg: string }> = {
  Ceremony: { color: '#A07D2E', bg: 'rgba(201,160,74,0.1)' },
  Workshop: { color: '#7D8E6E', bg: 'rgba(155,168,139,0.1)' },
  Training: { color: '#8B7E6E', bg: 'rgba(139,126,110,0.1)' },
  Online: { color: '#6B5D4E', bg: 'rgba(107,93,78,0.1)' },
  Retreat: { color: '#9BA88B', bg: 'rgba(155,168,139,0.1)' },
};

function EventsGrid({ filter }: { filter: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = filter === 'All' ? EVENTS : EVENTS.filter(e => e.type === filter);

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-[#1F1B16]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
          All Events
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((event, i) => (
          <div
            key={i}
            className={`group overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${i * 100}ms`, backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2, boxShadow: '0 4px 24px rgba(31,27,22,0.04)' }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/40 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: typeConfig[event.type].bg, color: typeConfig[event.type].color }}>
                  {event.type.toUpperCase()}
                </span>
              </div>

              {event.spots <= 10 && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(139,126,110,0.8)', color: '#FDFCFA' }}>
                    {event.spots} SPOTS
                  </span>
                </div>
              )}

              <div className="absolute bottom-4 right-4">
                <span className="text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#FDFCFA', fontWeight: 400 }}>
                  {event.price}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl mb-3 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, color: '#1F1B16' }}>
                {event.title}
              </h3>

              <div className="flex items-center gap-2 text-xs mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#A07D2E' }}>
                <span>{event.date}</span>
                <span style={{ color: 'rgba(31,27,22,0.2)' }}>·</span>
                <span className="truncate">{event.location}</span>
              </div>

              <p className="text-sm mb-6 leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.5)' }}>
                {event.desc}
              </p>

              <Link
                href="#contact"
                style={{
                  display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center',
                  padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA',
                  fontFamily: "'Cinzel', serif", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
              >
                Reserve Spot
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const PAST_EVENTS = [
  { title: 'Ancestral Fire Retreat 2025', location: 'Altai Mountains, Russia', date: 'August 2025', image: '/shaman_birch_forest.png' },
  { title: 'International Shamanic Conference', location: 'Prague, Czech Republic', date: 'October 2025', image: '/visited-countries-img.png' },
  { title: 'Plant Medicine Integration Circle', location: 'Online', date: 'Monthly 2025', image: '/shaman_fire.png' },
  { title: 'Shamanic Training Level 1', location: 'Sintra, Portugal', date: 'July 2025', image: '/drum_gold_waves.png' },
];

function PastEvents() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="absolute inset-0 opacity-15" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201,160,74,0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.08)', color: '#A07D2E' }}>
            Archive
          </span>
          <h2 className="text-[#1F1B16]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Past Ceremonies
          </h2>
          <p className="mt-3 max-w-lg mx-auto" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.5)' }}>
            A record of transformative work across the globe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAST_EVENTS.map((event, i) => (
            <div
              key={i}
              className={`group overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms`, backgroundColor: '#FDFCFA', borderRadius: 2, boxShadow: '0 4px 20px rgba(31,27,22,0.04)', border: '1px solid rgba(31,27,22,0.04)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 transition-colors duration-500" style={{ background: 'transparent' }} />
              </div>
              <div className="p-5">
                <h3 className="text-sm mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, color: '#1F1B16' }}>
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.35)' }}>
                  <span>{event.location}</span>
                  <span>·</span>
                  <span>{event.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden" style={{ backgroundColor: '#F5F1EA' }}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,160,74,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className={`relative max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#C9A04A]/40" />
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A04A" strokeWidth="1.5" style={{ opacity: 0.5 }}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
          </svg>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#C9A04A]/40" />
        </div>

        <h2 className="mb-6 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#1F1B16' }}>
          &ldquo;Not sure which ceremony is right for you?&rdquo;
        </h2>

        <p className="mb-10 text-lg max-w-xl mx-auto leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.55)' }}>
          Let&apos;s have a conversation. A free 20-minute consultation to understand your path and what might serve you best.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="mailto:contact@earthforpeace.com" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA',
            fontFamily: "'Cinzel', serif", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'all 0.3s ease',
          }}>
            Schedule Consultation
          </a>
          <Link href="/teachings" className="text-sm transition-colors" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>
            Read Teachings →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  const [filter, setFilter] = useState('All');

  return (
    <>
      <Hero />
      <FeaturedEvent />
      <section className="py-16" style={{ backgroundColor: '#FBF9F5' }}>
        <FilterBar active={filter} onChange={setFilter} />
        <EventsGrid filter={filter} />
      </section>
      <PastEvents />
      <CTA />
    </>
  );
}
