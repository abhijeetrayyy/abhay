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
        backgroundImage: `url('/sacred-geometry.png')`,
        transform: `translateY(${scrollY * 0.3}px)`,
        opacity: 0.08,
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBF9F5]" />

      {/* Sacred geometry */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="w-[500px] h-[500px] border border-[#C9A04A]/10 rounded-full animate-spin-slow" />
        <div className="absolute inset-12 border border-[#C9A04A]/8 rounded-full animate-spin-slow-reverse" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className={`transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#C9A04A]/50" />
            <span className="text-[#A07D2E] text-xs tracking-[0.35em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
              Ancient Wisdom
            </span>
            <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#C9A04A]/50" />
          </div>
        </div>

        <h1
          className={`transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '400ms', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 0.95, color: '#1F1B16' }}
        >
          Teachings
          <span className="block italic font-light" style={{ background: 'linear-gradient(135deg, #E8CD7A, #C9A04A, #A07D2E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>& Transmissions</span>
        </h1>

        <p
          className={`max-w-xl mx-auto leading-relaxed transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '600ms', fontFamily: "'Lora', Georgia, serif", fontSize: '1.05rem', color: 'rgba(31,27,22,0.55)' }}
        >
          Insights from between the worlds. Writings, teachings, and wisdom for the modern seeker.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-14 bg-gradient-to-b from-[#C9A04A]/40 to-transparent" />
      </div>
    </section>
  );
}

function FeaturedArticle() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #1F1B16 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }} />

      <div className={`relative max-w-7xl mx-auto px-6 lg:px-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden shadow-2xl" style={{ borderRadius: 2 }}>
                <img src="/shaman_drum.png" alt="What Happens When the Drum Stops" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/20 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#C9A04A]/40" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#C9A04A]/40" />
              <div className="absolute -bottom-6 -left-4 px-5 py-4" style={{ background: 'linear-gradient(135deg, #C9A04A, #A07D2E)' }}>
                <span className="text-2xl font-light block text-[#FDFCFA]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>15</span>
                <span className="text-xs text-[#FDFCFA]/80" style={{ fontFamily: "'Cinzel', serif" }}>MIN READ</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 text-xs tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.08)', color: '#A07D2E' }}>
              Featured Teaching
            </span>

            <h2 className="text-3xl lg:text-4xl mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>
              &ldquo;What Happens When the Drum Stops&rdquo;
            </h2>

            <p className="leading-relaxed mb-6" style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1.05rem', color: 'rgba(31,27,22,0.55)' }}>
              On silence, integration, and the work that happens after ceremony. The most profound transformations often occur in the days and weeks following a sacred ritual, when the mind has quieted and the body begins to remember.
            </p>

            <p className="leading-relaxed mb-8" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.55)' }}>
              Most people are prepared for the ceremony itself. Few are prepared for what comes after — the dreams that shift, the emotions that surface, the memories that return. This is the sacred work of integration.
            </p>

            <div className="flex items-center gap-6">
              <button style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem',
                background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', border: 'none',
                fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}>
                Read Article
              </button>
              <div className="flex items-center gap-2 text-sm" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.3)' }}>
                <span>15 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ARTICLES = [
  { title: 'On Choosing a Shaman', desc: 'How to find the right practitioner for your journey. What questions to ask, what signs to look for.', readTime: '6 min', category: 'Guide', image: '/abhay_img.png' },
  { title: 'The Difference Between Healing and Fixing', desc: 'Why transformation cannot be rushed, and the crucial distinction between quick fixes and deep healing.', readTime: '8 min', category: 'Philosophy', image: '/sampo_gold_shield.png' },
  { title: 'Preparing for Your First Ceremony', desc: 'A practical guide to preparing body, mind, and spirit for your first shamanic ceremony.', readTime: '10 min', category: 'Guide', image: '/yurt_fire_healing.png' },
  { title: 'Ancestral Healing: What to Expect', desc: 'Understanding the ancestral healing process, what it might feel like, and how to integrate the work.', readTime: '12 min', category: 'Teaching', image: '/healing-global-harmony.jpg' },
  { title: 'The Role of the Drum', desc: 'Why the drum is central to shamanic practice, and how its rhythm creates access to altered states.', readTime: '7 min', category: 'Teaching', image: '/shaman_drum.png' },
  { title: 'Integrating Plant Medicine Experiences', desc: 'Practical guidance for the days and weeks after a plant medicine ceremony.', readTime: '9 min', category: 'Guide', image: '/shaman_fire.png' },
];

