import { useState } from "react";

const treatments = [
  "Root Canal Treatment", "Dental Surgery", "Tooth Extraction", "Teeth Cleaning",
  "Cosmetic Dentistry", "Dental Filling", "Child Dental Care", "Teeth Whitening",
  "Braces & Alignment", "Emergency Dental Care",
];

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  border: "1.5px solid #e5e7eb",
  borderRadius: 8,
  fontSize: "0.9rem",
  fontFamily: "var(--font-sans)",
  color: "#374151",
  background: "white",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Appointment() {
  const [form, setForm] = useState({ name: "", phone: "", treatment: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const waLink = `https://wa.me/919504890774?text=Hi%20Smile%20Oro%20Dental%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment.`;

  return (
    <section id="appointment" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Book Appointment</p>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Schedule Your Visit</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Fill out the form below or reach us directly via WhatsApp or phone.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 360px",
          gap: 32,
          alignItems: "start",
        }} className="appt-grid">
          {/* Form */}
          <div style={{
            background: "white",
            borderRadius: 20,
            padding: "32px",
            border: "1px solid #e5e7eb",
            boxShadow: "var(--shadow-md)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", color: "#1f2937", marginBottom: 8 }}>Request Sent!</h3>
                <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>We'll contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                  <div>
                    <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "#374151", marginBottom: 6, display: "block" }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="Your name"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#2563eb"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "#374151", marginBottom: 6, display: "block" }}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handle} required placeholder="+91 XXXXX XXXXX"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#2563eb"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                  <div>
                    <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "#374151", marginBottom: 6, display: "block" }}>Treatment Type</label>
                    <select name="treatment" value={form.treatment} onChange={handle}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={e => e.target.style.borderColor = "#2563eb"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    >
                      <option value="">Select treatment</option>
                      {treatments.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "#374151", marginBottom: 6, display: "block" }}>Preferred Date</label>
                    <input name="date" type="date" value={form.date} onChange={handle}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = "#2563eb"}
                      onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ fontSize: "0.82rem", fontWeight: 500, color: "#374151", marginBottom: 6, display: "block" }}>Message (Optional)</label>
                  <textarea name="message" value={form.message} onChange={handle} placeholder="Any specific concerns or queries..." rows={3}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = "#2563eb"}
                    onBlur={e => e.target.style.borderColor = "#e5e7eb"}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "13px" }}>
                  Submit Appointment Request
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a href={waLink} target="_blank" rel="noreferrer" style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "#dcfce7",
              border: "1.5px solid #bbf7d0",
              borderRadius: 14, padding: "20px",
              transition: "transform 0.2s",
              textDecoration: "none",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ fontSize: "2rem" }}>💬</div>
              <div>
                <div style={{ fontWeight: 600, color: "#166534", fontSize: "0.92rem" }}>WhatsApp Booking</div>
                <div style={{ fontSize: "0.8rem", color: "#4ade80" }}>Chat with us instantly</div>
              </div>
            </a>

            <a href="tel:+919504890774" style={{
              display: "flex", alignItems: "center", gap: 16,
              background: "#eff6ff",
              border: "1.5px solid #bfdbfe",
              borderRadius: 14, padding: "20px",
              transition: "transform 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <div style={{ fontSize: "2rem" }}>📞</div>
              <div>
                <div style={{ fontWeight: 600, color: "#1d4ed8", fontSize: "0.92rem" }}>Call Directly</div>
                <div style={{ fontSize: "0.8rem", color: "#60a5fa" }}>+91 95048 90774</div>
              </div>
            </a>

            <div style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: 14, padding: "20px",
            }}>
              <h4 style={{ fontWeight: 600, color: "#1f2937", fontSize: "0.9rem", marginBottom: 12 }}>Clinic Hours</h4>
              {[
                { day: "Mon – Sat", time: "10:00 AM – 7:00 PM" },
                { day: "Sunday", time: "By Appointment" },
              ].map(h => (
                <div key={h.day} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: "0.83rem", color: "#6b7280" }}>{h.day}</span>
                  <span style={{ fontSize: "0.83rem", fontWeight: 500, color: "#1f2937" }}>{h.time}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: "8px 12px", background: "#f0fdf4", borderRadius: 8, fontSize: "0.8rem", color: "#16a34a", fontWeight: 500 }}>
                🟢 Emergency care available
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .appt-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
