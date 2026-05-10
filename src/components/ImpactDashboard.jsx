import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    label: "Area Under Curve",
    abbr: "AUC",
    value: 0.94,
    display: "0.94",
    desc: "Multi-site clinical classification",
    color: "var(--primary)",
    colorRaw: "173,198,255",
  },
  {
    label: "Mean Absolute Error",
    abbr: "MAE",
    value: 0.78,
    display: "22%",
    desc: "Normative deviation modelling",
    color: "var(--secondary)",
    colorRaw: "79,219,200",
  },
  {
    label: "Balanced Accuracy",
    abbr: "BAC",
    value: 0.82,
    display: "0.82",
    desc: "Federated multi-class benchmarks",
    color: "#c4a7ff",
    colorRaw: "196,167,255",
  },
];

const highlights = [
  { value: "11", label: "European Sites", sub: "active federated network" },
  { value: "10+", label: "Publications", sub: "peer-reviewed journals" },
  { value: "1,504", label: "Patients", sub: "largest single cohort" },
  { value: "6+", label: "Years", sub: "clinical AI research" },
];

export default function ImpactDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="impact"
      style={{ padding: "96px 64px", background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Background accent */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 800, height: 400,
        transform: "translate(-50%,-50%)",
        background: "radial-gradient(ellipse, rgba(77,142,254,0.05) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p style={{
            fontFamily: "Inter", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--secondary)", marginBottom: 14,
          }}>By The Numbers</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700, letterSpacing: "-0.03em",
            color: "var(--on-surface)", margin: 0,
          }}>Research Impact Dashboard</h2>
        </motion.div>

        {/* Glass card */}
        <motion.div
          className="glass-card"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            borderRadius: 16,
            padding: "48px 56px",
            marginBottom: 32,
          }}
        >
          {/* Metric bars */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 48,
            marginBottom: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            {metrics.map((m, i) => (
              <motion.div
                key={m.abbr}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <div>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 28, fontWeight: 700,
                      color: m.color,
                    }}>{m.display}</span>
                    <span style={{
                      fontFamily: "Inter", fontSize: 12, fontWeight: 700,
                      color: "var(--outline)",
                      marginLeft: 8, letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}>{m.abbr}</span>
                  </div>
                </div>
                <div style={{
                  height: 6, background: "rgba(255,255,255,0.05)",
                  borderRadius: 3, overflow: "hidden", marginBottom: 10,
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${m.value * 100}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      height: "100%",
                      background: `linear-gradient(90deg, rgba(${m.colorRaw},0.5), rgba(${m.colorRaw},1))`,
                      borderRadius: 3,
                      boxShadow: `0 0 12px rgba(${m.colorRaw},0.4)`,
                    }}
                  />
                </div>
                <p style={{
                  fontFamily: "Inter", fontSize: 12, lineHeight: 1.5,
                  color: "var(--outline)", margin: 0,
                }}>{m.label} · {m.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {highlights.map(({ value, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.08 }}
                style={{ textAlign: "center" }}
              >
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 36, fontWeight: 700,
                  color: "var(--on-surface)", lineHeight: 1, marginBottom: 6,
                }}>{value}</div>
                <div style={{
                  fontFamily: "Inter", fontSize: 12, fontWeight: 700,
                  color: "var(--primary)", textTransform: "uppercase",
                  letterSpacing: "0.06em", marginBottom: 4,
                }}>{label}</div>
                <div style={{
                  fontFamily: "Inter", fontSize: 11,
                  color: "var(--outline)",
                }}>{sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #impact { padding: 64px 24px !important; }
          #impact .glass-card > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
          #impact .glass-card > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
          #impact .glass-card { padding: 32px 24px !important; }
        }
      `}</style>
    </section>
  );
}
