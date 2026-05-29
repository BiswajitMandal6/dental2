const contactInfo = [
  { icon: "📍", label: "Address", value: "Chaiti Durga Chowk, near Durga Mandir, Sahibganj, Jharkhand 816109" },
  { icon: "📞", label: "Phone", value: "+91 95048 90774", href: "tel:+919504890774" },
  { icon: "🕙", label: "Hours", value: "Mon–Sat: 10:00 AM – 7:00 PM" },
  { icon: "📌", label: "Location Code", value: "6JRV+7H Sahibganj, Jharkhand" },
];

export default function Contact() {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0!2d87.677!3d25.242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSmile+Oro+Dental+Clinic!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <section id="contact" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Contact</p>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Find Us</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Visit us at Sahibganj or reach out via phone or WhatsApp.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }} className="contact-grid">
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {contactInfo.map(c => (
              <div key={c.label} style={{
                background: "white",
                borderRadius: 12,
                padding: "18px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                border: "1px solid #e5e7eb",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "#eff6ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", flexShrink: 0,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 4 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: "0.9rem", color: "#2563eb", fontWeight: 500 }}>{c.value}</a>
                  ) : (
                    <span style={{ fontSize: "0.9rem", color: "#374151" }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{
              background: "white", borderRadius: 12, padding: "18px 20px",
              border: "1px solid #e5e7eb",
            }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 14 }}>Connect With Us</div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { label: "WhatsApp", href: "https://wa.me/919504890774", color: "#22c55e", icon: "💬" },
                  { label: "Call", href: "tel:+919504890774", color: "#2563eb", icon: "📞" },
                  { label: "Maps", href: `https://maps.google.com/?q=Smile+Oro+Dental+Clinic+Sahibganj`, color: "#ef4444", icon: "🗺️" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{
                    flex: 1,
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                    padding: "12px 8px",
                    background: "#f8fafc",
                    borderRadius: 10,
                    border: "1px solid #e5e7eb",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#374151",
                    transition: "transform 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                  >
                    <span style={{ fontSize: "1.3rem" }}>{s.icon}</span>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{
            background: "#e5e7eb",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            minHeight: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}>
            <iframe
              title="Smile Oro Dental Clinic Location"
              src={`https://maps.google.com/maps?q=Chaiti+Durga+Chowk+Sahibganj+Jharkhand+816109&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
