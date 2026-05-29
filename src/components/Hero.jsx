export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #eff6ff 0%, #f0fdfa 50%, #f8fafc 100%)",
      display: "flex",
      alignItems: "center",
      paddingTop: 80,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle decorative circles */}
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: 60, left: -60,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }} className="hero-grid">
          {/* Left Content */}
          <div className="fade-up" style={{ animationDelay: "0.1s" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 14px",
              background: "white",
              border: "1px solid #dbeafe",
              borderRadius: 100,
              marginBottom: 28,
              boxShadow: "0 1px 6px rgba(37,99,235,0.08)",
            }}>
              <span style={{ fontSize: "0.85rem" }}>⭐</span>
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#2563eb" }}>4.8 Rated by 51+ Patients</span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              lineHeight: 1.15,
              color: "#111827",
              marginBottom: 20,
            }}>
              Advanced Dental Care<br />
              <span style={{ color: "#2563eb" }}>With Precision</span> & Trust
            </h1>

            <p style={{
              fontSize: "1rem",
              color: "#6b7280",
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 440,
            }}>
              Modern Treatment &nbsp;•&nbsp; Comfortable Experience &nbsp;•&nbsp; Trusted Dental Care
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#appointment" className="btn-primary">
                <span>📅</span> Book Appointment
              </a>
              <a href="tel:+919504890774" className="btn-outline">
                <span>📞</span> Call Now
              </a>
            </div>

            {/* Info strip */}
            <div style={{
              marginTop: 40,
              display: "flex",
              gap: 24,
              flexWrap: "wrap",
            }}>
              {[
                { icon: "📍", text: "Sahibganj, Jharkhand" },
                { icon: "🕙", text: "Opens 10 AM" },
                { icon: "📱", text: "+91 95048 90774" },
              ].map(item => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
                  <span style={{ fontSize: "0.82rem", color: "#6b7280", fontWeight: 500 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="fade-up" style={{ animationDelay: "0.25s" }}>
            <div style={{
              background: "white",
              borderRadius: 24,
              padding: 32,
              boxShadow: "0 8px 40px rgba(37,99,235,0.10)",
              border: "1px solid #e5e7eb",
              position: "relative",
            }}>
              {/* Clinic visual placeholder */}
              <div style={{
                background: "linear-gradient(135deg, #dbeafe 0%, #cffafe 100%)",
                borderRadius: 16,
                height: 240,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
                fontSize: 64,
                position: "relative",
                overflow: "hidden",
              }}>
                🦷
                <div style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #2563eb, #0d9488)",
                }} />
              </div>

              {/* Stat row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                {[
                  { num: "51+", label: "Reviews" },
                  { num: "98%", label: "Success" },
                  { num: "5+", label: "Yrs Care" },
                ].map(s => (
                  <div key={s.label} style={{
                    background: "#f8fafc",
                    borderRadius: 10,
                    padding: "14px 8px",
                    textAlign: "center",
                    border: "1px solid #e5e7eb",
                  }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "#2563eb" }}>{s.num}</div>
                    <div style={{ fontSize: "0.72rem", color: "#9ca3af", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Floating badge */}
              <div style={{
                position: "absolute", top: -14, right: 24,
                background: "#2563eb", color: "white",
                borderRadius: 100, padding: "6px 14px",
                fontSize: "0.78rem", fontWeight: 600,
                boxShadow: "0 4px 12px rgba(37,99,235,0.30)",
              }}>
                ✓ Trusted Clinic
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
