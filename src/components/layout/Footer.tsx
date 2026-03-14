import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--soft-sand)",
        borderTop: "1px solid rgba(13,17,23,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 300,
          background:
            "radial-gradient(ellipse at bottom, rgba(212,168,83,0.06), transparent 70%)", // Gold
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 48px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Sacred Divider */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginTop: 48, opacity: 0.6 }}>
          <div style={{ height: 1, width: 60, background: "linear-gradient(90deg, transparent, #d4a853)" }} />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="12" y1="2" x2="12" y2="8"></line>
            <line x1="12" y1="16" x2="12" y2="22"></line>
            <line x1="2" y1="12" x2="8" y2="12"></line>
            <line x1="16" y1="12" x2="22" y2="12"></line>
          </svg>
          <div style={{ height: 1, width: 60, background: "linear-gradient(270deg, transparent, #d4a853)" }} />
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 2fr",
            gap: 48,
            padding: "72px 0 56px",
            borderBottom: "1px solid rgba(13,17,23,0.06)",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "#0d1117",
                }}
              >
                ABHAY{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #f9d58b, #d4a853)", // Gold
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  OYUN
                </span>
              </span>
            </Link>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                lineHeight: 1.85,
                color: "rgba(13,17,23,0.6)",
                maxWidth: 260,
                marginBottom: 24,
              }}
            >
              Master Shaman. Global Healer. Awakening the world to the raw power
              of ancient Siberian traditions.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 24,
              }}
            >
              <a
                href="mailto:energeticalmaster@gmail.com"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "rgba(13,17,23,0.5)",
                  textDecoration: "none",
                }}
              >
                ✉ energeticalmaster@gmail.com
              </a>
              <a
                href="tel:+12122561366"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "rgba(13,17,23,0.5)",
                  textDecoration: "none",
                }}
              >
                ☎ (212) 256 1366
              </a>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {(
                [
                  [<svg key="FB" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>, "https://facebook.com/", "FB"],
                  [<svg key="IG" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, "https://www.instagram.com/earthforpeace/", "IG"],
                  [<svg key="YT" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>, "https://www.youtube.com/@earthforpeace", "YT"],
                  [<svg key="TK" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>, "https://tiktok.com/", "TK"],
                ] as const
              ).map(([icon, href, key]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(13,17,23,0.03)",
                    color: "rgba(13,17,23,0.6)",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                color: "#0d1117",
                marginBottom: 20,
              }}
            >
              Navigate
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                ["Teachings", "#teachings"],
                ["Events", "#events"],
                ["Transform", "#transformation"],
                [
                  "Book Session",
                  "https://calendly.com/hurraymangalam/neues-meeting",
                ],
              ].map(([l, h]) => (
                <li key={l}>
                  <Link
                    href={h}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "rgba(13,17,23,0.55)",
                      textDecoration: "none",
                    }}
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                color: "#0d1117",
                marginBottom: 20,
              }}
            >
              Legal
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        color: "rgba(13,17,23,0.55)",
                        textDecoration: "none",
                      }}
                    >
                      {l}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.9rem",
                color: "#0d1117",
                marginBottom: 8,
              }}
            >
              Awaken Weekly
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(13,17,23,0.6)",
                marginBottom: 20,
                lineHeight: 1.7,
              }}
            >
              Receive potent insights and practices directly from Abhay.
            </p>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your email"
                className="footer-input"
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  background: "rgba(13,17,23,0.03)",
                  border: "1px solid rgba(13,17,23,0.12)",
                  borderRight: "none",
                  borderRadius: "6px 0 0 6px",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "#0d1117",
                  outline: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
              />
              <button
                type="button"
                className="footer-btn"
                style={{
                  padding: "12px 20px",
                  background: "#d4a853", // Gold
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "0 6px 6px 0",
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase" as const,
                  cursor: "pointer",
                  transition: "background 0.3s ease",
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "rgba(13,17,23,0.4)",
            }}
          >
            &copy; {year} Abhay Oyun. All Rights Reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              fontStyle: "italic",
              color: "rgba(13,17,23,0.6)",
              textAlign: "center",
              margin: "0 16px",
            }}
          >
            "Walk in Power. Walk in Light."
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              color: "rgba(13,17,23,0.35)",
            }}
          >
            @EarthForPeace
          </p>
        </div>
      </div>
      <style>{`
        .footer-btn:hover {
          background: #e6bd6a !important; /* Lighter gold */
        }
        .footer-social-link:hover {
          background: rgba(212, 168, 83, 0.1) !important;
          color: #d4a853 !important;
          transform: translateY(-2px);
        }
        .footer-input:focus {
          border-color: rgba(212, 168, 83, 0.5) !important;
          box-shadow: 0 0 0 2px rgba(212, 168, 83, 0.1);
        }
      `}</style>
    </footer>
  );
}
