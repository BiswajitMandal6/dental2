const galleryItems = [
  { icon: "🏥", label: "Clinic Interior", bg: "#eff6ff" },
  { icon: "🛋️", label: "Reception Area", bg: "#f0fdfa" },
  { icon: "🦷", label: "Treatment Room", bg: "#eff6ff" },
  { icon: "⚙️", label: "Dental Equipment", bg: "#f0fdf4" },
  { icon: "😁", label: "Happy Patient", bg: "#fff7ed" },
  { icon: "🔬", label: "Modern Surgery", bg: "#faf5ff" },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Gallery</p>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Inside Smile Oro</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            A welcoming, hygienic space designed for your comfort and care.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }} className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div key={i}
              style={{
                background: item.bg,
                borderRadius: 16,
                height: i === 0 || i === 3 ? 220 : 180,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                border: "1px solid #e5e7eb",
                cursor: "default",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontSize: "2.4rem",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {item.icon}
              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6b7280", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
