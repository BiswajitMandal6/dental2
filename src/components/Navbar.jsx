import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #e5e7eb" : "none",
      transition: "all 0.3s ease",
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #2563eb, #0d9488)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, color: "white", fontWeight: 700, fontFamily: "serif",
          }}>S</div>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "#111827", lineHeight: 1.1 }}>Smile Oro</div>
            <div style={{ fontSize: "0.68rem", color: "#6b7280", letterSpacing: "0.05em", fontWeight: 500 }}>DENTAL CLINIC</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} style={{ fontSize: "0.88rem", fontWeight: 500, color: scrolled ? "#374151" : "#1f2937", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#2563eb"}
                onMouseLeave={e => e.target.style.color = scrolled ? "#374151" : "#1f2937"}
              >{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#appointment" style={{ padding: "9px 20px", background: "#2563eb", color: "white", borderRadius: 7, fontSize: "0.87rem", fontWeight: 500, transition: "background 0.2s" }}
              onMouseEnter={e => e.target.style.background = "#1d4ed8"}
              onMouseLeave={e => e.target.style.background = "#2563eb"}
            >Book Appointment</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", fontSize: 22, color: "#374151", cursor: "pointer" }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "white", borderTop: "1px solid #e5e7eb",
          padding: "16px 24px 24px",
        }}>
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", fontSize: "0.95rem", fontWeight: 500, color: "#374151", borderBottom: "1px solid #f3f4f6" }}
            >{l.label}</a>
          ))}
          <a href="#appointment" onClick={() => setMenuOpen(false)}
            style={{ display: "inline-block", marginTop: 16, padding: "11px 24px", background: "#2563eb", color: "white", borderRadius: 7, fontSize: "0.9rem", fontWeight: 500 }}
          >Book Appointment</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
