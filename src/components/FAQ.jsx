import { useState } from "react";

const faqs = [
  { q: "Is root canal treatment painful?", a: "Modern root canal treatment is virtually pain-free. We use local anesthesia and advanced techniques to ensure you're comfortable throughout the procedure. Most patients report feeling little to no discomfort." },
  { q: "How long does a dental surgery take?", a: "Procedure time varies depending on complexity. A simple extraction may take 20–30 minutes, while surgical procedures can take 1–2 hours. We'll give you a clear timeline during your consultation." },
  { q: "What are your appointment timings?", a: "We're open Monday to Saturday from 10:00 AM to 7:00 PM. Sundays are available by appointment. You can call us at +91 95048 90774 or book via WhatsApp." },
  { q: "Do you provide emergency dental care?", a: "Yes, we handle dental emergencies including severe toothache, broken teeth, and dental injuries. Contact us immediately at +91 95048 90774 for urgent cases." },
  { q: "Is the clinic hygienic and safe?", a: "Absolutely. We follow strict sterilization and disinfection protocols. All instruments are properly sterilized and we maintain a clean, safe environment for every patient." },
  { q: "Do you treat children?", a: "Yes, we provide gentle and friendly dental care for children. Our approach is designed to make kids comfortable and build positive dental habits from an early age." },
  { q: "How do I prepare for my first visit?", a: "Simply bring any previous dental records if available. Arrive 10 minutes early to complete any paperwork. We'll conduct a full examination and discuss your treatment plan before proceeding." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ background: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="section-label">FAQ</p>
          <h2 className="section-title" style={{ margin: "0 auto 12px" }}>Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Common questions about our treatments and services.
          </p>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              border: "1.5px solid",
              borderColor: open === i ? "#bfdbfe" : "#e5e7eb",
              borderRadius: 12,
              overflow: "hidden",
              transition: "border-color 0.2s",
              background: open === i ? "#fafcff" : "white",
            }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left",
                  padding: "18px 20px",
                  background: "transparent", border: "none",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  cursor: "pointer", gap: 12,
                }}>
                <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "#1f2937", lineHeight: 1.4 }}>{faq.q}</span>
                <span style={{
                  fontSize: "1.1rem",
                  color: open === i ? "#2563eb" : "#9ca3af",
                  transform: open === i ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s",
                  flexShrink: 0,
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px", fontSize: "0.88rem", color: "#6b7280", lineHeight: 1.75 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
