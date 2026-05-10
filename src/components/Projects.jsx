import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function Chip({ children, color = "primary" }) {
  const colors = {
    primary: { bg: "rgba(173,198,255,0.12)", text: "var(--primary)" },
    teal: { bg: "rgba(79,219,200,0.12)", text: "var(--secondary)" },
    purple: { bg: "rgba(196,167,255,0.12)", text: "#c4a7ff" },
  };
  const c = colors[color] || colors.primary;
  return (
    <span style={{
      display: "inline-block",
      background: c.bg, color: c.text,
      padding: "3px 10px", borderRadius: 4,
      fontFamily: "Inter", fontSize: 10, fontWeight: 700,
      letterSpacing: "0.08em", textTransform: "uppercase",
    }}>{children}</span>
  );
}

function GitHubLink({ href }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        color: "var(--outline)", textDecoration: "none",
        fontFamily: "Inter", fontSize: 12, fontWeight: 600,
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.color = "var(--on-surface)"}
      onMouseLeave={(e) => e.currentTarget.style.color = "var(--outline)"}
    >
      <GithubIcon size={13} /> View on GitHub
    </a>
  );
}

/* ── Inline visualisations ── */

function BarChart({ bars }) {
  // bars: [{ label, value, max, color }]
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {bars.map((b) => (
        <div key={b.label}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
            <span style={{ fontFamily: "Inter", fontSize: 11, color: "var(--on-surface-var)" }}>{b.label}</span>
            <span style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 700, color: b.color || "var(--primary)" }}>{b.value}</span>
          </div>
          <div style={{ height: 5, background: "rgba(255,255,255,0.06)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${(parseFloat(b.value) / (b.max || 1)) * 100}%`,
              background: b.color || "var(--primary)",
              borderRadius: 2,
            }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ModalityTiles({ tiles }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
      {tiles.map((t) => (
        <div key={t.label} style={{
          padding: "12px 14px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 6,
        }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "var(--primary)", marginBottom: 3 }}>{t.label}</div>
          <div style={{ fontFamily: "Inter", fontSize: 11, color: "var(--outline)" }}>{t.sub}</div>
        </div>
      ))}
    </div>
  );
}

function PipelineFlow({ steps }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap" }}>
      {steps.map((step, i) => (
        <div key={step} style={{ display: "flex", alignItems: "center" }}>
          <div style={{
            padding: "6px 12px",
            background: "rgba(173,198,255,0.08)",
            border: "1px solid rgba(173,198,255,0.15)",
            borderRadius: 4,
            fontFamily: "Inter", fontSize: 11, fontWeight: 600,
            color: "var(--primary)",
            whiteSpace: "nowrap",
          }}>{step}</div>
          {i < steps.length - 1 && (
            <div style={{
              width: 24, height: 1,
              background: "rgba(173,198,255,0.2)",
              flexShrink: 0,
              position: "relative",
            }}>
              <div style={{
                position: "absolute", right: -3, top: -3,
                width: 0, height: 0,
                borderLeft: "5px solid rgba(173,198,255,0.4)",
                borderTop: "3px solid transparent",
                borderBottom: "3px solid transparent",
              }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ModelCompare({ models }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {models.map((m) => (
        <div key={m.name} style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "10px 14px",
          background: m.best ? "rgba(173,198,255,0.07)" : "rgba(255,255,255,0.02)",
          border: `1px solid ${m.best ? "rgba(173,198,255,0.2)" : "rgba(255,255,255,0.05)"}`,
          borderRadius: 6,
        }}>
          <span style={{
            fontFamily: "Inter", fontSize: 12, fontWeight: 700,
            color: m.best ? "var(--primary)" : "var(--outline)",
            minWidth: 80,
          }}>{m.name}</span>
          <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 2, overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${m.f1 * 100}%`,
              background: m.best ? "var(--primary)" : "var(--outline-var)",
              borderRadius: 2,
            }} />
          </div>
          <span style={{
            fontFamily: "Inter", fontSize: 11, fontWeight: 700,
            color: m.best ? "var(--primary)" : "var(--on-surface-var)",
            minWidth: 40, textAlign: "right",
          }}>F1 {m.f1.toFixed(2)}</span>
          {m.best && <span style={{
            fontFamily: "Inter", fontSize: 9, fontWeight: 700,
            color: "var(--secondary)", letterSpacing: "0.08em", textTransform: "uppercase",
          }}>Best</span>}
        </div>
      ))}
    </div>
  );
}

/* ── Projects data ── */
const projectCards = [
  {
    id: "bmigap",
    chips: [{ label: "FEDERATED", color: "primary" }, { label: "EPIDEMIOLOGY", color: "teal" }],
    title: "BMIgap — Federated BMI Discrepancy Analysis",
    description: "Cross-European federated analysis of discrepancies between self-reported and measured BMI across 11 cohort sites. Federated linear mixed-effects models using DataSHIELD/OPAL without raw data leaving each site.",
    github: "https://github.com/adyasha-khuntia/bmigap",
    viz: (
      <div>
        <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
          {[
            { val: "1,504", label: "Participants" },
            { val: "559", label: "With Measurements" },
            { val: "2.75 kg", label: "Mean BMI Gap" },
          ].map(({ val, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Space Grotesk'", fontSize: 22, fontWeight: 700, color: "var(--primary)", lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: "Inter", fontSize: 10, color: "var(--outline)", marginTop: 3 }}>{label}</div>
            </div>
          ))}
        </div>
        <PipelineFlow steps={["Ingest", "Harmonise", "Federated LME", "Aggregate", "Report"]} />
      </div>
    ),
  },
  {
    id: "ecnp-nnadr",
    chips: [{ label: "INFRASTRUCTURE", color: "teal" }, { label: "NEUROLOGICAL", color: "primary" }],
    title: "ECNP-NNADR Federated Infrastructure",
    description: "Pan-European federated data network for neurological research spanning 11 institutions. Built privacy-preserving analysis pipelines, automated data harmonisation, and a FAIR-compliant metadata registry using OPAL and DataSHIELD.",
    github: "https://github.com/adyasha-khuntia/ecnp-nnadr",
    viz: (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
        {[
          { letter: "F", label: "Findable", detail: "Metadata & DOI" },
          { letter: "A", label: "Accessible", detail: "Open protocols" },
          { letter: "I", label: "Interoperable", detail: "Common vocab" },
          { letter: "R", label: "Reusable", detail: "Provenance" },
        ].map((f) => (
          <div key={f.letter} style={{
            textAlign: "center", padding: "12px 8px",
            background: "rgba(79,219,200,0.07)",
            border: "1px solid rgba(79,219,200,0.15)",
            borderRadius: 6,
          }}>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 20, fontWeight: 700, color: "var(--secondary)" }}>{f.letter}</div>
            <div style={{ fontFamily: "Inter", fontSize: 10, fontWeight: 700, color: "var(--on-surface)", marginBottom: 2 }}>{f.label}</div>
            <div style={{ fontFamily: "Inter", fontSize: 9, color: "var(--outline)" }}>{f.detail}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "clinical-bert",
    chips: [{ label: "NLP", color: "primary" }, { label: "EHR", color: "teal" }],
    title: "Clinical NLP — BERT for EHR Entity Extraction",
    description: "Fine-tuned transformer models (BERT, RoBERTa, DistilBERT) for structured information extraction from unstructured clinical notes. Deployed as a FastAPI microservice with batch-inference support and GDPR-compliant logging.",
    github: "https://github.com/adyasha-khuntia/clinical-bert",
    viz: (
      <ModelCompare models={[
        { name: "RoBERTa", f1: 0.89, best: true },
        { name: "ClinicalBERT", f1: 0.86, best: false },
        { name: "DistilBERT", f1: 0.81, best: false },
        { name: "BERT-base", f1: 0.78, best: false },
      ]} />
    ),
  },
  {
    id: "normative-modeling",
    chips: [{ label: "ML", color: "primary" }, { label: "NEUROSCIENCE", color: "purple" }],
    title: "Normative Modelling of Neurocognitive Trajectories",
    description: "Hierarchical Bayesian normative models trained on multi-site neuroimaging data to characterise deviation from expected cognitive trajectories. Achieves R²=0.80 on held-out European cohorts with site-effect harmonisation via ComBat.",
    github: "https://github.com/adyasha-khuntia/normative-modeling",
    viz: (
      <div>
        <div style={{ display: "flex", gap: 32, marginBottom: 16 }}>
          <div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 28, fontWeight: 700, color: "#c4a7ff", lineHeight: 1 }}>R² 0.80</div>
            <div style={{ fontFamily: "Inter", fontSize: 10, color: "var(--outline)", marginTop: 3 }}>Held-out cohort</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: 28, fontWeight: 700, color: "var(--secondary)", lineHeight: 1 }}>±1.4σ</div>
            <div style={{ fontFamily: "Inter", fontSize: 10, color: "var(--outline)", marginTop: 3 }}>Deviation range</div>
          </div>
        </div>
        <BarChart bars={[
          { label: "Memory composite", value: "0.83", max: 1, color: "#c4a7ff" },
          { label: "Executive function", value: "0.79", max: 1, color: "#c4a7ff" },
          { label: "Processing speed", value: "0.76", max: 1, color: "#c4a7ff" },
        ]} />
      </div>
    ),
  },
  {
    id: "ml-benchmarking",
    chips: [{ label: "BENCHMARKING", color: "teal" }, { label: "CLINICAL ML", color: "primary" }],
    title: "Multi-Site ML Benchmarking Framework",
    description: "Systematic benchmarking of classical and deep ML classifiers across federated clinical datasets. Compares federated vs centralised performance, quantifying the privacy-utility trade-off across 11 sites and 6 model families.",
    github: "https://github.com/adyasha-khuntia/agentic-automation",
    viz: (
      <BarChart bars={[
        { label: "Federated GBM (ROC-AUC)", value: "0.670", max: 1, color: "var(--primary)" },
        { label: "Federated GBM (Bal. Acc.)", value: "0.627", max: 1, color: "var(--secondary)" },
        { label: "Centralised XGBoost (AUC)", value: "0.712", max: 1, color: "rgba(173,198,255,0.5)" },
        { label: "Privacy cost (Δ AUC)", value: "0.042", max: 0.1, color: "#c4a7ff" },
      ]} />
    ),
  },
  {
    id: "injury-prediction",
    chips: [{ label: "SPORTS SCIENCE", color: "teal" }, { label: "ML", color: "primary" }],
    title: "Sports Injury Risk Prediction",
    description: "ML pipeline for prospective injury risk classification using wearable sensor data, training load metrics, and biomechanical features. Gradient boosting ensemble achieves 0.76 AUC with SHAP-based explainability for sports medicine teams.",
    github: "https://github.com/adyasha-khuntia/injury-prediction",
    viz: (
      <div>
        <div style={{ marginBottom: 14 }}>
          <ModalityTiles tiles={[
            { label: "Wearable IMU", sub: "acceleration + gyro" },
            { label: "Training Load", sub: "ACWR & RPE metrics" },
            { label: "Biomechanics", sub: "force plate & gait" },
            { label: "SHAP Output", sub: "explainability layer" },
          ]} />
        </div>
        <div style={{ fontFamily: "Inter", fontSize: 11, color: "var(--outline)" }}>
          AUC <span style={{ color: "var(--primary)", fontWeight: 700 }}>0.76</span> · Sensitivity <span style={{ color: "var(--secondary)", fontWeight: 700 }}>0.81</span> · Specificity <span style={{ color: "#c4a7ff", fontWeight: 700 }}>0.72</span>
        </div>
      </div>
    ),
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="glass-card"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.1 }}
      style={{
        borderRadius: 12,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
      }}
    >
      {/* Text side */}
      <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {project.chips.map((c) => <Chip key={c.label} color={c.color}>{c.label}</Chip>)}
          </div>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 22, fontWeight: 700,
            color: "var(--on-surface)",
            margin: "0 0 14px",
            lineHeight: 1.3,
          }}>{project.title}</h3>
          <p style={{
            fontFamily: "Inter", fontSize: 14, lineHeight: 1.7,
            color: "var(--on-surface-var)", margin: "0 0 24px",
          }}>{project.description}</p>
        </div>
        <GitHubLink href={project.github} />
      </div>

      {/* Viz side */}
      <div style={{
        padding: "36px 40px",
        background: "rgba(255,255,255,0.015)",
        borderLeft: "1px solid rgba(255,255,255,0.06)",
        display: "flex", flexDirection: "column", justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "Inter", fontSize: 10, fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--outline)", marginBottom: 20, marginTop: 0,
        }}>Key Metrics</p>
        {project.viz}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" style={{ padding: "128px 64px", background: "var(--surface-lowest)" }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}
        >
          <div>
            <p style={{
              fontFamily: "Inter", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--secondary)", marginBottom: 12,
            }}>Work</p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700, letterSpacing: "-0.03em",
              color: "var(--on-surface)", margin: 0,
            }}>Research Projects</h2>
          </div>
          <a
            href="https://github.com/adyasha-khuntia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "Inter", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--primary)", textDecoration: "none",
            }}
            onMouseEnter={(e) => e.currentTarget.style.textDecoration = "underline"}
            onMouseLeave={(e) => e.currentTarget.style.textDecoration = "none"}
          >
            <GithubIcon size={14} /> All Repos →
          </a>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {projectCards.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects { padding: 80px 24px !important; }
          #projects .glass-card { grid-template-columns: 1fr !important; }
          #projects .glass-card > div:last-child { border-left: none !important; border-top: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  );
}
