import { useState } from "react";

const reviews = [
  { name: "Priya Sharma", location: "Sahibganj", rating: 5, text: "The doctor and staff were very polite and professional. My root canal was completely pain-free. Highly recommended!", initials: "PS" },
  { name: "Rakesh Kumar", location: "Jharkhand", rating: 5, text: "Very nicely work. I am fully satisfied with my treatment. The clinic is clean and the staff is very helpful.", initials: "RK" },
  { name: "Sunita Devi", location: "Sahibganj", rating: 5, text: "Best dental surgeon in Sahibganj. Got my teeth whitening done and the results are amazing. Very professional service.", initials: "SD" },
  { name: "Amit Pandey", location: "Jharkhand", rating: 5, text: "Very nice, the staffs are quite friendly. Felt very comfortable during the entire procedure. Will definitely visit again.", initials: "AP" },
  { name: "Meena Gupta", location: "Sahibganj", rating: 5, text: "Excellent care for my child's dental treatment. The doctor was very gentle and patient. Highly recommend for family dental care.", initials: "MG" },
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a === 0 ? reviews.length - 1 : a - 1));
  const next = () => setActive(a => (a === reviews.length - 1 ? 0 : a + 1));

  const visible = [
    reviews[(active) % reviews.length],
    reviews[(active + 1) % reviews.length],
    reviews[(active + 2) % reviews.length],
  ];

  return (
    <section id="reviews" style={{ background: "#f8fafc" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">Patient Reviews</p>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>What Our Patients Say</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: "1.1rem" }}>⭐⭐⭐⭐⭐</span>
            <span style={{ fontWeight: 600, color: "#1f2937" }}>4.8</span>
            <span style={{ color: "#9ca3af", fontSize: "0.87rem" }}>from 51 reviews on Google</span>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 20,
          marginBottom: 32,
        }} className="reviews-grid">
          {visible.map((r, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: 16,
              padding: "24px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              transition: "opacity 0.3s",
              opacity: i === 1 ? 1 : 0.75,
            }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: "linear-gradient(135deg, #2563eb, #0d9488)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "white", fontWeight: 700, fontSize: "0.9rem", flexShrink: 0,
                }}>{r.initials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#1f2937" }}>{r.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{r.location}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: "0.78rem", color: "#f59e0b" }}>{"★".repeat(r.rating)}</div>
              </div>
              <p style={{ fontSize: "0.86rem", color: "#4b5563", lineHeight: 1.7, fontStyle: "italic" }}>
                "{r.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16 }}>
          <button onClick={prev} style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "white", border: "1px solid #e5e7eb",
            fontSize: "1rem", cursor: "pointer",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#2563eb"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}
          >‹</button>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              width: i === active ? 24 : 8,
              height: 8,
              borderRadius: 100,
              background: i === active ? "#2563eb" : "#e5e7eb",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }} />
          ))}
          <button onClick={next} style={{
            width: 40, height: 40, borderRadius: "50%",
            background: "white", border: "1px solid #e5e7eb",
            fontSize: "1rem", cursor: "pointer",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "#2563eb"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}
          >›</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
          .reviews-grid > div:not(:first-child) { display: none; }
        }
      `}</style>
    </section>
  );
}
