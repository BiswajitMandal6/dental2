const stats = [
  { num: "51+", label: "Patient Reviews" },
  { num: "98%", label: "Success Rate" },
  { num: "5+", label: "Years of Care" },
];

const points = [
  { icon: "🎓", text: "Professional dental treatment by experienced surgeon" },
  { icon: "😊", text: "Friendly, caring staff for a comfortable experience" },
  { icon: "🏥", text: "Modern dental surgery with advanced equipment" },
  { icon: "🛡️", text: "Safe, hygienic procedures for every patient" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "white" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
        }} className="about-grid">
          {/* Left Visual */}
          <div style={{ position: "relative" }}>
            <div style={{
              background: "linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)",
              borderRadius: 20,
              height: 420,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
              border: "1px solid #e5e7eb",
              position: "relative",
              overflow: "hidden",
            }}>
              🏥
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: 4,
                background: "linear-gradient(90deg, #2563eb, #0d9488)",
              }} />
            </div>

            {/* Floating stat */}
            <div style={{
              position: "absolute",
              bottom: 28,
              right: -24,
              background: "white",
              borderRadius: 14,
              padding: "16px 20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
              border: "1px solid #e5e7eb",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "#2563eb" }}>4.8 ⭐</div>
              <div style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 500, marginTop: 2 }}>Google Rating</div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="section-label">About Us</p>
            <h2 className="section-title">
              Quality Dental Care<br />You Can Count On
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.8, marginBottom: 32 }}>
              Smile Oro Dental Clinic in Sahibganj, Jharkhand provides professional dental care with a patient-first approach. Our experienced dental surgeon and friendly team ensure every visit is comfortable and effective.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {points.map(p => (
                <div key={p.text} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "#eff6ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem", flexShrink: 0,
                  }}>{p.icon}</div>
                  <span style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6, paddingTop: 7 }}>{p.text}</span>
                </div>
              ))}
            </div>

            {/* Stat cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  background: "#f8fafc",
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: "16px 12px",
                  textAlign: "center",
                }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "#2563eb" }}>{s.num}</div>
                  <div style={{ fontSize: "0.75rem", color: "#9ca3af", fontWeight: 500, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
