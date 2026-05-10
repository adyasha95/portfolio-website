import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const trajectory = [
  {
    period: "May 2025 – Present",
    role: "Freelance Data Scientist",
    org: "Independent",
    detail: "Designing and deploying LLM-powered pipelines, fine-tuning large language models for domain-specific NLP tasks, and benchmarking tabular deep learning architectures including TabTransformer and FT-Transformer against classical baselines across structured datasets.",
  },
  {
    period: "Jul 2024 – May 2025",
    role: "Senior Data Scientist",
    org: "Research Associate",
    detail: "Built end-to-end ML pipelines from raw data ingestion to model deployment. Specialised in explainable AI by integrating SHAP, LIME, and attention-based interpretability methods to surface model reasoning for stakeholder-facing outputs.",
  },
  {
    period: "Oct 2019 – Jun 2024",
    role: "PhD Researcher",
    org: "Max Planck Fellow · LMU Munich",
    detail: "Five years of applied AI research spanning transfer learning, privacy-preserving federated learning, and deep neural architectures across large-scale multi-site European research networks.",
  },
  {
    period: "Oct 2016 – Aug 2019",
    role: "Research Assistant",
    org: "Neuroscience Lab",
    detail: "Developed signal processing and pattern classification pipelines for high-dimensional time-series data. Applied unsupervised clustering and supervised classification to EEG and physiological recordings.",
  },
];

const skills = [
  { label: "Python & PyTorch", pct: 96 },
  { label: "Federated Learning", pct: 92 },
  { label: "Clinical NLP / BERT", pct: 89 },
  { label: "R & DataSHIELD", pct: 85 },
  { label: "MLOps & Pipelines", pct: 82 },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="circuit-bg"
      style={{ padding: "128px 64px", position: "relative", background: "var(--surface-lowest)" }}
    >
      {/* Glow */}
      <div style={{
        position: "absolute", top: "40%", right: "15%",
        width: 500, height: 500,
        background: "radial-gradient(circle, rgba(79,219,200,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 72 }}
        >
          <p style={{
            fontFamily: "Inter", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--secondary)", marginBottom: 14,
          }}>Background</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700, lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "var(--on-surface)",
            margin: "0 0 20px",
            maxWidth: 640,
          }}>
            Professional Trajectory
          </h2>
          <p style={{
            fontFamily: "Inter", fontSize: 17, lineHeight: 1.75,
            color: "var(--on-surface-var)",
            maxWidth: 680,
            margin: 0,
          }}>
            8+ years turning messy, high-dimensional data into production ML systems. I work across the full stack: wrangling raw data, fine-tuning LLMs, shipping explainable models with SHAP, and deploying privacy-preserving pipelines at scale. Equally comfortable in research and industry settings.
          </p>
        </motion.div>

        {/* 2-col: Timeline left, Skills right */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Timeline */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "Inter", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--outline)", marginBottom: 32,
              }}
            >Career Highlights</motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {trajectory.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.12 }}
                  style={{
                    display: "flex",
                    gap: 24,
                    paddingBottom: i < trajectory.length - 1 ? 40 : 0,
                    position: "relative",
                  }}
                >
                  {/* Vertical line + dot */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: "50%",
                      background: i === 0 ? "var(--primary)" : "var(--outline-var)",
                      border: `2px solid ${i === 0 ? "var(--primary)" : "var(--outline-var)"}`,
                      boxShadow: i === 0 ? "0 0 10px rgba(173,198,255,0.5)" : "none",
                      flexShrink: 0, marginTop: 4,
                    }} />
                    {i < trajectory.length - 1 && (
                      <div style={{
                        width: 1, flex: 1, marginTop: 6,
                        background: "rgba(255,255,255,0.07)",
                      }} />
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ paddingBottom: 4 }}>
                    <span style={{
                      fontFamily: "Inter", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.06em", textTransform: "uppercase",
                      color: i === 0 ? "var(--secondary)" : "var(--outline)",
                      display: "block", marginBottom: 6,
                    }}>{item.period}</span>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 18, fontWeight: 600,
                      color: "var(--on-surface)", marginBottom: 2,
                    }}>{item.role}</div>
                    <div style={{
                      fontFamily: "Inter", fontSize: 13, fontWeight: 500,
                      color: "var(--primary)", marginBottom: 10,
                    }}>{item.org}</div>
                    <p style={{
                      fontFamily: "Inter", fontSize: 14, lineHeight: 1.65,
                      color: "var(--on-surface-var)", margin: 0,
                    }}>{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills + tags */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25 }}
              style={{
                fontFamily: "Inter", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--outline)", marginBottom: 32,
              }}
            >Core Competencies</motion.p>

            {/* Skill bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
              {skills.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: "var(--on-surface-var)" }}>{s.label}</span>
                    <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 700, color: "var(--primary)" }}>{s.pct}%</span>
                  </div>
                  <div style={{
                    height: 4, background: "rgba(255,255,255,0.06)",
                    borderRadius: 2, overflow: "hidden",
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${s.pct}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        height: "100%",
                        background: "linear-gradient(90deg, var(--primary-btn), var(--primary))",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech tags */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              style={{
                fontFamily: "Inter", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--outline)", marginBottom: 16,
              }}
            >Tech Stack</motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
            >
              {["Python", "R", "PyTorch", "Federated Learning", "NLP", "DataSHIELD", "LangChain", "OPAL", "SQL", "Docker", "FastAPI", "Hugging Face"].map((t) => (
                <span key={t} style={{
                  padding: "5px 12px",
                  border: "1px solid var(--outline-var)",
                  borderRadius: 4,
                  fontFamily: "Inter", fontSize: 11, fontWeight: 600,
                  color: "var(--outline)",
                  background: "rgba(255,255,255,0.02)",
                }}>{t}</span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about { padding: 80px 24px !important; }
          #about > div > div:last-child { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
