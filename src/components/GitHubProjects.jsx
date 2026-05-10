/**
 * GitHubProjects — automatically shows live repos from github.com/adyasha-khuntia.
 * New repos appear here without any code changes — they're fetched from the GitHub API.
 */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useGitHubRepos } from "../hooks/useGitHubRepos";

const LANGUAGE_COLORS = {
  Python: "#3776AB",
  R: "#276DC3",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Jupyter: "#F37626",
  Shell: "#89e051",
  HTML: "#e34c26",
};

function LanguageDot({ lang }) {
  const color = LANGUAGE_COLORS[lang] || "var(--outline)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
      <span style={{ fontFamily: "Inter", fontSize: 11, color: "var(--on-surface-var)" }}>{lang}</span>
    </span>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function RepoCard({ repo, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const updatedAt = new Date(repo.updated_at);
  const timeAgo = (() => {
    const diff = Date.now() - updatedAt.getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 30) return `${days}d ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months}mo ago`;
    return `${Math.floor(months / 12)}y ago`;
  })();

  return (
    <motion.a
      ref={ref}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      style={{
        display: "block",
        borderRadius: 10,
        padding: "24px 28px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s",
      }}
      whileHover={{ y: -3 }}
    >
      {/* Repo name */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 16, fontWeight: 600,
          color: "var(--primary)",
          wordBreak: "break-word",
        }}>
          {repo.name}
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--outline)" strokeWidth="2" style={{ flexShrink: 0, marginLeft: 8, marginTop: 2 }}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "Inter", fontSize: 13, lineHeight: 1.6,
        color: "var(--on-surface-var)",
        margin: "0 0 16px",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        minHeight: 40,
      }}>
        {repo.description || "No description provided."}
      </p>

      {/* Topics */}
      {repo.topics?.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}>
          {repo.topics.slice(0, 4).map((t) => (
            <span key={t} style={{
              padding: "2px 8px",
              background: "rgba(173,198,255,0.08)",
              border: "1px solid rgba(173,198,255,0.12)",
              borderRadius: 3,
              fontFamily: "Inter", fontSize: 9, fontWeight: 700,
              color: "var(--primary)", letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}>{t}</span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {repo.language && <LanguageDot lang={repo.language} />}
        {repo.stargazers_count > 0 && (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--outline)", fontFamily: "Inter", fontSize: 11 }}>
            <StarIcon /> {repo.stargazers_count}
          </span>
        )}
        <span style={{ marginLeft: "auto", fontFamily: "Inter", fontSize: 10, color: "var(--outline-var)" }}>
          {timeAgo}
        </span>
      </div>
    </motion.a>
  );
}

export default function GitHubProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { repos, loading, error } = useGitHubRepos("adyasha-khuntia", 12);

  return (
    <section id="github-live" style={{ padding: "96px 64px", background: "var(--bg)", position: "relative" }}>
      <div style={{
        position: "absolute", bottom: 0, left: "50%",
        width: 600, height: 300,
        transform: "translateX(-50%)",
        background: "radial-gradient(ellipse, rgba(79,219,200,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}
        >
          <div>
            <p style={{
              fontFamily: "Inter", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--secondary)", marginBottom: 12,
            }}>Live from GitHub</p>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 700, letterSpacing: "-0.03em",
              color: "var(--on-surface)", margin: "0 0 8px",
            }}>Open Source Repos</h2>
            <p style={{
              fontFamily: "Inter", fontSize: 14,
              color: "var(--on-surface-var)", margin: 0,
            }}>
              Auto-synced · new repos appear here automatically
            </p>
          </div>

          <a
            href="https://github.com/adyasha-khuntia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 22px", borderRadius: 9999,
              border: "1px solid rgba(173,198,255,0.2)",
              background: "rgba(173,198,255,0.05)",
              fontFamily: "Inter", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "var(--primary)", textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(173,198,255,0.1)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(173,198,255,0.05)"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/adyasha-khuntia
          </a>
        </motion.div>

        {/* Content */}
        {loading && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="glass-card" style={{
                borderRadius: 10, padding: "24px 28px",
                animation: "shimmer 1.5s ease-in-out infinite",
              }}>
                <div style={{ height: 16, background: "rgba(255,255,255,0.06)", borderRadius: 3, marginBottom: 12, width: "60%" }} />
                <div style={{ height: 12, background: "rgba(255,255,255,0.04)", borderRadius: 3, marginBottom: 6 }} />
                <div style={{ height: 12, background: "rgba(255,255,255,0.04)", borderRadius: 3, width: "80%" }} />
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="glass-card" style={{
            borderRadius: 10, padding: "32px",
            textAlign: "center", borderColor: "rgba(255,100,100,0.15)",
          }}>
            <p style={{ fontFamily: "Inter", fontSize: 14, color: "var(--outline)", margin: "0 0 8px" }}>
              Couldn't load live repos right now.
            </p>
            <a href="https://github.com/adyasha-khuntia" target="_blank" rel="noopener noreferrer"
              style={{ color: "var(--primary)", fontFamily: "Inter", fontSize: 13, fontWeight: 600 }}>
              View on GitHub →
            </a>
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {repos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <p style={{ fontFamily: "Inter", fontSize: 14, color: "var(--outline)" }}>No public repos found yet.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @media (max-width: 900px) {
          #github-live { padding: 64px 24px !important; }
          #github-live > div > div:last-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #github-live > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
