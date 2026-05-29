const services = [
  { icon: "🦷", title: "Root Canal Treatment", desc: "Pain-free root canal therapy with modern techniques" },
  { icon: "🏥", title: "Dental Surgery", desc: "Safe surgical procedures by experienced professionals" },
  { icon: "🔧", title: "Tooth Extraction", desc: "Comfortable extractions with minimal discomfort" },
  { icon: "✨", title: "Teeth Cleaning", desc: "Professional scaling and polishing for healthy gums" },
  { icon: "💎", title: "Cosmetic Dentistry", desc: "Smile makeovers for a confident, beautiful look" },
  { icon: "🪥", title: "Dental Filling", desc: "Durable tooth-coloured fillings for cavities" },
  { icon: "👶", title: "Child Dental Care", desc: "Gentle, friendly dental care for children" },
  { icon: "⬜", title: "Teeth Whitening", desc: "Professional whitening for a brighter smile" },
  { icon: "📐", title: "Braces & Alignment", desc: "Orthodontic solutions for perfectly aligned teeth" },
  { icon: "🚨", title: "Emergency Dental Care", desc: "Prompt treatment for dental emergencies" },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Our Services</p>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Comprehensive Dental Treatments</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From routine check-ups to advanced dental procedures, we offer complete oral healthcare under one roof.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}>
          {services.map(s => (
            <div key={s.title}
              style={{
                background: "white",
                borderRadius: 14,
                padding: "24px 20px",
                border: "1px solid #e5e7eb",
                transition: "box-shadow 0.2s, transform 0.2s, border-color 0.2s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.10)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "#bfdbfe";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#eff6ff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.3rem",
                marginBottom: 14,
              }}>{s.icon}</div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 600, color: "#1f2937", marginBottom: 6, lineHeight: 1.35 }}>{s.title}</h3>
              <p style={{ fontSize: "0.8rem", color: "#9ca3af", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#appointment" className="btn-primary">Book a Consultation</a>
        </div>
      </div>
    </section>
  );
}
