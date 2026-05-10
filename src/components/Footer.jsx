const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adyasha-khuntia" },
  { label: "GitHub", href: "https://github.com/adyasha-khuntia" },
  { label: "Scholar", href: "https://scholar.google.com/citations?user=adyasha-khuntia" },
];

export default function Footer() {
  return (
    <footer style={{
      background: "var(--surface-lowest)",
      padding: "48px 64px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexWrap: "wrap",
        justifyContent: "space-between", alignItems: "center",
        gap: 24,
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 20, fontWeight: 700,
          color: "var(--on-surface)",
        }}>
          adyasha<span style={{ color: "var(--primary)" }}>.dev</span>
        </span>

        <p style={{
          fontFamily: "Inter", fontSize: 13,
          color: "var(--on-surface-var)",
          margin: 0, textAlign: "center",
        }}>
          © {new Date().getFullYear()} Dr. Adyasha Khuntia. Built for Clinical AI Excellence.
        </p>

        <div style={{ display: "flex", gap: 28 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Inter", fontSize: 13,
                color: "var(--on-surface-var)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.color = "var(--primary)"}
              onMouseLeave={(e) => e.target.style.color = "var(--on-surface-var)"}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div { flex-direction: column; text-align: center; padding: 0 24px; }
          footer { padding: 40px 24px !important; }
        }
      `}</style>
    </footer>
  );
}
