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
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="absolute inset-0 scale-110" style={{
        backgroundImage: `url('/AO 2.JPG')`,
        transform: `translateY(${scrollY * 0.3}px)`,
        opacity: 0.5,
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBF9F5]/70 via-[#FBF9F5]/40 to-[#FBF9F5]" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201,160,74,0.08) 0%, transparent 50%)' }} />

      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C9A04A]/50" />
            <span className="text-[#A07D2E] text-xs tracking-[0.35em] uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
              Sacred Moments
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C9A04A]/50" />
          </div>
        </div>

        <h1
          className={`transition-all duration-1500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: '400ms', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(3rem, 10vw, 5rem)', color: '#1F1B16' }}
        >
          The Gallery
        </h1>
      </div>
    </section>
  );
}

const CATEGORIES = ['All', 'Ceremony', 'Retreat', 'Travel', 'Portrait', 'Nature'];

const GALLERY_IMAGES = [
  { src: '/sao-gallery-img1.jpg', category: 'Ceremony', title: 'Fire Ceremony' },
  { src: '/sao-gallery-img2.jpg', category: 'Nature', title: 'Sacred Landscape' },
  { src: '/sao-gallery-img3.jpg', category: 'Retreat', title: 'Mountain Retreat' },
  { src: '/sao-gallery-img4.jpg', category: 'Ceremony', title: 'Drum Circle' },
  { src: '/sao-gallery-img5.jpg', category: 'Portrait', title: 'Journey Within' },
  { src: '/sao-gallery-img6.jpg', category: 'Travel', title: 'Altai Mountains' },
  { src: '/sao-gallery-img7.jpg', category: 'Nature', title: 'Sacred Tree' },
  { src: '/sao-gallery-img8.jpg', category: 'Ceremony', title: 'Healing Circle' },
  { src: '/sao-gallery-img9.jpg', category: 'Portrait', title: 'The Shaman' },
  { src: '/abhay_img.png', category: 'Portrait', title: 'Abhay Oyun' },
  { src: '/shaman_birch_forest.png', category: 'Nature', title: 'Birch Forest' },
  { src: '/shaman_fire.png', category: 'Ceremony', title: 'Sacred Fire' },
];

function GalleryGrid() {
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  return (
    <section ref={ref} className="py-20 md:py-32" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '10px 22px', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer',
                fontFamily: "'Cinzel', serif", border: 'none', borderRadius: 2, transition: 'all 0.3s ease',
                background: selectedCategory === cat ? 'linear-gradient(135deg, #C9A04A, #A07D2E)' : 'rgba(31,27,22,0.03)',
                color: selectedCategory === cat ? '#FDFCFA' : 'rgba(31,27,22,0.45)',
                borderBottom: selectedCategory === cat ? 'none' : '1px solid rgba(31,27,22,0.06)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className={`relative overflow-hidden cursor-pointer group break-inside-avoid transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 50}ms`, borderRadius: 2 }}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full transition-all duration-700 ${loadedImages.has(i) ? 'opacity-100' : 'opacity-0'} group-hover:scale-105`}
                onLoad={() => setLoadedImages(prev => new Set([...prev, i]))}
                style={{ borderRadius: 2 }}
              />

              <div className="absolute inset-0 transition-opacity duration-500 flex flex-col justify-end p-4" style={{ background: 'linear-gradient(to top, rgba(31,27,22,0.6) 0%, rgba(31,27,22,0.1) 50%, transparent 100%)', opacity: 0 }}>
                <span className="text-sm" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#FDFCFA', fontWeight: 400 }}>
                  {img.title}
                </span>
                <span className="text-xs" style={{ fontFamily: "'Cinzel', serif", color: '#C9A04A' }}>
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-8"
          style={{ backgroundColor: 'rgba(31,27,22,0.95)', backdropFilter: 'blur(8px)' }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full transition-all"
            style={{ color: 'rgba(253,252,250,0.5)' }}
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto max-h-[80vh] object-contain" style={{ borderRadius: 2 }} />
            <div className="mt-6 text-center">
              <h3 className="text-xl mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#FDFCFA', fontWeight: 400 }}>
                {selectedImage.title}
              </h3>
              <span className="px-4 py-2 text-xs" style={{ fontFamily: "'Cinzel', serif", background: 'rgba(201,160,74,0.15)', color: '#C9A04A', borderRadius: 2 }}>
                {selectedImage.category.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F5F1EA' }}>
      <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201,160,74,0.04) 0%, transparent 50%)' }} />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1F1B16' }}>
          Ready to Begin Your Journey?
        </h2>
        <p className="mb-10" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.55)' }}>
          Experience the transformative power of shamanic healing for yourself.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/events" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem',
            background: 'linear-gradient(135deg, #C9A04A, #A07D2E)', color: '#FDFCFA',
            fontFamily: "'Cinzel', serif", fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            textDecoration: 'none', transition: 'all 0.3s ease',
          }}>
            View Events
          </Link>
          <Link href="/#contact" className="text-sm transition-colors" style={{ fontFamily: "'Cinzel', serif", color: 'rgba(31,27,22,0.4)' }}>
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Hero />
      <GalleryGrid />
      <CTA />
    </>
  );
}
