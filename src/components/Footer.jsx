const quickLinks = ["Home", "About", "Services", "Reviews", "Gallery", "Contact"];
const serviceLinks = ["Root Canal", "Dental Surgery", "Teeth Cleaning", "Cosmetic Dentistry", "Teeth Whitening", "Braces & Alignment"];

export default function Footer() {
  return (
    <footer style={{
      background: "#0f172a",
      color: "#94a3b8",
      padding: "56px 24px 24px",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: 40,
          marginBottom: 48,
          paddingBottom: 40,
          borderBottom: "1px solid #1e293b",
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: "linear-gradient(135deg, #2563eb, #0d9488)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, color: "white", fontWeight: 700, fontFamily: "serif",
              }}>S</div>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "white" }}>Smile Oro Dental Clinic</div>
                <div style={{ fontSize: "0.68rem", color: "#64748b", letterSpacing: "0.05em" }}>स्माइल ओरो डेंटल क्लिनिक</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.75, color: "#64748b", maxWidth: 280, marginBottom: 20 }}>
              Advanced dental care with precision and trust. Your smile is our priority at Sahibganj, Jharkhand.
            </p>
            <div style={{ fontSize: "0.83rem" }}>
              <div style={{ marginBottom: 6 }}>📍 Chaiti Durga Chowk, Sahibganj, JH 816109</div>
              <div style={{ marginBottom: 6 }}>📞 <a href="tel:+919504890774" style={{ color: "#60a5fa", textDecoration: "none" }}>+91 95048 90774</a></div>
              <div>🕙 Opens 10 AM</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 600, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Quick Links</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map(l => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} style={{ fontSize: "0.85rem", color: "#64748b", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#60a5fa"}
                    onMouseLeave={e => e.target.style.color = "#64748b"}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 600, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Services</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {serviceLinks.map(s => (
                <li key={s}>
                  <a href="#services" style={{ fontSize: "0.85rem", color: "#64748b", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#60a5fa"}
                    onMouseLeave={e => e.target.style.color = "#64748b"}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Book */}
          <div>
            <h4 style={{ color: "white", fontSize: "0.85rem", fontWeight: 600, marginBottom: 16, letterSpacing: "0.05em", textTransform: "uppercase" }}>Book Now</h4>
            <p style={{ fontSize: "0.83rem", color: "#64748b", lineHeight: 1.7, marginBottom: 16 }}>
              Schedule your dental appointment today. Same-day appointments available.
            </p>
            <a href="#appointment" style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#2563eb",
              color: "white",
              borderRadius: 7,
              fontSize: "0.85rem",
              fontWeight: 500,
              marginBottom: 12,
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#1d4ed8"}
              onMouseLeave={e => e.currentTarget.style.background = "#2563eb"}
            >Book Appointment</a>
            <br />
            <a href="https://wa.me/919504890774" target="_blank" rel="noreferrer" style={{
              display: "inline-block",
              padding: "10px 20px",
              background: "#15803d",
              color: "white",
              borderRadius: 7,
              fontSize: "0.85rem",
              fontWeight: 500,
              transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#166534"}
              onMouseLeave={e => e.currentTarget.style.background = "#15803d"}
            >💬 WhatsApp Us</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontSize: "0.8rem", color: "#475569" }}>
            © 2025 Smile Oro Dental Clinic. All rights reserved.
          </p>
          <p style={{ fontSize: "0.8rem", color: "#475569" }}>
            ⭐ 4.8 Rating · 51+ Satisfied Patients · Sahibganj, Jharkhand
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
