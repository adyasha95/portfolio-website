import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg)",
      }}
    >
      {/* Circuit dot background */}
      <div className="circuit-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Large radial glow */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(173,198,255,0.07) 0%, transparent 70%)",
      }} />

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 200, zIndex: 2,
        background: "linear-gradient(to top, var(--bg), transparent)",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: 900, margin: "0 auto" }}>

        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "6px 16px", borderRadius: 9999,
            border: "1px solid rgba(173,198,255,0.2)",
            background: "rgba(173,198,255,0.06)",
            color: "var(--primary)",
            fontFamily: "Inter", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--secondary)", animation: "pulse 2s infinite" }} />
            Available for Consulting
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(48px, 8vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.04em",
            color: "var(--on-surface)",
            margin: "0 0 20px",
          }}
        >
          Adyasha Khuntia,{" "}
          <span style={{ color: "var(--primary)" }}>PhD</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.35)}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(18px, 3vw, 26px)",
            fontWeight: 600,
            color: "var(--on-surface-var)",
            letterSpacing: "-0.01em",
            margin: "0 0 16px",
          }}
        >
          Building AI that works in the real world of healthcare
        </motion.p>

        <motion.p
          {...fadeUp(0.45)}
          style={{
            fontFamily: "Inter",
            fontSize: 17,
            lineHeight: 1.7,
            color: "var(--outline)",
            maxWidth: 580,
            margin: "0 auto 44px",
          }}
        >
          PhD researcher &amp; ML engineer specialising in federated learning, clinical NLP,
          and privacy-preserving AI infrastructure across 11 European research sites.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("#projects")}
            style={{
              background: "var(--primary)",
              color: "var(--on-primary)",
              border: "none", cursor: "pointer",
              padding: "16px 36px",
              borderRadius: 9999,
              fontFamily: "Inter", fontSize: 13, fontWeight: 700,
              letterSpacing: "0.05em", textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.boxShadow = "0 0 28px rgba(173,198,255,0.4)"; e.target.style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { e.target.style.boxShadow = "none"; e.target.style.transform = "scale(1)"; }}
          >
            Explore My Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              background: "transparent",
              color: "var(--secondary)",
              border: "1px solid var(--secondary)",
              cursor: "pointer",
              padding: "16px 36px",
              borderRadius: 9999,
              fontFamily: "Inter", fontSize: 13, fontWeight: 700,
              letterSpacing: "0.05em", textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(79,219,200,0.08)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            Work With Me
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
