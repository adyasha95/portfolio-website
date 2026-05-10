import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "6+", label: "YEARS EXP." },
  { value: "8", label: "PUBLICATIONS" },
  { value: "11", label: "EU SITES" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="circuit-bg"
      style={{ padding: "128px 64px", position: "relative" }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", left: "30%",
        width: 600, height: 600,
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(173,198,255,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" }}>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* Blue glow behind photo */}
          <div style={{
            position: "absolute", inset: -16,
            background: "rgba(173,198,255,0.12)",
            filter: "blur(40px)",
            borderRadius: "50%",
          }} />
          <div style={{
            position: "relative",
            borderRadius: 12,
            overflow: "hidden",
            border: "3px solid var(--primary)",
            aspectRatio: "4/5",
          }}>
            {/* Photo placeholder — drop photo.jpg into /public to replace */}
            <img
              src="/photo.jpg"
              alt="Adyasha Khuntia"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{
            fontFamily: "Inter", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--secondary)", marginBottom: 16,
          }}>About Me</p>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700, lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--on-surface)",
            margin: "0 0 28px",
          }}>
            Pioneering Clinical Intelligence
          </h2>

          <p style={{
            fontFamily: "Inter", fontSize: 17, lineHeight: 1.75,
            color: "var(--on-surface-var)", marginBottom: 16,
          }}>
            As a PhD specialising in Clinical AI, I bridge the gap between complex neural
            architectures and actionable medical insights. My work focuses on scalable,
            federated systems that prioritise patient privacy while maximising diagnostic
            accuracy across international healthcare sites.
          </p>
          <p style={{
            fontFamily: "Inter", fontSize: 17, lineHeight: 1.75,
            color: "var(--on-surface-var)", marginBottom: 40,
          }}>
            Based in Europe, I lead data science infrastructure for multi-site clinical
            networks, design federated analysis pipelines, and develop NLP tools for
            extracting structured insight from unstructured medical records.
          </p>

          {/* Tech tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
            {["Python", "R", "PyTorch", "Federated Learning", "NLP", "DataSHIELD", "LangChain", "OPAL"].map((t) => (
              <span key={t} style={{
                padding: "5px 12px",
                border: "1px solid var(--outline-var)",
                borderRadius: 4,
                fontFamily: "Inter", fontSize: 12, fontWeight: 600,
                color: "var(--outline)",
              }}>{t}</span>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{ textAlign: "center" }}
              >
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 42, fontWeight: 700,
                  color: "var(--primary)", lineHeight: 1,
                  marginBottom: 6,
                }}>{value}</div>
                <div style={{
                  fontFamily: "Inter", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--on-surface-var)",
                }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 48px !important; }
          #about { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
