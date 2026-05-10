import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const [photoHovered, setPhotoHovered] = useState(false);
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--bg)",
        padding: "0 64px",
      }}
    >
      {/* Circuit dot texture */}
      <div className="circuit-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

      {/* Radial glow left */}
      <div style={{
        position: "absolute", top: "30%", left: "10%",
        width: 700, height: 700,
        background: "radial-gradient(circle, rgba(173,198,255,0.07) 0%, transparent 65%)",
        transform: "translate(-30%, -30%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Bottom fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 220, zIndex: 2,
        background: "linear-gradient(to top, var(--bg), transparent)",
        pointerEvents: "none",
      }} />

      {/* 2-col grid */}
      <div style={{
        position: "relative", zIndex: 10,
        maxWidth: 1280, margin: "0 auto", width: "100%",
        display: "grid", gridTemplateColumns: "1fr auto",
        gap: 80, alignItems: "center",
        paddingTop: 100,
      }}>

        {/* ── Left: Text ── */}
        <div>
          {/* Name */}
          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(44px, 6vw, 76px)",
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

          {/* Role */}
          <motion.p
            {...fadeUp(0.3)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 600,
              color: "var(--secondary)",
              letterSpacing: "-0.01em",
              margin: "0 0 18px",
            }}
          >
            Clinical AI Researcher &amp; ML Engineer
          </motion.p>

          <motion.p
            {...fadeUp(0.4)}
            style={{
              fontFamily: "Inter",
              fontSize: 17,
              lineHeight: 1.75,
              color: "var(--on-surface-var)",
              maxWidth: 520,
              margin: "0 0 44px",
            }}
          >
            Building privacy-preserving federated systems, clinical NLP pipelines,
            and ML infrastructure across 11 European research sites. Turning complex
            neural architectures into actionable medical insights.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
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
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 32px rgba(173,198,255,0.45)";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Explore My Work
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              style={{
                background: "transparent",
                color: "var(--secondary)",
                border: "1px solid rgba(79,219,200,0.4)",
                cursor: "pointer",
                padding: "16px 36px",
                borderRadius: 9999,
                fontFamily: "Inter", fontSize: 13, fontWeight: 700,
                letterSpacing: "0.05em", textTransform: "uppercase",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(79,219,200,0.08)";
                e.currentTarget.style.borderColor = "rgba(79,219,200,0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(79,219,200,0.4)";
              }}
            >
              Work With Me
            </button>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            {...fadeUp(0.6)}
            style={{
              display: "flex", gap: 40, marginTop: 56,
              paddingTop: 40,
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { value: "6+", label: "Years Experience" },
              { value: "10+", label: "Publications" },
              { value: "11", label: "EU Research Sites" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 32, fontWeight: 700,
                  color: "var(--primary)", lineHeight: 1,
                  marginBottom: 4,
                }}>{value}</div>
                <div style={{
                  fontFamily: "Inter", fontSize: 12, fontWeight: 500,
                  color: "var(--on-surface-var)",
                }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Circular Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", flexShrink: 0 }}
          className="hero-photo-wrap"
        >
          {/* Pulsing glow ring */}
          <div style={{
            position: "absolute",
            inset: -20,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(173,198,255,0.18) 0%, transparent 70%)",
            animation: "glowPulse 3s ease-in-out infinite",
            zIndex: 0,
          }} />

          {/* Outer decorative ring */}
          <div style={{
            position: "absolute",
            inset: -6,
            borderRadius: "50%",
            border: "1px solid rgba(173,198,255,0.25)",
            zIndex: 1,
          }} />

          {/* Photo circle */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: 400,
              height: 400,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--primary)",
              cursor: "default",
            }}
            onMouseEnter={() => setPhotoHovered(true)}
            onMouseLeave={() => setPhotoHovered(false)}
          >
            <img
              src="/photo.jpg"
              alt="Adyasha Khuntia"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: photoHovered ? "grayscale(0) brightness(1)" : "grayscale(0.4) brightness(0.92)",
                transition: "filter 0.5s ease",
              }}
            />
          </div>

        </motion.div>

      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.9); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        @media (max-width: 900px) {
          #hero { padding: 0 24px !important; }
          #hero > div > div:first-child > div { grid-template-columns: 1fr !important; }
          .hero-photo-wrap { display: none; }
          #hero > div > div { grid-template-columns: 1fr !important; gap: 40px !important; padding-top: 80px !important; }
        }
      `}</style>
    </section>
  );
}
