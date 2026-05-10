import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "../data/services";

// Icon SVGs matching Stitch style (no dependency on lucide brand icons)
const iconPaths = {
  Brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"/>
      <path d="M12 8v1M12 15v1M8.46 9.46l.7.7M14.84 14.84l.7.7M7 12H8M16 12h1M8.46 14.54l.7-.7M14.84 9.16l.7-.7"/>
    </svg>
  ),
  Database: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  ),
  Cpu: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
    </svg>
  ),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" style={{ padding: "128px 64px", background: "var(--surface-lowest)" }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p style={{
            fontFamily: "Inter", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--secondary)", marginBottom: 16,
          }}>What I Do</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--on-surface)", margin: 0,
          }}>Specialized Expertise</h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              className="glass-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: 40, borderRadius: 8,
                transition: "border-color 0.3s",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56, height: 56,
                borderRadius: 8,
                background: "rgba(173,198,255,0.08)",
                border: "1px solid rgba(173,198,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--primary)",
                marginBottom: 28,
                transition: "transform 0.2s",
              }}>
                {iconPaths[s.icon]}
              </div>

              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22, fontWeight: 600,
                color: "var(--on-surface)",
                margin: "0 0 12px",
              }}>{s.title}</h3>

              <p style={{
                fontFamily: "Inter", fontSize: 15, lineHeight: 1.65,
                color: "var(--on-surface-var)",
                margin: "0 0 24px",
              }}>{s.description}</p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {s.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "var(--secondary)", flexShrink: 0, marginTop: 2 }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                        <path d="M10.293 2.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L5 7.586l5.293-5.293z"/>
                      </svg>
                    </span>
                    <span style={{ fontFamily: "Inter", fontSize: 14, color: "var(--on-surface-var)" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services > div > div:last-child { grid-template-columns: 1fr !important; }
          #services { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
