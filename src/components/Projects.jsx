import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// Abstract gradient images for project cards (replace with real screenshots later)
const projectGradients = [
  "linear-gradient(135deg, #0a0a1a 0%, #001a41 40%, #003380 70%, rgba(77,142,254,0.3) 100%)",
  "linear-gradient(135deg, #0a1a18 0%, #003731 40%, #005048 70%, rgba(79,219,200,0.3) 100%)",
];

function ProjectVisual({ gradient, title }) {
  return (
    <div style={{
      width: "100%", height: "100%", minHeight: 240,
      background: gradient,
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* Circuit dots overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(173,198,255,0.08) 1px, transparent 0)",
        backgroundSize: "30px 30px",
      }} />
      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(173,198,255,0.12) 0%, transparent 65%)",
      }} />
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [featured1, featured2, ...rest] = projects;

  return (
    <section id="projects" style={{ padding: "128px 64px", background: "var(--bg)" }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}
        >
          <div>
            <p style={{
              fontFamily: "Inter", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--secondary)", marginBottom: 12,
            }}>Work</p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 700, letterSpacing: "-0.02em",
              color: "var(--on-surface)", margin: 0,
            }}>Selected Research</h2>
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
              transition: "gap 0.2s",
            }}
          >
            VIEW ALL PROJECTS →
          </a>
        </motion.div>

        {/* 12-col grid — two featured cards */}
        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 20, marginBottom: 20 }}>

          {/* Big featured card */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ borderRadius: 8, overflow: "hidden", cursor: "default" }}
          >
            <div style={{ height: 260, overflow: "hidden" }}>
              <ProjectVisual gradient={projectGradients[0]} title={featured1?.title} />
            </div>
            <div style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={chipStyle}>FEDERATED</span>
                <span style={chipStyle}>CLINICAL</span>
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22, fontWeight: 600,
                color: "var(--on-surface)", margin: "0 0 8px",
              }}>{featured1?.title}</h3>
              <p style={{ fontFamily: "Inter", fontSize: 14, lineHeight: 1.6, color: "var(--on-surface-var)", margin: "0 0 16px" }}>
                {featured1?.description}
              </p>
              <ProjectLinks project={featured1} />
            </div>
          </motion.div>

          {/* Second featured card */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{ borderRadius: 8, overflow: "hidden", cursor: "default" }}
          >
            <div style={{ height: 260, overflow: "hidden" }}>
              <ProjectVisual gradient={projectGradients[1]} title={featured2?.title} />
            </div>
            <div style={{ padding: "28px 32px" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                <span style={chipStyle}>INFRASTRUCTURE</span>
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22, fontWeight: 600,
                color: "var(--on-surface)", margin: "0 0 8px",
              }}>{featured2?.title}</h3>
              <p style={{ fontFamily: "Inter", fontSize: 14, lineHeight: 1.6, color: "var(--on-surface-var)", margin: "0 0 16px" }}>
                {featured2?.description}
              </p>
              <ProjectLinks project={featured2} />
            </div>
          </motion.div>
        </div>

        {/* Three smaller cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              style={{ padding: 28, borderRadius: 8, cursor: "default" }}
            >
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 17, fontWeight: 600,
                color: "var(--on-surface)", margin: "0 0 8px",
              }}>{project.title}</h3>
              <p style={{
                fontFamily: "Inter", fontSize: 13, lineHeight: 1.6,
                color: "var(--on-surface-var)", margin: "0 0 16px",
              }}>{project.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                {project.tags.slice(0, 3).map((t) => (
                  <span key={t} style={{
                    fontFamily: "Inter", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: "var(--primary)",
                  }}>{t}</span>
                ))}
              </div>
              <ProjectLinks project={project} small />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects > div > div:nth-child(2),
          #projects > div > div:nth-child(3) { grid-template-columns: 1fr !important; }
          #projects { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}

const chipStyle = {
  background: "rgba(79,219,200,0.15)",
  color: "var(--secondary)",
  padding: "3px 10px",
  borderRadius: 9999,
  fontFamily: "Inter", fontSize: 10, fontWeight: 700,
  letterSpacing: "0.08em", textTransform: "uppercase",
};

function ProjectLinks({ project, small }) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      {project?.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--outline)", textDecoration: "none", fontFamily: "Inter", fontSize: small ? 11 : 12, fontWeight: 600, transition: "color 0.2s" }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--on-surface)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--outline)"}
        >
          <GithubIcon size={12} /> GitHub
        </a>
      )}
      <span style={{ fontFamily: "Inter", fontSize: small ? 11 : 12, color: "var(--outline-var)" }}>
        <ExternalLink size={11} style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }} />
        Demo soon
      </span>
    </div>
  );
}
