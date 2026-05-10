import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const institutions = ["LMU Munich", "Max Planck", "UFES", "ECNP", "Charité Berlin", "UPenn"];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "56px 64px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background: "var(--surface)",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <p style={{
          fontFamily: "Inter", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--outline)", textAlign: "center", marginBottom: 32,
        }}>
          Research Affiliations
        </p>
        <div
          style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", alignItems: "center",
            gap: 48,
            opacity: 0.45,
            filter: "grayscale(1)",
            transition: "opacity 0.5s, filter 0.5s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = "grayscale(0)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.45; e.currentTarget.style.filter = "grayscale(1)"; }}
        >
          {institutions.map((inst) => (
            <span key={inst} style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              fontWeight: 700,
              color: "var(--on-surface)",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
            }}>
              {inst}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          #trust { padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  );
}
