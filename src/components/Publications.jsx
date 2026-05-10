import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { publications } from "../data/publications";

function PubRow({ pub, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 24,
        padding: "28px 0",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ flex: 1 }}>
        {/* Badges row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
          {pub.firstAuthor && (
            <span style={{
              background: "rgba(173,198,255,0.12)",
              color: "var(--primary)",
              padding: "3px 10px", borderRadius: 4,
              fontFamily: "Inter", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>First Author</span>
          )}
          <span style={{
            fontFamily: "Inter", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.05em", color: "var(--on-surface-var)",
          }}>{pub.year}</span>
        </div>

        <h4 style={{
          fontFamily: "Inter", fontSize: 16, fontWeight: 600, lineHeight: 1.5,
          color: "var(--on-surface)", margin: "0 0 6px",
        }}>{pub.title}</h4>

        <p style={{
          fontFamily: "Inter", fontSize: 13, lineHeight: 1.5,
          color: "var(--on-surface-var)", margin: 0,
        }}>
          <em>{pub.journal}</em>
          <span style={{ margin: "0 8px", color: "var(--outline-var)" }}>·</span>
          {pub.authors}
        </p>
      </div>

      <a
        href={pub.doi}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flexShrink: 0,
          fontFamily: "Inter", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--secondary)", textDecoration: "none",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
        onMouseLeave={(e) => e.target.style.textDecoration = "none"}
      >
        VIEW DOI
      </a>
    </motion.div>
  );
}

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const firstAuthorCount = publications.filter((p) => p.firstAuthor).length;

  return (
    <section id="publications" style={{ padding: "128px 64px", background: "var(--surface-low)" }}>
      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <p style={{
            fontFamily: "Inter", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--secondary)", marginBottom: 12,
          }}>Research</p>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700, letterSpacing: "-0.02em",
            color: "var(--on-surface)", margin: "0 0 12px",
          }}>Academic Publications</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <p style={{ fontFamily: "Inter", fontSize: 15, color: "var(--on-surface-var)", margin: 0 }}>
              {publications.length}+ peer-reviewed papers · {firstAuthorCount} as first author
            </p>
            <a
              href="https://scholar.google.com/citations?user=adyasha-khuntia"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "7px 18px", borderRadius: 9999,
                border: "1px solid rgba(173,198,255,0.2)",
                background: "rgba(173,198,255,0.06)",
                fontFamily: "Inter", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.07em", textTransform: "uppercase",
                color: "var(--primary)", textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(173,198,255,0.12)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(173,198,255,0.06)"}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5h3.6v8.4h3.6V9.5h1.8l3 3V24h6V12.5l3-3H24L12 0z"/>
              </svg>
              Google Scholar
            </a>
          </div>
        </motion.div>

        <div>
          {publications.map((pub, i) => (
            <PubRow key={pub.id} pub={pub} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          style={{
            fontFamily: "Inter", fontSize: 11, color: "var(--outline-var)",
            textAlign: "center", marginTop: 32,
          }}
        >
          DOI links are placeholders — update real DOIs in{" "}
          <code style={{ color: "var(--outline)", background: "rgba(255,255,255,0.05)", padding: "2px 6px", borderRadius: 4 }}>
            src/data/publications.js
          </code>
        </motion.p>
      </div>

      <style>{`
        #publications { --surface-low: #1c1b1b; }
        @media (max-width: 768px) {
          #publications { padding: 80px 24px !important; }
          #publications .pub-row { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
