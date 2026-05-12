"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Teachings", href: "#teachings" },
  { label: "Events", href: "#events" },
  { label: "Transform", href: "#transformation" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 5vw",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(3,7,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.5s ease",
        }}
      >
        {/* Logo - Pure premium typography */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img 
              src="/icon1.png" 
              alt="Abhay Oyun Logo" 
              width={34} 
              height={34} 
              style={{ marginRight: "14px", objectFit: "contain" }} 
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                ABHAY <span style={{ color: "#d4a853" }}>OYUN</span>
              </span>
              <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.55rem",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.6)",
                marginTop: 4,
              }}
            >
              Siberian Shamanism
            </span>
          </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="nav-link"
              style={{
                position: "relative",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: scrolled ? "rgba(255,255,255,0.7)" : "#ffffff",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
            >
              {l.label}
            </Link>
          ))}
          
          <div style={{ display: "flex", alignItems: "center", gap: 12, borderLeft: "1px solid rgba(255,255,255,0.15)", paddingLeft: 24, marginLeft: 8 }}>
            {(
              [
                [<svg key="IG" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, "https://www.instagram.com/earthforpeace/", "IG"],
                [<svg key="YT" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, "https://www.youtube.com/@earthforpeace", "YT"],
                [<svg key="FB" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, "https://facebook.com/", "FB"],
                [<svg key="TK" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>, "https://tiktok.com/", "TK"],
              ] as const
            ).map(([icon, href, key]) => (
              <Link
                key={key}
                href={href}
                target="_blank"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: scrolled ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.7)",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#d4a853";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.7)";
                }}
              >
                {icon}
              </Link>
            ))}
          </div>

          <Link
            href="https://calendly.com/hurraymangalam/individualsessions"
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 28px",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              borderRadius: 4,
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #d4a853, #b8893a)";
              e.currentTarget.style.color = "#03070f";
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.boxShadow = "0 0 24px rgba(212,168,83,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.2)";
            }}
          >
            Book Session
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: "transparent",
            border: "none",
            color: "#ffffff",
            cursor: "pointer",
            display: "none",
            padding: "8px",
          }}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          style={{
            position: "fixed",
            top: 80,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(3,7,15,0.98)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "40px",
            gap: "24px",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/hurraymangalam/individualsessions"
            target="_blank"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              marginTop: "20px",
              padding: "16px 32px",
              background: "linear-gradient(135deg, #d4a853, #b8893a)",
              color: "#050810",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Book Session
          </Link>
        </div>
      )}

      {/* Global styles for nav links hover effect */}
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: #d4a853;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #ffffff !important;
        }
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (max-width: 768px) {
          nav { padding: 0 20px !important; height: 64px !important; }
          .mobile-menu-overlay { top: 64px !important; }
        }
      `}</style>
    </>
  );
}