const categoryConfig: Record<string, { color: string; bg: string }> = {
  Guide: { color: '#A07D2E', bg: 'rgba(201,160,74,0.1)' },
  Philosophy: { color: '#7D8E6E', bg: 'rgba(155,168,139,0.1)' },
  Teaching: { color: '#8B7E6E', bg: 'rgba(139,126,110,0.1)' },
};

function ArticlesGrid() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F1EA' }}>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201,160,74,0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.08)', color: '#A07D2E' }}>
            Written Wisdom
          </span>
          <h2 className="text-[#1F1B16]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Recent Transmissions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, i) => (
            <article
              key={i}
              className={`group overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms`, backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2, boxShadow: '0 4px 24px rgba(31,27,22,0.04)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B16]/40 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: categoryConfig[article.category].bg, color: categoryConfig[article.category].color }}>
                    {article.category.toUpperCase()}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.7)', color: 'rgba(253,252,250,0.8)' }}>
                    {article.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-3 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, color: '#1F1B16' }}>
                  &ldquo;{article.title}&rdquo;
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.5)' }}>
                  {article.desc}
                </p>

                <button className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all" style={{ fontFamily: "'Cinzel', serif", color: '#C9A04A' }}>
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const VIDEOS = [
  { title: 'Introduction to Shamanic Healing', desc: 'A foundational teaching on the principles of shamanic healing and its place in modern wellness.', duration: '45 min', image: '/why-abhay-oyun.png' },
  { title: 'The Ancestral Lineage', desc: 'Exploring how ancestral patterns shape our lives and how to work with them.', duration: '38 min', image: '/healing-global-harmony.jpg' },
  { title: 'Plant Medicine Integration', desc: 'Guidelines for integrating plant medicine experiences into daily life.', duration: '52 min', image: '/shaman_fire.png' },
];

function VideoTeachings() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 text-xs tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.08)', color: '#A07D2E' }}>
            Video Teachings
          </span>
          <h2 className="text-[#1F1B16]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Watch & Learn
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VIDEOS.map((video, i) => (
            <div
              key={i}
              className={`group overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 100}ms`, backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2, boxShadow: '0 4px 24px rgba(31,27,22,0.04)' }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center transition-colors duration-500" style={{ background: 'rgba(31,27,22,0.25) group-hover:bg-opacity-40' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500" style={{ background: 'linear-gradient(135deg, #C9A04A, #A07D2E)' }}>
                    <svg className="w-5 h-5 text-[#FDFCFA] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1.5 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(31,27,22,0.7)', color: 'rgba(253,252,250,0.8)' }}>
                    {video.duration}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg mb-2 transition-colors duration-300" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 500, color: '#1F1B16' }}>
                  {video.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.5)' }}>
                  {video.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden" style={{ backgroundColor: '#F5F1EA' }}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(201,160,74,0.06) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(155,168,139,0.05) 0%, transparent 70%)' }} />
      </div>

      <div className={`relative max-w-2xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <span className="inline-block px-4 py-2 text-xs tracking-[0.25em] uppercase mb-8" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.1)', color: '#A07D2E' }}>
          The Inner Circle
        </span>

        <h2 className="mb-6 italic" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#1F1B16' }}>
          &ldquo;Letters from Between the Worlds.&rdquo;
        </h2>

        <p className="mb-10 text-lg" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.5)' }}>
          Monthly transmissions: ceremony announcements and sacred insights.
          <br />
          No spam. Only what matters.
        </p>

        {submitted ? (
          <div className="p-8" style={{ background: 'rgba(201,160,74,0.08)', border: '1px solid rgba(201,160,74,0.2)', borderRadius: 2 }}>
            <span className="text-4xl block mb-4" style={{ color: '#C9A04A' }}>◉</span>
            <p className="text-lg mb-2" style={{ fontFamily: "'Lora', Georgia, serif", color: '#1F1B16' }}>
              Welcome to the circle.
            </p>
            <p className="text-sm" style={{ color: 'rgba(31,27,22,0.4)' }}>
              Check your inbox for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 text-base transition-all"
              style={{ fontFamily: "'Lora', Georgia, serif", background: 'rgba(31,27,22,0.03)', border: '1px solid rgba(31,27,22,0.08)', borderRadius: 2, color: '#1F1B16', outline: 'none' }}
            />
            <button
              type="submit"
              style={{
                padding: '0.875rem 2rem', background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA', border: 'none',
                fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs uppercase tracking-[0.15em] mt-8" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.2)' }}>
          Join 2,000+ seekers on the path
        </p>
      </div>
    </section>
  );
}

export default function TeachingsPage() {
  return (
    <>
      <Hero />
      <FeaturedArticle />
      <ArticlesGrid />
      <VideoTeachings />
      <Newsletter />
    </>
  );
}
