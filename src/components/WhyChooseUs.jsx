const features = [
  { icon: "🎓", title: "Experienced Dental Surgeon", desc: "Skilled professional with years of dental practice and hundreds of successful procedures." },
  { icon: "🧹", title: "Hygienic Environment", desc: "Strict sterilization protocols and clean treatment areas for every patient visit." },
  { icon: "⚙️", title: "Modern Equipment", desc: "Latest dental technology for accurate diagnosis and effective, comfortable treatment." },
  { icon: "😊", title: "Friendly Staff", desc: "Warm, caring team dedicated to making your dental visit calm and stress-free." },
  { icon: "🛡️", title: "Safe Procedures", desc: "All treatments follow safety standards to ensure your health and well-being." },
  { icon: "🎯", title: "Personalized Treatment", desc: "Customized care plans tailored specifically to your dental needs and goals." },
];

export default function WhyChooseUs() {
  return (
    <section id="why" style={{ background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>The Smile Oro Difference</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            We combine clinical expertise with genuine care to deliver a dental experience you can trust.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }} className="why-grid">
          {features.map(f => (
            <div key={f.title} style={{
              background: "#f8fafc",
              borderRadius: 16,
              padding: "28px 24px",
              border: "1px solid #e5e7eb",
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "linear-gradient(135deg, #eff6ff, #f0fdfa)",
                border: "1px solid #dbeafe",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.4rem",
                marginBottom: 16,
              }}>{f.icon}</div>
              <h3 style={{ fontSize: "0.96rem", fontWeight: 600, color: "#1f2937", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: "0.84rem", color: "#6b7280", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{
          marginTop: 48,
          background: "linear-gradient(135deg, #eff6ff 0%, #f0fdfa 100%)",
          borderRadius: 16,
          padding: "32px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
          border: "1px solid #dbeafe",
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "#111827", marginBottom: 6 }}>
              Ready for a Healthier Smile?
            </h3>
            <p style={{ fontSize: "0.88rem", color: "#6b7280" }}>Book your appointment today at Chaiti Durga Chowk, Sahibganj</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#appointment" className="btn-primary">Book Appointment</a>
            <a href="tel:+919504890774" className="btn-outline">Call Us</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
